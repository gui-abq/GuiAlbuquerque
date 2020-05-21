import React from "react";
import { UsersMenu } from "./components/usersMenu/UsersMenu.js";
import { ScreenMessage } from "./components/screenMessage/ScreenMessage.js";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  background-color: #E5FFE0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;


function App() {
  return (
    <AppContainer>
      <UsersMenu/>
      <ScreenMessage/>
    </AppContainer>
  );
}

export default App;
