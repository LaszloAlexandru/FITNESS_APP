import React, {useState} from 'react';

import './card.scss';
import {makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import {Box, Card} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Rating} from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

/* eslint-disable-next-line */
export interface FClassProps {
  name: string,
  shortDescription: string
  description: string
  rating: number
  numberOfReviews: number,
  handleOpen:(description, name) => void,
  updateClass: (name, rating) => void
}

export const FClass = (props: FClassProps) => {
  const {name, shortDescription, description, rating, numberOfReviews, handleOpen, updateClass} = props;
  const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      margin:"15px",
      display:"inline-block"
    },
  });
  const [value, setValue] = useState(0);
  const [isActive, setActive] = useState(false);

  if(value === 0) {
    setValue(rating);
  }
  const handleFinish = () => {
    const newValue = (rating * numberOfReviews + value) / (numberOfReviews + 1);
    updateClass(name, newValue);
    setActive(false);
    setValue(newValue);
  };

  const activate = () => {
    setActive(true);
  };
  const imageUrl = 'assets/' + name.split(' ').join('').split('-').join('').toLowerCase() + '.jpg';
  const buttons = isActive ?
    (
      <CardActions>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rate experience</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Button size="small" color="primary" onClick={handleFinish}>
          Finish
        </Button>
      </CardActions>
    ): (
      <CardActions>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating name="read-only" value={value} readOnly />
        </Box>
        <Button size="small" color="primary" onClick={activate}>
          Join
        </Button>
        <Button size="small" color="primary" onClick={()=> handleOpen(description, name)}>
          Learn More
        </Button>
      </CardActions>
    );

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography  variant="body2" color="textSecondary" component="h3" >
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      {buttons}
    </Card>
  );
};

export default FClass;
