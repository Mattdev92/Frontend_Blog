import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutView: FC = () => {
  console.log("about view");
  return <Wrapper>AboutView</Wrapper>;
};

export default AboutView;
