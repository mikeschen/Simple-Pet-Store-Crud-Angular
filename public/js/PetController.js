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
            console.log('here');
            this.httpService({
                url: '/pets',
                method: 'GET'
            })
                .success(function (response) {
                console.log('Test data: ', response);
                _this.petList = response;
            })
                .error(function (response) {
            });
        };
        PetController.prototype.getPet = function (id) {
            var _this = this;
            console.log('here');
            this.httpService({
                url: '/pets',
                method: 'GET',
                params: {
                    id: id
                }
            })
                .success(function (response) {
                console.log('Test data: ', response);
                _this.currentPet = response[0];
            })
                .error(function (response) {
            });
        };
        PetController.prototype.save = function () {
            console.log('Data to save: ', this.title);
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
                console.log('Test data: ', response);
            })
                .error(function (response) {
            });
        };
        PetController.prototype.deletePet = function (id) {
            var _this = this;
            console.log('Deleting Pet: ' + id);
            this.httpService({
                url: '/pets/' + id,
                method: 'DELETE'
            })
                .success(function (response) {
                console.log('Object deleted.');
                console.log('Test data: ', response);
                _this.stateService.go('home');
            })
                .error(function (response) {
            });
        };
        PetController.prototype.editPet = function (petId) {
            console.log('Pet id: ' + petId);
            this.stateService.go('pets-edit', {
                id: petId
            });
        };
        return PetController;
    }());
    PetController.$inject = ['$http', '$state'];
    App.PetController = PetController;
})(App || (App = {}));
