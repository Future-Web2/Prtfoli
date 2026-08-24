# Yusufbek — Portfolio

Personal portfolio of **Yusufbek** — Security Researcher, Red Team Analyst & Full-Stack Developer from Tashkent, Uzbekistan, building under the **Veranix Technology** banner.

Live site: **[veranix.xyz](https://veranix.xyz)** · GitHub: **[@Future-Web2](https://github.com/Future-Web2)**

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (build / dev server)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **lucide-react** (icons)

## Sections

- **Hero** — intro, animated role typewriter, Veranix branding
- **About** — story, experience, live stats
- **Skills** — offensive security, development, tooling & DevOps
- **Projects** — pulled from [github.com/Future-Web2](https://github.com/Future-Web2)
- **Certificates** — CRTA · WEB-RTA · C3SA · HPTC · Red-0
- **Contact** — links + message form

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
```

## Editing content

Most content lives in a single file: [`src/app/data.ts`](src/app/data.ts).

- **Projects** — edit the `projects` array.
- **Certificates** — edit the `certificates` array. To add one, drop the image into
  `public/certificates/`, then add an entry with `image` pointing at it. Setting
  `placeholder: true` instead renders a dashed "reserved slot" card for a cert
  you haven't received yet.
- **Links** — update the `profile` object (GitHub, website, Telegram, email).

Certificate and profile images are served from [`public/`](public/).
