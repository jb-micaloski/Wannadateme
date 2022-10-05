import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Pag5(props) {
  return (
    <Container>
      <Center horizontal>
        <WillYouBe>WILL YOU BE{"\n"}MY VALENTINE?</WillYouBe>
      </Center>
      <Button>
        <ButtonOverlay></ButtonOverlay>
      </Button>
      <Link to="/Tryagain">
        <Button1>
          <ButtonOverlay></ButtonOverlay>
        </Button1>
      </Link>
      <Sim>SIM!!!!</Sim>
      <Nao>NÃO.</Nao>
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

const WillYouBe = styled.span`
  font-family: Bebas Neue;
  top: 223px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
`;

const Button = styled.div`
  top: 407px;
  left: 95px;
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: #E6E6E6;
  border: none;
`;

const Button1 = styled.div`
  top: 505px;
  left: 95px;
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: #E6E6E6;
  border: none;
`;

const Sim = styled.span`
  font-family: Bebas Neue;
  top: 405px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
  left: 165px;
`;

const Nao = styled.span`
  font-family: Bebas Neue;
  top: 503px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 42px;
  text-align: center;
  left: 165px;
`;

export default Pag5;
