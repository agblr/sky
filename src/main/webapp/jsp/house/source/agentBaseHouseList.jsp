<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="com.xmbl.ops.enumeration.EnumPersonStatus" %>
<%@ page import="com.xmbl.ops.enumeration.EnumOfficeTag" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseSourceType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumIsKey" %>
<%@ page import="com.xmbl.ops.enumeration.EnumTradeType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseOrientation" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseRentalPriceType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseProperties" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseDiskstatus" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseIsstatus" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseSealingdisk" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseStatus" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHousePaymentMethod" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseRentalPriceType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseOrientation" %>
<%@ page import="com.xmbl.ops.enumeration.EnumSeeMethod" %>
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
<title>经纪人房源管理</title>
<link type="image/x-icon" rel="shortcut icon" href="<%=basePath %>image/logo/favicon.ico">

<link rel="stylesheet" href="<%=basePath %>css/bootstrap/bootstrap.3.3.5.min.css">
<link rel="stylesheet" href="<%=basePath %>css/common_${ CSS_COMMON_VERSION }.css">
		<script src="<%=basePath %>js/jquery.min.js"></script>
        <script src="<%=basePath %>js/bootstrap.min.js"></script>
<script type="text/javascript">
	var path = '<%=path %>';
	var basePath = '<%=basePath%>';
	(function(){MX=window.MX||{};var g=function(a,c){for(var b in c)a.setAttribute(b,c[b])};MX.load=function(a){var c=a.js,b=c?".js":".css",d=-1==location.search.indexOf("jsDebug"),e=a.js||a.css;-1==e.indexOf("http://")?(e=(a.path||window.basePath)+((c?"js/":"css/")+e)+(!d&&!c?".source":""),b=e+(a.version?"_"+a.version:"")+b):b=e;d||(d=b.split("#"),b=d[0],b=b+(-1!=b.indexOf("?")?"&":"?")+"r="+Math.random(),d[1]&&(b=b+"#"+d[1]));if(c){var c=b,h=a.success,f=document.createElement("script");f.onload=function(){h&&h();f=null};g(f,{type:"text/javascript",src:c,async:"true"});document.getElementsByTagName("head")[0].appendChild(f)}else{var c=b,i=a.success,a=document.createElement("link");g(a,{rel:"stylesheet"});document.getElementsByTagName("head")[0].appendChild(a);g(a,{href:c});i&&(a.onload=function(){i()})}}})();
</script>
<script>
		$(function () { $('.popover-show').popover('show');});
		$(function () { $('.popover-hide').popover('hide');});
		$(function () { $('.popover-destroy').popover('destroy');});
		$(function () { $('.popover-toggle').popover('toggle');});
		$(function () { $(".popover-options a").popover({html : true });});
	</script> 
