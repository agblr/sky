define('module/BlackAgentInfo', ['lib/jquery', 'module/Dialog', 'module/Validator', 'util/ajaxPromise', 'util/artTemplate'], function(require) {
	'use strict';
	var $, Dialog, Validator, ajaxPromise, tmpl,
		dialog, BlackAgentInfo, blackAgentTmpl;
	$ = require('lib/jquery');
	Dialog = require('module/Dialog');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	tmpl = require('util/artTemplate');
	// 黑名单模板
	blackAgentTmpl = tmpl.compile([
		'<div class="form-horizontal">',
			'<div class="form-group">',
				'<label class="col-sm-3 control-label">中介姓名：</label>',
				'<div class="col-sm-4">',
					'<input type="text" class="form-control name" maxlength="30" value="{{name}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-3 control-label">中介电话：</label>',
				'<div class="col-sm-4">',
					'<input type="text" class="form-control phone" maxlength="30" value="{{phone}}">',
				'</div>',
			'</div>',
		    '<div class="form-group">',
			'<label class="col-sm-3 control-label">备注：</label>',
			'<div class="col-sm-8">',
				'<textarea class="remarks form-control" rows="4">{{remarks}}</textarea>',
			'</div>',
		'</div>'
	].join(''));
	dialog = new Dialog('modal-dialog');
	BlackAgentInfo = {
		/**
		 * 添加
		 * @param {String} source 
		 * @example
		 * 		seajs.use(['module/BlackAgentInfo'], function(blackAgentInfo) {
		 * 			blackAgentInfo('source');
		 * 		});
		 */
		addBlackAgent: function(source) {
			dialog.show({
				sizeClass: 'modal-m',
				title: '新增黑名单',
				content: blackAgentTmpl({
					name: '',
					phone: '',
					remarks: ''
				}),
				source: source,
				initial: function() {
					var Self = this, container = Self._container;
					container.find('input').val('');
					container.find('select').val('');
				},
				confirm: function() {
					var Self = this,
						container = Self._container, data = {},
						name, phone, remarks, validator;
					validator = new Validator();
					name = container.find('.name');
					data.name = name.val().trim();
					phone = container.find('.phone');
					data.phone = phone.val().trim();
					remarks = container.find('.remarks');
					data.remarks = remarks.val().trim();
					validator.add(data.name, 'isNotEmpty', function() {
						alert('中介姓名不能为空');
						name.val('').focus();
					}).add(data.phone, 'isNotEmpty', function() {
						alert('电话号码不能为空');
						phone.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					ajaxPromise({
						url: window.basePath + 'black/insertBlackAgent',
						type: 'POST',
						data: data,
						dataType: 'json'
					}).then(function(data) {
						document.location.reload();
					}, function() {
						Self.enableConfirm();
					});
				}
			});
		},
		/**
		 * 编辑
		 * @param  {Object} verisonData 版本数据
		 * @example
		 * 		seajs.use(['module/VersionData'], function(versionInfo) {
		 * 			// 版本数据取自dataset
		 * 			versionInfo.editVersion({
		 * 				id: '',
		 * 				appName: '',
		 * 				appVersion: '',
		 * 				appUseVersion: '',
		 * 				mobileType: '',
		 * 				testDownloadUrl: '',
		 * 				downloadUrl: '',
		 * 				appDescription: '',
		 * 				channel: ''
		 * 			});
		 * 		})
		 */
		editBlackAgent: function(BlackAgentData) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '编辑黑名单',
				content: blackAgentTmpl(BlackAgentData),
				force: 1,
				confirm: function() {
					var Self = this,
						container = Self._container, data = {},
						name, phone,remarks, validator;
					validator = new Validator();
					name = container.find('.name');
					data.name = name.val().trim();
					phone = container.find('.phone');
					data.phone = phone.val().trim();
					remarks = container.find('.remarks');
					data.remarks = remarks.val().trim();
					validator.add(data.name, 'isNotEmpty', function() {
						alert('中介姓名不能为空');
						name.val('').focus();
					}).add(data.phone, 'isNotEmpty', function() {
						alert('电话号码不能为空');
						phone.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.id = BlackAgentData.id;
					ajaxPromise({
						url: window.basePath + 'black/updateBlackAgent',
						type: 'POST',
						data: data,
						dataType: 'json'
					}).then(function(data) {
						document.location.reload();
					}, function() {
						Self.enableConfirm();
					});
				}
			});
		} 
	};
	return BlackAgentInfo;
});