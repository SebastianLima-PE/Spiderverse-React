// src/components/Card.jsx
const Card = ({ name, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card__content">
        <h3 className="card__title">{name}</h3>
        <p className="card__text">{description}</p>
      </div>
    </div>
  );
};

export default Card;