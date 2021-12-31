import React, { FC } from "react";
import MainTemplate from "../../templates/mainTemplate";
import MainView from "../../views/mainView";

const MainPage: FC = () => {
  return (
    <MainTemplate>
      <MainView />
    </MainTemplate>
  );
};

export default MainPage;
