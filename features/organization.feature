Feature: Organization

  Scenario: Login with valid user and validate organization page

    Given I access the login page
    When I enter a valid email
    And I continue to password step
    And I enter a valid password
    And I submit the login
    Then I close the welcome popup if displayed
    And I should see the my companies page displayed