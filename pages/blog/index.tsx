// pages/blog/index.tsx
import * as React from "react";
import Link from "next/link";
import { blogPosts } from "../../data/blogPosts";

// —— 统一配色 —— //
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
  slate:  { bg: "#F3F4F6", text: "#374151", border: "#E5E7EB" }, // 默认
} as const;

// —— 覆盖到你所有用到的标签 —— //
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
  return {
    background: c.bg,
    color: c.text,
    border: `1px solid ${c.border}`,
  };
}

function fmt(d: string) {
  const dt = new Date(d);
  return isNaN(dt.getTime())
    ? d
    : dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogIndex(): JSX.Element {
  const sorted = React.useMemo(
    () => [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );

  const PER_PAGE = 8;
  const [count, setCount] = React.useState(Math.min(PER_PAGE, sorted.length));
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount((c) => Math.min(c + PER_PAGE, sorted.length));
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [sorted.length]);

  return (
    <main style={{ maxWidth: 820, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 6, color: "#7c3aed" }}>Blog</h1>
      <p style={{ color: "#6b7280", marginBottom: 16 }}>
        Daily notes & reflections from clinic, lab, and fieldwork.
      </p>

      <section aria-label="post stream">
        {sorted.slice(0, count).map((p, idx) => (
          <article
            key={p.slug}
            style={{
              borderTop: idx === 0 ? "1px solid #eee" : undefined,
              borderBottom: "1px solid #eee",
              padding: "14px 4px",
            }}
          >
            <Link
              href={`/blog/${p.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <h3 style={{ margin: "2px 0 6px", lineHeight: 1.4 }}>{p.title}</h3>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: 6,
                }}
              >
                <time dateTime={p.date} style={{ color: "#6b7280", fontSize: 14 }}>
                  {fmt(p.date)}
                </time>
                {p.tags?.length ? (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
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
                ) : null}
              </div>

              {p.summary ? (
                <p style={{ margin: 0, color: "#444", lineHeight: 1.7 }}>{p.summary}</p>
              ) : null}
            </Link>
          </article>
        ))}

        <div ref={sentinelRef} style={{ height: 1 }} />
        {count >= sorted.length ? (
          <p style={{ textAlign: "center", color: "#9ca3af", marginTop: 12 }}>— End —</p>
        ) : null}
      </section>
    </main>
  );
}
