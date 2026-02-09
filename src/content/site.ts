// src/content/site.ts
export type SiteNavItem = { 
    label: string;
    href: string 
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;            
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: import.meta.env.SITE_NAME || "Axe Bow Fund",
  tagline: "A boring, production-ready Astro starter.",
  description:
    "Website for the Axe Bow Foundation",
  url: import.meta.env.SITE_URL ?? "https://www.tudelft.nl/me/over/afdelingen/maritime-and-transport-technology/research/wind-assisted-ship-propulsion",
  locale: "en",
  author: {
    name: "TU Delft WindThrust Research Program",
    email: "wasp-me@tudelft.com",
    url: "https://www.tudelft.nl/me/over/afdelingen/maritime-and-transport-technology/research/wind-assisted-ship-propulsion",
    socials: {
      linkedin: "https://www.linkedin.com/company/windthrust-tudelft/"
    }
  },
  nav: [
    { label: "Home", href: `${import.meta.env.BASE_URL}index` },
    { label: "About", href: `${import.meta.env.BASE_URL}about` },
    { label: "Contact", href: `${import.meta.env.BASE_URL}contact` },
    { label: "Projects", href: `${import.meta.env.BASE_URL}projects` }
  ],
  seo: {
    ogImage: `${import.meta.env.BASE_URL}images/logo-bbf.png`,
    robots: "index,follow",
    themeColor: "#fbfbf9"
  }
};
