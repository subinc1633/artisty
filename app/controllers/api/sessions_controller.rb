class Api::SessionsController < ApplicationController 
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            flash.now[:errors] = ['Invalid email or password.']
        end
    end

    def destroy
        logout!
        redirect_to root_url
    end
end