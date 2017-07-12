/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : sky

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2017-07-12 16:37:49
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of announcement
-- ----------------------------
INSERT INTO `announcement` VALUES ('2', '的顶顶顶顶顶顶顶顶顶宿舍<br>', '1', 'zhengjun', '2017-06-18 14:57:06', '2017-06-18 14:57:06');
INSERT INTO `announcement` VALUES ('3', '刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军刷卡机军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军', '0', 'zhengjun', '2017-06-18 14:56:34', '2017-06-18 14:56:34');
INSERT INTO `announcement` VALUES ('4', '<h3 style=\"margin: 0px 0px 0.5em; font-size: 14pt; color: rgb(153, 102, 51); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">Managing Tomcat</h3><p style=\"margin: 0px 0px 0.1em; font-size: 10.5pt; color: rgb(119, 85, 51); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">For security, access to the<span>&nbsp;</span><a href=\"http://localhost:8080/manager/html\" style=\"color: rgb(102, 0, 0);\">manager webapp</a><span>&nbsp;</span>is restricted. Users are defined in:</p><pre style=\"text-indent: 0.25em; width: 264.6px; font-size: 11.7px; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">$CATALINA_HOME/conf/tomcat-users.xml</pre><p style=\"margin: 0px 0px 0.1em; font-size: 10.5pt; color: rgb(119, 85, 51); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">In Tomcat 7.0 access to the manager application is split between different users. &nbsp;<span>&nbsp;</span><a href=\"http://localhost:8080/docs/manager-howto.html\" style=\"color: rgb(102, 0, 0);\">Read more...</a></p><br style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://localhost:8080/docs/RELEASE-NOTES.txt\" style=\"color: rgb(102, 0, 0);\">Release Notes</a></h4><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://localhost:8080/docs/changelog.html\" style=\"color: rgb(102, 0, 0);\">Changelog</a></h4><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://tomcat.apache.org/migration.html\" style=\"color: rgb(102, 0, 0);\">Migration Guide</a></h4><h4 style=\"margin: 0px 0px 0.5em; font-size: medium; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"http://tomcat.apache.org/security.html\" style=\"color: rgb(102, 0, 0);\">Security Notices</a></h4>', '0', 'zhengjun', '2017-06-18 14:57:59', '2017-06-18 14:57:59');
INSERT INTO `announcement` VALUES ('5', '<br><pre class=\"hljs stylus\" style=\"box-sizing: border-box; font-family: monospace, monospace; font-size: 16px; display: block; overflow-x: auto; padding: 0.5em; background: rgb(63, 63, 63); color: rgb(220, 220, 220); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\">javax<span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.servlet</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.ServletException</span>: Filtered request failed.\n	org<span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.apache</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.shiro</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.web</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.servlet</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.AbstractShiroFilter</span><span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.doFilterInternal</span>(AbstractShiroFilter<span class=\"hljs-selector-class\" style=\"box-sizing: border-box; color: rgb(239, 239, 143);\">.java</span>:<span class=\"hljs-number\" style=\"box-sizing: border-box; color: rgb(140, 208, 211);\">384</span>)\n<br></pre>', '0', 'zhengjun', '2017-06-18 14:59:15', '2017-06-18 14:59:15');
INSERT INTO `announcement` VALUES ('6', '?????', '1', 'zhengjun', '2017-07-02 05:23:47', '2017-07-02 05:23:47');
INSERT INTO `announcement` VALUES ('7', 'hjdajh江湖救急', '1', 'zhengjun', '2017-07-02 08:44:17', '2017-07-02 08:44:17');
INSERT INTO `announcement` VALUES ('8', '鼓励可成功与否刚吃过一次更好更好看&nbsp;', '0', 'zhengjun', '2017-07-02 18:43:06', '2017-07-02 18:43:06');
INSERT INTO `announcement` VALUES ('9', '房源录入，房源列表基础信息完成', '0', 'shiwenzhi', '2017-07-04 08:15:23', '2017-07-04 08:15:23');
INSERT INTO `announcement` VALUES ('10', '222222222222222', '0', 'zhengjun', '2017-07-05 17:56:02', '2017-07-05 17:56:02');
INSERT INTO `announcement` VALUES ('11', '22222222222', '0', 'zhengjun', '2017-07-05 17:56:06', '2017-07-05 17:56:06');
INSERT INTO `announcement` VALUES ('12', '22222222222222', '0', 'zhengjun', '2017-07-05 17:56:10', '2017-07-05 17:56:10');
INSERT INTO `announcement` VALUES ('13', '222222222', '0', 'zhengjun', '2017-07-05 17:56:13', '2017-07-05 17:56:13');
INSERT INTO `announcement` VALUES ('14', '2222222', '0', 'zhengjun', '2017-07-05 17:56:18', '2017-07-05 17:56:18');
INSERT INTO `announcement` VALUES ('15', '22222222222', '0', 'zhengjun', '2017-07-05 17:56:22', '2017-07-05 17:56:22');
INSERT INTO `announcement` VALUES ('16', '2222222222', '0', 'zhengjun', '2017-07-05 17:56:27', '2017-07-05 17:56:27');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Table structure for `base_configuration`
-- ----------------------------
DROP TABLE IF EXISTS `base_configuration`;
CREATE TABLE `base_configuration` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(30) DEFAULT NULL COMMENT '配置名称',
  `value` varchar(250) DEFAULT NULL COMMENT '配置值（顺序|名称值，顺序|名称值）装修情况  0|毛坯,1|简装，2|普装，3|精装，4|豪装',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of base_configuration
