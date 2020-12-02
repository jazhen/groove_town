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
class Album < ApplicationRecord
  has_one_attached :art, dependent: :destroy
  belongs_to :user
  has_many :tracks, dependent: :destroy, index_errors: true, inverse_of: :album
  accepts_nested_attributes_for :tracks

  validates :user_id, :release_date, presence: true

  validates :name, length: { in: 1..100,
                             too_short: 'Please enter an album name.',
                             too_long: 'Album name is too long (100 characters max).' }

  # validate :ensure_art

  validates_associated :tracks

  def ensure_art
    errors[:art] << 'Please add cover art for this album.' unless art.attached?
  end
end
