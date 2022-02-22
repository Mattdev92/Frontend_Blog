import React, { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetalView: FC = () => {
  const { id } = useParams();
  return <Wrapper>Details {id}</Wrapper>;
};

export default DetalView;
