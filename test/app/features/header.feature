Feature: Verifying home page

  @critical @regression @device
  Scenario: Accepting cookies modal
    Given I am on the "home" page
    When I allow cookie
    Then Cookie modal should not display



  @blocker @test
  Scenario: verifying search functionality
    Given I am on the "home" page
    And I allow cookie
    When I click on search icon
    Then I search "blogs"


