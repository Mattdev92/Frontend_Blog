import React from "react";
import { InitialState } from "../initialState";
const dispatch: any = () => {};
const state: any = {};

export const MyContext = React.createContext({ state, dispatch });
