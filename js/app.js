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
        thumb:$scope.newninja.thumb ="content/img/monkey.jpg",
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
        thumb:"https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNtaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "gigi",
        belt: "black",
        rate: 50,
        available: true,
        thumb:"https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "gina",
        belt: "blu",
        rate: 20,
        available: false,
        thumb:"https://images.unsplash.com/photo-1596920566403-2072ed25d7f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVubnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "unu",
        belt: "red",
        rate: 140,
        available: true,
        thumb:"content/img/monkey.jpg"
      },
      {
        name: "dorel",
        belt: "brown",
        rate: 100,
        available: true,
        thumb:"https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
