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

| # | Section | Contents |
|---|---------|----------|
| 001 | Profile | Positioning, working principles, languages |
| 002 | Services | Five engagement types with deliverables |
| 003 | Methodology | Six-phase engagement process + guarantees |
| 004 | Expertise | Offensive / Defensive / Engineering capability matrix |
| 005 | Experience & Education | Professional timeline and training track |
| 006 | Selected Work | Projects from [github.com/Future-Web2](https://github.com/Future-Web2) |
| 007 | Credentials | CRTA · WEB-RTA · C3SA · HPTC · Red-0 |
| 008 | Research | Published PoCs and write-ups |
| 009 | Contact | Engagement enquiry form |

## Design system

Tokens live in [`src/styles/design.css`](src/styles/design.css): near-black neutrals,
a single signal accent (`--sig`), and a severity scale (`--sev-*`) for domain colour.

> **Note:** the shadcn tokens in `theme.css` already define `--accent`, so this
> system deliberately namespaces its own accent as `--sig` to avoid the collision.

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
