import CharCard from "../CharCard";
import { useState } from "react";
import BackOfCard from "../BackOfCard";
import "./styles.css";

function Characters({ characters }) {
  const [state, setState] = useState("face");

  const triggerAddCardState = () => {
    if (state === "face") {
      setState("back");
    } else {
      setState("face");
    }
  };
  return (
    <div className="container">
      {characters.map((char) => {
        if (state === "face") {
          return (
            <CharCard
              key={char.id}
              char={char}
              callback={triggerAddCardState}
            />
          );
        } else {
          return (
            <BackOfCard
              key={char.id}
              char={char}
              callback={triggerAddCardState}
            />
          );
        }
      })}
    </div>
  );
}

export default Characters;
