import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { QuartzTransformerPlugin } from "../types"

export interface Options {
  marker: string
  limit: number
  heightPx: number
  columns: number
}

const defaultOptions: Options = {
  marker: "<!-- RECENT_UPDATES_AUTO -->",
  limit: 16,
  heightPx: 170,
  columns: 2,
}

type RecentItem = {
  title: string
  href: string
  date: string
  mtime: number
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function escapeHtml(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function collectMarkdownFiles(dir: string): string[] {
  const out: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...collectMarkdownFiles(fullPath))
      continue
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      out.push(fullPath)
    }
  }

  return out
}

function resolveContentDir(baseDir: string): string {
  const direct = baseDir
  const nested = path.join(baseDir, "content")

  if (fs.existsSync(nested) && fs.statSync(nested).isDirectory()) {
    return nested
  }

  return direct
}

function getRecentItems(contentDir: string, limit: number): RecentItem[] {
  const files = collectMarkdownFiles(contentDir)
    .filter((fp) => !fp.endsWith(`${path.sep}index.md`))
    .map((fp) => {
      const st = fs.statSync(fp)
      return { fp, mtime: st.mtimeMs }
    })
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, limit)

  return files.map(({ fp, mtime }) => {
    const raw = fs.readFileSync(fp, "utf-8")
    const parsed = matter(raw)
    const fallback = path.basename(fp, ".md")
    const title = String(parsed.data?.title ?? fallback)
    const rel = path.relative(contentDir, fp).split(path.sep).join("/")

    return {
      title,
      href: `./${rel}`,
      date: formatDate(new Date(mtime)),
      mtime,
    }
  })
}

function renderRecentUpdates(items: RecentItem[], opts: Options): string {
  const cards = items
    .map(
      (item) => `<a href="${escapeHtml(item.href)}" style="display: inline-block; width: 100%; margin: 0; padding: 0.56rem 0.62rem; background: var(--lightgray); border-radius: 8px; border-left: 3px solid var(--secondary); text-decoration: none; break-inside: avoid; box-sizing: border-box;">
    <div style="font-weight: 700; color: var(--dark); font-size: 0.88em; line-height: 1.28;">${escapeHtml(item.title)}</div>
    <div style="font-size: 0.76em; color: var(--darkgray); margin-top: 4px;">${item.date}</div>
</a>`,
    )
    .join("\n")

  return `<div style="height: ${opts.heightPx}px; overflow-y: auto; overflow-x: hidden; border: 1px solid var(--lightgray); border-radius: 9px; padding: 0.4rem; margin-bottom: 0;">
<div style="display: grid; grid-template-columns: repeat(${opts.columns}, minmax(0, 1fr)); gap: 10px;">${cards}</div>
</div>`
}

export const AutoRecentUpdates: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "AutoRecentUpdates",
    textTransform(ctx, src) {
      if (!src.includes(opts.marker)) {
        return src
      }

      try {
        const contentDir = resolveContentDir(ctx.argv.directory)
        const items = getRecentItems(contentDir, opts.limit)
        const html = renderRecentUpdates(items, opts)
        return src.replace(opts.marker, html)
      } catch {
        return src
      }
    },
  }
}
