import { gql } from "@apollo/client";

export const PROFILE_QUERY = gql`
  {
    allArticles {
      category
      title
      description
      date
    }
  }
`;
