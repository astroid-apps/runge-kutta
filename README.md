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
	const x = Math.cos(rks.getTime());

	console.log(rks.getTime(), ",", rks.getX().join(","), ",", x);
	rks.step();	
}
 ```
Output:
```
0 , 1,0 , 1
0.1 , 0.9950041666666667,-0.09983333333333333 , 0.9950041652780257
0.2 , 0.9800665972395833,-0.19866916527777778 , 0.9800665778412416
0.30000000000000004 , 0.9553365428639757,-0.29551996253066265 , 0.955336489125606
0.4 , 0.9210610977926066,-0.38941802558044014 , 0.9210609940028851
0.5 , 0.8775827305044371,-0.4794251576239398 , 0.8775825618903728
0.6 , 0.8253358618771687,-0.5646420387026698 , 0.8253356149096783
0.7 , 0.7648425246033907,-0.6442172113950551 , 0.7648421872844885
0.7999999999999999 , 0.6967071472199533,-0.7173555882826991 , 0.6967067093471655
0.8999999999999999 , 0.6216105148667441,-0.7833263961870287 , 0.6216099682706645
0.9999999999999999 , 0.540302967116884,-0.8414704778002743 , 0.5403023058681398
1.0999999999999999 , 0.4535969008432685,-0.8912068777554326 , 0.4535961214255775
...
```

# Link
https://github.com/astroid-apps/pendulum-simulation

https://github.com/astroid-apps/double-pendulum-simulation

