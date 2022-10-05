import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Tryagain(props) {
  return (
    <Container>
      <Center horizontal>
        <TenteNovamente>
          Você falhou!{"\n"}
          {"\n"}TENTE{"\n"}NOVAMENTE
        </TenteNovamente>
      </Center>
      <Image
        src={require("../assets/images/9b6d811b2cb9e695eab230dd4ebebf76.jpg")}
      ></Image>
      <Link to="/Pag5">
        <Button>
          <ButtonOverlay></ButtonOverlay>
        </Button>
      </Link>
      <Voltar>VOLTAR</Voltar>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(0,0,0,1);
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
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

const TenteNovamente = styled.span`
  font-family: Bebas Neue;
  top: 123px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
`;

const Image = styled.img`
  top: 561px;
  left: 75px;
  width: 210px;
  height: 155px;
  position: absolute;
  object-fit: contain;
`;

const Button = styled.div`
  top: 479px;
  left: 108px;
  width: 144px;
  height: 62px;
  position: absolute;
  background-color: #E6E6E6;
  border: none;
`;

const Voltar = styled.span`
  font-family: Bebas Neue;
  top: 485px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(1,1,1,1);
  font-size: 42px;
  text-align: center;
  left: 135px;
`;

export default Tryagain;
