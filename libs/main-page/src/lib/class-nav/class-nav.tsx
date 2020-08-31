import React from 'react';

import './class-nav.scss';
import {AppBar, Box, Container, CssBaseline, Toolbar, Typography, useScrollTrigger} from "@material-ui/core";

/* eslint-disable-next-line */
export interface ClassNavProps {}
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const ClassNav = (props: ClassNavProps) => {


  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar className="nav">
            <Typography variant="h6">Fitness APP</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default ClassNav;
