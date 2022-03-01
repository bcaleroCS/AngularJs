/** Se crea el modulo principal para el proyecto 'app' */
let _application = angular.module("app", []);

_application.factory(
    "apiFactory"
    , function( $http ) {
        return {
            "getClasevehiculo": ( _c ) => {
                let _req = {
                    url: "https://translidher.colombiasoftware.net/index.php?api=Servicio.Util.getClasevehiculo"
                    , method: "GET"
                };
                $http( _req )
                    .then(
                        function( _response ) {
                            _c( _response.data );
                        }
                        , function( _response ) {
                            _c( _response.data );
                        }
                    );
            }
        }
    }
);

_application.controller(
    "principalController"
    , function( $scope, apiFactory ) {
        $scope.mensaje = "Bienvenido";
        $scope.listaClasevehiculo = [];
        $scope.formulario = {
            nombre: ""
            , fecha: new Date()
            , password: ""
            , observacion: ""
            , claveh: {}
        };

        $scope.enviarFormulario = ( _formulario ) => {
            console.log($scope.formulario, _formulario);
        };

        $scope.changeNombre = () => {
            console.log("me han cambiado");
        };

        $scope.resetear = () => {
            console.log("RESETEADO");
        };

        $scope.disabledFormulario = () => {
            return $scope.formulario.nombre != "BRYAN";
        };

        $scope.requiredField = () => {
            return $scope.formulario?.claveh.claveh_codigo == 12;
        }

        apiFactory.getClasevehiculo(
            ( _response ) => {
                if(_response.success) {
                    $scope.listaClasevehiculo = _response.data || [];
                    console.log($scope.listaClasevehiculo);
                } else {
                    console.error(_response.msg);
                }
            }
        );
    }
);
