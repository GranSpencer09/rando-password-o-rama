## The-Random-Password-Generator-O-Rama

URL: https://granspencer09.github.io/rando-password-o-rama/

Pic of the first prompt to show what it should display upon loading

<img width="539" alt="Screen Shot 2022-08-05 at 3 18 42 PM" src="https://user-images.githubusercontent.com/28960328/183218694-84315175-4c7a-476f-bd69-b326f75bbe00.png">

Pic of the page as it displays after the app runs

<img width="532" alt="Screen Shot 2022-08-05 at 2 58 44 PM" src="https://user-images.githubusercontent.com/28960328/183216907-c2306ea1-459c-4aaa-ad2b-5e707fafa711.png">


## Description
This app helps anyone who needs to create many highly secure passwords and is interested in adding unique characters and mixing up the characters that make up each password. The user is able to determing how long their password will be and if they want uppercase, lowercase, numbers and/or symbols (special) characters in their passwords. This helps users create truly random passwords that differ greatly. They can set a password to be a max of 128 characters long which also makes it tough to crack. The biggest learning I gained from this project was a new way of thinking about for loops and how they can be applied. It was conceptially challenging to wrap my head around the for loop needed to generate the random password, but I used pseudo code to map out the logic and spoke with peers to make sure my logic made sense.

## Installation
This app runs on a live URL which can be found at the top of the README, so there's no installation required.


## Usage
To use this app, first open the URL. Upon doing so, the user is prompted to provide a number, between 7 and 129, to set the length of their new password. Then click, ok. The user will be prompted to confirm or deny that they want lowercase, uppercase, numeric and special characters in their password. For each criteria, they are asked in a confirm window to confirm what characters they want to be in their password. In these first few steps, if the user inputs data that can't be used, an error is returned and the program starts over by asking them to provide a new number between 7 and 129. If no errors are returned, the user sees their new password in an alert window.


## Credits
I leaned heavily on the JS Mini Project (Activity 28) to develop the random number generator logic. I also asked my peers lots of questions regarding the logic of the for loop.


## License
MIT License

Copyright (c) 2022 Spencer Gran

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Features
Fully customize a randomly generated password such that it is as long as a user would like and it contains the type(s) of characters they specifically request. All using prompt windows, this app can accept user input and spit out an unique password.


## How to Contribute
Contributor Covenant Badge

## Tests
To test this function, you can try to break it by entering a number below 8 or greater than 128. You can choose to not select one of the four proceeding criteria. You can answer each question and confirm it creates a password that meets all inputed criteria.

