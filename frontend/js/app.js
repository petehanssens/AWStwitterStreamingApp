angular.module('demo', ["chart.js"])
.controller('Sentiment', function($scope, $http) {
    $http.get('https://p15otjmwz2.execute-api.ap-southeast-2.amazonaws.com/prod').
        then(function(response) {
            $scope.sentiment = response.data;
        });
})
.controller('Last_Ten', function($scope, $http) {
    $http.get('https://pfz030v0nd.execute-api.ap-southeast-2.amazonaws.com/prod').
        then(function(response) {
            $scope.last_ten = response.data;
        });
})
.controller('Mortgage', function($scope, $http) {
    $http.get('https://is7l7fjmni.execute-api.ap-southeast-2.amazonaws.com/prod').
        then(function(response) {
            $scope.mortgages = response.data;
        });
})
.controller('Rate', function($scope, $http) {
    $http.get('https://4vrbmorj53.execute-api.ap-southeast-2.amazonaws.com/prod').
        then(function(response) {
            $scope.rates = response.data;
        });
})
.controller('Failure', function($scope, $http) {
    $http.get('https://edxly8e93g.execute-api.ap-southeast-2.amazonaws.com/prod').
        then(function(response) {
            $scope.fails = response.data;
        });
})
.controller('Thank', function($scope, $http) {
    $http.get('https://zgxlkc7od7.execute-api.ap-southeast-2.amazonaws.com/prod').
        then(function(response) {
            $scope.thanks = response.data;
        });
})
.controller('Asdfasdf', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://kift28u1b6.execute-api.ap-southeast-2.amazonaws.com/prod'
    }).then(function successCallback(response) {
        $scope.asdfasdf = response.data;
        $scope.month1 = [];
        $scope.positive = [];
        $scope.neutral = [];
        $scope.negative = [];
        angular.forEach($scope.asdfasdf, function(value){
           $scope.month1.push(value.month1)
           $scope.positive.push(value.positive)
           $scope.neutral.push(value.neutral)
           $scope.negative.push(value.negative)
        });
        $scope.labels123 = $scope.month1;
        $scope.series123 = ['Positive', 'Neutral', 'Negative'];
        $scope.data123 = [$scope.positive, $scope.neutral, $scope.negative];
        $scope.labels456 = ["Positive","Neutral","Negative"]
        $scope.data456 = [$scope.asdfasdf[19].positive,$scope.asdfasdf[19].neutral,$scope.asdfasdf[19].negative]
    });
});
