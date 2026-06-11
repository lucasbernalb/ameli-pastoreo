# EVENT VARIANTS REPORT

## Overview
Three visual mock‑ups were created to explore distinct design directions for the temporary event landing page.  All mock‑ups are **pure visual prototypes** (no state, no routing, no backend).  They share the same technical stack (React, Vite, TypeScript, Tailwind) and use the real Amelí brand assets located in `public/logo-ameli/`.

---

## Variant A – Natural Premium
**File**: `src/pages/MockA.tsx`

### Visual Direction
- Warm cream‑yellow background (`#F7F5EE`).
- Large horizontal logo centered.
- Headline in **Quincho Script** with brand yellow `#F7C665`.
- Soft‑rounded white form card with backdrop‑blur, rounded corners, light shadow.
- Minimal decorative elements; focus on warmth and artisanal feel.

### Strengths
- Instantly communicates “hand‑crafted, natural, premium”.
- Rounded UI and soft gradients match the brand’s farm‑friendly personality.
- Decorative script is used sparingly (logo & heading), respecting the typography rules.

### Weaknesses
- Visually close to the existing landing page (rounded card, soft gradients).
- May need stronger imagery to avoid looking like a simple copy of the current site.

### Brand Fit
High – aligns with *natural products*, *animal welfare*, and *premium quality* messaging.

---

## Variant B – Modern Farm
**File**: `src/pages/MockB.tsx`

### Visual Direction
- Clean, white‑dominant layout with subtle cream background.
- Hero headline in bold olive `#61705B` (sans‑serif, heavy weight).
- Two‑column layout: descriptive bullet list on the left, crisp white form card on the right.
- Minimal decorative flourishes; emphasis on whitespace and hierarchy.

### Strengths
- Very modern, professional, and easy to scan – good for corporate partners.
- Fast load (few images) and strong focus on the registration form.
- Clear visual separation between information and CTA.

### Weaknesses
- Loses the warm, rustic personality; may feel “sterile” for a family‑oriented brand.
- Relies heavily on copy to convey the brand story.

### Brand Fit
Medium – emphasizes *innovation* and *quality* but downplays the “natural farm” vibe.

---

## Variant C – Editorial Gourmet
**File**: `src/pages/MockC.tsx`

### Visual Direction
- Magazine‑style asymmetrical grid (text on the left, large image placeholder on the right).
- Headline in **Quincho Script** with deep green `#278759` for an upscale editorial feel.
- Floating glass‑like form card (`bg-white/95` with backdrop‑blur) and strong drop shadow.
- Rich copy that tells a sensory story.

### Strengths
- Strong storytelling potential; looks like a high‑end culinary feature.
- The glass‑like card feels premium and contemporary.
- Distinct visual hierarchy separates hero narrative from the CTA.

### Weaknesses
- More complex layout – requires careful mobile testing.
- Heavier visual assets could increase load time.
- May feel “high‑end” for a short‑term event if the audience expects a simpler, farm‑friendly vibe.

### Brand Fit
Medium‑High – highlights the *premium* aspect and can position Amelí as a *gourmet* choice, but needs supportive copy to keep the brand approachable.

---

## Recommendation
If the goal is to **reinforce the natural, artisanal story** while still looking fresh and premium, **Variant A (Natural Premium)** is the most aligned with Amelí’s core values.  It uses the brand colors and the real logo, applies Quincho Script only to decorative headings, and delivers a warm, trustworthy aesthetic that differentiates from the current site yet stays on‑brand.

If you prefer a **more corporate, conversion‑focused** experience, go with **Variant B**.  For a **high‑end, editorial storytelling** approach, choose **Variant C**.

---

### Next Steps (after you pick a variant)
1. Create a proper route (`/evento`, `/evento-a`, etc.) and replace the temporary mock component with a production‑ready page.
2. Extract reusable pieces (Hero, FormCard, Footer) into the `src/components/` folder.
3. Add any required responsive tweaks and accessibility attributes.
4. Run `npm run dev` and `npm run build` to verify no regressions.
5. Commit the final changes on the `redesign-2026` branch.

Feel free to let me know which direction you’d like to move forward with, and I’ll start turning the chosen mock‑up into a full implementation.
