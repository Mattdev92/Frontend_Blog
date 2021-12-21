import * as React from "react";
import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import { FetchData } from "./mainPage.types";
import { PROFILE_QUERY } from "../../cms/queries";
import Navigation from "../../components/organism/navigation";
import Content from "../../components/organism/content/content";
import Sidebar from "../../components/organism/sidebar/sidebar";
import {
  MainWrapperConfig,
  BoxWrapperConfig,
  MainWrapper,
} from "./styles/mainPage.styles";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
const Loading = () => {
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <CircularProgressWithLabel value={progress} />;
};
export default function MainPage() {
  console.log("render");
  const { error, loading, data } = useQuery<FetchData>(PROFILE_QUERY, {
    fetchPolicy: "network-only",
  });

  if (loading)
    return (
      <MainWrapper>
        <Loading />
      </MainWrapper>
    );
  if (error) return <p>Error :</p>;

  return (
    <Box sx={MainWrapperConfig}>
      <Navigation />
      <Box component="main" sx={BoxWrapperConfig}>
        <Content data={data} />
      </Box>
      <Sidebar />
    </Box>
  );
}
