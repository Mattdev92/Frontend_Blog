import { gql } from "@apollo/client";

export const PROFILE_QUERY = gql`
  {
    allArticles(first: 40) {
      category
      title
      description
      date
    }
  }
`;
