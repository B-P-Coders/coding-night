import { memo } from "react";
import React {useRef,memo } from "react";

	function rysuj()
	{
        const aa = useRef();
        const a = useRef();
        const bb = useRef();
        const b = useRef();
        const cc = useRef();
        const c = useRef();
        const d = useRef();
        const w = useRef();

		d = 'M0,200 l599,0 l-5,-5 l0,10 l5,-5 M300,399 l0,-399 l-5,5 l10,0 l-5,-5';

		for( i=20; i<600; i+=20 )	d += ' M'+i+',196 l0,8';
		for( i=20; i<400; i+=20 )	d += ' M296,'+i+' l8,0';

		d.current.setAttribute('d',d);

		aa.current.innerHTML = a = parseInt(a.current.value)/100;
		bb.current.innerHTML = b = parseInt(b.current.value)/50;
		cc.current.innerHTML = c = parseInt(c.current.value)/20;

		w = 'M0,'+(200-(a*225+b*(-15)+c)*20);
		for( i=-15; i<15; i+=.1 )
		w += ' L'+(300+i*20)+','+(200-(a*i*i+b*i+c)*20);

		w.current.setAttribute('d',w);

        rysuj();

        return(
        <svg width="600" height="400" style="float:left">
	        <path d="" ref={d} style="fill:none; stroke-width:1; stroke:black;" />
	        <path d="" ref={w} style="fill:none; stroke-width:3; stroke:  red;" />
        </svg>

            <b>y = a x<sup>2</sup> + b x + c</b>
        <br/><br />
            <input id="a" type="range" min="-100" max="100" value="0" oninput="rysuj()" /> a = <b ref={aa}></b>
        <br/><br />
            <input id="b" type="range" min="-100" max="100" value="0" oninput="rysuj()" /> b = <b ref={bb}></b>
        <br/><br />
            <input id="c" type="range" min="-100" max="100" value="0" oninput="rysuj()" /> c = <b ref={cc}></b>

        )
	}

    export default memo(rysuj);	
