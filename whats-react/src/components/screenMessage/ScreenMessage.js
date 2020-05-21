import React from "react";
import { BoxTypeMessage } from "./boxTypeMessage/BoxTypeMessage";
import styled from "styled-components";

const ScreenContainer = styled.div`
  border: 1px solid black;
  width: 70vw;
`;

export class ScreenMessage extends React.Component {
  render() {
    return (
      <ScreenContainer>
        ScreenMessage
        <BoxTypeMessage />
      </ScreenContainer>
    );
  }
}
