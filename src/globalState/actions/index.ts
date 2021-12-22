export const ToogleFilter = (
  payload: string
): { type: string; payload: string } => ({
  type: "ToogleFilter",
  payload,
});

export const ClearFilters = (): { type: string } => ({
  type: "ClearAllFilters",
});

export const SetFilters = (): { type: string } => ({
  type: "SetAllFilters",
});

export const ToogleFilters = (): { type: string } => ({
  type: "ToogleFilters",
});