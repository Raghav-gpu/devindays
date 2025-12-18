import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().optional(),
  plan: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
