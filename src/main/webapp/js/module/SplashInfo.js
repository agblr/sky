define('module/SplashInfo', ['lib/jquery', 'module/Dialog', 'module/Validator', 'module/ImgInput', 'util/ajaxPromise', 'util/artTemplate'], function(require) {
	'use strict';
	var $, Dialog, Validator, imgInput, ajaxPromise, tmpl,
		SplashInfo, splashTmpl, dialog;
	$ = require('lib/jquery');
	Dialog = require('module/Dialog');
	imgInput = require('module/ImgInput');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	tmpl = require('util/artTemplate');
	// 闪屏模板
	splashTmpl = tmpl.compile([
		'<div class="form-horizontal">',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">闪屏图片：</label>',
				'<div class="col-sm-10">',
					'<img class="splash-img" {{if imgUrl}}src="{{imgUrl}}"{{/if}} title="点击上传图片" alt="闪屏图片">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">渠道：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control channel" maxlength="30" value="{{channel}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">宽度：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control width" maxlength="30" value="{{width}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">高度：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control height" maxlength="30" value="{{height}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">顺序：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control order" maxlength="30" value="{{order}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">状态：</label>',
				'<div class="col-sm-10">',
					'<select class="form-control status">',
						'<option value="" {{if status === ""}}selected{{/if}}>请选择</option>',
						'<option value="0" {{if status === 0}}selected{{/if}}>不可用</option>',
						'<option value="1" {{if status === 1}}selected{{/if}}>可用</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">操作系统：</label>',
				'<div class="col-sm-10">',
					'<select class="form-control operate-system">',
						'<option value="" {{if operateSystem === ""}}selected{{/if}}>请选择</option>',
						'<option value="1" {{if operateSystem === 1}}selected{{/if}}>android</option>',
						'<option value="2" {{if operateSystem === 2}}selected{{/if}}>iOS</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">手机型号：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control phone-model" maxlength="30" value="{{phoneModel}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">APP版本：</label>',
				'<div class="col-sm-10">',
				'<input type="text" class="form-control app-version" maxlength="30" value="{{appVersion}}">',
				'</div>',
			'</div>',
		'</div>'
	].join(''));
	dialog = new Dialog('modal-dialog');
	SplashInfo = {
		/**
		 * 添加闪屏
		 * @param {String} source 来源id
		 * @example
		 * 		seajs.use('module/SplashInfo', function(SplashInfo) {
		 * 			SplashInfo.addSplash('add-splash-btn');
		 * 		});
		 */
		addSplash: function(source) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '新增闪屏',
				content: splashTmpl({
					imgUrl: '',
					channel: '',
					width: '',
					height: '',
					order: '',
					status: '',
					operateSystem: '',
					phoneModel: '',
					appVersion: ''
				}),
				source: source,
				initial: function() {
					var Self = this, container = Self._container;
					container.find('input, select').val('');
					container.find('.splash-img').removeAttr('src');
				},
				renderCall: function() {
					var Self = this;
					Self._body.on('click.bs.custom', '.splash-img', function(e) {
						var el = $(this);
						$(document).one('ImgInput:insert', function(e, imageInfo) {
							el.attr({
								'src': imageInfo.imageUrl
							});
						}).one('ImgInput:hide', function(e) {
							$(document).off('ImgInput:insert');
						});
						imgInput.show('image-input');
					});
				},
				confirm: function() {
					var Self = this, container = Self._container, data = {},
						channel, width, height, order, status, phoneModel, appVersion, validator;
					validator = new Validator();
					data.url = container.find('.splash-img').attr('src');
					channel = container.find('.channel');
					data.channel = channel.val().trim();
					width = container.find('.width');
					data.width = +width.val().trim();
					height = container.find('.height');
					data.height = +height.val().trim();
					order = container.find('.order');
					data.orderId = +order.val().trim();
					phoneModel = container.find('.phone-model');
					data.phonemodel = phoneModel.val().trim();
					data.phonetype = container.find('.operate-system').val();
					appVersion = container.find('.app-version');
					data.version = appVersion.val().trim();
					data.status = container.find('.status').val();
					validator.add(data.url, 'isNotEmpty', function() {
						alert('请上传闪屏图片');
					}).add(data.channel, 'isNotEmpty', function() {
						alert('渠道不能为空');
						channel.val('').focus();
					}).add(data.width, 'isPositiveNum', function() {
						alert('宽度必须为正数');
						width.val('').focus();
					}).add(data.height, 'isPositiveNum', function() {
						alert('高度必须为正数');
						height.val('').focus();
					}).add(data.orderId, 'isPositiveNum', function() {
						alert('顺序必须为正数');
						order.val('').focus();
					}).add(data.phonemodel, 'isNotEmpty', function() {
						alert('手机型号不能为空');
						phoneModel.val('').focus();
					}).add(data.phonetype, 'isNotEmpty', function() {
						alert('请选择操作系统');
					}).add(data.version, 'isNotEmpty', function() {
						alert('APP版本不能为空');
						appVersion.val('').focus();
					}).add(data.status, 'isNotEmpty', function() {
						alert('请选择是否状态');
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					ajaxPromise({
						url: window.basePath + 'splashes/insertSplashes',
						type: 'POST',
						data: data,
						dataType: 'json'
					}).then(function(data) {
						alert('添加成功');
						document.location.reload();
					}, function() {
						Self.enableConfirm();
					});
				}
			});
		},
		/**
		 * 编辑闪屏
		 * @param  {Object} splashData 物品数据
		 * @example
		 * 		seajs.use(['module/SplashInfo'], function(SplashInfo) {
		 * 			// 闪屏数据取自dataset
		 * 			SplashInfo.editSplash({
		 * 				id: '',
		 * 				imgUrl: '',
		 * 				channel: '',
		 * 				width: '',
		 * 				height: '',
		 * 				order: '',
		 * 				status: '',
		 * 				operateSystem: '',
		 * 				phoneModel: '',
		 * 				appVersion: ''
		 * 			});
		 * 		});
		 */
		editSplash: function(splashData) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '编辑闪屏',
				content: splashTmpl(splashData),
				force: 1,
				renderCall: function() {
					var Self = this;
					Self._body.on('click.bs.custom', '.splash-img', function(e) {
						var el = $(this);
						$(document).one('ImgInput:insert', function(e, imageInfo) {
							el.attr({
								'src': imageInfo.imageUrl
							});
						}).one('ImgInput:hide', function(e) {
							$(document).off('ImgInput:insert');
						});
						imgInput.show('image-input');
					});
				},
				confirm: function() {
					var Self = this, container = Self._container, data = {},
						channel, width, height, order, status, phoneModel, appVersion, validator;
					validator = new Validator();
					data.url = container.find('.splash-img').attr('src');
					channel = container.find('.channel');
					data.channel = channel.val().trim();
					width = container.find('.width');
					data.width = +width.val().trim();
					height = container.find('.height');
					data.height = +height.val().trim();
					order = container.find('.order');
					data.orderId = +order.val().trim();
					phoneModel = container.find('.phone-model');
					data.phonemodel = phoneModel.val().trim();
					data.phonetype = container.find('.operate-system').val();
					appVersion = container.find('.app-version');
					data.version = appVersion.val().trim();
					data.status = container.find('.status').val();
					validator.add(data.url, 'isNotEmpty', function() {
						alert('请上传闪屏图片');
					}).add(data.channel, 'isNotEmpty', function() {
						alert('渠道不能为空');
						channel.val('').focus();
					}).add(data.width, 'isPositiveNum', function() {
						alert('宽度必须为正数');
						width.val('').focus();
					}).add(data.height, 'isPositiveNum', function() {
						alert('高度必须为正数');
						height.val('').focus();
					}).add(data.orderId, 'isPositiveNum', function() {
						alert('顺序必须为正数');
						order.val('').focus();
					}).add(data.phonemodel, 'isNotEmpty', function() {
						alert('手机型号不能为空');
						phoneModel.val('').focus();
					}).add(data.phonetype, 'isNotEmpty', function() {
						alert('请选择操作系统');
					}).add(data.version, 'isNotEmpty', function() {
						alert('APP版本不能为空');
						appVersion.val('').focus();
					}).add(data.status, 'isNotEmpty', function() {
						alert('请选择是否状态');
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.splashesId = splashData.id;
					ajaxPromise({
						url: window.basePath + 'splashes/updateSplashes',
						type: 'POST',
						data: data,
						dataType: 'json'
					}).then(function(data) {
						alert('编辑成功');
						document.location.reload();
					}, function() {
						Self.enableConfirm();
					});
				}
			});
		}
	};
	return SplashInfo;
});