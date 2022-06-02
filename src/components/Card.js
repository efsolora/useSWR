import React from "react";

export default function Card(props) {
  const { data } = props;
  const { url, breeds } = data[0];
  console.log(url);
  const { temperament, name } = breeds[0];

  return (
    <div>
      <ul>
        <li>
          <img src={url} width="150"></img>
          <h2>Raza: {name}</h2>
          <h2>Temperamento: {temperament}</h2>
        </li>
        <li>
          <img src={data[1].url} width="150"></img>
          <h2>Raza: {data[1].breeds[0].name}</h2>
          <h2>Temperamento: {data[1].breeds[0].temperament}</h2>
        </li>
      </ul>
      <button onClick={() => window.location.reload()}>Recargar</button>
    </div>
  );
}
