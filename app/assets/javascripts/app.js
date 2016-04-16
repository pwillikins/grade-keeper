angular.module('gradeKeeper', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('studentTestResults', {
          url: '/studentTestResults',
          templateUrl: 'student_test_results/_student_test_results.html',
          controller: 'StudentTestResultsCtrl'
        });

      $urlRouterProvider.otherwise('studentTestResults');
    }]);