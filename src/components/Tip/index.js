import React, {
  Component
} from 'react'

import Snackbar from '@material-ui/core/Snackbar';
import style from './style.scss'

const Tip =(props) => {
  return (
 
    <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={props.show}
        onClose={props.onClose}
        style={{bottom:'100px',width:'50%',margin:'0 auto'}}
        message={props.msg}
      />
    );
}
export default Tip
