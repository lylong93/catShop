import React, {
  Component
} from 'react'

import classNames from 'classnames';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Input from '@/components/Input';
import Avat from '@/components/Avat';

import style from './style.scss'

class Me extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    value: '',
    msglist: [],
    ifrep: false
  }

  componentWillReceiveProps() {}
  componentWillMount() {};

  render() {
    return (
      <div className={style.me}>
          <Avat name={this.props.name} src={this.props.avat}/>
          <List component="nav">
             <ListItem button>
                <ListItemText primary="Inbox" />
             </ListItem>
              <ListItem button>
                <ListItemText primary="Inbox" />
             </ListItem>
              <ListItem button>
                <ListItemText primary="set" />
             </ListItem>         
             <ListItem button>
                <ListItemText primary="about" />
             </ListItem>
             <ListItem button>
                <ListItemText primary="logOut" />
             </ListItem>
          </List>
      </div>
    );
  }
}

export default Me