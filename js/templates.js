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
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "component", options) : helperMissing.call(depth0, "outlet", "component", options))));
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
  


  data.buffer.push("<style>\n* { box-sizing: border-box }\n\na {\n  color: black;\n  text-decoration: none;\n}\n\npre {\n  padding: 12px;\n  background-color: #eee;\n  box-shadow: 1px 1px 2px #bbb;\n  border: 0 none;\n  width: auto;\n  display: inline-block;\n  font-size: 1.15em;\n}\n\ntemplate {\n  display: none;\n}\n\nbody {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; \n  padding: 0;\n  margin: 0;\n}\n\nattributes {\n\n}\n\nattribute {\n  width: 300px;\n}\n\nattribute label {\n  background-color: #eee;\n  text-align: right;\n  border-left: 0 none;\n}\n\nattribute:first-of-type label {\n  border-bottom: 1px solid white;\n}\n\nattribute:last-of-type label {\n  border-top: 1px solid white;\n}\n\nattribute:only-of-type label {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n}\n\nattribute > * {\n  font-size: 1em;\n  padding: 8px 10px;\n  margin: 0;\n  border: 1px solid #eee;\n}\n\nlogo {\n  display: block;\n  background-color: #CA3F2F;\n  height: 160px;\n  padding: 32px;\n}\n\nlayout {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 2em;\n}\n\nh2:first-of-type {\n  margin-top: 0;\n}\n\nh1,h2,h3,h4,h5,h6 {\n  font-weight: normal;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #eee;\n  margin: 1em 0;\n  padding: 0;\n}\n\nnav {\n  background-color: #f1f1f1;\n  flex: 1;\n  -webkit-flex: 1;\n}\n\ncomponent {\n  font-size: 0.9em;\n  display: block;\n  padding: 16px;\n  transition: background-color 0.15s;\n  -webkit-transition: background-color 0.15s;\n}\n\ncomponent:hover,\ncomponent.active {\n  background-color: #e5e5e5;\n  cursor: pointer;\n}\n\n.fixed-vertical {\n  top: 0;\n  bottom: 0;\n  position: fixed;\n}\n\n.fixed-horizontal {\n  left: 0;\n  right: 0;\n  position: fixed;\n}\n\n.flex {\n  display: -webkit-flex;\n  display: flex;\n}\n\n.flex-row {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.flex-column {\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\n.flex-wrap {\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.align-items-center {\n  -webkit-align-items: center;\n  align-items: center;\n}\n\n.justify-content-center {\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.flex-1 {\n  flex: 1;\n  -webkit-flex: 1;\n}\n\n.flex-2 {\n  flex: 2;\n  -webkit-flex: 2;\n}\n\nfront-menu {\n  -webkit-justify-content: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-align-content: stretch;\n  align-content: stretch;\n  display: -webkit-flex;\n  display: flex;\n}\n\nfront-menu-item {\n  display: block;\n  flex: 1;\n  -webkit-flex: 1;\n  font-size: 2.5em;\n  color: #555;\n  text-shadow: 1px 1px 2px #ddd;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\nfront-menu-item:hover,\nfront-menu-item:active {\n  background-color: #f9f9f9;\n  color: black;\n  text-shadow: 1px 1px 2px #ccc;\n}\n</style>\n\n<style>\nic-screenreader-only {\n  display: none;\n}\n\nic-modal * { box-sizing: border-box }\n\nic-button {\n  background-color: #F2F2F2;\n  background-image: linear-gradient(to bottom, #FFFFFE 0%, #E7E7E7 100%);\n  border: 1px solid #B6B9BC;\n/*   box-shadow: 0 0 0 1px #B6B9BC; */\n  padding: 6px 12px;\n  line-height: 22px;\n  border-radius: 4px;\n  vertical-align: middle;\n  font-size: 0.80em;\n  letter-spacing: 0.0625em;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; \n  cursor: default;\n}\n\nic-button.primary {\n  border-color: #39A2DE;\n/*   box-shadow: 0 0 0 1px #39A2DE; */\n  background-color: #1AA5E8;\n  background-image: linear-gradient(to bottom, #20B7F8 0%, #1B98DC 100%);\n  color: white;\n}\n</style>");
  
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

