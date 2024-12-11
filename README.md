# Serverest Cypress Testing Project

This project is a Cypress-based testing framework designed to test both front-end and API endpoints for the **Serverest** application. It includes modular test files, reusable page objects, and data-driven tests using fixtures.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [Folder Structure Explanation](#folder-structure-explanation)
- [Configuration](#configuration)
- [Contributing](#contributing)

---

## Project Structure

The project is organized as follows:
```
cypress/ 
├── e2e/ # End-to-end test cases 
│ ├── endpoint/ # API endpoint tests 
│ │ ├── login.cy.js # Tests for login API 
│ │ └── user.cy.js # Tests for user-related API 
│ ├── front/ # Front-end tests 
│ ├── register.cy.js # Tests for user registration UI 
│ └── search.cy.js # Tests for search functionality 
├── fixtures/ # Test data for reusable scenarios 
│ ├── endpointBody/ # JSON payloads for API requests 
│ │ ├── loginAdmin.json # Admin login payload 
│ │ ├── registerUser.json # User registration payload 
│ │ └── productSearch.json # Payload for product search 
│ └── loginUser.json # User login payload 
├── pages/ # Page Object Models for UI tests 
│ ├── LoginPage.js # Methods and selectors for login page 
│ ├── RegisterPage.js # Methods and selectors for registration page 
│ └── SearchPage.js # Methods and selectors for search page 
└── support/ # Cypress-specific custom commands or helpers cypress.config.js 
```
## Setup Instructions

To get started with this project, follow these steps:

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd serverest-cypress-testing
2. **Running**  
   ```bash
   npx cypress run