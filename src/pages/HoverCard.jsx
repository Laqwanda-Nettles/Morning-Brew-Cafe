export default function HoverCard({ image, title, description }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
