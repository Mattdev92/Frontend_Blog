export function reducer(state: any, action: any) {
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
        },
      };
    default:
      return state;
  }
}
