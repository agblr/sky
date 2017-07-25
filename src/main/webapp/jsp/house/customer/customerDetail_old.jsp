<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
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
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<title>客户详细</title>
		<meta http-equiv="keywords" content=""/>
		<meta http-equiv="description" content=""/>
		<link type="image/x-icon" rel="shortcut icon" href="<%=basePath %>image/logo/favicon.ico">
		<link rel="stylesheet" href="<%=basePath %>css/bootstrap/bootstrap.3.3.5.min.css">
		<link href="<%=basePath %>css/bootstrap/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" href="<%=basePath %>css/common_${ CSS_COMMON_VERSION }.css">
		<script type="text/javascript">
			var path = '<%=path %>';
			var basePath = '<%=basePath%>';
			(function(){MX=window.MX||{};var g=function(a,c){for(var b in c)a.setAttribute(b,c[b])};MX.load=function(a){var c=a.js,b=c?".js":".css",d=-1==location.search.indexOf("jsDebug"),e=a.js||a.css;-1==e.indexOf("http://")?(e=(a.path||window.basePath)+((c?"js/":"css/")+e)+(!d&&!c?".source":""),b=e+(a.version?"_"+a.version:"")+b):b=e;d||(d=b.split("#"),b=d[0],b=b+(-1!=b.indexOf("?")?"&":"?")+"r="+Math.random(),d[1]&&(b=b+"#"+d[1]));if(c){var c=b,h=a.success,f=document.createElement("script");f.onload=function(){h&&h();f=null};g(f,{type:"text/javascript",src:c,async:"true"});document.getElementsByTagName("head")[0].appendChild(f)}else{var c=b,i=a.success,a=document.createElement("link");g(a,{rel:"stylesheet"});document.getElementsByTagName("head")[0].appendChild(a);g(a,{href:c});i&&(a.onload=function(){i()});}}})();
		</script>
</head>
<body>
<c:set var="preUrl" value="blackAgentInfoList
							?id=${ id }
							&name=${ name }
							&phone=${ phone }
							&remarks=${ remarks }&" />
	<header class="ui-page-header">
		<div class="mini-title">当前位置：客户详细</div>
	</header>
	<article class="container-fluid">
		<form class="form-inline search-form">

			<div class="form-group">
				<label>ID</label>
				<input type="text" class="form-control" value="${ id }" name="id">
			</div>
           <div class="form-group">
				<label>中介姓名</label>
				<input type="text" class="form-control" value="${ name }" name="name">
			</div>
			<div class="form-group">
				<label>中介电话</label>
				<input type="text" class="form-control" value="${ phone }" name="phone">
			</div>
			<div class="form-group">
				<label>备注说明</label>
				<input type="text" class="form-control" value="${ remarks }" name="remarks">
			</div>
			<div class="form-group">
				<button class="btn btn-primary">搜索</button>
			</div>
			<div class="form-group">
				<a href="#" class="btn btn-success ml10" id="add-blackAgent" data-toggle="modal" data-target=".modal">跟进</a>
			</div>
		</form>
		<table class="table table-hover table-bordered table-condensed">
			<thead>
				<tr class="info">
					<th>ID</th>
					<th>中介姓名</th>
					<th>中介电话</th>
					<th>备注说明</th>
					<th>操作人</th>
					<th>操作时间</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody id="blackAgentInfo-list">
				<c:forEach var="blackAgentInfo" items="${ blackAgentList }">
				<tr data-id="${ blackAgentInfo.id }" data-name="${ blackAgentInfo.name }" data-phone="${ blackAgentInfo.phone }"  data-remarks="${ blackAgentInfo.remarks }">
					<td>${ blackAgentInfo.id }</td>
					<td>${ blackAgentInfo.name }</td>
					<td>${ blackAgentInfo.phone }</td>
					<td>${ blackAgentInfo.remarks }</td>
					<td>${ blackAgentInfo.operator }</td>
					<td>${ func:formatDate(blackAgentInfo.createtime) }</td>
					<td>
						<button class="btn btn-primary btn-xs btn-edit" data-toggle="modal" data-target=".modal">编辑</button>
						<button class="btn btn-primary btn-xs ml10 btn-del">删除</button>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</article>
	<%@ include file = "../../inc/newpage.jsp" %>
	<div id="modal-dialog" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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
				seajs.use(['lib/jquery', 'module/BlackAgentInfo', 'util/deleteRecord'], function($, BlackAgentInfo, deleteRecord) {
					$('#add-blackAgent').on('click', function(e) {
						BlackAgentInfo.addBlackAgent('add-BlackAgent');
					});
					$('#blackAgentInfo-list').on('click', '.btn-edit', function(e) {
						var el = $(this), row = el.closest('tr');
						BlackAgentInfo.editBlackAgent(row.data());
					});
					deleteRecord('blackAgentInfo-list', {
						url: window.basePath + '/black/deleteBlackAgent',
						idAttribute: 'id'
					});
				});
			}
		});
	</script>
</body>
</html>

