// Verios with known values
// type Filters = {
//   Html: boolean;
//   Css: boolean;
//   Js: boolean;
//   React: boolean;
//   Frontend: boolean;
//   Backend: boolean;
//   Typescript: boolean;
//   It: boolean;
//   Git: boolean;
//   Algorithms: boolean;
//   Projekty: boolean;
// };

// export interface StateType{
//       filters: Filters
//   }

export interface StateType {
  filters: {
    [key: string]: boolean;
  };
}
