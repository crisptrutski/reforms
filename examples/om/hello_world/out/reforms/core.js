// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reforms.core');
goog.require('cljs.core');
goog.require('reforms.binding.core');
goog.require('reforms.core.impl');
goog.require('reforms.core.react_keys');
goog.require('reforms.core.options');
/**
 * Get configuration option(s) by key. See [[reforms.core.options]].
 * 
 * Arguments:
 * 
 * - ks - key seq
 */
reforms.core.get_options = reforms.core.options.get_options;
/**
 * Sets configuration options. See [[reforms.core.options]].
 * 
 * Arguments:
 * 
 * - options - a map specifying options to merge into current option map.
 * 
 * **Note:** It intelligently merges options; see the example below.
 * 
 * Example:
 * 
 * ;; Example initial configuration:
 * {:form {:horizontal true
 * :attrs {:style {:background-color "yellow"}}}}
 * 
 * ;; Setting options
 * (set-options! {:form {:attrs {:style {:border "1px solid black"}}}{)
 * 
 * ;; Resulting configuration:
 * {:form {:horizontal true
 * :attrs {:style {:background-color "yellow"}}}
 */
reforms.core.set_options_BANG_ = reforms.core.options.set_options_BANG_;
/**
 * A panel. See http://getbootstrap.com/components/#panels
 * 
 * Arguments:
 * 
 * [attrs] title [:close <lambda>] element1 ... element2
 * 
 * - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - title - panel title; a string or Hiccup/Sablono style template
 * - :close - (optional) lambda to call when panel is closed; when the option is set, the panel shows a close icon (FontAwesome by default)
 * - contents - (optional) the contained elements
 * 
 * Examples:
 * 
 * (panel "A simple panel"
 * [:div "Contents go here"])
 * (panel {:class "my-special-panel"} "My special panel" :close #(js/alert "closed")
 * [:div "Contents go here"])
 */
reforms.core.panel = (function reforms$core$panel(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16154 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__16154,(0),null);
var vec__16155 = cljs.core.nth.call(null,vec__16154,(1),null);
var title = cljs.core.nth.call(null,vec__16155,(0),null);
var rest_args = cljs.core.nthnext.call(null,vec__16155,(1));
var vec__16156 = reforms.core.impl.parse_options.call(null,rest_args);
var map__16157 = cljs.core.nth.call(null,vec__16156,(0),null);
var map__16157__$1 = ((cljs.core.seq_QMARK_.call(null,map__16157))?cljs.core.apply.call(null,cljs.core.hash_map,map__16157):map__16157);
var close = cljs.core.get.call(null,map__16157__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var contents = cljs.core.nthnext.call(null,vec__16156,(1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading",new cljs.core.Keyword(null,"key","key",-1516042587),"ph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title",new cljs.core.Keyword(null,"key","key",-1516042587),"pt"], null),title], null),(cljs.core.truth_(close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"actions pull-right",new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"icon-close","icon-close",-1103973553)], null)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),close], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body",new cljs.core.Keyword(null,"key","key",-1516042587),"pb"], null),contents], null)], null);
});

reforms.core.panel.cljs$lang$maxFixedArity = (0);

reforms.core.panel.cljs$lang$applyTo = (function (seq16153){
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16153));
});
/**
 * A form. See http://getbootstrap.com/css/#forms
 * 
 * Arguments:
 * 
 * [attrs] element1 ... element2
 * 
 * - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - contents - (optional) the contained elements
 * 
 * Examples:
 * 
 * (form [:div "Contents go here"])
 * (form {:style {:background-color "red"}} [:div "Contents go here"])
 */
reforms.core.form = (function reforms$core$form(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16160 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__16158_SHARP_){
return p1__16158_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?"form-horizontal":null)], null),args);
var attrs = cljs.core.nth.call(null,vec__16160,(0),null);
var elems = cljs.core.nthnext.call(null,vec__16160,(1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),attrs,elems,(cljs.core.truth_(new cljs.core.Keyword(null,"on-submit","on-submit",1227871159).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"key","key",-1516042587),"fsb"], null)], null):null)], null);
});

