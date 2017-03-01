'use strict';

require('angular').module('myBlogAssignment')
.component('navbar', {
  template: require('./navbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
  },
});
