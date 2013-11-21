Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "styles", "", options) : helperMissing.call(depth0, "render", "styles", "", options))));
  data.buffer.push("\n\n<layout>\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</layout>\n");
  return buffer;
  
});

Ember.TEMPLATES["ic-components"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "ic-logo", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("component")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "ic-components.component", "slug", options) : helperMissing.call(depth0, "link-to", "ic-components.component", "slug", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<section class=\"fixed-vertical flex flex-column\" style=\"width: 240px;\">\n  <logo style=\"width: 100%;\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </logo>\n  <nav class=\"component-menu\" style=\"overflow-y: scroll;\">\n    <components style=\"display: block;\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </components>           \n  </nav>\n</section>\n<article class=\"fixed-vertical\" style=\"right: 0; left: 240px; padding: 24px;\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</article>");
  return buffer;
  
});

Ember.TEMPLATES["ic"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("Component data...\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "component.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["styles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style scoped>\n* { box-sizing: border-box }\n\na {\n  color: black;\n  text-decoration: none;\n}\n\ntemplate {\n  display: none;\n}\n\nbody {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; \n  padding: 0;\n  margin: 0;\n}\n\nlogo {\n  display: block;\n  background-color: #CA3F2F;\n  height: 200px;\n  padding: 32px;\n}\n\nlayout {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\nh1 {\n  margin-top: 0;\n  font-weight: normal;\n  font-size: 2em;\n}\n\nnav {\n  background-color: #f1f1f1;\n  flex: 1;\n}\n\ncomponent {\n  display: block;\n  padding: 16px;\n  transition: background-color 0.15s;\n  -webkit-transition: background-color 0.15s;\n}\n\ncomponent:hover,\ncomponent.active {\n  background-color: #e5e5e5;\n  cursor: pointer;\n}\n\n.fixed-vertical {\n  top: 0;\n  bottom: 0;\n  position: fixed;\n}\n\n.flex {\n  display: -webkit-flex;\n  display: flex;\n}\n\n.flex-row {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.flex-column {\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n</style>");
  
});

