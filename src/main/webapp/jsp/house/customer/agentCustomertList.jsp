<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="com.xmbl.ops.enumeration.EnumSourceType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumCustomerStatus" %>
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
<title>客户管理</title>
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
<c:set var="preUrl" value="agentCustomerList
							?id=${ id }&
							usename=${ usename }&
							mobile=${ mobile }&
							nickname=${ nickname }&
							phone=${ phone }&
							gender=${ gender }&
							qq=${ qq }&
							wechat=${ wechat }&
							email=${ email }&
							source=${ source }&
							address=${ address }&
							operator=${ operator }&
							status=${ status }&
							remarks=${ remarks }&
							startTime=${ startTime }&
							endTime=${ endTime }&" />
	<header class="ui-page-header">
	<div class="mini-title">当前位置：客户管理</div>
	</header>
	<article class="container-fluid">
		<form class="form-inline search-form">
	      <div class="form-id">
				<label>客户id</label>
				<input type="text" class="form-control" value="${ id }" name="id"/>
			
				<label>客户姓名</label>
				<input type="text" class="form-control" value="${ usename }" name="usename"/>		
				<label>电话</label>
				<input type="text" class="form-control" value="${ mobile }" name="mobile"/>
				<label>昵 称</label>
				<input type="text" class="form-control" value="${ nickname }" name="nickname"/>
			    <label>手机</label>
				<input type="text" class="form-control" value="${ phone }" name="phone"/>
		        </div>
			<div class="form-group">
		        <label>性别</label>
				<input type="text" class="form-control" value="${ gender }" name="gender"/>
				<label> QQ </label>
				<input type="text" class="form-control" value="${ qq }" name="qq"/>
				<label> 微 信 </label>
				<input type="text" class="form-control" value="${ wechat }" name="wechat"/>
				<label>email</label>
				<input type="text" class="form-control" value="${ email }" name="email"/>	
		
		     </div>
		     <br>
		     <div class="form-group">
				<select class="form-control status">
				<option value="">状态</option>
				<c:set var="EnumCustomerStatuss" value="<%=EnumCustomerStatus.values()%>"/>
						<c:forEach var="EnumCustomerStatus" items="${ EnumCustomerStatuss }">
						<option value="${ EnumCustomerStatus.id }" <c:if test="${ EnumCustomerStatus.id == status }">selected = "selected"</c:if>>${ EnumCustomerStatus.desc }</option>
					</c:forEach>
			    </select></label>
				</select>
				</div>
				<div class="form-group">
				<select class="form-control source">
				<option value="">来源</option>
				 <c:set var="enumSoureTypes" value="<%=EnumSourceType.values()%>"/>
						<c:forEach var="enumSoureType" items="${ enumSoureTypes }">
						<option value="${ enumSoureType.id }" <c:if test="${ enumSoureType.id == soure }">selected = "selected"</c:if>>${ enumSoureType.desc }</option>
						</c:forEach>
			    </select></label>
				</div>
			<div class="form-group">
				<button class="btn btn-primary">搜索</button>
			</div>
			<!--  <div class="form-group">
				<a href="#" class="btn btn-success ml10" id="add-member-btn">创建客户</a>
			</div>-->
			<div class="form-group">
				<a href="<%=basePath%>customer/instertCustomer" class="btn btn-success ml10">创建客户</a>
			</div>
		</form>
		<table class="table table-hover table-bordered table-condensed" >
			<thead>
				<tr class="info">
					<th style="min-width:50px">ID</th>
					<th style="min-width:50px">客户姓名</th>
					 <!-- <th style="min-width:90px">电话</th>-->
					<th style="min-width:90px">客户昵称</th>
					 <!-- <th style="min-width:90px">手机</th>-->
					<th style="min-width:90px">性别</th>
					<th style="min-width:90px">qq</th>
					<th style="min-width:90px">微信</th>
					<th style="min-width:90px">email</th>
					<th style="min-width:90px">来源</th>
					<th style="min-width:90px">当前状态</th>
					<th style="min-width:90px">联系地址</th>
					<th style="min-width:90px">备注</th>
					<th style="min-width:90px">录入时间</th>
					<th style="min-width:90px">录入人</th>
					<th style="min-width:120px">操作</th>
				</tr>
			</thead>
			<tbody id="user-list">
				<c:forEach var="customerInfo" items="${ customerList }">
					<tr data-user-id="${ customerInfo.id }" data-mobile="${ customerInfo.mobile }" data-usename="${ customerInfo.usename }" data-phone="${ customerInfo.phone }" data-nickname="${ customerInfo.nickname }"
					 data-gender="${ customerInfo.gender }" data-qq="${ customerInfo.qq }" data-wechat="${ customerInfo.wechat }" data-email="${ customerInfo.email }"
					 data-source="${ customerInfo.source }" data-status="${ customerInfo.status }" data-address="${ customerInfo.address }" data-remarks="${ customerInfo.remarks }">
					    <td><button class="btn btn-primary btn-xs ml10 edit-btn">${ customerInfo.id }</button></td>
						<td><button class="btn btn-primary btn-xs ml10 edit-btn">${ customerInfo.usename }</button></td>
				 	    <!-- <td>${ customerInfo.mobile }</td> -->
				 	    <td>${ customerInfo.nickname }</td>
				 	    <!-- <td>${ customerInfo.phone }</td>-->
				 	    <td>${ customerInfo.gender }</td>
				 	    <td>${ customerInfo.qq }</td>
				 	    <td>${ customerInfo.wechat }</td>
				 	    <td>${ customerInfo.email }</td>
				 	    <td>${ customerInfo.source }
				 	    <c:set var="enumTypes" value="<%=EnumSourceType.values()%>"/>
							<c:forEach var="enumType" items="${ enumTypes }">
							<c:if test="${ enumType.id == customerInfo.source  }">${ enumType.desc }</c:if>
						</c:forEach>
				 	    </td>
				 	    <td>${ customerInfo.status }
				 	    <c:set var="enumStatuss" value="<%=EnumCustomerStatus.values()%>"/>
							<c:forEach var="enumStatus" items="${ enumStatuss }">
							<c:if test="${ enumStatus.id == customerInfo.status  }">${ enumStatus.desc }</c:if>
						</c:forEach></td>
				 	    <td>${ customerInfo.address }</td>
				 	    <td>${ customerInfo.remarks }</td>
				 	    <td>${ func:formatDate(customerInfo.createtime ) }</td>
				 	    <td>${ customerInfo.operatorName }</td>
						<td>
							<button class="btn btn-primary btn-xs ml10 edit-btn">编辑</button>
							<!--  <button class="btn btn-primary btn-xs ml10 btn-del" data-id="${ customerInfo.id }">删除</button> -->
							<!-- <button class="btn btn-primary btn-xs ml10 reset-password-btn" data-toggle="modal"  data-target=".modal">删除</button> -->
						<a href="<%=basePath%>follow/addFollowCustomer?customerid=${ customerInfo.id }" >跟进</a>
						<a href="<%=basePath%>follow/followCustomeridList?customerid=${ customerInfo.id }" >查看所有跟进</a>
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
			seajs.use(['lib/jquery', 'module/Dialog', 'module/CustomerInfo', 'util/ajaxPromise' ,'util/deleteRecord'], function($, Dialog, userInfo, ajaxPromise, deleteRecord) {
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
				userList.on('click', '.edit-btn', function(e) {
					var el = $(this), data;
					data = el.closest('tr').data();
					userInfo.editMember(data);
				});
				$('#user-list').on('click', '.btn-del', function(e) {
						ajaxPromise({
							type: 'GET',
							dataType: 'json',
							url: window.basePath + 'customer/deleteCustomer',
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
								url: window.basePath + 'customer/deleteCustomer',
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

