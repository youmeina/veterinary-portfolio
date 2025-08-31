// pages/blog/[slug].tsx
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { blogPosts } from "../../data/blogPosts";

const PALETTE = {
  purple: { bg: "#F3E8FF", text: "#6D28D9", border: "#E9D5FF" },
  indigo: { bg: "#E0E7FF", text: "#3730A3", border: "#C7D2FE" },
  teal:   { bg: "#CCFBF1", text: "#0F766E", border: "#99F6E4" },
  cyan:   { bg: "#CFFAFE", text: "#0E7490", border: "#A5F3FC" },
  sky:    { bg: "#E0F2FE", text: "#0369A1", border: "#BAE6FD" },
  green:  { bg: "#DCFCE7", text: "#166534", border: "#BBF7D0" },
  lime:   { bg: "#ECFCCB", text: "#3F6212", border: "#D9F99D" },
  amber:  { bg: "#FEF3C7", text: "#92400E", border: "#FDE68A" },
  rose:   { bg: "#FFE4E6", text: "#9F1239", border: "#FECDD3" },
  slate:  { bg: "#F3F4F6", text: "#374151", border: "#E5E7EB" },
} as const;

const TAG_COLOR_MAP: Record<string, keyof typeof PALETTE> = {
  lab: "teal",
  anesthesia: "purple",
  records: "slate",
  DR: "sky",
  positioning: "amber",
  learning: "green",

  internships: "indigo",
  career: "cyan",
  rotating: "purple",
  specialty: "rose",

  ER: "sky",
  mentorship: "lime",
  training: "teal",
  education: "indigo",
  skills: "green",
  networking: "amber",
  growth: "green",

  VIRMP: "purple",
  applications: "slate",
  externships: "cyan",

  "hands-on": "teal",
  communication: "rose",
  reading: "slate",

  research: "indigo",
  welfare: "amber",
  economics: "lime",
  "access-to-care": "cyan",
  ASPCA: "purple",
  "shelter-medicine": "teal",
  fundraising: "amber",
};

function tagStyle(tag: string): React.CSSProperties {
  const key = TAG_COLOR_MAP[tag] ?? "slate";
  const c = PALETTE[key];
  return { background: c.bg, color: c.text, border: `1px solid ${c.border}` };
}

function fmt(d: string) {
  const dt = new Date(d);
  return isNaN(dt.getTime())
    ? d
    : dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogPostPage(): JSX.Element | null {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  if (!slug) return null;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <main style={{ maxWidth: 820, margin: "40px auto", padding: "0 16px" }}>
        <p>Post not found.</p>
        <Link href="/blog">← Back to Blog</Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 820, margin: "40px auto", padding: "0 16px" }}>
      <Link href="/blog" style={{ color: "#555" }}>← Back</Link>
      <h1 style={{ margin: "12px 0 6px" }}>{post.title}</h1>

      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 10 }}>
        <time dateTime={post.date} style={{ color: "#6b7280" }}>{fmt(post.date)}</time>
        {post.tags?.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              padding: "2px 8px",
              borderRadius: 999,
              ...tagStyle(t),
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <article>
        {post.body.map((b, i) => {
          if (b.type === "heading") {
            return <h3 key={i} style={{ marginTop: 20, marginBottom: 6 }}>{b.text}</h3>;
          }
          if (b.type === "paragraph") {
            return <p key={i} style={{ lineHeight: 1.75, color: "#222", margin: "10px 0" }}>{b.text}</p>;
          }
          if (b.type === "list") {
            return (
              <ul key={i} style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, color: "#222" }}>
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
          }
          return null;
        })}
      </article>
    </main>
  );
}
