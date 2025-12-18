# Next.js Starter Project

A complete Next.js setup with modern tools and best practices.

## Features

- **Framework**: Next.js 16 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (configured)
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend / Nodemailer support
- **Analytics**: PostHog / Google Analytics
- **Deployment**: Vercel ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with the following variables:

```env
# Email Configuration
# Choose: "resend" or "nodemailer"
EMAIL_PROVIDER=resend

# Resend API Key (if using Resend)
RESEND_API_KEY=re_your_api_key_here

# Nodemailer/SMTP Configuration (if using Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=noreply@example.com

# Contact Email
CONTACT_EMAIL=admin@example.com

# Analytics
# PostHog
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API endpoint
│   ├── layout.tsx         # Root layout with analytics
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components (add as needed)
│   ├── analytics-provider.tsx
│   └── contact-form.tsx   # Example form component
├── lib/                   # Utility functions
│   ├── analytics.ts      # PostHog & GA setup
│   ├── email.ts          # Email sending utilities
│   ├── utils.ts          # General utilities (cn function)
│   └── validations.ts    # Zod schemas
└── hooks/                # Custom React hooks
```

## Usage Examples

### Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
```

### Using Forms with Validation

See `components/contact-form.tsx` for a complete example using React Hook Form with Zod.

### Sending Emails

```typescript
import { sendEmailWithResend } from "@/lib/email";

await sendEmailWithResend({
  to: "user@example.com",
  subject: "Hello",
  html: "<h1>Hello World</h1>",
});
```

### Analytics Tracking

```typescript
import { usePostHog, useGA } from "@/lib/analytics";

const { capture } = usePostHog();
capture("event_name", { property: "value" });

const { event } = useGA();
event("click", "button", "submit");
```

## Deployment

This project is configured for Vercel deployment. Simply connect your GitHub repository to Vercel and deploy.

Make sure to add all environment variables in your Vercel project settings.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Resend](https://resend.com)
- [PostHog](https://posthog.com)
