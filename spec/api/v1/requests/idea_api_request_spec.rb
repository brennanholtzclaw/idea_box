require 'rails_helper'

RSpec.describe "GET /api/v1/ideas" do
  def parsed_response
    JSON.parse(response.body)
  end

  def format_date(date)
    date.strftime("%Y-%m-%dT%H:%M:%S.%LZ")
  end

  it "returns all ideas" do
    # id,title,body,quality,created_at,updated_at
    idea1 = create(:idea, title: "Test idea 1", body: "Text for number 1 idea")
    idea2 = create(:idea, title: "Test idea 2", body: "Text for number 2 idea")
    idea3 = create(:idea, title: "Test idea 3", body: "Text for number 3 idea")

    get "/api/v1/ideas"

    expect(parsed_response.count).to eq(3)

    expect(parsed_response[0]).to eq({
      "id"         => idea1.id,
      "title" => idea1.title,
      "body" => idea1.body,
      "quality" => idea1.quality,
      "created_at" => format_date(idea1.created_at),
      "updated_at" => format_date(idea1.updated_at)
    })

    expect(parsed_response[1]["title"]).to eq(idea2.title)
    expect(parsed_response[2]["title"]).to eq(idea3.title)
  end

  it "returns one specific idea" do
    # id,title,body,quality,created_at,updated_at
    idea1 = create(:idea, title: "Test idea 1", body: "Text for number 1 idea")
    idea2 = create(:idea, title: "Test idea 2", body: "Text for number 2 idea")
    idea3 = create(:idea, title: "Test idea 3", body: "Text for number 3 idea")

    get "/api/v1/ideas/#{idea1.id}"

    expect(parsed_response).to eq({
      "id"         => idea1.id,
      "title" => idea1.title,
      "body" => idea1.body,
      "quality" => idea1.quality,
      "created_at" => format_date(idea1.created_at),
      "updated_at" => format_date(idea1.updated_at)
    })

    expect(parsed_response).to_not include(idea2.title)
    expect(parsed_response).to_not include(idea3.title)
  end

  it "returns one specific idea" do
    # id,title,body,quality,created_at,updated_at
    idea1 = create(:idea, title: "Test idea 1", body: "Text for number 1 idea")
    idea2 = create(:idea, title: "Test idea 2", body: "Text for number 2 idea")
    idea3 = create(:idea, title: "Test idea 3", body: "Text for number 3 idea")

    get "/api/v1/ideas/#{idea1.id}"

    expect(parsed_response).to eq({
      "id"         => idea1.id,
      "title" => idea1.title,
      "body" => idea1.body,
      "quality" => idea1.quality,
      "created_at" => format_date(idea1.created_at),
      "updated_at" => format_date(idea1.updated_at)
    })

    expect(parsed_response).to_not include(idea2.title)
    expect(parsed_response).to_not include(idea3.title)
  end

end
