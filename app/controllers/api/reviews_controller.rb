class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def index
        @reviews = Review.all;
        render 'api/reviews/index'
    end

    def create
        @review = Review.new(review_params)

        if @review.save!
            render 'api/reviews/index'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render 'api/reviews/index'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render 'api/reviews/index'
    end

    private

    def review_params
        params.require(:review).permit(:rating, :content, :reviewer_id, :item_id)
    end
end