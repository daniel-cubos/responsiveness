import './style.css';

function MovieCard({ cover, title }) {
  return (
    <div
      className="container-card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default MovieCard;