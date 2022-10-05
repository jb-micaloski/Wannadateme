import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Inicio(props) {
  return (
    <>
      <Image src={require("../assets/images/CAPTAIN.png")}></Image>
      <Voce>VOCÊ!</Voce>
      <Link to="/Pag2">
        <Button>
          <ButtonOverlay></ButtonOverlay>
        </Button>
      </Link>
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

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
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

const Button = styled.div`
  top: 0px;
  left: 0px;
  width: 360px;
  height: 740px;
  position: absolute;
  border: none;
`;

export default Inicio;
