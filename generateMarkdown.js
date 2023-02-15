// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`
  }
if (license === "BSD") {
  return `[![License: ${license}](https://img.shields.io/badge/license-BSD-green)(${renderLicenseLink(license)})`
}
if (license === "GPL") {
  return `[![License: ${license}](https://img.shields.io/badge/license-GPL-blue)(${renderLicenseLink(license)})`
}
  if (!license) {
    return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/license/mit-0/"
  }
  if (license === "BSD") {
    return "https://opensource.org/license/bsd-3-clause/"
  }
  if (license === "GPL") {
    return "https://opensource.org/licenses-old/gpl-license-html/"
  }
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#test)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, contact ${data.username} at ${data.email}
  or (github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
