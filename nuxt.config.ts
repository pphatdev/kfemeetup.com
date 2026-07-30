import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
        server: {
            watch: {
                usePolling: true,
                interval: 100
            },
            hmr: {
                clientPort: process.env.CLIENT_PORT ? parseInt(process.env.CLIENT_PORT) : 3000
            }
        }
    },
    app: {
        head: {
            title: "K'fe App",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content: "Helping developers connect, grow together, and build meaningful communities.",
                },
                { name: "theme-color", content: "#000000" },
                // Open Graph
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "K'fe App" },
                {
                    property: "og:title",
                    content: "K'fe App - Helping Developers Connect & Grow",
                },
                {
                    property: "og:description",
                    content: "Helping developers connect, grow together, and build meaningful communities.",
                },
                {
                    property: "og:image",
                    content: "https://github.com/user-attachments/assets/a44cca4d-9836-45e3-9caf-711db1942dcd",
                },
                // Twitter Card
                { name: "twitter:card", content: "summary_large_image" },
                {
                    name: "twitter:title",
                    content: "K'fe App - Helping Developers Connect & Grow",
                },
                {
                    name: "twitter:description",
                    content: "Helping developers connect, grow together, and build meaningful communities.",
                },
                {
                    name: "twitter:image",
                    content: "https://github.com/user-attachments/assets/a44cca4d-9836-45e3-9caf-711db1942dcd",
                },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "canonical", href: "https://kfemeetup.com" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&family=Noto+Serif+Khmer:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
                },
            ],
        },
    },
})
