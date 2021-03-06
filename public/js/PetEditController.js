var App;
(function (App) {
    var PetEditController = (function () {
        function PetEditController($http, $state) {
            var _this = this;
            this.httpService = $http;
            this.stateService = $state;
            console.log('Passed parameters: ', this.stateService.params);
            this.httpService({
                url: '/pets/' + this.stateService.params.id,
                method: 'GET'
            })
                .success(function (response) {
                console.log("responseeeee", response);
                _this.pet = response;
            })
                .error(function () {
            });
        }
        PetEditController.prototype.save = function () {
            var _this = this;
            var updateId = this.stateService.params.id;
            this.httpService({
                url: '/pets/' + updateId,
                method: 'PUT',
                data: {
                    title: this.pet.title,
                    description: this.pet.description,
                    author: this.pet.author
                }
            })
                .success(function () {
                console.log('pet saveedddddd');
                _this.stateService.go('pets');
            })
                .error(function () {
            });
        };
        return PetEditController;
    }());
    PetEditController.$inject = ['$http', '$state'];
    App.PetEditController = PetEditController;
})(App || (App = {}));
