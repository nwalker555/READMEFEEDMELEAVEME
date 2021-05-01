// function to generate markdown for README
function generateMarkdown(data) {

  // THEN a high-quality, professional README.md is generated with the title 
  // of my project and sections entitled Description, Table of Contents, 
  // Installation, Usage, License, Contributing, Tests, and Questions

  return `
  # ${data.title}

  ${data.badge}

  # Description
  ${data.description}

  #Table of Contents
  - [Description](#-Description)
  - [Installation](#-Installation)
  - [Usage](#-Usage)
  - [Contributors](#-Contributors)
  - [Test](#-Test)
  - [Questions](#-Questions)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributors
  ${data.contributing}

  # Test
  ${data.test}

  # Questions
  - Here is my GitHub username: ${data.username}
  - For additional questions, email me at: ${data.email}

`;
}

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

module.exports = generateMarkdown;
