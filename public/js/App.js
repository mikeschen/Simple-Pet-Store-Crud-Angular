var App;
(function (App) {
    var app = angular.module('App', ['ui.router']);
    app.config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: App.HomeController,
                controllerAs: 'homeController'
            })
                .state('http', {
                url: '/http',
                templateUrl: 'templates/http.html',
                controller: App.HttpController,
                controllerAs: 'httpController'
            })
                .state('pets', {
                url: '/pets',
                templateUrl: 'templates/pets.html',
                controller: App.PetController,
                controllerAs: 'petController'
            })
                .state('pets-edit', {
                url: '/pets/edit',
                templateUrl: 'templates/pets-edit.html',
                controller: App.PetEditController,
                controllerAs: 'petEditController',
                params: {
                    id: null
                }
            });
        }
    ]);
})(App || (App = {}));
