// Enable JavaScript's strict mode. Strict mode catches some common
// programming errors and throws exceptions, prevents some unsafe actions from
// being taken, and disables some confusing and bad JavaScript features.
"use strict";

ckan.module('dcdj_theme_datasets', function ($) {
  return {
    initialize: function () {
      console.log("I've been initialized for element: ", this.el);
      var container = $(this.el).find(".datasets-list");

      $.getJSON("/api/3/action/recently_changed_packages_activity_list", function( data ) {
        var items = [];
        var uniqueItems = [];
        $.each( data.result, function( key, val ) {
          if(val.data.package.state === "active") {
            let name = val.data.package.name;
            let title = val.data.package.title;
            let date = val.data.package.metadata_modified.substring(0, 10);
            let realKey = val.object_id;
            if(uniqueItems.indexOf(realKey) === -1 && uniqueItems.length <= 9) {
              items.push( "<li id='" + key + "'><a href='/dataset/"+ name + "'><strong>" + title + " </strong></a> <i>(" + date + ")</i></li>" );
              uniqueItems.push(realKey);
            }
          }
        });

        $( "<ul/>", {
            "class": "item-list",
            html: items.join( "" )
          }).appendTo( container);
});
    }
  };
});
