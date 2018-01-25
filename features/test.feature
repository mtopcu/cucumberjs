Feature: Test Sony Mobile Web Page

  Scenario Outline: Test Sony Mobile Web Title Description  
    Given I visit "https://www.sonymobile.com/<locale>"
    And Wait "2000"

  	Examples:
     |locale|
     | sa   |
     | mx   |