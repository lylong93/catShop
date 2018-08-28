import React, {
  Component
} from 'react'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import style from './style.scss'

class AddTest extends Component {
  constructor(props) {
    super(props)
  }
   handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  }
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.head}>
          <Badge color="primary" badgeContent={2} >
           <MailIcon/>
          </Badge>
        </div>
        <Chip
        label="Clickable Link Chip"
        clickable
        onDelete={this.handleDelete}
        className={style.chip}
         deleteIcon={<DoneIcon/>}
         color="primary"/>
      </div>
    );
  }
}

export default AddTest