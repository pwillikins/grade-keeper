class ResultsController < ApplicationController

  def index
    response = Result.build_response
    respond_with response, status: 200
  end

  def create
    respond_with Result.create(result_params), status: 200
  end

  def show
    respond_with Result.find(params[:id]), status: 200
  end

  def update
    result = Result.find(params[:id])
    updated_result = result.update_attributes(student_name: params["student_name"],
                                              test_score: params["test_score"])
    if updated_result
      respond_with result, status: 200
    else
      render json: {error: "Unable to update Result"}, status: 422
    end
  end

  def destroy
    result = Result.find(params[:id])
    if result.destroy
      respond_with :index, status: 200
    else
      render json: {error: "Unable to delete Result"}, status: 422
    end
  end

  private
  def result_params
    params.require(:result).permit(:student_name, :test_score)
  end
end
