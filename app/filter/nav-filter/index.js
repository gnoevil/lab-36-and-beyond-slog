'use strict';

require('angular').module('myBlogAssignment')
.filter('navFilter', function() {
  return function(pages) {
    return pages.filter(p => p.showInNav);
  };
});
