import React, {
  Component
} from 'react'

import Header from '@/components/Header'
import Upload from '@/components/Upload'

import style from './style.scss'

class Set extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Header title='设置'/>
        <Upload/>
      </div>
    );
  }
}

export default Set