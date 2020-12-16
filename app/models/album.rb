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

require 'open-uri'

class Album < ApplicationRecord
  has_one_attached :art, dependent: :destroy
  has_one_attached :thumbnail_200, dependent: :destroy
  has_one_attached :thumbnail_1000, dependent: :destroy

  belongs_to :user
  has_many :tracks, dependent: :destroy, inverse_of: :album

  accepts_nested_attributes_for :tracks, allow_destroy: true
  validates_associated :tracks

  validates :user_id, :release_date, presence: true

  validates :name, length: { in: 1..100,
                             too_short: 'Please enter an album name.',
                             too_long: 'Album name is too long (100 characters max).' }

  validate :validate_art

  def validate_art
    if art.attached?
      if !['image/jpeg', 'image/png'].include?(art.blob.content_type)
        errors[:art] << 'File is not of type .jpg or .png.'
        art.purge
      elsif art.blob.byte_size > 5.megabytes
        errors[:art] << 'File size is larger than 5MB.'
        art.purge
      else
        resized_art_200_url = art.variant(resize: '200x200').processed.service_url
        thumbnail_200.attach(io: open(resized_art_200_url),
                             filename: art.blob.filename)

        resized_art_1000_url = art.variant(resize: '1000x1000').processed.service_url
        thumbnail_1000.attach(io: open(resized_art_1000_url),
                              filename: art.blob.filename)
      end
    else
      errors[:art] << 'Please add cover art for this album.'
    end
  end
end
