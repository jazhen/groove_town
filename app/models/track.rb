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
  belongs_to :user
  belongs_to :album
  has_one_attached :audio, dependent: :destroy

  validates :ord, :user_id, presence: true
  validates :name, length: { in: 1..100,
                             too_short: 'Please enter a track name.',
                             too_long: 'Track name is too long (100 characters max).' }

  validate :ensure_audio

  def ensure_audio
    errors[:audio] << 'Please add audio for this album.' unless audio.attached?
  end
end
