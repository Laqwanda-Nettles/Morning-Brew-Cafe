export default function Card({ image, description }) {
  return (
    <div>
      <img className="gallery-image" src={image} alt={description} />
    </div>
  );
}
