import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialButtonTransparentHamburger(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name="arrow-expand-right"
        style={{
          color: "rgba(37,55,75,1)",
          fontSize: 24
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  background-color: rgba(15,15, 15,0);
`;

export default MaterialButtonTransparentHamburger;
