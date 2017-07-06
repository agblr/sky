define('module/ScoreSourceInfo', ['lib/jquery', 'module/Dialog', 'module/Validator', 'util/ajaxPromise', 'util/artTemplate'], function(require) {
	'use strict';
	var $, Dialog, Validator, ajaxPromise, tmpl,
		ScoreSourceInfo, dialog, scoreSourceTmpl;
	$ = require('lib/jquery');
	Dialog = require('module/Dialog');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	tmpl = require('util/artTemplate');
	// 积分来源模板
	scoreSourceTmpl = tmpl.compile([
		'<div class="form-horizontal">',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">名称：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{name}}" class="name form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">积分：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{score}}" class="score form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">状态：</label>',
				'<div class="col-sm-10">',
					'<select class="status form-control">',
						'<option value="" {{if status === ""}}selected{{/if}}>请选择</option>',
						'<option value="1" {{if status === 1}}selected{{/if}}>有效</option>',
						'<option value="-1" {{if status === -1}}selected{{/if}}>无效</option>',
					'</select>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">描述：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{description}}" class="description form-control" maxLength="30"/>',
				'</div>',
			'</div>',
			'<div class="form-group">',
				'<label class="col-sm-2 control-label">提示：</label>',
				'<div class="col-sm-10">',
					'<input type="text" value="{{tips}}" class="tips form-control" maxLength="30"/>',
				'</div>',
			'</div>',
	].join(''));
	dialog = new Dialog('modal-dialog');
	ScoreSourceInfo = {
		/**
		 * 添加积分来源
		 * @param {String} source 来源id
		 * @example
		 * 		seajs.use(['module/ScoreSourceInfo'], function(ScoreSourceInfo) {
		 * 			ScoreSourceInfo.addScoreSource('add-score-source');
		 * 		});
		 */
		addScoreSource: function(source) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '添加积分来源',
				source: source,
				content: scoreSourceTmpl({
					name: '',
					score: '',
					status: '',
					description: '',
					tips: ''
				}),
				initial: function() {
					var Self = this, container = Self._container;
					container.find('input, select').val('');
				},
				confirm: function() {
					var Self = this, container = Self._container, data = {},
						validator, sourceName, score, description, tips;
					validator = new Validator();
					sourceName = container.find('.name');
					data.name = sourceName.val().trim();
					score = container.find('.score');
					data.score = score.val().trim();
					data.status = container.find('.status').val();
					description = container.find('.description');
					data.description = description.val().trim();
					tips = container.find('.tips');
					data.tips = tips.val().trim();
					validator.add(data.name, 'isNotEmpty', function() {
						alert('名称不能为空');
						sourceName.val('').focus();
					}).add(data.score, 'isPositiveNum', function() {
						alert('请输入合法的积分');
						score.val('').focus();
					}).add(data.status, 'isNotEmpty', function() {
						alert('请选择状态');
					}).add(data.description, 'isNotEmpty', function() {
						alert('描述不能为空');
						description.val('').focus();
					}).add(data.tips, 'isNotEmpty', function() {
						alert('提示不能为空');
						tips.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					ajaxPromise({
						url: window.basePath + 'product/editScore',
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
		 * 编辑积分来源
		 * @param  {Object} assetData 积分来源数据
		 * @example
		 * 		seajs.use(['module/ScoreSourceInfo'], function(ScoreSourceInfo) {
		 * 			// 积分来源数据取自dataset
		 * 			ScoreSourceInfo.editScoreSource({
		 * 				id: '',
		 * 				name: '',
		 * 				score: '',
		 * 				status: 1,
		 * 				description: '',
		 * 				tips: ''
		 * 			});
		 * 		});
		 */
		editScoreSource: function(scoreSourceData) {
			dialog.show({
				sizeClass: 'modal-lg',
				title: '编辑积分来源',
				force: 1,
				content: scoreSourceTmpl(scoreSourceData),
				confirm: function() {
					var Self = this, container = Self._container, data = {},
						validator, sourceName, score, description, tips;
					validator = new Validator();
					sourceName = container.find('.name');
					data.name = sourceName.val().trim();
					score = container.find('.score');
					data.score = score.val().trim();
					data.status = container.find('.status').val();
					description = container.find('.description');
					data.description = description.val().trim();
					tips = container.find('.tips');
					data.tips = tips.val().trim();
					validator.add(data.name, 'isNotEmpty', function() {
						alert('名称不能为空');
						sourceName.val('').focus();
					}).add(data.score, 'isPositiveNum', function() {
						alert('请输入合法的积分');
						score.val('').focus();
					}).add(data.status, 'isNotEmpty', function() {
						alert('请选择状态');
					}).add(data.description, 'isNotEmpty', function() {
						alert('描述不能为空');
						description.val('').focus();
					}).add(data.tips, 'isNotEmpty', function() {
						alert('提示不能为空');
						tips.val('').focus();
					});
					if(!validator.start()) {
						Self.enableConfirm();
						return;
					}
					data.id = scoreSourceData.id;
					ajaxPromise({
						url: window.basePath + 'product/editScore',
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
	return ScoreSourceInfo;
});