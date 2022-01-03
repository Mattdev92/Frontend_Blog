import React, { FC } from "react";
import styled from "styled-components";
import CircleIcons from "../../components/molecules/circleIcons/cirlceIcons";

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
      <CircleIcons />
    </Wrapper>
  );
};

export default MainView;
