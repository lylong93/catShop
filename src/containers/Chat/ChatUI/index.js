import React, {
  Component
} from 'react'

import classNames from 'classnames';

import Input from '@/components/Input';

import style from './style.scss'

class ChatUI extends Component {
  constructor(props) {
    super(props)
    this.ok = this.ok.bind(this)
    this.change = this.change.bind(this)
  }
  state = {
    value: ''
  }
  ok() {
    this.props.change('chat')
  };
  change(event) {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }
  componentWillReceiveProps() {}
  componentWillMount() {};

  render() {
    return (
      <div className={style.chat}>
          <div onClick={this.ok} className={style.head}>返回</div>
          <div className={style.app}>
            <div className={style.list}></div> 
            <input value={this.state.value} onChange={this.change}/>
          </div>
          <div className={style.foot}>ok</div> 
      </div>
    );
  }
}

export default ChatUI