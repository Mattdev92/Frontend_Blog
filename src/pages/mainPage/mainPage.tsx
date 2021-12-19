import * as React from "react";
import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import { FetchData } from "./mainPage.types";
import { PROFILE_QUERY } from "../../cms/queries";
import Navigation from "../../components/organism/navigation";
import Content from "../../components/organism/content/content";
import Sidebar from "../../components/organism/sidebar/sidebar";

export default function MainPage() {
  const { error, loading, data } = useQuery<FetchData>(PROFILE_QUERY, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <Box sx={{ display: "flex" }}>
      <Navigation />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Content data={data} />
      </Box>
      <Sidebar />
    </Box>
  );
}