reforms.core.form.cljs$lang$maxFixedArity = (0);

reforms.core.form.cljs$lang$applyTo = (function (seq16159){
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16159));
});
/**
 * A title for a logical group of controls.
 * 
 * Arguments:
 * 
 * [attrs] title [:tag <tag-name>]
 * 
 * - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - title - the title; a string or Hiccup/Sablono style template
 * - tag   - (optional) name of the tag to use, e.g. :h4
 */
reforms.core.group_title = (function reforms$core$group_title(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16162 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title"], null),args);
var attrs = cljs.core.nth.call(null,vec__16162,(0),null);
var vec__16163 = cljs.core.nth.call(null,vec__16162,(1),null);
var title = cljs.core.nth.call(null,vec__16163,(0),null);
var map__16164 = cljs.core.nthnext.call(null,vec__16163,(1));
var map__16164__$1 = ((cljs.core.seq_QMARK_.call(null,map__16164))?cljs.core.apply.call(null,cljs.core.hash_map,map__16164):map__16164);
var tag = cljs.core.get.call(null,map__16164__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4339__auto__ = tag;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
}
})(),attrs,title], null);
});

reforms.core.group_title.cljs$lang$maxFixedArity = (0);

reforms.core.group_title.cljs$lang$applyTo = (function (seq16161){
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16161));
});
/**
 * An HTML5-compatible input. Used internally to implement most input types.
 * 
 * Arguments:
 * 
 * type [attrs] label placeholder cursor korks
 * [:valid? <bool> validation-error-fn <lambda> in-progress <bool> warn-fn <bool> help <string> inline <bool> large <bool>]}
 * 
 * - type                  - input type
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - :inline               - (optional) if true renders the control inline
 * - :valid?               - (optional) if false shows a validation error; internal
 * - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal
 */
reforms.core.html5_input = (function reforms$core$html5_input(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var vec__16167 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html5-input","html5-input",-1019311487),type], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__16167,(0),null);
var vec__16168 = cljs.core.nth.call(null,vec__16167,(1),null);
var label = cljs.core.nth.call(null,vec__16168,(0),null);
var placeholder = cljs.core.nth.call(null,vec__16168,(1),null);
var cursor = cljs.core.nth.call(null,vec__16168,(2),null);
var korks = cljs.core.nth.call(null,vec__16168,(3),null);
var opts = cljs.core.nthnext.call(null,vec__16168,(4));
return cljs.core.apply.call(null,reforms.core.impl.html5_input_STAR_,attrs,label,placeholder,cursor,korks,cljs.core.name.call(null,type),opts);
});

reforms.core.html5_input.cljs$lang$maxFixedArity = (1);

reforms.core.html5_input.cljs$lang$applyTo = (function (seq16165){
var G__16166 = cljs.core.first.call(null,seq16165);
var seq16165__$1 = cljs.core.next.call(null,seq16165);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic(G__16166,seq16165__$1);
});
/**
 * Text input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.text = (function reforms$core$text(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"text","text",-1790561697),args);
});

reforms.core.text.cljs$lang$maxFixedArity = (0);

reforms.core.text.cljs$lang$applyTo = (function (seq16169){
return reforms.core.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16169));
});
/**
 * Password input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.password = (function reforms$core$password(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.password.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"password","password",417022471),args);
});

reforms.core.password.cljs$lang$maxFixedArity = (0);

reforms.core.password.cljs$lang$applyTo = (function (seq16170){
return reforms.core.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16170));
});
/**
 * Auto-aligning form buttons.
 * 
 * Arguments:
 * 
 * button-1 ... button-n
 */
reforms.core.form_buttons = (function reforms$core$form_buttons(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic = (function (buttons){
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,"form-buttons",false,buttons);
});

reforms.core.form_buttons.cljs$lang$maxFixedArity = (0);

reforms.core.form_buttons.cljs$lang$applyTo = (function (seq16171){
return reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16171));
});
/**
 * Button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * [attrs] label on-click [:in-progress <bool> :disabled <bool]
 * 
 * - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label        - button label; a string or Hiccup/Sablono style template
 * - on-click     - lambda to handle clicks
 * - :in-progress - true to show an indicator that a background action is in progress and disable the button
 * - :disabled    - true to disable the button
 */
