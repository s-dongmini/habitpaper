import"./index-dcb8a677.js";function u(n){const t=n-1;return t*t*t+1}function $(n,{delay:t=0,duration:a=400,easing:e=u,x:f=0,y:p=0,opacity:s=0}={}){const o=getComputedStyle(n),r=+o.opacity,i=o.transform==="none"?"":o.transform,m=r*(1-s);return{delay:t,duration:a,easing:e,css:(y,c)=>`
			transform: ${i} translate(${(1-y)*f}px, ${(1-y)*p}px);
			opacity: ${r-m*c}`}}function d(n,{delay:t=0,duration:a=400,easing:e=u,start:f=0,opacity:p=0}={}){const s=getComputedStyle(n),o=+s.opacity,r=s.transform==="none"?"":s.transform,i=1-f,m=o*(1-p);return{delay:t,duration:a,easing:e,css:(y,c)=>`
			transform: ${r} scale(${1-i*c});
			opacity: ${o-m*c}
		`}}export{$ as f,d as s};
