import { useRef } from "react";

	function rysuj()
	{
		d = 'M0,200 l599,0 l-5,-5 l0,10 l5,-5 M300,399 l0,-399 l-5,5 l10,0 l-5,-5';

		for( i=20; i<600; i+=20 )	d += ' M'+i+',196 l0,8';
		for( i=20; i<400; i+=20 )	d += ' M296,'+i+' l8,0';

		document.getElementById('d').setAttribute('d',d);

		document.getElementById('aa').innerHTML = a = parseInt(document.getElementById('a').value)/100;
		document.getElementById('bb').innerHTML = b = parseInt(document.getElementById('b').value)/50;
		document.getElementById('cc').innerHTML = c = parseInt(document.getElementById('c').value)/20;

		w = 'M0,'+(200-(a*225+b*(-15)+c)*20);
		for( i=-15; i<15; i+=.1 )
		w += ' L'+(300+i*20)+','+(200-(a*i*i+b*i+c)*20);

		document.getElementById('w').setAttribute('d',w);
	}

	rysuj();
