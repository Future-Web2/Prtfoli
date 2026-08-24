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
- **Certificates** — CRTA · WEB-RTA · C3SA (+ 2 reserved slots for upcoming certs)
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
- **Certificates** — edit the `certificates` array. To fill a reserved slot, drop the
  image into `public/certificates/`, then set `image`, flip `placeholder` to `false`,
  set `verified: true`, and fill in the details.
- **Links** — update the `profile` object (GitHub, website, Telegram, email).

Certificate and profile images are served from [`public/`](public/).
