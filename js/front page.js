var app=angular.module("myApp",[]);
	app.controller("myCtrl",function($scope)
	{
		$scope.visibility=true;
		$scope.onClick=function()
		{
			$scope.visibility=!$scope.visibility;
		}
	});
	
	app.controller("cities",function($scope)
	{
		/*$scope.city1="Chennai";
		$scope.city2="Mumbai";
		$scope.city3="Bangalore";*/
		$scope.sight1=true;
		$scope.sight2=true;
		$scope.sight3=true;
		
		$scope.onClick=function()
		{
			if($scope.places=='Chennai')
			{
				$scope.sight1=false; 
				$scope.sight2=true;
				$scope.sight3=true;
			}
			if($scope.places=='Mumbai')
			{
				$scope.sight1=true; 
				$scope.sight2=false;
				$scope.sight3=true;
			}
			if($scope.places=='Bangalore')
			{
				$scope.sight1=true; 
				$scope.sight2=true;
				$scope.sight3=false;
			}
			
			
		}
		
	});
	app.controller("navbar",function($scope)
	{
		$scope.visibilitydown1=true;$scope.visibilitydown2=true;$scope.visibilitydown3=true;$scope.visibilitydown4=true; $scope.visibilitydown5=true;
		$scope.visibilityup1=false;
		$scope.visibilityup2=false;
		$scope.visibilityup3=false;
		$scope.visibilityup4=false;
		$scope.visibilityup5=false;
		$scope.onHover1=function()
		{
			$scope.visibilitydown1=false;
			$scope.visibilityup1=true;
		}
		$scope.onLeave1=function()
		{
			$scope.visibilitydown1=true;;
			$scope.visibilityup1=false;
		}
		$scope.onHover2=function()
		{
			$scope.visibilitydown2=false;
			$scope.visibilityup2=true;
		}
		$scope.onLeave2=function()
		{
			$scope.visibilitydown2=true;;
			$scope.visibilityup2=false;
		}
		$scope.onHover3=function()
		{
			$scope.visibilitydown3=false;
			$scope.visibilityup3=true;
		}
		$scope.onLeave3=function()
		{
			$scope.visibilitydown3=true;;
			$scope.visibilityup3=false;
		}
		$scope.onHover4=function()
		{
			$scope.visibilitydown4=false;
			$scope.visibilityup4=true;
		}
		$scope.onLeave4=function()
		{
			$scope.visibilitydown4=true;
			$scope.visibilityup4=false;
		}
		$scope.onHover5=function()
		{
			$scope.visibilitydown5=false;
			$scope.visibilityup5=true;
		}
		$scope.onLeave5=function()
		{
			$scope.visibilitydown5=true;
			$scope.visibilityup5=false;
		}
	});
	
	app.controller("slideshow",function($scope)
	{
		$scope.visimg1=true;
		$scope.visimg2=false;$scope.visimg3=false;$scope.visimg4=false;
		$scope.onHover1=function()
		{
			$scope.visimg1=true;
			$scope.visimg2=false;
			$scope.visimg3=false;
			$scope.visimg4=false;
		}
		$scope.onHover2=function()
		{
			$scope.visimg1=false;
			$scope.visimg2=true;
			$scope.visimg3=false;
			$scope.visimg4=false;
		}
		$scope.onHover3=function()
		{
			$scope.visimg1=false;
			$scope.visimg2=false;
			$scope.visimg3=true;
			$scope.visimg4=false;
		}
		$scope.onHover4=function()
		{
			$scope.visimg1=false;
			$scope.visimg2=false;
			$scope.visimg3=false;
			$scope.visimg4=true;
		}
	});
	
		