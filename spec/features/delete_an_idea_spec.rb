require 'rails_helper'

RSpec.feature "deletes an idea", type: feature do
  xscenario "user deletes an idea", js: true do
    idea1 = create(:idea)
    idea2 = create(:idea, title: "Second title", body: "Second Body")

    visit '/'

    expect(page).to have_content(idea1.title)
    expect(page).to have_content(idea2.title)

    first('.idea').click_button "Delete Idea"

    expect(page).to have_content(idea1.title)
    expect(page).to_not have_content(idea2.title)
  end
end
