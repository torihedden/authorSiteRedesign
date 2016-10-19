var app = angular.module("authorSite", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.html"
    })
    .when("/books", {
      templateUrl : "books.html"
    })
    ;
});
