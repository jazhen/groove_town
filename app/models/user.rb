# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class CheckLengthValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    if value.blank?
      if attribute == :username
        record.errors[attribute] << 'Please choose your username.'
      else
        record.errors[attribute] << 'Please enter your password.'
      end
    elsif value.length < options[:minimum]
      record.errors[attribute] << "Your #{attribute} must be at least #{options[:minimum]} characters."
    end
  end
end

class User < ApplicationRecord
  validates :username,
            check_length: { minimum: 3 },
            uniqueness: { case_sensitive: true,
                          message: 'That username is already taken.' },
            format: { without: URI::MailTo::EMAIL_REGEXP,
                      message: 'Your username cannot be an email address.' }

  validates :email,
            uniqueness: { case_sensitive: false,
                          message: 'A fan with that email address already exists. Please log in.' },
            format: { with: URI::MailTo::EMAIL_REGEXP,
                      message: 'That email address doesn’t look right.' }

  validates :password,
            check_length: { minimum: 3 },
            allow_nil: true

  validates :session_token,
            presence: true

  validates :password_digest,
            presence: true

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_username_or_email(username_or_email)
    if URI::MailTo::EMAIL_REGEXP.match(username_or_email)
      User.find_by(email: username_or_email)
    else
      User.find_by(username: username_or_email)
    end
  end

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by_username_or_email(username_or_email)
    user&.password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    loop do
      self.session_token = generate_session_token
      break unless User.find_by(session_token: session_token)
    end

    session_token
  end
end
