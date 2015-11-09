import Ember from 'ember';

export default Ember.Route.extend({
  // model: function(params){
  //   var currentCourse = this.modelFor('courses').find(function(course){
  //     return course.id == params.course_id;
  //   }));
  //   return currentCourse;
  // }
  model(params){
    var currentCourse = this.modelFor('courses').find(course => {
      return course.id == params.course_id;
    })
    return currentCourse;
  }
});
