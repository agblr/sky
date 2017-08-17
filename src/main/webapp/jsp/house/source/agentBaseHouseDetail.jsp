<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
		<title>查看房源</title>
		<meta http-equiv="keywords" content=""/>
		<meta http-equiv="description" content=""/>
		<link type="image/x-icon" rel="shortcut icon" href="<%=basePath %>image/logo/favicon.ico">
		<link rel="stylesheet" href="<%=basePath %>css/bootstrap/bootstrap.3.3.5.min.css">
		<link href="<%=basePath %>css/bootstrap/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" href="<%=basePath %>css/common_${ CSS_COMMON_VERSION }.css">
		<script src="<%=basePath %>js/jquery.min.js"></script>
        <script src="<%=basePath %>js/bootstrap.min.js"></script>
        <script src="<%=basePath %>/js/module/SeePhone.js"></script>
		<style type="text/css">
			.illustration {
				width: 200px;
				height: 100px;
				background: #999;
			}
			.illustration[src] {
				height: auto;
			}
			.tab-content{
display: none;
}
.tab-content.active{
display: block;
}
#tabs{ 
 width:550px; 
 height:210px; 
 background:white; 
} 
		</style>
		<script type="text/javascript">
			var path = '<%=path %>';
			var basePath = '<%=basePath%>';
			(function(){MX=window.MX||{};var g=function(a,c){for(var b in c)a.setAttribute(b,c[b])};MX.load=function(a){var c=a.js,b=c?".js":".css",d=-1==location.search.indexOf("jsDebug"),e=a.js||a.css;-1==e.indexOf("http://")?(e=(a.path||window.basePath)+((c?"js/":"css/")+e)+(!d&&!c?".source":""),b=e+(a.version?"_"+a.version:"")+b):b=e;d||(d=b.split("#"),b=d[0],b=b+(-1!=b.indexOf("?")?"&":"?")+"r="+Math.random(),d[1]&&(b=b+"#"+d[1]));if(c){var c=b,h=a.success,f=document.createElement("script");f.onload=function(){h&&h();f=null};g(f,{type:"text/javascript",src:c,async:"true"});document.getElementsByTagName("head")[0].appendChild(f)}else{var c=b,i=a.success,a=document.createElement("link");g(a,{rel:"stylesheet"});document.getElementsByTagName("head")[0].appendChild(a);g(a,{href:c});i&&(a.onload=function(){i()});}}})();
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
		<header class="ui-page-header">
			<div class="mini-title">当前位置：房源详细</div>
		</header>
	<article class="container-fluid" id="post-container">
		<div class="form-horizontal">
		      <div class="form-group">
				<div class="col-sm-8">
				</div>
			   </div>
			   </br>
			   <div class="form-group">
				<div class="col-sm-8">
				</div>
			   </div>
			   	<div class="form-group">
			    </div>
			<!--<div class="form-group">
				<a href="#" class="btn btn-success ml10" id="add-member-btn">创建跟进</a>
			  </div>--> 
			   </br>
			  <!--  <div class="form-group">
				 <label class="col-sm-1 control-label">房源标题</label>
				<div class="col-sm-8">
				<textarea class="title form-control" rows="4"></textarea>
				</div>
			   </div> -->
			    <div class="form-group">
				<label class="col-sm-1 control-label">封盘状态:</label>
			    <div class="col-sm-1">
			    <select class="sealingdisk form-control add-content" name="sealingdisk">
                <c:set var="EnumHouseSealingdisks" value="<%=EnumHouseSealingdisk.values()%>"/>
						<c:forEach var="EnumHouseSealingdisk" items="${ EnumHouseSealingdisks }">
						<option value="${ EnumHouseSealingdisk.id }" <c:if test="${ EnumHouseSealingdisk.id == sealingdisk }">selected = "selected"</c:if>>${ EnumHouseSealingdisk.desc }</option>
						</c:forEach>
			    </select></label>
			    </div>
		     	</div>
			   	<div class="form-group">
			   	<label class="col-sm-1 control-label">公私状态:</label>
			    <div class="col-sm-1">
			    <select class="diskstatus form-control add-content" name="diskstatus">
                <c:set var="EnumHouseDiskstatuss" value="<%=EnumHouseDiskstatus.values()%>"/>
						<c:forEach var="EnumHouseDiskstatus" items="${ EnumHouseDiskstatuss }">
						<option value="${ EnumHouseDiskstatus.id }" <c:if test="${ EnumHouseDiskstatus.id == diskstatus }">selected = "selected"</c:if>>${ EnumHouseDiskstatus.desc }</option>
					</c:forEach>
			    </select></label>
			    </div>
			   	<label class="col-sm-1 control-label">房源状态:</label>
			    <div class="col-sm-1">
			    <select class="isstatus form-control add-content" name="isstatus">
                <c:set var="EnumHouseIsstatuss" value="<%=EnumHouseIsstatus.values()%>"/>
						<c:forEach var="EnumHouseIsstatus" items="${ EnumHouseIsstatuss }">
						<option value="${ EnumHouseIsstatus.id }" <c:if test="${ EnumHouseIsstatus.id == isstatus }">selected = "selected"</c:if>>${ EnumHouseIsstatus.desc }</option>
					</c:forEach>
			    </select></label>
			    </div>
			    <label class="col-sm-1 control-label">房源租售状态:</label>
			    <div class="col-sm-1">
			    <select class="housestatus form-control add-content" name="housestatus">
                <c:set var="EnumHouseStatuss" value="<%=EnumHouseStatus.values()%>"/>
						<c:forEach var="EnumHouseStatus" items="${ EnumHouseStatuss }">
						<option value="${ EnumHouseStatus.id }" <c:if test="${ EnumHouseStatus.id == housestatus }">selected = "selected"</c:if>>${ EnumHouseStatus.desc }</option>
						</c:forEach>
			    </select></label>
			    </div>
			   </div>
				<div class="form-group">
			    <label class="col-sm-1 control-label">房源类型:</label>
			    <div class="col-sm-1">
			    <select class="type form-control add-content" name="type">
                <c:set var="enumTypes" value="<%=EnumHouseType.values()%>"/>
						<c:forEach var="enumType" items="${ enumTypes }">
						<option value="${ enumType.id }" <c:if test="${ enumType.id == baseHouseInfo.type }">selected = "selected"</c:if>>${ enumType.desc }</option>
						</c:forEach>
			    </select></label>
			    </div>
			    <label class="col-sm-1 control-label">交易类型:</label>
			    <div class="col-sm-1">
			    <select class="tradetype form-control add-content" name="tradetype">
                <c:set var="enumTradeTypes" value="<%=EnumTradeType.values()%>"/>
						<c:forEach var="enumTradeType" items="${ enumTradeTypes }">
						<option value="${ enumTradeType.id }" <c:if test="${ enumTradeType.id == baseHouseInfo.tradetype }">selected = "selected"</c:if>>${ enumTradeType.desc }</option>
					</c:forEach>
			    </select></label>
			    </div>
				<label class="col-sm-1 control-label">是否有钥匙</label>
				<div class="col-sm-2">
				<c:set var="isKeys" value="<%=EnumIsKey.values()%>" />
					<c:forEach var="isKey" items="${ isKeys }">
					<c:set var="isSelected" value="0" />
						<label class="radio-inline"><input type="radio"
							name="iskey" value="${ isKey.id}"
							<c:if test="${ isSelected == baseHouseInfo.iskey }">checked</c:if>>${ isKey.desc }</label>
					</c:forEach>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label">房源名称:</label>
				<div class="col-sm-2">
					<input type="text" value="${baseHouseInfo.housename}" class="housename form-control"
						maxLength="30" />
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label">租价</label>
				<div class="col-sm-1">
				<input type="text" value="${baseHouseInfo.rental}" class="rental form-control" maxLength="30" />
				</div>
				<div class="col-sm-1">
				<select class="rentalpricetype form-control add-content" name="rentalpricetype">
			    <c:set var="enumHouseRentalPrices" value="<%=EnumHouseRentalPriceType.values()%>"/>
						<c:forEach var="enumHouseRentalPrice" items="${ enumHouseRentalPrices }">
						<option value="${ enumHouseRentalPrice.id }" <c:if test="${ enumHouseRentalPrice.id == baseHouseInfo.rentalpricetype }">selected = "selected"</c:if>>${ enumHouseRentalPrice.desc }</option>
						</c:forEach>
			    </select></label>
			    </div>
				<label class="col-sm-1 control-label">楼层</label>
				<div class="col-sm-1">
				<input type="text" value="${baseHouseInfo.floor}" class="floor form-control" maxLength="30" />
				</div>
				<label class="col-sm-1 control-label">房间号</label>
				<div class="col-sm-1">
				<input type="text" value="${baseHouseInfo.room}" class="room form-control" maxLength="30" />
			    </div>
			    </div>
			<div class="form-group">
				<label class="col-sm-1 control-label">面积</label>
				<div class="col-sm-1">
				<input type="text" value="${baseHouseInfo.acreage}" class="acreage form-control" maxLength="30" />
				</div>
				<div class="col-sm-1">
				<label class="control-label">平米</label>
				</div>
				<label class="col-sm-1 control-label">朝向</label>
				<div class="col-sm-1">
				<select class="orientation form-control add-content" name="orientation">
			    <c:set var="enumHouseOrientations" value="<%=EnumHouseOrientation.values()%>"/>
						<c:forEach var="enumHouseOrientation" items="${ enumHouseOrientations }">
						<option value="${ enumHouseOrientation.id }" <c:if test="${ enumHouseOrientation.id == baseHouseInfo.orientation }">selected = "selected"</c:if>>${ enumHouseOrientation.desc }</option>
						</c:forEach>
			    </select></label>
				</div>
				<label class="col-sm-1 control-label">付款方式</label>
				<div class="col-sm-1">
				<select class="form-control paymentmethod">
				<c:set var="EnumHousePaymentMethods" value="<%=EnumHousePaymentMethod.values()%>"/>
						<c:forEach var="EnumHousePaymentMethod" items="${ EnumHousePaymentMethods }">
						<option value="${ EnumHousePaymentMethod.id }" <c:if test="${ EnumHousePaymentMethod.id == paymentmethod }">selected = "selected"</c:if>>${ EnumHousePaymentMethod.desc }</option>
					</c:forEach>
			    </select></label>
				</select>
				</div>
				</div>
			    <div class="form-group">
				<label class="col-sm-1 control-label">看房方式</label>
				<div class="col-sm-1">
				<select class="form-control seemethod">
				<c:set var="EnumSeeMethods" value="<%=EnumSeeMethod.values()%>"/>
						<c:forEach var="EnumSeeMethod" items="${ EnumSeeMethods }">
						<option value="${ EnumSeeMethod.id }" <c:if test="${ EnumSeeMethod.id == seemethod }">selected = "selected"</c:if>>${ EnumSeeMethod.desc }</option>
					</c:forEach>
			    </select></label>
				</select>
				</div>
				<label class="col-sm-1 control-label">来源</label>
				<div class="col-sm-1">
				<select class="source form-control add-content" name="source">
			    <c:set var="enumSoureTypes" value="<%=EnumHouseSourceType.values()%>"/>
						<c:forEach var="enumSoureType" items="${ enumSoureTypes }">
						<option value="${ enumSoureType.id }" <c:if test="${ enumSoureType.id == baseHouseInfo.source }">selected = "selected"</c:if>>${ enumSoureType.desc }</option>
						</c:forEach>
			    </select></label>
				</div>
				<label class="col-sm-1 control-label">写字楼标签</label>
				<div class="col-sm-2">
				<c:set var="officeTags" value="<%=EnumOfficeTag.values()%>" />
					<c:forEach var="officeTag" items="${ officeTags }">
						<c:set var="isSelected" value="0" />
						<label class="checkbox-inline"><input type="checkbox"
							name="officeTags" value="${ officeTag.id }"
							<c:if test="${ isSelected == 1 }">checked</c:if>>${ officeTag.desc }</label>
					</c:forEach>
				</div>
			</div>
				<div class="form-group">
				<label class="col-sm-1 control-label">业主:</label>
				<div class="col-sm-1">
					<input type="text" value="${baseHouseInfo.owner}" class="owner form-control"
						maxLength="30" />
				</div>
				<label class="col-sm-1 control-label">业主电话:</label>
				<div class="col-sm-2">
				 	  <p class="popover-options">
		              <!-- <a href="<%=basePath%>base/getHouserePhone?id=${ baseHouseInfo.id }" type="button" class="btn btn-warning" title="<h2>电话</h2>"  
		                data-container="body" data-toggle="popover" data-content="
																	 <h4>${baseHouseInfo.ownerphone}</h4>">
						查看电话				
									 -->
				      <c:if test="${ baseHouseInfo.sealingdisk ==  0}">
		                  <a href="javascript:void(0)" type="button" class="btn btn-danger see-phone" title="<h2>电话</h2>"  see-id="${baseHouseInfo.id}"
		                data-container="body" data-toggle="popover" data-content="
						<h4>${baseHouseInfo.ownerphone}</h4>">
						查看电话	
		             </a>
				       </c:if>
				       <c:if test="${ baseHouseInfo.sealingdisk ==  1}">
				         <c:if test="${ baseHouseInfo.founder ==  userKey}">
		                <a href="javascript:void(0)" type="button" class="btn btn-danger see-phone" title="<h2>电话</h2>"  see-id="${baseHouseInfo.id}"
		                data-container="body" data-toggle="popover" data-content="
						<h4>${baseHouseInfo.ownerphone}</h4>">
						查看电话	
		                </a>
		                </c:if>
				       </c:if>
					
	                 </p>
				</div>
				</div>
			<div class="form-group">
				 <label class="col-sm-1 control-label">备注说明</label>
				<div class="col-sm-4">
				<textarea class="remarks form-control" rows="4">${baseHouseInfo.remarks}</textarea>
				</div>
			</div>
	
			<!-- <div class="form-group">
				<label class="col-sm-1 control-label">物业公司:</label>
				<div class="col-sm-2">
					<input type="text" value="" class="propertycompany form-control"
						maxLength="30" />
				</div>
				<label class="col-sm-1 control-label">物业电话:</label>
				<div class="col-sm-2">
					<input type="text" value="" class="propertphone form-control"
						maxLength="30" />
				</div>
			</div> -->
	</article>
		<footer class="text-center ui-page-footer">
			<a href="<%=basePath%>follow/addFollowHouse?houseid=${ baseHouseInfo.id }" class="btn btn-success min-w100 ml20">跟进</a>
			<!--  <a class="btn btn-default min-w100" href="${referer }" onclick="history.go(-1)">返回</a>-->
			<input class="btn btn-primary min-w100 ml20" type="button" name="button1" id="button1" value="返回" onclick="history.go(-1)">
			<!--  <button class="btn btn-primary min-w100 ml20" id="confirm-btn">提交</button>-->
			
		</footer>
		<div id="image-input" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button data-dismiss="modal" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
						<h4 class="modal-title"></h4>
					</div>
					<div class="modal-body"></div>
					<div class="modal-footer"></div>
				</div>
			</div>
		</div>
	<ul class="nav nav-pills">
	<li class="active"><a href="#">该房源浏览总次数:<span class="badge">${ seeCNT } 次数</span> 显示全部浏览记录</a></li>
	<li><a href="#"><span class="badge">只显示最近10条记录</span></a></li>
	<li class="active"><a href="<%=basePath%>follow/followHouseList?houseid=${ baseHouseInfo.id }"><span class="badge">查看所有跟进</span></a></li>
   </ul>
	<div class="mini-title"></div>
		<table class="table table-hover table-bordered table-condensed" >
			<thead>
				<tr class="info">
					<th style="min-width:50px">浏览时间</th>
					<th style="min-width:50px">浏览人</th>
					<th style="min-width:50px">操作</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="operatorLogInfo" items="${ operatorLogList }">
					<tr>
				 	    <td>${ operatorLogInfo.createtime }</td>
				 	    <td>${ operatorLogInfo.operatorName }</td>
				 	    <td>${ operatorLogInfo.content }</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>	
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
	<script>
    $(document).ready(function () {
        var id = ${baseHouseInfo.id};
        $(".see-phone").click(function () {
    //    $('a').addClass('disabled'); // Disables visually  
//$('a').prop('disabled', true); // Does nothing  
//$('a').attr('disabled', 'disabled'); // Disables visually  
            SeePhone.see($(this));
        });
    });
