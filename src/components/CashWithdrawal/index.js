import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 2000, // Initial balance
    }
  }

  // Method to deduct the value from the balance
  deductValue = value => {
    if (this.state.balance >= value) {
      this.setState({balance: this.state.balance - value})
    }
  }

  render() {
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal">
        <p className="heading">Your Balance: {this.state.balance} in rupees</p>
        <p className="heading">Withdraw</p>
        <p className="description"> CHOOSE SUM (IN RUPEES) </p>
        <ul>
          {denominationsList.map(denomination => (
            <DenominationItem
              key={denomination.id}
              denomination={denomination}
              onDeduct={this.deductValue}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
