/*
	*获取时间函数
	*
*/
var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();//获取月份中的天数
var week=date.getDay();//获取星期
var realWeek;
		switch(week){
	case 1:realWeek="星期一";
	break;
	case 2:realWeek="星期二";
	break;
	case 3:realWeek="星期三";
	break;
	case 4:realWeek="星期四";
	break;
	case 5:realWeek="星期五";
	break;
	case 6:realWeek="星期六";
	break;
	case 0:realWeek="星期日";
	break;
				}
var  today=year+"年"+month+"月"+day+"日"+"　"+realWeek;

$("#timeDiv").html(today);//jquery专属改变inner的方法，原生的用innerHTML
$("#timeDiv").css({"font-family":"宋体,Arial,sans-serif"
					,"color":"rgb(102,102,102)"
});
/*
 * @author:liujie
 * 首页大图滚动
 * 
 */
$(function(){
		$("#focus").hover(function(){$("#focus-prev,#focus-next").show();},function(){$("#focus-prev,#focus-next").hide();});
		$("#focus").slide({ 
			mainCell:"#focus-bar-box ul",
			targetCell:"#focus-title a",
			titCell:"#focus-num a",
			prevCell:"#focus-prev",
			nextCell:"#focus-next",
			effect:"left",
			easing:"easeOutQuad",
			//easing:"fade",
			autoPlay:true,
			delayTime:300
		});
});
/*
 * 加入收藏，设为首页代码
 */

function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("您的浏览器不支持此方法，加入收藏失败，请使用Ctrl+D进行手动添加");
        }
    }
}
//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}
function showWx(){
	$("#wx").dialog({
		title:"扫描下方二维码,获取最新动态",
		width:385,
		show:"clip",
		hide:"clip",
		closeText : '关闭'
	});
}