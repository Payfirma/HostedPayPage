## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [https://localhost:3001](https://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## How to get HPP URL

### 1. POST Request

```
 Method: POST
 URL: you can find this URL in PayHQ - Settings - Hosted Pay Page
 Header: {
    Authorization: Bearer <provided access token>
    Content-Type: application/json
 }
 Body: {
    amount:
    currency:
    domain:
    tax:
    shipping_charge:
    state:
    custom_id:
    first_name:
    last_name:
    email:
    telephone:
    shipping_address:
    billing_address:
 }

For shipping_address/billing_address, country and province should be in short code and whole object as JSON string.

Ex - shipping_address: '{
                          "address1": "xyz",
                          "address2": "abc",
                          "city": "Vancouver",
                          "province": "BC",
                          "country": "CA",
                          "postalCode": "XYZ123"
                        }'

```
#### Request Body
| Field | Required |  Description |
| ----------- | ----------- | ----------- |
| amount | Yes | Tax, shipping_charge excluded |
| currency | Yes | CAD or USD |
| domain | Yes | Domain registered in PayHQ - Settings - Hosted Pay Page when you setup (ex. https://example.com) |
| tax | No | Tax amount you want to charge |
| shipping_charge | No | Shipping amount you want to charge |
| state | No | Whatever you want to get back after a transaction in a redirect URL(ex. your own transaction id or product id). *Note. not saved in Payfirma side* |
| custom_id | No | Keep track of transactions and for future accounting reconciliation |
| first_name | No | First name of the customer |
| last_name | No | Last name of the customer |
| email | No | Email of the customer |
| telephone | No | Phone number of the customer |
| shipping_address | No | Shipping Address of the customer(whole object as JSON string) |
| billing_address | No | Billing Address of the customer(whole object as JSON string) |

### 2. How the Redirect URL looks like

Assuming your redirect URL registered in the PayHQ Settings HostedPayPage page is ‘https://example.com/redirect’.
```
 Body: {
    amount:10.00
    currency: CAD
    domain:https://example.com
    state:Product1
    custom_id:123456
 }
```
### Redirect URL after the transaction
`https://example.com/redirect?result=APPROVED&transaction_id=123456&lookup_id=w7Kjaxy51kX82y4vYVDO&state=Product1&custom_id=123456`

The browser will redirect a user to this URL

- *result* will be one of the following statuses

| Status |
| ----------- | 
| APPROVED | - |
| DECLINED | - |
| CANCELED | - |
 
- `transaction_id` will be always changed since it’s an transaction ID(numeric id)

- `lookup_id` will be always changed since it’s an transaction ID(lookup id)
 
- `state` will be whatever you have included in the request for initializing HPP Transaction

- `custom_id` will be whatever you have included in the request for initializing HPP Transaction

- You can see how the transaction went through with `result`,
- You can use your own identifier what the transaction was about with `state`
- You can use your own identifier `custom_id` for future accounting reconciliation to keep track of transactions 
- You can use either `transaction_id` or `lookup_id` to fetch the transaction information from the Payfirma side for any purposes you may have in the future.

### 3. How to use `transaction_id` and `lookup_id` to get transaction data through Payfirma API
```
 Method: GET
 URL:  https://apigateway.payfirma.com/transaction-service/transaction/lookup/<lookup_id>
 Header: {
    Authorization: Bearer <provided access token>
    Content-Type: application/json
 }
 ```
 ```
 Method: GET
 URL:  https://apigateway.payfirma.com/transaction-service/transaction/<transaction_id>
 Header: {
    Authorization: Bearer <provided access token>
    Content-Type: application/json
 }
 ```
