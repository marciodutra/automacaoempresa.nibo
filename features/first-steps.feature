Feature: Primeiros Passos

  Scenario: Acessar a tela de Primeiros Passos

    Given I access the login page
    When I enter a valid email
    And I continue to password step
    And I enter a valid password
    And I submit the login
    Then I close the welcome popup if displayed
    And I should see the my companies page displayed
    When I click add company
    And I fill the company registration form with valid data
    And I confirm company creation
    Then the company page should be displayed

    When clicar em Primeiros Passos
    Then deverá visualizar a página de Primeiros Passos