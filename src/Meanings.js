import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              {definitions.definition}
              <br />
              <em>
                <p>{definitions.example}</p>
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
