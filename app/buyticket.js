function switchInvoice(){var a=$("#need_invoice").val();showInvoice(a)}function showInvoice(a){if(a==0){$("#event_invoice_select").removeClass("a_over").addClass("b_over");$("#need_invoice").val(1);$("#invoice_fill_form").hide();removeAllValidInfo()}else{$("#event_invoice_select").removeClass("b_over").addClass("a_over");$("#need_invoice").val(0);$("#invoice_fill_form").show();addInvoiceValidInfo()}updateOrderTotalPrice()}function updateOrderTotalPrice(){var e=$("#need_invoice").val();e=e==1?0:1;var d=$("#rate_type").val();var c=$("#invoice_rate").val();if(d==1){if(e==1){var a=$.trim($(".ticket_order_total_price").html());var b=parseFloat(a)*parseFloat(c)*0.01;b=b.toFixed(2);$("#invoice_rate_price").html(b);$(".ticket_order_total_price").html(accAdd(parseFloat(a),parseFloat(b)));$(".invoice_tax_span").show()}else{if(typeof totalExtraPrice=="undefined"){totalExtraPrice=0}var a=accAdd($.trim($("#ticket_order_price").val()),totalExtraPrice);$(".ticket_order_total_price").html(a);$(".invoice_tax_span").hide()}}}function addInvoiceValidInfo(){$("#companyCode").attr("datatype","*").attr("nullmsg","开票代码不能为空");$("#invoiceTaxNum").attr("datatype","/^[a-zA-Z0-9]+$/").attr("nullmsg","纳税人识别号不能为空").attr("errormsg","纳税人识别号格式不正确");if($("input[type='radio'][name='companyCodeType'][value='0']").attr("checked")){var a=$("#invoiceType").val();$("#invoiceTitle").attr("datatype","*").attr("nullmsg","发票抬头不能为空");if(a==0){$("#special_invoice_block > .form_li").each(function(){$(this).find(".input_box > input").attr("datatype","empty");$(this).find(".con_l > .error_meg").html("")})}else{$("#special_invoice_block > .form_li").each(function(){var c=$(this).find(".label_l > span").html();var b=$(this).find(".input_box > input");b.attr("datatype","*").attr("nullmsg",c+"不能为空")})}}if($("input[type='radio'][name='obtainWay'][value='1']").prop("checked")){$("#invoice_express_block > .form_li").each(function(){var c=$(this).find(".label_l > span").html();var b=$(this).find(".input_box > input");b.attr("datatype","*").attr("nullmsg",c+"不能为空")})}if($("#invoice_type_3").hasClass("active")){$("#eInvoiceCellPhone").attr("datatype","m").attr("nullmsg","手机号不能为空");$("#eInvoiceEmailAddr").attr("datatype","e").attr("nullmsg","邮箱不能为空")}}function removeAllValidInfo(){$("#invoice_fill_form .form_li .error_meg").each(function(){$(this).removeAttr("datatype").removeAttr("nullmsg")});$("#invoice_fill_form .form_li input").each(function(){$(this).removeAttr("datatype").html("")})}function selectInvoiceType(c,b){if($("#invoice_type_3").length>0&&$("#invoice_type_"+3).hasClass("color")&&!$("#invoice_type_"+0).hasClass("color")&&b==0){bagEventAlert.confirm("普通增值税电子发票可快速自助开票，确定需要纸质发票吗？",{confirm:function(){$("#"+c).addClass("color");selectInvoiceType(c,b)},cancel:function(){return}})}else{for(var a=0;a<4;a++){$("#invoice_type_"+a).removeClass("active").removeClass("color")}$("#"+c).addClass("active").addClass("color");if(supportCompanyCode==1){$("#company_code_block").show()}$("#express_block").show();$("#dzfp_cellPhone").hide();$("#dzfp_emailAddr").hide();if($("input[type='radio'][name='obtainWay'][value='1']").attr("checked")){$("#invoice_express_block").show()}if(c=="invoice_type_1"){selectReceiverType("receiver_type_1",1);$("#nomarl_invoice_block").hide();if($("input[type='radio'][name='companyCodeType'][value='0']").attr("checked")){$("#special_invoice_block").show();$("#isNotice").show()}}else{if(c=="invoice_type_3"){$("#company_code_block").hide();$("input[type='radio'][name='companyCodeType'][value='0']").attr({checked:"checked"});$("#taxNum_block").show();$("#invoice_title").show();$("#code_block").hide();$("#express_block").hide();$("#invoice_express_block").hide();$("#dzfp_cellPhone").show();$("#dzfp_emailAddr").show()}if($("input[type='radio'][name='receiverType'][value='2']").attr("checked")){selectReceiverType("receiver_type_2",2)}$("#special_invoice_block").hide();if($("input[type='radio'][name='companyCodeType'][value='0']").attr("checked")){$("#nomarl_invoice_block").show()}$("#isNotice").hide()}$("#invoiceType").val(b);addInvoiceValidInfo()}}function selectReceiverType(b,a){if($("input[type='radio'][name='companyCodeType'][value='0']").attr("checked")){if(b=="receiver_type_1"){$("#taxNum_block").show()}else{$("#taxNum_block").hide()}}addInvoiceValidInfo();$("#invoice_name_"+a).find("input").attr("checked","checked")}function selectHasCompanyCode(b,a){if(a==0){$("#taxNum_block").show();$("#invoice_title").show();if($("#invoice_type_1").hasClass("active")){selectInvoiceType("invoice_type_1",1)}else{if($("#invoice_type_0").hasClass("active")){selectInvoiceType("invoice_type_0",0)}else{selectInvoiceType("invoice_type_3",3)}}$("#code_block").hide()}else{if(a==1){selectReceiverType("receiver_type_1",1);$("#code_block").show();$("#nomarl_invoice_block").hide();$("#special_invoice_block").hide();$("#taxNum_block").hide();$("#invoice_title").hide()}}addInvoiceValidInfo();$("#"+b).find("input").attr("checked","checked")}function switchObtainWay(a){if(a==0){$("input[type='radio'][name='obtainWay'][value='0']").attr("checked","checked");$("#invoice_express_block > .form_li").each(function(){$(this).find(".input_box > input").removeAttr("datatype").removeAttr("nullmsg");$(this).find(".con_l > .error_meg").html("")});$("#invoice_express_block").hide()}else{$("input[type='radio'][name='obtainWay'][value='1']").attr("checked","checked");$("#invoice_express_block").show();$("#invoice_express_block > .form_li").each(function(){var b=$(this).find(".label_l > span").html();$(this).find(".con_l > .input_box > input").attr("datatype","*").attr("nullmsg",b+"不能为空")})}}function initInvoiceInfo(b,a){if(b=="1"){selectInvoiceType("invoice_type_1",1)}if(a==1){$("input[type='radio'][name='obtainWay'][value='1']").attr("checked","checked");$("#invoice_express_block").show()}addInvoiceValidInfo()}function setPayWay(b,a){if(b==0||b==1){switchPayWay(b)}else{switchPayWay(b);if(b==10){setBankCode($("#BANK_"+a))}}}function switchPayWay(c){$("input[name='payWay'][value='"+c+"']").prop("checked",true);$("#pay_block_0").removeClass("active");$("#pay_block_10").removeClass("active");$("#pay_block_13").removeClass("active");$("#pay_block_23").removeClass("active");$("#pay_block_"+c).addClass("active");$("#content_block_0").hide();$("#content_block_10").hide();if($(".submit_text_cla").length>0){$(".submit_text_cla").eq(1).hide();$(".submit_text_cla").eq(0).show()}if(c==0||c==1||c==10||c==8){if(c==0||c==1){$("#content_block_0").show();$("#userBearServiceFeeCon").show();if(typeof(reChangeOnlineWay)=="function"){reChangeOnlineWay()}}else{$("#content_block_10").show();var a=$.trim($("#st_alipay_rate").val());if(!emptyStr(a)&&parseFloat(a)>0){calculateServiceFee(a)}}try{if($("#formSubmit")&&param.stEvent&&i18n!=undefined){$("#formSubmit").text(i18n.order.confirmPayTips)}}catch(b){}}else{if(c==13||c==23){$("#userBearServiceFeeCon").hide();if($(".submit_text_cla").length>0){$(".submit_text_cla").eq(0).hide();$(".submit_text_cla").eq(1).show()}try{if($("#formSubmit")&&param.stEvent&&i18n!=undefined){$("#formSubmit").text(i18n.order.confirmPayTips)}}catch(b){}}}}function initOnlinePay(){$("#content_block_0 > div").first().click()}function setBankCode(b){$("#content_block_10 div").each(function(){$(this).removeClass("active")});$(b).addClass("active");var a=b.id;if(a!=""){a=a.substring(a.indexOf("_")+1,a.length)}$("#bankCode").val(a)}function copyReceiver(c){if(c==-1){$("#buyerEmail").val("");$("#buyerCellphone").val("");$("#buyerName").val("");$("#buyerLastName").val("");$("#buyerFirstName").val("");$("#expressReceiver").val("");$("#expressCellphone").val("");$("#buyerAreaCode").val("")}else{var a=$("#mobile_phone_"+c).val(),b=$("#email_address_"+c).val();$("#buyerEmail").val(b);$("#buyerCellphone").val(a);$("#buyerName").val($("#username_"+c).val());$("#buyerLastName").val($("#last_name_"+c).val());$("#buyerFirstName").val($("#first_name_"+c).val());$("#expressReceiver").val(b);$("#expressCellphone").val(a);$("#buyerAreaCode").val($("#area_code_"+c).val())}}function setOptionValue(b,e,c){if(b=="radio"){$('input[name="'+e+'"][value="'+c+'"]').prop("checked",true)}else{if(b=="checkbox"){if(c==""){return}var d=c.split(",");for(var a=0;a<d.length;a++){$('input[name="'+e+'"][value="'+d[a]+'"]').prop("checked",true)}}else{if(b=="select"){$('select[name="'+e+'"]').val(c)}}}}function submitBuyerInfo(){$("#buyer_info_form").submit()}function editDiscount(a){if(a){$("#userDiscountBefore").hide();$("#userDiscountAfter").show()}else{$("#userDiscountBefore").show();$("#userDiscountAfter").hide();if($("#invite")){$("#invite").css("z-index",10000)}}}function useInvite(eventId,orderId){var discount=$.trim($("#discount_code_fill").val());var url="/eventm/"+eventId+"/discount";var flag=false;if(discount==""||discount==null||discount==undefined){alertWarningTips("邀请码不能为空");return false}$.ajax({type:"POST",url:url,dataType:"json",async:false,data:{orderId:orderId,discount_code:discount},success:function(resp){var data=eval(resp);if(data.retStatus==200){alertWarningTips("请使用邀请码")}else{if(data.retStatus==301){if(eventId==736121||eventId==15822){alertWarningTips("邀请码不存在")}else{alertWarningTips("优惠码或邀请码不存在")}}else{if(data.retStatus==302){if(eventId==736121||eventId==15822){alertWarningTips("邀请码己超过使用期限或次数")}else{alertWarningTips("优惠码或邀请码己超过使用期限或次数")}}else{if(data.retStatus==201){if(eventId==736121||eventId==15822){alertWarningTips("邀请码无法应用于当前可出售的门票")}else{alertWarningTips("优惠码无法应用于当前可出售的门票")}}else{if(data.retStatus==456){if($("#invite")){$("#invite").hide();$(".form_li .choose_ticket").css("display","block")}var discountCodeInput=$("#discount_code");if($("#confirm_ticket_button").length&&$("#confirm_ticket_button").length>0){$("#confirm_ticket_button").show()}editDiscount(false);if($(".ticket_order_total_price").text()==0){$("#attend_ticket").hide()}for(var ticketId in data.resultObject){showHideTickets(ticketId)}if(eventId!=973568&&eventId!=35990){alertSuccessTips("邀请码验证成功。")}discountCodeInput.val(discount);flag=true}else{alertWarningTips(resp.resultObject)}}}}}}});return flag}function useDiscount(eventId,orderId){var discount=$("#discount_code_fill").val();var url="/eventm/"+eventId+"/discount";var flag=false;if(discount==""||discount==null||discount==undefined){alertWarningTips("请输入优惠码或邀请码");return false}$.ajax({type:"POST",url:url,dataType:"json",async:false,data:{orderId:orderId,discount_code:discount},success:function(resp){var data=eval(resp);if(data.retStatus==200){if($("#confirm_ticket_button").length&&$("#confirm_ticket_button").length>0){$("#confirm_ticket_button").show()}$("#discount_code").val(discount);editDiscount(false);if(data.resultObject.orderId){var order=data.resultObject,itemsMap=order.itemsMap;$("#discount_rawTotalPrice").html(order.rawTotalPrice);$("#discount_discountPrice").html(order.discountPrice);$("#discount_totalPrice").html(order.totalPrice);$("#useDiscount").show();$("#notUseDiscount").hide();$("#discount_discountCode").html(order.discountCode).parent().parent().show();$("#userDiscountBefore").hide();for(var key in itemsMap){$("#ticketOrderItem_price_"+key).html(itemsMap[key])}$("#ticket_order_discount_price").val(order.discountPrice);$("#ticket_order_price").val(order.totalPrice);$(".ticket_order_total_price").html(order.totalPrice);if(typeof totalTicketPrice=="undefined"){totalTicketPrice=undefined}if(data.resultObject.itemProductGroupList){if((typeof productDiscountPrice!="undefined")){productDiscountPrice=data.resultObject.itemProductGroupList}processProductDiscount(data.resultObject.itemProductGroupList)}if(totalTicketPrice){totalTicketPrice=order.totalPrice;handleOrderTotalPrice()}updateOrderTotalPrice()}else{var ticketDiscountPrices=data.resultObject;if(eventId==34600||eventId==1095728||eventId==1146375||eventId==1147404||eventId==1183973){$("[id^='ticket_block_']").each(function(){var _thisId=$(this).attr("id");var flag=true;for(var x=0;x<ticketDiscountPrices.length;x++){var realId=ticketDiscountPrices[x].ticketId;if(_thisId=="ticket_block_"+realId){flag=false}}if(flag){$(this).hide()}})}var selectedTicketIdArray=new Array();$("[id^='ticket_quantity_show_']").each(function(){var selectedNum=$(this).html();if(!emptyStr(selectedNum)){if(parseInt(selectedNum)>0){var selectedTicketId=$(this).attr("id").replace("ticket_quantity_show_","");if(!emptyStr(selectedTicketId)){selectedTicketIdArray.push({ticketId:selectedTicketId,selNum:selectedNum})}}}});console.log(ticketDiscountPrices);console.log(selectedTicketIdArray);var sameCount=0,leftDiscountCount=-1,selectedUseCount=0,selectedCount=selectedTicketIdArray.length,useDiscountCount=ticketDiscountPrices.length;for(var i=0;i<ticketDiscountPrices.length;i++){var ticketItem=ticketDiscountPrices[i];var paramDicount=$("#is_discount_param");var currencySign=$("#currency_sign").val();if(paramDicount.val()==1){$("#ticket_show_price_"+ticketItem.ticketId).html(ticketItem.currentPrice+"&nbsp;<span>原价:<span style='text-decoration: line-through;'>"+currencySign+$("#ticket_source_price_"+ticketItem.ticketId).val()+"</span></span>")}else{$("#ticket_show_price_"+ticketItem.ticketId).html(ticketItem.currentPrice+"&nbsp;<span>原价:<span style='text-decoration: line-through;'>"+currencySign+$("#ticket_source_price_"+ticketItem.ticketId).val()+"</span></span>")}$("#ticket_real_price_"+ticketItem.ticketId).val(ticketItem.currentPrice);if(selectedTicketIdArray.length>0){leftDiscountCount=ticketItem.leftDiscountCount;for(var sti in selectedTicketIdArray){if(selectedTicketIdArray[sti].ticketId==ticketItem.ticketId){if(ticketItem.leftDiscountCount!=-1){selectedUseCount=parseInt(selectedUseCount)+parseInt(selectedTicketIdArray[sti].selNum)}sameCount++}}}}if(leftDiscountCount==-1||selectedCount==0||leftDiscountCount>=selectedUseCount){if(useDiscountCount>0&&selectedCount>0){if(sameCount>0){if(selectedCount>sameCount){if(eventId==736121||eventId==15822){alertSuccessTips("邀请码已对部分门票生效。")}else{alertSuccessTips("优惠码已对部分门票生效。")}}else{if(eventId==736121||eventId==15822){alertSuccessTips("邀请码已生效。")}else{alertSuccessTips("优惠码已生效。")}}}else{if(eventId==736121||eventId==15822){alertWarningTipsLong("邀请码对当前选中的门票不生效。",5000)}else{alertWarningTipsLong("优惠码对当前选中的门票不生效。",5000)}}}else{if(eventId==736121||eventId==15822){alertSuccessTips("邀请码已生效，请选择相应邀请的门票。")}else{alertSuccessTips("优惠码已生效。")}}}else{if(eventId==736121||eventId==15822){alertWarningTipsLong("当前选择的门票数量已超过邀请码可以邀请的最大数量,请重新选择数量。",15000)}else{alertWarningTipsLong("当前选择的门票数量已超过优惠码可以优惠的最大数量,请重新选择数量。",15000)}}recalcPrice()}flag=true}else{if(data.retStatus==301){if(eventId==736121||eventId==15822){alertWarningTips("邀请码不存在")}else{alertWarningTips("优惠码或邀请码不存在")}}else{if(data.retStatus==302){if(eventId==736121||eventId==15822){alertWarningTips("邀请码己超过使用期限或次数")}else{alertWarningTips("优惠码或邀请码己超过使用期限或次数")}}else{if(data.retStatus==201){if(eventId==736121||eventId==15822){alertWarningTips("邀请码无法应用于当前可出售的门票")}else{alertWarningTips("优惠码无法应用于当前可出售的门票")}}else{if(data.retStatus==456){if($("#invite")){$("#invite").hide();$(".form_li .choose_ticket").css("display","block")}var discountCodeInput=$("#discount_code");if($("#confirm_ticket_button").length&&$("#confirm_ticket_button").length>0){$("#confirm_ticket_button").show()}editDiscount(false);if(discountCodeInput.val()!=undefined&&discountCodeInput.val()!=""){var buyTicketPath=window.location.pathname;var buyTicketUri=buyTicketPath+"?discountCode="+discount;window.location.href=buyTicketUri}else{for(var ticketId in data.resultObject){showHideTickets(ticketId)}try{if(!isOneTicketMode){$("#totalTicketPriceDiv").show()}$("#submitBuyButton").show();if(hasInviteHideTicketSoldOut){$("#submitInviteBuyButton").hide()}else{$("#buyButtonSoleOut").hide();$("#submitInviteBuyButton").show()}}catch(e){}if(eventId==1711598){}else{if(eventId!=973568&&eventId!=35990){alertSuccessTips("邀请码验证成功。")}}discountCodeInput.val(discount);flag=true}}else{alertWarningTips(resp.resultObject)}}}}}}});return flag}function processProductDiscount(g){var l;var c;var n;for(var h=g.length-1;h>=0;h--){l=g[h];c=l.key;n=l.value;var a;var o;for(var f=n.length-1;f>=0;f--){a=n[f];var e=a.productList;if(a.chooseType==2){o="product_group_"+c+"_"+a.productGroupId;var p;for(var d=e.length-1;d>=0;d--){p=e[d];var b=$("[name='"+o+"']>option[value='"+p.productId+"']");if(!b){continue}if(p.productOriginPrice){b.empty();b.append(p.showName+"(￥"+p.productPrice+'<span style="text-decoration: line-through;color: #898989">&nbsp;原价:￥'+p.productOriginPrice+"</span>)")}}}else{if(a.productGroupId){o="product_group_"+c+"_"+a.productGroupId;for(var d=e.length-1;d>=0;d--){var p=e[d];var b=$("input[name='"+o+"'][value='"+p.productId+"']");if(!b){continue}var m=b.next().next();if(p.productOriginPrice){m.empty();m.append(p.showName+"(￥"+p.productPrice+'<span style="text-decoration: line-through;color: #898989">&nbsp;原价:￥'+p.productOriginPrice+"</span>)")}}}else{o="product_"+c+"_";for(var d=e.length-1;d>=0;d--){var p=e[d];var b=$("input[name='"+o+p.productId+"'][value='"+p.productId+"']");if(!b){continue}var m=b.next().next();if(p.productOriginPrice){m.empty();m.append(p.showName+"(￥"+p.productPrice+'<span style="text-decoration: line-through;color: #898989">&nbsp;原价:￥'+p.productOriginPrice+"</span>)")}}}}}}}function recalcPrice(){var c=0;var b=0;var a;var j=0;calculateTicketPremise(ticketFields);for(var d=0;d<ticketFields.length;d++){a=ticketFields[d];if($("#ticket_quantity_"+a).length==0){continue}var e=parseInt(replaceSymbol($("#ticket_quantity_"+a).val()));if(e==0){continue}calculateGroupTicket(a,e);j+=e;var h=parseFloat(replaceSymbol($("#ticket_source_price_"+a).val()));if(!h>0){continue}var f=accMul(parseFloat(replaceSymbol($("#ticket_source_price_"+a).val())),e);var g=accMul(parseFloat(replaceSymbol($("#ticket_real_price_"+a).val())),e);c+=f;b+=g}$("#total_select_num").val(j);$("#total_price").html(b.toFixed(2));if(c==b){$("#discounted_value").html("").hide()}else{$("#discounted_value").html("已折扣 "+accSub(parseFloat(c),parseFloat(b))).show()}}function replaceSymbol(a){if(a){return a.replace(/,/g,"")}return a}function selectTicket(e,b,d,a){if(a==undefined){a=1}if(!d){var c=parseInt($("#ticket_quantity_"+e).val());if(c==0){increaseTicket(e,b,a)}}else{$("#ticket_block_"+e).removeClass("active").attr("onclick","selectTicket("+e+","+b+",false ,"+a+")")}}function increaseTicket(g,b,a,d){var f=$("#ticket_quantity_"+g),c=$("#ticket_premise_max_"+g);var e=parseInt(f.val());if(c.length>0){b=parseInt(c.val())}if(d&&d<b){b=d}if(e>=0&&e<a){e=a}else{if(e<b){e++}}$("#ticket_quantity_"+g).val(e);$("#ticket_quantity_show_"+g).html(e);if(e==b){$("#ticket_increase_"+g).addClass("disabled")}$("#ticket_decrease_"+g).removeClass("disabled");$("#ticket_block_"+g).addClass("active").removeAttr("onclick");recalcPrice();handleTicketLimit(g,1);handleGroupBuying()}var ticketLimit=[5245,5244];function handleTicketLimit(b,a){if(ticketLimit.indexOf(b)!=-1){ticketLimit.forEach(function(e){if(e!=b){var d=$("#ticket_increase_"+e),c=$("#ticket_decrease_"+e);var f=$("#ticket_block_"+e);if(a>0){d.data("stopIncrease",true).addClass("disabled");c.data("stopDecrease",true);f.data("onclick",f.attr("onclick")).removeAttr("onclick")}else{d.data("stopIncrease",false).removeClass("disabled");c.data("stopDecrease",false);f.attr("onclick",f.data("onclick"))}}})}}function decreaseTicket(e,b,a){var d=$("#ticket_quantity_"+e);var c=parseInt(d.val());if(c<=a){c=0}else{if((a>1&&c>a)||c>0){c--}}$("#ticket_quantity_"+e).val(c);$("#ticket_quantity_show_"+e).html(c);if(c==0){decreaseTicketToZero(e,b,a)}$("#ticket_increase_"+e).removeClass("disabled");recalcPrice();handleTicketLimit(e,-1);handleGroupBuying()}function decreaseTicketToZero(c,b,a){$("#ticket_decrease_"+c).addClass("disabled");selectTicket(c,b,true,a)}var ticketPremiseMap;function calculateTicketPremise(){if($("#premiseTicketFlag").length>0&&$("#premiseTicketFlag").val()=="true"){if(ticketPremiseMap==undefined){$.ajax({url:"/eventm/premiseTicket",type:"POST",data:{eventId:$("#website_event_Id").val()},async:false,dataType:"json",success:function(h){if(h.retStatus==200){ticketPremiseMap=h.resultObject}}})}if(ticketPremiseMap!=undefined){for(var g in ticketPremiseMap){var f=ticketPremiseMap[g],e=0;var b=[];for(var d=0;d<f.length;d++){var a=$("#ticket_quantity_"+f[d].ticketId);if(a.length==0||a.val()<=0){b.push(0)}else{b.push(parseInt(a.val()))}}e=Math.min.apply(Math,b);if(e==0){$("#ticket_quantity_"+g).val(0);$("#ticket_quantity_show_"+g).html(0);decreaseTicketToZero(g,1);$("#ticket_block_"+g).addClass("tj_ti")}else{$("#ticket_block_"+g).removeClass("tj_ti");$("#ticket_premise_max_"+g).val(e);var c=parseInt($("#ticket_quantity_"+g).val());if(c<e){$("#ticket_increase_"+g).removeClass("disabled")}else{if(c>=e){$("#ticket_increase_"+g).addClass("disabled");$("#ticket_quantity_"+g).val(e);$("#ticket_quantity_show_"+g).html(e)}}}}}}}function calculateGroupTicket(e,a){if($("#discount_code").val()!=""){return -1}var b=$("#ticket_discount_"+e);if(b.length>0){var d=b.val();if(a>=d){$.ajax({url:"/eventm/groupTicket",type:"POST",data:{ticketId:e,count:a},async:false,dataType:"json",success:function(f){if(f.retStatus==200){var g=f.resultObject;$("#ticket_show_price_"+g.ticketId).html(g.currentPrice);$("#ticket_real_price_"+g.ticketId).val(g.currentPrice)}else{}}})}else{var c=$("#ticket_source_price_"+e).val();$("#ticket_show_price_"+e).html(c);$("#ticket_real_price_"+e).val(c)}}return -1}function submitBuyForm(b){var c=$("#website_event_Id").val();if(c==1219778){if(emptyStr($("#salesLink").val())){alertWarningTips("请联系您的直属销售获取报名连接，进行报名");return false}}if($("#discount_code_fill").val()!=undefined&&$("#discount_code_fill").val()!=""&&$("#discount_code").val()==""){if(!useDiscount($("#website_event_Id").val())){return false}}var a=parseInt($("#total_select_num").val());if(a>0){var d=$.trim($("#nameType").val());if(d==1&&a>1){alertWarningTips("当前只能选择一张门票");return}else{if(b){showWechatMiniProgramFrame()}else{$("#buyTicketForm").submit()}}}else{var e=$("#eventLocale").val();alertWarningTips("至少选择一张票")}}function switchServiceItem(a){var b=$("#need_"+a).val();if(b==0){$("#"+a+"_select").removeClass("a_over").addClass("b_over");$("#need_"+a).val(1);$("#"+a+"_fill_form").hide();removeServiceItemValidInfo(a)}else{$("#"+a+"_select").removeClass("b_over").addClass("a_over");$("#need_"+a).val(0);$("#"+a+"_fill_form").show();addServiceItemValidInfo(a)}}function addServiceItemValidInfo(a){if(a=="hotel"){addHotelValidInfo()}else{if(a=="invoice"){addInvoiceValidInfo()}}}function addHotelValidInfo(){$("#hotel_fill_form > .form_li").each(function(){var b=$(this).find(".label_l > span").html();var a=$(this).find(".select_box > select");a.attr("datatype","*").attr("nullmsg","请选择"+b)})}function removeServiceItemValidInfo(a){$("#"+a+"_fill_form .form_li .error_meg").each(function(){$(this).removeAttr("datatype").removeAttr("nullmsg")});$("#"+a+"_fill_form .form_li input,select").each(function(){$(this).removeAttr("datatype").html("")})}function checkDiscountParams(eventId,discount_code){$.ajax({type:"post",url:"/eventm/"+eventId+"/checkDiscount",data:{discount_code:discount_code},async:false,dataType:"json",success:function(result){var data=eval(result);if(data.retStatus==200){useDiscount(eventId)}else{if(data.retStatus==456){for(var ticketId in data.resultObject){showHideTickets(ticketId)}if(!isOneTicketMode){$("#totalTicketPriceDiv").show()}$("#submitBuyButton").show();if(hasInviteHideTicketSoldOut){$("#submitInviteBuyButton").hide()}else{$("#buyButtonSoleOut").hide();$("#submitInviteBuyButton").show()}if(eventId==1711598||eventId==53197){aiccUseDiscount(discount_code)}else{if(eventId!=35990&&event.eventId!=973568){alertSuccessTips("邀请码验证成功。")}}}else{$("#discount_code_fill").val("");alertWarningTips("优惠码不存在或优惠名额已经用完")}}}})}var handleOtherItem=function(d,b,c){var a=$(d).val();if(b!="select"){var e=$(d).parent().parent().find("[type="+b+"]");if(!e.is(":checked")){e.attr("checked",true)}e.val(a)}else{if(c!=undefined&&c!=""&&c!=null){$("#"+c).val(a)}}};var selectFieldItem=function(g){var d=g.split("_");var a=d[d.length-1];var f=$("#"+g).find("option:selected");var e=f.attr("id");if(e!=undefined&&e.indexOf("other_item")>-1){$("#input_"+g).show()}else{$("#input_"+g).hide()}if(g.indexOf("select_1489411954177")>-1){ganged(f,"select_1489411601693_",a)}if(g.indexOf("select_1489719449491")>-1){ganged(f,"select_1489719465074_",a)}if(g.indexOf("select_1530168525947")>-1){ganged(f,"select_1530168534344_",a)}if(g.indexOf("select_1530165931111")>-1){ganged(f,"select_1530173548146_",a)}if(g.indexOf("select_1490000839710")>-1){ganged(f,"select_1490000874303_",a)}if(g.indexOf("select_1534595976864")>-1){gangedItem(f,["员工"],["select_1534596013067_","select_1534599874139_"],["select_item_15345960339493_","select_item_15345999038403_"],a)}if(g.indexOf("select_1490228957436_")>-1||g.indexOf("select_1490236449352_")>-1||g.indexOf("select_1490256113542_")>-1){if(typeof(join_event_by_novo)=="function"){var b=f.val();var c=!emptyStr(b)&&b=="参加"?0:1;join_event_by_novo(c)}}if(g.indexOf("select_1490256154851_")>-1){if(typeof(plan_event_by_novo)=="function"){var b=f.val();var c=!emptyStr(b)&&b=="接受"?1:0;plan_event_by_novo(c)}}};function gangedItem(h,g,d,f,a){var e=h.val();if(g&&g.indexOf(e)>=0){var c=d.length;for(var b=0;b<c;b++){triggerSelect(d[b],f[b],a)}}else{var c=d.length;for(var b=0;b<c;b++){triggerFirstItem(d[b],a)}}}function triggerFirstItem(a,b){$("#"+a+b).find("option:selected").attr("selected",false);$("#"+a+b).find("option").first().attr("selected",true)}function triggerSelect(a,c,b){$("#"+a+b).find("option:selected").attr("selected",false);$("#"+a+b).find("option[id='"+c+b+"']").attr("selected",true)}function ganged(g,c,a){var h=g.val();var f=h.substring(0,2).toUpperCase();var j=[];j.push('<option value="">Please select</option>');if(!emptyStr(f)){var b="";var e="";for(var d=0;d<values.length;d++){e=values[d].itemKey;if(values[d].itemKey.match(/(.+?_$)/)){e+=a}if(values[d].itemValue.toUpperCase().indexOf(f)==0){j.push("<option value='"+values[d].itemValue+"' id='"+e+"'>"+values[d].itemValue+"</option>")}else{if(values[d].itemValue=="OTHERS"){b="<option value='"+values[d].itemValue+"' id='"+e+"'>OTHERS</option>"}else{if(values[d].itemValue=="Division management"){j.push("<option value='"+values[d].itemValue+"' id='"+e+"'>"+values[d].itemValue+"</option>")}}}}if(b!=""){j.push(b)}}$("[id^="+c+a+"]").html(j)}function showHideTickets(d){var e=$("#ticket_block_"+d);e.show();var c=$("#ticket_increase_"+d),b=$("#ticket_decrease_"+d);c.data("stopIncrease",false).removeClass("disabled");b.data("stopDecrease",false);var a=e.data("isvalid");if(a){e.attr("onclick",e.data("onclick")).removeClass("sold")}}function selectTicketOneMode(b,a){for(i in ticketFields){$("#ticket_quantity_"+ticketFields[i]).val("");$("#ticket_block_"+ticketFields[i]).removeClass("active")}$("#ticket_block_"+b).addClass("active");$("#ticket_quantity_"+b).val("1");$("#total_select_num").val("1");if(a){$("#invite_popup").show()}}function handleGroupBuying(){var d=0;var g="";var e=[];for(var c=0;c<ticketFields.length;c++){var f=ticketFields[c];if($("#ticket_quantity_"+f).length==0){continue}var b=parseInt(replaceSymbol($("#ticket_quantity_"+f).val()));if(b==0){continue}if(groupBuyingTicketIds.indexOf(f)<0){showSubmitButtonByType(false);return}d++;e.push(f)}if(d===1&&groupBuyingTicketDiscounts.length>0){g=e[0];var a=$("#ticket_quantity_"+g).val();if(a==1){showSubmitButtonByType(true,calculateGroupPrice(g))}else{showSubmitButtonByType(false)}}else{showSubmitButtonByType(false)}}function calculateGroupPrice(f){var d=$("#buyingGroupWechatMiniProgramFrameImg").attr("data-original");$("#buyingGroupWechatMiniProgramFrameImg").removeClass("img_lazy");if(!d){d=$("#buyingGroupWechatMiniProgramFrameImg").attr("src")}else{$("#buyingGroupWechatMiniProgramFrameImg").removeAttr("data-original")}var b;if(d.indexOf("ticketId")>0){b=d.substr(0,d.lastIndexOf("&"))+"&ticketId="+f}else{b=d+"&ticketId="+f}$("#buyingGroupWechatMiniProgramFrameImg").attr("src",b);var a=groupBuyingTicketIds.indexOf(f);var g=groupBuyingTicketDiscounts[a];if(!g){return}var e=g.ticketPrice;var c=e;if(g!=undefined&&g.rewardType=="0"){c=accSub(e,g.discountPrice)}return"("+c+"￥/人)"+g.groupMinCount}function showSubmitButtonByType(a,b){if(a){if($("#submitBuyButtonGroupBuying span").data("pt")){$("#submitBuyButtonGroupBuying span").html(b)}$("#submitBuyButton").hide();$("#submitBuyButtonGroupBuying").show();$("#submitBuyButtonSingleBuying").show()}else{$("#submitBuyButton").show();$("#submitBuyButtonGroupBuying").hide();$("#submitBuyButtonSingleBuying").hide()}};