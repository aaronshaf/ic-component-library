var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});

window.components = [
  { name: 'ic-icons' },
  { name: "ic-lazily-paginated-records" },
  { name: "ic-canvas-logo" },
  { name: "ic-modal" },
  { name: "ic-menu" },
  { name: "ic-trigger" }
];

components = components.map(function(component) {
  component.slug = Ember.String.dasherize(component.name);
  component.page = 'pages/' + component.slug;
  return Ember.Object.create(component);
});

Ember.View.reopen({
  attributeBindings: ['list','autofocus']
})

App.ApplicationController = Ember.Controller.extend({
  components: components
});

// App.LogoController = Ember.Controller.extend({});

App.Router.map(function() {
  this.resource('ic-components', {path: 'ic/'},  function() {
    this.route('component', { path: ':component_slug' });
  });
});

App.IcComponentsRoute = Ember.Route.extend({
  model: function(params) {
    return components;
  }
});

App.IcCanvasLogoComponent = Ember.Component.extend({
  tagName: 'ic-canvas-logo',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : '#D64027';
  }.property('fill-color')
});

App.IcIconXComponent = Ember.Component.extend({
  tagName: 'ic-icon-x',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : 'black';
  }.property('fill-color')
});

App.IcIconAssignmentComponent = Ember.Component.extend({
  tagName: 'ic-icon-assignment',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : 'black';
  }.property('fill-color')
});

App.IcIconQuizComponent = Ember.Component.extend({
  tagName: 'ic-icon-quiz',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : 'black';
  }.property('fill-color')
});

App.IcIconDiscussionComponent = Ember.Component.extend({
  tagName: 'ic-icon-discussion',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : 'black';
  }.property('fill-color')
});

App.IcIconPageComponent = Ember.Component.extend({
  tagName: 'ic-icon-page',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : 'black';
  }.property('fill-color')
});

App.IcIconSettingsComponent = Ember.Component.extend({
  tagName: 'ic-icon-settings',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : '#010101';
  }.property('fill-color')
});

App.IcIconPublishComponent = Ember.Component.extend({
  tagName: 'ic-icon-publish',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : '#010101';
  }.property('fill-color')
});

App.IcIconUnpublishComponent = Ember.Component.extend({
  tagName: 'ic-icon-unpublish',
  classNames: 'ic-icon',
  attributeBindings: 'style',
  'fillColor': function() {
    return this.get('fill-color') ? this.get('fill-color') : '#010101';
  }.property('fill-color')
});

App.IcComponentsComponentRoute = Ember.Route.extend({
  model: function(params) {
    var component = components.findProperty('slug',params.component_slug);
    component
    return component;
  },
  renderTemplate: function(controller,model) {
    this.render('ic-components/' + model.get('slug'), {
      view: 'IcComponentsComponent',
      // into: 'ic-components',
      outlet: 'component'
    });
  }
});