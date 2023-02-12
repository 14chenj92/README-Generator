// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        noinput: nameinput => {            
            if (nameinput) {
            return true;
        } else {
            console.log('Enter your username!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        noinput: emailinput => {            
            if (emailinput) {
            return true;
        } else {
            console.log('Enter your email address!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        noinput: titleinput => {            
            if (titleinput) {
            return true;
        } else {
            console.log('Enter your title!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.',
        noinput: descinput => {            
            if (descinput) {
            return true;
        } else {
            console.log('Enter a description!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project.',
        noinput: installinput => {            
            if (installinput) {
            return true;
        } else {
            console.log('Enter installation instructions!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions for your project.',
        noinput: usageinput => {            
            if (usageinput) {
            return true;
        } else {
            console.log('Enter usage instructions!');
            return false;
        }}
    },
    { // need to add license choices
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        noinput: licenseinput => {            
            if (licenseinput) {
            return true;
        } else {
            console.log('Choose a license!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter instructions on how users can contribute to your project.',
        noinput: coninput => {            
            if (coninput) {
            return true;
        } else {
            console.log('Enter contribution instructions!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions.',
        noinput: testinput => {            
            if (testinput) {
            return true;
        } else {
            console.log('Enter test instructions!');
            return false;
        }}
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userinfo => {
    return generateMarkdown(userinfo);
})
.then(readmeinfo => {
    return writeToFile(readmeinfo);
})
.catch(err => {
    console.log(err);
});
