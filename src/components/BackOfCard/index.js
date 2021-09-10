function BackOfCard({ char: { name, status, species, gender }, callback }) {
  return (
    <div className="card" onClick={callback}>
      <label>{name.length > 15 ? `${name.slice(0, 15)}...` : name}</label>
      <label>{status}</label>
      <label>{species}</label>
      <label>{gender}</label>
    </div>
  );
}

export default BackOfCard;
