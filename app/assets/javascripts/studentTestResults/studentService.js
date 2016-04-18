angular.module('gradeKeeper')
  .factory('studentService', [
    '$http', function ($http) {
      var o = {
        students: []
      };

      o.getAll = function() {
        $http.get('/results.json').success(function(data){
          angular.copy(data, o.students);
        });
      };

      o.create = function(test_result) {
        return $http.post('/results.json', test_result).success(function(data){
          o.students.push(data);
        });
      };

      return o;

    }]);