Ember.TEMPLATES["components/ic-icon-assignment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-assignment\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n<path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M87.987,25L63.006,0.013L19.237,0c-3.455,0-6.25,2.832-6.25,6.25v86.633c0,3.418,2.795,7.117,6.25,7.117\n	h62.5c3.455,0,6.275-3.699,6.275-7.117L87.987,25z M50.152,89.801l-2.667-8.24H32.568l-2.747,8.24h-8.85L35.43,49.701H45\n	l14.331,40.101H50.152z M81.737,75h-6.25v6.25h-6.25V75h-6.25v-6.25h6.25V62.5h6.25v6.25h6.25V75z M79.772,32.941h-16.7\n	c0,0-8.343,0-8.343-8.27c0,0,0-12.565,0-16.534c0-3.386,4.169-4.132,4.169-4.132l25.049,24.805\n	C83.947,28.809,83.947,32.941,79.772,32.941z M34.869,74.646h10.376l-5.121-15.778L34.869,74.646z\"/>\n</svg>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-discussion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-discussion\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\r\n	<path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M86.946,4.333H13.322c-7.204,0-13.333,6.139-13.333,13.333v46.667c0,7.194,6.129,13.333,13.333,13.333\r\n	h6.667v20l26.667-20h40c7.204,0,13.333-6.139,13.333-13.333V17.667C99.989,10.473,94.149,4.333,86.946,4.333z\"/>\r\n</svg>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-page\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\r\n<path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M25.537,64.221v3.339l49.951-0.049l-0.006-3.333L25.537,64.221z M75.532,42.031v-3.332l-50.008-0.02\r\n	l0.006,3.333L75.532,42.031z M50.501,29.562v-3.332l-24.976-0.051l0.006,3.333L50.501,29.562z M69.25,0H18.859\r\n	C15.405,0,13,2.796,13,6.25v87.5c0,3.454,2.796,6.25,6.25,6.25h62.109C84.814,100,88,97.204,88,93.75v-75L69.25,0z M81.75,87.5\r\n	c0,4.702-1.25,6.25-5.506,6.25H25.5c-4.833,0-6.25-1.75-6.25-6.25l-0.391-75.891c0-3.442,0.974-5.359,5.115-5.359h38.635v12.5\r\n	c0,6.543,6.25,6.25,6.25,6.25l12.891,0V87.5z M25.439,51.392v3.338l50.11-0.017l-0.006-3.333L25.439,51.392z M25.537,76.721v3.339\r\n	l49.951-0.049l-0.006-3.333L25.537,76.721z\"/>\r\n</svg>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-publish"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-pubish\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\r\n<path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M100,62c0,15.534-12.586,28.125-28.137,28.125\r\n	c-1.068,0-53.113,0-53.113,0C8.166,88.599,0,79.261,0,68.25c0-8.801,5.224-16.339,12.72-19.806c-0.086-0.714-0.22-1.416-0.22-2.149\r\n	c0-10.351,8.386-18.75,18.744-18.75c2.392,0,4.657,0.488,6.763,1.306C40.332,17.456,50.403,8.875,62.494,8.875\r\n	c13.824,0,25.006,11.194,25.006,25c0,1.544-0.183,3.039-0.452,4.504C94.824,43.384,100,52.069,100,62z M73.114,32.239\r\n	c-2.753-2.033-6.683-1.477-8.746,1.245l-19,24.982L34.955,48.249c-2.442-2.399-6.397-2.399-8.838,0\r\n	c-2.441,2.393-2.441,6.274,0,8.673l20.63,20.246l27.643-36.347C76.452,38.105,75.885,34.259,73.114,32.239z\"/>\r\n</svg>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-quiz"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-quiz\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\r\n<g id=\"quiz\">\r\n	<g>\r\n		<path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M49.695,31.744c-4.328,0-7.779,1.496-10.355,4.492c-2.579,2.996-3.866,7.476-3.866,13.446\r\n			c0,6.982,1.846,11.981,5.536,15.003c2.387,1.959,5.249,2.936,8.582,2.936c1.254,0,2.459-0.152,3.619-0.451\r\n			c0.638-0.159,1.26-0.256,2.252-0.672l-6.464-6.854l6.589-5.908l6.29,6.829c0.827-1.66,0.818-3.112,1.151-4.352\r\n			c0.519-1.867,0.778-4.046,0.778-6.537c0-5.713-1.199-10.126-3.598-13.251C57.809,33.307,54.303,31.744,49.695,31.744z M50,0\r\n			C22.388,0,0,22.388,0,50s22.388,50,50,50s50-22.388,50-50S77.612,0,50,0z M68.683,79.492l-6.277-5.804\r\n			c-1.92,1.136-2.988,1.349-4.386,1.807c-2.341,0.763-5.145,1.148-8.411,1.148c-6.814,0-12.445-1.984-16.894-5.945\r\n			c-5.396-4.767-8.091-11.774-8.091-21.014c0-9.308,2.765-16.351,8.298-21.118c4.513-3.894,10.129-5.841,16.843-5.841\r\n			c6.759,0,12.433,2.063,17.019,6.183c5.295,4.773,7.944,11.444,7.944,20.013c0,4.541-0.567,8.344-1.702,11.408\r\n			c-0.919,2.924-1.883,4.956-3.674,6.891l6.003,5.505L68.683,79.492z\"/>\r\n	</g>\r\n</g>\r\n</svg>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-settings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!-- default fill: 010101 -->\n<svg version=\"1.1\" class=\"ic-icon-settings\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n<style>\n.ic-icon-settings {\n  -moz-transform: rotate(0deg);\n  transition-property: rotate;\n  transition-duration: 0.8s;\n  -moz-transition: transform 0.8s;\n  -ms-transition: transform 0.8s;\n}\n.ic-icon-settings:hover {\n  transition-property: rotate;\n  transition-duration: 0.8s;\n  transition: transform 0.8s;\n  -webkit-transition: transform 0.8s;\n  -moz-transition: transform 0.8s;\n  -webkit-transform: rotate(15deg);\n  -moz-transform: rotate(15deg);\n  -ms-transform: rotate(15deg);\n  transform: rotate(15deg);\n}\n.ic-icon-settings:active {\n  -webkit-transform: rotate(25deg);\n  -moz-transform: rotate(25deg);\n  -ms-transform: rotate(25deg);\n  transform: rotate(25deg);\n  transition-duration: 0.1s;\n  -moz-transition: transform 0.1s;\n  -ms-transition: transform 0.1s;\n  transition: transform 0.1s;\n}\n</style>\n<path class=\"test123\" ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M99.771,45.605c-0.184-1.863-1.592-3.377-3.44-3.688l-9.138-1.566c-0.905-3.493-2.28-6.791-4.068-9.825\n  l5.345-7.546c1.094-1.548,1.007-3.64-0.21-5.094c-1.867-2.216-3.933-4.281-6.145-6.145c-0.774-0.646-1.729-0.977-2.679-0.977\n  c-0.841,0-1.687,0.256-2.407,0.767l-7.55,5.345c-3.035-1.788-6.332-3.163-9.825-4.068L58.091,3.67\n  c-0.319-1.845-1.833-3.257-3.7-3.444C52.84,0.075,51.401,0,50,0s-2.84,0.075-4.391,0.226c-1.867,0.188-3.381,1.6-3.7,3.444\n  l-1.563,9.138c-3.493,0.905-6.79,2.28-9.825,4.068l-7.55-5.345c-0.721-0.511-1.566-0.767-2.407-0.767\n  c-0.95,0-1.904,0.331-2.679,0.977c-2.212,1.863-4.277,3.929-6.145,6.145c-1.217,1.454-1.304,3.546-0.21,5.094l5.345,7.546\n  c-1.792,3.034-3.167,6.332-4.068,9.825L3.67,41.917c-1.849,0.312-3.257,1.825-3.44,3.688C0.075,47.156,0,48.596,0,50\n  s0.075,2.847,0.229,4.395c0.184,1.863,1.592,3.377,3.44,3.688l9.138,1.566c0.901,3.493,2.276,6.791,4.068,9.825L11.53,77.02\n  c-1.094,1.548-1.007,3.64,0.21,5.094c1.867,2.216,3.933,4.281,6.145,6.145c0.774,0.646,1.729,0.977,2.679,0.977\n  c0.841,0,1.687-0.256,2.407-0.767l7.55-5.345c3.035,1.788,6.332,3.163,9.825,4.068l1.563,9.138c0.319,1.845,1.833,3.257,3.7,3.444\n  C47.16,99.925,48.599,100,50,100s2.84-0.075,4.391-0.226c1.867-0.188,3.381-1.6,3.7-3.444l1.563-9.138\n  c3.493-0.905,6.79-2.28,9.825-4.068l7.55,5.345c0.721,0.511,1.566,0.767,2.407,0.767c0.95,0,1.904-0.331,2.679-0.977\n  c2.212-1.863,4.277-3.929,6.145-6.145c1.217-1.454,1.304-3.546,0.21-5.094l-5.345-7.546c1.788-3.034,3.163-6.332,4.068-9.825\n  l9.138-1.566c1.849-0.312,3.257-1.825,3.44-3.688C99.925,52.847,100,51.404,100,50S99.925,47.156,99.771,45.605z M50,69.23\n  c-10.626,0-19.23-8.604-19.23-19.23S39.374,30.77,50,30.77S69.23,39.374,69.23,50S60.626,69.23,50,69.23z\"/>\n</svg>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-unpublish"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-unpublish\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\r\n<path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M87.048,39.379c0.262-1.465,0.452-2.96,0.452-4.504\r\n	c0-13.806-11.182-25-25.006-25c-12.091,0-22.162,8.581-24.487,19.977c-2.106-0.818-4.371-1.306-6.763-1.306\r\n	c-10.358,0-18.744,8.399-18.744,18.75c0,0.733,0.134,1.434,0.22,2.149C5.224,52.911,0,60.449,0,69.25\r\n	c0,11.011,8.106,21.875,18.75,21.875c0,0,52.044,0,53.113,0C87.414,91.125,100,78.534,100,63\r\n	C100,53.069,94.824,44.384,87.048,39.379z M69.928,69.109c2.441,2.442,2.441,6.397,0,8.838c-1.221,1.221-2.82,1.831-4.419,1.831\r\n	c-1.599,0-3.198-0.611-4.419-1.831l-9.033-9.033l-9.033,9.033c-1.221,1.221-2.82,1.831-4.419,1.831\r\n	c-1.599,0-3.199-0.611-4.419-1.831c-2.441-2.441-2.441-6.396,0-8.838l9.033-9.033l-9.033-9.033c-2.441-2.441-2.441-6.396,0-8.838\r\n	c2.442-2.442,6.397-2.442,8.838,0l9.033,9.033l9.033-9.033c2.441-2.442,6.397-2.442,8.838,0c2.441,2.441,2.441,6.396,0,8.838\r\n	l-9.033,9.033L69.928,69.109z\"/>\r\n</svg>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-x"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-x\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n     width=\"100%\" height=\"100%\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\">\n<style>\n.ic-icon-x {\n  -moz-transform: rotate(0deg);\n  transition-property: rotate;\n  transition-duration: 0.8s;\n  -moz-transition: transform 0.8s;\n  -ms-transition: transform 0.8s;\n  transition: transform 0.8s;\n}\n.ic-icon-x:hover {\n  transition-property: scale;\n  transition-duration: 0.8s;\n  transition: transform 0.8s;\n  -webkit-transition: transform 0.8s;\n  -moz-transition: transform 0.8s;\n  -webkit-transform: scale(1.09);\n  -moz-transform: scale(1.09);\n  -ms-transform: scale(1.09);\n  transform: scale(1.09);\n}\n.ic-icon-x:active {\n  -webkit-transform: scale(0.9);\n  -moz-transform: scale(0.9);\n  -ms-transform: scale(0.9);\n  transform: scale(0.9);\n  transition-duration: 0.1s;\n  -moz-transition: transform 0.1s;\n  -ms-transition: transform 0.1s;\n  transition: transform 0.1s;\n}\n</style>\n  <g>\n      <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M0.028,1.923l1.896-1.895L8,6.105L14.104,0L16,1.896L9.896,8l6.076,6.076l-1.896,1.895L8,9.895L1.896,16\n          L0,14.104L6.104,8L0.028,1.923z\"/>\n  </g>\n</svg>");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-modal-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\nic-modal .modal-body.columned {\n  display: -webkit-flex;\n  display: flex;\n}\n\nic-modal stacked-tabs {\n  overflow: hidden;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\nic-modal .modal-body > .padded {\n  -webkit-flex: 2.5;\n  flex: 2.5;\n}\n\nic-modal tab {\n  flex: 1;\n  padding: 0px 20px;\n  background-color: white;\n  border-right: 1px solid #E3E4E4;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  max-height: 80px;\n}\n\nic-modal tab.active{\n  background-color: #EEF2F4;\n  box-shadow: 0 0 0 1px #E3E4E4;\n  border-right: 1px solid transparent;\n}\n\nic-modal tab:hover:not(.active) {\n  background: rgba(250, 250, 250, 0.82);\n}\n\nic-modal .modal-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  background: rgba(0, 0, 0, 0.82);\n  display: -webkit-flex;\n  display: flex;\n}\n\n@media (max-width: 970px) {\n  ic-modal .modal {\n    position:fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  ic-modal .modal-body {flex: 1}\n}\n\n@media (min-width: 971px) {\n  ic-modal .modal {\n    border-radius: 5px;\n    margin: auto;\n    max-width: 750px;\n    max-height: 85%;\n    background-color: white;\n    -webkit-flex: .8;\n            flex: .8;\n  } \n\n  ic-modal .modal-header {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n\n  ic-modal .modal-header-close {\n    border-top-right-radius: 5px;\n  }\n\n  ic-modal .modal-footer {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n}\n\nic-modal .modal-body {\n  overflow: scroll;\n  background-color: #EEF2F4;\n}\n\nic-modal .modal-body.padded,\nic-modal .modal-body > .padded{\n  padding: 12px;\n}\n\nic-modal .modal-header {\n  background-color: white;\n  display: -webkit-flex;\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid #E3E4E4;\n}\n\nic-modal .modal-title {\n  -webkit-flex: 1;\n  flex: 1;\n  font-size: 1.4em;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; \n  font-weight: 300;\n  line-height: 100%;\n  padding: 20px;\n}\n\nic-modal .modal-header-close {\n  transition: background-color 0.15s;\n  -webkit-transition: background-color 0.15s;\n  width: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: .5;\n}\n\nic-modal .modal-header-close:hover {\n  opacity: 1;\n  background-color: #f1f1f1;\n}\n\nic-modal .modal-header-center {\n  text-align: center;\n  -webkit-flex: 1;\n          flex: 1;\n}\n\nic-modal .modal-header-right {\n  padding: 6px;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n\nic-modal .modal-footer {\n  display: -webkit-flex;\n  display: flex;\n  background-color: white;\n  border-top: 1px solid #E3E4E4;\n}\n\nic-modal .modal-footer-left {\n  -webkit-flex: 1;\n          flex: 1;\n}\n\nic-modal .modal-footer-center {\n  text-align: center;\n  -webkit-flex: 1;\n          flex: 1;\n}\n\nic-modal .modal-footer-right {\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n  padding: 14px 12px;\n}\n</style>");
  
});

