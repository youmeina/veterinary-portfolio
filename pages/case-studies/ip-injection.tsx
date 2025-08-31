

export default function Page(){
  return (
    <main className="container">
      <h1>Intraperitoneal Injection (Mouse)</h1>
      <p className="muted">Landmarking, injection, and recovery observation with consistent technique.</p>
      <div className="masonry">
        <figure className="tile"><img src="/media/lab-ip-site.jpg" alt="IP site"/></figure>
        <figure className="tile"><img src="/media/rat-shoulder.jpg" alt="rat"/></figure>
      </div>
      <h2>Steps</h2>
      <ol>
        <li>Identify anatomical landmarks.</li>
        <li>Perform IP injection with minimal stress.</li>
        <li>Record righting reflex and recovery latency.</li>
      </ol>
    </main>
  );
}
