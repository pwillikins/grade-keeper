class Result < ActiveRecord::Base

  def self.build_response
    all_results = self.all
    if all_results.present?
      test_scores = all_results.collect(&:test_score)
      number_of_scores = test_scores.count
      total_average = test_scores.inject(0) { |sum, score| sum += score } / number_of_scores
      {results: all_results,
       average_score: total_average,
       minimum_score: test_scores.min,
       maximum_score: test_scores.max
      }
    else
      {
        results: [],
        average_score: 0,
        minimum_score: 0,
        maximum_score: 0
      }
    end
  end

end
