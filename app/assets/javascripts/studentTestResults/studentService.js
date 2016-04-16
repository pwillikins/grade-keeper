angular.module('gradeKeeper')
  .factory('studentService', [function(){
    var allStudents = {
      students: []
    };

    return allStudents;
  }]);