reforms.core.button = (function reforms$core$button(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16173 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn"], null),args);
var attrs = cljs.core.nth.call(null,vec__16173,(0),null);
var vec__16174 = cljs.core.nth.call(null,vec__16173,(1),null);
var label = cljs.core.nth.call(null,vec__16174,(0),null);
var on_click = cljs.core.nth.call(null,vec__16174,(1),null);
var map__16175 = cljs.core.nthnext.call(null,vec__16174,(2));
var map__16175__$1 = ((cljs.core.seq_QMARK_.call(null,map__16175))?cljs.core.apply.call(null,cljs.core.hash_map,map__16175):map__16175);
var in_progress = cljs.core.get.call(null,map__16175__$1,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var disabled = cljs.core.get.call(null,map__16175__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__16173,attrs,vec__16174,label,on_click,map__16175,map__16175__$1,in_progress,disabled){
return (function (){
if(cljs.core.truth_(disabled)){
return null;
} else {
return on_click.call(null);
}
});})(vec__16173,attrs,vec__16174,label,on_click,map__16175,map__16175__$1,in_progress,disabled))
,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,label,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))], null),attrs),label,(cljs.core.truth_(in_progress)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.core.impl.spinner.call(null))," "):null)], null);
});

reforms.core.button.cljs$lang$maxFixedArity = (0);

reforms.core.button.cljs$lang$applyTo = (function (seq16172){
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16172));
});
/**
 * Primary button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * See `button`.
 */
reforms.core.button_primary = (function reforms$core$button_primary(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16177 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-primary","button-primary",1872052094)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary"], null),args);
var attrs = cljs.core.nth.call(null,vec__16177,(0),null);
var vec__16178 = cljs.core.nth.call(null,vec__16177,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__16178,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_primary.cljs$lang$maxFixedArity = (0);

reforms.core.button_primary.cljs$lang$applyTo = (function (seq16176){
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16176));
});
/**
 * Default button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * See `button`.
 */
reforms.core.button_default = (function reforms$core$button_default(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16180 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-default","button-default",584285184)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__16180,(0),null);
var vec__16181 = cljs.core.nth.call(null,vec__16180,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__16181,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_default.cljs$lang$maxFixedArity = (0);

reforms.core.button_default.cljs$lang$applyTo = (function (seq16179){
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16179));
});
/**
 * Button group.
 * 
 * Arguments:
 * 
 * [attrs] button-1 ... button-n
 * 
 * - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 */
reforms.core.button_group = (function reforms$core$button_group(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16183 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-group","button-group",-1532145548)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button-group"], null),args);
var attrs = cljs.core.nth.call(null,vec__16183,(0),null);
var vec__16184 = cljs.core.nth.call(null,vec__16183,(1),null);
var buttons = cljs.core.nthnext.call(null,vec__16184,(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs,buttons], null);
});

reforms.core.button_group.cljs$lang$maxFixedArity = (0);

reforms.core.button_group.cljs$lang$applyTo = (function (seq16182){
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16182));
});
/**
 * Checkbox. See http://getbootstrap.com/css/#checkboxes-and-radios
 * 
 * Arguments:
 * 
 * [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - :inline               - (optional) if true renders the control inline
 * - :valid?               - (optional) if false shows a validation error; internal
 * - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal
 */
