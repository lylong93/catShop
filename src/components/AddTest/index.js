import React, {
  Component
} from 'react'

import MailIcon from '@material-ui/icons/Mail';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Chat from '@/containers/Chat';
import ChatList from '@/containers/ChatList';

import style from './style.scss'

class AddTest extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    value: 0,
    show: 'true',
  };

  handleChange = (event, value) => {
    this.setState({
      value
    });
  };
  handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  }
  render() {
    const {
      value,
      show
    } = this.state
    return (
      <div className={style.wrapper}>

        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" href="#basic-tabs" />
          </Tabs>
        </AppBar>

        {value === 0 && <div>Item One</div>}
        {value === 1 && <div>Item tow</div>}
        {value === 2 && <div>Item three</div>}

        <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>new order</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Chip
                  label="Clickable Link Chip"
                  clickable
                  onDelete={this.handleDelete}
                  className={style.chip}
                   deleteIcon={<DoneIcon/>}
                   color="primary"/>
              </ExpansionPanelDetails>
        </ExpansionPanel>


      </div>
    );
  }
}

export default AddTest