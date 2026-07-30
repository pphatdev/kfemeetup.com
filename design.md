# K'fe App Design System & Color Tokens

This document details the official color palette, design tokens, typography specifications, and theme key reference for **K'fe App**.

---

## 🔤 Typography & Font Family Specification

The application uses a multi-script font fallback strategy ensuring modern Latin typography alongside native Khmer script rendering:

| Script Type | Font Family Name | Fallbacks | Usage & Scope |
| :--- | :--- | :--- | :--- |
| **Latin Script** | **`Poppins`** | `Roboto`, `Open Sans`, `sans-serif` | English body text, UI labels, buttons, numbers & forms |
| **Complex Script (Khmer)** | **`Kantumruy Pro`** | `Noto Serif Khmer`, `sans-serif` | Khmer language headlines, descriptions & community copy |

### CSS Font Stack Definition
```css
:root {
  --font-sans: "Poppins", "Kantumruy Pro", "Roboto", "Open Sans", sans-serif;
}
```

---

## 🎨 Color Palette & Theme Keys

The design system uses HSL-based CSS custom properties integrated into Tailwind CSS v4. Below is the reference table for the core color tokens:

| Token Key | HSL Value | Hex Equivalent | Description & Typical Usage |
| :--- | :--- | :--- | :--- |
| **`background`** | `hsl(0, 0%, 100%)` | `#FFFFFF` | Default app/page background color |
| **`foreground`** | `hsl(240, 10%, 11%)` | `#19191D` | Default dark body text & high-contrast elements |
| **`primary`** | `hsl(29, 95%, 42%)` | `#D26500` | Warm coffee amber — main brand color for buttons, headings & active states |
| **`primary-foreground`** | `hsl(35, 100%, 94%)` | `#FFF3E2` | Warm cream — primary button text & card theme container background |
| **`primary-accent`** | `hsl(27, 100%, 55%)` | `#FF881A` | Vibrant amber highlight — active highlights, links & gradient endpoints |
| **`primary-linear`** | `linear-gradient(135deg, #F9810A, #A75400)` | `#F9810A` $\to$ `#A75400` | Brand linear gradient for action buttons & hero accents |
| **`secondary`** | `hsl(121, 100%, 28%)` | `#008F03` | Forest green — secondary badges, success indicators & accents |
| **`secondary-foreground`** | `hsl(35, 100%, 94%)` | `#FFF3E2` | Warm cream — text on secondary elements |
| **`secondary-accent`** | `hsl(121, 100%, 66%)` | `#52FF55` | Vibrant green accent |

---

## 📁 Related Design Assets & Components

- **Static SVG Preview Asset**: [`/public/theme-preview.svg`](file:///d:/Project/Sophat/labs/kfemeetup.com/public/theme-preview.svg)
- **Vue Showcase Component**: [`/app/components/ThemeTokensCard.vue`](file:///d:/Project/Sophat/labs/kfemeetup.com/app/components/ThemeTokensCard.vue)
- **CSS Variable Definitions**: [`/app/assets/css/tailwind.css`](file:///d:/Project/Sophat/labs/kfemeetup.com/app/assets/css/tailwind.css)

---

## 💻 Code Usage Examples

### 1. Vue / Nuxt Template (Tailwind Utility Classes)

```vue
<!-- Primary Button -->
<button class="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl hover:bg-primary-muted transition">
  Primary Action
</button>

<!-- Secondary Badge -->
<span class="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-lg">
  Secondary Badge
</span>

<!-- Gradient Feature Card -->
<div class="bg-primary-linear text-primary-foreground p-6 rounded-2xl">
  Featured Card Content
</div>
```

### 2. Standard CSS Variable Reference

```css
.my-card {
  font-family: var(--font-sans);
  background-color: hsl(var(--primary-foreground));
  color: hsl(var(--primary));
  border: 1px solid hsl(var(--primary) / 0.2);
}
```
