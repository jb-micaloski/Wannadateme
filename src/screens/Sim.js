import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Sim(props) {
  return (
    <>
      <Center horizontal>
        <TenteNovamente1>
          aTÉ QUE ENFIM EIN...{"\n"}
          {"\n"}DORMIU??
        </TenteNovamente1>
      </Center>
      <Image src={require("../assets/images/Sem_Título-11.png")}></Image>
      <Link to="/Fim">
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
const TenteNovamente1 = styled.span`
  font-family: Bebas Neue;
  top: 129px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 42px;
  text-align: center;
`;

const Image = styled.img`
  top: 300px;
  left: 0px;
  width: 360px;
  height: 440px;
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

export default Sim;
