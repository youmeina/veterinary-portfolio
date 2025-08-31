// components/StoryChain.tsx
type Shot = {
  src: string;        // 图片路径（/public 下）
  alt: string;
  caption?: string;   // 每张图下的小标题（可选）
};

export default function StoryChain({
  title,
  intro,
  shots
}: {
  title: string;
  intro?: string;
  shots: Shot[];
}) {
  return (
    <section className="story">
      <h2>{title}</h2>
      {intro && <p className="story-intro">{intro}</p>}
      <div className="story-chain">
        {shots.map((s, i) => (
          <figure key={i} className="story-card">
            <div className="ratio-43">
              <img className="img-cover" src={s.src} alt={s.alt} />
            </div>
            {s.caption && (
              <figcaption className="story-cap">{s.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
