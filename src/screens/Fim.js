import React, { Component } from "react";
import styled, { css } from "styled-components";

function Fim(props) {
  return (
    <>
      <Image src={require("../assets/images/Sem_Título-1.png")}></Image>
      <EuTinhamuu>EU TINHAMUU!!</EuTinhamuu>
      <FImGostou>fIM.... GOSTOU?!</FImGostou>
    </>
  );
}

const Image = styled.img`
  top: 156px;
  width: 502px;
  height: 492px;
  position: absolute;
  left: -71px;
  object-fit: contain;
`;

const EuTinhamuu = styled.span`
  font-family: Bebas Neue;
  top: 95px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 42px;
  text-align: center;
  left: 86px;
`;

const FImGostou = styled.span`
  font-family: Bebas Neue;
  top: 651px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 42px;
  text-align: center;
  left: 78px;
`;

export default Fim;
