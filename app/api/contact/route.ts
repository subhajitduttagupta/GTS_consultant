import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(2),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = ContactSchema.parse(body)

    const html = `
      <h2>New contact enquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service of interest:</strong> ${data.service}</p>
      <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
    `

    await resend.emails.send({
      from: "website@gtsconsultant.in",
      to: "contact@gtsconsultant.in",
      subject: `Contact form – ${data.name}`,
      html,
      reply_to: data.email,
    })

    return NextResponse.json({ success: true, message: "Your message has been delivered. Thank you!" })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false, message: "Unable to send message. Please try again later." },
      { status: 400 },
    )
  }
}
