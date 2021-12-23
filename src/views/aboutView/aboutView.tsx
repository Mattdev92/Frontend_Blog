import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const AboutView: FC = () => {
  console.log('about view');
  return <Wrapper>AboutView</Wrapper>;
};

export default AboutView;
