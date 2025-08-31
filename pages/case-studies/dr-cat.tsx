

export default function Page(){
  return (
    <main className="container">
      <h1>DR Imaging with a Rescued Cat</h1>
      <p className="muted">Low-stress positioning and PPE; achieving diagnostic views with minimal restraint.</p>
      <div className="masonry">
        <figure className="tile"><img src="/media/cat-dr-room.jpg" alt="DR room"/></figure>
        <figure className="tile"><img src="/media/cat-preop-injection.jpg" alt="preop"/></figure>
        <figure className="tile"><img src="/media/kitten-derm-topical.jpg" alt="kitten"/></figure>
      </div>
      <h2>Procedure</h2>
      <ol>
        <li>PPE and room prep.</li>
        <li>Low-stress positioning and exposure.</li>
        <li>Record stress and recovery scores.</li>
      </ol>
    </main>
  );
}
