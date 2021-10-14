import React from 'react';
import PropTypes from 'prop-types';

/**
 * Redirected page registered on PayHQ Settings after trasnaction
 * 
 * @prop {string} result Transaction Result
 * @prop {string} lookup_id Transaction Lookup Id that you can use to search the transaction in PayHQ service
 * @prop {string} state State you want to keep in the returned page
 * 
 */
const RedirectedPage = ({ result, lookup_id, state, custom_id, ...props }) => {
  return (
    <div className="App" style={props.styles.app}>
      <div style={props.styles.header}>PayHQ Hosted Payment Page Demo</div>
      <table className="Table">
        <tr>
          <td className="Cell">
            <h2>About this page</h2>
            <p>
              This page mimics the payment confirmation page on merchant's website. After successful payment the
              customer gets returned to this page to see a confirmation of the purchase. Developers can put in
              additional business logic here that gets triggered based on the transaction status message sent as part of
              the URL.
            </p>
          </td>
        </tr>
      </table>
      <br />
      <div style={props.styles.subheader}>Payment Successful</div>
      <div style={props.styles.info}>
        <div style={props.styles.field}>
          <div>Result:</div>
          <div>Transaction ID:</div>
          <div>State: </div>
          <div>Custom ID: </div>
        </div>
        <div style={props.styles.values}>
          <div>
            {result}
          </div>
          <div>
            {lookup_id}
          </div>
          <div>
            {state}
          </div>
          <div>
            {custom_id}
          </div>
        </div>
      </div>
    </div>
  );
};

RedirectedPage.propTypes = {
  // Transaction Result
  result: PropTypes.string.isRequired,
  // Transaction Lookup Id
  lookup_id: PropTypes.string.isRequired,
  // State you wanted to keep when it comes back
  state: PropTypes.string,
  styles: PropTypes.object
}

export default RedirectedPage;
