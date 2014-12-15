'use strict';

/* Controllers */

var blogAppDirectives = angular.module('blogAppDirectives', []);

blogAppDirectives.directive('blogEntry', [function () {
  return {
    restrict: "E",
    templateUrl: "partials/post.html",
    scope: {
      post: '='
    }
  };
}]);
