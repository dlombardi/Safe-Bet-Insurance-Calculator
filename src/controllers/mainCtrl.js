app.controller('mainController', function($scope, $http, insuranceService){

  $scope.rooms = [];

  var selectedRoom;
  $scope.total;

  $scope.addRoom = function(room){
    $scope.rooms.push(room);
    $scope.room = "";
  }

  $scope.selectRoom = function(room){
    selectedRoom = room;
    console.log(selectedRoom);
  }

  $scope.submit = function(items){
    selectedRoom.items = items;
    console.log(selectedRoom);
    $scope.total += items.cost;
  }

});
