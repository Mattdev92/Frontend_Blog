import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

export const drawerWidth = 240;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
  color: black;
  &.active {
    color: red;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const LogoIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: all 0.5s ease-in;
  }
`;