</script>
<script type="text/javascript">
	MX.load({
		js: 'lib/sea',
		version: '${ JS_LIB_SEA_VERSION }',
		success: function() {
			seajs.use(['lib/jquery', 'module/Dialog', 'module/FollowHouseInfo', 'util/ajaxPromise' ,'util/deleteRecord'], function($, Dialog, FollowHouseInfo, ajaxPromise, deleteRecord) {
				// 加载小组列表
				var userList, teamId = $('#team-id'), role = $('#role'), identity = $('#identity'), dialog = new Dialog('modal-dialog');
				//userInfo.initRole(role, '${ groupName }');
				// 创建用户
				$('#add-member-btn').on('click', function(e) {
					var el = $(this);
					e.preventDefault();
					FollowHouseInfo.addFollowHouse(el.attr('id'));
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
				// 查看电话
				userList.on('click', '.see-phone-btn', function(e) {
					var el = $(this), id;
					id = el.closest('tr').data('user-id');
					dialog.show({
						sizeClass: 'modal-sm',
					   	title: '电话',
					  	content: 'id',
						source: 'reset-password',
						renderCall: function() {
							var Self = this;
							Self._confirm.text('确定');
					    },
						confirm: function(e) {
							var Self = this;
							ajaxPromise({
								url: window.basePath + 'base/getHouserePhone',
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
