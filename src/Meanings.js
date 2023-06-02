import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition"> {definitions.definition}</div>
            <br />
            <em>
              <div className="example"> {definitions.example}</div>
            </em>

            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
