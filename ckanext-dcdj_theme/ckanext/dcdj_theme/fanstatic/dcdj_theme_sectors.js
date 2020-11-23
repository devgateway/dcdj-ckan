// Enable JavaScript's strict mode. Strict mode catches some common
// programming errors and throws exceptions, prevents some unsafe actions from
// being taken, and disables some confusing and bad JavaScript features.
"use strict";

ckan.module('dcdj_theme_sectors', function ($) {
  return {
    initialize: function () {
      debugger;
      console.log("I've been initialized for element: ", this.el);
      var container = $(this.el).find(".sectors-list");

      $.getJSON("/api/3/action/recently_changed_packages_activity_list", function( data ) {
        var items = [];
        $.each( data.result, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
          }).appendTo( container);
});
    }
  };
});
