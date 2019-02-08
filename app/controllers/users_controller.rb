class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create
  # POST /signup
  # return authenticated token upon signup
  def create
    user = User.create(user_params)
    if user.errors.any?
      errors = user.errors.full_messages.join(", ")
      render json: {message: Message.account_not_created(errors)}, status: :unprocessable_entity
    else
      auth_token = AuthenticateUser.new(user.email, user.password).call
      response = { message: Message.account_created, auth_token: auth_token }
      json_response(response, :created)
    end
  end

  def show
    user = current_user
    json_response(user)
  end

  private

  def user_params
    params.permit(
      :name,
      :email,
      :password,
      :password_confirmation,
      :location
    )
  end
end