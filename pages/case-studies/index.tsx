// pages/case-studies/index.tsx
import * as React from "react";
import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

// ========== Tag colors ==========
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
  slate:  { bg: "#F3F4F6", text: "#374151", border: "#E5E7EB" }, // default
} as const;

const TAG_COLOR_MAP: Record<string, keyof typeof PALETTE> = {
  // Case 1
  "Anesthesia": "purple",
  "Laboratory skills": "teal",
  "Rodent": "amber",
  // Case 2
  "Post-op care": "indigo",
  "Wound care": "rose",
  "Analgesia": "sky",
  "Behavior": "lime",
  // Case 3
  "Dermatology": "rose",
  "Shelter medicine": "cyan",
  "Welfare": "amber",
  "Appetite test": "green",
  "Low-stress handling": "slate",
  // Case 4
  "Clinical skills": "indigo",
  "Canine": "amber",
  "Intubation": "purple",
  "Monitoring": "sky",
  "Recovery": "green",
  // Case 5
  "Wildlife rescue": "teal",
  "Avian": "sky",
  "Rehabilitation": "lime",
  "Fieldwork": "amber",
  "Release": "purple",
};

function getTagStyle(tag: string): React.CSSProperties {
  const key = TAG_COLOR_MAP[tag] ?? "slate";
  const c = PALETTE[key];
  return { background: c.bg, color: c.text, border: `1px solid ${c.border}` };
}
// =================================

export default function CaseStudiesIndex(): JSX.Element {
  return (
    <main style={{ maxWidth: 960, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 8, color: "#7c3aed" }}>Case Studies</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
      Clinical, lab, and fieldwork — documented clearly, handled gently.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {caseStudies.map((cs) => (
          <article
            key={cs.slug}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              background: "#fff",
              padding: "16px",
            }}
          >
            <Link
              href={`/case-studies/${cs.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3 style={{ margin: "6px 0 8px" }}>{cs.title}</h3>
              <p style={{ margin: 0, color: "#666" }}>{cs.summary}</p>

              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "2px 8px",
                      borderRadius: 999,
                      ...getTagStyle(t),
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
