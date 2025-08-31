// pages/about.tsx
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const PROFILE_SRC = "/profile/meina.jpg"; // public/profile/meina.jpg

// 生活照（把图片放到 public/profile/gallery/ 下）
const LIFE_PHOTOS = [
  { src: "/profile/gallery/life-1.jpg", alt: "Daily moment 1", note: "" },
  { src: "/profile/gallery/life-2.jpg", alt: "Daily moment 2", note: "" },
  { src: "/profile/gallery/life-3.jpg", alt: "Daily moment 3", note: "" },
  { src: "/profile/gallery/life-4.jpg", alt: "Daily moment 4", note: "" },
];

export default function About(): JSX.Element {
  return (
    <main style={{ maxWidth: 820, margin: "40px auto", padding: "0 16px" }}>
      {/* 顶部：标题 + 圆形头像 */}
      <section
        aria-labelledby="about-hero"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div>
          <h1 id="about-hero" style={{ marginBottom: 6, color: "#7c3aed" }}>
            About
          </h1>
          <p style={{ color: "#444", fontSize: 18, lineHeight: 1.7, margin: 0 }}>
            I am a veterinary student focusing on <strong>small animal medicine</strong>,
            <strong> radiography (DR)</strong>, <strong>animal welfare and behavior</strong>,
            and <strong>farm field observation</strong>.
          </p>
        </div>

        {/* 圆形头像（带细环） */}
        <figure
          style={{
            margin: 0,
            width: "clamp(96px, 12vw, 120px)",
            height: "clamp(96px, 12vw, 120px)",
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid #eee",
            background: "#fff",
            boxShadow: "0 0 0 3px #fff, 0 0 0 5px #e5e7eb",
          }}
        >
          <Image
            src={PROFILE_SRC}
            alt="You Meina portrait"
            width={120}
            height={120}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
            priority
          />
        </figure>
      </section>

      {/* 学校 & 时间 & 证书 */}
      <section
        aria-labelledby="about-edu"
        style={{ marginTop: 20, padding: 16, border: "1px solid #eee", borderRadius: 12, background: "#fff" }}
      >
        <h2 id="about-edu" style={{ margin: 0, fontSize: 18 }}>Education & Certificate</h2>
        <div style={{ marginTop: 8, color: "#222", lineHeight: 1.7 }}>
          <div><strong>Department:</strong> Department of Animal Science and Technology</div>
          <div><strong>School: </strong>Shanghai Vocational College of Agriculture and Forestry</div>
          <div><strong>Years:</strong> 2022.09 — 2025.06</div>
          <div><strong>Certification:</strong> Practicing Veterinary Certificate</div>
        </div>
      </section>

      {/* 技能 */}
      <section aria-labelledby="about-skills" style={{ marginTop: 24 }}>
        <h2 id="about-skills" style={{ margin: "0 0 8px 0", fontSize: 18 }}>Skills & Certificates</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, color: "#222" }}>
          <li><strong>Clinical & procedures:</strong> positioning, restraint, DR exposure, IP injection.</li>
          <li><strong>Animal welfare:</strong> low-stress handling, behavior scoring, recovery observation.</li>
          <li><strong>Lab & compliance:</strong> PPE, SOP, records, data logging.</li>
          <li><strong>Literature search & evidence:</strong> quick retrieval and actionable summaries.</li>
        </ul>
      </section>

      {/* 生活照相册 */}
      <section aria-labelledby="about-life" style={{ marginTop: 24 }}>
        <h2 id="about-life" style={{ margin: "0 0 10px 0", fontSize: 18 }}>Life &amp; Moments</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12,
          }}
        >
          {LIFE_PHOTOS.map((ph) => (
            <figure key={ph.src} style={{ margin: 0 }}>
              <a
                href={ph.src}
                target="_blank"
                rel="noreferrer"
                style={{ display: "block", textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "100%", // 方形缩略图
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid #eee",
                    background: "#fff",
                  }}
                >
                  <Image
                    src={ph.src}
                    alt={ph.alt}
                    fill
                    sizes="(max-width: 820px) 25vw, 200px"
                    style={{ objectFit: "cover", display: "block" }}
                  />
                </div>
              </a>
              {ph.note ? (
                <figcaption style={{ marginTop: 6, fontSize: 12, color: "#666", textAlign: "center" }}>
                  {ph.note}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </section>

      {/* 导航 CTA */}
      <section aria-labelledby="about-cta" style={{ marginTop: 24 }}>
        <div style={{ padding: 16, border: "1px solid #eee", borderRadius: 12, background: "#fafafa" }}>
          <h2 id="about-cta" style={{ margin: "0 0 6px 0", fontSize: 18 }}>See the Work</h2>
          <p style={{ marginTop: 0, marginBottom: 12, color: "#555" }}>
            Browse detailed, photo-documented cases with standardized observations and humane handling notes.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/case-studies" style={btn}>View Case Studies →</Link>
            <Link href="/blog" style={{ ...btn, background: "#111827" }}>Blog →</Link>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer style={{ marginTop: 32, color: "#6b7280", display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span>© 2025 You Meina</span>
        <span>•</span>
        <a href="mailto:youmeina2025@163.com" style={{ color: "#7c3aed", textDecoration: "none" }}>
        youmeina2025@163.com
        </a>
      </footer>
    </main>
  );
}

const btn: React.CSSProperties = {
  display: "inline-block",
  background: "#7c3aed",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: 10,
  textDecoration: "none",
};
