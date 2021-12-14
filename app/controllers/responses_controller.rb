class ResponsesController < ApplicationController
  before_action :set_response, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:index, :create, :update. :destroy]
  # before_action :set_user_response, only: [:update, :destroy]

  # GET /responses
  def index
    @responses = Response.all

    render json: @responses, include: [:user, :topic]
  end

  # GET /responses/1
  def show
    render json: @response, include: [:user, :topic]
  end

  # POST /responses
  def create
    @response = Response.new(response_params)
    # @topic = Topic.find(response_params[:topic_id])
    # @response.user = @current_user
    # @response = Response.where(topic_id: @topic.id).new(response_params)

    if @response.save
      render json: @response, status: :created, location: @response
    else
      render json: @response.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /responses/1
  def update
    if @response.update(response_params)
      render json: @response
    else
      render json: @response.errors, status: :unprocessable_entity
    end
  end

  # DELETE /responses/1
  def destroy
    @response.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_response
      @response = Response.find(params[:id])
      # @topic = Topic.find(params[:topic_id])
    end

    # def set_user_response 
    #   @response = @current_user.responses.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def response_params
      params.require(:response).permit(:response, :user_id, :topic_id)
    end
end
