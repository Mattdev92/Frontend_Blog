import React, { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  FetchData,
  AllArticles,
} from "../frontendKnowledgeView/frontendKnowledgeView.types";
import { PROFILE_QUERY } from "../../cms/queries";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ElemWrapper = styled.div`
  height: 50px;
  margin: 10px;
`;
const DetalView: FC = () => {
  const { id } = useParams();
  const { error, loading, data } = useQuery<FetchData>(PROFILE_QUERY, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <Wrapper>...loading</Wrapper>;
  }
  if (error) {
    return <Wrapper>sorry we have problems...</Wrapper>;
  }

  const detailData: AllArticles[] = data.allArticles.filter(
    (item) => `:${item.id.toString()}` === id
  );
  if (detailData.length > 0) {
    return (
      <Wrapper>
        <ElemWrapper>{detailData[0].date}</ElemWrapper>
        <ElemWrapper>{detailData[0].category}</ElemWrapper>
        <ElemWrapper>{detailData[0].title}</ElemWrapper>
        <ElemWrapper>{detailData[0].description}</ElemWrapper>
      </Wrapper>
    );
  }
  return <Wrapper>no details...</Wrapper>;
};

export default DetalView;
