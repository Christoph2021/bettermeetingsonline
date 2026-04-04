

# Contact Form → Formspree Integration

## Overview
Wire the existing contact form to Formspree so submissions are forwarded directly to your email inbox. No backend code needed.

## How it works
1. You create a free account at [formspree.io](https://formspree.io) and set up a form endpoint (takes ~2 minutes). You'll get an endpoint ID like `xyzabcde`.
2. I update `src/pages/Contact.tsx` to POST the form data to `https://formspree.io/f/{your-id}` instead of just showing a toast.
3. On success, the user sees a thank-you message. On failure, an error toast appears.

## What changes
- **`src/pages/Contact.tsx`** — Replace the mock `handleSubmit` with a `fetch` POST to the Formspree endpoint. Add loading state and error handling.

## What you need to do
- Sign up at formspree.io (free tier: 50 submissions/month)
- Create a new form and copy the endpoint ID
- Share the endpoint ID with me so I can wire it in

No other files change. The form fields, layout, and styling stay the same.

