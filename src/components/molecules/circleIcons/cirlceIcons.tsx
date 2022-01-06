import React from "react";
import Typography from "@mui/material/Typography";
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
  { positionX: 0, positionY: 0, idx: 1 },
  { positionX: 400, positionY: 0, idx: 2 },
  { positionX: 400, positionY: 400, idx: 3 },
  { positionX: 0, positionY: 400, idx: 4 },
  { positionX: 200, positionY: 500, idx: 5 },
  { positionX: 200, positionY: -100, idx: 6 },
];
const CircleIcons = () => {
  return (
    <>
      <Wrapper>
        {svgTab.map((item, i) => (
          <SvgWrapper
            positionX={PositionTab[i].positionX}
            positionY={PositionTab[i].positionY}
            key={PositionTab[i].idx}
          >
            {item}
          </SvgWrapper>
        ))}
      </Wrapper>
      <Typography
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          letterSpacing: "7px",
        }}
        variant="h3"
        gutterBottom
        component="div"
      >
        FrontVerse
      </Typography>
    </>
  );
};

export default CircleIcons;
