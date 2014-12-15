'use strict';

/* Controllers */

var blogApp = angular.module('blogApp');

/** main controller */
blogApp.controller('mainCtrl', ['$scope', 'Post', function ($scope, Post) {
  $scope.orderProp = 'age';
  $scope.posts = Post.list();
  
}]);

/** controller for the create part of the app*/
blogApp.controller('createCtrl', ['$scope', function ($scope) {
  var article = document.getElementById('article'),
  articleMedium = new Medium({
      element: article,
      mode: Medium.richMode,
      placeholder: 'Body of the post'
  });
  
  var title = document.getElementById('article-title'),
  titleMedium = new Medium({
    element: title,
    mode: Medium.inlineMode,
    maxLength: 25,
    placeholder: 'Post title',
    attributes: null,
    tags: null
  });
  
  $scope.tags = ["I", "am", "multiple", "tags"];
  $scope.created = Date.now();
  
  $scope.dimensions = "350x150";

  $scope.richInsert = function() {
    console.log("porco dio");
    articleMedium.focus();
    articleMedium.insertHtml(
    '<img src="http://placehold.it/'+$scope.dimensions+'"/>');
  }
  
  var download = function(filename, data) {
    filename = filename || "post-anonimous.txt";
    var encodedUri = encodeURI(data);
    var link = document.createElement("a");
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodedUri);
    link.setAttribute("target",'_blank');
    link.setAttribute("download", filename);

    document.body.appendChild(link);
    console.log("downloading data");
    link.click();
    document.body.removeChild(link);
  };

  $scope.save = function() {
    var data = {
      title: titleMedium.value(),
      body: articleMedium.value(),
      created: Date.now()
    }
    
    console.log("printing data");
    console.dir(data);

    download("post-"+data.created+"-"+data.title+".txt", angular.toJson(data));
  }
}]);
