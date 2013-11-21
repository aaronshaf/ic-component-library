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
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "STRING"};
  options = {hash:{
    'fill-color': ("#fff")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-canvas-logo'] || depth0['ic-canvas-logo']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-canvas-logo", options))));
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
  data.buffer.push("\n          &#123;&#123;");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&#125;&#125;\n        ");
  return buffer;
  }

  data.buffer.push("<section class=\"fixed-vertical flex flex-column\" style=\"width: 220px;background-color: #ca3f2f\">\n  <logo>\n    ");
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
  data.buffer.push("\n    </components>           \n  </nav>\n</section>\n<article class=\"fixed-vertical\" style=\"right: 0; left: 220px; padding: 24px;\">\n  ");
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

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("/api/v1");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("&#123;&#123;ic-components&#125;&#125;");
  }

  data.buffer.push("<div>\n  <front-menu class=\"flex fixed-vertical fixed-horizontal flex-row\">\n    ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("front-menu-item")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("front-menu-item")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "ic-components", options) : helperMissing.call(depth0, "link-to", "ic-components", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </front-menu>\n\n");
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["styles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\n* { box-sizing: border-box }\n\na {\n  color: black;\n  text-decoration: none;\n}\n\npre.prettyprint {\n  padding: 12px;\n  background-color: #eee;\n  box-shadow: 1px 1px 2px #bbb;\n  border: 0 none;\n}\n\ntemplate {\n  display: none;\n}\n\nbody {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; \n  padding: 0;\n  margin: 0;\n}\n\nattributes {\n\n}\n\nattribute {\n  width: 300px;\n}\n\nattribute label {\n  background-color: #eee;\n  text-align: right;\n  border-left: 0 none;\n}\n\nattribute:first-of-type label {\n  border-bottom: 1px solid white;\n}\n\nattribute:last-of-type label {\n  border-top: 1px solid white;\n}\n\nattribute:only-of-type label {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n}\n\nattribute > * {\n  font-size: 1em;\n  padding: 8px 10px;\n  margin: 0;\n  border: 1px solid #eee;\n}\n\nlogo {\n  display: block;\n  background-color: #CA3F2F;\n  height: 160px;\n  padding: 32px;\n}\n\nlayout {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 2em;\n}\n\nh2:first-of-type {\n  margin-top: 0;\n}\n\nh1,h2,h3,h4,h5,h6 {\n  font-weight: normal;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #eee;\n  margin: 1em 0;\n  padding: 0;\n}\n\nnav {\n  background-color: #f1f1f1;\n  flex: 1;\n  -webkit-flex: 1;\n}\n\ncomponent {\n  font-size: 0.9em;\n  display: block;\n  padding: 16px;\n  transition: background-color 0.15s;\n  -webkit-transition: background-color 0.15s;\n}\n\ncomponent:hover,\ncomponent.active {\n  background-color: #e5e5e5;\n  cursor: pointer;\n}\n\n.fixed-vertical {\n  top: 0;\n  bottom: 0;\n  position: fixed;\n}\n\n.fixed-horizontal {\n  left: 0;\n  right: 0;\n  position: fixed;\n}\n\n.flex {\n  display: -webkit-flex;\n  display: flex;\n}\n\n.flex-row {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.flex-column {\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\n.flex-1 {\n  flex: 1;\n  -webkit-flex: 1;\n}\n\n.flex-2 {\n  flex: 2;\n  -webkit-flex: 2;\n}\n\nfront-menu {\n  -webkit-justify-content: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-align-content: stretch;\n  align-content: stretch;\n  display: -webkit-flex;\n  display: flex;\n}\n\nfront-menu-item {\n  display: block;\n  flex: 1;\n  -webkit-flex: 1;\n  font-size: 2.5em;\n  color: #555;\n  text-shadow: 1px 1px 2px #ddd;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\nfront-menu-item:hover,\nfront-menu-item:active {\n  background-color: #f9f9f9;\n  color: black;\n  text-shadow: 1px 1px 2px #ccc;\n}\n</style>");
  
});

