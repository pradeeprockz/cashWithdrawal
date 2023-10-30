import React, {Component} from 'react'

class DenominationItem extends Component {
  handleClick = () => {
    const {denomination, onDeduct} = this.props
    onDeduct(denomination.value)
  }

  render() {
    const {denomination} = this.props

    return (
      <li className="denomination-item" onClick={this.handleClick}>
        {denomination.value} rupees
      </li>
    )
  }
}

export default DenominationItem
