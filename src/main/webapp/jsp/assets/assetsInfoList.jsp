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
<html lang="zh-CN">
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
<c:set var="preUrl" value="assetsInfoList
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
				<label>物品名称</label>
				<input type="text" class="form-control" value="${ proName }" name="proName">
			</div>
			<div class="form-group">
				<label>物品编号</label>
				<input type="text" class="form-control" value="${ proNum }" name="proNum">
			</div>
			<div class="form-group">
				<label>使用人</label>
				<input type="text" class="form-control" value="${ userNames }" name="userNames">
			</div>
			<div class="form-group">
				<label>物品分类</label>
				<select name="proType" class="form-control">
					<option value="">全部</option>
					<c:set var="enumProTypes" value="<%= EnumProType.values() %>"/>
					<c:forEach var="enumProType" items="${ enumProTypes }">
					<option value="${ enumProType.id }" <c:if test="${ enumProType.id == proType }">selected = "selected"</c:if>>${ enumProType.desc }</option>
					</c:forEach>
				</select>
			</div>
			<div class="form-group">
				<label>物品状态</label>
				<select name="status" class="form-control">
					<option value="">全部</option>
					<c:set var="enumAssets" value="<%= EnumAssetsStatus.values() %>"/>
					<c:forEach var="enumAsset" items="${ enumAssets }">
					<option value="${ enumAsset.id }" <c:if test="${ enumAsset.id == status }">selected = "selected"</c:if>>${ enumAsset.desc }</option>
					</c:forEach>
				</select>
			</div>
			<div class="form-group">
				<label>购买时间</label>
				<input type="text" class="form-control form-date" value="${ startTime }" data-date-format="yyyy-mm-dd 00:00:00" size="18" name="startTime">~<input type="text" class="form-control form-date" value="${ endTime }" data-date-format="yyyy-mm-dd 23:59:59" size="18" name="endTime">
			</div>
			<div class="form-group">
				<button class="btn btn-primary">搜索</button>
			</div>
			<div class="form-group">
				<a href="#" class="btn btn-success ml10" id="add-asset-btn" data-toggle="modal" data-target=".modal">添加物品</a>
			</div>
		</form>
		<table class="table table-hover table-bordered table-condensed">
			<thead>
				<tr class="info">
					<th class="min-w50">id</th>
					<th class="min-w50">名称</th>
					<th class="min-w90">编号</th>
					<th class="min-w90">配置</th>
					<th class="min-w40">分类</th>
					<th class="min-w40">单位</th>
					<th class="min-w40">价格(元)</th>
					<th class="min-w90">购买时间</th>
					<th class="min-w90">购买渠道</th>
					<th class="min-w60">使用人</th>
					<th class="min-w90">所属部门</th>
					<th class="min-w90">使用地点</th>
					<th class="min-w60">申请人</th>
					<th class="min-w60">归属人</th>
					<th class="min-w90">状态</th>
					<th class="min-w90">备注</th>
					<th class="min-w60">操作人</th>
					<th class="min-w150">操作</th>
				</tr>
			</thead>
			<tbody id="asset-list">
				<c:forEach var="assetsInfo" items="${ assetsInfoList }">
				<tr data-id="${ assetsInfo.id }" data-name="${ assetsInfo.proname }" data-num="${ assetsInfo.pronum }" data-config="${ assetsInfo.proconfig }" data-remark="${ assetsInfo.prodes }" data-category="${ assetsInfo.protype }" data-status="${ assetsInfo.status }" data-price="${ assetsInfo.proprice }" data-purchase-time="${ func:formatDate(assetsInfo.buyTime) }" data-purchase-channel="${ assetsInfo.channel }" data-user="${ assetsInfo.useRecord.userName }" data-user-base="${ assetsInfo.useRecord.useAddress }" data-applicant="${ assetsInfo.useRecord.applicationName }" data-owner="${ assetsInfo.useRecord.adscriptionName }" data-department="${ assetsInfo.department } " data-unit="${ assetsInfo.unit } ">
					<td>${ assetsInfo.id}</td>
					<td>${ assetsInfo.proname }</td>
					<td>${ assetsInfo.pronum }</td>
					<td>${ assetsInfo.proconfig }</td>
					<td>${ assetsInfo.protypeForStr }</td>
					<td>${ assetsInfo.unit }</td>
					<td>${ assetsInfo.proprice }</td>
					<td>${ func:formatDateYMD(assetsInfo.buyTime , "YYYY-MM-dd") }</td>
					<td>${ assetsInfo.channel }</td>
					<td>${ assetsInfo.useRecord.userName }</td>
					<td>${ assetsInfo.department }</td>
					<td>${ assetsInfo.useRecord.useAddress }</td>
					<td>${ assetsInfo.useRecord.applicationName }</td>
					<td>${ assetsInfo.useRecord.adscriptionName }</td>
					<td>${ assetsInfo.statusForStr}</td>
					<td>${ assetsInfo.prodes }</td>
					<td>${ assetsInfo.operator }</td>
					<td>
						<button class="btn btn-primary btn-xs edit-asset" data-toggle="modal" data-target=".modal">编辑</button>
						<button class="btn btn-primary btn-xs ml10 clone-asset" data-toggle="modal" data-target=".modal">复制</button>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</article>
	<%@ include file = "../inc/newpage.jsp" %>
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
			seajs.use(['lib/jquery', 'util/bootstrap.datetimepicker.zh-CN', 'module/AssetInfo'], function($, datetimepicker, AssetInfo) {
				var assetList = $('#asset-list');
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
				$('#add-asset-btn').on('click', function(e) {
					e.preventDefault();
					AssetInfo.addAsset($(this).attr('id'));
				});
				assetList.on('click', '.edit-asset', function(e) {
					var row = $(this).closest('tr');
					AssetInfo.editAsset(row.data());
				}).on('click', '.clone-asset', function(e) {
					var row = $(this).closest('tr');
					AssetInfo.cloneAsset(row.data());
				});
			});
		}
	});
</script>
</body>
</html>

