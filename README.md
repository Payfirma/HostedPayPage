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

<img width="1394" alt="Screen Shot 2020-07-17 at 9 31 26 AM" src="https://user-images.githubusercontent.com/67436452/87954352-1d463400-ca61-11ea-8c84-e1508d0551e3.png">

3. Enter your domain and return URL to setup your hosted payment page

<img width="1398" alt="Screen Shot 2020-07-17 at 9 32 44 AM" src="https://user-images.githubusercontent.com/67436452/87954382-2931f600-ca61-11ea-9bff-76f2e34da7a3.png">

4. Once you enter this your hosted payment page will get set up and you will notice that you have been provided the init endpoint to send transaction requests to. 
5. But before you can start using the hosted payment page you will need the access token in order to get access to the backend functionality. 
6. Click on Generate Token button to generate your access token

<img width="1394" alt="Screen Shot 2020-07-17 at 9 46 43 AM" src="https://user-images.githubusercontent.com/67436452/87954408-2fc06d80-ca61-11ea-8231-a6b7f717537d.png">

7. At this point you are all set to start integrating with our hosted payment page
8. Additionally if you are interested in collecting billing and shipping information on the hosted payment page then you can select the capture billing address and capture shipping address options. You can select both or just one of these options, depending on your requirements.

<img width="1392" alt="Screen Shot 2020-07-17 at 9 49 49 AM" src="https://user-images.githubusercontent.com/67436452/87954554-626a6600-ca61-11ea-8b1d-5b99ee451c8b.png">

9. At this point you are done with creating your hosted payment page settings.
10. Next step is to use these settings in your e-commerce application.

# Using the sample application

1. Clone the sample application
2. Open App.js and replace ENDPOINT, DOMAIN and TOKEN values with the InitEndpoint, domain entered in your HPP settings page and the access token respectively.
3. Open the package.json file and change the HTTPS and port settings as per your requirements

Run and test this demo application



