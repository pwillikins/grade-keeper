angular.module('gradeKeeper')
.controller('StudentTestResultsCtrl', [
    '$scope', 'studentService',

    function($scope, studentService) {
      if ($scope.studentName === '' || $scope.testScore === '') {
        return;
      }

      $scope.allStudents = studentService.students;

      $scope.addStudent = function() {
        $scope.allStudents.push({ studentName: $scope.studentName, testScore: $scope.testScore });
        $scope.studentName = '';
        $scope.testScore = '';
      }
      }]);