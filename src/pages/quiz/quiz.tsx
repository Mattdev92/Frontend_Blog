import React, { FC } from "react";
import MainTemplate from "../../templates/mainTemplate";
import QuizView from "../../views/quizView/quizView";

const AboutPage: FC = () => {
  return (
    <MainTemplate>
      <QuizView />
    </MainTemplate>
  );
};

export default AboutPage;
