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