Ember.TEMPLATES["components/ic-modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("width: 20px;height: 20px;display: block;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-x'] || depth0['ic-icon-x']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-x", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "ic-modal-css", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<ic-modal>\n  <div class=\"modal-container\">\n    <div class=\"modal\">\n      <div class=\"modal-header\">\n        <div class=\"modal-title\">\n          [Add Item to <strong>Week 1</strong>]\n        </div>\n        <div class=\"modal-header-close\">\n          ");
  hashContexts = {'action': depth0};
  hashTypes = {'action': "STRING"};
  options = {hash:{
    'action': ("close")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-trigger'] || depth0['ic-trigger']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"modal-body columned\">\n        <stacked-tabs>\n          <tab>Assignments</tab>\n          <tab class=\"active\">Pages</tab>\n          <tab>Quizzes</tab>\n          <tab>File</tab>\n          <tab>Discussion</tab>\n          <tab>Text Header</tab>\n          <tab>External URL</tab>\n          <tab>External Tool</tab>\n        </stacked-tabs>\n        <div class=\"padded\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra risus massa, at interdum arcu rutrum in. Donec ac pellentesque sapien, vel tempor purus. Aliquam neque purus, molestie non lacinia vitae, ullamcorper id nunc. Maecenas dictum est et ipsum porttitor pellentesque. Sed ipsum arcu, bibendum eget placerat sit amet, dictum nec lorem. Proin turpis arcu, posuere id orci suscipit, blandit iaculis nisi. Quisque pretium porta sodales. Nullam luctus sed enim non dictum. Vivamus est ligula, mattis et commodo non, placerat id quam. Donec convallis, libero eu pellentesque consectetur, augue tortor vestibulum arcu, eu convallis massa lacus vel neque. In euismod turpis orci, nec sagittis neque sagittis eget.\n\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra risus massa, at interdum arcu rutrum in. Donec ac pellentesque sapien, vel tempor purus. Aliquam neque purus, molestie non lacinia vitae, ullamcorper id nunc. Maecenas dictum est et ipsum porttitor pellentesque. Sed ipsum arcu, bibendum eget placerat sit amet, dictum nec lorem. Proin turpis arcu, posuere id orci suscipit, blandit iaculis nisi. Quisque pretium porta sodales. Nullam luctus sed enim non dictum. Vivamus est ligula, mattis et commodo non, placerat id quam. Donec convallis, libero eu pellentesque consectetur, augue tortor vestibulum arcu, eu convallis massa lacus vel neque. In euismod turpis orci, nec sagittis neque sagittis eget.\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"modal-footer-right\">\n          <ic-button>Cancel</ic-button>\n          <ic-button class=\"primary\">Add Item</ic-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ic-modal>");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-trigger"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
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
    'style': ("margin-top: 24px;width: 100px;height: 100px;display: block;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-canvas-logo'] || depth0['ic-canvas-logo']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-canvas-logo", options))));
  return buffer;
  
});

