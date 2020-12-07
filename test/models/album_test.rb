# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  name         :string
#  user_id      :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  release_date :datetime         not null
#
require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
