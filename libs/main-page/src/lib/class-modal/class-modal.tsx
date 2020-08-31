import React from 'react';

import './class-modal.scss';
import {Backdrop, Box, Card, Fade, Modal} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import {Rating} from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

/* eslint-disable-next-line */
export interface ClassModalProps {
  handleClose: () => void,
  open: any,
  description:string,
  name: string
}



export const ClassModal = (props: ClassModalProps) => {
  const {handleClose, open, description, name} = props;
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const useStylesCard = makeStyles({
    root: {
      maxWidth: 600,
      margin:"15px",
      display:"inline-block"
    },
  });

  const classes = useStyles();
  const classesCard = useStylesCard();
  const imageUrl = name != null ? 'assets/' + name.split(' ').join('').split('-').join('').toLowerCase() + '.jpg' : '';

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Card className={classesCard.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="h2">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ClassModal;
