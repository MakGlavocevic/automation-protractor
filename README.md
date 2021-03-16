# Automation of a Smoke Test Case 

Automating a smoke test case for a demo application using Node.js, Protractor, Jasmine and Selenium webdriver

--------------------------------------

# The Test Case

It revolves around the most immportant site functions like sign in, browse products, enter product page, change product attributes, check on product page gallery, add product to the cart, procced to checkout, complete product order. 

--------------------------------------

# What have I used

JDK 1.8

Node.js 14.16.0

Protractor 7.0.0

Jasmine2

Selenium Webdriver-manager

dotenv 

Visual Studio Code 

--------------------------------------

## How to run

Install Java development kit 

Install Node.js

Thru npm install protractor and webdriver-manager 

Install latest Visual Studio Code

Clone my git repository (https://github.com/MakGlavocevic/automation-protractor.git)

Install thru npm dotenv in the root folder of the test

Open Visual Studio Code, open the project folder

Add a .env file and inside of it create your own enviroment variables for username and password and add them to data.js (you need to register to the demo application)

Open your command prompt window, go to the test folder, when in the right location start the webdriver by typing "webdriver-manager start" and clicking enter

Open new command prompt window, go to the test folder, and run the test by typing "protractor conf.js"

--------------------------------------




