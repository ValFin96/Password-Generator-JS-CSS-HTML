# Password - Generator

## Description

This is a password generator which can generate a secure password between 8 and 128 characters. The password can be generated based on the criteria: include/exclude uppercase, lowcase, numbers and/or symbols. The final password will be displayed in the output field above the generate button.

## How it works

Step 1. Click on the generate button to trigger the window prompts.  
  

![Step-1](assets/images/Screenshot%201.jpg)  
  
Step 2. Follow the prompts to add uppercase, lowercase, numbers and symbols to your new password. Make sure to choose at least one criteria in order to proceed.

![Step-2](assets/images/Screenshot%202.jpg)

Step 3. Random password will be generated once all the prompts are answered.

![Step-3](assets/images/Screenshot%203.jpg)
  
## How it is built

The code starts with variables and arrays declaration. A user is asked to enter the desired length of their password and the code validates if the input is a number via a getPasswordLength function. Once the input is validated, a user is asked to opt in or to opt out for uppercase, lowercase, numbers and symbols to be included in the password. If any of the criteria is true, the characters will be added to the new array that will be randomly lopped over to choose characters randomly for a new password.