/**
 * Created by swapnilnakate on 27.08.17
 */
angular.module('angularApp')
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url         : '/',
                templateUrl : 'public/templates/home.html',
                controller  : 'mainController'
            })            
            .state('contact', {
                url         : '/contact',
                templateUrl : 'public/templates/contact.html',
                controller  : 'contactController'
            })   
            .state('sales', {
                url         : '/sales',
                templateUrl : 'public/templates/sales.html',
                controller  : 'salesController'
            }) 
            .state('purchase', {
                url         : '/purchase',
                templateUrl : 'public/templates/purchase.html',
                controller  : 'purchaseController'
            }) 
            .state('product', {
                url         : '/product',
                templateUrl : 'public/templates/product.html',
                controller  : 'productController'
            })          
            .state('component', {
                url         : '/component',
                templateUrl : 'public/templates/component.html'
            })
            .state('module', {
                url         : '/module',
                templateUrl : 'public/templates/newmodule.html'
            })
            .state('provider', {
                url         : '/provider',
                templateUrl : 'public/templates/provider.html',
                controller  : 'mainController'
            })
    }]);