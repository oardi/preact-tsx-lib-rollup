import { options, h } from 'preact';

var t,u,r,o=0,i=[],c=options.__b,f=options.__r,e=options.diffed,a=options.__c,v=options.unmount;function m(t,r){options.__h&&options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[];}catch(u){t.__H.__h=[],options.__e(u,t.__v);}}),i=[];}options.__b=function(n){u=null,c&&c(n);},options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[]);},options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===options.requestAnimationFrame||((r=options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],options.__e(r,t.__v);}}),a&&a(t,u);},options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){options.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j(n){var t=u;n.__c=n.__(),u=t;}function w(n,t){return "function"==typeof t?t(n):t}

var ButtonCounter = function (_a) {
    var name = _a.name, onClicked = _a.onClicked;
    var _b = l(0), count = _b[0], setCount = _b[1];
    var handleClick = function () {
        setCount(count + 1);
        onClicked && onClicked(count);
    };
    return (h("button", { onClick: function () { return handleClick(); }, className: "btn btn-primary" },
        name,
        " - You clicked me ",
        count,
        " times"));
};

export { ButtonCounter };
//# sourceMappingURL=index.es.js.map
