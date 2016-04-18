class Result < ActiveRecord::Base

  def self.build_response
    all_results = self.all
    test_scores = all_results.collect(&:test_score)
    number_of_scores = test_scores.count
    total_average = test_scores.inject(0) { |sum, score| sum += score  } / number_of_scores
    { all_results: all_results,
      total_average: total_average,
      minimum_score: test_scores.min,
      maximum_score: test_scores.max
    }
  end

end
