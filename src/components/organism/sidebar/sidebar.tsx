import React from 'react';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { TitleWrapper, drawerWidth } from './styles/sidebar.styles';

const Sidebar = () =>{
    return(
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List>
          <TitleWrapper>
            <Typography variant="h4" gutterBottom component="div">
              Informacje
            </Typography>
          </TitleWrapper>
          {["O stronie...", "Kontakt"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <TitleWrapper>
          <Typography variant="h4" gutterBottom component="div">
            Filtry
          </Typography>
        </TitleWrapper>
        <List>
          {[
            "Html",
            "Css",
            "Js",
            "React",
            "Typescript",
            "Frontend",
            "Backend",
            "Git",
            "Computer science",
            "Algoritmic",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}

export default Sidebar;