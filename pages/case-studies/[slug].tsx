// pages/case-studies/[slug].tsx
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

type ParagraphBlock = { type: "paragraph"; text: string };
type ImageBlock = { type: "image"; src: string; alt: string; note?: string };
type HeadingBlock = { type: "heading"; text: string };
type Block = ParagraphBlock | ImageBlock | HeadingBlock;

// 统一控制文章内图片的最大显示宽度（像素）
const MAX_IMG_WIDTH = 560;

/** ===== Tag colors (与列表页一致，可按需调整/扩展) ===== */
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
  // Case 4（犬）
  "Clinical skills": "indigo",
  "Canine": "amber",
  "Intubation": "purple",
  "Monitoring": "sky",
  "Recovery": "green",
  // Case 5（野生鸟）
  "Wildlife rescue": "teal",
  "Avian": "sky",
  "Rehabilitation": "lime",
  "Fieldwork": "amber",
  "Release": "purple",
};

function getTagStyle(tag: string) {
  const key = TAG_COLOR_MAP[tag] ?? "slate";
  const c = PALETTE[key];
  return { background: c.bg, color: c.text, border: `1px solid ${c.border}` };
}
/** ====================================================== */

export default function CaseStudyDetail() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : undefined;
  if (!slug) return null; // 路由参数未就绪时先不渲染

  const cs = caseStudies.find((item) => item.slug === slug);

  if (!cs) {
    return (
      <main style={{ maxWidth: 800, margin: "60px auto", padding: "0 16px" }}>
        <p>Case not found.</p>
        <Link href="/case-studies">← Back to Case Studies</Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 860, margin: "40px auto", padding: "0 16px" }}>
      <Link href="/case-studies" style={{ color: "#555" }}>← Back</Link>

      <h1 style={{ margin: "12px 0 6px" }}>{cs.title}</h1>
      <p style={{ color: "#666", marginTop: 0 }}>{cs.caption}</p>

      {/* 彩色标签 */}
      {cs.tags?.length ? (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8, marginBottom: 8 }}>
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
      ) : null}

      {/* 正文：小标题/段落/图片动态渲染；图片默认缩窄并居中 */}
      <section>
        {(cs.body as Block[]).map((block, i) => {
          if (block.type === "heading") {
            return (
              <h3 key={i} style={{ marginTop: 24, marginBottom: 8 }}>
                {block.text}
              </h3>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={i} style={{ lineHeight: 1.75, color: "#222", margin: "14px 0" }}>
                {block.text}
              </p>
            );
          }

          if (block.type === "image") {
            return (
              <figure key={i} style={{ margin: "16px 0" }}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: MAX_IMG_WIDTH, // 统一限制图片宽度
                    margin: "0 auto",
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid #eee",
                    background: "#fff",
                  }}
                >
                  {/* 自适应：宽度随容器变化，按原始比例自动算高 */}
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={0}
                    height={0}
                    sizes={`(max-width: ${MAX_IMG_WIDTH + 80}px) 92vw, ${MAX_IMG_WIDTH}px`}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      // 如需限制超高竖图：取消下一行注释
                      // maxHeight: "70vh",
                    }}
                  />
                </div>
                <figcaption
                  style={{
                    marginTop: 6,
                    fontSize: 13,
                    color: "#666",
                    textAlign: "center",
                  }}
                >
                  <strong>{block.alt}</strong>
                  {block.note ? ` — ${block.note}` : ""}
                </figcaption>
              </figure>
            );
          }

          return null;
        })}
      </section>
    </main>
  );
}
