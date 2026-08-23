import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

interface SubscribeBody {
  email?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: SubscribeBody;

  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!web3formsKey) {
    return NextResponse.json(
      { error: "Web3Forms is not configured. Add WEB3FORMS_ACCESS_KEY." },
      { status: 503 },
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error: dbError } = await supabase.from("subscribers").upsert(
      { email },
      {
        onConflict: "email",
        ignoreDuplicates: true,
      },
    );

    if (dbError) {
      console.error("Supabase insert failed:", dbError.message);
      return NextResponse.json(
        { error: "Could not save your email. Please try again." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Supabase configuration error:", error);
    return NextResponse.json(
      {
        error:
          "Database is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 503 },
    );
  }

  try {
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: "New Unsplash landing page subscription",
        from_name: "Unsplash Replica",
        email,
        message: `${email} subscribed to updates.`,
      }),
    });

    const web3formsResult = (await web3formsResponse.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!web3formsResponse.ok || !web3formsResult.success) {
      console.error("Web3Forms failed:", web3formsResult);
      return NextResponse.json(
        {
          error:
            web3formsResult.message ??
            "Email notification failed. Please try again.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Web3Forms request error:", error);
    return NextResponse.json(
      { error: "Could not reach Web3Forms. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks for subscribing!",
  });
}
