import React, { FC, useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { TitleWrapper, MainWrapperConfig } from "./styles/sidebar.styles";
import { filters, info } from "../../../helpers/helpers";
import { MyContext } from "../../../globalState/context";
import {
  ToogleFilter,
  ClearFilters,
  SetFilters,
} from "../../../globalState/actions";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./styles/switch.styles";
import { Button } from "@mui/material";

const Sidebar: FC = () => {
  const { state, dispatch } = useContext(MyContext);

  return (
    <Drawer sx={MainWrapperConfig} variant="permanent" anchor="right">
      <TitleWrapper>
        <Typography variant="h5" gutterBottom component="div">
          Informacje
        </Typography>
      </TitleWrapper>
      {info.map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <Divider />
      <TitleWrapper>
        <Typography variant="h5" gutterBottom component="div">
          Filtry
        </Typography>
      </TitleWrapper>
      <List>
        <ListItem>
          <Button
            variant="outlined"
            color="error"
            onClick={() => dispatch(ClearFilters())}
          >
            Clear all
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(SetFilters())}
          >
            Set all
          </Button>
        </ListItem>

        {filters.map((text, idx) => (
          <ListItem
            onClick={(e) => {
              e.stopPropagation();
            }}
            key={idx}
          >
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  onClick={() => {
                    dispatch(ToogleFilter(text));
                  }}
                  checked={state.filters[text]}
                />
              }
              label={text}
              key={text}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
