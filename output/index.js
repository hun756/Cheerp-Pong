"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function __ZN4BallC2Eiiii(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	Larg0.i0=10;
	Larg0.i1=10;
	Larg0.i2=Larg1;
	Larg0.i3=Larg2;
	Larg0.i6=4;
	tmp0=+Math.floor( +Math.random()*2);
	Larg0.i4=(~~(tmp0+1)&1|0)!==0?1|0: -1|0;
	Larg0.i5=1;
}
function __ZN4Ball6updateEP6PaddleP14ComputerPaddlePN6client17HTMLCanvasElementE(Larg0,Larg1,Larg2,Larg3){
	var tmp0=0,tmp1=0,tmp2=-0.,L$pidx3$pval=0;
	tmp0=Larg0.i3|0;
	if((tmp0|0)<11)Larg0.i5=1;
	tmp1=Larg0.i1|0;
	if( +Larg3.height+ -10<=(+(tmp1+tmp0|0)))Larg0.i5=-1;
	if((Larg0.i2|0)<1){
		tmp2=+Larg3.width;
		Larg0.i2=~~(tmp2*.5-(+((Larg0.i0|0)/2|0)));
		__ZN4Game13computerScoreE=(__ZN4Game13computerScoreE|0)+1|0;
	}
	tmp0=Larg0.i2|0;
	tmp1=Larg0.i0|0;
	if( +Larg3.width<=(+(tmp1+tmp0|0))){
		tmp2=+Larg3.width;
		Larg0.i2=~~(tmp2*.5-(+((Larg0.i0|0)/2|0)));
		__ZN4Game11playerScoreE=(__ZN4Game11playerScoreE|0)+1|0;
	}
	tmp0=Larg0.i2|0;
	if((tmp0|0)<=((Larg1.i0|0)+(Larg1.i2|0)|0)){
		tmp1=Larg0.i3|0;
		L$pidx3$pval=Larg1.i3|0;
		if((tmp1|0)>=(L$pidx3$pval|0))if(((Larg0.i1|0)+tmp1|0)<=((Larg1.i1|0)+L$pidx3$pval|0))Larg0.i4=1;
	}
	if(((Larg0.i0|0)+tmp0|0)>=(Larg2.i2|0)){
		tmp1=Larg0.i3|0;
		L$pidx3$pval=Larg2.i3|0;
		if((tmp1|0)>=(L$pidx3$pval|0))if(((Larg0.i1|0)+tmp1|0)<=((Larg2.i1|0)+L$pidx3$pval|0))Larg0.i4=-1;
	}
	tmp1=Larg0.i6|0;
	Larg0.i2=(__imul(tmp1,Larg0.i4|0)|0)+tmp0|0;
	Larg0.i3=(Larg0.i3|0)+(__imul(Larg0.i5|0,tmp1)|0)|0;
}
function __ZN6Entity4drawEPN6client24CanvasRenderingContext2DE(Larg0,Larg1){
	var tmp0=null;
	tmp0="#fff";
	Larg1.fillStyle=tmp0;
	Larg1.fillRect((+(Larg0.i2|0)),(+(Larg0.i3|0)),(+(Larg0.i0|0)),(+(Larg0.i1|0)));
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	return String(__ZN6client6String11fromCharPtrIcEEPS0_PKT_(Larg0,Marg0));
}
function __ZN6client6String11fromCharPtrIcEEPS0_PKT_(Larg0,Marg0){
	var tmp0=null,Lgeptoindexphi=0,tmp2=null;
	tmp0=String();
	if((Larg0[Marg0]&255)===0)return tmp0;
	Lgeptoindexphi=0;
	while(1){
		tmp2=String.fromCharCode(Larg0[Marg0+Lgeptoindexphi|0]<<24>>24);
		tmp0=tmp0.concat(tmp2);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if((Larg0[Marg0+Lgeptoindexphi|0]&255)!==0)continue;
		break;
	}
	return tmp0;
}
function ___cxx_global_var_init(){
	__ZN4Game11keysPressedE=new Map();
}
function __ZN4GameC2Ev(Larg0){
	var tmp0=-0.,tmp1=null,tmp2=null,tmp3=-0.;
	tmp1="app";
	Larg0.a0=document.getElementById(tmp1);
	tmp1=Larg0.a0;
	if(tmp1!==null){
		tmp2="2d";
		Larg0.a1=tmp1.getContext(tmp2);
	}
	tmp1=Larg0.a1;
	tmp2="30px Orbitron";
	tmp1.font=tmp2;
	tmp1="keydown";
	window.addEventListener(tmp1,__ZN6cheerp8CallbackIZN4GameC1EvE3$_0EEPN6client13EventListenerEOT_());
	tmp1="keyup";
	window.addEventListener(tmp1,__ZN6cheerp8CallbackIZN4GameC1EvE3$_1EEPN6client13EventListenerEOT_());
	tmp1={i0:0,i1:0,i2:0,i3:0,i4:0,i5:0,i6:0};
	tmp3=+Larg0.a0.height;
	tmp1.i0=20;
	tmp1.i1=60;
	tmp1.i2=20;
	tmp1.i3=~~(tmp3*.5+ -30);
	tmp1.i6=8;
	Larg0.a2=tmp1;
	tmp1={i0:0,i1:0,i2:0,i3:0,i4:0,i5:0,i6:0};
	tmp3=+Larg0.a0.width;
	tmp0=+Larg0.a0.height;
	tmp1.i0=20;
	tmp1.i1=60;
	tmp1.i2=~~(tmp3+ -40);
	tmp1.i3=~~(tmp0*.5+ -30);
	tmp1.i6=8;
	Larg0.a3=tmp1;
	tmp1={i0:0,i1:0,i2:0,i3:0,i4:0,i5:0,i6:0};
	tmp3=+Larg0.a0.width;
	__ZN4BallC2Eiiii(tmp1,~~(tmp3*.5+ -5),~~( +Larg0.a0.height*.5+ -5));
	Larg0.a4=tmp1;
}
function __ZN6cheerp8CallbackIZN4GameC1EvE3$_0EEPN6client13EventListenerEOT_(){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0={a0:null,a1:null,a2:null};
	tmp2=__ZZN4GameC1EvEN3$_08__invokeEPN6client13KeyboardEventE;
	tmp0.a0=tmp2;
	tmp2=__ZN6cheerp7ClosureIFvPN6client13KeyboardEventEEEcvPNS1_13EventListenerEEv(tmp0);
	tmp1=tmp0.a1;
	if(tmp1!==null)tmp1(tmp0.a2);
	return tmp2;
}
function __ZN6cheerp8CallbackIZN4GameC1EvE3$_1EEPN6client13EventListenerEOT_(){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0={a0:null,a1:null,a2:null};
	tmp2=__ZZN4GameC1EvEN3$_18__invokeEPN6client13KeyboardEventE;
	tmp0.a0=tmp2;
	tmp2=__ZN6cheerp7ClosureIFvPN6client13KeyboardEventEEEcvPNS1_13EventListenerEEv(tmp0);
	tmp1=tmp0.a1;
	if(tmp1!==null)tmp1(tmp0.a2);
	return tmp2;
}
function __ZZN4GameC1EvEN3$_18__invokeEPN6client13KeyboardEventE(Larg0){
	__ZZN4GameC1EvENK3$_1clEPN6client13KeyboardEventE(Larg0);
}
function __ZN6cheerp7ClosureIFvPN6client13KeyboardEventEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvPN6client13KeyboardEventEEE14deleter_helperEPNS5_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFvPN6client13KeyboardEventEEE14deleter_helperEPNS5_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0,Larg1){
	if(__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE===null)__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE=new Map();
	__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE.set(Larg0,Larg1);
}
function __ZZN4GameC1EvENK3$_1clEPN6client13KeyboardEventE(Larg0){
	var tmp0=null;
	tmp0=__ZN4Game11keysPressedE;
	tmp0.set(~~ +Larg0.which,!!0);
}
function __ZZN4GameC1EvEN3$_08__invokeEPN6client13KeyboardEventE(Larg0){
	__ZZN4GameC1EvENK3$_0clEPN6client13KeyboardEventE(Larg0);
}
function __ZZN4GameC1EvENK3$_0clEPN6client13KeyboardEventE(Larg0){
	var tmp0=null;
	tmp0=__ZN4Game11keysPressedE;
	tmp0.set(~~ +Larg0.which,!!1);
}
function __ZN4Game11boardDetailEv(Larg0){
	var tmp0=0,L$plcssa=null,tmp2=null,tmp3=-0.,tmp4=-0.,tmp5=0,tmp6=null,tmp7=0;
	L$plcssa=Larg0.a1;
	tmp2="#fff";
	L$plcssa.strokeStyle=tmp2;
	Larg0.a1.lineWidth=5;
	L$plcssa=Larg0.a1;
	tmp3=+Larg0.a0.width;
	L$plcssa.strokeRect(10,10,tmp3+ -20, +Larg0.a0.height+ -20);
	tmp3=+Larg0.a0.height;
	tmp4=+Larg0.a0.width;
	L$plcssa=Larg0.a1;
	if(tmp3>30){
		tmp4=tmp4*.5+ -10;
		tmp5=0;
		tmp0=30;
		while(1){
			tmp2="#fff";
			L$plcssa.fillStyle=tmp2;
			Larg0.a1.fillRect(tmp4,(+(tmp5+10>>>0)),15,20);
			tmp5=tmp0+30|0;
			L$plcssa=Larg0.a1;
			if(tmp3>(+(tmp5>>>0))){
				tmp7=tmp5;
				tmp5=tmp0;
				tmp0=tmp7;
				continue;
			}
			break;
		}
	}
	tmp2=new Number((+(__ZN4Game11playerScoreE|0)));
	tmp6=tmp2.toString(10);
	L$plcssa.fillText(tmp6,280,50);
	L$plcssa=Larg0.a1;
	tmp2=new Number((+(__ZN4Game13computerScoreE|0)));
	tmp6=tmp2.toString(10);
	L$plcssa.fillText(tmp6,390,50);
}
function __ZN4Game4loopEv(Larg0){
	var tmp0=null;
	__ZN4Game6updateEv(Larg0);
	__ZN4Game4drawEv(Larg0);
	tmp0={a0:Larg0};
	+requestAnimationFrame(__ZN6cheerp8CallbackIZN4Game4loopEvE3$_2EEPN6client13EventListenerEOT_(tmp0));
}
function __ZN4Game6updateEv(Larg0){
	__ZN6Paddle6updateEPN6client17HTMLCanvasElementE(Larg0.a2,Larg0.a0);
	__ZN14ComputerPaddle6updateEP4BallPN6client17HTMLCanvasElementE(Larg0.a3,Larg0.a4,Larg0.a0);
	__ZN4Ball6updateEP6PaddleP14ComputerPaddlePN6client17HTMLCanvasElementE(Larg0.a4,Larg0.a2,Larg0.a3,Larg0.a0);
}
function __ZN4Game4drawEv(Larg0){
	var tmp0=null,tmp1=-0.,tmp2=null;
	tmp2=Larg0.a1;
	tmp0="#000";
	tmp2.fillStyle=tmp0;
	tmp2=Larg0.a1;
	tmp1=+Larg0.a0.width;
	tmp2.fillRect(0,0,tmp1,+Larg0.a0.height);
	__ZN4Game11boardDetailEv(Larg0);
	__ZN6Entity4drawEPN6client24CanvasRenderingContext2DE(Larg0.a2,Larg0.a1);
	__ZN6Entity4drawEPN6client24CanvasRenderingContext2DE(Larg0.a3,Larg0.a1);
	__ZN6Entity4drawEPN6client24CanvasRenderingContext2DE(Larg0.a4,Larg0.a1);
}
function __ZN6cheerp8CallbackIZN4Game4loopEvE3$_2EEPN6client13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0={a0:null,a1:null,a2:null};
	tmp1=[{a0:null}];
	tmp1[0].a0=Larg0.a0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN4Game4loopEvE3$_2JEEEvPT_DpT0_,tmp1[0]);
	tmp0.a0=tmp2;
	tmp0.a2=tmp1[0];
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	tmp2=tmp0.a1;
	if(tmp2!==null)tmp2(tmp0.a2);
	return tmp1;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN4Game4loopEvE3$_2JEEEvPT_DpT0_(Larg0){
	__ZN4Game4loopEv(Larg0.a0);
}
function __ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvvEE14deleter_helperEPNS2_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFvvEE14deleter_helperEPNS2_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __Z7webMainv(){
	var tmp0=null;
	tmp0={a0:null,a1:null,a2:null,a3:null,a4:null};
	__ZN4GameC2Ev(tmp0);
	__ZN4Game4loopEv(tmp0);
}
function __ZN6Paddle6updateEPN6client17HTMLCanvasElementE(Larg0,Larg1){
	var tmp0=0,tmp1=0;
	if(__ZN4Game11keysPressedE.get(38))Larg0.i5=((Larg0.i3|0)>20?1:0)<<31>>31;
	else if(__ZN4Game11keysPressedE.get(40)){
		Larg0.i5=1;
		tmp0=Larg0.i3|0;
		tmp1=Larg0.i1|0;
		if( +Larg1.height+ -20<(+(tmp1+tmp0|0)))Larg0.i5=0;
	}else Larg0.i5=0;
	Larg0.i3=(Larg0.i3|0)+(__imul(Larg0.i6|0,Larg0.i5|0)|0)|0;
}
function __ZN14ComputerPaddle6updateEP4BallPN6client17HTMLCanvasElementE(Larg0,Larg1,Larg2){
	var L$pidx1$pval=0,tmp1=0;
	L$pidx1$pval=Larg1.i3|0;
	tmp1=Larg0.i3|0;
	a:{
		if((L$pidx1$pval|0)<(tmp1|0))if((Larg1.i4|0)===1){
			Larg0.i5=((tmp1|0)>20?1:0)<<31>>31;
			break a;
		}
		tmp1=(Larg0.i1|0)+tmp1|0;
		if((L$pidx1$pval|0)>(tmp1|0))if((Larg1.i4|0)===1){
			Larg0.i5=1;
			if(!( +Larg2.height+ -20<=(+(tmp1|0))))break a;
			Larg0.i5=0;
			break a;
		}
		Larg0.i5=0;
	}
	Larg0.i3=(Larg0.i3|0)+(__imul(Larg0.i6|0,Larg0.i5|0)|0)|0;
}
var __ZN4Game11keysPressedE=null;
var __ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE=null;
var _$pstr$p6=new Uint8Array([35,48,48,48,0]);
var _$pstr$p5=new Uint8Array([35,102,102,102,0]);
var __ZN4Game11playerScoreE=0;
var __ZN4Game13computerScoreE=0;
var _$pstr$p15=new Uint8Array([97,112,112,0]);
var _$pstr$p1=new Uint8Array([50,100,0]);
var _$pstr$p2=new Uint8Array([51,48,112,120,32,79,114,98,105,116,114,111,110,0]);
var _$pstr$p3=new Uint8Array([107,101,121,100,111,119,110,0]);
var _$pstr$p4=new Uint8Array([107,101,121,117,112,0]);
function cheerpCreateClosure(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}
function cheerpCreateClosureSplit(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}
___cxx_global_var_init();
__Z7webMainv();
