# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  name       :string
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  has_many :tracks, dependent: :destroy
  has_one_attached :art
end
