"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitQuoteForm(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const position = formData.get("position") as string
    const projectType = formData.get("projectType") as string
    const services = formData.getAll("services") as string[]
    const projectScope = formData.get("projectScope") as string
    const budget = formData.get("budget") as string
    const timeline = formData.get("timeline") as string
    const location = formData.get("location") as string
    const projectDescription = formData.get("projectDescription") as string
    const specificRequirements = formData.get("specificRequirements") as string
    const hasExistingSystem = formData.get("hasExistingSystem") as string
    const complianceRequirements = formData.get("complianceRequirements") as string
    const preferredContactMethod = formData.get("preferredContactMethod") as string
    const marketingConsent = formData.get("marketingConsent") === "true"

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !company ||
      !position ||
      !projectType ||
      services.length === 0 ||
      !projectScope ||
      !budget ||
      !timeline ||
      !location ||
      !projectDescription ||
      !hasExistingSystem ||
      !preferredContactMethod
    ) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Send email
    await resend.emails.send({
      from: "website@gtsconsultant.in",
      to: "contact@gtsconsultant.in",
      subject: `New Quote Request - ${projectType} from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <h1 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 15px;">
            New Quote Request Submission
          </h1>
          
          <!-- Personal Information -->
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">Personal Information</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Position:</strong> ${position}</p>
              <p><strong>Preferred Contact:</strong> ${preferredContactMethod}</p>
            </div>
          </div>
          
          <!-- Project Information -->
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">Project Information</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Project Scope:</strong> ${projectScope}</p>
              <p><strong>Budget Range:</strong> ${budget}</p>
              <p><strong>Timeline:</strong> ${timeline}</p>
              <p><strong>Location:</strong> ${location}</p>
              <p><strong>Existing Systems:</strong> ${hasExistingSystem}</p>
            </div>
          </div>
          
          <!-- Services Required -->
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">Required Services</h2>
            <ul style="margin: 0; padding-left: 20px;">
              ${services.map((service) => `<li>${service}</li>`).join("")}
            </ul>
          </div>
          
          <!-- Project Details -->
          <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">Project Description</h2>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${projectDescription}</p>
            
            ${
              specificRequirements
                ? `
              <h3 style="color: #1e40af;">Specific Requirements</h3>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${specificRequirements}</p>
            `
                : ""
            }
            
            ${
              complianceRequirements
                ? `
              <h3 style="color: #1e40af;">Compliance Requirements</h3>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${complianceRequirements}</p>
            `
                : ""
            }
          </div>
          
          <!-- Marketing Consent -->
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Marketing Consent:</strong> ${marketingConsent ? "Yes, wants to receive updates" : "No marketing emails"}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This quote request was submitted from gtsconsultant.in</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
            <p><strong>Priority:</strong> ${timeline === "asap" ? "HIGH - ASAP Request" : "Normal"}</p>
          </div>
        </div>
      `,
    })

    return {
      success: true,
      message:
        "Quote request submitted successfully! We'll review your requirements and get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Quote form error:", error)
    return {
      success: false,
      message: "Sorry, there was an error submitting your quote request. Please try again.",
    }
  }
}
