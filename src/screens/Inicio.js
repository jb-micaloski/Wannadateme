import React, { Component } from "react";
import styled, { css } from "styled-components";

function Inicio(props) {
  return (
    <>
      <Image src={require("../assets/images/CAPTAIN.png")}></Image>
      <Voce>VOCÊ!</Voce>
    </>
  );
}

const Image = styled.img`
  top: -162px;
  left: -239px;
  width: 872px;
  height: 1065px;
  position: absolute;
  object-fit: contain;
`;

const Voce = styled.span`
  font-family: Bebas Neue;
  top: 10.07%;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(37,55,75,1);
  font-size: 72px;
  right: 5px;
  width: 365px;
  text-align: center;
`;

export default Inicio;
