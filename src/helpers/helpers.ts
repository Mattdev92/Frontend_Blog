export const filters = [
  "Html",
  "Css",
  "Js",
  "React",
  "Typescript",
  "Frontend",
  "Backend",
  "Git",
  "It",
  "Algorithms",
  "Projekty",
];

export const info = ["O stronie...", "Kontakt"];

export const FilteredCategory = (category: string, filter: any) => {
  const FilteredStateCategory = Object.keys(filter)
    .filter((key) => filter[key])
    .map((item) => item.toUpperCase());

  const ifRender = FilteredStateCategory.filter((item) => category === item);
  return ifRender.length > 0;
};
