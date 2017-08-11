(function (angular) {
	'use strict';
	//主程序
	var app = angular.module('myApp', []);
	//注册一个控制器
	app.controller('myController', ['$scope','$location', function ($scope,$location) {
		//给文本框添加一个模型
		$scope.txt = '';
		//任务列表也需要一个
		//每个任务的结构{id:1,txt:内容,completed:true}
		$scope.todos = [
			{id: 0.2356, txt: '吃饭', completed: false},
			{id: 0.14785, txt: '睡觉', completed: false},
			{id: 0.3698, txt: '打豆豆', completed: true}
		];
		//添加add
		$scope.add = function () {
			if(!$scope.txt){
				return;
			}
			$scope.todos.push({
				id: Math.random(),
				txt: $scope.txt,
				completed: false
			});
			$scope.txt = '';
		};
		//删除
		$scope.remove = function (id) {
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
					break;
				}
			}
		};
		//删除全部
		$scope.clear = function(){
			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
		};
		//是否有已完成的
		$scope.existCompleted=function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].completed){
					return true;
				}
			}
			return false;
		};
		//判断当前选中的
		$scope.current = -1;
		$scope.currentDb = function(id){
			$scope.current = id;
		};
		$scope.save = function(id){
			$scope.current = -1;
		};

		var now = true;
		$scope.toggleAll = function(){
			for(var i= 0;i<$scope.todos.length;i++){
				$scope.todos[i].completed = now;
			}
			now = !now;
		};

		$scope.selector = {};
		$scope.$location = $location;
		$scope.$watch('$location.path()',function(now,old){
			switch (now){
				case '/active':
					$scope.selector = {completed:false};
					break;
				case '/completed':
					$scope.selector = {completed:true};
					break;
				default:
					$scope.selector = {};
					break;
			}
		});

		$scope.equalCompare = function(source,target){
			return source === target;
		}



	}]);

})(angular);
