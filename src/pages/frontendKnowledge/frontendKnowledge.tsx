import React, {FC} from "react";
import MainTemplate from "../../templates/mainTemplate";
import FrontendKnowledgeView from "../../views/frontendKnowledgeView";

const FrontendKnowledgePage: FC = () => {
  console.log('click');
  return (
    <MainTemplate>
      <FrontendKnowledgeView />
    </MainTemplate>
  );
};

export default FrontendKnowledgePage;