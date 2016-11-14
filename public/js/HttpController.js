var App;
(function (App) {
    var HttpController = (function () {
        function HttpController($http) {
            this.httpService = $http;
            this.messageResult = '';
            this.getRequest();
        }
        HttpController.prototype.getRequest = function () {
            var _this = this;
            this.httpService({
                method: 'GET',
                url: '/test'
            })
                .success(function (response) {
                console.log('The call was successful.');
                console.log('This is the response: ', response);
                console.log('This is the response message: ', response.message);
                _this.messageResult = response.message;
            })
                .error(function () {
                console.error('The call failed.');
            });
        };
        HttpController.prototype.getSomeRoute = function () {
            this.httpService({
                method: 'GET',
                url: '/someroute'
            })
                .success(function () {
                console.log('The call was successful.');
            })
                .error(function () {
                console.error('The call failed.');
            });
        };
        return HttpController;
    }());
    HttpController.$inject = ['$http'];
    App.HttpController = HttpController;
})(App || (App = {}));
