define('module/SampleCheck', ['lib/jquery', 'module/Dialog', 'util/artTemplate', 'util/bootstrap.datetimepicker.zh-CN', 'util/ajaxPromise'], function(require) {
	'use strict';
	var $, dialog, Dialog, sampleCheck, tmpl, ajaxPromise;
	$ = require('lib/jquery');
	Dialog = require('module/Dialog');
	tmpl = require('util/artTemplate');
	ajaxPromise = require('util/ajaxPromise');
	require('util/bootstrap.datetimepicker.zh-CN');
	dialog = new Dialog('modal-dialog');
	/**
	 * 生成抽检
	 * @param  {String} url    抽检接口
	 * @param  {Object} config 扩展参数
	 * @config {String} source 来源id
	 * @example
	 * 		seajs.use('module/SampleCheck', function(sampleCheck) {
	 * 			sampleCheck('', {
	 * 				source: ''
	 * 			});
	 * 		});
	 */
	sampleCheck = function(url, config) {
		config = config || {};
		// 请求小组信息
		ajaxPromise({
			url: window.basePath + 'tranops/getAllTikuTeam',
			type: 'GET',
			dataType: 'json'
		}).then(function(data) {
			var content, teamTmpl;
			// 小组信息模板
			teamTmpl = tmpl.compile([
				'{{each items}}',
					'<tr>',
						'<td>',
							'<input class="check-item" name="checkbox" type="checkbox" value="{{$value.id}}">',
						'</td>',
						'<td>{{$index + 1}}</td>',
						'<td>{{$value.captainName}}</td>',
						'<td>{{$value.usersNum}}</td>',
					'</tr>',
				'{{/each}}'
			].join(''));
			dialog.show({
				sizeClass: 'modal-lg',
				title: '生成抽检',
				content: [
					'<div class="form-horizontal">',
						'<div class="form-group">',
							'<label class="col-sm-2 control-label">抽检日期：</label>',
							'<div class="col-sm-10 form-inline">',
								'<input class="form-control form-date start-time" type="text" value="" name="startTime" data-date-format="yyyy-mm-dd 00:00:00"/>',
								'~',
								'<input class="form-control form-date end-time" type="text" value="" name="endTime"  data-date-format="yyyy-mm-dd 23:59:59"/>',
							'</div>',
						'</div>',
						'<div class="form-group">',
							'<label class="col-sm-2 control-label">每组抽查：</label>',
							'<div class="col-sm-10">',
								'<input class="sample-num form-control" type="text" value="" maxLength="30"/>',
							'</div>',
						'</div>',
						'<div class="form-group">',
							'<label class="col-sm-2 control-label">抽查类型：</label>',
							'<div class="col-sm-10">',
								'<select class="sample-type form-control">',
									'<option value="0">图片识别抽检</option>',
									'<option value="1">题目抽检</option>',
								'</select>',
							'</div>',
						'</div>',
						'<div class="form-group">',
							'<label class="col-sm-2 control-label">抽查小组：</label>',
						'</div>',
						'<div class="form-group">',
							'<div class="col-sm-10 col-sm-offset-2 max-h480">',
								'<table class="table table-bordered" border="1" cellpadding="0" cellspacing="0">',
									'<thead>',
										'<tr>',
											'<th>',
												'<input class="check-all" type="checkbox">',
											'</th>',
											'<th>序号</th>',
											'<th>组长</th>',
											'<th>小组人数</th>',
										'</tr>',
									'</thead>',
									'<tbody class="check-team"></tbody>',
								'</table>',
							'</div>',
						'</div>',
					'</div>'
				].join(''),
				source: config.source,
				renderCall: function() {
					var Self = this, allCheck, checkList;
					Self._body.find('.check-team').append(teamTmpl({items: data.result}));
					Self._body.find('.btn-confirm').text('生成抽检');
					allCheck = Self._body.find('.check-all');
					checkList = Self._body.find('.check-item');
					// 绑定全选
					Self._body.on('click.bs.custom', '.check-all', function(e) {
						checkList.prop('checked', $(this).prop('checked'));
					});
					// 取消全选
					Self._body.on('click', '.check-item', function(e) {
						if(!$(this).prop('checked')) {
							allCheck.prop('checked', false);
						}
					});
					// 绑定datetimepicker插件
					Self._body.find(".form-date").datetimepicker({
						language: 'zh-CN',/*加载日历语言包，可自定义*/
						weekStart: 1,
						todayBtn:  1,
						autoclose: 1,
						todayHighlight: 1,
						minView: 2,
						forceParse: 0,
						showMeridian: 1
					});
				},
				confirm: function() {
					var Self = this, teamIds, body, checkList;
					body = Self._body;
					checkList = body.find('.check-item');
					teamIds = checkList.filter(':checked').map(function() {
						return $(this).val();
					}).get().join();
					ajaxPromise({
						url: url,
						type: 'GET',
						dataType: 'json',
						data: {
							startTime: body.find('.start-time').val(),
							endTime: body.find('.end-time').val(),
							n: body.find('.sample-num').val(),
							type: body.find('.sample-type').val(),
							teamIds: teamIds
						}
					}).then(function(data) {
						window.location.reload();
					}, function() {
						Self.enableConfirm();
					});
				}
			});
		});
	};
	return sampleCheck;
});