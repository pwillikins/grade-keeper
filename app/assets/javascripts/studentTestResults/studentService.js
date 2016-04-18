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

      o.update = function(test_result) {
        return $http.put('/results/' + test_result.id + '.json', {"student_name": test_result.student_name, "test_score": test_result.test_score})
          .success(function(data){
          });
      };

      o.destroy = function(test_result) {
        $http.delete('/results/' + test_result.id + '.json')
          .success(function(data){
            return o.getAll();
        });
      };

      return o;

    }]);

