/** Se crea el modulo principal para el proyecto 'app' */
let _application = angular.module("app", []);

_application.controller(
    "principalController"
    , function( $scope ) {
        console.log("HOLA MUNDO");
        $scope.mensaje = "Bienvenido";
        $scope.formulario = {
            nombre: ""
            , fecha: new Date()
            , password: ""
            , observacion: ""
        };

        $scope.enviarFormulario = ( _formulario ) => {
            console.log($scope.formulario, _formulario);
        };
    }
);
