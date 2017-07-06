define('module/VersionInfo', ['lib/jquery', 'module/Dialog', 'module/Validator', 'util/ajaxPromise', 'util/artTemplate'], function(require) {
	'use strict';
	var $, Dialog, Validator, ajaxPromise, tmpl,
		dialog, VersionInfo, versionTmpl;
	$ = require('lib/jquery');
	Dialog = require('module/Dialog');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	tmpl = require('util/artTemplate');
	// 版本模板
	versionTmpl = tmpl.compile([
		'<div class="form-horizontal">',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">App名称：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control app-name" maxlength="30" value="{{appName}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">App版本：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control app-version" maxlength="30" value="{{appVersion}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">App使用版本：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control app-use-version" maxlength="30" value="{{appUseVersion}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">手机类型：</label>',
				'<div class="col-sm-10">',
					'<select class="form-control mobile-type">',
						'<option value="" {{if mobileType === ""}}selected{{/if}}>请选择</option>',
						'<option value="1" {{if mobileType === 1}}selected{{/if}}>android</option>',
						'<option value="2" {{if mobileType === 2}}selected{{/if}}>iOS</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">测试下载地址：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control test-download-url" maxlength="30" value="{{testDownloadUrl}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">下载地址：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control download-url" maxlength="30" value="{{downloadUrl}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">App描述：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control app-description" maxlength="30" value="{{appDescription}}">',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">渠道：</label>',
				'<div class="col-sm-10">',
					'<input type="text" class="form-control channel" maxlength="30" value="{{channel}}">',
				'</div>',
			'</div>',
		'</div>'
	].join(''));
	dialog = new Dialog('modal-dialog');
	VersionInfo = {
		/**
		 * 添加版本
		 * @param {String} source 来源id
		 * @example
		 * 		seajs.use(['module/VersionInfo'], function(versionInfo) {
		 * 			versionInfo.addVersion('source');
		 * 		});
		 */
		addVersion: function(source) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '添加版本',
				content: versionTmpl({
					appName: '',
					appVersion: '',
					appUserVersion: '',
					mobileType: '',
					testDownloadUrl: '',
					downloadUrl: '',
					appDescription: '',
					channel: ''
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
						appName, appVersion, appUseVersion, validator;
					validator = new Validator();
					appName = container.find('.app-name');
					data.appName = appName.val().trim();
					appVersion = container.find('.app-version');
					data.appVersion = appVersion.val().trim();
					appUseVersion = container.find('.app-use-version');
					data.apiVersion = appUseVersion.val().trim();
					validator.add(data.appName, 'isNotEmpty', function() {
						alert('App名称不能为空');
						appName.val('').focus();
					}).add(data.appVersion, 'isNotEmpty', function() {
						alert('App版本不能为空');
						appVersion.val('').focus();
					}).add(data.apiVersion, 'isNotEmpty', function() {
						alert('App使用版本不能为空');
						appUseVersion.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.appType = container.find('.mobile-type').val();
					data.appTestDownUrl = container.find('.test-download-url').val().trim();
					data.appDownUrl = container.find('.download-url').val().trim();
					data.appDesc = container.find('.app-description').val().trim();
					data.channel = container.find('.channel').val().trim();
					ajaxPromise({
						url: window.basePath + 'versions/insertVersion',
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
		 * 编辑版本
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
		editVersion: function(verisonData) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '编辑版本',
				content: versionTmpl(verisonData),
				force: 1,
				confirm: function() {
					var Self = this,
						container = Self._container, data = {},
						appName, appVersion, appUseVersion, validator;
					validator = new Validator();
					appName = container.find('.app-name');
					data.appName = appName.val().trim();
					appVersion = container.find('.app-version');
					data.appVersion = appVersion.val().trim();
					appUseVersion = container.find('.app-use-version');
					data.apiVersion = appUseVersion.val().trim();
					validator.add(data.appName, 'isNotEmpty', function() {
						alert('App名称不能为空');
						appName.val('').focus();
					}).add(data.appVersion, 'isNotEmpty', function() {
						alert('App版本不能为空');
						appVersion.val('').focus();
					}).add(data.apiVersion, 'isNotEmpty', function() {
						alert('App使用版本不能为空');
						appUseVersion.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.versionId = verisonData.id;
					data.appType = container.find('.mobile-type').val();
					data.appTestDownUrl = container.find('.test-download-url').val().trim();
					data.appDownUrl = container.find('.download-url').val().trim();
					data.appDesc = container.find('.app-description').val().trim();
					data.channel = container.find('.channel').val().trim();
					ajaxPromise({
						url: window.basePath + 'versions/updateVersion',
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
	return VersionInfo;
});