reforms.core.checkbox = (function reforms$core$checkbox(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16187 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__16187,(0),null);
var vec__16188 = cljs.core.nth.call(null,vec__16187,(1),null);
var label = cljs.core.nth.call(null,vec__16188,(0),null);
var cursor = cljs.core.nth.call(null,vec__16188,(1),null);
var korks = cljs.core.nth.call(null,vec__16188,(2),null);
var map__16189 = cljs.core.nthnext.call(null,vec__16188,(3));
var map__16189__$1 = ((cljs.core.seq_QMARK_.call(null,map__16189))?cljs.core.apply.call(null,cljs.core.hash_map,map__16189):map__16189);
var valid_QMARK_ = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4339__auto__ = (valid_QMARK_ == null);
if(or__4339__auto__){
return or__4339__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.core.impl.unlabeled_control.call(null,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks),inline,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("checkbox"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" checkbox-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cursor,korks)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cursor,korks)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__16187,attrs,vec__16188,label,cursor,korks,map__16189,map__16189__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__16185_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__16185_SHARP_.target.checked);
});})(vec__16187,attrs,vec__16188,label,cursor,korks,map__16189,map__16189__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
,new cljs.core.Keyword(null,"checked","checked",-50955819),reforms.binding.core.get_in.call(null,cursor,korks),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),cursor,korks)], null),attrs,cljs.core.PersistentArrayMap.EMPTY)], null),label], null)], null),(function (){var temp__4423__auto__ = (function (){var and__4327__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4327__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4327__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var validation_error = temp__4423__auto__;
return reforms.core.impl.error_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"error-label","error-label",1393895243))], null),validation_error);
} else {
return null;
}
})()));
});

reforms.core.checkbox.cljs$lang$maxFixedArity = (0);

reforms.core.checkbox.cljs$lang$applyTo = (function (seq16186){
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16186));
});
/**
 * Radio button. See http://getbootstrap.com/css/#checkboxes-and-radios
 * 
 * Arguments:
 * 
 * [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - :inline               - (optional) if true renders the control inline
 * - :valid?               - (optional) if false shows a validation error; internal
 * - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal
 */
reforms.core.radio = (function reforms$core$radio(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16192 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__16192,(0),null);
var vec__16193 = cljs.core.nth.call(null,vec__16192,(1),null);
var label = cljs.core.nth.call(null,vec__16193,(0),null);
var cursor = cljs.core.nth.call(null,vec__16193,(1),null);
var korks = cljs.core.nth.call(null,vec__16193,(2),null);
var value = cljs.core.nth.call(null,vec__16193,(3),null);
var map__16194 = cljs.core.nthnext.call(null,vec__16193,(4));
var map__16194__$1 = ((cljs.core.seq_QMARK_.call(null,map__16194))?cljs.core.apply.call(null,cljs.core.hash_map,map__16194):map__16194);
var valid_QMARK_ = cljs.core.get.call(null,map__16194__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__16194__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__16194__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4339__auto__ = (valid_QMARK_ == null);
if(or__4339__auto__){
return or__4339__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.core.impl.unlabeled_control.call(null,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks),inline,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("radio"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" radio-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"radio","radio",1323726374),cursor,korks)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__16192,attrs,vec__16193,label,cursor,korks,value,map__16194,map__16194__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__16190_SHARP_){
if(cljs.core.truth_(p1__16190_SHARP_.target.checked)){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,value);
} else {
return null;
}
});})(vec__16192,attrs,vec__16193,label,cursor,korks,value,map__16194,map__16194__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,reforms.binding.core.get_in.call(null,cursor,korks)),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"name","name",1843675177),dom_id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),cursor,korks)], null),attrs,cljs.core.PersistentArrayMap.EMPTY)], null),label], null)], null),(function (){var temp__4423__auto__ = (function (){var and__4327__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4327__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4327__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var validation_error = temp__4423__auto__;
return reforms.core.impl.error_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"el","el",-1618201118))], null),validation_error);
} else {
return null;
}
})()));
});

reforms.core.radio.cljs$lang$maxFixedArity = (0);

reforms.core.radio.cljs$lang$applyTo = (function (seq16191){
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16191));
});
/**
 * Textarea element. See http://getbootstrap.com/css/#textarea
 * 
 * Arguments:
 * 
 * [attrs] label placeholder cursor korks [opts]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - the label; a string or Hiccup/Sablono style template
 * - placeholder           - placeholder text shown if there is no value
 * - cursor, korks         - data to bind to
 * - opts                  - see [[html5-input]]
 * 
 * 
 * Examples:
 * 
 * (f/textarea "Textarea" "A placeholder" data [:some-text])
 * (f/textarea {:rows 8} "Textarea" "A placeholder" data [:some-text] :inline true)
 */
