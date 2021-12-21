import React from "react";
import { InitialState } from "../initialState";
import { StateType } from "../initialState/initialState.type";

const dispatch: any = () => {};
const state: StateType = InitialState;

export const MyContext = React.createContext({ state, dispatch });
