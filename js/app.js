// nu trebuie sa aiba acc nume dar in html cel din dreapta
let myNinjaApp = angular.module("myNinjaApp", []);

// myNinjaApp.config(()=>{});
// myNinjaApp.run(()=>{});

// dc fac minified js este posibil sa nu mearga | asa ca protejez varaibilele cu []
// pot adauga mai multe variabile ex : $scope, $depen, etc
myNinjaApp.controller("NinjaController", [
  "$scope",
  ($scope) => {
    $scope.message = "Testing controller";

    $scope.addNinja = function () {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: +$scope.newninja.rate,
        available: true,
      });
      $scope.newninja.name = "";
      $scope.newninja.belt = "";
      $scope.newninja.rate = "";
    };

    // $scope.ninjas=['yoshi','ryu','crystal', 'shaun'];
    $scope.ninjas = [
      {
        name: "gogu",
        belt: "green",
        rate: 40,
        available: true,
      },
      {
        name: "gigi",
        belt: "black",
        rate: 50,
        available: true,
      },
      {
        name: "gina",
        belt: "blu",
        rate: 20,
        available: false,
      },
      {
        name: "unu",
        belt: "red",
        rate: 140,
        available: false,
      },
      {
        name: "dorel",
        belt: "brown",
        rate: 100,
        available: true,
      },
    ];

    $scope.removeNinja = function (ninja) {
      console.log("test");

      let removedNinja = $scope.ninjas.indexOf(ninja);
      //   console.log(removedNinja); aflu locatia
      $scope.ninjas.splice(removedNinja, 1);
    };
  },
]);
