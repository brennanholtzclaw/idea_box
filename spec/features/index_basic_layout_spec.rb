require 'rails_helper'

RSpec.describe 'Root page has expected elements without and with AJAX call' do
  xit 'has expected basic elements' do
    create(:idea, title: "A test post", body: "The Body of said test post", quality: "terrible")
    visit '/'

    within('.idea-quality') do
      expect(page).to have_content("Quality")
      expect(page).to_not have_content("Title")
      expect(page).to_not have_content("Idea")
    end

    within('.idea-title') do
      expect(page).to_not have_content("Quality")
      expect(page).to have_content("Title")
      expect(page).to_not have_content("Idea")
    end

    within('.idea-body') do
      expect(page).to_not have_content("Quality")
      expect(page).to_not have_content("Title")
      expect(page).to have_content("Idea")
    end
  end
end
