require 'rails_helper'

RSpec.describe 'Root page has expected elements without and with AJAX call' do
  it 'has expected basic elements' do
    create(:idea, title: "A test post", body: "The Body of said test post", quality: "terrible")

    visit '/'

    # expect(page).to have_content("Quality")
    expect(page).to have_content("Title")
    expect(page).to have_content("Idea")
  end
end
