import "./Card.css";

const Card = ({
  image,
  link,
  title,
  year,
  price,
  run,
  city,
  transmission,
  volume,
  site,
}) => {
  return (
    <div className={"card"}>
      <a href={link} className={"link"}>
        <img className={"image"} src={image} alt="" height={250} />
      </a>
      <div className={"card-container"}>
        <a href={link}>
          <div className={"title-block"}>
            <p>{title}</p>
            <p>{year}</p>
          </div>
        </a>
        <div className={"price"}>
          <p>{price} $</p>
        </div>
        <div className={"characteristics"}>
          <div className={"char-row"}>
            <p className={"run"}>{run}</p>
            <p className={"transmission"}>{transmission}</p>
          </div>
          <div className={"char-row"}>
            <p className={"volume"}>{volume}</p>
            <p className={"city"}>{city}</p>
          </div>
        </div>
        <div className={"site"}>
          <p>{site}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
