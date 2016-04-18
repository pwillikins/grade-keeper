angular.module('gradeKeeper')
.controller('StudentTestResultsCtrl', [
    '$scope', 'studentService',

    function($scope, studentService) {
      if($scope.studentName === '' || $scope.testScore === '') { return; }

      $scope.results = studentService.students;

      $scope.addResult = function() {
        if(!$scope.studentName || $scope.testScore === '') { return; }
        studentService.create({
          student_name: $scope.studentName,
          test_score: $scope.testScore
        });
        $scope.studentName = '';
        $scope.testScore = '';
      };

      $scope.isEditing = false;

      $scope.shouldShowEditing = function() {
        return $scope.isEditing;
      };

      $scope.startEditing = function() {
        $scope.isEditing = true;
      };

      $scope.cancelEditing = function() {
        $scope.isEditing = false;
        return $scope.results;
      };

      $scope.editedResult = null;

      $scope.setEditedResult = function(result) {
        $scope.editedResult = result;
      };

      $scope.updateResult = function(result) {
        studentService.update({
          id: result.id,
          student_name: result.student_name,
          test_score: result.test_score
        });
        $scope.studentName = '';
        $scope.testScore = '';
        $scope.isEditing = false;
      };

      $scope.shouldHideCreating = function() {
        return $scope.isEditing;
      };

      $scope.deleteResult = function(result) {
        studentService.destroy(result);
        return $scope.results;
      };

      $scope.isFailing = function(result) {
        return result.test_score < 65;
      }

      }]);