## Playwright Test Automation Framework

# Overview

This project is an end-to-end test automation framework built using:

- Playwright
- TypeScript
- Page Object Model (POM)
- dotenv for environment management

It is designed to be scalable, maintainable, and easy to extend.

# Project Structure
LoginPageTests
├── pages/              # Page Object Models
├── tests/              # Test specs
├── fixtures/           # Custom Playwright fixtures
├── utils/              # Helpers (env, utils, etc.)
├── data-files/         # Test data files
├── playwright.config.ts
├── .env
└── package.json

# Running Tests
- Run all tests
npx playwright test
- Run a specefic test file
npx playwright test tests/login-page-tests.spec.ts
- Run tests in UI mode
npx playwright test --ui
- Run tests in Debug mode
npx playwright test --debug

# Environment Variables
- Update the .env file in the root:
BASE_URL=#BASE_URL
VALID_USERNAME=#VALID_USERNAME
VALID_PASSWORD=#VALID_PASSWORD
INVALID_USERNAME=#INVALID_USERNAME
INVALID_PASSWORD=#INVALID_PASSWORD

# Architecture
All page interactions are encapsulated inside page classes (ie: class LoginPage)

# Fixtures
Custom fixtures are used to inject page objects and data files into tests.

# spec/test structure
- imports from fixtures.
- test.describe: To describe the block of tests inside the file/spec.
- test: each test scenario individually developed.
- test.step: each step should be described to facilitate debbuging and maintenance of the framework. 

# Utilities
- env.ts → environment variable management.
- utils.ts → helper functions mostly shared between different pages.

# Best Practices and suggestions
- Use POM for all pages
- Avoid hardcoded values in tests (use data files or add secret values to .env file if necessary)
- Use expect() for assertions
- Kepp assertions in the spec files
- Keep locators reusable and dynamic
- Prefer methods for dynamic locators
- Keep tests independent

# Common Mistakes
- Missing .env variables → causes navigation failures
- Using page.goto('/') without baseURL
- Not using await on async actions
- Overusing static locators instead of dynamic methods
