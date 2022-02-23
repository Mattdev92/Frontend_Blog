export interface AllArticles {
  category: string;
  title: string;
  description: string;
  date: string;
  id?: number;
}

export interface FetchData {
  allArticles: AllArticles[];
}

export interface ComponentProps {
  data: FetchData;
}
