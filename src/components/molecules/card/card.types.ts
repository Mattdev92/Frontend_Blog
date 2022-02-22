import { IconButtonProps } from "@mui/material/IconButton";

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface TechCardProps {
  type: string;
  title: string;
  description: string;
  date: string;
  id?: string;
}
