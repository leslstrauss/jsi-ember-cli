import Ember from "ember";

var MondayRoute = Ember.Route.extend({
  model: function() {
    return ['blue', 'black', 'red'];
  }
});

export default MondayRoute;


// import Ember from "ember";

// export default Ember.Route.extend({
//   model: function() {
//     return ['blue', 'black', 'red'];
//   }
// });

