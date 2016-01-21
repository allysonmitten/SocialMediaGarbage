(function(){
    angular.module('hgtApp', ['ui.router', 'ngFileUpload'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
        
            
        });
}());