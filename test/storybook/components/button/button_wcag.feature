Feature: Verifying button accessibility

 @button @accessibility
  Scenario: Accepting cookies modal
    Given I am on the "home" page for wcag
    When I allow cookie and check for violations
   