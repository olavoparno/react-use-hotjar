(this["webpackJsonpreact-use-hotjar-example"]=this["webpackJsonpreact-use-hotjar-example"]||[]).push([[0],{30:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(26),l=n(20),u=n(58),s=n(42),m=n(64),d=n(60),h=n(61),f=n(62),j=n(63);var p=function(){var e=function(){var e=Object(a.useCallback)((function(e,t){try{var n=document.getElementById(t)||document.createElement("script");return n.id=t,n.innerText=e,n.crossOrigin="anonymous",document.head.appendChild(n),!0}catch(e){return!1}}),[]);return Object(a.useMemo)((function(){return{appendHeadScript:e}}),[e])}().appendHeadScript,t=Object(a.useCallback)((function(t,n,a){var r=e("(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:"+t+",hjsv:"+n+"};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');","hotjar-init-script");return a&&"function"==typeof a&&a("Hotjar ready: "+r),r}),[e]),n=Object(a.useCallback)((function(t,n,a){try{var r="string"!=typeof n?JSON.stringify(n):n,o=e('var userId="'+t+'" || null;window.hj("identify",userId,'+r+");","hotjar-identify-script");return a&&"function"==typeof a&&a("Hotjar identified: "+o),o}catch(t){return console.error("Hotjar error:",t),!1}}),[e]);return Object(a.useMemo)((function(){return{initHotjar:t,identifyHotjar:n}}),[t,n])},b=Object(u.a)({root:{maxWidth:390,margin:"4rem auto"},list:{padding:"0 1.5rem"}}),E=console.info;function y(){var e=b(),t=Object(a.useState)(null),n=Object(l.a)(t,2),o=n[0],c=n[1],u=p().identifyHotjar;return Object(a.useEffect)((function(){c((function(){return{name:"Olli",surname:"Parno",identification:1234567,address:"Streets of Tomorrow"}}))}),[]),Object(a.useEffect)((function(){if(o){o.identification;var e=Object(i.a)(o,["identification"]);u(o.identification,JSON.stringify(e),E)}}),[u,o]),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:e.list},r.a.createElement("li",null,r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},"Name: ",r.a.createElement("b",null,o.name))),r.a.createElement("li",null,r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},"Surname: ",r.a.createElement("b",null,o.surname))),r.a.createElement("li",null,r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},"Identification: ",r.a.createElement("b",null,o.identification))),r.a.createElement("li",null,r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},"Address: ",r.a.createElement("b",null,o.address)))))}function g(){var e=b(),t=p().initHotjar,n=Object(a.useState)(!1),o=Object(l.a)(n,2),c=o[0],i=o[1],u=Object(a.useState)(!1),g=Object(l.a)(u,2),v=g[0],O=g[1];return Object(a.useEffect)((function(){var e=t(2262285,6,E);O(e)}),[t]),r.a.createElement(m.a,{className:e.root},r.a.createElement(d.a,null,r.a.createElement(s.a,{gutterBottom:!0,variant:"h5",component:"h1"},"react-use-hotjar"),r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"h2",paragraph:!0},"Adds Hotjar capabilities as custom hooks such as initializing Hotjar with its proper application ID and Version and identifying users through"," ",r.a.createElement(h.a,{target:"_blank",href:"https://help.hotjar.com/hc/en-us/articles/360033640653-Identify-API-Reference"},"Hotjar's Identify API."))),c&&r.a.createElement(d.a,null,r.a.createElement(y,null)),r.a.createElement(f.a,null,r.a.createElement(j.a,{disabled:!v,size:"small",color:"primary",onClick:function(){i(!c)}},c?"Click to logout!":"Click to login!")))}c.a.render(a.createElement(g,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ea1c3906.chunk.js.map