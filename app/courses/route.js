import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // return this.store.findAll('course');
    return [{
      id: 1,
      name: "Learn Elixir, Seriously people"
    },
    {
      id: 2,
      name: "Advanced Elixir"
    }]
  }
});
