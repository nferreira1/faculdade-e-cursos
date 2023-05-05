(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",u="day",a="week",o="month",h="quarter",f="year",c="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,u=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:a,d:u,D:c,h:s,m:i,s:r,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",D={};D[m]=v;var p=function(t){return t instanceof O},g=function t(e,n,r){var i;if(!e)return m;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(m=i),i||!r&&m},S=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},w=y;w.l=g,w.i=p,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function v(t){this.$L=g(t.locale,null,!0),this.parse(t)}var M=v.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return w},M.isValid=function(){return!(this.$d.toString()===d)},M.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return S(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<S(t)},M.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,h=!!w.u(e)||e,d=w.p(t),l=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return h?r:r.endOf(u)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,M=this.$M,y=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case f:return h?l(1,0):l(31,11);case o:return h?l(1,M):l(0,M+1);case a:var D=this.$locale().weekStart||0,p=(v<D?v+7:v)-D;return l(h?y-p:y+(6-p),M);case u:case c:return $(m+"Hours",0);case s:return $(m+"Minutes",1);case i:return $(m+"Seconds",2);case r:return $(m+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var a,h=w.p(t),d="set"+(this.$u?"UTC":""),l=(a={},a[u]=d+"Date",a[c]=d+"Date",a[o]=d+"Month",a[f]=d+"FullYear",a[s]=d+"Hours",a[i]=d+"Minutes",a[r]=d+"Seconds",a[n]=d+"Milliseconds",a)[h],$=h===u?this.$D+(e-this.$W):e;if(h===o||h===f){var v=this.clone().set(c,1);v.$d[l]($),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[w.p(t)]()},M.add=function(n,h){var c,d=this;n=Number(n);var l=w.p(h),$=function(t){var e=S(d);return w.w(e.date(e.date()+Math.round(t*n)),d)};if(l===o)return this.set(o,this.$M+n);if(l===f)return this.set(f,this.$y+n);if(l===u)return $(1);if(l===a)return $(7);var v=(c={},c[i]=t,c[s]=e,c[r]=1e3,c)[l]||1,M=this.$d.getTime()+n*v;return w.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,h=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return w.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:f(n.monthsShort,a,h,3),MMMM:f(h,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,o,2),ddd:f(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:w.s(s,2,"0"),h:c(1),hh:c(2),a:l(s,u,!0),A:l(s,u,!1),m:String(u),mm:w.s(u,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||v[t]||i.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(n,c,d){var l,$=w.p(c),v=S(n),M=(v.utcOffset()-this.utcOffset())*t,y=this-v,m=w.m(this,v);return m=(l={},l[f]=m/12,l[o]=m,l[h]=m/3,l[a]=(y-M)/6048e5,l[u]=(y-M)/864e5,l[s]=y/e,l[i]=y/t,l[r]=y/1e3,l)[$]||y,d?m:w.a(m)},M.daysInMonth=function(){return this.endOf(o).$D},M.$locale=function(){return D[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return w.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},v}(),_=O.prototype;return S.prototype=_,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",u],["$M",o],["$y",f],["$D",c]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=g,S.isDayjs=p,S.unix=function(t){return S(1e3*t)},S.en=D[m],S.Ls=D,S.p={},S}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(484);alert(`Hoje é ${n.n(t)()().format("DD-MM-YYYY")}`)})()})();