reforms.core.textarea = (function reforms$core$textarea(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16197 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args);
var attrs = cljs.core.nth.call(null,vec__16197,(0),null);
var vec__16198 = cljs.core.nth.call(null,vec__16197,(1),null);
var label = cljs.core.nth.call(null,vec__16198,(0),null);
var placeholder = cljs.core.nth.call(null,vec__16198,(1),null);
var cursor = cljs.core.nth.call(null,vec__16198,(2),null);
var korks = cljs.core.nth.call(null,vec__16198,(3),null);
var opts = cljs.core.nthnext.call(null,vec__16198,(4));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var textarea_attrs = reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__16197,attrs,vec__16198,label,placeholder,cursor,korks,opts,dom_id){
return (function (p1__16195_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__16195_SHARP_.target.value);
});})(vec__16197,attrs,vec__16198,label,placeholder,cursor,korks,opts,dom_id))
,new cljs.core.Keyword(null,"value","value",305978217),reforms.binding.core.get_in.call(null,cursor,korks)], null));
return reforms.core.impl.input_STAR_.call(null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),textarea_attrs,label,cursor,korks,opts);
});

reforms.core.textarea.cljs$lang$maxFixedArity = (0);

reforms.core.textarea.cljs$lang$applyTo = (function (seq16196){
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16196));
});
/**
 * Select element. See http://getbootstrap.com/css/#selects
 * 
 * Arguments:
 * 
 * [attrs] label cursor korks options [:on-change <lambda>]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - options               - a vector containing options and their labels (see examples below)
 * - :on-change            - (optional) lambda to call on selection
 * 
 * 
 * Examples:
 * 
 * (f/select "Select" data [:select]
 * [[:option1 "Option 1"] [:option2 "Option 2"] [:option3 "Option 3"]])
 * (f/select {:class "my-special-selector"} "Select" data [:select]
 * :on-change #(js/alert @data)
 * [[:option1 "Option 1"] [:option2 "Option 2"] [:option3 "Option 3"]])
 */
reforms.core.select = (function reforms$core$select(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__16201 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args);
var attrs = cljs.core.nth.call(null,vec__16201,(0),null);
var vec__16202 = cljs.core.nth.call(null,vec__16201,(1),null);
var label = cljs.core.nth.call(null,vec__16202,(0),null);
var cursor = cljs.core.nth.call(null,vec__16202,(1),null);
var korks = cljs.core.nth.call(null,vec__16202,(2),null);
var options = cljs.core.nth.call(null,vec__16202,(3),null);
var map__16203 = cljs.core.nthnext.call(null,vec__16202,(4));
var map__16203__$1 = ((cljs.core.seq_QMARK_.call(null,map__16203))?cljs.core.apply.call(null,cljs.core.hash_map,map__16203):map__16203);
var opts = map__16203__$1;
var on_change = cljs.core.get.call(null,map__16203__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var selected_val = reforms.binding.core.get_in.call(null,cursor,korks);
var input_attrs = reforms.core.impl.merge_attrs.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(selected_val)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__16201,attrs,vec__16202,label,cursor,korks,options,map__16203,map__16203__$1,opts,on_change,dom_id,selected_val){
return (function (dom_event){
reforms.binding.core.reset_BANG_.call(null,cursor,korks,reforms.core.impl.unstr_option.call(null,dom_event.target.value,options));

if(cljs.core.truth_(on_change)){
return on_change.call(null);
} else {
return null;
}
});})(vec__16201,attrs,vec__16202,label,cursor,korks,options,map__16203,map__16203__$1,opts,on_change,dom_id,selected_val))
,new cljs.core.Keyword(null,"id","id",-1388402092),dom_id], null));
return cljs.core.apply.call(null,reforms.core.impl.input_STAR_,new cljs.core.Keyword(null,"select","select",1147833503),input_attrs,label,cursor,korks,opts,cljs.core.map.call(null,((function (vec__16201,attrs,vec__16202,label,cursor,korks,options,map__16203,map__16203__$1,opts,on_change,dom_id,selected_val,input_attrs){
return (function (p1__16199_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(cljs.core.first.call(null,p1__16199_SHARP_))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,cljs.core.first.call(null,p1__16199_SHARP_))], null),cljs.core.second.call(null,p1__16199_SHARP_)],null));
});})(vec__16201,attrs,vec__16202,label,cursor,korks,options,map__16203,map__16203__$1,opts,on_change,dom_id,selected_val,input_attrs))
,options));
});

