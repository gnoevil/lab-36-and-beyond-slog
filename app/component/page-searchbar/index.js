'use strict';

require('./_page-searchbar.scss');

require('angular').module('myBlogAssignment')
.component('pageSearchbar', {
  template: require('./page-searchbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
    searchterm: '=',
  },
});
