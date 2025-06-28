"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    whatsapp: "",
    plan: "",
    projectIdea: "",
    reference: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    alert("Thank you for your submission! We'll get back to you soon.")
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, reference: file }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get a Quote</h2>
          <p className="text-xl text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-brand-700">Project Details</CardTitle>
              <CardDescription>Fill out the form below and we'll prepare a custom quote for you</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-brand-300 focus:border-brand-400"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+91 93541 20990"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="border-brand-300 focus:border-brand-400"
                  />
                </div>

                <div>
                  <Label htmlFor="plan">Select a Plan *</Label>
                  <Select onValueChange={(value) => handleInputChange("plan", value)} required>
                    <SelectTrigger className="border-brand-300 focus:border-brand-400">
                      <SelectValue placeholder="Choose your plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mvp">MVP Launch - $799</SelectItem>
                      <SelectItem value="standard">Standard Build - $1,999</SelectItem>
                      <SelectItem value="custom">Custom Build - Quote-Based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="projectIdea">Project Idea / Brief *</Label>
                  <Textarea
                    id="projectIdea"
                    placeholder="Tell us about your app idea, target audience, key features, and any specific requirements..."
                    className="min-h-[120px] border-brand-300 focus:border-brand-400"
                    required
                    value={formData.projectIdea}
                    onChange={(e) => handleInputChange("projectIdea", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="reference">Upload Reference (Optional)</Label>
                  <Input
                    id="reference"
                    type="file"
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="border-brand-300 focus:border-brand-400"
                  />
                  <p className="text-sm text-gray-500 mt-1">Upload wireframes, designs, or reference materials</p>
                </div>

                <Button type="submit" className="w-full bg-brand-400 hover:bg-brand-500 text-white" size="lg">
                  Send Details
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* WhatsApp CTA */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-700">
                <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                Prefer chatting directly?
              </CardTitle>
              <CardDescription>Get instant responses on WhatsApp</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                onClick={() => window.open("https://wa.me/919354120990", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>

              <div className="mt-6 space-y-4 text-sm text-gray-600">
                <div>
                  <strong>Response Time:</strong>
                  <p>Within 2-4 hours during business hours</p>
                </div>
                <div>
                  <strong>What to expect:</strong>
                  <p>Quick project discussion, timeline, and next steps</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
