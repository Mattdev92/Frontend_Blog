import styled from "styled-components";

export const drawerWidth = 240;

export const MainWrapperConfig = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
  paddingTop: 20,
};
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
