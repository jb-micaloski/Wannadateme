import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag4(props) {
  return (
    <>
      <Center>
        <Image src={require("../assets/images/i_want_you_alert.png")}></Image>
      </Center>
      <Link to="/Pag5">
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
const Image = styled.img`
  width: 598px;
  height: 851px;
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

export default Pag4;
