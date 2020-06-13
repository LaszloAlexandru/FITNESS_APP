import React, {useState} from 'react';

import './app.scss';
import {
  BrowserRouter as Router,
  Route, useHistory , Redirect// for later
} from 'react-router-dom';
import {VisualEditor} from "@web-editor/visual-editor"
import {LandingPage} from '@web-editor/landing-page';
import axios from "axios";
import Cookies from "universal-cookie";
import {DesignList} from "@web-editor/design-list";

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  const [checkToken, setCheckToken] = useState(null);
  const cookies = new Cookies();
  const history = useHistory();

  const checkBearerToken = async () => {
    const bearerToken = cookies.get("bearerToken");

    if (bearerToken) {
      await axios.post('http://localhost:3333/api/auth/verify', {bearerToken})
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
        <Route path='/design-list' component={DesignList} />
        <Route path='/login' component={LandingPage} />
        <Route exact path='/'  >
          <Redirect to='/design-list'/>
        </Route>
      </Router>
    </div>
  );
};

export default App;
