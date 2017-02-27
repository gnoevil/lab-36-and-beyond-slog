'use strict';

require('angular').module('myBlogAssignment')
.component('pageSelect', {
  template: require('./page-select.html'),
  bindings: {
    pages: '<',
    showAll: '<',
    selected: '<',
    handleSelect: '<',
  },
});
