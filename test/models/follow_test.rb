# == Schema Information
#
# Table name: follows
#
#  id                :integer          not null, primary key
#  user_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  following_user_id :integer          not null
#

require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
