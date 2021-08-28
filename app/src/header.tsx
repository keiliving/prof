import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const Header: React.FC<any> = () => (
  <HideOnScroll >
    <AppBar color='default'>
      <Toolbar>
        <Typography variant="h5">Homepage</Typography>
        <div className="link">
          <a href="https://qiita.com/keiliving">Qiita</a>
          <a href ="https://twitter.com/keiliving">Twitter</a>
        </div>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);

export default Header;