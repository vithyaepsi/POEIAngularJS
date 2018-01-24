(function() {
  'use strict';

	function Exo3Ctrl() {
		var vm = this;
		vm.msg = 'Welcome All!';
		vm.films = [
			{name: 'Fast and Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkSMd8AXSpA1L1SbBPc2AfVJfmE.jpg', year: 2001, selected:false},
			{name: '2 Fast 2 Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1Snfl40rXmAJNiMyZUczUyFVuf.jpg', year: 2003, selected:false},
			{name: 'Fast & Furious: Tokyo Drift', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ceW7kWPAc2uFG5WzYDbP8Od3gw.jpg', year: 2006, selected : false},
			{name: 'Fast & Furious', img : 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,673,1000_AL_.jpg', year: 2009, selected:false}
		];
		vm.subMsg = 'A seed Project';
		var idSelected;
		vm.idSelected = idSelected;


		vm.mdr = mdr;
		function mdr($event){
			var pouet = _.findIndex(vm.films, function(o) { return o.img == $event.target.src; });
			if( vm.films[pouet].selected === true ) {
				vm.films[pouet].selected = false;
				vm.idSelected = -1;
			}
			else{
				for(var i=0; i < vm.films.length; i++){
					vm.films[i].selected = false;
				}
				vm.films[pouet].selected = true;
				vm.idSelected = pouet;
			}
	  		
		}
	}



  Exo3Ctrl.$inject = [];

  angular.module('daproject')
    .controller('Exo3Ctrl', Exo3Ctrl);

})();
