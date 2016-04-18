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

      return o;

    }]);

