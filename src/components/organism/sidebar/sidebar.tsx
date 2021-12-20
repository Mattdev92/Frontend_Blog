import React, { FC, useContext } from "react";
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
import { ToogleFilter } from "../../../globalState/actions";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./styles/switch.styles";

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
        {filters.map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => dispatch(ToogleFilter(text))}
          >
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} /> */}
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label={text}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
