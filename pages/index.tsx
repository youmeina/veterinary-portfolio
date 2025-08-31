import Link from 'next/link';

export default function Home(){
  return (
    <>
      <section style={{marginTop: 20}}>
        <h1>You Meina — Veterinary Student</h1>
        <p>
          Cases, daily learning notes and practical basics. Focus on small-animal care,
          DR imaging, animal welfare & field observation.
        </p>
        <div style={{display:'flex',gap:12,marginTop:12,flexWrap:'wrap'}}>
          <Link className="btn" href="/about">About</Link>
          <Link className="btn" href="/case-studies">Case Studies</Link>
          <Link className="btn secondary" href="/blog">Blog</Link>
     
        </div>
      </section>

      <section style={{marginTop:40}}>
        <h2>Featured Case Studies</h2>
        <div className="grid">
          <CaseCard
            title="DR Imaging with a Rescued Cat"
            href="/case-studies/dr-cat"
            tags={['cat','DR','shelter']}
          />
          <CaseCard
            title="Kid Goat Behavior Sampling"
            href="/case-studies/goat-behavior"
            tags={['goat','behavior','farm']}
          />
          <CaseCard
            title="Intraperitoneal Injection"
            href="/case-studies/ip-injection"
            tags={['mouse','procedure','lab']}
          />
        </div>
      </section>
    </>
  );
}

function CaseCard({
  title, href, tags = []
}:{ title:string; href:string; tags:string[] }){
  return (
    <Link className="card" href={href}>
      <div className="thumb" />
      <div style={{padding:'12px 14px'}}>
        <h3 style={{margin:'10px 0'}}>{title}</h3>
        <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
    </Link>
  );
}
