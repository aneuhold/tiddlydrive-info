import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import introductionMD from './markdown/introduction.md';
import Markdown from './Markdown';


/**
 * Each of the markdown files can be listed here, in order of how they will appear
 * on the page
 */
const posts = [
  introductionMD,
];

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  section: {
    marginTop: theme.spacing.unit * 5,
  },
});

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownPosts: posts,
      markdownPostsText: [],
      classes: props.classes,
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    const { markdownPosts, markdownPostsText } = this.state;
    markdownPosts.forEach((post, index) => {
      fetch(post)
        .then(response => response.text())
        .then((text) => {
          markdownPostsText[index] = text;
          this.forceUpdate();
        });
    });
  }

  render() {
    const { classes, markdownPostsText } = this.state;
    return (
      <div className={classes.layout}>
        <Grid item xs={12} md={8}>
          {markdownPostsText.map(post => (
            <Markdown className={classes.section} key={post.slice(0, 20)}>
              {post}
            </Markdown>
          ))}
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
