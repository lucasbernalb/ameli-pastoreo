# Project: Ameli Pastoreo Website

## Main Agent (Orchestrator)
You are the main AI agent responsible for building a production-ready website.

Responsibilities:
- Maintain clean architecture
- Ensure code quality
- Coordinate sub-agents
- Avoid dumping everything into App.jsx
- Ensure scalability and readability

---

## Structure Agent
Responsibilities:
- Create professional folder structure
- Split code into reusable components
- Organize files into:

src/
  components/
  sections/
  assets/

- Ensure App.jsx only composes sections

---

## UI Agent
Responsibilities:
- Implement design using Tailwind CSS
- Follow branding:
  - Natural, organic, premium
  - Colors: cream, yellow, green
- Add spacing, typography, and layout
- Ensure responsive design

---

## Content Agent
Responsibilities:
- Generate natural marketing text
- Use tone:
  - Friendly
  - Organic
  - Local business feel
- Use phrases like:
  - "Del campo a tu mesa"
  - "Producción natural"
  - "Hacemos la diferencia"

---

## Rules
- NEVER put all code inside App.jsx
- ALWAYS create reusable components
- Keep code clean and readable
- Think like a real production project