var App;
(function (App) {
    var PetController = (function () {
        function PetController($http, $state) {
            this.httpService = $http;
            this.stateService = $state;
            console.log('- test: ', this.stateService);
            this.petList = [];
            this.newPet = {};
            this.getPetList();
        }
        PetController.prototype.getPetList = function () {
            var _this = this;
            this.httpService({
                url: '/pets',
                method: 'GET'
            })
                .success(function (response) {
                _this.petList = response;
            })
                .error(function (response) {
            });
        };
        PetController.prototype.getPet = function (id) {
            var _this = this;
            this.httpService({
                url: '/pets',
                method: 'GET',
                params: {
                    id: id
                }
            })
                .success(function (response) {
                _this.currentPet = response[0];
            })
                .error(function (response) {
            });
        };
        PetController.prototype.save = function () {
            var _this = this;
            this.httpService({
                url: '/pets',
                method: 'POST',
                data: {
                    title: this.title,
                    description: this.description,
                    author: this.author
                }
            })
                .success(function (response) {
                _this.getPetList();
                _this.title = "";
                _this.description = "";
                _this.author = "";
            })
                .error(function (response) {
            });
        };
        PetController.prototype.deletePet = function (id) {
            var _this = this;
            this.httpService({
                url: '/pets/' + id,
                method: 'DELETE'
            })
                .success(function (response) {
                _this.getPetList();
            })
                .error(function (response) {
            });
        };
        PetController.prototype.editPet = function (petId) {
            this.stateService.go('pets-edit', {
                id: petId
            });
        };
        return PetController;
    }());
    PetController.$inject = ['$http', '$state'];
    App.PetController = PetController;
})(App || (App = {}));
