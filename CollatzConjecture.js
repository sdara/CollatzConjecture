//Collatz Conjecture
(function(n){
	var steps = [];
	
	function impossible(a){
		steps.push(a);
		if(a == 1) {
			return steps.length + " step"+(steps.length==1?"":"s")+": " + steps.join(', ');
		}else{
			if(a % 2){
				return impossible( 3 * a + 1 );
			}else{
				return impossible( a / 2 );
			}
		}
	}
	console.log(impossible(n));
}(27));