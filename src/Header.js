import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/**
 * Provides styles for this component. This is built with Material-UI in mind.
 * @param {object} theme
 */
const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
    color: theme.palette.common.white,
  },
});

/**
 * Includes the menu and name at the top of the page
 */
const Header = (props) => {
  const { classes } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography
          noWrap
          variant="h6"
          className={classes.toolbarTitle}
        >
          Tiddly Drive 2
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
