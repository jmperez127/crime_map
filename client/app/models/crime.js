import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  latLong: DS.attr(), //array
  // TODO author and type relationships
  author: DS.attr(),
  type: DS.attr(),
  source: DS.attr('string'),
  confirmations: DS.attr('number'),
  eventDate: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
