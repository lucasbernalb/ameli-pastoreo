const OFFSETS: Record<string, number> = {
  inicio: 0,
  sumate: -80,
  'contact-form': -80,
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = id in OFFSETS ? OFFSETS[id] : 100;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: 'smooth' });
};
