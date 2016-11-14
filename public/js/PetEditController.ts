namespace App {
    export class PetEditController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public pet;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            this.httpService ({
                url: '/pets/' + this.stateService.params.id,
                method: 'GET'
            })
            .success ((response) => {
                this.pet = response;
            })
            .error (() => {
            })
        }

        public save () {
            let updateId = this.stateService.params.id;

            this.httpService ({
                url: '/pets/' + updateId,
                method: 'PUT',
                data: {
                    title: this.pet.title,
                    description: this.pet.description,
                    author: this.pet.author
                }
            })
            .success (() => {
                this.stateService.go ('pets');
            })
            .error (() => {
            })
        }
    }
}
