import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainView: FC = () => {
  return (
    <Wrapper>
      <Link to="/about">about</Link>
    </Wrapper>
  );
};

export default MainView;
