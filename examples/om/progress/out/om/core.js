// Compiled by ClojureScript 0.0-3308 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj27774 = {};
return obj27774;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.display_name[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.display_name["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj27776 = {};
return obj27776;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.init_state[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.init_state["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj27778 = {};
return obj27778;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.should_update[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.should_update["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj27780 = {};
return obj27780;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.will_mount[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.will_mount["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj27782 = {};
return obj27782;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.did_mount[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.did_mount["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj27784 = {};
return obj27784;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.will_unmount[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.will_unmount["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj27786 = {};
return obj27786;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.will_update[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.will_update["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj27788 = {};
return obj27788;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.did_update[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.did_update["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj27790 = {};
return obj27790;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.will_receive_props[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj27792 = {};
return obj27792;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.render[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.render["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj27794 = {};
return obj27794;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.render_props[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.render_props["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj27796 = {};
return obj27796;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core.render_state[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core.render_state["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj27798 = {};
return obj27798;
})();


om.core.IOmSwap = (function (){var obj27800 = {};
return obj27800;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj27802 = {};
return obj27802;
})();

om.core._get_state = (function om$core$_get_state(){
var G__27804 = arguments.length;
switch (G__27804) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._get_state[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._get_state["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._get_state[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._get_state["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj27807 = {};
return obj27807;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__27809 = arguments.length;
switch (G__27809) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._get_render_state[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._get_render_state["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._get_render_state[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._get_render_state["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj27812 = {};
return obj27812;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__27814 = arguments.length;
switch (G__27814) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj27817 = {};
return obj27817;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._get_queue[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._get_queue["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj27819 = {};
return obj27819;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4327__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (om.core._value[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._value["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj27821 = {};
return obj27821;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4327__auto__ = cursor;
if(and__4327__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4327__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4975__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4339__auto__ = (om.core._path[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._path["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4327__auto__ = cursor;
if(and__4327__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4327__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4975__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4339__auto__ = (om.core._state[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._state["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj27823 = {};
return obj27823;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__27825 = arguments.length;
switch (G__27825) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((function (){var and__4327__auto__ = value;
if(and__4327__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4327__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4975__auto__ = (((value == null))?null:value);
return (function (){var or__4339__auto__ = (om.core._to_cursor[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._to_cursor["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__4327__auto__ = value;
if(and__4327__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4327__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4975__auto__ = (((value == null))?null:value);
return (function (){var or__4339__auto__ = (om.core._to_cursor[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._to_cursor["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj27828 = {};
return obj27828;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4327__auto__ = cursor;
if(and__4327__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4327__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4975__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4339__auto__ = (om.core._derive[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._derive["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj27830 = {};
return obj27830;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4327__auto__ = cursor;
if(and__4327__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4327__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4975__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4339__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj27832 = {};
return obj27832;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4327__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4327__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj27834 = {};
return obj27834;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._get_property[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._get_property["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj27836 = {};
return obj27836;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4327__auto__ = cursor;
if(and__4327__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4327__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4975__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4339__auto__ = (om.core._root_key[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._root_key["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj27838 = {};
return obj27838;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._adapt[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._adapt["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj27840 = {};
return obj27840;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4327__auto__ = this$;
if(and__4327__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4327__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4975__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4339__auto__ = (om.core._get_deps[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (om.core._get_deps["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__27842 = state;
if(G__27842){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27842.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__27842.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__27842);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__27842);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__27844 = x;
if(G__27844){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27844.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__27844.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__27844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__27844);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var G__27846 = arguments.length;
switch (G__27846) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__27847 = (x.props["__om_cursor"]);
var G__27847__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__27847,korks__$1):G__27847);
return G__27847__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__27850 = arguments.length;
switch (G__27850) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var G__27853 = arguments.length;
switch (G__27853) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4423__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4423__auto__)){
var pending_state = temp__4423__auto__;
var G__27856 = state;
(G__27856["__om_prev_state"] = (state["__om_state"]));

(G__27856["__om_state"] = pending_state);

(G__27856["__om_pending_state"] = null);

return G__27856;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__27858 = arguments.length;
switch (G__27858) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4339__auto__ = props;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return owner.props;
}
})();
var temp__4423__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4423__auto__)){
var props_state = temp__4423__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4339__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__27861 = c;
if(G__27861){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27861.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__27861.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__27861);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__27861);
}
})()){
var state_27882 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4339__auto__ = (state_27882["__om_prev_state"]);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return (state_27882["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__27862 = c;
if(G__27862){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27862.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__27862.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__27862);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__27862);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__27863 = cljs.core.seq.call(null,refs);
var chunk__27864 = null;
var count__27865 = (0);
var i__27866 = (0);
while(true){
if((i__27866 < count__27865)){
var ref = cljs.core._nth.call(null,chunk__27864,i__27866);
om.core.unobserve.call(null,this$,ref);

var G__27883 = seq__27863;
var G__27884 = chunk__27864;
var G__27885 = count__27865;
var G__27886 = (i__27866 + (1));
seq__27863 = G__27883;
chunk__27864 = G__27884;
count__27865 = G__27885;
i__27866 = G__27886;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__27863);
if(temp__4423__auto____$1){
var seq__27863__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27863__$1)){
var c__5124__auto__ = cljs.core.chunk_first.call(null,seq__27863__$1);
var G__27887 = cljs.core.chunk_rest.call(null,seq__27863__$1);
var G__27888 = c__5124__auto__;
var G__27889 = cljs.core.count.call(null,c__5124__auto__);
var G__27890 = (0);
seq__27863 = G__27887;
chunk__27864 = G__27888;
count__27865 = G__27889;
i__27866 = G__27890;
continue;
} else {
var ref = cljs.core.first.call(null,seq__27863__$1);
om.core.unobserve.call(null,this$,ref);

var G__27891 = cljs.core.next.call(null,seq__27863__$1);
var G__27892 = null;
var G__27893 = (0);
var G__27894 = (0);
seq__27863 = G__27891;
chunk__27864 = G__27892;
count__27865 = G__27893;
i__27866 = G__27894;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__27867 = c;
if(G__27867){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27867.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__27867.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__27867);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__27867);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__27868 = c;
if(G__27868){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27868.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__27868.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__27868);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__27868);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4327__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__4327__auto__)){
var and__4327__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__4327__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__4327__auto____$1;
}
} else {
return and__4327__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4327__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4327__auto__){
return cljs.core.some.call(null,((function (and__4327__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__27860_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__27860_SHARP_);
});})(and__4327__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4327__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_27869 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_27870 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_27871 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_27872 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_27873 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__27874 = c;
if(G__27874){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27874.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__27874.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__27874);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__27874);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__27875 = c;
if(G__27875){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27875.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__27875.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__27875);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__27875);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__27876 = c;
if(G__27876){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27876.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__27876.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__27876);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__27876);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_27873;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_27872;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27871;

om.core._STAR_state_STAR_ = _STAR_state_STAR_27870;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_27869;
}}),(function (next_props,next_state){
var this$ = this;
var c_27895 = om.core.children.call(null,this$);
if((function (){var G__27877 = c_27895;
if(G__27877){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27877.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__27877.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__27877);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__27877);
}
})()){
var state_27896 = this$.state;
om.core.will_update.call(null,c_27895,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4339__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4339__auto__ = id;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,(((function (){var G__27878 = c;
if(G__27878){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27878.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__27878.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__27878);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__27878);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__27879 = c;
if(G__27879){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27879.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__27879.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__27879);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__27879);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__27880 = c;
if(G__27880){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27880.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__27880.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__27880);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__27880);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_27897 = om.core.children.call(null,this$);
if((function (){var G__27881 = c_27897;
if(G__27881){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27881.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__27881.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__27881);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__27881);
}
})()){
om.core.will_mount.call(null,c_27897);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x27899 = obj;
x27899.om$core$ISetState$ = true;

x27899.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x27899){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4327__auto__ = !((app_state == null));
if(and__4327__auto__){
return render;
} else {
return and__4327__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x27899))
;

x27899.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x27899){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4327__auto__ = !((app_state == null));
if(and__4327__auto__){
return render;
} else {
return and__4327__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x27899))
;

x27899.om$core$IGetRenderState$ = true;

x27899.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x27899){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x27899))
;

x27899.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x27899){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x27899))
;

x27899.om$core$IGetState$ = true;

x27899.om$core$IGetState$_get_state$arity$1 = ((function (x27899){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4339__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return (state["__om_state"]);
}
});})(x27899))
;

x27899.om$core$IGetState$_get_state$arity$2 = ((function (x27899){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x27899))
;

return x27899;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4339__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4339__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__27900 = c;
if(G__27900){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27900.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__27900.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__27900);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__27900);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_27909 = om.core.children.call(null,this$);
if((function (){var G__27901 = c_27909;
if(G__27901){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27901.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__27901.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__27901);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__27901);
}
})()){
om.core.will_mount.call(null,c_27909);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__27902 = c;
if(G__27902){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27902.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__27902.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__27902);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__27902);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__27903 = cljs.core.seq.call(null,refs);
var chunk__27904 = null;
var count__27905 = (0);
var i__27906 = (0);
while(true){
if((i__27906 < count__27905)){
var ref = cljs.core._nth.call(null,chunk__27904,i__27906);
om.core.unobserve.call(null,this$,ref);

var G__27910 = seq__27903;
var G__27911 = chunk__27904;
var G__27912 = count__27905;
var G__27913 = (i__27906 + (1));
seq__27903 = G__27910;
chunk__27904 = G__27911;
count__27905 = G__27912;
i__27906 = G__27913;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__27903);
if(temp__4423__auto____$1){
var seq__27903__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27903__$1)){
var c__5124__auto__ = cljs.core.chunk_first.call(null,seq__27903__$1);
var G__27914 = cljs.core.chunk_rest.call(null,seq__27903__$1);
var G__27915 = c__5124__auto__;
var G__27916 = cljs.core.count.call(null,c__5124__auto__);
var G__27917 = (0);
seq__27903 = G__27914;
chunk__27904 = G__27915;
count__27905 = G__27916;
i__27906 = G__27917;
continue;
} else {
var ref = cljs.core.first.call(null,seq__27903__$1);
om.core.unobserve.call(null,this$,ref);

var G__27918 = cljs.core.next.call(null,seq__27903__$1);
var G__27919 = null;
var G__27920 = (0);
var G__27921 = (0);
seq__27903 = G__27918;
chunk__27904 = G__27919;
count__27905 = G__27920;
i__27906 = G__27921;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_27922 = this$.props;
var c_27923 = om.core.children.call(null,this$);
if((function (){var G__27907 = c_27923;
if(G__27907){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27907.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__27907.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__27907);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__27907);
}
})()){
var state_27924 = this$.state;
om.core.will_update.call(null,c_27923,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__27908 = c;
if(G__27908){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27908.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__27908.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__27908);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__27908);
}
})()){
var state_27925 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4339__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x27927 = cljs.core.clj__GT_js.call(null,methods$);
x27927.om$core$ISetState$ = true;

x27927.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x27927){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4327__auto__ = !((gstate == null));
if(and__4327__auto__){
return render;
} else {
return and__4327__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x27927))
;

x27927.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x27927){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x27927))
;

x27927.om$core$IGetRenderState$ = true;

x27927.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x27927){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x27927))
;

x27927.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x27927){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x27927))
;

x27927.om$core$IGetState$ = true;

x27927.om$core$IGetState$_get_state$arity$1 = ((function (x27927){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4339__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x27927))
;

x27927.om$core$IGetState$_get_state$arity$2 = ((function (x27927){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x27927))
;

return x27927;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__27929 = x;
if(G__27929){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27929.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__27929.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__27929);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__27929);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__27931){
var vec__27932 = p__27931;
var k = cljs.core.nth.call(null,vec__27932,(0),null);
var v = cljs.core.nth.call(null,vec__27932,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__27933 = null;
var G__27933__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__27933__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__27933 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__27933__2.call(this,self__,k);
case 3:
return G__27933__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27933.cljs$core$IFn$_invoke$arity$2 = G__27933__2;
G__27933.cljs$core$IFn$_invoke$arity$3 = G__27933__3;
return G__27933;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args27930){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27930)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__27935 = null;
var G__27935__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__27935__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__27935 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__27935__2.call(this,self__,k);
case 3:
return G__27935__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27935.cljs$core$IFn$_invoke$arity$2 = G__27935__2;
G__27935.cljs$core$IFn$_invoke$arity$3 = G__27935__3;
return G__27935;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args27934){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27934)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x27937 = cljs.core.clone.call(null,val);
x27937.cljs$core$IDeref$ = true;

x27937.cljs$core$IDeref$_deref$arity$1 = ((function (x27937){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x27937))
;

x27937.om$core$ICursor$ = true;

x27937.om$core$ICursor$_path$arity$1 = ((function (x27937){
return (function (_){
var ___$1 = this;
return path;
});})(x27937))
;

x27937.om$core$ICursor$_state$arity$1 = ((function (x27937){
return (function (_){
var ___$1 = this;
return state;
});})(x27937))
;

x27937.om$core$ITransact$ = true;

x27937.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x27937){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x27937))
;

x27937.cljs$core$IEquiv$ = true;

x27937.cljs$core$IEquiv$_equiv$arity$2 = ((function (x27937){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x27937))
;

return x27937;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__27939 = arguments.length;
switch (G__27939) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if((function (){var G__27940 = val;
if(G__27940){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27940.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__27940.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__27940);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__27940);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__27941 = val;
if(G__27941){
var bit__5013__auto__ = (G__27941.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__5013__auto__) || (G__27941.cljs$core$ICloneable$)){
return true;
} else {
if((!G__27941.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__27941);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__27941);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__27944 = atom;
if(G__27944){
var bit__5013__auto__ = (G__27944.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5013__auto__) || (G__27944.cljs$core$IDeref$)){
return true;
} else {
if((!G__27944.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27944);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27944);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x27946 = cljs.core.clone.call(null,x);
x27946.cljs$core$ICloneable$ = true;

x27946.cljs$core$ICloneable$_clone$arity$1 = ((function (x27946){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x27946))
;

x27946.om$core$IAdapt$ = true;

x27946.om$core$IAdapt$_adapt$arity$2 = ((function (x27946){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x27946))
;

x27946.om$core$ICursorDerive$ = true;

x27946.om$core$ICursorDerive$_derive$arity$4 = ((function (x27946){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x27946))
;

x27946.om$core$ITransact$ = true;

x27946.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x27946){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x27946))
;

return x27946;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__27953 = cursor;
if(G__27953){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__27953.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__27953.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__27953);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__27953);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x27954 = cljs.core.clone.call(null,cursor);
x27954.om$core$ICursorDerive$ = true;

x27954.om$core$ICursorDerive$_derive$arity$4 = ((function (x27954,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x27954,path,storage))
;

x27954.om$core$IOmRef$ = true;

x27954.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x27954,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x27954,path,storage))
;

x27954.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x27954,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x27954,path,storage))
;

x27954.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x27954,path,storage){
return (function (_){
var ___$1 = this;
var seq__27955 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__27956 = null;
var count__27957 = (0);
var i__27958 = (0);
while(true){
if((i__27958 < count__27957)){
var c = cljs.core._nth.call(null,chunk__27956,i__27958);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__27959 = seq__27955;
var G__27960 = chunk__27956;
var G__27961 = count__27957;
var G__27962 = (i__27958 + (1));
seq__27955 = G__27959;
chunk__27956 = G__27960;
count__27957 = G__27961;
i__27958 = G__27962;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27955);
if(temp__4423__auto__){
var seq__27955__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27955__$1)){
var c__5124__auto__ = cljs.core.chunk_first.call(null,seq__27955__$1);
var G__27963 = cljs.core.chunk_rest.call(null,seq__27955__$1);
var G__27964 = c__5124__auto__;
var G__27965 = cljs.core.count.call(null,c__5124__auto__);
var G__27966 = (0);
seq__27955 = G__27963;
chunk__27956 = G__27964;
count__27957 = G__27965;
i__27958 = G__27966;
continue;
} else {
var c = cljs.core.first.call(null,seq__27955__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__27967 = cljs.core.next.call(null,seq__27955__$1);
var G__27968 = null;
var G__27969 = (0);
var G__27970 = (0);
seq__27955 = G__27967;
chunk__27956 = G__27968;
count__27957 = G__27969;
i__27958 = G__27970;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27954,path,storage))
;

x27954.om$core$IOmRef$_get_deps$arity$1 = ((function (x27954,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x27954,path,storage))
;

x27954.om$core$ITransact$ = true;

x27954.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x27954,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x27954,path,storage))
;

return x27954;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4339__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4339__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__27972 = arguments.length;
switch (G__27972) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__27973_27978 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__27974_27979 = null;
var count__27975_27980 = (0);
var i__27976_27981 = (0);
while(true){
if((i__27976_27981 < count__27975_27980)){
var f_27982 = cljs.core._nth.call(null,chunk__27974_27979,i__27976_27981);
f_27982.call(null);

var G__27983 = seq__27973_27978;
var G__27984 = chunk__27974_27979;
var G__27985 = count__27975_27980;
var G__27986 = (i__27976_27981 + (1));
seq__27973_27978 = G__27983;
chunk__27974_27979 = G__27984;
count__27975_27980 = G__27985;
i__27976_27981 = G__27986;
continue;
} else {
var temp__4423__auto___27987 = cljs.core.seq.call(null,seq__27973_27978);
if(temp__4423__auto___27987){
var seq__27973_27988__$1 = temp__4423__auto___27987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27973_27988__$1)){
var c__5124__auto___27989 = cljs.core.chunk_first.call(null,seq__27973_27988__$1);
var G__27990 = cljs.core.chunk_rest.call(null,seq__27973_27988__$1);
var G__27991 = c__5124__auto___27989;
var G__27992 = cljs.core.count.call(null,c__5124__auto___27989);
var G__27993 = (0);
seq__27973_27978 = G__27990;
chunk__27974_27979 = G__27991;
count__27975_27980 = G__27992;
i__27976_27981 = G__27993;
continue;
} else {
var f_27994 = cljs.core.first.call(null,seq__27973_27988__$1);
f_27994.call(null);

var G__27995 = cljs.core.next.call(null,seq__27973_27988__$1);
var G__27996 = null;
var G__27997 = (0);
var G__27998 = (0);
seq__27973_27978 = G__27995;
chunk__27974_27979 = G__27996;
count__27975_27980 = G__27997;
i__27976_27981 = G__27998;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4339__auto__ = (function (){var G__28005 = x;
if(G__28005){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__28005.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__28005.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__28005);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__28005);
}
})();
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (function (){var G__28007 = x;
if(G__28007){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto____$1 = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto____$1)){
return or__4339__auto____$1;
} else {
return G__28007.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__28007.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__28007);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__28007);
}
})();
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
var G__28008 = x;
if(G__28008){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto____$2 = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto____$2)){
return or__4339__auto____$2;
} else {
return G__28008.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__28008.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__28008);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__28008);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var G__28010 = arguments.length;
switch (G__28010) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__4339__auto__ = descriptor;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4339__auto____$1)){
return or__4339__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var G__28013 = arguments.length;
switch (G__28013) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var G__28016 = arguments.length;
switch (G__28016) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__28017 = m;
var map__28017__$1 = ((cljs.core.seq_QMARK_.call(null,map__28017))?cljs.core.apply.call(null,cljs.core.hash_map,map__28017):map__28017);
var key = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4421__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4421__auto__)){
var i = temp__4421__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4339__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__28017,map__28017__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__28017,map__28017__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__28017,map__28017__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__28017,map__28017__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4339__auto__ = rkey;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var G__28020 = arguments.length;
switch (G__28020) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var G__28023 = arguments.length;
switch (G__28023) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__28033 = state;
if(G__28033){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__28033.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__28033.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__28033);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__28033);
}
})()){
} else {
var properties_28041 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_28042 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_28043 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x28034_28044 = state;
x28034_28044.om$core$IRootProperties$ = true;

x28034_28044.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_28041,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_28041,cljs.core.dissoc,id,k);
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_28041,cljs.core.dissoc,id);
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$IRootProperties$_get_property$arity$3 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_28041),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$INotify$ = true;

x28034_28044.om$core$INotify$_listen_BANG_$arity$3 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_28042,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_28042,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$INotify$_notify_BANG_$arity$3 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__28035_28045 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_28042));
var chunk__28036_28046 = null;
var count__28037_28047 = (0);
var i__28038_28048 = (0);
while(true){
if((i__28038_28048 < count__28037_28047)){
var vec__28039_28049 = cljs.core._nth.call(null,chunk__28036_28046,i__28038_28048);
var __28050 = cljs.core.nth.call(null,vec__28039_28049,(0),null);
var f_28051 = cljs.core.nth.call(null,vec__28039_28049,(1),null);
f_28051.call(null,tx_data,root_cursor);

var G__28052 = seq__28035_28045;
var G__28053 = chunk__28036_28046;
var G__28054 = count__28037_28047;
var G__28055 = (i__28038_28048 + (1));
seq__28035_28045 = G__28052;
chunk__28036_28046 = G__28053;
count__28037_28047 = G__28054;
i__28038_28048 = G__28055;
continue;
} else {
var temp__4423__auto___28056 = cljs.core.seq.call(null,seq__28035_28045);
if(temp__4423__auto___28056){
var seq__28035_28057__$1 = temp__4423__auto___28056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28035_28057__$1)){
var c__5124__auto___28058 = cljs.core.chunk_first.call(null,seq__28035_28057__$1);
var G__28059 = cljs.core.chunk_rest.call(null,seq__28035_28057__$1);
var G__28060 = c__5124__auto___28058;
var G__28061 = cljs.core.count.call(null,c__5124__auto___28058);
var G__28062 = (0);
seq__28035_28045 = G__28059;
chunk__28036_28046 = G__28060;
count__28037_28047 = G__28061;
i__28038_28048 = G__28062;
continue;
} else {
var vec__28040_28063 = cljs.core.first.call(null,seq__28035_28057__$1);
var __28064 = cljs.core.nth.call(null,vec__28040_28063,(0),null);
var f_28065 = cljs.core.nth.call(null,vec__28040_28063,(1),null);
f_28065.call(null,tx_data,root_cursor);

var G__28066 = cljs.core.next.call(null,seq__28035_28057__$1);
var G__28067 = null;
var G__28068 = (0);
var G__28069 = (0);
seq__28035_28045 = G__28066;
chunk__28036_28046 = G__28067;
count__28037_28047 = G__28068;
i__28038_28048 = G__28069;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$IRenderQueue$ = true;

x28034_28044.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_28043);
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_28043),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_28043,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

x28034_28044.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x28034_28044,properties_28041,listeners_28042,render_queue_28043){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_28043,cljs.core.empty);
});})(x28034_28044,properties_28041,listeners_28042,render_queue_28043))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x28071 = cljs.core.clone.call(null,cursor);
x28071.cljs$core$ICloneable$ = true;

x28071.cljs$core$ICloneable$_clone$arity$1 = ((function (x28071){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x28071))
;

x28071.om$core$IAdapt$ = true;

x28071.om$core$IAdapt$_adapt$arity$2 = ((function (x28071){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x28071))
;

x28071.om$core$IRootKey$ = true;

x28071.om$core$IRootKey$_root_key$arity$1 = ((function (x28071){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x28071))
;

return x28071;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__28072){
var map__28135 = p__28072;
var map__28135__$1 = ((cljs.core.seq_QMARK_.call(null,map__28135))?cljs.core.apply.call(null,cljs.core.hash_map,map__28135):map__28135);
var options = map__28135__$1;
var target = cljs.core.get.call(null,map__28135__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__28135__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__28135__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__28135__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__28135__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__28135__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__28135__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__28197 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__28197,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__28197,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__28136 = value;
if(G__28136){
var bit__5013__auto__ = (G__28136.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__5013__auto__) || (G__28136.cljs$core$IAtom$)){
return true;
} else {
if((!G__28136.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__28136);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__28136);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4339__auto__ = adapt;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_28198 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_28167 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_28168 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_28169 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_28170 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_28170;

om.core._STAR_state_STAR_ = _STAR_state_STAR_28169;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_28168;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_28167;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_28198);
} else {
}
}

var queue_28199 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_28199)){
} else {
var seq__28171_28200 = cljs.core.seq.call(null,queue_28199);
var chunk__28172_28201 = null;
var count__28173_28202 = (0);
var i__28174_28203 = (0);
while(true){
if((i__28174_28203 < count__28173_28202)){
var c_28204 = cljs.core._nth.call(null,chunk__28172_28201,i__28174_28203);
if(cljs.core.truth_(c_28204.isMounted())){
var temp__4423__auto___28205 = (c_28204.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___28205)){
var next_props_28206 = temp__4423__auto___28205;
(c_28204.props["__om_cursor"] = next_props_28206);

(c_28204.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4339__auto__ = !((function (){var G__28176 = om.core.children.call(null,c_28204);
if(G__28176){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__28176.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__28176.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28176);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28176);
}
})());
if(or__4339__auto__){
return or__4339__auto__;
} else {
return c_28204.shouldComponentUpdate(c_28204.props,c_28204.state);
}
})())){
c_28204.forceUpdate();
} else {
}
} else {
}

var G__28207 = seq__28171_28200;
var G__28208 = chunk__28172_28201;
var G__28209 = count__28173_28202;
var G__28210 = (i__28174_28203 + (1));
seq__28171_28200 = G__28207;
chunk__28172_28201 = G__28208;
count__28173_28202 = G__28209;
i__28174_28203 = G__28210;
continue;
} else {
var temp__4423__auto___28211 = cljs.core.seq.call(null,seq__28171_28200);
if(temp__4423__auto___28211){
var seq__28171_28212__$1 = temp__4423__auto___28211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28171_28212__$1)){
var c__5124__auto___28213 = cljs.core.chunk_first.call(null,seq__28171_28212__$1);
var G__28214 = cljs.core.chunk_rest.call(null,seq__28171_28212__$1);
var G__28215 = c__5124__auto___28213;
var G__28216 = cljs.core.count.call(null,c__5124__auto___28213);
var G__28217 = (0);
seq__28171_28200 = G__28214;
chunk__28172_28201 = G__28215;
count__28173_28202 = G__28216;
i__28174_28203 = G__28217;
continue;
} else {
var c_28218 = cljs.core.first.call(null,seq__28171_28212__$1);
if(cljs.core.truth_(c_28218.isMounted())){
var temp__4423__auto___28219__$1 = (c_28218.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___28219__$1)){
var next_props_28220 = temp__4423__auto___28219__$1;
(c_28218.props["__om_cursor"] = next_props_28220);

(c_28218.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4339__auto__ = !((function (){var G__28178 = om.core.children.call(null,c_28218);
if(G__28178){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__28178.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__28178.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28178);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28178);
}
})());
if(or__4339__auto__){
return or__4339__auto__;
} else {
return c_28218.shouldComponentUpdate(c_28218.props,c_28218.state);
}
})())){
c_28218.forceUpdate();
} else {
}
} else {
}

var G__28221 = cljs.core.next.call(null,seq__28171_28212__$1);
var G__28222 = null;
var G__28223 = (0);
var G__28224 = (0);
seq__28171_28200 = G__28221;
chunk__28172_28201 = G__28222;
count__28173_28202 = G__28223;
i__28174_28203 = G__28224;
continue;
}
} else {
}
}
break;
}
}

var _refs_28225 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_28225)){
} else {
var seq__28179_28226 = cljs.core.seq.call(null,_refs_28225);
var chunk__28180_28227 = null;
var count__28181_28228 = (0);
var i__28182_28229 = (0);
while(true){
if((i__28182_28229 < count__28181_28228)){
var vec__28183_28230 = cljs.core._nth.call(null,chunk__28180_28227,i__28182_28229);
var path_28231__$1 = cljs.core.nth.call(null,vec__28183_28230,(0),null);
var cs_28232 = cljs.core.nth.call(null,vec__28183_28230,(1),null);
var cs_28233__$1 = cljs.core.deref.call(null,cs_28232);
var seq__28184_28234 = cljs.core.seq.call(null,cs_28233__$1);
var chunk__28185_28235 = null;
var count__28186_28236 = (0);
var i__28187_28237 = (0);
while(true){
if((i__28187_28237 < count__28186_28236)){
var vec__28188_28238 = cljs.core._nth.call(null,chunk__28185_28235,i__28187_28237);
var id_28239 = cljs.core.nth.call(null,vec__28188_28238,(0),null);
var c_28240 = cljs.core.nth.call(null,vec__28188_28238,(1),null);
if(cljs.core.truth_(c_28240.shouldComponentUpdate(c_28240.props,c_28240.state))){
c_28240.forceUpdate();
} else {
}

var G__28241 = seq__28184_28234;
var G__28242 = chunk__28185_28235;
var G__28243 = count__28186_28236;
var G__28244 = (i__28187_28237 + (1));
seq__28184_28234 = G__28241;
chunk__28185_28235 = G__28242;
count__28186_28236 = G__28243;
i__28187_28237 = G__28244;
continue;
} else {
var temp__4423__auto___28245 = cljs.core.seq.call(null,seq__28184_28234);
if(temp__4423__auto___28245){
var seq__28184_28246__$1 = temp__4423__auto___28245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28184_28246__$1)){
var c__5124__auto___28247 = cljs.core.chunk_first.call(null,seq__28184_28246__$1);
var G__28248 = cljs.core.chunk_rest.call(null,seq__28184_28246__$1);
var G__28249 = c__5124__auto___28247;
var G__28250 = cljs.core.count.call(null,c__5124__auto___28247);
var G__28251 = (0);
seq__28184_28234 = G__28248;
chunk__28185_28235 = G__28249;
count__28186_28236 = G__28250;
i__28187_28237 = G__28251;
continue;
} else {
var vec__28189_28252 = cljs.core.first.call(null,seq__28184_28246__$1);
var id_28253 = cljs.core.nth.call(null,vec__28189_28252,(0),null);
var c_28254 = cljs.core.nth.call(null,vec__28189_28252,(1),null);
if(cljs.core.truth_(c_28254.shouldComponentUpdate(c_28254.props,c_28254.state))){
c_28254.forceUpdate();
} else {
}

var G__28255 = cljs.core.next.call(null,seq__28184_28246__$1);
var G__28256 = null;
var G__28257 = (0);
var G__28258 = (0);
seq__28184_28234 = G__28255;
chunk__28185_28235 = G__28256;
count__28186_28236 = G__28257;
i__28187_28237 = G__28258;
continue;
}
} else {
}
}
break;
}

var G__28259 = seq__28179_28226;
var G__28260 = chunk__28180_28227;
var G__28261 = count__28181_28228;
var G__28262 = (i__28182_28229 + (1));
seq__28179_28226 = G__28259;
chunk__28180_28227 = G__28260;
count__28181_28228 = G__28261;
i__28182_28229 = G__28262;
continue;
} else {
var temp__4423__auto___28263 = cljs.core.seq.call(null,seq__28179_28226);
if(temp__4423__auto___28263){
var seq__28179_28264__$1 = temp__4423__auto___28263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28179_28264__$1)){
var c__5124__auto___28265 = cljs.core.chunk_first.call(null,seq__28179_28264__$1);
var G__28266 = cljs.core.chunk_rest.call(null,seq__28179_28264__$1);
var G__28267 = c__5124__auto___28265;
var G__28268 = cljs.core.count.call(null,c__5124__auto___28265);
var G__28269 = (0);
seq__28179_28226 = G__28266;
chunk__28180_28227 = G__28267;
count__28181_28228 = G__28268;
i__28182_28229 = G__28269;
continue;
} else {
var vec__28190_28270 = cljs.core.first.call(null,seq__28179_28264__$1);
var path_28271__$1 = cljs.core.nth.call(null,vec__28190_28270,(0),null);
var cs_28272 = cljs.core.nth.call(null,vec__28190_28270,(1),null);
var cs_28273__$1 = cljs.core.deref.call(null,cs_28272);
var seq__28191_28274 = cljs.core.seq.call(null,cs_28273__$1);
var chunk__28192_28275 = null;
var count__28193_28276 = (0);
var i__28194_28277 = (0);
while(true){
if((i__28194_28277 < count__28193_28276)){
var vec__28195_28278 = cljs.core._nth.call(null,chunk__28192_28275,i__28194_28277);
var id_28279 = cljs.core.nth.call(null,vec__28195_28278,(0),null);
var c_28280 = cljs.core.nth.call(null,vec__28195_28278,(1),null);
if(cljs.core.truth_(c_28280.shouldComponentUpdate(c_28280.props,c_28280.state))){
c_28280.forceUpdate();
} else {
}

var G__28281 = seq__28191_28274;
var G__28282 = chunk__28192_28275;
var G__28283 = count__28193_28276;
var G__28284 = (i__28194_28277 + (1));
seq__28191_28274 = G__28281;
chunk__28192_28275 = G__28282;
count__28193_28276 = G__28283;
i__28194_28277 = G__28284;
continue;
} else {
var temp__4423__auto___28285__$1 = cljs.core.seq.call(null,seq__28191_28274);
if(temp__4423__auto___28285__$1){
var seq__28191_28286__$1 = temp__4423__auto___28285__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28191_28286__$1)){
var c__5124__auto___28287 = cljs.core.chunk_first.call(null,seq__28191_28286__$1);
var G__28288 = cljs.core.chunk_rest.call(null,seq__28191_28286__$1);
var G__28289 = c__5124__auto___28287;
var G__28290 = cljs.core.count.call(null,c__5124__auto___28287);
var G__28291 = (0);
seq__28191_28274 = G__28288;
chunk__28192_28275 = G__28289;
count__28193_28276 = G__28290;
i__28194_28277 = G__28291;
continue;
} else {
var vec__28196_28292 = cljs.core.first.call(null,seq__28191_28286__$1);
var id_28293 = cljs.core.nth.call(null,vec__28196_28292,(0),null);
var c_28294 = cljs.core.nth.call(null,vec__28196_28292,(1),null);
if(cljs.core.truth_(c_28294.shouldComponentUpdate(c_28294.props,c_28294.state))){
c_28294.forceUpdate();
} else {
}

var G__28295 = cljs.core.next.call(null,seq__28191_28286__$1);
var G__28296 = null;
var G__28297 = (0);
var G__28298 = (0);
seq__28191_28274 = G__28295;
chunk__28192_28275 = G__28296;
count__28193_28276 = G__28297;
i__28194_28277 = G__28298;
continue;
}
} else {
}
}
break;
}

var G__28299 = cljs.core.next.call(null,seq__28179_28264__$1);
var G__28300 = null;
var G__28301 = (0);
var G__28302 = (0);
seq__28179_28226 = G__28299;
chunk__28180_28227 = G__28300;
count__28181_28228 = G__28301;
i__28182_28229 = G__28302;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28135,map__28135__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__28304 = x;
if(G__28304){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__28304.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__28304.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__28304);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__28304);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__28306 = arguments.length;
switch (G__28306) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var G__28309 = arguments.length;
switch (G__28309) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__28312 = cursor;
if(G__28312){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__28312.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__28312.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__28312);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__28312);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var G__28314 = arguments.length;
switch (G__28314) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4423__auto__ = owner.refs;
if(cljs.core.truth_(temp__4423__auto__)){
var refs = temp__4423__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var G__28317 = arguments.length;
switch (G__28317) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var G__28320 = arguments.length;
switch (G__28320) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var G__28323 = arguments.length;
switch (G__28323) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var G__28326 = arguments.length;
switch (G__28326) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var G__28329 = arguments.length;
switch (G__28329) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map