/** Se crea el modulo principal para el proyecto 'app' */
let _application = angular.module("app", []);

_application.controller(
    "principalController"
    , function( $scope ) {
        console.log("HOLA MUNDO");
        $scope.mensaje = "Bienvenido";
    }
);
