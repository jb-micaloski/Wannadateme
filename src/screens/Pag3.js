import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag3(props) {
  return (
    <>
      <Center vertical>
        <Image1 src={require("../assets/images/20440260_6258605.png")}></Image1>
      </Center>
      <Link to="/Pag4">
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
  left: -200px;
  width: 732px;
  height: 1122px;
  position: absolute;
  object-fit: contain;
`;

const Button1 = styled.div`
  top: 0px;
  left: 0px;
  width: 360px;
  height: 740px;
  position: absolute;
  border: none;
`;

export default Pag3;
