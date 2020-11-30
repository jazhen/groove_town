# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  ord        :integer          not null
#  user_id    :bigint
#  album_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  duration   :string           not null
#
class Track < ApplicationRecord
  validates :name, :ord, presence: true

  belongs_to :user
  belongs_to :album
  has_one_attached :audio
end
