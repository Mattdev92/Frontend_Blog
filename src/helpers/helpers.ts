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
  "Projekty"
];

export const info = ["O stronie...", "Kontakt"];

export const FilteredCategory = (category: string, filters: any) => {
    const FilteredStateCategory = Object.keys(filters)
    .filter((key) => filters[key])
    .map((item) => item.toUpperCase());

    const ifRender = FilteredStateCategory.filter((item) => category === item);
    return ifRender.length > 0;
  };


