import { Metadata } from "next";

export const SiteConfig = {
  title: " Code With Rajesh",
  description:
    "Code With Rajesh offers tutorials on Three.js, React, Tailwind CSS, and Node.js. Simplifying web development for all skill levels with practical examples.",
};

export const commonPageMetadata: Metadata = {
  title:
    "Learn React, Node.js, Next.js & Tailwind with Hands-On Tutorials at CodeWithRajesh",
  description:
    "Learn React, Node.js, Next.js at CodeWithRajesh. Master full-stack development with hands-on tutorials, code examples, and best practices.",
  keywords:
    "React tutorials, Node.js guides,Next.js tutorials, Tailwind CSS tutorials, Full-stack development, Web development courses, JavaScript frameworks, Front-end development, Back-end development, Hands-on coding, Coding best practices, Software development tutorials, Build web applications, Modern web development, Learn JavaScript online",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
  openGraph: {
    title:
      "Learn React, Node.js, Next.js & Tailwind with Hands-On Tutorials at CodeWithRajesh",
    description:
      "Learn React, Node.js, Next.js at CodeWithRajesh. Master full-stack development with hands-on tutorials, code examples, and best practices.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "CodeWithRajesh",
  },
  robots: {
    index: true, // Set to false if you don't want search engines to index the page
    follow: true, // Allows search engines to follow links on the page
    "max-snippet": -1, // No limit on the number of characters in the snippet
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Learn React, Node.js, Next.js & Tailwind with Hands-On Tutorials at CodeWithRajesh",
    description:
      "Learn React, Node.js, Next.js at CodeWithRajesh. Master full-stack development with hands-on tutorials, code examples, and best practices.",
  },
};
