import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useQuery } from "@apollo/client";
import TechCard from "../../components/molecules/card/card";
import {
  TitleWrapper,
  drawerWidth,
} from "./styles/mainPage.styles";
import { FetchData } from "./mainPage.types";
import { PROFILE_QUERY } from "../../cms/queries";
import Grid from '@mui/material/Grid';

export default function MainPage() {
  const { error, loading, data } = useQuery<FetchData>(PROFILE_QUERY, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Frontend Space
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Object.keys(data.allArticles).length !== 0 &&
              data.allArticles.map(({ category, title, description, date }, idx) => {
                return (
                  <Grid item xs={2} sm={4} md={4} key={idx}>
                    <TechCard
                      type={category}
                      title={title}
                      description={description}
                      key={idx}
                      date={date}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
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
        <Toolbar />
        <Divider />
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
    </Box>
  );
}
