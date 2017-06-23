define('module/CustomerInfo', ['lib/jquery', 'util/artTemplate', 'module/Dialog', 'module/Validator', 'util/ajaxPromise'], function(require) {
	'use strict';
	var $, tmpl, dialog, Dialog, Validator, ajaxPromise,
	CustomerInfo, loadTeam, loadRole,
		userInfoTmpl, incompleteUserInfoTmpl, loadTeamMember, teamInfoTmpl, newTeamTmpl,
		optionTmpl, initOptionTmpl;
	$ = require('lib/jquery');
	tmpl = require('util/artTemplate');
	Dialog = require('module/Dialog');
	Validator = require('module/Validator');
	ajaxPromise = require('util/ajaxPromise');
	/**
	 * 加载小组信息
	 * @param  {String}   identity  身份
	 * @return {Promise}
	 */
	loadTeam = function(identity) { 
		return ajaxPromise({
			url: window.basePath + 'tool/getGameServerList', 
			type: 'GET',
			dataType: 'json',
			data: {
				role: identity
			}
		}).then(function(data) {
			var gameserverInfo;
			gameserverInfo = data.result;
			gameserverInfo.unshift({
				id: '',
				name: '请选择'
			});
			return gameserverInfo;
		});
	};
	/**
	 * 加载角色信息
	 * @param {Number} filter 是否过滤
	 * @return {Promise}
	 */
	loadRole = function(filter) {
		return ajaxPromise({
			url: window.basePath + 'role/getRoleList',
			data: {
				filter: filter
			},
			type: 'GET',
			dataType: 'json'
		}).then(function(data) {
			var roleInfo;
			roleInfo = data.result;
			roleInfo.unshift({
				id: '',
				name: '请选择'
			});
			return roleInfo;
		});
	};
	// 下拉模板
	optionTmpl = tmpl.compile([
		'{{each options}}',
			'<option value="{{$value.id}}">{{$value.name}}</option>',
		'{{/each}}'
	].join(''));
	// 初始化下拉模板
	initOptionTmpl = tmpl.compile([
		'{{each info}}',
		'<option {{if id===$value.id+""}}selected="selected"{{/if}} value="{{$value.id}}">{{$value.name}}</option>',
		'{{/each}}'
	].join(''));
	// 用户信息模板
	userInfoTmpl = tmpl.compile([
		'<div class="form-horizontal">',
		'<div class="form-group">',
		'<label class="col-sm-2 control-label">姓名：</label>',
		'<div class="col-sm-10">',
		'<input type="text" value="{{usename}}" class="usename form-control"/>',
		'</div>',
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-2 control-label">电话：</label>',
		'<div class="col-sm-10">',
		'<input type="text" value="{{mobile}}" class="mobile form-control"  maxLength="30"/>',
		'</div>',	
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-2 control-label">昵称：</label>',
		'<div class="col-sm-10">',
		'<input type="text" value="{{nickname}}" class="nickname form-control" maxLength="30"/>',
		'</div>',
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-4 control-label">手机：</label>',
		'<div class="col-sm-4">',
		'<input type="text" value="{{phone}}" class="phone form-control" maxLength="30"/>',
		'</div>',
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-4 control-label">性别：</label>',
		'<div class="col-sm-4">',
		'<input type="text" value="{{gender}}" class="gender form-control" maxLength="30"/>',
		'</div>',
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-2 control-label">QQ：</label>',
		'<div class="col-sm-4">',
		'<input type="text" value="{{qq}}" class="qq form-control" maxLength="30"/>',
		'</div>',
		'<label class="col-sm-2 control-label">微信：</label>',
		'<div class="col-sm-4">',
		'<input type="text" value="{{wechat}}" class="wechat form-control" maxLength="30"/>',
		'</div>',
		'<label class="col-sm-2 control-label">email：</label>',
		'<div class="col-sm-8">',
		'<input type="text" value="{{email}}" class="email form-control" maxLength="30"/>',
		'</div>',
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-2 control-label">来源：</label>',
		'<div class="col-sm-4">',
		'<select class="form-control source">',
		'<option {{if source===0}}selected="selected"{{/if}} value="0">来访</option>',
		'<option {{if source===1}}selected="selected"{{/if}} value="1">来电</option>',
		'<option {{if source===2}}selected="selected"{{/if}} value="2">网络</option>',
		'<option {{if source===3}}selected="selected"{{/if}} value="3">介绍</option>',
		'<option {{if source===4}}selected="selected"{{/if}} value="4">拜访</option>',
		'</select>',
		'</div>',

		'<label class="col-sm-2 control-label">状态：</label>',
		'<div class="col-sm-4">',
		'<select class="form-control status">',
		'<option {{if status===0}}selected="selected"{{/if}} value="0">有效客户</option>',
		'<option {{if status===1}}selected="selected"{{/if}} value="1">潜在客户</option>',
		'<option {{if status===2}}selected="selected"{{/if}} value="2">已签约</option>',
		'<option {{if status===3}}selected="selected"{{/if}} value="3">失效用户</option>',
		'<option {{if status===4}}selected="selected"{{/if}} value="4">锁定用户</option>',
		'</select>',
		'</div>',
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-2 control-label">地址：</label>',
		'<div class="col-sm-10">',
		'<textarea class="address form-control" rows="4">{{address}}</textarea>',
		'</div>',
		'</div>',
		'<div class="form-group">',
		'<label class="col-sm-2 control-label">备注：</label>',
		'<div class="col-sm-10">',
		'<textarea class="remarks form-control" rows="4">{{remarks}}</textarea>',
		'</div>',
		'</div>',
//			'<div class="form-group">',
//				'<label class="col-sm-4 control-label">密码：</label>',
//				'<div class="col-sm-8">',
//					'<input type="text" value="" class="password form-control"  maxLength="30"/>',
//				'</div>',
//			'</div>',
//			'<div class="form-group">',
//				'<label class="col-sm-4 control-label">账号：</label>',
//				'<div class="col-sm-8">',
//					'<input type="text" value="{{userKey}}" class="user-key form-control" disabled/>',
//				'</div>',
//			'</div>',
//			'<div class="form-group">',
//				'<label class="col-sm-4 control-label">姓名：</label>',
//				'<div class="col-sm-8">',
//					'<input type="text" value="{{userName}}" class="user-name form-control"  maxLength="30"/>',
//				'</div>',
//			'</div>',
//			'<div class="form-group">',
//				'<label class="col-sm-4 control-label">角色：</label>',
//				'<div class="col-sm-8">',
//					'<select class="role form-control" disabled>',
//						'{{each roleInfo}}',
//						'<option {{if role===$value.id}}selected="selected"{{/if}} value="{{$value.id}}">{{$value.name}}</option>',
//						'{{/each}}',
//					'</select>',
//				'</div>',
//			'</div>',
//			'<div class="form-group">',
//				'<label class="col-sm-4 control-label">状态：</label>',
//				'<div class="col-sm-8">',
//					'<select class="status form-control">',
//						'<option {{if status===0}}selected="selected"{{/if}} value="0">启用</option>',
//						'<option {{if status===1}}selected="selected"{{/if}} value="1">禁用</option>',
//					'</select>',
//				'</div>',
//			'</div>',
//			'<div class="form-group">',
//				'<label class="col-sm-4 control-label">机构：</label>',
//				'<div class="col-sm-8">',
//					'<input type="text" value="{{orgName}}" class="org-name form-control" disabled/>',
//				'</div>',
//			'</div>',
		'</div>'
	].join(''));
	dialog = new Dialog('modal-dialog');
	CustomerInfo = {
			/**
			 * 初始化服务器列表
			 * @param  {String|jQuery} container 小组信息容器
			 * @param {String} teamId 当前小组id
			 * @example
			 * 		seajs.use(['module/UserInfo'], function(userInfo) {
			 * 			userInfo.initTeam('', '');
			 * 		});
			 */
//			initTeam: function(container, gameserverId) {
//				if($.type(container) === 'string') {
//					container = $('#' + container);
//				}
//				loadTeam('').then(function(gameserverInfo) {
//					container.append(initOptionTmpl({
//						info: gameserverInfo,
//						id: gameserverId
//					}));
//				});
//			},
		/**
		 * 初始化角色
		 * @param  {String|jQuery} container 角色信息容器
		 * @param {String} roleId 当前角色id
		 * @example
		 * 		seajs.use(['module/UserInfo'], function(userInfo) {
		 * 			userInfo.initRole('', '');
		 * 		});
		 */
//		initRole: function(container, roleId) {
//			if($.type(container) === 'string') {
//				container = $('#' + container);
//			}
//			loadRole(0).then(function(roleInfo) {
//				container.append(initOptionTmpl({
//					info: roleInfo,
//					id: roleId
//				}));
//			});
//		},
		/**
		 * 添加成员
		 * @param {String} source 来源id
		 * @example
		 * 		seajs.use(['module/UserInfo'], function(userInfo) {
		 * 			userInfo.addMember('');
		 * 		});
		 */
		addMember: function(source) {
			console.log(source);
			loadRole(0).then(function(info) {
				dialog.show({
					sizeClass: 'modal-m',
					title: '创建客户',
					content: [
						'<div class="form-horizontal">',
							'<div class="form-group">',
							'<label class="col-sm-2 control-label">姓名：</label>',
							'<div class="col-sm-10">',
								'<input type="text" value="" class="usename form-control"/>',
							'</div>',
							'</div>',
							'<div class="form-group">',
								'<label class="col-sm-2 control-label">电话：</label>',
								'<div class="col-sm-10">',
									'<input type="text" value="" class="mobile form-control"  maxLength="30"/>',
								'</div>',
							'</div>',
							'<div class="form-group">',
								'<label class="col-sm-2 control-label">昵称：</label>',
								'<div class="col-sm-10">',
									'<input type="text" value="" class="nickname form-control" maxLength="30"/>',
								'</div>',
								'</div>',
								'<div class="form-group">',
							'<label class="col-sm-2 control-label">手机：</label>',
							'<div class="col-sm-4">',
								'<input type="text" value="" class="phone form-control" maxLength="30"/>',
							'</div>',
							'</div>',
							'<div class="form-group">',
							'<label class="col-sm-2 control-label">性别：</label>',
							'<div class="col-sm-4">',
								'<input type="text" value="" class="gender form-control" maxLength="30"/>',
							'</div>',
						'</div>',
						'<div class="form-group">',
						'<label class="col-sm-2 control-label">QQ：</label>',
						'<div class="col-sm-4">',
							'<input type="text" value="" class="qq form-control" maxLength="30"/>',
						'</div>',
					'<label class="col-sm-2 control-label">微信：</label>',
					'<div class="col-sm-4">',
						'<input type="text" value="" class="wechat form-control" maxLength="30"/>',
					'</div>',
				'<label class="col-sm-2 control-label">email：</label>',
				'<div class="col-sm-8">',
					'<input type="text" value="" class="email form-control" maxLength="30"/>',
				'</div>',
			    '</div>',
				'<div class="form-group">',
				'<label class="col-sm-2 control-label">来源：</label>',
				'<div class="col-sm-4">',
				'<select class="form-control source">',
				'<option value="0">来访</option>',
				'<option value="1">来电</option>',
				'<option value="2">网络</option>',
				'<option value="3">介绍</option>',
				'<option value="4">拜访</option>',
				'</select>',
				'</div>',
				
				'<label class="col-sm-2 control-label">状态：</label>',
				'<div class="col-sm-4">',
				'<select class="form-control status">',
				'<option value="0">有效客户</option>',
				'<option value="1">潜在客户</option>',
				'<option value="2">已签约</option>',
				'<option value="3">失效用户</option>',
				'<option value="4">锁定用户</option>',
				'</select>',
				'</div>',
				'</div>',
			    '<div class="form-group">',
				'<label class="col-sm-2 control-label">地址：</label>',
				'<div class="col-sm-10">',
					'<textarea class="address form-control" rows="4"></textarea>',
					'</div>',
			    '</div>',
			    '<div class="form-group">',
				'<label class="col-sm-2 control-label">备注：</label>',
				'<div class="col-sm-10">',
					'<textarea class="remarks form-control" rows="4"></textarea>',
				'</div>',
			    '</div>',
//							'<div class="form-group">',
//								'<label class="col-sm-4 control-label">角色：</label>',
//								'<div class="col-sm-8">',
//									'<select class="role form-control"></select>',
//								'</div>',
//							'</div>',
						'</div>'
					].join(''),
					source: source,
					initial: function() {
						var Self = this, container, orgSelect, orgs;
						container = Self._container;
						container.find('.usename').val('');
						container.find('.mobile').val('');
						container.find('.nikename').val('');
						container.find('.role').html(optionTmpl({
							options: info
						}));
						container.find('.role').on('change', function(e) {
							if($(this).val() === 'organization' && !container.find('.org').length) {
								container.find('.form-horizontal').append([
//									'<div class="form-group">',
//										'<label class="col-sm-4 control-label">机构：</label>',
//										'<div class="col-sm-8">',
//											'<select class="org form-control"></select>',
//										'</div>',
//									'</div>'
								].join(''));
								orgSelect = container.find('.org');
								ajaxPromise({
									url: window.basePath + 'org/listAll',
									type: 'GET',
									data: {},
									dataType: 'json'
								}).then(function(data) {
									orgs = data.result.organizationList;
									orgs.unshift({
										id: '',
										name: '全部'
									});
									if(orgs.length) {
										orgSelect.html(optionTmpl({
											options: orgs
										}));
									}
								}, function() {

								});
							} else {
								if(container.find('.org').length) {
									container.find('.org').closest('.form-group').remove();
								}
							}
						});
					},
					confirm: function() {
						var Self = this, validator = new Validator(),
							container,_usename, _mobile, _nickname, _phone ,
							_gender,_qq, _wechat,_email, _source ,_status ,
							_address , _remarks,
							data = {};
						container = Self._container;
						_usename = container.find('.usename');
						data.usename = _usename.val();
						_mobile = container.find('.mobile');
						data.mobile = _mobile.val();
						_phone= container.find('.phone');
						 data.phone = _phone.val();
						 data.gender = container.find('.gender').val();
						 data.qq = container.find('.qq').val();
						 data.wechat = container.find('.wechat').val();
						 data.email = container.find('.email').val();
						 data.source = container.find('.source').val();
						 data.status = container.find('.status').val();
						 data.address = container.find('.address').val().trim();
						 data.remarks = container.find('.remarks').val().trim();
						 data.nickname = container.find('.nickname').val().trim();
//						data.groupName = container.find('.role').val();
						validator.add(data.mobile, 'isNotEmpty', function() {
							alert("电话不能为空");
							_mobile.val('').focus();
						}).add(data.usename, 'isNotEmpty', function() {
							alert('客户名称不能为空');
							_usename.val('').focus();
//						}).add(data.groupName, 'isNotEmpty', function() {
//							alert('请选择角色');
						});
//						if(data.groupName === 'organization') {
//							data.orgId = container.find('.org').val();
//							validator.add(data.orgId, 'isNotEmpty', function() {
//								alert('请选择机构');
//							});
//						}
						if(!validator.start()) {
							Self.enableConfirm();
							return;
						}
					


//						data.nikename = container.find('.nikename').val().trim();
			
						ajaxPromise({
							url: window.basePath + 'customer/addCustomer',
							type: 'GET',
							data: data,
							dataType: 'json'
						}).then(function(data) {
							window.location.reload();
						}, function() {
							Self.enableConfirm();
						});
					}
				});
			});
		},
		/**
		 * 编辑成员
		 * @param {Object} data 成员数据
		 * @example
		 * 		seajs.use(['module/UserInfo'], function(userInfo) {
		 * 			// 成员数据取自dataset
		 * 			userInfo.editMember({
		 * 				role: '',
		 * 				userMobile: '',
		 * 				userKey: '',
		 * 				userName: '',
		 * 				teamRole: '',
		 * 				status: ''
		 * 			});
		 * 		});
		 */
		editMember: function(data) {
			loadRole(0).then(function(roleInfo) {
				data.roleInfo = roleInfo;
				dialog.show({
					sizeClass: 'modal-m',
					title: '编辑客户',
					content: userInfoTmpl(data),
					force: 1,
					confirm: function() {
						var Self = this, validator = new Validator(),
							container, requestData = {};
						container = Self._container;
						requestData.groupName = container.find('.role').val();
//						validator.add(requestData.groupName, 'isNotEmpty', function() {
//							alert('请选择角色');
//						});
						if(!validator.start()) {
							Self.enableConfirm();
							return;
						}
						$.extend(requestData, {
							userKey: data.userKey,
							id: data.userId,
//							userName: container.find('.user-name').val().trim(),
							userName: container.find('.user-name').val(),
							password: container.find('.password').val(),
							status: container.find('.status').val(),
							teamId: container.find('.team').val()
						});
						ajaxPromise({
							url: window.basePath + 'customer/updateCustomer',
							type: 'GET',
							data: requestData,
							dataType: 'json'
						}).then(function(data) {
							window.location.reload();
						}, function() {
							Self.enableConfirm();
						});
					}
				});
			});
		}
	};
	return CustomerInfo;
});
