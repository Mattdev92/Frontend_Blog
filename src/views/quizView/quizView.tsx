import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuizView: FC = () => {
  return <Wrapper>Quiz</Wrapper>;
};

export default QuizView;
