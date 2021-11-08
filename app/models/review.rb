class Review < ApplicationRecord
    validates :reviewer_id, :item_id, :rating, :content, presence: true;
    validates :upvote, inclusion: { in: [true, false] }

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User,
        optional: true

    belongs_to :item, optional: true
end
