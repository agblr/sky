<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="com.xmbl.ops.enumeration.EnumOfficeTag" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumHouseSourceType" %>
<%@ page import="com.xmbl.ops.enumeration.EnumIsKey" %>
<%@ page import="com.xmbl.ops.enumeration.EnumTradeType" %>

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
		<title>新增房源</title>
		<meta http-equiv="keywords" content=""/>
		<meta http-equiv="description" content=""/>
		<link type="image/x-icon" rel="shortcut icon" href="<%=basePath %>image/logo/favicon.ico">
		<link rel="stylesheet" href="<%=basePath %>css/bootstrap/bootstrap.3.3.5.min.css">
		<link href="<%=basePath %>css/bootstrap/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" href="<%=basePath %>css/common_${ CSS_COMMON_VERSION }.css">
		<style type="text/css">
			.illustration {
				width: 200px;
				height: 100px;
				background: #999;
			}
			.illustration[src] {
				height: auto;
			}
		</style>
		<script type="text/javascript">
			var path = '<%=path %>';
			var basePath = '<%=basePath%>';
			(function(){MX=window.MX||{};var g=function(a,c){for(var b in c)a.setAttribute(b,c[b])};MX.load=function(a){var c=a.js,b=c?".js":".css",d=-1==location.search.indexOf("jsDebug"),e=a.js||a.css;-1==e.indexOf("http://")?(e=(a.path||window.basePath)+((c?"js/":"css/")+e)+(!d&&!c?".source":""),b=e+(a.version?"_"+a.version:"")+b):b=e;d||(d=b.split("#"),b=d[0],b=b+(-1!=b.indexOf("?")?"&":"?")+"r="+Math.random(),d[1]&&(b=b+"#"+d[1]));if(c){var c=b,h=a.success,f=document.createElement("script");f.onload=function(){h&&h();f=null};g(f,{type:"text/javascript",src:c,async:"true"});document.getElementsByTagName("head")[0].appendChild(f)}else{var c=b,i=a.success,a=document.createElement("link");g(a,{rel:"stylesheet"});document.getElementsByTagName("head")[0].appendChild(a);g(a,{href:c});i&&(a.onload=function(){i()});}}})();
		</script>
	</head>
	<body>
		<header class="ui-page-header">
			<div class="mini-title">当前位置：新增房源</div>
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
						<option value="${ enumType.id }" <c:if test="${ enumType.id == type }">selected = "selected"</c:if>>${ enumType.desc }</option>
						</c:forEach>
			    </select></label>
			    </div>
			    <label class="col-sm-1 control-label">交易类型:</label>
			    <div class="col-sm-1">
			    <select class="tradetype form-control add-content" name="tradetype">
                <c:set var="enumTradeTypes" value="<%=EnumTradeType.values()%>"/>
						<c:forEach var="enumTradeType" items="${ enumTradeTypes }">
						<option value="${ enumTradeType.id }" <c:if test="${ enumTradeType.id == tradetype }">selected = "selected"</c:if>>${ enumTradeType.desc }</option>
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
							<c:if test="${ isSelected == 1 }">checked</c:if>>${ isKey.desc }</label>
					</c:forEach>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label">房源名称:</label>
				<div class="col-sm-2">
					<input type="text" value="" class="housename form-control"
						maxLength="30" />
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label">租价</label>
				<div class="col-sm-1">
				<input type="text" value="" class="rental form-control" maxLength="30" />
				</div>
				<div class="col-sm-1">
				<select class="form-control rentalpricetype">
				<c:set var="enumHouseRentalPriceTypes" value="<%=EnumHouseRentalPriceType.values()%>"/>
						<c:forEach var="enumHouseRentalPriceType" items="${ enumHouseRentalPriceTypes }">
						<option value="${ enumHouseRentalPriceType.id }" <c:if test="${ enumHouseRentalPriceType.id == rentalpricetype }">selected = "selected"</c:if>>${ enumHouseRentalPriceType.desc }</option>
					</c:forEach>
			    </select></label>
			    </div>
				<label class="col-sm-1 control-label">楼层</label>
				<div class="col-sm-1">
				<input type="text" value="" class="floor form-control" maxLength="30" />
				</div>
				<label class="col-sm-1 control-label">房间号</label>
				<div class="col-sm-1">
				<input type="text" value="" class="room form-control" maxLength="30" />
			    </div>
			    </div>
			    <div class="form-group">
				<label class="col-sm-1 control-label">面积</label>
				<div class="col-sm-1">
				<input type="text" value="" class="acreage form-control" maxLength="30" />
				</div>
				<div class="col-sm-1">
				<label class="control-label">平米</label>
				</div>
				<label class="col-sm-1 control-label">朝向</label>
				<div class="col-sm-1">
				<select class="form-control orientation">
					<c:set var="EnumHouseOrientations" value="<%=EnumHouseOrientation.values()%>"/>
						<c:forEach var="EnumHouseOrientation" items="${ EnumHouseOrientations }">
						<option value="${ EnumHouseOrientation.id }" <c:if test="${ EnumHouseOrientation.id == orientation }">selected = "selected"</c:if>>${ EnumHouseOrientation.desc }</option>
					</c:forEach>
			    </select></label>
				</select>
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
						<option value="${ enumSoureType.id }" <c:if test="${ enumSoureType.id == soure }">selected = "selected"</c:if>>${ enumSoureType.desc }</option>
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
					<input type="text" value="" class="owner form-control"
						maxLength="30" />
				</div>
				<label class="col-sm-1 control-label">业主电话:</label>
				<div class="col-sm-2">
					<input type="text" value="" class="ownerphone form-control"
						maxLength="30" />
				</div>
				</div>
			<div class="form-group">
				 <label class="col-sm-1 control-label">备注说明</label>
				<div class="col-sm-4">
				<textarea class="remarks form-control" rows="4"></textarea>
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
						<!--  <a class="btn btn-default min-w100" href="${referer }" onclick="history.go(-1)">返回</a>-->
			<input class="btn btn-primary min-w100 ml20" type="button" name="button1" id="button1" value="返回" onclick="history.go(-1)">
			<button class="btn btn-primary min-w100 ml20" id="confirm-btn">提交</button>
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
		<script type="text/javascript">
			MX.load({
				js: 'lib/sea',
				version: '${ JS_LIB_SEA_VERSION }',
				success: function() {
				seajs.use(['lib/jquery','util/bootstrap.datetimepicker.zh-CN','module/Dialog', 'module/Validator', 'util/ajaxPromise'], function($,datetimepicker, Dialog, Validator, ajaxPromise) {
	            var allCheck = $('#all-check'),
	            dialog = new Dialog('modal-dialog'),
	            gameserverList = $('#gameserver-list'),
	            checkList =  gameserverList.find('input').filter('[name="game-server"]');
				// 绑定datetimepicker插件
				$('.form-date').datetimepicker({
					language: 'zh-CN',/*加载日历语言包，可自定义*/
					weekStart: 1,
					todayBtn:  1,
					autoclose: 1,
					todayHighlight: 1,
					minView: 0,
					forceParse: 0,
					showMeridian: 1,
					showSecond: true,  
                    timeFormat: 'hh:mm:ss',  
                    stepHour: 1,  
                    stepMinute: 1,  
                    stepSecond: 1  
				});	
				var postContainer = $('#post-container');
				// 绑定全选
				allCheck.on('click', function(e) {
				
					var el = $(this);
					if(el.prop('checked')) {
						checkList.prop('checked', true);
					} else {
						checkList.prop('checked', false);
					}
				});
				$('#confirm-btn').on('click', function(e) {
				var el = $(this), validator = new Validator(), data = {};
							data.title = postContainer.find('.title').val();
							data.type = postContainer.find('.type').val();
							data.tradetype = postContainer.find('.tradetype').val();
							data.housename = postContainer.find('.housename').val();
							data.price = postContainer.find('.price').val();
							data.rental = postContainer.find('.rental').val();
							data.unitprice = postContainer.find('.unitprice').val();
							data.rentalpricetype = postContainer.find('.rentalpricetype').val();
							data.floor = postContainer.find('.floor').val();
							data.room = postContainer.find('.room').val();
							data.acreage = postContainer.find('.acreage').val();
							data.orientation = postContainer.find('.orientation').val();
							
							data.officetag = postContainer.find('[name="officeTags"]').filter(':checked').map(function() {
									return $(this).val();
								}).get();
							data.officetag = data.officetag.join();
							data.officetype = postContainer.find('.officetype').val();
							data.paymentmethod = postContainer.find('.paymentmethod').val();
							data.seemethod = postContainer.find('.seemethod').val();
							data.source = postContainer.find('.source').val();
							data.iskey = postContainer.find('.iskey').val();
							data.remarks = postContainer.find('.remarks').val();
							data.owner = postContainer.find('.owner').val();
							data.ownerphone = postContainer.find('.ownerphone').val();
							data.propertycompany = postContainer.find('.propertycompany').val();
							data.propertphone = postContainer.find('.propertphone').val();
							
							data.diskstatus = postContainer.find('.diskstatus').val();
							data.isstatus =  postContainer.find('.isstatus').val();
							data.housestatus = postContainer.find('.housestatus').val();
							data.sealingdisk = postContainer.find('.sealingdisk').val();
							
							 validator.add(data.housename, 'isNotEmpty', function() {
								alert('房源名称不能为空');
							});
						    validator.add(data.ownerphone, 'isNotEmpty', function() {
								alert('电话不能为空');
							});
							if(!data.Id) {
								
							}
							if(!validator.start()) {
								return;
							}
							el.prop('disabled', true);
							ajaxPromise({
								url: window.basePath + 'base/insertBaseHouse',
								type: 'POST',
								data: data,
								dataType: 'json'
							}).then(function(data) {
								document.location.href = window.basePath + 'base/baseHouseList';
							}, function() {
								el.prop('disabled', false);
							});
						});
					});
				}
			});
		</script>
	</body>
</html>
