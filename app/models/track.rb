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

  validate :validate_audio

  def validate_audio
    if audio.attached?
      if audio.blob.byte_size > 10_000_000
        errors[:errors] << 'File size is larger than 10MB.'
      elsif audio.blob.content_type.includes['audio/mpeg', 'audio/mp3']
        errors[:errors] << 'File is not of type .mp3.'
      end
      audio.purge
    else
      errors[:errors] << 'Please add audio for this album.'
    end
  end
end
