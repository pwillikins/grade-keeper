class CreateStudentTestResults < ActiveRecord::Migration
  def change
    create_table :student_test_results do |t|
      t.string :student_name
      t.integer :test_score

      t.timestamps null: false
    end
  end
end
