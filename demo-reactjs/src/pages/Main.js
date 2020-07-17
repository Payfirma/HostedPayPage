import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @prop {func} handlePostRequest handle Checkout button and send a post request
 */
const MainPage = ({ handlePostRequest, ...props }) => {
  return (
    <div className="App" style={props.styles.app}>
      <div style={props.styles.header}>PayHQ Hosted Payment Page Demo</div>
      <table className="Table">
        <tbody>
          <tr>
            <td className="Cell">
              <h2>About this demo page</h2>
              <p>
                This demo page mimics a shopping cart and payment experience on a real merchant website. You as an end
                user are looking at a dummy shopping cart and are ready to make a payment. You will be redirected to the
                hosted payment page to complete the payment.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div style={props.styles.subheader}>Shopping Cart</div>
      <table className="Table">
        <thead>
          <tr>
            <th className="HeaderCell">Item</th>
            <th className="HeaderCell">Quantity</th>
            <th className="HeaderCell">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="Cell">Gaming headsets</td>
            <td className="Cell">1</td>
            <td className="Cell">114.99 CAD</td>
          </tr>
          <tr>
            <td className="Cell">SanDisk 128GB MicroSD card</td>
            <td className="Cell">1</td>
            <td className="Cell">25.50 CAD</td>
          </tr>
          <tr>
            <td className="" />
            <td className="FooterCell">
              <b>Total</b>
            </td>
            <td className="FooterCell">140.49 CAD</td>
          </tr>
        </tbody>
      </table>
      <div style={{ clear: 'both', marginTop: '40px' }} />
      <div style={props.styles.info}>
        <div style={props.styles.field}>
          <div>Amount:</div>
          <div>Tax:</div>
          <div>Shipping Charge:</div>
          <div style={props.styles.totalAmount}>Total Amount:</div>
        </div>
        <div style={props.styles.values}>
          <div>CAD 140.49</div>
          <div>CAD 5.44</div>
          <div>CAD 10.00</div>
          <div style={props.styles.totalAmount}>CAD 155.93</div>
        </div>
      </div>
      <table className="Table">
        <tbody>
          <tr>
            <td className="Cell">
              <h2>Steps to test</h2>
              <ul>
                <li>Click on the checkout button below to be redirected to the hosted payment page</li>
                <li>Fill in the payment details on the hosted pay page and complete the transaction</li>
                <li>
                  On completing the transaction, you will be redirected back to this website with transaction
                  confirmation and lookup id
                </li>
                <li>
                  This lookup id can be used to query transaction details from the PayHQ backing using your merchant
                  account credentials
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="Table">
        <thead>
          <tr>
            <td className="Cell" colSpan={2}>
              <h2>Test card details</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="Cell">Card number :</td>
            <td className="Cell">4111 1111 1111 1111</td>
          </tr>
          <tr>
            <td className="Cell">CVV</td>
            <td className="Cell">Any 3 digits</td>
          </tr>
          <tr>
            <td className="Cell">Expiry date</td>
            <td className="Cell">Any future date</td>
          </tr>
        </tbody>
      </table>
      <table className="Table">
        <tbody>
          <tr>
            <td className="Cell">
              <h2>Contact info</h2>
              <p>Make sure to put in your correct email address in order to receive the transaction receipt</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div style={props.styles.checkoutButton} onClick={handlePostRequest}>
        CHECKOUT
      </div>
    </div>
  );
};

MainPage.propTypes = {
  handlePostRequest: PropTypes.func
}

export default MainPage;