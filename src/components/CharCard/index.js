import "./styles.css";

function CharCard({ char: { name, image, status }, callback }) {
  return (
    <div className="card" onClick={callback}>
      <label>{name.length > 15 ? `${name.slice(0, 15)}...` : name}</label>
      <label>{status}</label>
      <img className="picture" src={image} alt={name}></img>
    </div>
  );
}

export default CharCard;
