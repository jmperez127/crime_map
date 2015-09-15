import Ember from 'ember';


export default Ember.Component.extend({
  initMap: function () {
    var container = this.$('#map-canvas')[0];
    var options = {
      center: {lat: -34.397, lng: 150.644},
      zoom: 15
    };
    new window.google.maps.Map(container, options);

  }.on('didInsertElement')
});
