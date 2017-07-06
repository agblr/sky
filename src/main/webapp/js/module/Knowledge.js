define('module/Knowledge', ['lib/jquery', 'module/Validator', 'util/ajaxPromise', 'util/artTemplate'], function(require) {
	'use strict';
	var $, Validator, ajaxPromise, tmpl,
		Knowledge, knowledgeTmpl, knowledgeTagTmpl;
	$ = require('lib/jquery');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	tmpl = require('util/artTemplate');
	knowledgeTmpl = tmpl.compile([
		'{{each data}}',
			'<option value="{{$value.id}}">{{$value.knowledge}}</option>',
		'{{/each}}'
	].join(''));
	knowledgeTagTmpl = tmpl.compile('<span class="label label-default knowledge-tag" data-id="{{id}}">{{name}}<span class="glyphicon glyphicon-remove knowledge-remove"></span></span>');
	/**
	 * @param {String} id 知识点容器id
	 * @param {Object} config 扩展数据
	 * @config {Function} getGrade 获取年级
	 * @config {Function} getSubject 获取学科
	 * @example
	 * 		seajs.use(['module/Knowledge'], function(Knowledge) {
	 * 			var knowledge = new Knowledge('id', {
	 * 				getGrade: function() {
	 * 					return '1';
	 * 				},
	 * 				getSubject = function() {
	 * 					return '2';
	 * 				}
	 * 			});
	 * 		});
	 */
	Knowledge = function (id, config) {
		var Self = this;
		config = config || {};
		if($.type(id) === 'string') {
			Self._body = $('#' + id);
		} else {
			Self._body = $(id);
		}
		$.extend(Self, config);
		Self.init();
	};
	Knowledge.prototype = {
		/**
		 * 初始化入口
		 */
		init: function() {
			var Self = this;
			// 初始化hash
			Self._watcher = {
				map: {},
				length: 0
			};
			Self._searchKey = Self._body.find('.search-key');
			Self._select = Self._body.find('.knowledge-select');
			Self._list = Self._body.find('.knowledge-list');
			Self._list.find('.knowledge-tag').each(function(i) {
				Self._watcher.map[$(this).data('id')] = 1;
				Self._watcher.length++;
			});
			Self.addEvent();
		},
		/**
		 * 绑定事件
		 */
		addEvent: function() {
			var Self = this;
			// 删除知识点
			Self._body.on('click', '.knowledge-remove', function(e) {
				var el = $(this).closest('.knowledge-tag'), id;
				id = el.data('id');
				delete Self._watcher.map[id];
				Self._watcher.length--;
				el.remove();
			}).on('click', '.search-btn', function(e) {
				// 搜索知识点
				var data = {}, validator, el = $(this);
				validator = new Validator();
				data.grade = Self.getGrade();
				data.subject = Self.getSubject();
				validator.add(Self._watcher, 'maxLength:3', function() {
					alert('您添加的知识点已达上限');
				}).add(data.grade, 'isNotEmpty', function() {
					alert('请先选择相应的年级');
				}).add(data.subject, 'isNotEmpty', function() {
					alert('请先选择相应的学科');
				});
				if(!validator.start()) {
					Self._searchKey.val('');
					return;
				}
				if(!el.data('sending')) {
					el.data('sending', 1);
					data.knowledge = Self._searchKey.val().trim();
					ajaxPromise({
						url: window.basePath + 'knowledge/searchKnowledge',
						type: 'GET',
						data: data,
						dataType: 'json'
					}).then(function(data) {
						var knowledge;
						el.data('sending', 0);
						Self._searchKey.val();
						knowledge = data.result.knowledge;
						if(knowledge.length) {
							knowledge.unshift({
								id: '',
								knowledge: '请选择知识点'
							});
							Self._select.html(knowledgeTmpl({
								data: knowledge
							}));
						} else {
							alert('请尝试其他关键词');
						}
					}, function() {
						Self._searchKey.val('');
						el.data('sending', 0);
					});
				}
			});
			// 添加知识点
			Self._select.on('change', function(e) {
				var el = $(this), curItem = el.children().filter(':selected'), id, text;
				id = curItem.val();
				if(id === '') {
					return;
				}
				if(Self._watcher.length === 3) {
					alert('您添加的知识点已达上限');
					el.val('');
					return;
				}
				if(Self._watcher.map[id]) {
					alert('该知识点已添加');
					el.val('');
					return;
				}
				Self._watcher.map[id] = 1;
				Self._watcher.length++;
				Self._list.append(knowledgeTagTmpl({
					id: id,
					name: curItem.text()
				}));
			});
		},
		/**
		 * 清除知识点
		 */
		clear: function() {
			var Self = this;
			Self._select.html('<option value="">请选择知识点</option>');
			Self._list.empty();
			Self._watcher = {
				map: {},
				length: 0
			};
		},
		/**
		 * 获取知识点id
		 * @return {Array} 知识点id数组
		 */
		getKnowledges: function() {
			var Self = this;
			return Self._list.children().map(function(i) {
				return $(this).data('id');
			}).get();
		}
	};
	return Knowledge;
});