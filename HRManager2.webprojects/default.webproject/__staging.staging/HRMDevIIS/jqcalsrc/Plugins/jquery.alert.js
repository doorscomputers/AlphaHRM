(function(b){b.alerts={verticalOffset:-75,horizontalOffset:0,repositionOnResize:true,overlayOpacity:0.5,overlayColor:"#FFF",draggable:true,okButton:"OK",cancelButton:"Cancel",dialogClass:null,alert:function(a,f,e){if(f==null){f="OK"}b.alerts._show(f,a,null,"alert",function(c){if(e){e(c)}},null,null,null,null)},confirm:function(a,f,e){if(f==null){f="Are you sure"}b.alerts._show(f,a,null,"confirm",function(c){if(e){e(c)}},null,null,null,null)},prompt:function(a,h,g,f){if(g==null){g="Please enter something"}b.alerts._show(g,a,h,"prompt",function(c){if(f){f(c)}},null,null,null,null)},openBox:function(k,j,a,n,l,m,h){if(j==null){j="Information"}b.alerts._show(j,k,null,"openBox",function(c){if(h){h(c)}},a,n,l,m)},overAlert:function(d,a){b.alerts._overShow(d,a)},_overShow:function(g,h){if(h==null){h=3000}var a=h+600;b("body").append('<div id="over_container" style="display:none"><div id="over_message"></div></div>');b("#over_message").text(g).html(b("#over_message").text().replace(/\n/g,"<br />"));if(b.alerts.dialogClass){b("#over_container").addClass(b.alerts.dialogClass)}var f=(b.browser.msie&&parseInt(b.browser.version)<=6)?"absolute":"fixed";b("#over_container").css({position:f,zIndex:99999,width:350,padding:0,margin:0}).show("fast");b("#over_container").css({minWidth:b("#over_container").outerWidth(),maxWidth:b("#over_container").outerWidth()});b.alerts._overReposition();setTimeout(function(){b("#over_container").hide("fast")},h);setTimeout(function(){b("#over_container").remove()},a)},_overReposition:function(){var d=4;var a=((b(window).width()/2)-(b("#over_container").outerWidth()/2))+b.alerts.horizontalOffset;if(d<0){d=0}if(a<0){a=0}if(b.browser.msie&&parseInt(b.browser.version)<=6){d=d+b(window).scrollTop()}if(b.browser.msie&&parseInt(b.browser.version)<=6){a=a-175}b("#over_container").css({top:d+"px",left:a+"px"});b("#popup_overlay").height(b(document).height())},_show:function(p,v,o,r,e,h,u,s,a){b.alerts._hide();b.alerts._overlay("show");b("body").append('<div id="popup_container" style="display:none"><h1 id="popup_title"></h1><em id="ctl"></em><em id="cbl"></em><em id="ctr"></em><em id="cbr"></em><span id="popup_close"></span><div id="popup_content"><div id="popup_message"></div></div></div>');if(b.alerts.dialogClass){b("#popup_container").addClass(b.alerts.dialogClass)}var q=(b.browser.msie&&parseInt(b.browser.version)<=6)?"absolute":"fixed";b("#popup_container").css({position:q,zIndex:99999,padding:0,margin:0}).show();b("#popup_title").text(p);b("#popup_content").addClass(r);if(r!="openBox"){b("#popup_message").text(v).html(b("#popup_message").text().replace(/\n/g,"<br />"))}b("#popup_container").css({});b.alerts._reposition();b.alerts._maintainPosition(true);switch(r){case"alert":b("#popup_message").after('<div id="popup_panel"><input type="button" value="'+b.alerts.okButton+'" id="popup_ok" /></div>');b("#popup_ok").click(function(){b.alerts._hide();e(true)});b("#popup_ok").focus().keypress(function(c){if(c.keyCode==13||c.keyCode==27){b("#popup_ok").trigger("click")}});break;case"confirm":b("#popup_message").after('<div id="popup_panel"><input type="button" value="'+b.alerts.okButton+'" id="popup_ok" /> <input type="button" value="'+b.alerts.cancelButton+'" id="popup_cancel" /></div>');b("#popup_ok").click(function(){b.alerts._hide();if(e){e(true)}});b("#popup_cancel").click(function(){b.alerts._hide();if(e){e(false)}});b("#popup_ok").focus();b("#popup_ok, #popup_cancel").keypress(function(c){if(c.keyCode==13){b("#popup_ok").trigger("click")}if(c.keyCode==27){b("#popup_cancel").trigger("click")}});break;case"prompt":b("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="'+b.alerts.okButton+'" id="popup_ok" /> <input type="button" value="'+b.alerts.cancelButton+'" id="popup_cancel" /></div>');b("#popup_prompt").width(b("#popup_message").width()-10);b("#popup_ok").click(function(){var c=b("#popup_prompt").val();b.alerts._hide();if(e){e(c)}});b("#popup_cancel").click(function(){b.alerts._hide();if(e){e(null)}});b("#popup_prompt, #popup_ok, #popup_cancel").keypress(function(c){if(c.keyCode==13){b("#popup_ok").trigger("click")}if(c.keyCode==27){b("#popup_cancel").trigger("click")}});if(o){b("#popup_prompt").val(o)}b("#popup_prompt").focus().select();break;case"openBox":b("#popup_message").append(b(v).html());if(h){b("#popup_container").css({width:h+"px"})}if(u){b("#popup_container").css({height:u+"px"});b("#popup_message").css({height:(u-48)+"px"})}b.alerts._reposition();if(s){b(s).click(function(){b.alerts._hide();if(e){e(true)}})}if(a){b(a).click(function(){b.alerts._hide();return false;if(e){e(false)}})}break}b("#popup_close").click(function(){b.alerts._hide();if(e){e()}});if(b.alerts.draggable){try{b("#popup_container").draggable({handle:b("#popup_title")});b("#popup_title").css({cursor:"move"})}catch(t){}}},_hide:function(){b("#popup_container").remove();b.alerts._overlay("hide");b.alerts._maintainPosition(false)},_overlay:function(a){switch(a){case"show":b.alerts._overlay("hide");b("BODY").append('<div id="popup_overlay"></div>');b("#popup_overlay").css({position:"absolute",zIndex:99998,top:"0px",left:"0px",width:"100%",height:b(document).height(),background:b.alerts.overlayColor,opacity:b.alerts.overlayOpacity});break;case"hide":b("#popup_overlay").remove();break}},_reposition:function(){var d=((b(window).height()/2)-(b("#popup_container").height()/2))+b.alerts.verticalOffset;var a=((b(window).width()/2)-(b("#popup_container").width()/2))+b.alerts.horizontalOffset;if(d<0){d=0}if(a<0){a=0}if(b.browser.msie&&parseInt(b.browser.version)<=6){d=d+b(window).scrollTop()}b("#popup_container").css({top:d+"px",left:a+"px"});b("#popup_overlay").height(b(document).height())},_maintainPosition:function(a){if(b.alerts.repositionOnResize){switch(a){case true:b(window).bind("resize",b.alerts._reposition);break;case false:b(window).unbind("resize",b.alerts._reposition);break}}}};hiAlert=function(a,f,e){b.alerts.alert(a,f,e)};hiConfirm=function(a,f,e){b.alerts.confirm(a,f,e)};hiPrompt=function(a,h,g,f){b.alerts.prompt(a,h,g,f)};hiBox=function(k,j,a,n,l,m,h){b.alerts.openBox(k,j,a,n,l,m,h)};hiOverAlert=function(d,a){b.alerts.overAlert(d,a)}})(jQuery);