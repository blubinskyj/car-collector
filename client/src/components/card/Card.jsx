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
      <a href={link}>
        <img className={"image"} src={image} alt="" />
      </a>
      <div>
        <div className={"title-block"}>
          <p>{title}</p>
          <p>{year}</p>
        </div>
        <p>{price}</p>
        <div className={"characteristics"}>
          <div className={"char-row"}>
            <p>{run}</p>
            <p>{transmission}</p>
          </div>
          <div className={"char-row"}>
            <p>{volume}</p>
            <p>{city}</p>
            {/*<p className={'site'}>{site}</p>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
