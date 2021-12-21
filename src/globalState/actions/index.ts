export const ToogleFilter = (payload: string) => ({
  type: "ToogleFilter",
  payload,
});

export const ClearFilters = () => ({
  type: "ClearAllFilters",
});
export const SetFilters = () => ({
  type: "SetAllFilters",
});
