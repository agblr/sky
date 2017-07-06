define('module/SwitchInfo', ['lib/jquery', 'module/Dialog', 'module/Validator', 'util/ajaxPromise', 'util/artTemplate'], function(require) {
	'use strict';
	var $, Dialog, Validator, ajaxPromise, tmpl,
		dialog, SwitchInfo,
		switchTmpl;
	$ = require('lib/jquery');
	Dialog = require('module/Dialog');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	tmpl = require('util/artTemplate');
	// 开关模板
	switchTmpl = tmpl.compile([
		'<div class="form-horizontal">',
			'<div class="form-group">',
				'<label class="col-sm-4 pr0 control-label">类型：</label>',
				'<div class="col-sm-8">',
					'<select class="form-control type">',
						'<option value="" {{if type===""}}selected{{/if}}>请选择</option>',
						'<option value="1" {{if type===1}}selected{{/if}}>支付</option>',
						'<option value="2" {{if type===2}}selected{{/if}}>邀请码</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-4 pr0 control-label">状态：</label>',
				'<div class="col-sm-8">',
					'<select class="form-control status">',
						'<option value="" {{if status===""}}selected{{/if}}>请选择</option>',
						'<option value="1" {{if status===1}}selected{{/if}}>1</option>',
						'<option value="2" {{if status===2}}selected{{/if}}>2</option>',
						'<option value="3" {{if status===3}}selected{{/if}}>3</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-4 pr0 control-label">App版本：</label>',
				'<div class="col-sm-8">',
					'<input type="text" value="{{version}}" class="version form-control" maxLength="30"/>',
				'</div>',
			'</div>',
		'</div>'
	].join(''));
	dialog = new Dialog('modal-dialog');
	SwitchInfo = {
		/**
		 * 添加开关
		 * @param {String} source 来源id
		 * @example
		 * 		seajs.use(['module/SwitchInfo'], function(switchInfo) {
		 * 			switchInfo.addSwitch('');
		 * 		});
		 */
		addSwitch: function(source) {
			dialog.show({
				sizeClass: 'modal-sm',
				title: '添加开关',
				content: switchTmpl({
					type: '',
					status: '',
					version: ''
				}),
				source: source,
				initial: function() {
					var Self = this, container = Self._container;
					container.find('.type').val('');
					container.find('.status').val('');
					container.find('.version').val('');
				},
				confirm: function() {
					var Self = this, container = Self._container,
						validator, data = {}, _version, _type;
					validator = new Validator();
					_type = container.find('.type');
					data.name = _type.find('option').filter(':selected').text();
					data.type = _type.val();
					data.status = container.find('.status').val();
					_version = container.find('.version');
					data.version = _version.val().trim();
					validator.add(data.type, 'isNotEmpty', function() {
						alert('请选择类型');
					}).add(data.status, 'isNotEmpty', function() {
						alert('请选择状态');
					}).add(data.version, 'versionFormat', function() {
						alert('请输入合法的版本号');
						_version.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					ajaxPromise({
						url: window.basePath + 'valves/insertValves',
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
		 * 编辑开关
		 * @param {Object} switchData 开关数据
		 * @example
		 * 		seajs.use(['module/SwitchInfo'], function(switchInfo) {
		 * 			// 开关数据取自dataset
		 * 			switchInfo.editSwitch({
		 * 				id: '',
		 * 				type: '',
		 * 				status: '',
		 * 				version: ''
		 * 			});
		 * 		});
		 */
		editSwitch: function(switchData) {
			dialog.show({
				sizeClass: 'modal-sm',
				title: '编辑开关',
				content: switchTmpl(switchData),
				force: 1,
				confirm: function() {
					var Self = this, container = Self._container,
						validator, data = {}, _version, _type;
					validator = new Validator();
					_type = container.find('.type');
					data.name = _type.find('option').filter(':selected').text();
					data.type = _type.val();
					data.status = container.find('.status').val();
					_version = container.find('.version');
					data.version = _version.val().trim();
					validator.add(data.type, 'isNotEmpty', function() {
						alert('请选择类型');
					}).add(data.status, 'isNotEmpty', function() {
						alert('请选择状态');
					}).add(data.version, 'versionFormat', function() {
						alert('请输入合法的版本号');
						_version.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.valvesId = switchData.id;
					ajaxPromise({
						url: window.basePath + 'valves/updateValves',
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
	return SwitchInfo;
});