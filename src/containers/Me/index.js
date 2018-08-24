import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import Drawer from '@material-ui/core/Drawer';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	dir: {
		zIndex: 0,
		boxShadow: 'none'
	}
};

class SwipeableTemporaryDrawer extends React.Component {
	state = {
		top: false,
		left: false,
		bottom: false,
		right: false,
		name: 'lyl',
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
      [side]: open,
		});
	};

	render() {
		const { classes } = this.props;

		const sideList = (
			<div className={classes.list}>
        <List component="nav">
          <ListItem >
              <ListItemText primary={this.state.name} />
          </ListItem>
          <Divider />
          <ListItem button >
            <ListItemText primary="Drafts" />
              <ListItemSecondaryAction>
                <Switch/>
            </ListItemSecondaryAction>
          </ListItem>
           <Divider />
          <Divider light/>
          <ListItem button>
            <ListItemText primary="退出" />
          </ListItem>
           <Divider />
        </List>
      </div>
		);

		return (
			<div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
          classes={{
              paper: classes.dir, 
          }}
        >
          <div
    tabIndex = { 0 }
          >
            {sideList}
          </div>
        </Drawer>
      </div>
		);
	}
}

SwipeableTemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);