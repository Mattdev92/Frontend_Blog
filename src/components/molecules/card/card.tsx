import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../../assets/images/it.jpg";
import { TechCardProps } from "./card.types";
import { MainWrapper } from "./styles/card.styles";

const TechCard: FC<TechCardProps> = ({ type, title, description, date }) => {
  const cardDate = new Date(date);
  const convertedDate = cardDate.toISOString().substring(0, 10);

  return (
    <MainWrapper>
      <Card sx={{ minWidth: 200, maxWidth: 330, height: 410 }}>
        <CardHeader
          avatar={<Chip avatar={<Avatar>{type[0]}</Avatar>} label={type} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={`${convertedDate}`}
        />
        <CardMedia component="img" height="194" image={img} alt="IT" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Link to="/2/deitails">Datils</Link>
        </CardContent>
      </Card>
    </MainWrapper>
  );
};

export default TechCard;
