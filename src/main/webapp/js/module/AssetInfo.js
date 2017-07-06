define('module/AssetInfo', ['lib/jquery', 'util/artTemplate', 'module/Dialog', 'module/Validator', 'util/bootstrap.datetimepicker.zh-CN', 'util/ajaxPromise'], function(require) {
	'use strict';
	var $, tmpl, Dialog, Validator, ajaxPromise,
		assetInfoTmpl, AssetInfo, dialog;
	$ = require('lib/jquery');
	tmpl = require('util/artTemplate');
	Dialog = require('module/Dialog');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	require('util/bootstrap.datetimepicker.zh-CN');
	// 资产模板
	assetInfoTmpl = tmpl.compile([
		'<div class="form-horizontal">',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">物品名称：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{name}}" class="asset-name form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">物品编号：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{num}}" class="asset-num form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">物品配置：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{config}}" class="asset-config form-control"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">物品分类：</label>',
				'<div class="col-sm-10">',
					'<select class="form-control asset-category">',
						'<option value="" {{if category===""}}selected{{/if}}>请选择</option>',
						'<option value="0" {{if category===0}}selected{{/if}}>显示器</option>',
						'<option value="1" {{if category===1}}selected{{/if}}>主机</option>',
						'<option value="2" {{if category===2}}selected{{/if}}>笔记本</option>',
						'<option value="3" {{if category===3}}selected{{/if}}>一体机</option>',
						'<option value="4" {{if category===4}}selected{{/if}}>服务器</option>',
						'<option value="5" {{if category===5}}selected{{/if}}>电脑配件</option>',
						'<option value="6" {{if category===6}}selected{{/if}}>网络设备</option>',
						'<option value="7" {{if category===7}}selected{{/if}}>打印机</option>',
						'<option value="8" {{if category===8}}selected{{/if}}>投影仪</option>',
						'<option value="9" {{if category===9}}selected{{/if}}>手机</option>',
						'<option value="10" {{if category===10}}selected{{/if}}>耗材</option>',
						'<option value="11" {{if category===11}}selected{{/if}}>空调</option>',
						'<option value="12" {{if category===12}}selected{{/if}}>其他</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">单位：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{unit}}" class="asset-unit form-control"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">物品价格：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{price}}" class="asset-price form-control"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">购买时间：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control asset-purchase-time" value="{{purchaseTime}}" data-date-format="yyyy-mm-dd 00:00:00" size="18">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">购买渠道：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{purchaseChannel}}" class="asset-purchase-channel form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">使用人：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{user}}" class="asset-user form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">所属部门：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{department}}" class="asset-department form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">使用地点：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{userBase}}" class="asset-user-base form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">申请人：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{applicant}}" class="asset-applicant form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">归属人：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{owner}}" class="asset-owner form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">使用状态：</label>',
				'<div class="col-sm-10">',
					'<select class="form-control asset-status">',
						'<option value="0" {{if status===0}}selected{{/if}}>闲置</option>',
						'<option value="1" {{if status===1}}selected{{/if}}>使用中</option>',
						'<option value="2" {{if status===2}}selected{{/if}}>报废</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">备注：</label>',
				'<div class="col-sm-10">',
					'<textarea class="asset-remark form-control" row="3">{{remark}}</textarea>',
				'</div>',
			'</div>',
		'</div>'
	].join(''));
	dialog = new Dialog('modal-dialog');
	AssetInfo = {
		/**
		 * 添加物品
		 * @param {String} source 来源id
		 * @example
		 * 		seajs.use('module/AssetInfo', function(AssetInfo) {
		 * 			AssetInfo.addAsset('add-asset-btn');
		 * 		});
		 */
		addAsset: function(source) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '添加物品',
				content: assetInfoTmpl({
					name: '',
					num: '',
					config: '',
					category: '',
					unit: '',
					price: '',
					purchaseTime: '',
					purchaseChannel: '',
					user: '',
					department: '',
					userBase: '',
					applicant: '',
					owner: '',
					status: 0,
					remark: ''
				}),
				source: source,
				initial: function() {
					var Self = this, container = Self._container;
					container.find('input').val('');
					container.find('.asset-category').val('');
					container.find('.asset-status').val('0');
				},
				renderCall: function() {
					var Self = this;
					Self._confirm.text('添加物品');
					$('.asset-purchase-time').datetimepicker({
						language: 'zh-CN',/*加载日历语言包，可自定义*/
						weekStart: 1,
						todayBtn:  1,
						autoclose: 1,
						todayHighlight: 1,
						forceParse: 0,
						minView: 2,
						showMeridian: 1
					});
				},
				confirm: function(e) {
					var Self = this, container = Self._container, data = {},
						name, category, price, user,
						validator;
					validator = new Validator();
					name = container.find('.asset-name');
					data.proName = name.val().trim();
					category = container.find('.asset-category');
					data.proType = category.val();
					price = container.find('.asset-price');
					data.proPrice = +price.val().trim();
					user = container.find('.asset-user');
					data.userName = user.val().trim();
					data.status = container.find('.asset-status').val();
					validator.add(data.proName, 'isNotEmpty', function() {
						alert('物品名称不能为空');
						name.val('').focus();
					}).add(data.proType, 'isNotEmpty', function() {
						alert('请选择物品分类');
						category.val('').focus();
					}).add(data.proPrice, 'isPositiveNum', function() {
						alert('请输入合法的价格');
						price.val('').focus();
					});
					if(data.status === '1') {
						validator.add(data.userName, 'isNotEmpty', function() {
							alert('使用中的使用者不能为空');
							user.val('').focus();
						});
					}
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.proPrice = data.proPrice.toFixed(2);
					data.proNum = container.find('.asset-num').val().trim();
					data.proConfig = container.find('.asset-config').val().trim();
					data.proDes = container.find('.asset-remark').val().trim();
					data.buyTime = container.find('.asset-purchase-time').val();
					data.channel = container.find('.asset-purchase-channel').val().trim();
					data.department = container.find('.asset-department').val().trim();
					data.unit = container.find('.asset-unit').val().trim();
					data.useAddress = container.find('.asset-user-base').val().trim();
					data.applicationName = container.find('.asset-applicant').val().trim();
					data.adscriptionName = container.find('.asset-owner').val().trim();
					ajaxPromise({
						url: window.basePath + 'assets/addAssetsInfo',
						type: 'POST',
						dataType: 'json',
						data: data,
					}).then(function(data) {
						document.location.reload();
						Self.hide();
					}, function() {
						Self.enableConfirm();
					});
				}
			});
		},
		/**
		 * 编辑物品
		 * @param  {Object} assetData 物品数据
		 * @param {Boolean} needClone 需要复制
		 * @example
		 * 		seajs.use(['module/AssetInfo'], function(AssetInfo) {
		 * 			// 物品数据取自dataset
		 * 			AssetInfo.editAsset({
		 * 				id: '',
		 * 				name: '',
		 * 				num: '',
		 * 				config: '',
		 * 				remark: '',
		 * 				category: 0,
		 * 				status: 1,
		 * 				price: '1.00',
		 * 				purchaseTime: '2015-10-20',
		 * 				purchaseChannel: '',
		 * 				user: '',
		 * 				userBase: '',
		 * 				applicant: '',
		 * 				owner: ''
		 * 			});
		 * 		});
		 */
		editAsset: function(assetData, needClone) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '编辑物品',
				content: assetInfoTmpl(assetData),
				force: 1,
				renderCall: function() {
					var Self = this;
					Self._confirm.text('编辑物品');
					$('.asset-purchase-time').datetimepicker({
						language: 'zh-CN',/*加载日历语言包，可自定义*/
						weekStart: 1,
						todayBtn:  1,
						autoclose: 1,
						todayHighlight: 1,
						forceParse: 0,
						minView: 2,
						showMeridian: 1
					});
				},
				confirm: function(e) {
					var Self = this, container = Self._container, data = {},
						name, category, price, user,
						validator;
					validator = new Validator();
					name = container.find('.asset-name');
					data.proName = name.val().trim();
					category = container.find('.asset-category');
					data.proType = category.val();
					price = container.find('.asset-price');
					data.proPrice = +price.val().trim();
					user = container.find('.asset-user');
					data.userName = user.val().trim();
					data.status = container.find('.asset-status').val();
					validator.add(data.proName, 'isNotEmpty', function() {
						alert('物品名称不能为空');
						name.val('').focus();
					}).add(data.proType, 'isNotEmpty', function() {
						alert('请选择物品分类');
						category.val('').focus();
					}).add(data.proPrice, 'isPositiveNum', function() {
						alert('请输入合法的价格');
						price.val('').focus();
					});
					if(data.status === '1') {
						validator.add(data.userName, 'isNotEmpty', function() {
							alert('使用中的使用者不能为空');
							user.val('').focus();
						});
					}
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.proPrice = data.proPrice.toFixed(2);
					data.proNum = container.find('.asset-num').val().trim();
					data.proConfig = container.find('.asset-config').val().trim();
					data.proDes = container.find('.asset-remark').val().trim();
					data.buyTime = container.find('.asset-purchase-time').val();
					data.channel = container.find('.asset-purchase-channel').val().trim();
					data.department = container.find('.asset-department').val().trim();
					data.unit = container.find('.asset-unit').val().trim();
					data.useAddress = container.find('.asset-user-base').val().trim();
					data.applicationName = container.find('.asset-applicant').val().trim();
					data.adscriptionName = container.find('.asset-owner').val().trim();
					if(!needClone) {
						data.id = assetData.id;
					}
					ajaxPromise({
						url: window.basePath + 'assets/addAssetsInfo',
						type: 'POST',
						dataType: 'json',
						data: data,
					}).then(function(data) {
						document.location.reload();
						Self.hide();
					}, function() {
						Self.enableConfirm();
					});
				}
			});
		},
		/**
		 * 复制物品
		 * @param  {Object} assetData 物品数据
		 * @example
		 * 		seajs.use(['module/AssetInfo'], function(AssetInfo) {
		 * 			// 物品数据取自dataset
		 * 			AssetInfo.editAsset({
		 * 				id: '',
		 * 				name: '',
		 * 				num: '',
		 * 				config: '',
		 * 				remark: '',
		 * 				category: 0,
		 * 				status: 1,
		 * 				price: '1.00',
		 * 				purchaseTime: '2015-10-20',
		 * 				purchaseChannel: '',
		 * 				user: '',
		 * 				userBase: '',
		 * 				applicant: '',
		 * 				owner: ''
		 * 			});
		 * 		});
		 */
		cloneAsset: function(assetData) {
			AssetInfo.editAsset(assetData, 1);
		}
	};
	return AssetInfo;
});