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
      className="scroll-mt-28 border-b border-black/6 bg-neutral-900 px-4 py-16 text-white sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <Mail size={22} aria-hidden />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
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
            className="h-12 flex-1 rounded-md border border-white/15 bg-white/95 px-4 text-sm text-neutral-900 outline-none transition-shadow placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-white disabled:opacity-70 sm:h-14 sm:text-base"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70 sm:h-14 sm:min-w-40 sm:text-base"
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
          className="mt-4 min-h-6 text-sm"
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
