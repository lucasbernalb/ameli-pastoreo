export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  unit: string;
  gradient: string;
  badge?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Value {
  title: string;
  subtitle: string;
  gradient: string;
  icon: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon?: string;
  gradient: string;
  emoji?: string;
}

export interface GalleryImage {
  id: number;
  gradient: string;
  icon: string;
  alt: string;
}
