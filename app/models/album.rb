class Album < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  has_one_attached :album_cover
end