reforms.core.select.cljs$lang$maxFixedArity = (0);

reforms.core.select.cljs$lang$applyTo = (function (seq16200){
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16200));
});
/**
 * Datetime input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.datetime = (function reforms$core$datetime(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"datetime","datetime",494675702),args);
});

reforms.core.datetime.cljs$lang$maxFixedArity = (0);

reforms.core.datetime.cljs$lang$applyTo = (function (seq16204){
return reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16204));
});
/**
 * Datetime-local input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.datetime_local = (function reforms$core$datetime_local(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072),args);
});

reforms.core.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.core.datetime_local.cljs$lang$applyTo = (function (seq16205){
return reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16205));
});
/**
 * Date input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.date = (function reforms$core$date(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.date.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"date","date",-1463434462),args);
});

reforms.core.date.cljs$lang$maxFixedArity = (0);

reforms.core.date.cljs$lang$applyTo = (function (seq16206){
return reforms.core.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16206));
});
/**
 * Month input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.month = (function reforms$core$month(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.month.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"month","month",-1960248533),args);
});

reforms.core.month.cljs$lang$maxFixedArity = (0);

reforms.core.month.cljs$lang$applyTo = (function (seq16207){
return reforms.core.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16207));
});
/**
 * Time input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.time = (function reforms$core$time(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"time","time",1385887882),args);
});

reforms.core.time.cljs$lang$maxFixedArity = (0);

reforms.core.time.cljs$lang$applyTo = (function (seq16208){
return reforms.core.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16208));
});
/**
 * Week input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.week = (function reforms$core$week(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.week.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"week","week",-1326473278),args);
});

reforms.core.week.cljs$lang$maxFixedArity = (0);

reforms.core.week.cljs$lang$applyTo = (function (seq16209){
return reforms.core.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16209));
});
/**
 * Number input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.number = (function reforms$core$number(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.number.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"number","number",1570378438),args);
});

reforms.core.number.cljs$lang$maxFixedArity = (0);

reforms.core.number.cljs$lang$applyTo = (function (seq16210){
return reforms.core.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16210));
});
/**
 * Email input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.email = (function reforms$core$email(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.email.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"email","email",1415816706),args);
});

reforms.core.email.cljs$lang$maxFixedArity = (0);

reforms.core.email.cljs$lang$applyTo = (function (seq16211){
return reforms.core.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16211));
});
/**
 * Url input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.url = (function reforms$core$url(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"url","url",276297046),args);
});

reforms.core.url.cljs$lang$maxFixedArity = (0);

reforms.core.url.cljs$lang$applyTo = (function (seq16212){
return reforms.core.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16212));
});
/**
 * Search input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.search = (function reforms$core$search(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.search.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"search","search",1564939822),args);
});

reforms.core.search.cljs$lang$maxFixedArity = (0);

reforms.core.search.cljs$lang$applyTo = (function (seq16213){
return reforms.core.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16213));
});
/**
 * Tel input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.tel = (function reforms$core$tel(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"tel","tel",224138159),args);
});

reforms.core.tel.cljs$lang$maxFixedArity = (0);

reforms.core.tel.cljs$lang$applyTo = (function (seq16214){
return reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16214));
});
/**
 * Color input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.color = (function reforms$core$color(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.color.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"color","color",1011675173),args);
});

reforms.core.color.cljs$lang$maxFixedArity = (0);

reforms.core.color.cljs$lang$applyTo = (function (seq16215){
return reforms.core.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16215));
});
/**
 * A spinner.
 * 
 * Arguments:
 * 
 * [attrs]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 */
reforms.core.spinner = (function reforms$core$spinner(){
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.impl.spinner,args);
});

reforms.core.spinner.cljs$lang$maxFixedArity = (0);

reforms.core.spinner.cljs$lang$applyTo = (function (seq16216){
return reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16216));
});

//# sourceMappingURL=core.js.map