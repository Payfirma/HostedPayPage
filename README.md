# HostedPayPage

# Steps to setup HPP on PayHQ

Basic requirements for integrating with PayHQ Hosted Payment Page

1. Setup your hosted payment page
1. Provide the domain name and return page URL
1. Generate your access token
1. Use this access token to send payment request to the hosted payment page endpoint

Follow these steps to get started with HPP setup

1. Login to your merchant account
1. Open settings and select hosted payment page

<img width="1394" alt="Screen Shot 2021-10-19 at 12 25 16 PM" src="https://user-images.githubusercontent.com/91910851/137978359-879e513f-be5b-49af-aa16-ecf5f787c971.png">

3. Enter your domain, return URL and callback URL(optional) to setup your hosted payment page

<img width="1394" alt="Screen Shot 2021-10-19 at 12 27 59 PM" src="https://user-images.githubusercontent.com/91910851/137979303-e421a999-3b6c-4f68-8326-bbeb3ced8c5e.png">

4. Once you enter this your hosted payment page will get set up and you will notice that you have been provided the init endpoint to send transaction requests to. 

<img width="1175" alt="Screen Shot 2021-10-19 at 12 28 34 PM" src="https://user-images.githubusercontent.com/91910851/137979744-3a4a15e1-6a1f-4f0f-9fe5-517304f41047.png">

5. But before you can start using the hosted payment page you will need the access token in order to get access to the backend functionality. 
6. Click on Generate Token button to generate your access token

<img width="1177" alt="Screen Shot 2021-10-19 at 12 31 51 PM" src="https://user-images.githubusercontent.com/91910851/137979935-94debe23-5936-4697-83dc-8b2f7eda6f4e.png">

7. At this point you are all set to start integrating with our hosted payment page
8. Additionally if you are interested in collecting billing and shipping information on the hosted payment page then you can select the capture billing address and capture shipping address options. You can select both or just one of these options, depending on your requirements.

<img width="1193" alt="Screen Shot 2021-10-19 at 12 32 57 PM" src="https://user-images.githubusercontent.com/91910851/137980167-7e6df2ca-524a-4942-a209-074e7fa3b1b9.png">

9. At this point you are done with creating your hosted payment page settings.
10. Next step is to use these settings in your e-commerce application.

# Using the sample application

1. Clone the sample application
2. Open App.js and replace ENDPOINT, DOMAIN and TOKEN values with the InitEndpoint, domain entered in your HPP settings page and the access token respectively.
3. Open the package.json file and change the HTTPS and port settings as per your requirements

Run and test this demo application



