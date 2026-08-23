"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { LoaderCircle, Mail } from "lucide-react";

export interface SubscribeSectionProps {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function SubscribeSection({
  id,
  title,
  description,
  placeholder,
  buttonLabel,
  successMessage,
}: SubscribeSectionProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(result.message ?? successMessage);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[#111] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <Mail size={18} aria-hidden />
        </div>
        <h2 className="text-[28px] leading-tight font-bold">
          {title}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.6] text-[#d1d1d1]">
          {description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row"
          noValidate
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle" && status !== "loading") {
                setStatus("idle");
                setMessage("");
              }
            }}
            placeholder={placeholder}
            disabled={status === "loading"}
            className="h-10 flex-1 rounded-[4px] bg-white px-3 text-[15px] text-[#111] outline-none placeholder:text-[#767676] disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[4px] bg-white px-4 text-[14px] text-[#111] transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <LoaderCircle size={18} className="animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              buttonLabel
            )}
          </button>
        </form>

        <div
          className="mt-3 min-h-6 text-[13px]"
          role="status"
          aria-live="polite"
        >
          {message ? (
            <p
              className={
                status === "success" ? "text-emerald-300" : "text-rose-300"
              }
            >
              {message}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