-- ----------------------------

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
-- Table structure for `base_house`
-- ----------------------------
DROP TABLE IF EXISTS `base_house`;
CREATE TABLE `base_house` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(50) DEFAULT NULL COMMENT '房源标题',
  `type` int(4) DEFAULT NULL COMMENT '房源类型（1：住宅，2写字楼，3别墅..）',
  `housename` varchar(30) DEFAULT NULL COMMENT '房源名称',
  `tradetype` int(4) DEFAULT '0' COMMENT '交易类型（1出租,2出售，3求租,4求售，0租售）',
  `price` double(10,0) DEFAULT NULL COMMENT '售价（单位元）',
  `rental` double(10,0) DEFAULT NULL COMMENT '租价',
  `unitprice` double(10,0) DEFAULT NULL COMMENT '单价（售价/面积）',
  `rentalpricetype` int(4) DEFAULT NULL COMMENT '租金单位-元/月，元/季度，元/日，元/年，元/半年，元/',
  `floor` int(4) DEFAULT NULL COMMENT '楼层',
  `room` varchar(30) DEFAULT NULL COMMENT '房间号',
  `acreage` double(255,0) DEFAULT NULL COMMENT '面积',
  `orientation` varchar(8) DEFAULT NULL COMMENT '朝向',
  `officetag` varchar(30) DEFAULT NULL COMMENT '写字楼标签',
  `officetype` varchar(8) DEFAULT NULL COMMENT '写字楼类型(1,2,3)',
  `paymentmethod` varchar(20) DEFAULT NULL COMMENT '付款方式（1，押一付三，2，季付，3半年）',
  `seemethod` varchar(20) DEFAULT NULL COMMENT '看房方式（1，提前预约，2，直接带看，3，借钥匙带看）',
  `source` varchar(20) DEFAULT NULL COMMENT '来源',
  `iskey` varchar(20) DEFAULT NULL COMMENT '是否有钥匙',
  `remarks` varchar(255) DEFAULT NULL COMMENT '备注说明',
  `image` varchar(255) DEFAULT NULL COMMENT '图片，逗号分隔',
  `createtime` datetime DEFAULT NULL COMMENT '创建时间',
  `updatetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `operator` varchar(30) DEFAULT NULL COMMENT '操作人',
  `founder` varchar(30) DEFAULT NULL COMMENT '创建人',
  `owner` varchar(30) DEFAULT NULL COMMENT '业主',
  `ownerphone` varchar(30) DEFAULT NULL COMMENT '业主电话',
  `propertycompany` varchar(30) DEFAULT NULL COMMENT '物业公司',
  `propertphone` varchar(30) DEFAULT NULL COMMENT '物业电话',
  `housestatus` int(4) DEFAULT '0' COMMENT '房源租售状态---（状态   - 0有效、1暂缓、2他租、3我租）',
  `properties` int(4) DEFAULT '0' COMMENT '房源属性（1推荐，0普通）',
  `status` int(4) DEFAULT '0' COMMENT '房源状态0正常，1删除',
  `isfollow` int(4) DEFAULT '0' COMMENT '是否有跟进(0,待跟进 1，跟进中，2跟进完毕)',
  `follownum` int(4) DEFAULT '0' COMMENT '跟进次数',
  `seenum` int(4) DEFAULT '0' COMMENT '查看此房源（人数）',
  `followsee` int(4) DEFAULT '0' COMMENT '是否已带看 0 未带看 1 已带看',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of base_house
-- ----------------------------
INSERT INTO `base_house` VALUES ('4', null, '3', '中关村soho', '1', null, '8', null, '5', '8', '805', '350', '5', '1,2', null, '1', '0', '1', null, '七月底到期', null, '2017-07-05 00:00:06', '2017-07-05 00:00:06', 'shiwenzhi', 'shiwenzhi', '魏', '13910340700', null, null, '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `base_house` VALUES ('5', '', '3', '中关村soho', '1', null, '8', null, '5', '8', '819', '339', '3', '1,2', '', '1', '0', '3', '', '8元含物业取暖，直接去看', '', '2017-07-05 04:09:10', '2017-07-05 04:09:10', 'shiwenzhi', 'shiwenzhi', '陈姐', '13910731999', '', '', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `base_house` VALUES ('6', '', '1', '新中关', '0', null, '12', null, '0', '791011', '791011', '4800', '0', '1', '', '0', '0', '1', '', '开发商 看房先和人发个信息', '', '2017-07-05 04:18:31', '2017-07-05 04:18:31', 'huyafei', 'huyafei', '孙', '13641087938', '', '', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `base_house` VALUES ('8', '', '3', '中关村大厦', '1', null, '9', null, '0', null, null, '370', '0', '', '', '0', '0', '1', '', '看房直接打电话 8.8全含 半个月中介费', '', '2017-07-05 04:20:44', '2017-07-05 04:20:44', 'huyafei', 'huyafei', '物业', '010-51905900', '', '', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `base_house` VALUES ('10', '', '1', '银网中心', '0', null, '10', null, '0', '12', null, '500', '0', '', '', '0', '0', '1', '', '房子空置看房随时，10块全含 半个月中介费', '', '2017-07-05 04:25:28', '2017-07-05 04:25:28', 'huyafei', 'huyafei', '物业', '13911995361', '', '', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `base_house` VALUES ('13', '', '3', '中关村soho', '1', null, '8', null, '5', '15', '1518', '147', '5', '', '', '1', '0', '1', '', '随时可以看，报价8.5元，合同长签可以八块，免租期再谈，中介费一个月。', '', '2017-07-05 04:52:14', '2017-07-05 04:52:14', 'shiwenzhi', 'shiwenzhi', '余康', '13910690649', '', '', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `base_house` VALUES ('14', '', '1', '皇冠假日', '0', null, '8', null, '0', null, null, '530', '0', '', '', '0', '0', '1', '', '8.5全含反一个月中介费', '', '2017-07-05 05:07:14', '2017-07-05 05:07:14', 'huyafei', 'huyafei', '物业', '59938991', '', '', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `base_house` VALUES ('15', '', '1', '理想国际', '0', null, '16', null, '0', '16', 'B1611', '1353', '0', '', '', '0', '0', '1', '', '物业的房子 反一个月', '', '2017-07-05 05:09:00', '2017-07-12 15:55:16', 'zhengjun', 'zhengjun', '物业', '15910510257', '', '', '0', '0', '0', '0', '0', '0', '0');

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
-- Table structure for `black_agent`
-- ----------------------------
DROP TABLE IF EXISTS `black_agent`;
CREATE TABLE `black_agent` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(30) NOT NULL COMMENT '中介姓名',
  `phone` varchar(30) NOT NULL COMMENT '中介电话',
  `remarks` varchar(250) DEFAULT NULL COMMENT '备注说明',
  `createtime` datetime DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `operator` varchar(30) DEFAULT NULL COMMENT '操作人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of black_agent
-- ----------------------------
INSERT INTO `black_agent` VALUES ('2', '热气球', '111111', '打我我多玩', '2017-07-02 11:53:30', '2017-07-02 11:53:30', 'zhengjun');

-- ----------------------------
-- Table structure for `comms`
-- ----------------------------
DROP TABLE IF EXISTS `comms`;
CREATE TABLE `comms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL COMMENT '小区唯一ID号',
  `url` varchar(300) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL COMMENT '名称',
  `address` varchar(300) DEFAULT NULL COMMENT '地址',
  `lat` double DEFAULT NULL COMMENT '纬度',
  `lon` double DEFAULT NULL COMMENT '经度',
  `dev` varchar(200) DEFAULT NULL COMMENT '开发商',
  `pm_name` varchar(200) DEFAULT NULL COMMENT '物业公司',
  `pm_type` varchar(100) DEFAULT NULL COMMENT '物业类型',
  `pm_fee` double DEFAULT NULL COMMENT '物业费用',
  `total_area` double DEFAULT NULL COMMENT '总建面',
  `houses` int(11) DEFAULT NULL COMMENT '总户数',
  `build_time` datetime DEFAULT NULL COMMENT '建造年代',
  `plot_ratio` double DEFAULT NULL COMMENT '容积率',
  `o_rate` double DEFAULT NULL COMMENT '出租率：0.8',
  `parking` int(11) DEFAULT NULL COMMENT '停车位数量',
  `district` varchar(200) DEFAULT NULL COMMENT '区域名称： 朝阳 亚运村小营',
  `g_rate` double DEFAULT NULL COMMENT '绿化率:0.367',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='	';

