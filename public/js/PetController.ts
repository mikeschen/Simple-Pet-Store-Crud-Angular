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
            this.httpService ({
                url: '/pets',
                method: 'GET'
            })
            .success ((response) => {
                this.petList = response;
            })
            .error ((response) => {
            });
        }

        public getPet (id) {
            this.httpService ({
                url: '/pets',
                method: 'GET',
                params: {
                    id: id
                }
            })
            .success ((response) => {
                this.currentPet = response [0];
            })
            .error ((response) => {
            });
        }

        public save () {
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
              this.getPetList();
            })
            .error ((response) => {
            });
        }

        public deletePet (id) {
            this.httpService ({
                url: '/pets/' + id,
                method: 'DELETE'
            })
            .success ((response) => {
              this.getPetList();
                // this.stateService.go ('pets');
            })
            .error ((response) => {
            });
        }

        public editPet (petId) {
            this.stateService.go ('pets-edit',
                {
                  id: petId
                }
            );
        }
    }
}
