require 'rails_helper'

RSpec.describe Idea, type: :model do
  it 'is valid' do
    idea1 = create(:idea)

    idea1.valid?
  end

  it 'has a quality' do
    idea1 = create(:idea)

    expect(idea1.quality).to eq "plausible"
  end

  it 'is either plausible, great, or terrible' do
    idea1 = create(:idea)
    idea2 = create(:idea, quality: "great")
    idea3 = create(:idea, quality: "terrible")

    expect(idea1.quality).to eq "plausible"
    expect(idea2.quality).to eq "great"
    expect(idea3.quality).to eq "terrible"
  end

  it 'cannot be anything else' do
    # expect(FactoryGirl.build(:idea, :quality => "not a thing")).to be_invalid
    expect(build(:idea, :quality => "not a thing")).to be_invalid
  end

  it 'defaults quality to terrible' do
    idea1 = Idea.create(title: "my fake title")

    expect(idea1.quality).to eq "terrible"
  end
end
