(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RVRh:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return m}));t("1c7q"),t("abGl"),t("gZHo"),t("Ir+3"),t("2mQt"),t("Eb4t"),t("Fdmb");var a=t("/FXl"),r=t("TjRS"),o=t("ZFoC"),i=t("6N9q");t("aD51");function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/TimedRenderer.mdx"}});var b={_frontmatter:l},c=r.a;function m(e){var n,t,m=e.components,h=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,d({},b,h,{components:m,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"TimedRenderer"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"A TimedRenderer can be used to render a component at timed intervals."),Object(a.b)("p",null,"Just provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided."),Object(a.b)("p",null,"Powered by ",Object(a.b)("a",d({parentName:"p"},{href:"https://github.com/devboldly/react-use-precision-timer"}),"react-use-precision-timer"),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)(o.c,{__position:1,__code:"<TimedRenderer\n  interval={1000}\n  render={time => (\n    <div>Rendered at: {time + ', ' + new Date(time).toString()}</div>\n  )}\n/>",__scope:(n={props:h,DefaultLayout:r.a,Playground:o.c,Props:o.d,TimedRenderer:i.a},n.DefaultLayout=r.a,n._frontmatter=l,n),mdxType:"Playground"},Object(a.b)(i.a,{interval:1e3,render:function(e){return Object(a.b)("div",null,"Rendered at: ",e+", "+new Date(e).toString())},mdxType:"TimedRenderer"})),Object(a.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("p",null,"The render prop is provided with a single argument, the time at which the render occured in milliseconds since the epoch."),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(o.d,{of:i.a,mdxType:"Props"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Expand each prop for more information.")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"The following example uses a TimedRenderer with a 500ms interval and renders a div with a random border radius, background color, inset box shadow, and a 0.5 second ease-in transition. "),Object(a.b)("p",null,"The effect is a dancing amorphous blob that changes shape and color every half second. His name is Edward. "),Object(a.b)("p",null,"Try changing the interval and transition below."),Object(a.b)(o.c,{__position:5,__code:"<TimedRenderer\n  interval={500}\n  render={time => (\n    <div\n      style={{\n        width: `140px`,\n        height: `100px`,\n        transition: `all 0.5s ease-in`,\n        borderRadius: `${Math.floor(Math.random() * 101)}% ${Math.floor(\n          Math.random() * 101,\n        )}% ${Math.floor(Math.random() * 101)}% ${Math.floor(\n          Math.random() * 101,\n        )}% / ${Math.floor(Math.random() * 101)}% ${Math.floor(\n          Math.random() * 101,\n        )}% ${Math.floor(Math.random() * 101)}% ${Math.floor(\n          Math.random() * 101,\n        )}%`,\n        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(\n          16,\n        )}`,\n        boxShadow: `inset 0 0 0 5px #${Math.floor(\n          Math.random() * 16777215,\n        ).toString(16)}`,\n      }}\n    />\n  )}\n/>",__scope:(t={props:h,DefaultLayout:r.a,Playground:o.c,Props:o.d,TimedRenderer:i.a},t.DefaultLayout=r.a,t._frontmatter=l,t),mdxType:"Playground"},Object(a.b)(i.a,{interval:500,render:function(e){return Object(a.b)("div",{style:{width:"140px",height:"100px",transition:"all 0.5s ease-in",borderRadius:Math.floor(101*Math.random())+"% "+Math.floor(101*Math.random())+"% "+Math.floor(101*Math.random())+"% "+Math.floor(101*Math.random())+"% / "+Math.floor(101*Math.random())+"% "+Math.floor(101*Math.random())+"% "+Math.floor(101*Math.random())+"% "+Math.floor(101*Math.random())+"%",backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16),boxShadow:"inset 0 0 0 5px #"+Math.floor(16777215*Math.random()).toString(16)}})},mdxType:"TimedRenderer"})),Object(a.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(a.b)("h4",{id:"example-css-explanation"},"Example CSS Explanation"),Object(a.b)("p",null,"Here's a quick explanation of the random number generation happening in the CSS:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"borderRadius")," takes eight percentages in the format ",Object(a.b)("inlineCode",{parentName:"li"},"x% x% x% x% / x% x% x% x%"),", where ",Object(a.b)("inlineCode",{parentName:"li"},"x")," is a random number from ",Object(a.b)("inlineCode",{parentName:"li"},"0")," to ",Object(a.b)("inlineCode",{parentName:"li"},"100"),". This gives it the amorphous shape. Who knew ",Object(a.b)("inlineCode",{parentName:"li"},"borderRadius")," could do so much?"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"backgroundColor")," and ",Object(a.b)("inlineCode",{parentName:"li"},"boxShadow")," both use ",Object(a.b)("inlineCode",{parentName:"li"},"Math.floor(Math.random() * 16777215).toString(16)")," to generate random hex color values.")))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/TimedRenderer.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-timed-renderer-mdx-c6d0a52d77cbe4d4cbac.js.map