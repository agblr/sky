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
		    <!-- Bootstrap table -->
	<link href="<%=basePath %>/static/assets/css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="<%=basePath %>/static/assets/css/font-awesome.css?v=4.4.0" rel="stylesheet">
    <link href="<%=basePath %>/static/assets/css/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">
    <link href="<%=basePath %>/static/assets/css/animate.css" rel="stylesheet">
    <link href="<%=basePath %>/static/assets/css/style.css?v=4.1.0" rel="stylesheet">
    <script src="<%=basePath %>/static/assets/js/plugins/bootstrap-table/bootstrap-table.min.js"></script>
    <script src="<%=basePath %>/static/assets/js/plugins/bootstrap-table/bootstrap-table-mobile.min.js"></script>
    <script src="<%=basePath %>/static/assets/js/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
        <!-- Peity -->
    <script src="<%=basePath %>/static/assets/js/demo/bootstrap-table-demo.js"></script>
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
	 <div class="wrapper wrapper-content animated fadeIn">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>基本面板 <small class="m-l-sm">客户详细</small></h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="tabs_panels.html#">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="tabs_panels.html#">选项1</a>
                                </li>
                                <li><a href="tabs_panels.html#">选项2</a>
                                </li>
                            </ul>
                            <a class="close-link">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <h2>
                            Bootstrap<br/>
                        </h2>
                        <p>
                                                                                  简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="tabs-container">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="true"> 第一个选项卡</a>
                        </li>
                        <li class=""><a data-toggle="tab" href="#tab-2" aria-expanded="false">第二个选项卡</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane active">
                            <div class="panel-body">
                                <strong>HTML5 文档类型</strong>
                                <p>Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。</p>
                            </div>
                        </div>
                        <div id="tab-2" class="tab-pane">
                            <div class="panel-body">
                                <strong>移动设备优先</strong>
                                <p>在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>跟进记录</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="table_basic.html#">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="table_basic.html#">选项1</a>
                                </li>
                                <li><a href="table_basic.html#">选项2</a>
                                </li>
                            </ul>
                            <a class="close-link">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ibox-content">

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>数据</th>
                                    <th>用户</th>
                                    <th>值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><span class="line">5,3,2,-1,-3,-2,2,3,5,2</span>
                                    </td>
                                    <td>张三</td>
                                    <td class="text-navy"> <i class="fa fa-level-up"></i> 40%</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><span class="line">5,3,9,6,5,9,7,3,5,2</span>
                                    </td>
                                    <td>李四</td>
                                    <td class="text-warning"> <i class="fa fa-level-down"></i> -20%</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><span class="line">1,6,3,9,5,9,5,3,9,6,4</span>
                                    </td>
                                    <td>王麻子</td>
                                    <td class="text-navy"> <i class="fa fa-level-up"></i> 26%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
	</div>
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

