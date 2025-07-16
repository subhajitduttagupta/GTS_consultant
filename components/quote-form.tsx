"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Check, Send, FileText, Clock, Shield } from "lucide-react"

const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  position: z.string().min(2, "Position must be at least 2 characters"),

  // Project Information
  projectType: z.string({
    required_error: "Please select a project type",
  }),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectScope: z.string({
    required_error: "Please select project scope",
  }),
  budget: z.string({
    required_error: "Please select a budget range",
  }),
  timeline: z.string({
    required_error: "Please select a timeline",
  }),
  location: z.string().min(2, "Project location is required"),

  // Project Details
  projectDescription: z.string().min(50, "Please provide a detailed description (minimum 50 characters)"),
  specificRequirements: z.string().optional(),

  // Additional Information
  hasExistingSystem: z.string({
    required_error: "Please specify if you have existing systems",
  }),
  complianceRequirements: z.string().optional(),
  preferredContactMethod: z.string({
    required_error: "Please select preferred contact method",
  }),

  // Consent
  marketingConsent: z.boolean().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      services: [],
      location: "",
      projectDescription: "",
      specificRequirements: "",
      complianceRequirements: "",
      marketingConsent: false,
      termsAccepted: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const result = await res.json()
      setSubmitMessage(result.message)
      setSubmitSuccess(result.success)

      if (result.success) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch {
      setSubmitMessage("An unexpected error occurred. Please try again.")
      setSubmitSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    "Electrical Engineering Design",
    "Instrumentation & Control Systems",
    "Power System Analysis",
    "Project Management",
    "Commissioning & Testing",
    "Technical Consulting",
    "Smart Building Solutions",
    "Renewable Energy Systems",
  ]

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
            <CardContent className="p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quote Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">{submitMessage}</p>
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <span>We'll review your requirements within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Our experts will prepare a detailed proposal</span>
                  </div>
                  <div className="flex items-center">
                    <Send className="h-5 w-5 text-blue-600 mr-3" />
                    <span>You'll receive your customized quote via email</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setSubmitMessage("")
                  setSubmitSuccess(false)
                }}
                variant="outline"
                className="mr-4"
              >
                Submit Another Request
              </Button>
              <Button asChild>
                <a href="/">Return to Home</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-cyan-50/50"></div>

          <CardHeader className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8">
            <CardTitle className="text-3xl font-bold text-center">Request Your Custom Quote</CardTitle>
            <p className="text-center text-blue-100 mt-2">
              Fill out the form below and our experts will provide you with a detailed proposal
            </p>
          </CardHeader>

          <CardContent className="relative z-10 p-8">
            {submitMessage && !submitSuccess && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{submitMessage}</p>
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information Section */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      1
                    </div>
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-white/80" disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-white/80" disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john.doe@company.com"
                              {...field}
                              className="bg-white/80"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+91 98765 43210"
                              {...field}
                              className="bg-white/80"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Company Ltd."
                              {...field}
                              className="bg-white/80"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Position *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Project Manager"
                              {...field}
                              className="bg-white/80"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Project Information Section */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      2
                    </div>
                    Project Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                              <SelectTrigger className="bg-white/80">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="new-installation">New Installation</SelectItem>
                              <SelectItem value="upgrade">System Upgrade</SelectItem>
                              <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                              <SelectItem value="consulting">Consulting Services</SelectItem>
                              <SelectItem value="design-only">Design Only</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectScope"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Scope *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                              <SelectTrigger className="bg-white/80">
                                <SelectValue placeholder="Select project scope" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="small">Small (&lt; 1 month)</SelectItem>
                              <SelectItem value="medium">Medium (1-6 months)</SelectItem>
                              <SelectItem value="large">Large (6-12 months)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (&gt; 12 months)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                              <SelectTrigger className="bg-white/80">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                              <SelectItem value="50k-2l">₹50,000 - ₹2,00,000</SelectItem>
                              <SelectItem value="2l-10l">₹2,00,000 - ₹10,00,000</SelectItem>
                              <SelectItem value="10l-50l">₹10,00,000 - ₹50,00,000</SelectItem>
                              <SelectItem value="above-50l">Above ₹50,000,000</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Timeline *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                              <SelectTrigger className="bg-white/80">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-month">Within 1 month</SelectItem>
                              <SelectItem value="3-months">Within 3 months</SelectItem>
                              <SelectItem value="6-months">Within 6 months</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Project Location *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="City, State, Country"
                            {...field}
                            className="bg-white/80"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Services Section */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      3
                    </div>
                    Required Services
                  </h3>

                  <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                      <FormItem>
                        <FormLabel>Select all services you need *</FormLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                          {services.map((service) => (
                            <FormField
                              key={service}
                              control={form.control}
                              name="services"
                              render={({ field }) => {
                                return (
                                  <FormItem key={service} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(service)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, service])
                                            : field.onChange(field.value?.filter((value) => value !== service))
                                        }}
                                        disabled={isSubmitting}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">{service}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Project Details Section */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      4
                    </div>
                    Project Details
                  </h3>

                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Project Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide a detailed description of your project, including objectives, requirements, and any specific challenges you're facing..."
                            className="min-h-[120px] bg-white/80"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specificRequirements"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Specific Technical Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific technical requirements, standards, or compliance needs..."
                            className="min-h-[100px] bg-white/80"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasExistingSystem"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Do you have existing electrical/instrumentation systems? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                            disabled={isSubmitting}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="existing-yes" />
                              <Label htmlFor="existing-yes">Yes, we have existing systems</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="existing-no" />
                              <Label htmlFor="existing-no">No, this is a new installation</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="partial" id="existing-partial" />
                              <Label htmlFor="existing-partial">Partial systems in place</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Information Section */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      5
                    </div>
                    Additional Information
                  </h3>

                  <FormField
                    control={form.control}
                    name="complianceRequirements"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Compliance & Safety Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific compliance standards, safety requirements, or certifications needed..."
                            className="min-h-[80px] bg-white/80"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredContactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Contact Method *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                          <FormControl>
                            <SelectTrigger className="bg-white/80">
                              <SelectValue placeholder="How would you like us to contact you?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="video">Video Conference</SelectItem>
                            <SelectItem value="in-person">In-Person Meeting</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Consent Section */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-gray-600" />
                    Privacy & Consent
                  </h3>

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="marketingConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={isSubmitting} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I would like to receive updates about Globe Tek Solution's services and industry insights
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={isSubmitting} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>I accept the Terms & Conditions and Privacy Policy *</FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-3" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 mt-4">
                    Our team will review your request and get back to you within 24 hours
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default QuoteForm
