import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag2(props) {
  return (
    <>
      <Center vertical>
        <Image1 src={require("../assets/images/CAPTAIN.png")}></Image1>
      </Center>
      <SimVoCe>SIM, VOCê!</SimVoCe>
      <Link to="/Pag3">
        <Button1>
          <ButtonOverlay></ButtonOverlay>
        </Button1>
      </Link>
    </>
  );
}

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: none;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Image1 = styled.img`
  left: -240px;
  width: 872px;
  height: 1065px;
  position: absolute;
  object-fit: contain;
`;

const SimVoCe = styled.span`
  font-family: Bebas Neue;
  top: 9.07%;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(37,55,75,1);
  font-size: 72px;
  right: 5px;
  width: 365px;
  text-align: center;
`;

const Button1 = styled.div`
  top: 0px;
  left: 0px;
  width: 360px;
  height: 740px;
  position: absolute;
  border: none;
`;

export default Pag2;
