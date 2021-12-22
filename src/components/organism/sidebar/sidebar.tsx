import React, { FC, useContext, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { TitleWrapper } from "./styles/sidebar.styles";
import { filters } from "../../../helpers/helpers";
import { MyContext } from "../../../globalState/context";
import {
  ToogleFilter,
  ClearFilters,
  SetFilters,
} from "../../../globalState/actions";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./styles/switch.styles";
import { Button } from "@mui/material";
import { ToogleFilters } from "../../../globalState/actions";

const Sidebar: FC = () => {
  const { state, dispatch } = useContext(MyContext);

  const handleChange = (text: any) => {
    dispatch(ToogleFilter(text));
  };
  const setAll = () => {
    dispatch(SetFilters());
  };
  const clearAll = () => {
    dispatch(ClearFilters());
  };
  const apply = () => {
    dispatch(ToogleFilters());
  };
  return (
    <SwipeableDrawer
      anchor="right"
      open={state.filtersActive}
      onClose={() => {}}
      onOpen={() => {}}
    >
      <Divider />
      <TitleWrapper>
        <Typography variant="h5" gutterBottom component="div">
          Filtry
        </Typography>
      </TitleWrapper>
      <List>
      <ListItem>
          <Button variant="contained" color="success" onClick={apply}>
            Apply changes
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" color="success" onClick={setAll}>
            Set all
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" color="error" onClick={clearAll}>
            Clear all
          </Button>
        </ListItem>
        {filters.map((text, idx) => (
          <ListItem key={idx}>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  checked={state.filters[text]}
                  onChange={() => handleChange(text)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={text}
              key={text}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default Sidebar;
