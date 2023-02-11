import {Component} from "react";
import "./Log.scss";

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(submissionValues) {

  }

  render() {
    return (
      <div className="Log">
        <h1>stocazzo</h1>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Type:
            <select name="type" id="type">
              <option value="output">Output</option>
              <option value="input">Input</option>
              <option value="transfer">Transfer</option>
            </select>
          </label>
          <label>
            First name:
            <input type="text" name="name" />
          </label>
          <label>
            Time:
            <input type="time" name="time" id="time" />
          </label>
          <label>
            Date:
            <input type="date" name="date" id="date" />
          </label>
          <label>
            Source:
            <select name="source" id="source">
              <option value="wallet">Wallet</option>
              <option value="bcc">BCC</option>
              <option value="intesa_sanpaolo">Intesa Sanpaolo</option>
              <option value="unicredit">Unicredit</option>
              <option value="bper">BPER</option>
              <option value="pocket">Pocket</option>
              <option value="n26">N26</option>
              <option value="satispay">Satispay</option>
              <option value="paypal">PayPal</option>
              <option value="hype">Hype</option>
              <option value="revolut">Revolut</option>
              <option value="extra">Extra</option>
              {/* Add option in settings to change this list completely, with a reset to default button */}
            </select>
          </label>
          <label>
            Destination:
            <select name="destination" id="destination">
              {/* 1 Star */}
              <option value="bank">Bank</option>
              <option value="car">Car</option>
              <option value="rent">Rent</option>
              <option value="family">Family</option>
              <option value="fees">Fees</option>
              <option value="food">Food</option>
              <option value="fuel">Fuel</option>
              <option value="healthcare">Healthcare</option>
              <option value="household">Household</option>
              <option value="insurance">Insurance</option>
              <option value="job">Job</option>
              <option value="phone_internet">Phone/Internet</option>
              <option value="fines">Fines</option>
              <option value="supplements">Supplements</option>
              <option value="transport">Transport</option>

              {/* 2 Stars */}
              <option value="meal">Meal</option>
              <option value="personal_care">Personal Care</option>
              <option value="app_software">App/Software</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="friends">Friends</option>
              <option value="gifts">Gifts</option>
              <option value="lost">Lost</option>  {/* Why the hell is it in 2 stars??? WDYM?? */}
              <option value="other">Other</option>
              <option value="shipping">Shipping</option>
              <option value="sport">Sport</option>
              <option value="crypto">Crypto</option>
              <option value="accessories">Accessories</option>
              <option value="cafe">Café</option>
              <option value="clothing">Clothing</option>

              {/* 3 Stars */}
              <option value="movies">Movies (not gonna say Cinema 'cause I'm a fucking Yankee)</option>
              <option value="bet">Bet</option>
              <option value="entertainment">Entertainment</option>
              <option value="fun">Fun</option>
              <option value="gaming">Gaming</option>
              <option value="hobby">Hobby</option>
              <option value="hotel">Hotel</option>
              <option value="pub">Pub</option>
              <option value="munchies">Munchies</option>
              <option value="restaurant">Restaurant</option>
              <option value="stuff">Stuff</option>
              <option value="travel">Travel</option>
            </select>
          </label>

          {/* Ask bro WTH is Class in Spreadsheet */}

          <label>
            Amount:
            <input type="number" name="amount" id="amount" min="0" step="0.01" />
          </label>
          <label>
            Currency:
            <select name="currency" id="currency">
              <option value="eur">€</option>
              <option value="usd">$</option>
              <option value="gbp">£</option>
            </select>
          </label>
          <label>
            Comment:
            <input type="text" name="comment" id="comment" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}