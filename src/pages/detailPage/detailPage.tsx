import React, { FC } from "react";
import MainTemplate from "../../templates/mainTemplate";
import DetalView from "../../views/detailView/detailView";

const DetailPage: FC = () => {
  return (
    <MainTemplate>
      <DetalView />
    </MainTemplate>
  );
};

export default DetailPage;
