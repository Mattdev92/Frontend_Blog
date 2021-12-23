import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const MainView: FC = () => {
  console.log('Mainview');
  return <Wrapper>MainView</Wrapper>;
};

export default MainView;