Ember.TEMPLATES["ic-components/ic-icons"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  data.buffer.push("<h1>&#123;&#123;ic-icon-<span style=\"color: #ccc\">awesome</span>");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "fillColor", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&#125;&#125;</h1>\n\n<attributes class=\"flex flex-column\">\n  <attribute class=\"flex flex-row\">\n    <label>fill-color:</label>\n    ");
  hashContexts = {'value': depth0,'class': depth0,'autofocus': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'autofocus': "STRING"};
  options = {hash:{
    'value': ("fillColor"),
    'class': ("flex-1"),
    'autofocus': ("autofocus")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </attribute>\n</attributes>\n\n<icon-examples class=\"flex flex-1 flex-row flex-wrap\">\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-x'] || depth0['ic-icon-x']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-x", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">x</icon-example-tag>\n  </icon-example>\n\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-settings'] || depth0['ic-icon-settings']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-settings", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">settings</icon-example-tag>\n  </icon-example>\n\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-assignment'] || depth0['ic-icon-assignment']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-assignment", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">assignment</icon-example-tag>\n  </icon-example>\n\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-quiz'] || depth0['ic-icon-quiz']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-quiz", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">quiz</icon-example-tag>\n  </icon-example>\n\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-page'] || depth0['ic-icon-page']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-page", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">page</icon-example-tag>\n  </icon-example>\n\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-discussion'] || depth0['ic-icon-discussion']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-discussion", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">discussion</icon-example-tag>\n  </icon-example>\n\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-publish'] || depth0['ic-icon-publish']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-publish", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">publish</icon-example-tag>\n  </icon-example>\n\n  <icon-example class=\"flex flex-1 flex-row align-items-center\">\n    ");
  hashContexts = {'fill-color': depth0};
  hashTypes = {'fill-color': "ID"};
  options = {hash:{
    'fill-color': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-unpublish'] || depth0['ic-icon-unpublish']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-unpublish", options))));
  data.buffer.push("\n    <icon-example-tag class=\"flex-1\">unpublish</icon-example-tag>\n  </icon-example>\n</icon-examples>\n\n<style>\nicon-example .ic-icon {\n  width: 20px;\n  height: 20px;\n}\n\nicon-examples {\n  margin-top: 12px;\n}\n\nicon-example {\n  margin: 0px 8px 8px 0;\n  min-width: 175px;\n  box-shadow: 1px 1px 3px #ddd;\n  padding: 6px;\n  transition: box-shadow 0.15s;\n  -webkit-transition: box-shadow 0.15s;\n}\n\nicon-example:hover {\nbox-shadow: 1px 1px 3px #bbb;\n}\n\nicon-example-tag {\n  white-space: nowrap;\n  font-size: 1.1em;\n  margin-left: 6px;\n}\n</style>");
  return buffer;
  
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

  data.buffer.push("<h1>&#123;&#123;ic-modal");
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
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("margin-top: 24px;width: 600px;height: 600px;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-modal'] || depth0['ic-modal']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-modal", options))));
  data.buffer.push("\n");
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

Ember.TEMPLATES["icons/settings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push(" fill-color=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "settingsFillColor", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"");
  return buffer;
  }

  data.buffer.push("<h1>&#123;&#123;ic-icon-settings");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "settingsFillColor", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&#125;&#125;</h1>\n\n<attributes class=\"flex flex-column\">\n  <attribute class=\"flex flex-row\">\n    <label>fill-color:</label>\n    ");
  hashContexts = {'value': depth0,'class': depth0,'autofocus': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'autofocus': "STRING"};
  options = {hash:{
    'value': ("settingsFillColor"),
    'class': ("flex-1"),
    'autofocus': ("autofocus")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </attribute>\n</attributes>\n\n");
  hashContexts = {'fill-color': depth0,'style': depth0};
  hashTypes = {'fill-color': "ID",'style': "STRING"};
  options = {hash:{
    'fill-color': ("settingsFillColor"),
    'style': ("margin-top: 16px;margin-bottom: 16px;width: 20px;height: 20px;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-settings'] || depth0['ic-icon-settings']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-settings", options))));
  return buffer;
  
});

Ember.TEMPLATES["icons/x"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push(" fill-color=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "xFillColor", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"");
  return buffer;
  }

  data.buffer.push("<h1>&#123;&#123;ic-icon-x");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "xFillColor", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&#125;&#125;</h1>\n\n<attributes class=\"flex flex-column\">\n  <attribute class=\"flex flex-row\">\n    <label>fill-color:</label>\n    ");
  hashContexts = {'value': depth0,'class': depth0,'autofocus': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'autofocus': "STRING"};
  options = {hash:{
    'value': ("xFillColor"),
    'class': ("flex-1"),
    'autofocus': ("autofocus")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </attribute>\n</attributes>\n\n");
  hashContexts = {'fill-color': depth0,'style': depth0};
  hashTypes = {'fill-color': "ID",'style': "STRING"};
  options = {hash:{
    'fill-color': ("xFillColor"),
    'style': ("margin-top: 16px;margin-bottom: 16px;width: 20px;height: 20px;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-x'] || depth0['ic-icon-x']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-x", options))));
  return buffer;
  
});