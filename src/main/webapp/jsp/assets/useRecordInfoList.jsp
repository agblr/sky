<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.xuexibao.ops.enumeration.EnumRole" %>
<%@ page import="com.xuexibao.ops.enumeration.EnumTiKuPersonStatus" %>
<%@ page import="com.xuexibao.ops.enumeration.EnumProType" %>
<%@ page import="com.xuexibao.ops.enumeration.EnumAssetsStatus" %>
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
<html lang="zh-cn">
<%@ include file = "../inc/version.jsp" %>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<title>资产列表</title>
<link type="image/x-icon" rel="shortcut icon" href="<%=basePath %>image/logo/favicon.ico">
<link rel="stylesheet" href="<%=basePath %>css/bootstrap/bootstrap.3.3.5.min.css">
<link href="<%=basePath %>css/bootstrap/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="<%=basePath %>css/common_${ CSS_COMMON_VERSION }.css">
<style type="text/css">
	.modal-add-book>* {
		margin-top: 13px;
	}
	.modal-add-book>*:first-child {
		margin-top: 0;
	}
	.modal-add-book .row {
		max-height: 68px;
		overflow-y: scroll;
		margin-left: 37px;
	}
</style>
<script type="text/javascript">
	var path = '<%=path %>';
	var basePath = '<%=basePath%>';
	(function(){MX=window.MX||{};var g=function(a,c){for(var b in c)a.setAttribute(b,c[b])};MX.load=function(a){var c=a.js,b=c?".js":".css",d=-1==location.search.indexOf("jsDebug"),e=a.js||a.css;-1==e.indexOf("http://")?(e=(a.path||window.basePath)+((c?"js/":"css/")+e)+(!d&&!c?".source":""),b=e+(a.version?"_"+a.version:"")+b):b=e;d||(d=b.split("#"),b=d[0],b=b+(-1!=b.indexOf("?")?"&":"?")+"r="+Math.random(),d[1]&&(b=b+"#"+d[1]));if(c){var c=b,h=a.success,f=document.createElement("script");f.onload=function(){h&&h();f=null};g(f,{type:"text/javascript",src:c,async:"true"});document.getElementsByTagName("head")[0].appendChild(f)}else{var c=b,i=a.success,a=document.createElement("link");g(a,{rel:"stylesheet"});document.getElementsByTagName("head")[0].appendChild(a);g(a,{href:c});i&&(a.onload=function(){i()})}}})();
</script>
</head>
<body>
<c:set var="preUrl" value="useRecordInfoList
							?proName=${ proName }
							&proNum=${ proNum }
							&status=${ status }
							&userNames=${ userNames }
							&proType=${ proType }
							&startTime=${ startTime }
							&endTime=${ endTime }&" />
	<header class="ui-page-header">
		<div class="mini-title">当前位置：资产列表</div>
	</header>
	<article class="container-fluid">
		<form class="form-inline search-form">
			<div class="form-group">
				<label>使用人</label>
				<input type="text" class="form-control" value="${ userNames }" name="userNames">
			</div>
			<div class="form-group">
				<label>使用状态</label>
				<select name="status" class="form-control">
					<option value="">全部</option>
					<c:set var="enumAssets" value="<%= EnumAssetsStatus.values() %>"/>
					<c:forEach var="enumAsset" items="${ enumAssets }">
					<option value="${ enumAsset.id }" <c:if test="${ enumAsset.id == status }">selected = "selected"</c:if>>${ enumAsset.desc }</option>
					</c:forEach>
				</select>
			</div>
			<div class="form-group">
				<label>开始使用时间</label>
				<input type="text" class="form-control form-date" value="${ startTime }" data-date-format="yyyy-mm-dd 00:00:00" size="18" name="startTime">~<input type="text" class="form-control form-date" value="${ endTime }" data-date-format="yyyy-mm-dd 23:59:59" size="18" name="endTime">
			</div>
			<div class="form-group">
				<button class="btn btn-primary">搜索</button>
			</div>
		</form>
		<table class="table table-hover table-bordered table-condensed">
			<thead>
				<tr class="info">
					<th class="min-w50">记录id</th>
					<th class="min-w50">使用人</th>
					<th class="min-w50">使用开始时间</th>
					<th class="min-w50">使用结束时间</th>
					<th class="min-w50">申请人</th>
					<th class="min-w50">归属人</th>
					<th class="min-w50">使用地点</th>
					<th class="min-w50">物品名称</th>
					<th class="min-w90">物品编号</th>
					<th class="min-w90">使用状态</th>
					<th class="min-w90">操作人</th>
				</tr>
			</thead>
			<tbody id="book-list">
				<c:forEach var="useRecordInfo" items="${ useRecordList }">
				<tr>
					<td>${ useRecordInfo.id}</td>
					<td>${ useRecordInfo.userName}</td>
					<td>${ func:formatDate(useRecordInfo.startTime) }</td>
					<td>${ func:formatDate(useRecordInfo.endTime) }</td>
					<td>${ useRecordInfo.applicationName}</td>
					<td>${ useRecordInfo.adscriptionName}</td>
					<td>${ useRecordInfo.useAddress}</td>
			 		<td>${ useRecordInfo.assets.proname }</td>
			 		<td>${ useRecordInfo.assets.pronum }</td>
					<td>${ useRecordInfo.useStatusForStr}</td>
					<td>${ useRecordInfo.operators}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</article>
	<%@ include file = "../inc/newpage.jsp" %>
<script type="text/javascript">
	MX.load({
		js: 'lib/sea',
		version: '${ JS_LIB_SEA_VERSION }',
		success: function() {
			seajs.use(['lib/jquery', 'util/bootstrap.datetimepicker.zh-CN'], function($, datetimepicker) {
				$('.form-date').datetimepicker({
					language: 'zh-CN',/*加载日历语言包，可自定义*/
					weekStart: 1,
					todayBtn:  1,
					autoclose: 1,
					todayHighlight: 1,
					forceParse: 0,
					minView: 2,
					showMeridian: 1
				});
			});
		}
	});
</script>
</body>
</html>