Ember.TEMPLATES["components/ic-logo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"100%\" height=\"100%\" viewBox=\"0 0 26.686 26.695\" enable-background=\"new 0 0 26.686 26.695\" xml:space=\"preserve\">\n  <g>\n    <path fill=\"#FFFFFF\" d=\"M3.87,13.318c0-1.97-1.478-3.592-3.385-3.826C0.168,10.715,0,11.997,0,13.318s0.168,2.604,0.485,3.826\n      C2.393,16.911,3.87,15.289,3.87,13.318z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"6.113\" cy=\"13.318\" r=\"1.21\"/>\n    <path fill=\"#FFFFFF\" d=\"M22.815,13.318c0,1.971,1.479,3.593,3.386,3.826c0.316-1.222,0.485-2.505,0.485-3.826\n      s-0.169-2.604-0.485-3.826C24.293,9.727,22.815,11.349,22.815,13.318z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"20.573\" cy=\"13.318\" r=\"1.21\"/>\n    <path fill=\"#FFFFFF\" d=\"M13.317,22.826c-1.969,0-3.591,1.479-3.826,3.385c1.224,0.316,2.505,0.484,3.828,0.484\n      c1.322,0,2.604-0.168,3.826-0.484C16.911,24.305,15.29,22.826,13.317,22.826z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"13.319\" cy=\"20.582\" r=\"1.211\"/>\n    <path fill=\"#FFFFFF\" d=\"M13.319,3.871c1.971,0,3.592-1.478,3.826-3.387C15.922,0.17,14.641,0,13.319,0\n      c-1.323,0-2.604,0.17-3.828,0.484C9.726,2.393,11.348,3.871,13.319,3.871z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"13.319\" cy=\"6.114\" r=\"1.209\"/>\n    <path fill=\"#FFFFFF\" d=\"M20.028,20.027c-1.392,1.393-1.494,3.583-0.314,5.097c2.23-1.313,4.096-3.181,5.41-5.411\n      C23.61,18.533,21.42,18.637,20.028,20.027z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"18.442\" cy=\"18.441\" r=\"1.21\"/>\n    <path fill=\"#FFFFFF\" d=\"M6.63,6.63c1.391-1.392,1.494-3.583,0.314-5.096C4.714,2.849,2.848,4.715,1.533,6.945\n      C3.047,8.125,5.238,8.021,6.63,6.63z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"8.216\" cy=\"8.217\" r=\"1.21\"/>\n    <path fill=\"#FFFFFF\" d=\"M20.02,6.617c1.392,1.393,3.582,1.494,5.096,0.315c-1.314-2.231-3.18-4.096-5.41-5.41\n      C18.526,3.035,18.628,5.225,20.02,6.617z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"18.434\" cy=\"8.203\" r=\"1.21\"/>\n    <path fill=\"#FFFFFF\" d=\"M6.623,20.013c-1.392-1.392-3.582-1.494-5.096-0.315c1.314,2.231,3.18,4.098,5.411,5.412\n      C8.118,23.596,8.016,21.406,6.623,20.013z\"/>\n    <circle fill=\"#FFFFFF\" cx=\"8.209\" cy=\"18.428\" r=\"1.21\"/>\n  </g>\n  <g>\n    <path d=\"M42.839,21.244c-2.95,0-5.849-1.812-5.849-6.729c0-4.917,2.898-6.702,5.849-6.702c1.812,0,3.081,0.517,4.323,1.836\n      l-1.812,1.761c-0.828-0.905-1.475-1.242-2.511-1.242c-1.009,0-1.862,0.414-2.433,1.165c-0.568,0.725-0.776,1.656-0.776,3.183\n      c0,1.527,0.208,2.485,0.776,3.21c0.57,0.75,1.424,1.164,2.433,1.164c1.036,0,1.683-0.336,2.511-1.242l1.812,1.734\n      C45.92,20.701,44.651,21.244,42.839,21.244z\"/>\n    <path d=\"M57.333,21.09v-1.191c-0.957,0.957-1.863,1.346-3.494,1.346c-1.63,0-2.717-0.389-3.52-1.189\n      c-0.673-0.699-1.035-1.709-1.035-2.822c0-2.199,1.527-3.779,4.529-3.779h3.468v-0.932c0-1.656-0.828-2.459-2.872-2.459\n      c-1.449,0-2.148,0.337-2.873,1.269l-1.734-1.631c1.242-1.449,2.536-1.889,4.711-1.889c3.598,0,5.408,1.526,5.408,4.503v8.774\n      H57.333z M57.281,15.291h-3.079c-1.553,0-2.355,0.699-2.355,1.89c0,1.191,0.75,1.864,2.406,1.864c1.01,0,1.761-0.078,2.459-0.751\n      c0.389-0.389,0.569-1.009,0.569-1.941V15.291z\"/>\n    <path d=\"M72.242,21.09v-7.998c0-2.045-1.165-2.925-2.64-2.925c-1.476,0-2.717,0.905-2.717,2.925v7.998h-2.641V7.967h2.588v1.32\n      c0.906-0.984,2.174-1.475,3.494-1.475c1.346,0,2.459,0.439,3.235,1.189c1.01,0.984,1.319,2.226,1.319,3.701v8.387H72.242z\"/>\n    <path d=\"M84.278,21.09h-2.148L77.315,7.967h2.797l3.105,9.24l3.08-9.24h2.795L84.278,21.09z\"/>\n    <path d=\"M98.622,21.09v-1.191c-0.958,0.957-1.863,1.346-3.495,1.346c-1.63,0-2.718-0.389-3.52-1.189\n      c-0.673-0.699-1.036-1.709-1.036-2.822c0-2.199,1.527-3.779,4.531-3.779h3.468v-0.932c0-1.656-0.829-2.459-2.874-2.459\n      c-1.449,0-2.149,0.337-2.873,1.269l-1.733-1.631c1.242-1.449,2.536-1.889,4.71-1.889c3.598,0,5.41,1.526,5.41,4.503v8.774H98.622z\n       M98.57,15.291h-3.08c-1.553,0-2.356,0.699-2.356,1.89c0,1.191,0.751,1.864,2.407,1.864c1.011,0,1.761-0.078,2.46-0.751\n      c0.388-0.389,0.569-1.009,0.569-1.941V15.291z\"/>\n    <path d=\"M109.36,21.244c-2.148,0-3.959-0.362-5.514-1.889l1.734-1.734c1.062,1.088,2.485,1.371,3.779,1.371\n      c1.604,0,2.872-0.568,2.872-1.812c0-0.88-0.49-1.448-1.759-1.553l-2.098-0.181c-2.459-0.208-3.882-1.32-3.882-3.624\n      c0-2.562,2.2-4.011,4.944-4.011c1.967,0,3.648,0.414,4.865,1.475l-1.656,1.682c-0.828-0.698-1.993-0.957-3.236-0.957\n      c-1.578,0-2.38,0.699-2.38,1.682c0,0.777,0.414,1.372,1.811,1.502l2.071,0.181c2.459,0.207,3.908,1.372,3.908,3.702\n      C114.821,19.82,112.491,21.244,109.36,21.244z\"/>\n  </g>\n</svg>");
  
});

Ember.TEMPLATES["ic-components/component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>");
  return buffer;
  
});

Ember.TEMPLATES["ic-components/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Component Library</h1>\n\n");
  
});