const RungeKuttaSolver = require("./RungeKuttaSolver.js");

// d^2 x/dt^2 = -x
// d[x0,x1]/dt = [x1,-x0]
// x(0) = [1,0]
const demo1 = function(){
	const rks = new RungeKuttaSolver(0.1,[1,0],function(t,x){
		return [
			x[1],
			-x[0]
		];
	});

	for(let i=0;i<100;i++){
		//解析解 Analytical solution
		const x = Math.cos(rks.getTime());

		console.log(rks.getTime(), ",", rks.getX().join(","), ",", x);
		rks.step();	
	}
};

// dx/dt = 1 - x^2
// x(0) = 0
const demo2 = function(){
	const rks = new RungeKuttaSolver(0.1,[0],function(t,x){
		return [
			1 - x[0] * x[0]
		];
	});

	for(let i=0;i<50;i++){
		//解析解 Analytical solution
		const t = rks.getTime();
		const x = (Math.exp(t) - Math.exp(-t)) / (Math.exp(t) + Math.exp(-t));

		console.log(rks.getTime(), ",", rks.getX().join(",") , ",", x);
		rks.step();	
	}
};

const demo3 = function(){
	const rks = new RungeKuttaSolver(0.1,[1,-0.15],function(t,x){
		return [
			x[1],
			- x[0] - 2 * 0.15 * x[1]
		];
	});

	for(let i=0;i<200;i++){
		//解析解 Analytical solution
		const x = Math.exp(-0.15 * rks.getTime()) * Math.cos(rks.getTime() * Math.sqrt(1 - 0.15 * 0.15));

		console.log(rks.getTime(), ",", rks.getX().join(","), ",", x);
		rks.step();	
	}
};

demo1();
//demo2();
//demo3();