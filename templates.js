(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['humidity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box\">\n  <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"fa fa-thermometer-half fa-5x\"></i>\n    <div>\n      <span class=\"sensor-value\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <span class=\"box-footer sensor-origin\">"
    + alias4(((helper = (helper = helpers.origin || (depth0 != null ? depth0.origin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"origin","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n</div>\n";
},"useData":true});
templates['temperature'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box\">\n  <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"fa fa-thermometer-half fa-5x\"></i>\n    <div>\n      <span class=\"sensor-value\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <span class=\"box-footer sensor-origin\">"
    + alias4(((helper = (helper = helpers.origin || (depth0 != null ? depth0.origin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"origin","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n</div>\n";
},"useData":true});
})();