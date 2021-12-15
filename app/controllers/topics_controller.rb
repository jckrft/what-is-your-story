class TopicsController < ApplicationController
  before_action :set_topic, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # before_action :set_user_topic, only: :update

  # GET /topics
  def index
    @topics = Topic.all

    render json: @topics
  end

  # GET /topics/1
  def show
    render json: @topic, include: {responses: {include: :user}}
  end

  # POST /topics
  def create
    @topic = Topic.new(topic_params)
    @topic.user = @current_user

    if @topic.save
      render json: @topic, status: :created, location: @topic
    else
      render json: @topic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /topics/1
  def update
    if @topic.update(topic_params)
      render json: @topic
    else
      render json: @topic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /topics/1
  def destroy
    @topic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # def set_user_topic 
    #   @topic = @current_user.topics.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def topic_params
      params.require(:topic).permit(:topic)
    end
end
