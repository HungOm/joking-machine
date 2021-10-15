const l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}};l();var d={speech:function(e,t){this._validate(e),this._request(e)},_validate:function(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&e.c.toLowerCase()!="auto"){var t=!1;switch(e.c.toLowerCase()){case"mp3":t=new Audio().canPlayType("audio/mpeg").replace("no","");break;case"wav":t=new Audio().canPlayType("audio/wav").replace("no","");break;case"aac":t=new Audio().canPlayType("audio/aac").replace("no","");break;case"ogg":t=new Audio().canPlayType("audio/ogg").replace("no","");break;case"caf":t=new Audio().canPlayType("audio/x-caf").replace("no","")}if(!t)throw"The browser does not support the audio codec "+e.c}},_request:function(e){var t=e.audio,a=this._buildRequest(e),o=this._getXHR();o.onreadystatechange=function(){if(o.readyState==4&&o.status==200){if(o.responseText.indexOf("ERROR")==0)throw o.responseText;t.src=o.responseText,t.play()}},o.open("POST","https://api.voicerss.org/",!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.send(a)},_buildRequest:function(e){var t=e.c&&e.c.toLowerCase()!="auto"?e.c:this._detectCodec();return"key="+(e.key||"")+"&src="+(e.src||"")+"&hl="+(e.hl||"")+"&v="+(e.v||"")+"&r="+(e.r||"")+"&c="+(t||"")+"&f="+(e.f||"")+"&ssml="+(e.ssml||"")+"&b64=true"},_detectCodec:function(){var e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR:function(){try{return new XMLHttpRequest}catch{}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch{}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch{}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch{}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch{}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch{}throw"The browser does not support HTTP request"}};const s=document.querySelector("#button"),i=document.querySelector("#audio"),f="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist,explicit";async function p(e){let t="";try{const o=await(await fetch(e)).json();o.setup?t=`${o.setup} ... ${o.delivery}`:t=o.joke,await y(t),u()}catch(a){console.log(a)}}function u(){s.disabled=!s.disabled}async function y(e){e==null&&(e="Sorry, I cant get my joke now for some unattainable reason"),d.speech({key:"c0480b4cd0ac4d5998137c7756129a81",src:e,hl:"en-us",v:"Mary",r:0,c:"mp3",f:"44khz_16bit_stereo",ssml:!1,audio:i})}s.addEventListener("click",()=>{p(f)});i.addEventListener("ended",u);
