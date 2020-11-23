// Enable JavaScript's strict mode. Strict mode catches some common
// programming errors and throws exceptions, prevents some unsafe actions from
// being taken, and disables some confusing and bad JavaScript features.
"use strict";

ckan.module('dcdj_theme_categories', function ($) {
  return {
    initialize: function () {
      console.log("I've been initialized for element: ", this.el);
      var container = $(this.el).find(".category-list");

      $.getJSON("/api/action/package_search?facet.field=[\"sectors\"]&facet.limit=100&rows=0", function( data ) {
        var items = [];
        var uniqueItems = [];
        var sectorCount = {
        };
        $.each( data.result.facets, function( key, val ) {
          let sectors = val;
          $.each(sectors, function(key, val) {
            var sector_array = JSON.parse(key);
            $.each(sector_array, function(key, val) {
              if(sectorCount[val] === undefined) {
                sectorCount[val] = 1;
              }
              else
              {
                sectorCount[val]++;
              }
            });

          });
        });
        var sectorList = JSON.parse(JSON.stringify(sectorCount, Object.keys(sectorCount).sort()));
        
	$.each(sectorList, function(key, val) {
		
            items.push( "<li id='" + key + "'><a href='/dataset?q="+ key.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "'><strong>" + key + " </strong></a><span class=\"item-count badge hide\">" + val + "</span></li>" );
        });

        $( "<ul/>", {
            "class": "item-list",
            html: items.join( "" )
          }).appendTo( container);
        });
      }
  };
});
