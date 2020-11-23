// Enable JavaScript's strict mode. Strict mode catches some common
// programming errors and throws exceptions, prevents some unsafe actions from
// being taken, and disables some confusing and bad JavaScript features.
"use strict";

ckan.module('dcdj_theme_top_five_organizations', function ($) {
  return {
    initialize: function () {
      console.log("I've been initialized for element: ", this.el);
      var container = $(this.el).find(".top_five_organizations-list");

      $.getJSON("/api/3/action/organization_list?all_fields=true&sort=package_count&limit=5", function( data ) {
        var items = [];
        var uniqueItems = [];
        $.each( data.result, function( key, val ) {
          let display_name = val.display_name;
          let name = val.name;
          let package_count = val.package_count;
            items.push( "<li id='" + key + "'><a href='/organization/"+ name + "'><strong>" + display_name + " </strong></a> <span class=\"item-count badge\">" + package_count + "</span></li>" );
        });

        $( "<ul/>", {
            "class": "item-list",
            html: items.join( "" )
          }).appendTo( container);
        });
      }
  };
});
