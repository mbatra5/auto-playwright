Feature: Verifying home page

  @trivial @sanity
  Scenario: Accepting cookies modal
    Given I am on the "home" page
    When I allow cookie
    Then Cookie modal should not display



  @smoke
  Scenario: verifying search functionality
    Given I am on the "careers" page
    And I allow cookie
    When I click on search icon
    Then I search "blogs"


