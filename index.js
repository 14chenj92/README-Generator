const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./generateMarkdown.js');

// prompts for the README
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
        choices: ['MIT', 'BSD', 'GPL'],
        noinput: license => {            
            if (license) {
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

// function to add README
const writeToFile = data => {
    fs.writeFile('README.md', data, error => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log("Your README has been made.")
        }
    })
}; 


// starts app
function init() {
    return inquirer.prompt(questions);
}

// function to call app
init()
.then(data => {
    return generateMarkdown(data);
})
.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err);
});
