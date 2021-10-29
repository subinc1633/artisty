class SessionsController < ApplicationController 
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(user_params)
        if @user
            login!(@user)
            redirect_to root_url
        else
            flash.now[:errors] = @user.errors.full_messages, status: 422
        end
    end

    def destroy
        logout!
        redirect_to root_url
    end
end