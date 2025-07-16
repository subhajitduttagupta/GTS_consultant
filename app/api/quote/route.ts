import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const QuoteSchema = z.object({
  // personal
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  position: z.string().min(2),
  // project info
  projectType: z.string(),
  services: z.array(z.string()).min(1),
  projectScope: z.string(),
  budget: z.string(),
  timeline: z.string(),
  location: z.string().min(2),
  // details
  projectDescription: z.string().min(50),
  specificRequirements: z.string().optional(),
  // extras
  hasExistingSystem: z.string(),
  complianceRequirements: z.string().optional(),
  preferredContactMethod: z.string(),
  marketingConsent: z.boolean().optional().default(false),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = QuoteSchema.parse(body)

    const html = `
      <h2>New quote request</h2>
      <h3>Contact</h3>
      <p>${data.firstName} ${data.lastName} &mdash; ${data.position} at ${data.company}</p>
      <p>Email: ${data.email}<br/>Phone: ${data.phone}</p>

      <h3>Project overview</h3>
      <p>Type: ${data.projectType}<br/>
         Scope: ${data.projectScope}<br/>
         Budget: ${data.budget}<br/>
         Timeline: ${data.timeline}<br/>
         Location: ${data.location}</p>

      <h3>Required services</h3>
      <ul>${data.services.map((s) => `<li>${s}</li>`).join("")}</ul>

      <h3>Description</h3>
      <p>${data.projectDescription.replace(/\n/g, "<br/>")}</p>

      ${
        data.specificRequirements
          ? `<h4>Specific requirements</h4><p>${data.specificRequirements.replace(/\n/g, "<br/>")}</p>`
          : ""
      }

      <h3>Additional info</h3>
      <p>Existing system: ${data.hasExistingSystem}</p>
      ${data.complianceRequirements ? `<p>Compliance: ${data.complianceRequirements}</p>` : ""}
      <p>Preferred contact: ${data.preferredContactMethod}</p>
      <p>Marketing consent: ${data.marketingConsent ? "Yes" : "No"}</p>
    `

    await resend.emails.send({
      from: "website@gtsconsultant.in",
      to: "contact@gtsconsultant.in",
      subject: `Quote request – ${data.company}`,
      html,
      reply_to: data.email,
    })

    return NextResponse.json({ success: true, message: "Your quote request has been submitted. Thank you!" })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false, message: "Unable to send quote. Please verify the form and try again." },
      { status: 400 },
    )
  }
}