</head>
<body>
<c:set var="preUrl" value="agentBaseHouseList
							?id=${ id }&
							housename=${ housename }&
							startAcreage=${ startAcreage }&
							endAcreage=${ endAcreage }&
							startRental=${ startRental }&
							endRental=${ endRental }&
							rentalpricetype=${ rentalpricetype }&
							sealingdisk=${ sealingdisk }&
							diskstatus=${ diskstatus }&
							isstatus=${ isstatus }&
							housestatus=${ housestatus }&
							type=${ type }&
							tradetype=${ tradetype }&
							orientation=${ orientation }&
							paymentmethod=${ paymentmethod }&
							seemethod=${ seemethod }&
							source=${ source }&
							operator=${ operator }&
							status=${ status }&
							remarks=${ remarks }&
							startTime=${ startTime }&
							endTime=${ endTime }&" />
	<header class="ui-page-header">
	<div class="mini-title">当前位置：经纪人房源管理</div>
	</header>
	<article class="container-fluid">
		<form class="form-inline search-form">
	      <div class="form-id">
				<label>房源id</label>
				<input type="text" class="form-control" value="${ id }" name="id"/>
				<label>房源名称</label>
				<input type="text" class="form-control" value="${ housename }" name="housename"/>		
			  <div class="form-group">
			  <label>面积</label>
					<input type="text"  class="form-control startAcreage" name="startAcreage" value="${startAcreage}"> -
					<input type="text"  class="form-control endAcreage" name="endAcreage" value="${endAcreage}">
				</div>
				<div class="form-group">
			    <label>租金</label>
					<input type="text"  class="form-control  startRental" name="startRental " value="${startRental}"> -
					<input type="text"  class="form-control  endRental" name="endRental" value="${endRental}">
				<select class="form-control rentalpricetype">
				<option value="">请选择单位</option>
				 <c:set var="enumHouseRentalPrices" value="<%=EnumHouseRentalPriceType.values()%>"/>
						<c:forEach var="enumHouseRentalPrice" items="${ enumHouseRentalPrices }">
						<option value="${ enumHouseRentalPrice.id }" <c:if test="${ enumHouseRentalPrice.id == baseHouseInfo.rentalpricetype }">selected = "selected"</c:if>>${ enumHouseRentalPrice.desc }</option>
						</c:forEach>
			    </select></label>
				</div>
				</br>
			   <div class="form-group">
			    <label>更多条件:</label>
				<select class="form-control sealingdisk">
				<option value="">封盘状态</option>
				 <c:set var="EnumHouseSealingdisks" value="<%=EnumHouseSealingdisk.values()%>"/>
						<c:forEach var="EnumHouseSealingdisk" items="${ EnumHouseSealingdisks }">
						<option value="${ EnumHouseSealingdisk.id }" <c:if test="${ EnumHouseSealingdisk.id == sealingdisk }">selected = "selected"</c:if>>${ EnumHouseSealingdisk.desc }</option>
						</c:forEach>
			    </select></label>
			  <div class="form-group">
				<select class="form-control diskstatus">
				<option value="">公私状态</option>
				<c:set var="EnumHouseDiskstatuss" value="<%=EnumHouseDiskstatus.values()%>"/>
						<c:forEach var="EnumHouseDiskstatus" items="${ EnumHouseDiskstatuss }">
						<option value="${ EnumHouseDiskstatus.id }" <c:if test="${ EnumHouseDiskstatus.id == diskstatus }">selected = "selected"</c:if>>${ EnumHouseDiskstatus.desc }</option>
					</c:forEach>
			    </select></label>
				</div>
				<div class="form-group">
				<select class="form-control isstatus">
				<option value="">请房源状态</option>
				 <c:set var="EnumHouseIsstatuss" value="<%=EnumHouseIsstatus.values()%>"/>
						<c:forEach var="EnumHouseIsstatus" items="${ EnumHouseIsstatuss }">
						<option value="${ EnumHouseIsstatus.id }" <c:if test="${ EnumHouseIsstatus.id == isstatus }">selected = "selected"</c:if>>${ EnumHouseIsstatus.desc }</option>
					</c:forEach>
			    </select></label>
				</div>
						<div class="form-group">
				<select class="form-control housestatus">
				<option value="">租售状态</option>
				<c:set var="EnumHouseStatuss" value="<%=EnumHouseStatus.values()%>"/>
						<c:forEach var="EnumHouseStatus" items="${ EnumHouseStatuss }">
						<option value="${ EnumHouseStatus.id }" <c:if test="${ EnumHouseStatus.id == housestatus }">selected = "selected"</c:if>>${ EnumHouseStatus.desc }</option>
						</c:forEach>
			    </select></label>
				</div>
						<div class="form-group">
				<select class="form-control type">
				<option value="">房源类型</option>
				<c:set var="enumTypes" value="<%=EnumHouseType.values()%>"/>
						<c:forEach var="enumType" items="${ enumTypes }">
						<option value="${ enumType.id }" <c:if test="${ enumType.id == baseHouseInfo.type }">selected = "selected"</c:if>>${ enumType.desc }</option>
						</c:forEach>
			    </select></label>
				</div>
						<div class="form-group">
				<select class="form-control tradetype">
				<option value="">交易类型</option>
				<c:set var="enumTradeTypes" value="<%=EnumTradeType.values()%>"/>
						<c:forEach var="enumTradeType" items="${ enumTradeTypes }">
						<option value="${ enumTradeType.id }" <c:if test="${ enumTradeType.id == baseHouseInfo.tradetype }">selected = "selected"</c:if>>${ enumTradeType.desc }</option>
					</c:forEach>
			    </select></label>
				</div>
						<div class="form-group">
				<select class="form-control orientation">
				<option value="">朝向</option>
				 <c:set var="enumHouseOrientations" value="<%=EnumHouseOrientation.values()%>"/>
						<c:forEach var="enumHouseOrientation" items="${ enumHouseOrientations }">
						<option value="${ enumHouseOrientation.id }" <c:if test="${ enumHouseOrientation.id == baseHouseInfo.orientation }">selected = "selected"</c:if>>${ enumHouseOrientation.desc }</option>
						</c:forEach>
			    </select></label>
			    </select>
				</div>
					<div class="form-group">
				<select class="form-control paymentmethod">
				<option value="">付款方式</option>
					<c:set var="EnumHousePaymentMethods" value="<%=EnumHousePaymentMethod.values()%>"/>
						<c:forEach var="EnumHousePaymentMethod" items="${ EnumHousePaymentMethods }">
						<option value="${ EnumHousePaymentMethod.id }" <c:if test="${ EnumHousePaymentMethod.id == paymentmethod }">selected = "selected"</c:if>>${ EnumHousePaymentMethod.desc }</option>
					</c:forEach>
			    </select></label>
				</select>
				</div>
				<div class="form-group">
				<select class="form-control seemethod">
				<option value="">看房方式</option>
				<c:set var="EnumSeeMethods" value="<%=EnumSeeMethod.values()%>"/>
						<c:forEach var="EnumSeeMethod" items="${ EnumSeeMethods }">
						<option value="${ EnumSeeMethod.id }" <c:if test="${ EnumSeeMethod.id == seemethod }">selected = "selected"</c:if>>${ EnumSeeMethod.desc }</option>
					</c:forEach>
			    </select></label>
				</select>
				</div>
				<div class="form-group">
				<select class="form-control source">
				<option value="">来源</option>
				 <c:set var="enumSoureTypes" value="<%=EnumHouseSourceType.values()%>"/>
						<c:forEach var="enumSoureType" items="${ enumSoureTypes }">
						<option value="${ enumSoureType.id }" <c:if test="${ enumSoureType.id == baseHouseInfo.source }">selected = "selected"</c:if>>${ enumSoureType.desc }</option>
						</c:forEach>
			    </select></label>
				</div>
			<br>
			<div class="form-group">
				<button class="btn btn-primary">搜索</button>
			</div>
			
				<!--<div class="form-group">
				<a href="#" class="btn btn-success ml10" id="add-member-btn">创建房源</a>
			</div>-->
			<div class="form-group">
				<a href="<%=basePath%>base/addBaseHouse" class="btn btn-success ml10">添加房源</a>
			</div>
		</form>
    </div>
		<table id="table" data-toggle="table" class="table table-hover table-bordered table-condensed">
			<thead>
				<tr class="info">
					<th style="min-width:50px">房源ID</th>
				<!--<th style="min-width:50px">房源标题</th> -->
					<th style="min-width:50px">房源租售状态</th>
				    <th style="min-width:50px">房源状态</th>
					<th style="min-width:50px">交易类型</th>
				<!-- 	<th style="min-width:50px">是否有钥匙</th> -->
					<th style="min-width:50px">房源名称</th>
					<th style="min-width:50px">租价(单位)</th>
					<th style="min-width:50px">楼层</th>
					<th style="min-width:50px">房间号</th>
					<th style="min-width:50px">面积(平米)</th>
					<th style="min-width:50px">朝向</th>
					<th style="min-width:50px">付款方式</th>
					<th style="min-width:50px">看房方式</th>
					<th style="min-width:50px">来源</th>
				<!--<th style="min-width:50px">写字楼标签</th> -->
					<th style="min-width:50px">业主</th>
					<!--<th style="min-width:5%">业主电话</th>
					<th style="min-width:90px">物业公司</th>
					<th style="min-width:90px">物业电话</th>  -->
					<th style="min-width:50px">备注说明</th>
					<th style="min-width:50px">录入时间</th>
					<th style="min-width:50px">录入人</th>
					<th style="min-width:50px">最后操作人</th>
					<th style="min-width:50px">操作 </th>
				</tr>
			</thead>
			<tbody id="user-list">
				<c:forEach var="baseHouseInfo" items="${ baseHouseList }">
					<tr data-user-id="${ baseHouseInfo.id }" >
					    <td><a href="<%=basePath%>base/getAgentHousereSources?id=${ baseHouseInfo.id }" >${ baseHouseInfo.id }</a></td>
					  <!-- <td>${ baseHouseInfo.title }</td> -->
					    <td>${ baseHouseInfo.typeStr }</td>
					    <td>${ baseHouseInfo.sealingdiskStr }|${ baseHouseInfo.diskstatusStr }|${ baseHouseInfo.isstatusStr }|${ baseHouseInfo.housestatusStr }</td>
					    <td>${ baseHouseInfo.tradetypeStr }</td>
					  <!--  <td>${ baseHouseInfo.iskey }</td>-->
					    <td><a href="<%=basePath%>base/getHousereSources?id=${ baseHouseInfo.id }" >${ baseHouseInfo.housename }</a></td>
					    <td>${ baseHouseInfo.rental } (${ baseHouseInfo.rentalpricetypeStr })</td>
					    <td>${ baseHouseInfo.floor }</td>
					    <td>${ baseHouseInfo.room }</td>
					    <td>${ baseHouseInfo.acreage }</td>
					    <td>${ baseHouseInfo.orientation }</td>
					    <td>${ baseHouseInfo.paymentmethod }</td>
					    <td>${ baseHouseInfo.seemethod }</td>
					    <td>${ baseHouseInfo.source }</td>
					   <!--  <td>${ baseHouseInfo.officetag }</td> -->
					    <td>${ baseHouseInfo.owner }</td>
					    <!-- <td>${ baseHouseInfo.ownerphone }</td>
					   <td>${ baseHouseInfo.propertycompany }</td>
					    <td>${ baseHouseInfo.propertphone }</td>-->
					    <td>
					   	<p class="popover-options">
		               <a href="#" type="button" class="btn btn-warning" title="<h2>备注说明</h2>"  
		                data-container="body" data-toggle="popover" data-content="
																	 <h4>${ baseHouseInfo.remarks}</h4>">
			          	<c:if test="${baseHouseInfo.remarks.length() > 8 }">${ baseHouseInfo.remarks.substring(0, 8)}... </c:if>
							<c:if test="${baseHouseInfo.remarks.length() <= 8 }">${ baseHouseInfo.remarks} </c:if> 
		             </a>
	                 </p>
					    </td>
				 	    <td>${ func:formatDate(baseHouseInfo.createtime ) }</td>
				 	    <td>${ baseHouseInfo.founderName }</td> 
				 	    <td>${ baseHouseInfo.operatorName }</td>
						<td>
						    <c:if test="${ baseHouseInfo.founder ==  userKey}">
		                    <a href="<%=basePath%>base/editBaseHouse?id=${baseHouseInfo.id}" class="btn btn-primary btn-xs ml10 edit-btn">编辑</a>
							<!-- <button class="btn btn-primary btn-xs ml10 btn-del" data-id="${ baseHouseInfo.id }">删除</button> -->
				            </c:if>
						   <!-- <button class="btn btn-primary btn-xs ml10 reset-password-btn" data-toggle="modal"  data-target=".modal">删除</button> -->
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
			seajs.use(['lib/jquery', 'module/Dialog', 'module/BaseHouseInfo', 'util/ajaxPromise' ,'util/deleteRecord'], function($, Dialog, userInfo, ajaxPromise, deleteRecord) {
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

