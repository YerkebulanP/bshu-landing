import { NextResponse } from "next/server";

export type LeadPayload = {
  name: string;
  role: string;
  school: string;
  contact: string;
  comment?: string;
};

async function submitLead(payload: LeadPayload) {
  // TODO: replace with a real integration (Resend, Formspree, CRM, ...).
  console.log("[lead] new demo request", payload);
  return { ok: true as const };
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<LeadPayload>;

  if (!body.name || !body.school || !body.contact) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const result = await submitLead({
    name: body.name,
    role: body.role ?? "",
    school: body.school,
    contact: body.contact,
    comment: body.comment,
  });

  return NextResponse.json(result);
}
