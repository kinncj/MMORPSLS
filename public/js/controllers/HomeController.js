angular.module('HomeController', []).controller('HomeController', function($scope, Socket) {
    var messageList = [];

    Socket.on("message", function (data) {
        messageList.push(data);
    });

    $scope.messageList = messageList;

    $scope.sendMessage = function() {
        var data = {
            'user':    $scope.myForm.name,
            'content': $scope.myForm.message
        };

        Socket.emit("message", data);
    };
});
