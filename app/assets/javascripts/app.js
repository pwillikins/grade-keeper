angular.module('gradeKeeper', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
//        .state('home', {
//          url: '/home',
//          templateUrl: '/home.html',
//          controller: 'MainCtrl'
//        })

        .state('studentTestResults', {
          url: '/studentTestResults',
          templateUrl: '/studentTestResults.html',
          controller: 'StudentTestResultsCtrl'
        });

      $urlRouterProvider.otherwise('studentTestResults');
    }])


  .controller('StudentTestResultsCtrl', [
    '$scope', 'studentService',

    function ($scope, studentService) {
      if ($scope.studentName === '' || $scope.testScore === '') {
        return;
      }

      $scope.allStudents = studentService.students;

      $scope.addStudent = function() {
        $scope.allStudents.push({ studentName: $scope.studentName, testScore: $scope.testScore });
        $scope.studentName = '';
        $scope.testScore = '';
      }
    }])

  .factory('studentService', [function () {
    var allTests = {
      students: []
    };

    return allTests;

  }]);