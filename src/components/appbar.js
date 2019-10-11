import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { NotificationsActiveOutlined } from '@material-ui/icons';
import WhitePanda  from '../Capture.svg';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    color: 'black',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  Avatar:{
      color: 'white',
      backgroundColor: 'green'
  }
}));

export default function MainAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: '#FFF'}}>
        <Toolbar>
          <a href="https://www.whitepanda.in" target='_blank' style={{marginLeft:'5%'}}>
          <img src={WhitePanda} alt="WhitePanda Logo"></img>
          </a>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop} style={{marginRight:'4.8%'}}>
            <IconButton aria-label="show number of notifications">
              <Badge badgeContent={699} max={1000} color="secondary">
                <NotificationsActiveOutlined fontSize="large" title="699 New Notifications"/>
              </Badge>
            </IconButton>
            <IconButton
              label="account of current user"
            >
              <Avatar className={classes.Avatar}>AB</Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
