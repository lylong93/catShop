import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';

import './index.scss'

const styles = {
	root: {
		borderTop: '1px solid black'
	},
};

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.ok = this.ok.bind(this)
	}

	state = {
		value: 0,
	};



	handleChange = (event, value) => {
		this.setState({ value });
		console.log(value)
	};

	ok = () => {
		console.log(this.props)
		// this.props.history.push( '/test' )
	}
	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction label={<Link to="/">home</Link>} icon={<RestoreIcon />}/>
        <BottomNavigationAction label={<Link to="/test">test</Link>} icon={<RestoreIcon />}/>
        <BottomNavigationAction label={<Link to="/me">me</Link>}  icon={<RestoreIcon />}/>
      </BottomNavigation>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);