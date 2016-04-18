angular.module('gradeKeeper')
.controller('StudentTestResultsCtrl', [
    '$scope', 'studentService',

    function($scope, studentService) {
      $scope.results = studentService.students;

      $scope.addResult = function() {
        if(!$scope.studentName || $scope.testScore === '') { return; }
        studentService.create({
          student_name: $scope.studentName,
          test_score: $scope.testScore
        });
        $scope.studentName = '';
        $scope.testScore = '';
      }
      }]);