Ember.TEMPLATES["components/ic-canvas-logo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"100%\" height=\"100%\" viewBox=\"0 0 26.686 26.695\" enable-background=\"new 0 0 26.686 26.695\" xml:space=\"preserve\">\n<g>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M3.87,13.318c0-1.97-1.478-3.592-3.385-3.826C0.168,10.715,0,11.997,0,13.318s0.168,2.604,0.485,3.826\n    C2.393,16.911,3.87,15.289,3.87,13.318z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"6.113\" cy=\"13.318\" r=\"1.21\"/>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M22.815,13.318c0,1.971,1.479,3.593,3.386,3.826c0.316-1.222,0.485-2.505,0.485-3.826\n    s-0.169-2.604-0.485-3.826C24.293,9.727,22.815,11.349,22.815,13.318z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"20.573\" cy=\"13.318\" r=\"1.21\"/>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M13.317,22.826c-1.969,0-3.591,1.479-3.826,3.385c1.224,0.316,2.505,0.484,3.828,0.484\n    c1.322,0,2.604-0.168,3.826-0.484C16.911,24.305,15.29,22.826,13.317,22.826z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"13.319\" cy=\"20.582\" r=\"1.211\"/>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M13.319,3.871c1.971,0,3.592-1.478,3.826-3.387C15.922,0.17,14.641,0,13.319,0\n    c-1.323,0-2.604,0.17-3.828,0.484C9.726,2.393,11.348,3.871,13.319,3.871z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"13.319\" cy=\"6.114\" r=\"1.209\"/>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M20.028,20.027c-1.392,1.393-1.494,3.583-0.314,5.097c2.23-1.313,4.096-3.181,5.41-5.411\n    C23.61,18.533,21.42,18.637,20.028,20.027z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"18.442\" cy=\"18.441\" r=\"1.21\"/>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M6.63,6.63c1.391-1.392,1.494-3.583,0.314-5.096c-2.23,1.315-4.096,3.181-5.411,5.411\n    C3.047,8.125,5.238,8.021,6.63,6.63z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"8.216\" cy=\"8.217\" r=\"1.21\"/>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M20.02,6.617c1.392,1.393,3.582,1.494,5.096,0.315c-1.314-2.231-3.18-4.096-5.41-5.41\n    C18.526,3.035,18.628,5.225,20.02,6.617z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"18.434\" cy=\"8.203\" r=\"1.21\"/>\n  <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M6.623,20.013c-1.392-1.392-3.582-1.494-5.096-0.315c1.314,2.231,3.18,4.098,5.411,5.412\n    C8.118,23.596,8.016,21.406,6.623,20.013z\"/>\n  <circle ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" cx=\"8.209\" cy=\"18.428\" r=\"1.21\"/>\n</g>\n</svg>");
  return buffer;
  
});

Ember.TEMPLATES["ic-components/component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "page", options) : helperMissing.call(depth0, "render", "page", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "pages/ic-canvas-logo", options) : helperMissing.call(depth0, "render", "pages/ic-canvas-logo", options))));
  return buffer;
  
});

Ember.TEMPLATES["ic-components/ic-canvas-logo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push(" fill-color=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fillColor", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"");
  return buffer;
  }

  data.buffer.push("<h1>&#123;&#123;ic-canvas-logo");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "fillColor", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&#125;&#125;</h1>\n\n<attributes class=\"flex flex-column\">\n  <attribute class=\"flex flex-row\">\n    <label>fill-color:</label>\n    ");
  hashContexts = {'value': depth0,'list': depth0,'class': depth0,'autofocus': depth0};
  hashTypes = {'value': "ID",'list': "STRING",'class': "STRING",'autofocus': "STRING"};
  options = {hash:{
    'value': ("fillColor"),
    'list': ("colors"),
    'class': ("flex-1"),
    'autofocus': ("autofocus")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <datalist id=\"colors\">\n      <option value=\"#D64027\">\n      <option value=\"#A3AAAD\">\n      <option value=\"white\">\n    </datalist>\n  </attribute>\n</attributes>\n\n");
  hashContexts = {'background-color': depth0,'fill-color': depth0,'style': depth0};
  hashTypes = {'background-color': "ID",'fill-color': "ID",'style': "STRING"};
  options = {hash:{
    'background-color': ("backgroundColor"),
    'fill-color': ("fillColor"),
    'style': ("margin-top: 24px;width: 100px;height: 100px;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-canvas-logo'] || depth0['ic-canvas-logo']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-canvas-logo", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["ic-components/ic-icon"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>&#123;&#123;ic-icon-x color=\"blue\" height=\"30px\" width=\"30px\"&#125;&#125;</h2>\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n     width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\">\n  <g>\n      <path fill=\"#8C9398\" d=\"M0.028,1.923l1.896-1.895L8,6.105L14.104,0L16,1.896L9.896,8l6.076,6.076l-1.896,1.895L8,9.895L1.896,16\n          L0,14.104L6.104,8L0.028,1.923z\"/>\n  </g>\n</svg>\n\n<pre class=\"prettyprint\">\nfunction(test) {}\n\nvar foo = 'bar'\n</pre>");
  
});

Ember.TEMPLATES["ic-components/ic-lazily-paginated-records"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["ic-components/ic-menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["ic-components/ic-modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["ic-components/ic-trigger"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["ic-components/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>&#123;&#123;ic-components&#125;&#125;</h1>\n");
  
});