// adds license badge
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`
  }
if (license === "BSD") {
  return `[![License: ${license}](https://img.shields.io/badge/license-BSD-green)](${renderLicenseLink(license)})`
}
if (license === "GPL") {
  return `[![License: ${license}](https://img.shields.io/badge/license-GPL-blue)](${renderLicenseLink(license)})`
}
  if (!license) {
    return "";
}
}

// adds license link to license badge
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

// layout of sample READme
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license} License
  ${renderLicenseBadge(data.license)}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, contact ${data.username} at ${data.email}
  or [github.com/${data.username}](github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
