<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="com.xmbl.ops.enumeration.EnumPersonStatus" %>
<%@ taglib uri="/WEB-INF/tlds/Functions" prefix="func"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!doctype html>
<html lang="zh-CN">
<%@ include file = "../../inc/version.jsp" %>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">    
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<title>房源跟进管理</title>
<link type="image/x-icon" rel="shortcut icon" href="<%=basePath %>image/logo/favicon.ico">

<link rel="stylesheet" href="<%=basePath %>css/bootstrap/bootstrap.3.3.5.min.css">
<link rel="stylesheet" href="<%=basePath %>css/common_${ CSS_COMMON_VERSION }.css">
<script type="text/javascript">
	var path = '<%=path %>';
	var basePath = '<%=basePath%>';
	(function(){MX=window.MX||{};var g=function(a,c){for(var b in c)a.setAttribute(b,c[b])};MX.load=function(a){var c=a.js,b=c?".js":".css",d=-1==location.search.indexOf("jsDebug"),e=a.js||a.css;-1==e.indexOf("http://")?(e=(a.path||window.basePath)+((c?"js/":"css/")+e)+(!d&&!c?".source":""),b=e+(a.version?"_"+a.version:"")+b):b=e;d||(d=b.split("#"),b=d[0],b=b+(-1!=b.indexOf("?")?"&":"?")+"r="+Math.random(),d[1]&&(b=b+"#"+d[1]));if(c){var c=b,h=a.success,f=document.createElement("script");f.onload=function(){h&&h();f=null};g(f,{type:"text/javascript",src:c,async:"true"});document.getElementsByTagName("head")[0].appendChild(f)}else{var c=b,i=a.success,a=document.createElement("link");g(a,{rel:"stylesheet"});document.getElementsByTagName("head")[0].appendChild(a);g(a,{href:c});i&&(a.onload=function(){i()})}}})();
</script>
 
</head>
<body>
<c:set var="preUrl" value="followCustomeridList
							?id=${ id }&
							customerid=${ customerid }&
							content=${ content }&
							operator=${ operator }&
							status=${ status }&
							remarks=${ remarks }&
							startTime=${ startTime }&
							endTime=${ endTime }&" />
	<header class="ui-page-header">
	<div class="mini-title">当前位置：客户跟进管理</div>
	</header>
	<article class="container-fluid">
		<form class="form-inline search-form">
	      <div class="form-id">
				<label>客户id</label>
				<input type="text" class="form-control" value="${ customerid }" name="customerid"/>
				<label>跟进内容</label>
				<input type="text" class="form-control" value="${ content }" name="content"/>	
				<label>跟进人</label>
				<input type="text" class="form-control" value="${ operator }" name="operator"/>	
			</div>
			 <div class="form-group">
				<label>跟进时间</label>
				<input class="form-control form-date" type="text" value="${ startTime }" name="startTime" data-date-format="yyyy-mm-dd 00:00:00">~<input class="form-control form-date" type="text" value="${ endTime }" name="endTime" data-date-format="yyyy-mm-dd 23:59:59"/>
			     </div>
			<div class="form-group">
				<button class="btn btn-primary">搜索</button>
			</div>
			
				<!--<div class="form-group">
				<a href="#" class="btn btn-success ml10" id="add-member-btn">创建房源</a>
			</div>-->
		</form>
    </div>
		<table id="table" data-toggle="table" class="table table-hover table-bordered table-condensed">
			<thead>
				<tr class="info">
					<th style="min-width:50px">跟进ID</th>
					<th style="min-width:50px">跟进时间</th>
					<th style="min-width:50px">跟进方式</th>
					<th style="min-width:50px">客户id</th>
					<th style="min-width:50px">跟单人</th>
					<th style="min-width:50px">跟进内容</th>
					<th style="min-width:50px">操作 </th>
				</tr>
			</thead>
			<tbody id="user-list">
				<c:forEach var="followCustomerInfo" items="${ followCustomerList }">
					<tr data-user-id="${ followCustomerInfo.id }" >
					<td>${ followCustomerInfo.id }</td>
					 <td>${ func:formatDate(followCustomerInfo.createtime) }</td>
					<td>${ followCustomerInfo.followtypeStr }</td>
					  <td><a href="<%=basePath%>customer/getCustomer?id=${ followCustomerInfo.customerid }" >${ followCustomerInfo.customerid }</a></td>
					  <td>${ followCustomerInfo.operatorName}</td>
					  <td>${ followCustomerInfo.content }</td>
					  <td>
					
					  <a href="<%=basePath%>follow/followCustomerList?customerid=${ followCustomerInfo.customerid }" >查看所有跟进</a>
					  </td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</article>
	<%@ include file = "../../inc/newpage.jsp" %>
	<div id="modal-dialog" class="modal fade"  tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
					<h4 class="modal-title"></h4>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer"></div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
<script type="text/javascript">
	MX.load({
		js: 'lib/sea',
		version: '${ JS_LIB_SEA_VERSION }',
		success: function() {
			seajs.use(['lib/jquery', 'module/Dialog', 'module/FollowHouseInfo', 'util/ajaxPromise' ,'util/deleteRecord'], function($, Dialog, userInfo, ajaxPromise, deleteRecord) {
				// 加载小组列表
				var userList, teamId = $('#team-id'), role = $('#role'), identity = $('#identity'), dialog = new Dialog('modal-dialog');
				//userInfo.initRole(role, '${ groupName }');
				// 创建用户
				$('#add-member-btn').on('click', function(e) {
					var el = $(this);
					e.preventDefault();
					userInfo.addMember(el.attr('id'));
				});
				userList = $('#user-list');
				// 编辑信息
			//	userList.on('click', '.edit-btn', function(e) {
			//		var el = $(this), data;
			//		data = el.closest('tr').data();
			//		userInfo.editMember(data);
			//	});
				$('#user-list').on('click', '.btn-del', function(e) {
						ajaxPromise({
							type: 'GET',
							dataType: 'json',
							url: window.basePath + 'base/deleteBaseHouse',
							data: {
								id: $(this).data('id')
							}
						}).then(function(obj) {
							alert(obj.msg);
							window.location.reload();
						});
					});
				// 重置密码
				userList.on('click', '.reset-password-btn', function(e) {
					var el = $(this), id;
					id = el.closest('tr').data('user-id');
					dialog.show({
						sizeClass: 'modal-sm',
						title: '删除',
						content: '确定要删除吗？',
						source: 'reset-password',
						renderCall: function() {
							var Self = this;
							Self._confirm.text('确定');
						},
						confirm: function(e) {
							var Self = this;
							ajaxPromise({
								url: window.basePath + 'base/deleteBaseHouse',
								type: 'GET',
								data: {
									id: id
								},
								dataType: 'json'
							}).then(function(data) {
								Self.enableConfirm();
								alert('删除成功');
								Self.hide();
							}, function() {
								Self.enableConfirm();
							});
						}
					});
				});
			});
		}
	});
</script>
</body>
</html>

