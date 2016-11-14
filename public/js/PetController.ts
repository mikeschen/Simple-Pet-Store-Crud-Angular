namespace App {
    export class PetController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public petList;
        public currentPet;
        public newPet;

        public title;
        public description;
        public author;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            console.log ('- test: ', this.stateService);

            this.petList = [];
            this.newPet = {};

            this.getPetList ();
        }

        public getPetList () {
            console.log ('here');
            this.httpService ({
                url: '/pets',
                method: 'GET'
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.petList = response;
            })
            .error ((response) => {
            });
        }

        public getPet (id) {
            console.log ('here');
            this.httpService ({
                url: '/pets',
                method: 'GET',
                params: {
                    id: id
                }
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                // this.postList = response;
                this.currentPet = response [0];
            })
            .error ((response) => {
            });
        }

        public save () {
            console.log ('Data to save: ', this.title);

            this.httpService ({
                url: '/pets',
                method: 'POST',
                data: {
                    title: this.title,
                    description: this.description,
                    author: this.author
                }
            })
            .success ((response) => {
                console.log ('Test data: ', response);
            })
            .error ((response) => {
            });
        }

        public deletePet (id) {
            console.log ('Deleting Pet: ' + id);

            this.httpService ({
                url: '/pets/' + id,
                method: 'DELETE'
            })
            .success ((response) => {
                console.log ('Object deleted.');
                console.log ('Test data: ', response);

                this.stateService.go ('home');
            })
            .error ((response) => {
            });
        }

        public editPet (petId) {
            console.log ('Pet id: ' + petId);

            this.stateService.go ('pets-edit',
                {
                    id: petId
                }
            );
        }
    }
}
