function LbMove(u,e,z,p,o,x,d,q,s,w,c){var A=$("#"+u+"");var y=$("#"+e+"");var f=$("#"+z+"");var b=$("#"+p+"");var g=0;var k;var j;var h=0;var v=0;var r=0;var l=new Date;var a,n,m;a=A.find("li").length;n=A.find("li").innerHeight();if(x=="left"||x=="right"){A.find("ul").width(a*q)}else{if(x=="top"||x=="bottom"){A.find("ul").height(a*q);b.hide()}else{if(x=="fade"){A.find("ul").width(q).height(n);A.find("li").eq(0).show().siblings().hide();A.find("li").css({position:"absolute",left:0,top:0})}}}b.empty();for(i=0;i<a;i++){b.append("<span></span>")}b.find("span").eq(0).addClass("cur");if(d==false){y.hide();f.hide();b.hide()}function t(){if(d==false){h++;if(x=="left"){A.find("ul").css({left:-h});v=parseInt(A.find("ul").css("left"));if(v==-q){h=0;A.find("li:first").insertAfter(A.find("li:last"));A.find("ul").css({left:0})}}if(x=="right"){v=parseInt(A.find("ul").css("left"));if(v==0){h=-q;A.find("li:last").insertBefore(A.find("li:first"));A.find("ul").css({left:0})}A.find("ul").css({left:h})}if(x=="top"){A.find("ul").css({top:-h});v=parseInt(A.find("ul").css("top"));if(v==-q){h=0;A.find("li:first").insertAfter(A.find("li:last"));A.find("ul").css({top:0})}}if(x=="bottom"){v=parseInt(A.find("ul").css("top"));if(v==0){h=-q;A.find("li:last").insertBefore(A.find("li:first"));A.find("ul").css({top:0})}A.find("ul").css({top:h})}}else{if(d==true){if(x=="left"){A.find("ul").animate({left:-q},s,function(){A.find("li:first").insertAfter(A.find("li:last"));A.find("ul").css({left:0})});if(g<a-1){g++;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}else{g=0;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}}if(x=="right"){A.find("li:last").insertBefore(A.find("li:first"));A.find("ul").css({left:-q});A.find("ul").stop().animate({left:0},s);if(g>0){g--;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}else{g=a-1;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}}if(x=="top"){A.find("ul").animate({top:-q},s,function(){A.find("li:first").insertAfter(A.find("li:last"));A.find("ul").css({top:0})})}if(x=="bottom"){A.find("li:last").insertBefore(A.find("li:first"));A.find("ul").css({top:-q});A.find("ul").stop().animate({top:0},s)}if(x=="fade"){if(r<a-1){r++}else{r=0}A.find("li").eq(r).fadeIn(s).siblings().fadeOut(s);b.find("span").eq(r).addClass("cur").siblings().removeClass("cur")}}}}if(o==true){if(a>c){k=setInterval(t,w)}else{clearInterval(k);y.hide();f.hide();b.hide()}}else{clearInterval(k)}A.find("li").hover(function(){clearInterval(k)},function(){if(o==true){if(a>c){k=setInterval(t,w)}else{clearInterval(k);y.hide();f.hide();b.hide()}}else{clearInterval(k)}});f.hover(function(){clearInterval(k)},function(){if(o==true){if(a>c){k=setInterval(t,w)}else{clearInterval(k);y.hide();f.hide();b.hide()}}else{clearInterval(k)}}).click(function(){if(new Date-l>500){l=new Date;if(x=="left"||x=="right"){A.find("ul").animate({left:-q},s,function(){A.find("li:first").insertAfter(A.find("li:last"));A.find("ul").css({left:0})})}if(x=="top"||x=="bottom"){A.find("ul").animate({top:-q},s,function(){A.find("li:first").insertAfter(A.find("li:last"));A.find("ul").css({top:0})})}if(x=="fade"){if(r>0){r--}else{r=a-1}A.find("li").stop(true,true).eq(r).fadeIn(s).siblings().fadeOut(s)}if(g<a-1){g++;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}else{g=0;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}}else{}});y.hover(function(){clearInterval(k)},function(){if(o==true){if(a>c){k=setInterval(t,w)}else{clearInterval(k);y.hide();f.hide();b.hide()}}else{clearInterval(k)}}).click(function(){if(new Date-l>500){l=new Date;if(x=="left"||x=="right"){A.find("li:last").insertBefore(A.find("li:first"));A.find("ul").css({left:-q});A.find("ul").stop().animate({left:0},s)}if(x=="top"||x=="bottom"){A.find("li:last").insertBefore(A.find("li:first"));A.find("ul").css({top:-q});A.find("ul").stop().animate({top:0},s)}if(x=="fade"){if(r<a-1){r++}else{r=0}A.find("li").stop(true,true).eq(r).fadeIn(s).siblings().fadeOut(s)}if(g>0){g--;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}else{g=a-1;b.find("span").eq(g).addClass("cur").siblings().removeClass("cur")}}else{}});b.find("span").hover(function(){clearInterval(k)},function(){if(o==true){if(a>c){k=setInterval(t,w)}else{clearInterval(k);y.hide();f.hide();b.hide()}}else{clearInterval(k)}}).click(function(){if(new Date-l>500){l=new Date;m=$(this).index();$(this).addClass("cur").siblings().removeClass("cur");if(x=="fade"){A.find("li").eq(m).fadeIn(s).siblings().fadeOut(s)}else{if(m>g){j=m-g;g=m;A.find("ul").stop().animate({left:-q*j},s,function(){for(i=0;i<j;i++){A.find("ul").css({left:0});A.find("li:first").insertAfter(A.find("li:last"))}})}else{j=g-m;g=m;A.find("ul").css({left:-q*j});for(i=0;i<j;i++){A.find("ul").stop().animate({left:0},s);A.find("li:last").insertBefore(A.find("li:first"))}}}}else{}})};