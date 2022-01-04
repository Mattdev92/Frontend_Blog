import React from "react";
import SvgReactIcon from "../../../assets/images/React.svg";
import SvgHtmlIcon from "../../../assets/images/html-5.svg";
import SvgSassIcon from "../../../assets/images/sass.svg";
import SvgJsIcon from "../../../assets/images/js.svg";
import SvgTypescriptIcon from "../../../assets/images/typescript.svg";
import SvgCssIcon from "../../../assets/images/css.svg";
import { SvgWrapper, Wrapper } from "./styles/circleIcons.styles";

const svgTab = [
  <SvgReactIcon width="100" height="100" />,
  <SvgSassIcon width="100" height="100" />,
  <SvgJsIcon width="100" height="100" />,
  <SvgTypescriptIcon width="100" height="100" />,
  <SvgCssIcon width="100" height="100" />,
  <SvgHtmlIcon width="100" height="100" />,
];
const PositionTab = [
  { positionX: 0, positionY: 0 },
  { positionX: 400, positionY: 0 },
  { positionX: 400, positionY: 400 },
  { positionX: 0, positionY: 400 },
  { positionX: 200, positionY: 500 },
  { positionX: 200, positionY: -100 },
];
const CircleIcons = () => {
  return (
    <>
      <Wrapper>
        {svgTab.map((item, i) => (
          <SvgWrapper
            positionX={PositionTab[i].positionX}
            positionY={PositionTab[i].positionY}
          >
            {item}
          </SvgWrapper>
        ))}
      </Wrapper>
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        FrontVerse
      </h1>
    </>
  );
};

export default CircleIcons;
