'use strict';

require('angular').module('myBlogAssignment')
.component('login', {
  template: require('./login.html'),
  bindings: {
    user: '<',
    handleSubmit: '<',
  },
});
