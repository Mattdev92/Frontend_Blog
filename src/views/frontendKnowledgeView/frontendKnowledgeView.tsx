import React, { FC, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TechCard from "../../components/molecules/card/card";
import { MyContext } from "../../globalState/context";
import { FilteredCategory } from "../../helpers/helpers";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./styles/switch.styles";
import { ToogleFilters } from "../../globalState/actions";
import { useQuery } from "@apollo/client";
import { FetchData } from './frontendKnowledgeView.types';
import { PROFILE_QUERY } from "../../cms/queries";
import { MainWrapper } from "./styles/frontendKnowledgeView";
import Loading from "./loading";

const FrontendKnowledgeView: FC = () => {
  const { state, dispatch } = useContext(MyContext);
  const { filters } = state;
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
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <FormControlLabel
        control={
          <IOSSwitch
            sx={{ m: 1 }}
            checked={state.filtersActive}
            onChange={() => dispatch(ToogleFilters())}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Filtry"
      />
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.keys(data.allArticles).length !== 0 &&
          data.allArticles.map(
            ({ category, title, description, date }, idx) =>
              FilteredCategory(category.toUpperCase(), filters) && (
                <Grid item xs={4} sm={4} md={4} key={idx}>
                  <TechCard
                    type={category}
                    title={title}
                    description={description}
                    key={idx}
                    date={date}
                  />
                </Grid>
              )
          )}
      </Grid>
    </Box>
  );
};

export default FrontendKnowledgeView;
