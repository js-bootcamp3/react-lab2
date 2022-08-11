import React from 'react';

export default class TitleContainer extends React.Component {

  handleClick() {
    alert('clicked')
  }

  render() {
    console.log('this', this)
    console.log('this.props', this.props)

    return (
      <div onClick={this.props.onClick}>
        <h1 className={this.props.size}>{this.props.title}</h1>
      </div>
    )
  }
}