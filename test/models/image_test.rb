# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  cloud_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
