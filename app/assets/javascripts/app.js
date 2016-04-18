angular.module('gradeKeeper', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('studentTestResults', {
          url: '/studentTestResults',
          templateUrl: 'studentTestResults/_student_test_results.html',
          controller: 'StudentTestResultsCtrl',
          resolve: {
            resultPromise: ['studentService', function(studentService){
              return studentService.getAll();
            }]
          }
        });

      $urlRouterProvider.otherwise('studentTestResults');
    }]);