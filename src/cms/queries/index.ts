import { gql } from "@apollo/client";

export const PROFILE_QUERY = gql`
  {
    allArticles(first: 60) {
      category
      title
      description
      date
    }
  }
`;
