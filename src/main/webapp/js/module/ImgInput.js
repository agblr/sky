/**
 * @description  图片输入框
 * @author lishunping(lishunping@xuexibao.cn)
 */
define('module/ImgInput', ['lib/jquery', 'module/Dialog', 'util/ajaxPromise'], function(require) {
	'use strict';
	var $ = require('lib/jquery'),
		Dialog = require('module/Dialog'),
		ajaxPromise = require('util/ajaxPromise'),
		ImgInput,
		instance,
		basePath = window.basePath || '';
	/**
	 * @constructor 插入图片对话框单例
	 * @param {String} id 图片对话框id
	 */
	ImgInput = function(id) {
		var Self = this;
		if(instance) {
			return instance;
		}
		Self.id = id;
		Self.dialog = new Dialog(id);
		instance = Self;
	};
	ImgInput.prototype = {
		/**
		 * 展示对话框
		 */
		show: function() {
			var Self = this;
			Self.dialog.show({
				sizeClass: 'modal-lg',
				title: '上传图片',
				content: [
					'<ul class="nav nav-tabs" role="tablist">',
						'<li role="presentation" class="active">',
							'<a href="#local-image" role="tab" data-toggle="tab" data-image-type="1">本地上传</a>',
						'</li>',
						'<li role="presentation" class="">',
							'<a href="#remote-image" role="tab" data-toggle="tab" data-image-type="2">网络图片</a>',
						'</li>',
					'</ul>',
					'<div class="tab-content" style="margin-top:15px">',
						'<div role="tabpanel" class="tab-pane fade active in" id="local-image">',
							'<input class="img-url form-control" type="file" multiple="multiple" accept="image/*">',
						'</div>',
						'<div role="tabpanel" class="tab-pane fade" id="remote-image">',
							'<input class="img-url form-control" type="text" placeholder="请填写图片地址">',
						'</div>',
					'</div>'
				].join(''),
				footer: '<button type="button" class="btn btn-primary btn-confirm">确定</button>',
				source: Self.id,
				renderCall: function() {
					var me = this, container, nav;
					container = me._body;
					// 绑定切换事件
					container.find('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
						var el = $(e.target);
						Self.imageType = el.data('image-type');
					});
					nav = container.find('.nav-tabs');
					container.on('show.bs.modal', function(e) {
						Self.imageType = 1;
						$('a[href="#local-image"]').tab('show');
					});
					// 绑定隐藏事件
					container.on('hide.bs.modal', function(e) {
						container.find('.img-url').val('');
						$(document).trigger('ImgInput:hide');
					});
				},
				confirm: function() {
					var me = this;
					new Promise(function(resolve, reject) {
						if(Self.imageType === 1) {
							require.async(['util/uploadFile'], function(uploader) {
								uploader($('#local-image').find('.img-url')[0].files[0]).then(function(results) {
									var data;
									data = results[0];
									resolve(data);
								});
							});
						} else {
							ajaxPromise({
								url: basePath + 'fileupload/uploadRemoteImage',
								type: 'POST',
								data: {
									remoteUrl: $('#remote-image').find('.img-url').val()
								},
								dataType: 'json'
							}, {
								resolveError: 1
							}).then(function(data) {
								resolve(data);
							});
						}
					}).then(function(data) {
						if(data.status === 0) {
							$(document).trigger('ImgInput:insert', [data.result]);
						} else {
							alert(data.msg);
						}
						Self.hide();
					});
				}
			});
		},
		/**
		 * 收起对话框
		 */
		hide: function() {
			var Self = this;
			Self.dialog.hide();
		}
	};
	return {
		/**
		 * 展开插入图片对话框
		 * @param  {String} id 对话框id
		 * @example
		 * 		seajs.use(['moudle/ImgInput'], function(imgInput) {
		 * 			imgInput.show('id');
		 * 		});
		 */
		show: function(id) {
			(new ImgInput(id)).show();
		},
		/**
		 * 收起插入图片对话框
		 * @param  {String} id 对话框id
		 * @example
		 * 		seajs.use(['moudle/ImgInput'], function(imgInput) {
		 * 			imgInput.hide('id');
		 * 		});
		 */
		hide: function(id) {
			(new ImgInput(id)).hide();
		}
	};
});