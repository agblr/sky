define('util/deleteRecord', ['lib/jquery', 'util/ajaxPromise'], function(require) {
	'use strict';
	var $, ajaxPromise, deleteRecord, defaultConfig;
	$ = require('lib/jquery');
	ajaxPromise = require('util/ajaxPromise');
	defaultConfig = {
		selector: '.btn-del',
		confirmTxt: '确认删除',
		idAttribute: 'id',
		requestData: {}
	};
	/**
	 * 删除记录
	 * @param  {String|jQuery|Element} id  记录列表或记录列表id
	 * @param  {Object} config 扩展参数
	 * @config {String} url 请求接口
	 * @config {String} [selector='.btn-del'] 删除按钮选择器
	 * @config {String} [confirmTxt='确认删除'] 二次确认文案
	 * @config {String} [idAttribute='id'] 请求接口参数名
	 * @config {Object} [requestData={}] 请求附加参数
	 * @example
	 * 		seajs.use(['util/deleteRecord'], function(deleteRecord) {
	 * 			deleteRecord('valves-list', {
	 * 				url: window.basePath + 'valves/deleValves',
	 * 				idAttribute: 'valvesId'
	 * 			});
	 * 		});
	 */
	deleteRecord = function(id, config) {
		var _body;
		if($.type(id) === 'string') {
			_body = $('#' + id);
		} else {
			_body = $(id);
		}
		config = $.extend(defaultConfig, config);
		_body.on('click', config.selector, function(e) {
			var el = $(this), curRow = el.closest('tr'), data = {};
			if(!confirm(config.confirmTxt)) {
				return;
			}
			data[config.idAttribute] = curRow.data('id');
			$.extend(data, config.requestData);
			ajaxPromise({
				url: config.url,
				type: 'POST',
				data: data,
				dataType: 'json'
			}).then(function(data) {
				alert('删除成功');
				document.location.reload();
			});
		});
	};
	return deleteRecord;
});