'use strict';

require('./_page-editor.scss');

require('angular').module('myBlogAssignment')
.component('pageEditor', {
  template: require('./page-editor.html'),
  bindings: {
    page: '<',
    handleSubmit: '<',
  },
});
