import "./styles.css";

function CharCard({ char: { name, image } }) {
  return (
    <div className="card">
      <label>{name}</label>
      <img className="picture" src={image} alt={name}></img>
    </div>
  );
}

export default CharCard;
