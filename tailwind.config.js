/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#020817",
        primary: {
          DEFAULT: "#171717",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#171717",
        },
        muted: {
          DEFAULT: "#737373",
          foreground: "#404040",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#020817",
        },
        border: "#e5e5e5",
        ring: "#171717",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "custom-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
  // JIT mode
  mode: 'jit',
  // Purge unused styles
  purge: {
    enabled: true,
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
  }
}