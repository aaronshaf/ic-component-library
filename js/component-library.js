define("component-library", 
  [],
  function() {
    "use strict";
    var App = Ember.Application.create({
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_ACTIVE_GENERATION: true,
      LOG_VIEW_LOOKUPS: true
    });

    window.components = [
      {
        name: 'icon'
      },
      {
        name: "lazily-paginated-records"
      },
      {
        name: "logo"
      },
      {
        name: "modal"
      },
      {
        name: "menu"
      },
      {
        name: "trigger"
      }
    ];

    components = components.map(function(component) {
      component.slug = Ember.String.dasherize(component.name);
      return Ember.Object.create(component);
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

    App.IcComponentsComponentRoute = Ember.Route.extend({
      model: function(params) {
        var component = components.findProperty('slug',params.component_slug);
        jQuery.ajax('pages/ic/' + params.component_slug + '.html?bust=' + Math.random()).then(function(page) {
          this.set('page',page);
        }.bind(component));
        return component;
      }
    });
  });