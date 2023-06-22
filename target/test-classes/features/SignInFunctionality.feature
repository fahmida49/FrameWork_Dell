#Author: your.email@your.domain.com
#Keywords Summary :

Feature: User Sign in functionality
as a user
I want to sign in
so that I can manage my order

  @Dell1
  Scenario: Verify Sign In Functionality
    Given I am in landing page
    When I mouse hover on sign in
    Then click sign in button
    

  @Dell2
  Scenario: Verify Sign in page Functionality 
    Given I signed in as user 
    | Email                    | Password      |
    | minatahmina2023@yahoo.com| Haverford1999!|
    

    