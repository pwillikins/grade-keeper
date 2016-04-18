class ResultsController < ApplicationController

  def index
    respond_with Result.all
  end

  def create
    respond_with Result.create(result_params)
  end

  def show
    respond_with Result.find(params[:id])
  end

  def destroy

  end

  private
  def result_params
    params.require(:result).permit(:student_name, :test_score)
  end
end
