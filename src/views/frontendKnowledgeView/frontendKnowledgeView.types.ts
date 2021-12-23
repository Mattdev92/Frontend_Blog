export interface AllArticles {
  category: string;
  title: string;
  description: string;
  date: string;
}

export interface FetchData {
  allArticles: AllArticles[];
}

export interface ComponentProps {
  data: FetchData;
}
