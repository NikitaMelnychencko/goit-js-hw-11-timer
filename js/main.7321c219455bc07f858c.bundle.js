(self.webpackChunkgoit_js_hw_11_timer=self.webpackChunkgoit_js_hw_11_timer||[]).push([[179],{579:function(e,t,a){"use strict";a(390)},390:function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function t(e){var a=e.selector,n=e.classUpdateValue,o=e.targetDate;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.selector=a,this.targetDate=o,this._refs=this._getRefs(a,n),this.start()}var a,n;return a=t,(n=[{key:"_getRefs",value:function(e,t){return{controls:document.querySelectorAll("".concat(e," .").concat(t))}}},{key:"start",value:function(){var e=this,t=new Date(this.targetDate),a=Date.now()-t;setInterval((function(){a-=1e3;var t=e.getTimeComponents(a),n=[t.days,t.hours,t.mins,t.secs];e.updateClockFace(n,e._refs.controls)}),1e3)}},{key:"getTimeComponents",value:function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}},{key:"updateClockFace",value:function(e,t){t.forEach((function(t,a){t.textContent=e[a]}))}}])&&e(a.prototype,n),t}())({selector:"#timer-1",classUpdateValue:"value",targetDate:new Date("Jul 17, 2019")})}},function(e){e(e.s=579)}]);