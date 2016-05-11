require 'rails_helper'

RSpec.feature "user creates a new idea", type: feature do
  scenario "user creates new idea", js: true do
    idea1 = create(:idea)

    visit '/'

    expect(page).to have_content(idea1.title)

    fill_in "idea-title", with: "My new Test idea"
    fill_in "idea-body", with: "This is the body of my test idea"

    click_on "Create Idea"

    expect(page).to have_content(idea1.title)
    expect(page).to have_content("My new Test idea")
    expect(page).to have_content("This is the body of my test idea")
  end
end
