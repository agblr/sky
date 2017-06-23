/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : sky

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2017-06-20 18:22:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `announcement`
-- ----------------------------
DROP TABLE IF EXISTS `announcement`;
CREATE TABLE `announcement` (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `text` text COMMENT '公告内容',
  `status` int(4) DEFAULT '0' COMMENT '公告状态：0 默认生效 1：失效',
  `operator` varchar(50) DEFAULT NULL COMMENT '发布人',
  `create_time` datetime DEFAULT NULL COMMENT '发布时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of announcement
-- ----------------------------
INSERT INTO `announcement` VALUES ('2', '的顶顶顶顶顶顶顶顶顶宿舍<br>', '1', 'zhengjun', '2017-06-18 14:57:06', '2017-06-18 14:57:06');
INSERT INTO `announcement` VALUES ('3', '刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军', '0', 'zhengjun', '2017-06-18 14:56:34', '2017-06-18 14:56:34');
INSERT INTO `announcement` VALUES ('4', '<h3 style=\"margin: 0px 0px 0.5em; font-size: 14pt; color: rgb(153, 102, 51); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">Managing Tomcat</h3><p style=\"margin: 0px 0px 0.1em; font-size: 10.5pt; color: rgb(119, 85, 51); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">For security, access to the<span>&nbsp;</span><a href=\"http://localhost:8080/manager/html\" style=\"color: rgb(102, 0, 0);\">manager webapp</a><span>&nbsp;</span>is restricted. Users are defined in:</p><pre style=\"text-indent: 0.25em; width: 264.6px; font-size: 11.7px; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">$CATALINA_HOME/conf/tomcat-users.xml</pre><p style=\"margin: 0px 0px 0.1em; font-size: 10.5pt; color: rgb(119, 85, 51); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">In Tomcat 7.0 access to the manager application is split between different users. &nbsp;<span>&nbsp;</span><a href=\"http://localhost:8080/docs/manager-howto.html\" style=\"color: rgb(102, 0, 0);\">Read more...</a></p><br style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://localhost:8080/docs/RELEASE-NOTES.txt\" style=\"color: rgb(102, 0, 0);\">Release Notes</a></h4><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://localhost:8080/docs/changelog.html\" style=\"color: rgb(102, 0, 0);\">Changelog</a></h4><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://tomcat.apache.org/migration.html\" style=\"color: rgb(102, 0, 0);\">Migration Guide</a></h4><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://tomcat.apache.org/security.html\" style=\"color: rgb(102, 0, 0);\">Security Notices</a></h4>', '0', 'zhengjun', '2017-06-18 14:57:59', '2017-06-18 14:57:59');
INSERT INTO `announcement` VALUES ('5', '<br><pre class=\"hljs stylus\" style=\"box-sizing: border-box; font-family: monospace, monospace; font-size: 16px; display: block; overflow-x: auto; padding: 0.5em; background: rgb(63, 63, 63); color: rgb(220, 220, 220); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">javax<span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.servlet</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.ServletException</span>: Filtered request failed.\n	org<span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.apache</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.shiro</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.web</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.servlet</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.AbstractShiroFilter</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.doFilterInternal</span>(AbstractShiroFilter<span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.java</span>:<span class=\"hljs-number\" style=\"box-sizing: border-box; color: rgb(140, 208, 211);\">384</span>)\n<br></pre>', '0', 'zhengjun', '2017-06-18 14:59:15', '2017-06-18 14:59:15');

-- ----------------------------
-- Table structure for `app_info_batch`
-- ----------------------------
DROP TABLE IF EXISTS `app_info_batch`;
CREATE TABLE `app_info_batch` (
  `id` bigint(80) NOT NULL AUTO_INCREMENT,
  `target` varchar(1) DEFAULT NULL,
  `token` varchar(250) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of app_info_batch
-- ----------------------------

-- ----------------------------
-- Table structure for `assets`
-- ----------------------------
DROP TABLE IF EXISTS `assets`;
CREATE TABLE `assets` (
  `id` bigint(80) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `proName` varchar(30) DEFAULT NULL COMMENT '物品名称',
  `proNum` varchar(30) DEFAULT NULL COMMENT '物品编号',
  `proConfig` varchar(250) DEFAULT NULL COMMENT '物品配置',
  `proType` int(4) DEFAULT '5' COMMENT '物品分类 (0, "服务器"), (1, "网络设备"),  (2, "PC"),(3, "打印机"), (4, "耗材"),(5, "笔记本"),(6, "主机"),(7, "显示器") (8, "其他");',
  `proPrice` varchar(20) DEFAULT '0' COMMENT '物品价格，单位：元',
  `status` int(4) DEFAULT '0' COMMENT '正常未使用：0   已使用：1  已报废： 2',
  `operator` varchar(30) DEFAULT NULL COMMENT '操作人',
  `buy_time` datetime DEFAULT NULL COMMENT '购买时间',
  `channel` varchar(80) DEFAULT NULL COMMENT '购买渠道',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `proDes` varchar(80) DEFAULT NULL COMMENT '物品备注：描述',
  `department` varchar(30) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of assets
-- ----------------------------

-- ----------------------------
-- Table structure for `base_city`
-- ----------------------------
DROP TABLE IF EXISTS `base_city`;
CREATE TABLE `base_city` (
  `CityCode` varchar(16) NOT NULL DEFAULT '' COMMENT '城市编号。区号，0811 自贡',
  `CityName` varchar(32) DEFAULT NULL COMMENT '城市名称',
  `ProvinceCode` varchar(16) DEFAULT NULL COMMENT '城市所属省份',
  `BussinessOpenFlag` bit(1) DEFAULT b'1' COMMENT '是否开通了业务。1表示开通，则会在网站首页显示。 0 表示未开通。',
  `AddTime` datetime DEFAULT NULL,
  PRIMARY KEY (`CityCode`),
  KEY `ProvinceCode` (`ProvinceCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of base_city
-- ----------------------------
INSERT INTO `base_city` VALUES ('010', '北京', '010', '', '2015-01-03 14:10:27');

-- ----------------------------
-- Table structure for `base_district`
-- ----------------------------
DROP TABLE IF EXISTS `base_district`;
CREATE TABLE `base_district` (
  `DistrictCode` varchar(16) NOT NULL DEFAULT '' COMMENT '城市编号。区号，0811 自贡',
  `DistrictName` varchar(32) DEFAULT NULL COMMENT '城市名称',
  `ProvinceCode` varchar(16) DEFAULT NULL COMMENT '城市所属省份',
  `CityCode` varchar(255) DEFAULT NULL,
  `AddTime` datetime DEFAULT NULL,
  PRIMARY KEY (`DistrictCode`),
  KEY `ProvinceCode` (`ProvinceCode`),
  KEY `CityCode` (`CityCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of base_district
-- ----------------------------
INSERT INTO `base_district` VALUES ('1', '朝阳', '010', '010', '2015-01-15 15:17:07');
INSERT INTO `base_district` VALUES ('10', '昌平', '010', '010', '2015-01-15 15:17:07');
INSERT INTO `base_district` VALUES ('11', '宣武', '010', '010', '2015-01-16 09:27:47');
INSERT INTO `base_district` VALUES ('12', '丰台', '010', '010', '2015-01-16 09:28:07');
INSERT INTO `base_district` VALUES ('13', '海淀', '010', '010', '2015-01-16 09:28:48');
INSERT INTO `base_district` VALUES ('14', '房山', '010', '010', '2015-01-16 09:32:45');
INSERT INTO `base_district` VALUES ('15', '顺义', '010', '010', '2015-01-16 09:33:02');
INSERT INTO `base_district` VALUES ('16', '大兴', '010', '010', '2015-01-16 09:33:26');
INSERT INTO `base_district` VALUES ('17', '平谷', '010', '010', '2015-01-16 09:33:45');
INSERT INTO `base_district` VALUES ('18', '延庆', '010', '010', '2015-01-16 09:34:03');
INSERT INTO `base_district` VALUES ('2', '东城区', '010', '010', '2015-01-16 09:17:11');
INSERT INTO `base_district` VALUES ('3', '崇文区', '010', '010', '2015-01-16 09:17:57');
INSERT INTO `base_district` VALUES ('4', '石景山区', '010', '010', '2015-01-16 09:18:31');
INSERT INTO `base_district` VALUES ('5', '门头沟区', '010', '010', '2015-01-16 09:19:07');
INSERT INTO `base_district` VALUES ('6', '通州区', '010', '010', '2015-01-16 09:24:07');
INSERT INTO `base_district` VALUES ('7', '怀柔区', '010', '010', '2015-01-16 09:25:46');
INSERT INTO `base_district` VALUES ('8', '密云县', '010', '010', '2015-01-16 09:27:03');
INSERT INTO `base_district` VALUES ('9', '西城区', '010', '010', '2015-01-16 09:27:24');

-- ----------------------------
-- Table structure for `base_province`
-- ----------------------------
DROP TABLE IF EXISTS `base_province`;
CREATE TABLE `base_province` (
  `ProvinceCode` varchar(16) NOT NULL COMMENT '省份代码。如：020 广东',
  `ProvinceName` varchar(32) NOT NULL COMMENT '省份名称',
  `OpenBusinessFlag` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否开通服务。1 开通 ，  0 未开通。默认值 0 。',
  `AddTime` datetime DEFAULT NULL,
  PRIMARY KEY (`ProvinceCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of base_province
-- ----------------------------
INSERT INTO `base_province` VALUES ('010', '北京', '', '2015-02-03 10:50:38');

-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `usename` varchar(20) DEFAULT NULL COMMENT '客户姓名',
  `gender` varchar(20) DEFAULT NULL COMMENT '性别',
  `mobile` varchar(30) DEFAULT NULL COMMENT '用户手机号',
  `phone` varchar(30) DEFAULT NULL COMMENT '电话',
  `nickname` varchar(30) DEFAULT NULL COMMENT '昵称',
  `qq` varchar(30) DEFAULT NULL COMMENT 'qq号',
  `wechat` varchar(30) DEFAULT NULL COMMENT '微信号',
  `email` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `source` varchar(30) DEFAULT NULL COMMENT '客户来源来源类型（来访，来电，网络，介绍，拜访）',
  `address` varchar(255) CHARACTER SET utf32 DEFAULT NULL COMMENT '联系地址',
  `status` int(4) unsigned DEFAULT NULL COMMENT '用户状态',
  `createtime` datetime DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(255) DEFAULT NULL COMMENT '备注',
  `operator` varchar(255) DEFAULT NULL COMMENT '录入人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', '好人', '男', '11', '111', '电视', '111', '111', '111@11', null, null, null, null, '2017-06-18 19:04:26', null, null);
INSERT INTO `customer` VALUES ('7', '北京清华同方电脑科技有限公司', null, '010-211111', '1111111', '李主管', '22222', '2222', '1111', '0', '家的家黄金季节', '0', '2017-06-19 16:57:39', '2017-06-19 16:57:39', '顶顶顶顶', 'zhengjun');
INSERT INTO `customer` VALUES ('8', '张自忠', '女', '18899999999', '', '', '1233445566', '1111111', 'zhangzizhong@182.com', '0', '北京海淀区中关村1号', '0', '2017-06-19 17:15:15', '2017-06-19 17:16:10', '咨询', 'zhengjun');

-- ----------------------------
-- Table structure for `resources`
-- ----------------------------
DROP TABLE IF EXISTS `resources`;
CREATE TABLE `resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(50) DEFAULT NULL COMMENT '资源名称',
  `parentId` int(11) DEFAULT NULL COMMENT '父节点',
  `resKey` varchar(50) DEFAULT NULL COMMENT '资源key',
  `type` int(2) DEFAULT NULL COMMENT '资源类型（0：目录 1：菜单）',
  `resUrl` varchar(250) DEFAULT NULL COMMENT '资源链接',
  `level` int(11) DEFAULT NULL COMMENT '级别',
  `description` varchar(50) DEFAULT NULL COMMENT '描述',
  `status` tinyint(4) DEFAULT '0' COMMENT '状态：0 正常   1 隐藏',
  `operator` varchar(20) DEFAULT NULL COMMENT '操作人',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `pid` int(11) DEFAULT '0' COMMENT '顺序号',
  `delete_flag` tinyint(2) DEFAULT '0' COMMENT '伦理删除标志（0：正常；1：伦理删除）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of resources
-- ----------------------------
INSERT INTO `resources` VALUES ('1', '系统基础管理', '0', 'sys_mana', '0', '', '1', '管理角色，菜单', '0', '', '2015-09-10 17:02:16', '2015-08-12 16:31:11', '0', '0');
INSERT INTO `resources` VALUES ('2', '角色管理', '1', 'sys_mana_role', '1', 'role/roleList', '2', '创建角色', '0', '', '2015-08-31 15:00:48', '2015-08-12 16:33:50', '1', '0');
INSERT INTO `resources` VALUES ('3', '菜单管理', '1', 'sys_mana_menu', '1', 'resources/list', '2', '菜单新增，编辑，删除', '0', '', '2015-08-31 15:01:08', '2015-08-12 16:35:19', '2', '0');
INSERT INTO `resources` VALUES ('4', '用户管理', '0', 'user_mana', '0', '', '1', '用户管理目录', '0', '', '2015-12-02 17:07:10', '2015-12-02 17:07:07', '2', '0');
INSERT INTO `resources` VALUES ('5', '个人信息', '4', 'user_mana_personalInfo', '1', 'user/getUserInfoByUserKey', '2', '个人信息管理', '0', '', '2015-12-02 17:08:25', '2015-12-02 17:08:22', '0', '0');
INSERT INTO `resources` VALUES ('6', '用户列表', '4', 'user_mana_list', '1', 'user/userInfoList', '2', '用户列表，以及管理', '0', '', '2015-12-03 17:01:32', '2015-12-02 17:13:42', '1', '0');
INSERT INTO `resources` VALUES ('26', '服务器管理', '0', 'game_server', '0', '', '1', '游戏服务器管理', '0', 'zhengjun', '2016-03-22 16:47:15', '2016-03-22 16:46:11', '3', '1');
INSERT INTO `resources` VALUES ('27', '平台日志管理', '1', 'log_manager', '1', 'user/userLogsList', '2', '平台日志管理', '0', 'zhengjun', '2016-03-22 20:41:55', '2016-03-22 20:41:54', '3', '0');
INSERT INTO `resources` VALUES ('28', '服务器列表', '26', 'game_server_list', '1', 'tool/gameServerList', '2', '服务器列表', '0', 'zhengjun', '2016-03-24 12:16:33', '2016-03-24 12:16:33', '0', '1');
INSERT INTO `resources` VALUES ('29', '数据分析', '0', 'data_analysis', '0', '', '1', '数据分析', '0', 'zhengjun', '2016-03-25 11:44:22', '2016-03-25 11:32:45', '4', '1');
INSERT INTO `resources` VALUES ('30', 'GM功能', '0', 'gm_tool', '0', '', '1', 'GM功能', '0', 'zhengjun', '2016-03-25 11:36:56', '2016-03-25 11:36:55', '5', '1');
INSERT INTO `resources` VALUES ('31', '日关键数据', '29', 'data_day_analysis', '1', 'data/dataDayAnalysis', '2', '日关键数据', '0', 'zhengjun', '2016-03-29 14:46:20', '2016-03-29 14:46:19', '0', '1');
INSERT INTO `resources` VALUES ('32', '玩家实时查询', '30', 'user_info', '1', 'tool/usersInfoList', '2', '玩家实时查询', '0', 'zhengjun', '2016-03-30 10:30:26', '2016-03-30 10:30:25', '0', '1');
INSERT INTO `resources` VALUES ('33', '日留存', '29', 'user_day_active_retention', '1', 'data/userDayActiveRetention', '2', '日留存', '0', 'zhengjun', '2016-04-01 14:17:45', '2016-04-01 14:17:44', '1', '1');
INSERT INTO `resources` VALUES ('34', '发公告', '30', 'announcement', '1', 'tool/announcementInfoList', '2', '发公告', '0', 'zhengjun', '2016-04-11 16:42:03', '2016-04-11 16:42:02', '1', '1');
INSERT INTO `resources` VALUES ('35', '发邮件', '30', 'send_email', '1', 'tool/emailInfoList', '2', '发邮件', '0', 'zhengjun', '2016-04-12 14:45:20', '2016-04-11 16:43:58', '2', '1');
INSERT INTO `resources` VALUES ('36', '禁言|封号管理', '30', 'game_banned', '1', 'tool/gameBannedInfoList', '2', '禁言|封号', '0', 'zhengjun', '2016-04-13 14:35:03', '2016-04-13 14:35:02', '3', '1');
INSERT INTO `resources` VALUES ('37', '发物品', '30', 'game_reward', '1', 'tool/gameRewardInfoList', '2', '给玩家发放物品（资源，等级、体力、金钱、钻石）', '0', 'zhengjun', '2016-04-13 14:39:38', '2016-04-13 14:39:38', '4', '1');
INSERT INTO `resources` VALUES ('38', 'ckey激活码管理', '30', 'ckey', '1', 'tool/gameCkeyInfoList', '2', 'ckey激活码--礼包生成', '0', 'zhengjun', '2016-04-13 14:42:48', '2016-04-13 14:42:48', '5', '1');
INSERT INTO `resources` VALUES ('39', '公告列表', '26', 'notices_List', '1', 'tool/noticesList', '2', '公告列表', '0', 'zhengjun', '2016-07-11 15:39:04', '2016-07-11 15:38:47', '1', '1');
INSERT INTO `resources` VALUES ('40', '服务器实时状态', '26', 'serverInfo', '1', 'tool/serverInfoList', '2', '服务器实时状态', '0', 'zhengjun', '2016-08-29 19:20:49', '2016-08-29 19:20:49', '2', '1');
INSERT INTO `resources` VALUES ('41', '服务器运维管理', '26', 'gameServerCommand', '1', 'tool/gameServerCommandList', '2', '服务器运维管理', '0', 'zhengjun', '2016-09-09 17:23:04', '2016-09-09 17:23:04', '3', '1');
INSERT INTO `resources` VALUES ('42', '新增', '29', 'register', '0', '#', '2', '新增', '0', 'zhengjun', '2016-09-09 19:57:30', '2016-09-09 19:57:29', '2', '1');
INSERT INTO `resources` VALUES ('43', '注册统计', '42', 'register_Info', '1', 'data/dataRegisterAnalysisList', '3', '注册统计', '0', 'zhengjun', '2016-10-19 16:30:42', '2016-09-09 19:58:56', '0', '1');
INSERT INTO `resources` VALUES ('44', '在线人数统计', '29', 'online', '1', 'data/dataOnlineAnalysisList', '2', '在线人数统计', '0', 'zhengjun', '2016-10-20 17:00:44', '2016-10-20 17:00:44', '3', '1');
INSERT INTO `resources` VALUES ('45', '注册id查询', '42', 'Register', '1', 'data/dataRegisterList', '3', '注册id查询', '0', 'zhengjun', '2016-10-20 17:02:25', '2016-10-20 17:02:24', '1', '1');
INSERT INTO `resources` VALUES ('46', '账号登陆记录', '42', 'login_log', '1', '/data/dataLoginList', '3', '账号登陆记录', '0', 'zhengjun', '2016-10-20 17:03:56', '2016-10-20 17:03:56', '2', '1');
INSERT INTO `resources` VALUES ('47', '留存统计', '29', 'RetentionAnalysis', '0', '#', '2', '留存统计', '0', 'zhengjun', '2016-10-20 17:05:50', '2016-10-20 17:05:18', '4', '1');
INSERT INTO `resources` VALUES ('48', '次日注册留存统计', '47', 'one_day_retained', '1', 'data/dataRetentionAnalysisList', '3', '次日注册留存统计', '0', 'zhengjun', '2016-10-20 17:07:48', '2016-10-20 17:07:48', '0', '1');
INSERT INTO `resources` VALUES ('49', '游戏玩家', '29', 'players', '0', '#', '2', '游戏玩家', '0', 'zhengjun', '2016-11-30 16:52:40', '2016-11-30 16:52:16', '5', '1');
INSERT INTO `resources` VALUES ('50', '新增玩家', '49', 'new_players', '1', 'data/newPlayersList', '3', '新增玩家', '0', 'zhengjun', '2016-11-30 16:53:34', '2016-11-30 16:53:34', '0', '1');
INSERT INTO `resources` VALUES ('51', '活跃玩家', '49', 'active_players', '1', 'data/activePlayersList', '3', '活跃玩家', '0', 'zhengjun', '2016-11-30 16:54:29', '2016-11-30 16:54:29', '1', '1');
INSERT INTO `resources` VALUES ('52', '玩家留存', '49', 'players_retention', '1', 'data/day1RetentionList', '3', '玩家留存', '0', 'zhengjun', '2016-12-01 15:50:12', '2016-11-30 16:58:47', '2', '1');
INSERT INTO `resources` VALUES ('53', '公告管理', '0', 'notice_manage', '0', '#', '1', '公告管理', '0', 'zhengjun', '2017-06-18 14:48:17', '2017-06-18 14:47:59', '3', '0');
INSERT INTO `resources` VALUES ('54', '公告列表', '53', 'noticeList', '1', 'notice/announcementList', '2', '公告列表', '0', 'zhengjun', '2017-06-18 14:48:56', '2017-06-18 14:48:56', '0', '0');
INSERT INTO `resources` VALUES ('55', '添加公告', '53', 'addNotice', '1', 'notice/addAnnouncement', '2', '添加公告', '0', 'zhengjun', '2017-06-18 14:49:45', '2017-06-18 14:49:45', '1', '1');
INSERT INTO `resources` VALUES ('56', '房屋租赁ERP', '0', 'RENT', '0', '', '1', '房屋租赁系统', '0', 'zhengjun', '2017-06-18 15:07:49', '2017-06-18 15:07:49', '4', '0');
INSERT INTO `resources` VALUES ('57', '房源管理', '56', 'Housing management', '0', '', '2', '房源管理', '0', 'zhengjun', '2017-06-18 15:11:06', '2017-06-18 15:11:06', '0', '0');
INSERT INTO `resources` VALUES ('58', '房源列表', '57', 'HouseList', '1', 'house/houseList', '3', '房源列表', '0', 'zhengjun', '2017-06-18 15:11:49', '2017-06-18 15:11:49', '0', '0');
INSERT INTO `resources` VALUES ('59', '客户管理', '56', 'CustomerManage', '0', '', '2', '客户管理', '0', 'zhengjun', '2017-06-18 15:13:27', '2017-06-18 15:13:27', '1', '0');
INSERT INTO `resources` VALUES ('60', '客户列表', '59', 'CustomerList', '1', 'customer/customerList', '3', '客户列表', '0', 'zhengjun', '2017-06-18 15:14:01', '2017-06-18 15:14:01', '0', '0');

-- ----------------------------
-- Table structure for `resources_role`
-- ----------------------------
DROP TABLE IF EXISTS `resources_role`;
CREATE TABLE `resources_role` (
  `resc_id` int(11) NOT NULL COMMENT '资源id',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  PRIMARY KEY (`resc_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of resources_role
-- ----------------------------
INSERT INTO `resources_role` VALUES ('1', '1');
INSERT INTO `resources_role` VALUES ('2', '1');
INSERT INTO `resources_role` VALUES ('3', '1');
INSERT INTO `resources_role` VALUES ('4', '1');
INSERT INTO `resources_role` VALUES ('4', '2');
INSERT INTO `resources_role` VALUES ('4', '4');
INSERT INTO `resources_role` VALUES ('4', '11');
INSERT INTO `resources_role` VALUES ('5', '1');
INSERT INTO `resources_role` VALUES ('5', '2');
INSERT INTO `resources_role` VALUES ('5', '4');
INSERT INTO `resources_role` VALUES ('5', '11');
INSERT INTO `resources_role` VALUES ('6', '1');
INSERT INTO `resources_role` VALUES ('6', '4');
INSERT INTO `resources_role` VALUES ('18', '4');
INSERT INTO `resources_role` VALUES ('19', '4');
INSERT INTO `resources_role` VALUES ('20', '2');
INSERT INTO `resources_role` VALUES ('21', '2');
INSERT INTO `resources_role` VALUES ('22', '2');
INSERT INTO `resources_role` VALUES ('23', '2');
INSERT INTO `resources_role` VALUES ('24', '2');
INSERT INTO `resources_role` VALUES ('25', '4');
INSERT INTO `resources_role` VALUES ('27', '1');
INSERT INTO `resources_role` VALUES ('53', '1');
INSERT INTO `resources_role` VALUES ('53', '11');
INSERT INTO `resources_role` VALUES ('54', '1');
INSERT INTO `resources_role` VALUES ('54', '11');
INSERT INTO `resources_role` VALUES ('56', '1');
INSERT INTO `resources_role` VALUES ('56', '11');
INSERT INTO `resources_role` VALUES ('57', '1');
INSERT INTO `resources_role` VALUES ('57', '11');
INSERT INTO `resources_role` VALUES ('58', '1');
INSERT INTO `resources_role` VALUES ('58', '11');
INSERT INTO `resources_role` VALUES ('59', '1');
INSERT INTO `resources_role` VALUES ('59', '11');
INSERT INTO `resources_role` VALUES ('60', '1');
INSERT INTO `resources_role` VALUES ('60', '11');

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `role_name` varchar(32) DEFAULT NULL COMMENT '角色名',
  `role_sign` varchar(32) DEFAULT NULL COMMENT '角色标识,程序中判断使用,如"admin"',
  `description` varchar(50) DEFAULT NULL COMMENT '角色描述,UI界面显示使用',
  `status` tinyint(4) DEFAULT '0' COMMENT '状态：0 正常 1 失效',
  `operator` varchar(20) DEFAULT NULL COMMENT '操作人',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='角色表';

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', 'superAdmin', '超级管理员：所有权限', '0', 'zhengjun', '2015-12-03 15:06:45', '2015-12-03 15:06:45');
INSERT INTO `role` VALUES ('5', '产品人员', 'productUser', '产品', '0', 'zhengjun', '2016-03-22 17:37:59', '2016-03-22 17:37:59');
INSERT INTO `role` VALUES ('6', '运营人员', 'operationalUser', '运营', '0', 'zhengjun', '2016-03-22 17:38:42', '2016-03-22 17:38:42');
INSERT INTO `role` VALUES ('7', '研发', 'openUser', '研发', '0', 'zhengjun', '2016-03-22 17:39:09', '2016-03-22 17:39:09');
INSERT INTO `role` VALUES ('8', '平台管理员', 'openAdmin', '平台管理员', '0', 'zhengjun', '2016-03-22 17:39:49', '2016-03-22 17:39:49');
INSERT INTO `role` VALUES ('9', '经纪人', 'agent', '经纪人', '0', 'zhengjun', '2017-06-18 15:03:19', '2017-06-18 15:03:19');
INSERT INTO `role` VALUES ('10', '店长', 'shopkeeper', '店长', '0', 'zhengjun', '2017-06-18 15:04:19', '2017-06-18 15:04:19');
INSERT INTO `role` VALUES ('11', '经理', 'manager', '经理', '0', 'zhengjun', '2017-06-18 15:04:47', '2017-06-18 15:04:47');

-- ----------------------------
-- Table structure for `user_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_key` varchar(255) NOT NULL COMMENT '用户key',
  `user_mobile` varchar(255) DEFAULT NULL COMMENT '手机号',
  `password` varchar(255) NOT NULL COMMENT '登录密码',
  `groupname` varchar(255) DEFAULT NULL COMMENT '组名',
  `email` varchar(30) DEFAULT NULL,
  `log_level` int(11) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL COMMENT '0--启用；1--禁用',
  `team_id` int(11) DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `operator` varchar(255) DEFAULT NULL,
  `bank` varchar(100) DEFAULT NULL COMMENT '开户银行',
  `id_number` varchar(20) DEFAULT NULL COMMENT '用户详细补充内容--身份证号码',
  `bank_card` varchar(50) DEFAULT NULL COMMENT '银行卡',
  `province` varchar(100) DEFAULT NULL COMMENT '省份',
  `city` varchar(100) DEFAULT NULL COMMENT '城市--地级市',
  `county` varchar(100) DEFAULT NULL COMMENT '县级市',
  `bank_subbranch` varchar(255) DEFAULT NULL COMMENT '支行名称--xxx支行xxx分理处',
  `readid` int(8) DEFAULT NULL COMMENT '已阅读最新公告Id--',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_key` (`user_key`) USING BTREE,
  KEY `index_userKey_Mobile` (`user_key`,`user_mobile`) USING BTREE,
  KEY `index_password` (`password`) USING BTREE,
  KEY `idx_groupname` (`groupname`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'zhengjun', '0', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'superAdmin', '', '0', 'zhengjun', '', '0', null, '2017-06-19 15:30:52', '2017-06-19 15:30:52', 'user', '', '1', '', '', '', '', '', null);
INSERT INTO `user_info` VALUES ('2', 'user', null, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'manager', null, null, 'user', null, '0', null, '2017-06-19 15:28:15', '2017-06-19 15:28:15', 'zhengjun', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `user_log`
-- ----------------------------
DROP TABLE IF EXISTS `user_log`;
CREATE TABLE `user_log` (
  `id` bigint(80) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `login_name` varchar(50) NOT NULL COMMENT '操作人',
  `login_ip` varchar(200) DEFAULT NULL COMMENT 'ip',
  `createTime` datetime DEFAULT NULL COMMENT '操作时间',
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后更新时间',
  `operation` varchar(50) DEFAULT NULL COMMENT '操作描述：“用户登陆，用户退出、查看服务器列表，添加用户，删除用户等等”',
  `log_level` tinyint(2) DEFAULT '0' COMMENT '日志级别：0:登陆、退出  1：查看、2：新增、编辑、删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=275 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_log
-- ----------------------------
INSERT INTO `user_log` VALUES ('244', 'zhengjun', '192.168.1.104', '2017-06-18 11:49:40', '2017-06-18 11:49:40', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('245', 'zhengjun', '192.168.1.104', '2017-06-18 11:53:32', '2017-06-18 11:53:32', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('246', 'zhengjun', '192.168.1.104', '2017-06-18 13:52:28', '2017-06-18 13:52:28', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('247', 'zhengjun', '192.168.1.104', '2017-06-18 13:52:28', '2017-06-18 13:52:28', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('248', 'zhengjun', '192.168.1.104', '2017-06-18 18:51:00', '2017-06-18 18:51:00', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('249', 'zhengjun', '192.168.1.104', '2017-06-18 18:51:00', '2017-06-18 18:51:00', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('250', 'zhengjun', '192.168.1.104', '2017-06-18 19:44:53', '2017-06-18 19:44:53', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('251', 'zhengjun', '192.168.1.104', '2017-06-18 19:44:53', '2017-06-18 19:44:53', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('252', 'zhengjun', '192.168.1.104', '2017-06-18 22:35:53', '2017-06-18 22:35:53', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('253', 'zhengjun', '192.168.1.104', '2017-06-18 22:35:53', '2017-06-18 22:35:53', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('254', 'zhengjun', '192.168.1.104', '2017-06-18 22:42:58', '2017-06-18 22:42:58', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('255', 'zhengjun', '192.168.1.104', '2017-06-18 22:42:58', '2017-06-18 22:42:58', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('256', 'zhengjun', '192.168.0.31', '2017-06-19 15:10:17', '2017-06-19 15:10:17', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('257', 'zhengjun', '192.168.0.31', '2017-06-19 15:10:17', '2017-06-19 15:10:17', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('258', 'zhengjun', '192.168.0.31', '2017-06-19 15:10:18', '2017-06-19 15:10:18', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('259', 'zhengjun', '192.168.0.31', '2017-06-19 15:28:54', '2017-06-19 15:28:54', 'zhengjun登出成功！', '0');
INSERT INTO `user_log` VALUES ('260', 'user', '192.168.0.31', '2017-06-19 15:29:12', '2017-06-19 15:29:12', 'user登陆成功！', '0');
INSERT INTO `user_log` VALUES ('261', 'user', '192.168.0.31', '2017-06-19 15:29:12', '2017-06-19 15:29:12', 'user登陆成功！', '0');
INSERT INTO `user_log` VALUES ('262', 'user', '192.168.0.31', '2017-06-19 15:30:20', '2017-06-19 15:30:20', 'user登出成功！', '0');
INSERT INTO `user_log` VALUES ('263', 'user', '192.168.0.31', '2017-06-19 15:30:43', '2017-06-19 15:30:43', 'user登陆成功！', '0');
INSERT INTO `user_log` VALUES ('264', 'user', '192.168.0.31', '2017-06-19 15:30:43', '2017-06-19 15:30:43', 'user登陆成功！', '0');
INSERT INTO `user_log` VALUES ('265', 'user', '192.168.0.31', '2017-06-19 15:30:58', '2017-06-19 15:30:58', 'user登出成功！', '0');
INSERT INTO `user_log` VALUES ('266', 'zhengjun', '192.168.0.31', '2017-06-19 15:31:07', '2017-06-19 15:31:07', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('267', 'zhengjun', '192.168.0.31', '2017-06-19 15:31:07', '2017-06-19 15:31:07', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('268', 'zhengjun', '192.168.0.31', '2017-06-20 17:56:35', '2017-06-20 17:56:35', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('269', 'zhengjun', '192.168.0.31', '2017-06-20 17:56:35', '2017-06-20 17:56:35', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('270', 'zhengjun', '192.168.0.31', '2017-06-20 17:56:36', '2017-06-20 17:56:36', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('271', 'zhengjun', '192.168.0.31', '2017-06-20 18:12:17', '2017-06-20 18:12:17', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('272', 'zhengjun', '192.168.0.31', '2017-06-20 18:12:17', '2017-06-20 18:12:17', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('273', 'zhengjun', '192.168.0.31', '2017-06-20 18:16:54', '2017-06-20 18:16:54', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('274', 'zhengjun', '192.168.0.31', '2017-06-20 18:16:54', '2017-06-20 18:16:54', 'zhengjun登陆成功！', '0');

-- ----------------------------
-- Table structure for `use_record`
-- ----------------------------
DROP TABLE IF EXISTS `use_record`;
CREATE TABLE `use_record` (
  `id` bigint(80) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `pro_id` bigint(80) NOT NULL COMMENT '物品id',
  `user_name` varchar(80) NOT NULL COMMENT '当前使用者',
  `use_status` int(4) DEFAULT '0' COMMENT '未使用：0   已使用：1 ',
  `use_address` varchar(200) DEFAULT NULL COMMENT '使用地点',
  `application_name` varchar(30) DEFAULT NULL COMMENT '申请人',
  `adscription_name` varchar(30) DEFAULT NULL COMMENT '归属人',
  `operators` varchar(30) DEFAULT NULL COMMENT '操作人',
  `start_time` datetime DEFAULT NULL COMMENT '使用开始时间',
  `end_time` datetime DEFAULT NULL COMMENT '使用结束时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of use_record
-- ----------------------------
