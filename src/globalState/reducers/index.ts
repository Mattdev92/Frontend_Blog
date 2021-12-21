import { StateType } from "../initialState/initialState.type";

export function reducer(
  state: StateType,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case "ToogleFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload]: !state.filters[action.payload],
        },
      };
    case "ClearAllFilters":
      return {
        ...state,
        filters: {
          Html: false,
          Css: false,
          Js: false,
          React: false,
          Frontend: false,
          Backend: false,
          Typescript: false,
          It: false,
          Git: false,
          Algorithms: false,
          Projekty: false,
        },
      };
    case "SetAllFilters":
      return {
        ...state,
        filters: {
          Html: true,
          Css: true,
          Js: true,
          React: true,
          Frontend: true,
          Backend: true,
          Typescript: true,
          It: true,
          Git: true,
          Algorithms: true,
          Projekty: true,
        },
      };
    default:
      return state;
  }
}
