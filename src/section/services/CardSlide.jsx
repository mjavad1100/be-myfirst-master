import './cardslide.css';

const CardSlide = ({ image, titles }) => {
  return (
    <div className="card-slide">
      <img src={image} alt={titles[0]} />

      <div className="card-slide__titles">
        {titles.map((title, index) => (
          <h3 key={index}>{title}</h3>
        ))}
      </div>
    </div>
  );
};

export default CardSlide;