Feature: User Registration

  Scenario: Access user registration page

    Given I access the registration page
    Then the registration page should be displayed
    And the registration form fields should be displayed
    Given I fill in the registration form with valid data
    And I confirm the registration
    Then the organization page should be displayed