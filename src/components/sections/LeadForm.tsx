"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import type { LeadPayload } from "@/app/api/lead/route";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const t = useTranslations("cta.form");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const payload: LeadPayload = {
      name: String(formData.get("name") ?? ""),
      role: String(formData.get("role") ?? ""),
      school: String(formData.get("school") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      comment: String(formData.get("comment") ?? ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-green-50 p-6 text-center font-medium text-ink">
        {t("success")}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          name="name"
          label={t("name")}
          placeholder={t("namePlaceholder")}
          required
        />
        <Field
          id="role"
          name="role"
          label={t("role")}
          placeholder={t("rolePlaceholder")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="school"
          name="school"
          label={t("school")}
          placeholder={t("schoolPlaceholder")}
          required
        />
        <Field
          id="contact"
          name="contact"
          label={t("contact")}
          placeholder={t("contactPlaceholder")}
          required
        />
      </div>

      <div>
        <label htmlFor="comment" className="text-sm font-semibold text-ink">
          {t("comment")}
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={3}
          placeholder={t("commentPlaceholder")}
          className="mt-1.5 w-full resize-none rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-700"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-accent-rose">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-navy-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-700"
      />
    </div>
  );
}
