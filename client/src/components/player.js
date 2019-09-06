import React from "react";
import styled from "styled-components";

export default function Player(props) {
  const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 20px;
    border: 3px solid #00b5ed;
    width: 40%;
    margin: 10px;
    padding-bottom: 20px;
  `;

  const Detail = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <Card>
      <h2 className="playerName">Name: {props.name}</h2>
      <Detail>
        <h4>Country: {props.country}</h4>
        <h4>Searches: {props.searches} </h4>
      </Detail>
    </Card>
  );
}