-- ----------------------------
-- Records of comms
-- ----------------------------

-- ----------------------------
-- Table structure for `comm_prices`
-- ----------------------------
DROP TABLE IF EXISTS `comm_prices`;
CREATE TABLE `comm_prices` (
  `cid` int(11) NOT NULL,
  `time` datetime NOT NULL COMMENT '时间',
  `price` double DEFAULT NULL COMMENT '价格',
  PRIMARY KEY (`cid`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comm_prices
-- ----------------------------

-- ----------------------------
-- Table structure for `comm_sells`
-- ----------------------------
DROP TABLE IF EXISTS `comm_sells`;
CREATE TABLE `comm_sells` (
  `hid` varchar(100) NOT NULL COMMENT '售房ID',
  `url` varchar(300) DEFAULT NULL,
  `total_price` double DEFAULT NULL COMMENT '售价',
  `price` double DEFAULT NULL,
  `d_payment` double DEFAULT NULL COMMENT '首付（元）',
  `m_payment` double DEFAULT NULL COMMENT '月供',
  `cid` int(11) DEFAULT NULL COMMENT '小区ID',
  `h_type` varchar(300) DEFAULT NULL COMMENT '房型',
  `area` double DEFAULT NULL COMMENT '面积',
  `dir` varchar(45) DEFAULT NULL COMMENT '朝向',
  `floor` varchar(45) DEFAULT NULL COMMENT '楼层',
  `decoration` varchar(45) DEFAULT NULL COMMENT '装修',
  `type` varchar(45) DEFAULT NULL COMMENT '房屋类型（普通住宅）',
  `de` longtext COMMENT '房源描述',
  `tags` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`hid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comm_sells
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------

-- ----------------------------
-- Table structure for `office_building`
-- ----------------------------
DROP TABLE IF EXISTS `office_building`;
CREATE TABLE `office_building` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `address` varchar(30) NOT NULL COMMENT '地址（address）（楼盘，写字楼，小区）',
  `location` varchar(30) DEFAULT NULL COMMENT '地图坐标',
  `poitype` varchar(30) DEFAULT NULL COMMENT '类型（poitype）',
  `realaddress` varchar(250) DEFAULT NULL COMMENT '坐标反序列的地址',
  `areaid` varchar(30) DEFAULT NULL COMMENT '所在省市区的区',
  `status` int(4) DEFAULT NULL COMMENT '状态（预留字段）',
  `remarks` varchar(250) DEFAULT NULL COMMENT '备注说明',
  `operator` varchar(30) DEFAULT NULL COMMENT '操作人',
  `createtime` datetime DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of office_building
-- ----------------------------

-- ----------------------------
-- Table structure for `operator_log`
-- ----------------------------
DROP TABLE IF EXISTS `operator_log`;
CREATE TABLE `operator_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `visitId` varchar(30) DEFAULT NULL COMMENT '浏览id,',
  `content` varchar(500) DEFAULT NULL COMMENT '内容',
  `type` varchar(30) DEFAULT NULL COMMENT '操作类型（浏览，编辑，删除）',
  `operator` varchar(30) DEFAULT NULL COMMENT '操作人',
  `createtime` datetime DEFAULT NULL COMMENT '操作时间',
  `remark` varchar(2000) DEFAULT NULL COMMENT '操作说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of operator_log
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
INSERT INTO `resources` VALUES ('53', '公告管理', '0', 'notice_manage', '0', '#', '1', '公告管理', '0', 'zhengjun', '2017-07-02 08:34:03', '2017-06-18 14:47:59', '3', '0');
INSERT INTO `resources` VALUES ('54', '公告列表', '53', 'noticeList', '1', 'notice/announcementList', '2', '公告列表', '0', 'zhengjun', '2017-06-18 14:48:56', '2017-06-18 14:48:56', '0', '0');
INSERT INTO `resources` VALUES ('55', '添加公告', '53', 'addNotice', '1', 'notice/addAnnouncement', '2', '添加公告', '0', 'zhengjun', '2017-06-18 14:49:45', '2017-06-18 14:49:45', '1', '1');
INSERT INTO `resources` VALUES ('56', '房屋租赁ERP', '0', 'RENT', '0', '', '1', '房屋租赁系统', '0', 'zhengjun', '2017-06-18 15:07:49', '2017-06-18 15:07:49', '4', '0');
INSERT INTO `resources` VALUES ('57', '房源管理', '56', 'Housing management', '0', '', '2', '房源管理', '0', 'zhengjun', '2017-06-18 15:11:06', '2017-06-18 15:11:06', '0', '0');
INSERT INTO `resources` VALUES ('58', '房源列表', '57', 'HouseList', '1', 'base/baseHouseList', '3', '房源列表', '0', 'zhengjun', '2017-07-04 17:37:09', '2017-06-18 15:11:49', '0', '0');
INSERT INTO `resources` VALUES ('59', '客户管理', '56', 'CustomerManage', '0', '', '2', '客户管理', '0', 'zhengjun', '2017-06-18 15:13:27', '2017-06-18 15:13:27', '1', '0');
INSERT INTO `resources` VALUES ('60', '客户列表', '59', 'CustomerList', '1', 'customer/customerList', '3', '客户列表', '0', 'zhengjun', '2017-06-18 15:14:01', '2017-06-18 15:14:01', '0', '0');
INSERT INTO `resources` VALUES ('61', '中介黑名单', '56', 'black_agent', '0', '', '2', '中介黑名单', '0', 'zhengjun', '2017-07-02 07:51:30', '2017-06-25 20:12:57', '2', '0');
INSERT INTO `resources` VALUES ('62', '普通配置', '56', 'base_configuration', '0', '#', '2', '普通配置', '0', 'zhengjun', '2017-06-25 20:20:57', '2017-06-25 20:14:08', '3', '0');
INSERT INTO `resources` VALUES ('63', '写字楼管理', '56', 'office_building', '0', '#', '2', '写字楼管理', '0', 'zhengjun', '2017-06-25 20:16:42', '2017-06-25 20:16:42', '4', '0');
INSERT INTO `resources` VALUES ('64', '写字楼列表', '63', 'office_building', '1', 'office/officeBuildingInfoList', '3', '写字楼列表', '0', 'zhengjun', '2017-06-25 20:17:41', '2017-06-25 20:17:41', '0', '0');
INSERT INTO `resources` VALUES ('65', '基础配置列表', '62', 'baseconfigurationList', '1', 'base/config/baseConfigurationInfoList', '3', '基础配置列表', '0', 'zhengjun', '2017-07-02 08:00:43', '2017-06-25 20:20:48', '0', '0');
INSERT INTO `resources` VALUES ('66', '中介黑名单列表', '61', 'blackAgentInfoList', '1', 'black/blackAgentInfoList', '3', '中介黑名单列表', '0', 'zhengjun', '2017-07-02 07:53:08', '2017-07-02 07:53:08', '0', '0');
INSERT INTO `resources` VALUES ('67', '房源录入', '57', 'addHouseHouse', '1', 'base/addBaseHouse', '3', '房源录入', '0', 'zhengjun', '2017-07-04 17:37:36', '2017-07-02 23:54:50', '1', '0');
INSERT INTO `resources` VALUES ('68', '公司公告', '56', 'announcement', '0', '#', '2', '公司公告', '0', 'zhengjun', '2017-07-03 11:57:39', '2017-07-02 23:57:28', '5', '0');
INSERT INTO `resources` VALUES ('69', '公告列表', '68', 'announcement', '1', 'notice/announcementList', '3', '公告列表', '0', 'zhengjun', '2017-07-03 11:58:57', '2017-07-02 23:58:58', '0', '0');
INSERT INTO `resources` VALUES ('70', '查看房源', '57', 'housedetail', '1', 'source/getHousereSources', '3', '查看房源', '0', 'zhengjun', '2017-07-03 12:26:20', '2017-07-03 00:26:21', '2', '0');
INSERT INTO `resources` VALUES ('71', '写字楼房源添加', '57', 'addbasehouse', '1', 'base/addBaseHouse', '3', '写字楼房源添加', '0', 'zhengjun', '2017-07-04 11:20:12', '2017-07-03 23:20:12', '3', '0');

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
INSERT INTO `resources_role` VALUES ('4', '9');
INSERT INTO `resources_role` VALUES ('4', '10');
INSERT INTO `resources_role` VALUES ('4', '11');
INSERT INTO `resources_role` VALUES ('5', '1');
INSERT INTO `resources_role` VALUES ('5', '2');
INSERT INTO `resources_role` VALUES ('5', '4');
INSERT INTO `resources_role` VALUES ('5', '9');
INSERT INTO `resources_role` VALUES ('5', '10');
INSERT INTO `resources_role` VALUES ('5', '11');
INSERT INTO `resources_role` VALUES ('6', '1');
INSERT INTO `resources_role` VALUES ('6', '4');
INSERT INTO `resources_role` VALUES ('6', '11');
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
INSERT INTO `resources_role` VALUES ('53', '9');
INSERT INTO `resources_role` VALUES ('53', '10');
INSERT INTO `resources_role` VALUES ('53', '11');
INSERT INTO `resources_role` VALUES ('54', '1');
INSERT INTO `resources_role` VALUES ('54', '9');
INSERT INTO `resources_role` VALUES ('54', '10');
INSERT INTO `resources_role` VALUES ('54', '11');
INSERT INTO `resources_role` VALUES ('56', '1');
INSERT INTO `resources_role` VALUES ('56', '9');
INSERT INTO `resources_role` VALUES ('56', '10');
INSERT INTO `resources_role` VALUES ('56', '11');
INSERT INTO `resources_role` VALUES ('57', '1');
INSERT INTO `resources_role` VALUES ('57', '9');
INSERT INTO `resources_role` VALUES ('57', '10');
INSERT INTO `resources_role` VALUES ('57', '11');
INSERT INTO `resources_role` VALUES ('58', '1');
INSERT INTO `resources_role` VALUES ('58', '9');
INSERT INTO `resources_role` VALUES ('58', '10');
INSERT INTO `resources_role` VALUES ('58', '11');
INSERT INTO `resources_role` VALUES ('59', '1');
INSERT INTO `resources_role` VALUES ('59', '9');
INSERT INTO `resources_role` VALUES ('59', '10');
INSERT INTO `resources_role` VALUES ('59', '11');
INSERT INTO `resources_role` VALUES ('60', '1');
INSERT INTO `resources_role` VALUES ('60', '9');
INSERT INTO `resources_role` VALUES ('60', '10');
INSERT INTO `resources_role` VALUES ('60', '11');
INSERT INTO `resources_role` VALUES ('61', '1');
INSERT INTO `resources_role` VALUES ('61', '9');
INSERT INTO `resources_role` VALUES ('61', '10');
INSERT INTO `resources_role` VALUES ('61', '11');
INSERT INTO `resources_role` VALUES ('62', '1');
INSERT INTO `resources_role` VALUES ('62', '9');
INSERT INTO `resources_role` VALUES ('62', '10');
INSERT INTO `resources_role` VALUES ('62', '11');
INSERT INTO `resources_role` VALUES ('63', '1');
INSERT INTO `resources_role` VALUES ('63', '9');
INSERT INTO `resources_role` VALUES ('63', '10');
INSERT INTO `resources_role` VALUES ('63', '11');
INSERT INTO `resources_role` VALUES ('64', '1');
INSERT INTO `resources_role` VALUES ('64', '9');
INSERT INTO `resources_role` VALUES ('64', '10');
INSERT INTO `resources_role` VALUES ('64', '11');
INSERT INTO `resources_role` VALUES ('65', '1');
INSERT INTO `resources_role` VALUES ('65', '9');
INSERT INTO `resources_role` VALUES ('65', '10');
INSERT INTO `resources_role` VALUES ('65', '11');
INSERT INTO `resources_role` VALUES ('66', '1');
INSERT INTO `resources_role` VALUES ('66', '9');
INSERT INTO `resources_role` VALUES ('66', '10');
INSERT INTO `resources_role` VALUES ('66', '11');
INSERT INTO `resources_role` VALUES ('67', '1');
INSERT INTO `resources_role` VALUES ('68', '1');
INSERT INTO `resources_role` VALUES ('69', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'zhengjun', '0', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'superAdmin', '', '0', 'zhengjun', '', '0', null, '2017-06-19 15:30:52', '2017-06-19 15:30:52', 'user', '', '1', '', '', '', '', '', null);
INSERT INTO `user_info` VALUES ('2', 'user', null, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'manager', null, null, 'user', null, '1', null, '2017-07-04 22:25:37', '2017-07-04 22:25:37', 'shiwenzhi', null, null, null, null, null, null, null, null);
INSERT INTO `user_info` VALUES ('3', 'shiwenzhi', null, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'superAdmin', null, null, '京诚梁行', null, '0', null, '2017-07-04 22:20:35', '2017-07-04 22:20:35', 'shiwenzhi', null, null, null, null, null, null, null, '7');
INSERT INTO `user_info` VALUES ('4', 'wuhaokui', null, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'agent', null, null, '吴豪奎', null, '0', null, '2017-07-04 23:09:16', '2017-07-04 23:09:16', 'shiwenzhi', null, null, null, null, null, null, null, null);
INSERT INTO `user_info` VALUES ('5', 'huyafei', null, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'agent', null, null, '胡亚飞', null, '0', null, '2017-07-04 23:09:37', '2017-07-04 23:09:37', 'shiwenzhi', null, null, null, null, null, null, null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=387 DEFAULT CHARSET=utf8;

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
INSERT INTO `user_log` VALUES ('275', 'zhengjun', '192.168.1.104', '2017-06-25 20:10:35', '2017-06-25 20:10:35', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('276', 'zhengjun', '192.168.1.104', '2017-06-25 20:10:35', '2017-06-25 20:10:35', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('277', 'zhengjun', '192.168.1.104', '2017-07-01 13:00:02', '2017-07-01 13:00:02', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('278', 'zhengjun', '192.168.1.104', '2017-07-01 13:00:02', '2017-07-01 13:00:02', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('279', 'zhengjun', '192.168.1.104', '2017-07-02 07:50:47', '2017-07-02 07:50:47', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('280', 'zhengjun', '192.168.1.104', '2017-07-02 07:50:47', '2017-07-02 07:50:47', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('281', 'zhengjun', '192.168.1.104', '2017-07-02 15:12:54', '2017-07-02 15:12:54', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('282', 'zhengjun', '192.168.1.104', '2017-07-02 15:12:54', '2017-07-02 15:12:54', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('283', 'zhengjun', '192.168.1.104', '2017-07-02 15:14:08', '2017-07-02 15:14:08', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('284', 'zhengjun', '192.168.1.104', '2017-07-02 15:14:08', '2017-07-02 15:14:08', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('285', 'zhengjun', '192.168.1.104', '2017-07-02 15:15:03', '2017-07-02 15:15:03', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('286', 'zhengjun', '192.168.1.104', '2017-07-02 15:15:03', '2017-07-02 15:15:03', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('287', 'zhengjun', '127.0.0.1', '2017-07-02 04:59:13', '2017-07-02 04:59:13', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('288', 'zhengjun', '127.0.0.1', '2017-07-02 04:59:13', '2017-07-02 04:59:13', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('289', 'zhengjun', '127.0.0.1', '2017-07-02 04:59:14', '2017-07-02 04:59:14', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('290', 'zhengjun', '127.0.0.1', '2017-07-02 05:23:36', '2017-07-02 05:23:36', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('291', 'zhengjun', '127.0.0.1', '2017-07-02 05:23:36', '2017-07-02 05:23:36', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('292', 'zhengjun', '127.0.0.1', '2017-07-02 05:26:07', '2017-07-02 05:26:07', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('293', 'zhengjun', '127.0.0.1', '2017-07-02 05:26:23', '2017-07-02 05:26:23', 'zhengjun登出成功！', '0');
INSERT INTO `user_log` VALUES ('294', 'shiwenzhi', '127.0.0.1', '2017-07-02 05:26:42', '2017-07-02 05:26:42', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('295', 'shiwenzhi', '127.0.0.1', '2017-07-02 05:26:42', '2017-07-02 05:26:42', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('296', 'zhengjun', '127.0.0.1', '2017-07-02 05:27:50', '2017-07-02 05:27:50', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('297', 'zhengjun', '127.0.0.1', '2017-07-02 05:27:50', '2017-07-02 05:27:50', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('298', 'shiwenzhi', '127.0.0.1', '2017-07-02 05:33:07', '2017-07-02 05:33:07', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('299', 'shiwenzhi', '127.0.0.1', '2017-07-02 05:33:07', '2017-07-02 05:33:07', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('300', 'shiwenzhi', '127.0.0.1', '2017-07-02 06:07:42', '2017-07-02 06:07:42', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('301', 'shiwenzhi', '127.0.0.1', '2017-07-02 06:17:54', '2017-07-02 06:17:54', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('302', 'zhengjun', '127.0.0.1', '2017-07-02 06:49:59', '2017-07-02 06:49:59', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('303', 'zhengjun', '127.0.0.1', '2017-07-02 18:41:08', '2017-07-02 18:41:08', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('304', 'zhengjun', '127.0.0.1', '2017-07-02 18:43:37', '2017-07-02 18:43:37', 'zhengjun登出成功！', '0');
INSERT INTO `user_log` VALUES ('305', 'shiwenzhi', '127.0.0.1', '2017-07-02 18:43:58', '2017-07-02 18:43:58', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('306', 'shiwenzhi', '127.0.0.1', '2017-07-02 20:14:33', '2017-07-02 20:14:33', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('307', 'shiwenzhi', '127.0.0.1', '2017-07-02 20:14:33', '2017-07-02 20:14:33', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('308', 'zhengjun', '127.0.0.1', '2017-07-02 23:12:55', '2017-07-02 23:12:55', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('309', 'shiwenzhi', '127.0.0.1', '2017-07-02 23:49:52', '2017-07-02 23:49:52', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('310', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-03 11:53:04', '2017-07-03 11:53:04', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('311', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-03 11:53:05', '2017-07-03 11:53:05', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('312', 'zhengjun', '127.0.0.1', '2017-07-03 12:48:35', '2017-07-03 12:48:35', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('313', 'zhengjun', '127.0.0.1', '2017-07-03 12:48:35', '2017-07-03 12:48:35', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('314', 'zhengjun', '127.0.0.1', '2017-07-03 12:48:37', '2017-07-03 12:48:37', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('315', 'zhengjun', '192.168.0.31', '2017-07-03 12:50:23', '2017-07-03 12:50:23', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('316', 'shiwenzhi', '127.0.0.1', '2017-07-03 22:29:29', '2017-07-03 22:29:29', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('317', 'shiwenzhi', '127.0.0.1', '2017-07-03 22:29:29', '2017-07-03 22:29:29', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('318', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-04 11:18:58', '2017-07-04 11:18:58', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('319', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-04 12:18:31', '2017-07-04 12:18:31', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('320', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-04 16:07:32', '2017-07-04 16:07:32', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('321', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-04 19:05:53', '2017-07-04 19:05:53', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('322', 'zhengjun', '127.0.0.1', '2017-07-04 07:16:33', '2017-07-04 07:16:33', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('323', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-04 19:31:38', '2017-07-04 19:31:38', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('324', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-04 19:37:20', '2017-07-04 19:37:20', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('325', 'zhengjun', '127.0.0.1', '2017-07-04 08:13:22', '2017-07-04 08:13:22', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('326', 'zhengjun', '127.0.0.1', '2017-07-04 08:14:46', '2017-07-04 08:14:46', 'zhengjun登出成功！', '0');
INSERT INTO `user_log` VALUES ('327', 'shiwenzhi', '127.0.0.1', '2017-07-04 08:14:50', '2017-07-04 08:14:50', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('328', 'shiwenzhi', '127.0.0.1', '2017-07-04 21:53:06', '2017-07-04 21:53:06', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('329', 'shiwenzhi', '127.0.0.1', '2017-07-04 21:53:06', '2017-07-04 21:53:06', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('330', 'zhengjun', '127.0.0.1', '2017-07-04 22:03:40', '2017-07-04 22:03:40', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('331', 'shiwenzhi', '127.0.0.1', '2017-07-04 22:05:38', '2017-07-04 22:05:38', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('332', 'shiwenzhi', '127.0.0.1', '2017-07-04 22:09:36', '2017-07-04 22:09:36', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('333', 'shiwenzhi', '127.0.0.1', '2017-07-04 22:09:36', '2017-07-04 22:09:36', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('334', 'shiwenzhi', '127.0.0.1', '2017-07-04 22:38:18', '2017-07-04 22:38:18', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('335', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-05 10:40:56', '2017-07-05 10:40:56', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('336', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-05 10:40:57', '2017-07-05 10:40:57', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('337', 'shiwenzhi', '127.0.0.1', '2017-07-04 22:44:48', '2017-07-04 22:44:48', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('338', 'shiwenzhi', '127.0.0.1', '2017-07-04 22:44:48', '2017-07-04 22:44:48', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('339', 'zhengjun', '127.0.0.1', '2017-07-04 22:55:21', '2017-07-04 22:55:21', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('340', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:04:38', '2017-07-04 23:04:38', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('341', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:04:38', '2017-07-04 23:04:38', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('342', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:08:35', '2017-07-04 23:08:35', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('343', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:08:35', '2017-07-04 23:08:35', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('344', 'huyafei', '127.0.0.1', '2017-07-04 23:10:48', '2017-07-04 23:10:48', 'huyafei登陆成功！', '0');
INSERT INTO `user_log` VALUES ('345', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:17:03', '2017-07-04 23:17:03', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('346', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:17:03', '2017-07-04 23:17:03', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('347', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:23:46', '2017-07-04 23:23:46', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('348', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:23:46', '2017-07-04 23:23:46', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('349', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:35:32', '2017-07-04 23:35:32', 'shiwenzhi登出成功！', '0');
INSERT INTO `user_log` VALUES ('350', 'wuhaokui', '127.0.0.1', '2017-07-04 23:40:50', '2017-07-04 23:40:50', 'wuhaokui登陆成功！', '0');
INSERT INTO `user_log` VALUES ('351', 'wuhaokui', '127.0.0.1', '2017-07-04 23:40:50', '2017-07-04 23:40:50', 'wuhaokui登陆成功！', '0');
INSERT INTO `user_log` VALUES ('352', 'wuhaokui', '127.0.0.1', '2017-07-04 23:44:11', '2017-07-04 23:44:11', 'wuhaokui登陆成功！', '0');
INSERT INTO `user_log` VALUES ('353', 'wuhaokui', '127.0.0.1', '2017-07-04 23:45:54', '2017-07-04 23:45:54', 'wuhaokui登陆成功！', '0');
INSERT INTO `user_log` VALUES ('354', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:56:57', '2017-07-04 23:56:57', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('355', 'shiwenzhi', '127.0.0.1', '2017-07-04 23:56:57', '2017-07-04 23:56:57', 'shiwenzhi登陆成功！', '0');
INSERT INTO `user_log` VALUES ('356', 'zhengjun', '127.0.0.1', '2017-07-05 00:00:14', '2017-07-05 00:00:14', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('357', 'wuhaokui', '127.0.0.1', '2017-07-05 02:41:59', '2017-07-05 02:41:59', 'wuhaokui登陆成功！', '0');
INSERT INTO `user_log` VALUES ('358', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 13:44:11', '2017-07-06 13:44:11', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('359', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 14:32:10', '2017-07-06 14:32:10', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('360', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 17:17:17', '2017-07-06 17:17:17', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('361', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 18:39:07', '2017-07-06 18:39:07', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('362', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 18:46:54', '2017-07-06 18:46:54', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('363', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 18:57:55', '2017-07-06 18:57:55', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('364', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 19:02:51', '2017-07-06 19:02:51', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('365', 'zhengjun', '192.168.0.31', '2017-07-06 20:26:06', '2017-07-06 20:26:06', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('366', 'zhengjun', '192.168.0.31', '2017-07-06 20:26:06', '2017-07-06 20:26:06', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('367', 'zhengjun', '192.168.0.31', '2017-07-06 20:34:25', '2017-07-06 20:34:25', 'zhengjun登出成功！', '0');
INSERT INTO `user_log` VALUES ('368', 'zhengjun', '192.168.0.31', '2017-07-06 20:34:30', '2017-07-06 20:34:30', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('369', 'zhengjun', '192.168.0.31', '2017-07-06 20:34:30', '2017-07-06 20:34:30', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('370', 'zhengjun', '192.168.0.31', '2017-07-06 20:37:32', '2017-07-06 20:37:32', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('371', 'zhengjun', '192.168.0.31', '2017-07-06 20:37:32', '2017-07-06 20:37:32', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('372', 'zhengjun', '192.168.0.31', '2017-07-06 20:44:44', '2017-07-06 20:44:44', 'zhengjun登出成功！', '0');
INSERT INTO `user_log` VALUES ('373', 'zhengjun', '192.168.0.31', '2017-07-06 20:44:48', '2017-07-06 20:44:48', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('374', 'zhengjun', '192.168.0.31', '2017-07-06 20:44:48', '2017-07-06 20:44:48', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('375', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-06 20:48:59', '2017-07-06 20:48:59', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('376', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 10:17:05', '2017-07-07 10:17:05', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('377', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 10:32:51', '2017-07-07 10:32:51', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('378', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 14:18:54', '2017-07-07 14:18:54', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('379', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 14:18:55', '2017-07-07 14:18:55', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('380', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 16:13:40', '2017-07-07 16:13:40', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('381', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 16:14:42', '2017-07-07 16:14:42', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('382', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 16:20:10', '2017-07-07 16:20:10', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('383', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 16:21:39', '2017-07-07 16:21:39', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('384', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-07 16:31:36', '2017-07-07 16:31:36', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('385', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-12 15:54:16', '2017-07-12 15:54:16', 'zhengjun登陆成功！', '0');
INSERT INTO `user_log` VALUES ('386', 'zhengjun', '0:0:0:0:0:0:0:1', '2017-07-12 16:19:55', '2017-07-12 16:19:55', 'zhengjun登陆成功！', '0');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of use_record
-- ----------------------------
