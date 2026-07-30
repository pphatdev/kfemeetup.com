# Agent Rules & Guidelines

## Tailwind CSS Version Requirement

- **Tailwind CSS Version**: **v4+** is strictly required for this codebase.
- **Imports & Setup**:
  - Always use `@import "tailwindcss";` in stylesheet files.
  - Do **NOT** use legacy Tailwind CSS v3 directives (such as `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`).
  - Do **NOT** use legacy `tailwind.config.js` or `tailwind.config.ts` configuration files; use Tailwind v4 CSS directives (`@theme`, `@theme inline`, `@utility`, `@variant`, `@custom-variant`) directly in the CSS entry point ([app/assets/css/tailwind.css](file:///d:/Project/Sophat/labs/kfemeetup.com/app/assets/css/tailwind.css)).
- **Vite Integration**:
  - Use `@tailwindcss/vite` plugin in `nuxt.config.ts`.
