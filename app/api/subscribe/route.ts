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
      const unreachable = /fetch failed|ENOTFOUND|getaddrinfo/i.test(
        dbError.message,
      );
      const missingTable = /Could not find the table/i.test(dbError.message);
      return NextResponse.json(
        {
          error: unreachable
            ? "Could not reach the database. Check SUPABASE_URL."
            : missingTable
              ? "Database table subscribers is missing. Run the SQL in Supabase."
              : "Could not save your email. Please try again.",
        },
        { status: unreachable || missingTable ? 503 : 500 },
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

  return NextResponse.json({
    success: true,
    message: "Thanks for subscribing!",
  });
}
