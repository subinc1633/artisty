# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  shop_id     :integer          not null
#  category_id :integer          not null
#  title       :string           not null
#  description :text             not null
#  image_url   :text             not null
#  price       :integer          not null
#  options     :string
#  favorite    :boolean          default(FALSE), not null
#  fav_count   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
