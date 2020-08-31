import React, {useState} from 'react';

import './main-page.scss';
import FClass from "./card/FClass";
import {environment} from "../../../../apps/app-client/src/environments/environment";
import axios from "axios";
import {Box, Container, CssBaseline} from "@material-ui/core";
import ClassModal from "./class-modal/class-modal";
import ClassNav from "./class-nav/class-nav";
export interface MainPageProps {}

export const MainPage = (props: MainPageProps) => {
  const [cardList, setCardList] = useState(null);
  const [description, setDescription] = useState(null);
  const [name, setName] = useState(null);

  const [open, setOpen] = React.useState(false);

  const updateClass = async (_name:string, _rating:number) => {
    const url = environment.backEndEndpoint + 'fclass-crud';
    const response = await axios.put(url, {name:_name, rating:_rating})
      .then(res => {
        return res.data;
      });
    setCardList(response);
  };

  const handleOpen = (_description, _name) => {
    setDescription(_description);
    setName(_name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getListData = async() => {

    const url = environment.backEndEndpoint + 'fclass-crud';
    const response = await axios.get(url)
      .then(res => {
        return res.data;
      });
    setCardList(response);
  };
  if(cardList == null){
    getListData();
    return (
      <div>Loading</div>
    )
  }

  const cards = cardList.map(el => {
    return <FClass
      name={el.name}
      shortDescription={el.shortDescription}
      description={el.description}
      rating={el.rating}
      numberOfReviews={el.numberOfReviews}
      handleOpen = {handleOpen}
      updateClass = {updateClass}
    />

  });
  return (
    <>
      <CssBaseline />
      <ClassNav/>
      <ClassModal handleClose={handleClose} open={open} description={description} name={name}/>
      <Container maxWidth="lg" >
        <Box  paddingTop={10}>
          {cards}
        </Box>
      </Container>
    </>
  )
};

export default MainPage;
