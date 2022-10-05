import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialButtonShare1(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name="arrow-right-bold-outline"
        style={{
          color: "#fff",
          fontSize: 24,
          alignSelf: "center"
        }}
      ></MaterialCommunityIconsIcon>
      <Rect></Rect>
    </Container>
  );
}

const Container = styled.div`
  background-color: #3F51B5;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

const Rect = styled.div`
`;

export default MaterialButtonShare1;
