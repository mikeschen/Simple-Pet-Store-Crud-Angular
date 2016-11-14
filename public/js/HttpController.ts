namespace App {
    export class HttpController {
        static $inject = ['$http'];
      
        private httpService;

        public messageResult;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.messageResult = '';
            this.getRequest ();
        }

        public getRequest () {
            // Use the angular http service object to
            // make a call to our server.
            this.httpService ({
                // Provide the HTTP method to use.
                method: 'GET',

                // Provide the url to hit.
                url: '/test'
            })

            // Check for the success of the call.
            .success ((response) => {
                console.log ('The call was successful.');
                console.log ('This is the response: ', response);
                console.log ('This is the response message: ', response.message);
                this.messageResult = response.message;
            })

            // Check for the failure of the call.
            .error (function () {
                console.error ('The call failed.');
            });
        }

        public getSomeRoute () {
            this.httpService ({
                method: 'GET',
                url: '/someroute'
            })
            .success (function () {
                console.log ('The call was successful.');
            })
            .error (function () {
                console.error ('The call failed.');
            });
        }
    }
}
