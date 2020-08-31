import React, {useState} from 'react';

import './app.scss';
import {
  BrowserRouter as Router,
  Route, useHistory , Redirect// for later
} from 'react-router-dom';
import {LandingPage} from '@web-editor/landing-page';
import axios from "axios";
import Cookies from "universal-cookie";
import {environment} from "../environments/environment";
import {MainPage} from "@web-editor/main-page";

export const App = () => {

  const [checkToken, setCheckToken] = useState(null);
  const cookies = new Cookies();
  const history = useHistory();

  const checkBearerToken = async () => {
    const bearerToken = cookies.get("bearerToken");

    if (bearerToken) {
      const url = environment.backEndEndpoint + 'auth/verify';
      await axios.post(url, {bearerToken})
        .then(res => {
          setCheckToken(true);
        })
        .catch(err => {
          setCheckToken(false);
          return;
        })
    } else {
      setCheckToken(false);
      history.push('/login');
    }
  };

  checkBearerToken();

  if(checkToken === null) {
    return <div>
      Loading
    </div>
  }

  if(!checkToken) {
    history.push('/login');
  }

  return (
    <div className="app">
      <Router>
        <Route path='/main-page' component={MainPage} />
        <Route path='/login' component={LandingPage} />
        <Route exact path='/'  >
          <Redirect to='/main-page'/>
        </Route>
      </Router>
    </div>
  );
};

export default App;
