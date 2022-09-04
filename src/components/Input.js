import React, { Component } from 'react'

export default class CustomizeInput extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const {value='',...otherProps} = this.props
    return (
      <div>
        <input type="text" value={value} {...otherProps} />
      </div>
    )
  }
}
