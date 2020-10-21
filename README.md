# Runge-kutta
Calculation of simultaneous ordinary differential equations by the Runge–Kutta method.

ルンゲ・クッタ法による連立常微分方程式の数値計算プログラムです。2階以上の常微分方程式については、連立の1階常微分方程式に変換するとこのプログラムで計算できるようになります。

# Demo

```JavaScript
node index.js
```

# Sample
Equation to be solved: d^2 y/dt^2 = -y

The equation can be converted to simultaneous equations d**x**/dt = f(t,**x**)

Where **x** = [ x[0], x[1] ] = [ y, dy/dt ] and f(t,**x**) = [ x[1], -x[0] ].

Init value **x**(t=0) = [1, 0]

Time step = 0.1

```JavaScript
const rks = new RungeKuttaSolver(0.1,[1,0],function(t,x){
	return [
		x[1],
		-x[0]
	];
});

for(let i=0;i<100;i++){
	//解析解 Analytical solution
	const x = Math.cos(-rks.getTime());

	console.log(rks.getTime(), ",", rks.getX().join(","), ",", x);
	rks.step();	
}
 ```

# Link
https://github.com/astroid-apps/pendulum-simulation

https://github.com/astroid-apps/double-pendulum-simulation

