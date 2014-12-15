'use strict';

/* Controllers */

var blogAppServices = angular.module('blogAppServices', [
  'ngResource' 
]);

blogAppServices.service('Post', ['$resource', function($resource) {
  
  var enhancePost = function(post) {
    post.tags = ["viaggi", "arte", "1", "test", "primo-tag", "sono-il-dio-dei-tag", "tag", "porco", "porcate"];
    post.created = Date.parse(post.created);
  }
  
  var postResource = $resource('//backend.chicchidistrade.covolunablu.org/read/:postId/', {}, {
    get: {
      method: 'GET',
      isArray: false,
      interceptor: {
        response: function(response) {
          enhancePost(response.resource);
        }
      }
    },
    
    query: {
      method: 'GET',
      isArray: true,
      interceptor: {
        response: function(response) {
          angular.forEach(response.resource, enhancePost);
        }
      }
    }
  });
  
  var Post = function(id, success, error) {
    return postResource.get({'postID':id}, success, error);
  }
  
  Post.list = function(success, error) {
    return postResource.query(null, success, error);
  }
  
  return Post;
}]);
