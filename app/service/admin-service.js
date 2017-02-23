'use strict';

require('angular').module('myBlogAssignment')
.service('authService', ['$log', '$q', '$http', '$window', authService]);

function authService($log, $q, $http, $window) {
  let authToken;
  let tokenSave = (token) => {
    if(!token)
      return $q.reject(new Error('no token'));
    try {
      $window.localStorage.token = JSON.stringify(token);
      return $q.resolve(token);
    } catch (err) {
      return $q.reject(err);
    }
  };

  let authService = {};

  authService.tokenFetch = () => {
    if(authToken)
      return $q.resolve(authToken);
    try {
      authToken = JSON.parse($window.localStorage.token);
      return $q.resolve(authToken);
    } catch(err) {
      return $q.reject(err);
    }
  };

  authService.login = function(user){
    let url = `${__API_URL__}/api/login`;
    let encoded = $window.btoa(`${user.username}:${user.password}`);
    let config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${encoded}`,
      },
    };
    return $http.get(url, config)
    .then(res => {
      $log.log('success');
      return res.data;
    });
  };
  return authService;
}
