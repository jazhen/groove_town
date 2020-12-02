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
  validates :name, :ord, :user_id, presence: true

  belongs_to :user
  belongs_to :album
  has_one_attached :audio, dependent: :destroy

  # validate :ensure_audio

  def ensure_audio
    errors[:audio] << 'Please add audio for this album.' unless audio.attached?
  end
end
