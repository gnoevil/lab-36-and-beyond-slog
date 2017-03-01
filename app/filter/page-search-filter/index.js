'use strict';

require('angular').module('myBlogAssignment')
.filter('pageSearchFilter', function() {
  return function(pages, searchTerm) {
    let fuzzyRegex = generateFuzzyRegex(searchTerm);
    return pages.filter(page => {
      return fuzzyRegex.test(page.title.toLowerCase());
    });
  };
});

function generateFuzzyRegex(term) {
  if(!term) return /.*/;
  let fuzzy = term.toLowerCase().split('').join('.*');
  return new RegExp(`.*${fuzzy}.*`);
}
