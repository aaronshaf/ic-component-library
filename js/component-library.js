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
        name: "Icons"
      },
      {
        name: "Lazily Paginated Records"
      },
      {
        name: "Logo"
      },
      {
        name: "Modal"
      },
      {
        name: "Menu"
      }
    ];

    components = components.map(function(component) {
      component.slug = Ember.String.dasherize(component.name);
      return component;
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
        return component;
      }
    });
  });