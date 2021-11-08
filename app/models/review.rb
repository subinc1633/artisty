class Review < ApplicationRecord
    validates :reviewer_id, :item_id, :rating, :content, presence: true;
    validates :upvote, inclusion: { in: [true, false] }

end
