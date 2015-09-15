import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  latLong: DS.attr(), //array
  // TODO author and type relationships
  author: DS.attr(),
  latitude: function(){
    return this.get("latLong")[0];
  }.property(),
  longitude: function(){
    return this.get("latLong")[1];
  }.property(),
  type: DS.attr(),
  source: DS.attr('string'),
  confirmations: DS.attr('number'),
  eventDate: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
