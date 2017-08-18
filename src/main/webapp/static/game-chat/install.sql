/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Version : 50709
 Source Host           : localhost
 Source Database       : gamechat

 Target Server Version : 50709
 File Encoding         : utf-8

 Date: 03/20/2016 16:13:13 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `gc_lottery`
-- ----------------------------
DROP TABLE IF EXISTS `gc_lottery`;
CREATE TABLE `gc_lottery` (
  `id` varchar(50) NOT NULL,
  `money` double NOT NULL,
  `number` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `roomId` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `createTime` datetime NOT NULL,
  `status` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `gc_lottery`
-- ----------------------------
BEGIN;
INSERT INTO `gc_lottery` VALUES ('LT201603201251116690000', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 12:51:11', '0'), ('LT201603201424303520001', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:24:30', '0'), ('LT201603201425136630002', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:25:13', '0'), ('LT201603201430033720003', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:30:03', '0'), ('LT201603201430379500004', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:30:37', '0'), ('LT201603201433442460005', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:33:44', '0'), ('LT201603201438304960006', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:38:30', '0'), ('LT201603201445254410000', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:45:25', '0'), ('LT201603201459299220000', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 14:59:29', '0'), ('LT201603201502031060000', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:02:03', '0'), ('LT201603201505035570000', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:05:03', '0'), ('LT201603201521126020001', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:21:12', '0'), ('LT201603201529049640000', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:29:04', '0'), ('LT201603201534254570000', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:34:25', '0'), ('LT201603201534313300001', '1', '1', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:34:31', '0'), ('LT201603201534509790002', '1', '2', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:34:50', '0'), ('LT201603201535048410003', '1', '2', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:35:04', '0'), ('LT201603201543171550004', '1', '2', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:43:17', '0'), ('LT201603201543194470005', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:43:19', '0'), ('LT201603201543246510006', '2', '2', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:43:24', '0'), ('LT201603201543391120007', '1', '1', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:43:39', '0'), ('LT201603201544406600008', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:44:40', '0'), ('LT201603201544492130009', '1', '1', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:44:49', '0'), ('LT201603201545085060010', '200', '2', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:45:08', '0'), ('LT201603201546097770011', '1', '1', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:46:09', '0'), ('LT201603201546238410012', '1', '1', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:46:23', '0'), ('LT201603201546285950013', '2', '2', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:46:28', '0'), ('LT201603201546400720014', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:46:40', '0'), ('LT201603201546531360015', '2', '2', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 15:46:53', '0'), ('LT201603201550304200016', '4', '4', '4', 'room4', '恭喜发财,大吉大利!', '2016-03-20 15:50:30', '0'), ('LT201603201556234150017', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 15:56:23', '0'), ('LT201603201600340210018', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 16:00:34', '1'), ('LT201603201601416140019', '1', '1', '1', 'room1', '恭喜发财,大吉大利!', '2016-03-20 16:01:41', '1'), ('LT201603201601497860020', '1', '1', '0', 'room1', '游戏开始,祝你好运!', '2016-03-20 16:01:49', '1');
COMMIT;

-- ----------------------------
--  Table structure for `gc_lottery_detail`
-- ----------------------------
DROP TABLE IF EXISTS `gc_lottery_detail`;
CREATE TABLE `gc_lottery_detail` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `lotteryid` varchar(50) NOT NULL,
  `uid` int(11) NOT NULL,
  `coin` double NOT NULL,
  `createDate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `gc_lottery_detail`
-- ----------------------------
BEGIN;
INSERT INTO `gc_lottery_detail` VALUES ('1', 'LT201603201445254410000', '1', '1', '2016-03-20 14:45:26'), ('2', 'LT201603201505035570000', '1', '1', '2016-03-20 15:05:04'), ('3', 'LT201603201521126020001', '1', '1', '2016-03-20 15:21:13'), ('4', 'LT201603201529049640000', '1', '1', '2016-03-20 15:29:06'), ('5', 'LT201603201534254570000', '1', '1', '2016-03-20 15:34:26'), ('6', 'LT201603201534313300001', '1', '1', '2016-03-20 15:34:32'), ('7', 'LT201603201534509790002', '1', '0.45', '2016-03-20 15:34:59'), ('8', 'LT201603201543171550004', '1', '0.49', '2016-03-20 15:43:18'), ('9', 'LT201603201543194470005', '1', '1', '2016-03-20 15:43:20'), ('10', 'LT201603201544406600008', '1', '1', '2016-03-20 15:44:41'), ('11', 'LT201603201546400720014', '1', '1', '2016-03-20 15:46:41'), ('12', 'LT201603201546531360015', '1', '1.25', '2016-03-20 15:47:00'), ('13', 'LT201603201550304200016', '4', '1.75', '2016-03-20 15:50:31'), ('14', 'LT201603201556234150017', '1', '1', '2016-03-20 15:56:24'), ('15', 'LT201603201600340210018', '1', '1', '2016-03-20 16:00:39'), ('16', 'LT201603201601416140019', '1', '1', '2016-03-20 16:01:43'), ('17', 'LT201603201601497860020', '1', '1', '2016-03-20 16:01:53');
COMMIT;

-- ----------------------------
--  Table structure for `gc_room`
-- ----------------------------
DROP TABLE IF EXISTS `gc_room`;
CREATE TABLE `gc_room` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `catalog` varchar(10) NOT NULL,
  `type` varchar(10) NOT NULL,
  `owner` int(11) NOT NULL DEFAULT '0',
  `limitNum` int(11) NOT NULL,
  `hot` int(11) NOT NULL DEFAULT '0',
  `roomimg` varchar(100) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `psw` varchar(30) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `gc_room`
-- ----------------------------
BEGIN;
INSERT INTO `gc_room` VALUES ('room1', '只有我最激情', 'C01', 'G01', '0', '1', '99', 'max.png', '火爆人气,秒开秒抢,运气好一晚赢3五千哦,速度来慢了啥也没有了', null, '2016-03-01 16:24:47', '0'), ('room11594', 'newsroom54313', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo1219', null, '2016-03-08 11:35:27', '0'), ('room11751', 'newsroom18662', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo13365', null, '2016-03-08 11:35:39', '0'), ('room11985', 'newsroom6431', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo84498', null, '2016-03-08 11:35:35', '0'), ('room12238', 'newsroom66621', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo98190', null, '2016-03-08 11:38:06', '0'), ('room12402', 'newsroom68530', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo97827', null, '2016-03-08 11:35:24', '0'), ('room12483', 'newsroom32323', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo10031', null, '2016-03-08 11:35:43', '0'), ('room12622', 'newsroom19688', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo14474', null, '2016-03-08 11:35:36', '0'), ('room13885', 'newsroom86057', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo94456', null, '2016-03-08 11:36:51', '0'), ('room1397', 'newsroom38208', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo89592', null, '2016-03-08 11:38:12', '0'), ('room1629', 'newsroom326', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo2607', null, '2016-03-08 11:35:26', '0'), ('room18178', 'newsroom73330', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo72520', null, '2016-03-08 11:36:17', '0'), ('room18227', 'newsroom48855', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo80760', null, '2016-03-08 11:38:11', '0'), ('room19630', 'newsroom37597', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo86851', null, '2016-03-08 11:38:12', '0'), ('room2', '你的房间我做主', 'C01', 'G01', '0', '20', '1', 'mike.png', '火爆人气,秒开秒抢,运气好一晚赢3五千哦,速度来慢了啥也没有了', null, '2016-03-01 16:24:51', '0'), ('room20735', 'newsroom30946', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo57577', null, '2016-03-08 11:37:57', '0'), ('room20986', 'newsroom94574', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo36785', null, '2016-03-08 11:35:28', '0'), ('room21144', 'newsroom3816', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo33968', null, '2016-03-08 11:35:40', '0'), ('room21152', 'newsroom79199', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo42188', null, '2016-03-08 11:36:22', '0'), ('room21630', 'newsroom91819', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo5444', null, '2016-03-08 11:35:24', '0'), ('room21807', 'newsroom90000', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo6345', null, '2016-03-08 11:38:08', '0'), ('room22699', 'newsroom83331', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo76721', null, '2016-03-08 11:35:38', '0'), ('room22976', 'newsroom72658', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo47407', null, '2016-03-08 11:37:59', '0'), ('room23853', 'newsroom46772', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo24164', null, '2016-03-08 11:35:43', '0'), ('room24449', 'newsroom1269', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo40326', null, '2016-03-08 11:36:54', '0'), ('room25085', 'newsroom27815', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo32536', null, '2016-03-08 11:36:23', '0'), ('room26841', 'newsroom82898', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo83769', null, '2016-03-08 11:35:40', '0'), ('room29149', 'newsroom72832', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo24305', null, '2016-03-08 11:38:10', '0'), ('room3', '牛轰轰的心情', 'C01', 'G01', '0', '15', '0', 'perry.png', '火爆人气,秒开秒抢,运气好一晚赢3五千哦,速度来慢了啥也没有了', null, '2016-03-01 16:24:55', '0'), ('room30230', 'newsroom669', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo83493', null, '2016-03-08 11:38:01', '0'), ('room30248', 'newsroom83187', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo22685', null, '2016-03-08 11:38:17', '0'), ('room31691', 'newsroom33752', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo41568', null, '2016-03-08 11:36:16', '0'), ('room31699', 'newsroom91766', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo55577', null, '2016-03-08 11:35:22', '0'), ('room32677', 'newsroom76106', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo29093', null, '2016-03-08 11:38:13', '0'), ('room33997', 'newsroom9309', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo20225', null, '2016-03-08 11:38:02', '0'), ('room34117', 'newsroom17697', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo50963', null, '2016-03-08 11:36:56', '0'), ('room34289', 'newsroom19464', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo17326', null, '2016-03-08 11:36:50', '0'), ('room34302', 'newsroom97335', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo58058', null, '2016-03-08 11:35:39', '0'), ('room34415', 'newsroom84114', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo95987', null, '2016-03-08 11:36:48', '0'), ('room35648', 'newsroom86260', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo63993', null, '2016-03-08 11:38:04', '0'), ('room35661', 'newsroom86840', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo63821', null, '2016-03-08 11:36:24', '0'), ('room36728', 'newsroom3306', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo60111', null, '2016-03-08 11:38:07', '0'), ('room37509', 'newsroom42236', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo48436', null, '2016-03-08 11:35:34', '0'), ('room37886', 'newsroom27741', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo20563', null, '2016-03-08 11:35:32', '0'), ('room38648', 'newsroom27726', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo55171', null, '2016-03-08 11:38:16', '0'), ('room39110', 'newsroom65945', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo43202', null, '2016-03-08 11:37:08', '0'), ('room39432', 'newsroom92300', 'C02', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo68287', null, '2016-03-08 11:37:07', '0'), ('room39808', 'newsroom45891', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo84383', null, '2016-03-08 11:35:42', '0'), ('room4', '新房间哈哈哈', 'C02', 'G01', '0', '10', '1', 'max.png', 'yeahyeahyo', null, '2016-03-08 11:14:26', '0'), ('room40595', 'newsroom66623', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo12117', null, '2016-03-08 11:36:18', '0'), ('room42005', 'newsroom34890', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo25045', null, '2016-03-08 11:35:32', '0'), ('room425', 'newsroom2852', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo99758', null, '2016-03-08 11:35:28', '0'), ('room43218', 'newsroom30792', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo95100', null, '2016-03-08 11:38:09', '0'), ('room43354', 'newsroom25578', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo63730', null, '2016-03-08 11:35:23', '0'), ('room43808', 'newsroom37315', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo60574', null, '2016-03-08 11:35:37', '0'), ('room45093', 'newsroom25721', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo33248', null, '2016-03-08 11:37:04', '0'), ('room45110', 'newsroom73716', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo17278', null, '2016-03-08 11:37:03', '0'), ('room46930', 'newsroom96596', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo79352', null, '2016-03-08 11:36:21', '0'), ('room5', 'newsroom', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo', null, '2016-03-08 11:15:56', '0'), ('room50671', 'newsroom58716', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo31546', null, '2016-03-08 11:36:07', '0'), ('room51732', 'newsroom15536', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo14374', null, '2016-03-08 11:38:14', '0'), ('room52900', 'newsroom10760', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo84580', null, '2016-03-08 11:38:09', '0'), ('room53846', 'newsroom86136', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo94364', null, '2016-03-08 11:37:59', '0'), ('room53979', 'newsroom59448', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo70149', null, '2016-03-08 11:37:55', '0'), ('room56375', 'newsroom42916', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo12986', null, '2016-03-08 11:35:29', '0'), ('room56787', 'newsroom49943', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo11331', null, '2016-03-08 11:36:19', '0'), ('room6', 'newsroom', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo', null, '2016-03-08 11:17:31', '0'), ('room60302', 'newsroom44017', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo85831', null, '2016-03-08 11:35:30', '0'), ('room61023', 'newsroom37135', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo89326', null, '2016-03-08 11:35:25', '0'), ('room61178', 'newsroom6900', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo32997', null, '2016-03-08 11:36:55', '0'), ('room61279', 'newsroom68422', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo12657', null, '2016-03-08 11:38:01', '0'), ('room61703', 'newsroom19916', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo96199', null, '2016-03-08 11:35:36', '0'), ('room63002', 'newsroom41941', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo24356', null, '2016-03-08 11:38:05', '0'), ('room63819', 'newsroom53636', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo55153', null, '2016-03-08 11:35:37', '0'), ('room63839', 'newsroom1663', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo39178', null, '2016-03-08 11:35:30', '0'), ('room64119', 'newsroom69643', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo16983', null, '2016-03-08 11:35:00', '0'), ('room64135', 'newsroom83493', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo12394', null, '2016-03-08 11:37:51', '0'), ('room65066', 'newsroom95192', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo76712', null, '2016-03-08 11:38:11', '0'), ('room65678', 'newsroom7177', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo40405', null, '2016-03-08 11:37:00', '0'), ('room65821', 'newsroom61649', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo22486', null, '2016-03-08 11:38:15', '0'), ('room65838', 'newsroom99454', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo9912', null, '2016-03-08 11:35:28', '0'), ('room66559', 'newsroom36835', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo98653', null, '2016-03-08 11:35:35', '0'), ('room66799', 'newsroom67047', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo55650', null, '2016-03-08 11:35:41', '0'), ('room67173', 'newsroom14808', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo73686', null, '2016-03-08 11:36:17', '0'), ('room68948', 'newsroom12403', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo10779', null, '2016-03-08 11:38:15', '0'), ('room69785', 'newsroom71353', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo92525', null, '2016-03-08 11:37:58', '0'), ('room69957', 'newsroom94773', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo18337', null, '2016-03-08 11:38:04', '0'), ('room70372', 'newsroom84279', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo55860', null, '2016-03-08 11:35:20', '0'), ('room71184', 'newsroom69019', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo62300', null, '2016-03-08 11:36:01', '0'), ('room72730', 'newsroom47094', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo38853', null, '2016-03-08 11:37:02', '0'), ('room73042', 'newsroom60702', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo34837', null, '2016-03-08 11:35:41', '0'), ('room74316', 'newsroom64833', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo68915', null, '2016-03-08 11:35:27', '0'), ('room74820', 'newsroom98922', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo25060', null, '2016-03-08 11:37:54', '0'), ('room75563', 'newsroom96165', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo27216', null, '2016-03-08 11:36:26', '0'), ('room77571', 'newsroom29457', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo86132', null, '2016-03-08 11:36:58', '0'), ('room77666', 'newsroom26238', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo20698', null, '2016-03-08 11:38:06', '0'), ('room78994', 'newsroom44582', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo16797', null, '2016-03-08 11:35:31', '0'), ('room82090', 'newsroom21276', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo96391', null, '2016-03-08 11:38:07', '0'), ('room82183', 'newsroom48507', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo54135', null, '2016-03-08 11:36:48', '0'), ('room82729', 'newsroom23420', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo96741', null, '2016-03-08 11:35:26', '0'), ('room84175', 'newsroom73380', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo82499', null, '2016-03-08 11:38:14', '0'), ('room84501', 'newsroom78782', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo14575', null, '2016-03-08 11:36:59', '0'), ('room84911', 'newsroom82062', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo14164', null, '2016-03-08 11:35:22', '0'), ('room84992', 'newsroom59060', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo88633', null, '2016-03-08 11:36:52', '0'), ('room86107', 'newsroom55709', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo58275', null, '2016-03-08 11:38:02', '0'), ('room87301', 'newsroom29079', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo69142', null, '2016-03-08 11:38:00', '0'), ('room89462', 'newsroom67334', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo93325', null, '2016-03-08 11:37:06', '0'), ('room92808', 'newsroom18358', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo48560', null, '2016-03-08 11:35:38', '0'), ('room94848', 'newsroom40576', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo44555', null, '2016-03-08 11:38:03', '0'), ('room95563', 'newsroom95203', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo94204', null, '2016-03-08 11:35:25', '0'), ('room95884', 'newsroom21643', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo85926', null, '2016-03-08 11:35:31', '0'), ('room95890', 'newsroom89050', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo30134', null, '2016-03-08 11:37:57', '0'), ('room98167', 'newsroom84927', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo35302', null, '2016-03-08 11:37:56', '0'), ('room98530', 'newsroom56284', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo45456', null, '2016-03-08 11:35:29', '0'), ('room98562', 'newsroom61970', 'C01', 'G01', '0', '10', '0', 'max.png', 'yeahyeahyo10280', null, '2016-03-08 11:35:21', '0');
COMMIT;

-- ----------------------------
--  Table structure for `pub_user`
-- ----------------------------
DROP TABLE IF EXISTS `pub_user`;
CREATE TABLE `pub_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(32) NOT NULL UNIQUE ,
  `nickName` varchar(30) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `pwd` varchar(100) NOT NULL,
  `moneyCode` varchar(100) NOT NULL,
  `headImg` varchar(200) DEFAULT NULL,
  `signture` varchar(200) DEFAULT NULL,
  `money` double DEFAULT NULL,
  `exp` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `QQ` varchar(20) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `parentTree` text,
  `point` double DEFAULT NULL,
  `subPoint` double DEFAULT NULL,
  `registIP` varchar(20) DEFAULT NULL,
  `registDate` datetime DEFAULT NULL,
  `lastLoginIP` varchar(20) DEFAULT NULL,
  `lastLoginDate` datetime DEFAULT NULL,
  `userType` char(1) DEFAULT NULL,
  `wxOpenId` varchar(50) DEFAULT NULL,
  `wbOpenId` varchar(50) DEFAULT NULL,
  `qqOpenId` varchar(50) DEFAULT NULL,
  `alipay` varchar(100) DEFAULT NULL,
  `salt` varchar(100) DEFAULT NULL,
  `water` double DEFAULT NULL,
  `chargeAmount` double DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `onlineStatus` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `pub_user`
-- ----------------------------
BEGIN;
INSERT INTO `pub_user` VALUES ('1', '111', null, null, 'AFG0XkygTDj5hW0ek2pbrrX/dKw6bc7EQ2qdeTODYbpKu9E4TULcpu33RwSBZwnI5jOhG0VRda7HsOHEySfbAJQ=', 'AFG0XkygTDj5hW0ek2pbrrX/dKw6bc7EQ2qdeTODYbpKu9E4TULcpu33RwSBZwnI5jOhG0VRda7HsOHEySfbAJQ=', 'perry.png', null, '0', '0', '0', null, null, null, null, null, null, null, '2016-02-28 19:20:43', null, null, null, null, null, null, null, 'SS6DTxRw8mQ3diK0jTY6KZGYJk00eS0qNgx4ageOyNQ=', null, '0', null, null), ('2', 'test', null, null, 'ADODtT95nCrnpAXnSvI2uhAQLPchuqaZGDV1KRPsOKgSYmvL4t0qlixzg7/ShljsLnsMUI3SRTSnu+YeCieV19o=', 'ADODtT95nCrnpAXnSvI2uhAQLPchuqaZGDV1KRPsOKgSYmvL4t0qlixzg7/ShljsLnsMUI3SRTSnu+YeCieV19o=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-02-28 23:30:18', null, null, null, null, null, null, null, 'o1aC2E4SWVRWCqnCXMSBBspDOQw1X8B5VSxxWIInQyI=', null, '0', null, null), ('3', 'test111', null, null, 'AIaWSYlZ2ynSZWCVthAJCxfhUnB51UxmnWpWyoeS+I/RBVNIutFUHX82UGsCAohLoWq+hn4CRMcE0Us2twfKCaE=', 'AIaWSYlZ2ynSZWCVthAJCxfhUnB51UxmnWpWyoeS+I/RBVNIutFUHX82UGsCAohLoWq+hn4CRMcE0Us2twfKCaE=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-02-29 13:44:54', null, null, null, null, null, null, null, 'Szq8nxZ3S4ldDxMTxY4YFaTYiupwKmode2c3qXvICDY=', null, '0', null, null), ('4', '222', null, null, 'AKbeCg5LvbC70s37wKJcAbMI3br9XFU4zrBwWhYE94vE9S8MWBqRQgdI4Ognu52SmwNt1rj+RGpRfGVfd2H8Tlw=', 'AKbeCg5LvbC70s37wKJcAbMI3br9XFU4zrBwWhYE94vE9S8MWBqRQgdI4Ognu52SmwNt1rj+RGpRfGVfd2H8Tlw=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-01 14:49:30', null, null, null, null, null, null, null, 'GWxwbSXjZTHWAfkxZcM8o4jztiOCP/Vg0HEa6EGpamw=', null, '0', null, null), ('5', 'test001', null, null, 'ACYMBM5lGMj9H0oI7tJ6SsFUwmqWngdEQ4Hd4De45JYEWEVqC4PuQHHCcMn523CIVpdAgo7RVawugDvO94aohYE=', 'ACYMBM5lGMj9H0oI7tJ6SsFUwmqWngdEQ4Hd4De45JYEWEVqC4PuQHHCcMn523CIVpdAgo7RVawugDvO94aohYE=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 00:09:52', null, null, null, null, null, null, null, 'oXRHu5cbvMr9JxbB00uLeusk+NMSRWwo0LLp3mo8Ev0=', null, '0', null, null), ('6', 'aaa', null, null, 'ACbImYZ5+Q+HLCWbm3YT8ki6weuOz7TgI5myKfYnNtkpwbFLIB0Ngf5TGJpHz7mmYNilvJt5lpzz2I2WWRdolok=', 'ACbImYZ5+Q+HLCWbm3YT8ki6weuOz7TgI5myKfYnNtkpwbFLIB0Ngf5TGJpHz7mmYNilvJt5lpzz2I2WWRdolok=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 00:19:09', null, null, null, null, null, null, null, '2OaNXUki7TiEJXnu0b9RDzpOWfDdqVKeGBEySXYl534=', null, '0', null, null), ('7', 'test02', null, null, 'ABLaZ3T7Aaxnq/6QR4R2LnobhPRYyDbFTgYl9Q9L27Hzh8679BNUmI+ePKOVrcspG85KNHTTfna9Hi3P8Un8aCA=', 'ABLaZ3T7Aaxnq/6QR4R2LnobhPRYyDbFTgYl9Q9L27Hzh8679BNUmI+ePKOVrcspG85KNHTTfna9Hi3P8Un8aCA=', 'adam.jpg', null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 15:55:37', null, null, null, null, null, null, null, 'NtM7w94XI7q5hw3DszRXHUl77T5HmV/OdhV8zcCxKOA=', null, '0', null, null), ('8', 'z c l', null, null, 'ABUDEUURHYKOhzbnwwxBYn3vu0JlJBJYxcv0MLO2H4IRm4xWZIEbzg2Di3ArhcY5mHFV5lOOVzoeCoe1JjPo2Z4=', 'ABUDEUURHYKOhzbnwwxBYn3vu0JlJBJYxcv0MLO2H4IRm4xWZIEbzg2Di3ArhcY5mHFV5lOOVzoeCoe1JjPo2Z4=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 19:08:57', null, null, null, null, null, null, null, 'h1jSgfLb3hZW4C7Tmn2jETHsypOPS7TbTliaI6iQr2M=', null, '0', null, null), ('9', 'zlj', null, null, 'AHKa6oLhYG1QxLaHMN98agQb6/WU+9dVpLgr9TMx2lzO0TB4mhvWzmiaEYquI9XcvWNU6o1uTjIM6eCR/Ls4LSg=', 'AHKa6oLhYG1QxLaHMN98agQb6/WU+9dVpLgr9TMx2lzO0TB4mhvWzmiaEYquI9XcvWNU6o1uTjIM6eCR/Ls4LSg=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 19:11:11', null, null, null, null, null, null, null, 'IVLw77p83CaQS1cPI8ixHtmZsphjcpfswYSQSMw1yZ8=', null, '0', null, null), ('10', 'echo', null, null, 'APs6RfFnfoM4Gynu0cKj9jaA6MeMGixZOxi2Py3OO/VrXPMAgWc521EKWeBHqpGoCRqkxk9dycAXPIuExMUtkck=', 'APs6RfFnfoM4Gynu0cKj9jaA6MeMGixZOxi2Py3OO/VrXPMAgWc521EKWeBHqpGoCRqkxk9dycAXPIuExMUtkck=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 20:09:16', null, null, null, null, null, null, null, 'trU5lZGc1Pb+eL8Xck50+QGEIKnwWIiA+wqYNqE4e60=', null, '0', null, null), ('11', 'echo1', null, null, 'AL/VgU/hX0zVhBeoSrsqzJRABYpRjT/RDnIkdmbl5LAcMdXYFCRhm3D0gE1ISJUU4VvHSrOaHqXfvsYx3H6+Elo=', 'AL/VgU/hX0zVhBeoSrsqzJRABYpRjT/RDnIkdmbl5LAcMdXYFCRhm3D0gE1ISJUU4VvHSrOaHqXfvsYx3H6+Elo=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 20:11:31', null, null, null, null, null, null, null, 'Nkdv3hUvEaV7MH/96x2ksKwcBDukb9PlYre6G933Y3M=', null, '0', null, null), ('12', '123', null, null, 'ABHC05LK+MJqOXyN4A/SOwC7HPjhoqA/t5E7lykJNSL+1Ei5PumWEmS9cFi/VajznbKTAX/JS8yewHqIribiseY=', 'ABHC05LK+MJqOXyN4A/SOwC7HPjhoqA/t5E7lykJNSL+1Ei5PumWEmS9cFi/VajznbKTAX/JS8yewHqIribiseY=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-04 20:13:08', null, null, null, null, null, null, null, '06g+EyNJZLkf4oM1NWccZRlYgScqHCZookKiu3TpeoY=', null, '0', null, null), ('13', 'z li', null, null, 'ALYCLF1ydiaY80jWLpX0gYP671xEcIZcH1ZW1ZuokJ0ItzAGQ5NE9rbse2o0nS5RjJP177BvibQChtCddYTE4aA=', 'ALYCLF1ydiaY80jWLpX0gYP671xEcIZcH1ZW1ZuokJ0ItzAGQ5NE9rbse2o0nS5RjJP177BvibQChtCddYTE4aA=', null, null, '0', '0', '0', null, null, null, null, null, null, null, '2016-03-05 22:50:44', null, null, null, null, null, null, null, '8/cNbtVgGkEmpAtcK4nhGxZ7QvZPGKNXGqsWElJG/88=', null, '0', null, null);
COMMIT;

-- ----------------------------
--  Table structure for `sys_params`
-- ----------------------------
DROP TABLE IF EXISTS `sys_params`;
CREATE TABLE `sys_params` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `paramname` varchar(50) NOT NULL,
  `paramvalue` varchar(50) NOT NULL,
  `paramalias` varchar(50) DEFAULT NULL,
  `remark` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_paramname` (`paramname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_params`
-- ----------------------------
BEGIN;
INSERT INTO `sys_params` VALUES ('1', 'appName', '疯狂的红包', null, null), ('2', 'coinUnit', '疯币', null, null);
COMMIT;

-- ----------------------------
--  Table structure for `sys_user`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phonenumb` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `registertime` datetime DEFAULT NULL,
  `lastsignintime` datetime DEFAULT NULL,
  `lastsigninip` varchar(50) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_phonenumb` (`phonenumb`) USING BTREE,
  UNIQUE KEY `idx_email` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_user`
-- ----------------------------
BEGIN;
INSERT INTO `sys_user` VALUES ('admin', '202cb962ac59075b964b07152d234b70', 'admin', null, null, 'avatar/default.jpg', null, '2016-01-26 22:15:23', '0:0:0:0:0:0:0:1', null);
COMMIT;

-- ----------------------------
--  Table structure for `sys_userroletoken`
-- ----------------------------
DROP TABLE IF EXISTS `sys_userroletoken`;
CREATE TABLE `sys_userroletoken` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `roleid` varchar(50) NOT NULL,
  `organid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fk_sysuid` (`userid`) USING BTREE,
  CONSTRAINT `sys_userroletoken_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `sys_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_userroletoken`
-- ----------------------------
BEGIN;
INSERT INTO `sys_userroletoken` VALUES ('1', 'admin', 'roles.admin', 'default');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

DROP TABLE IF EXISTS `gc_room_props`;
CREATE TABLE `gc_room_props` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `roomId` varchar(30) NOT NULL,
  `configKey` varchar(50) DEFAULT NULL,
  `alias` varchar(200) DEFAULT NULL,
  `configValue` varchar(50) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- 2016-3-27 hpf
alter table gc_room add feeAdd double ;
alter table gc_room add shareRate double ;
alter table gc_room add poolAdd double ;
alter table gc_room add sumFee double ;
alter table gc_room add sumPool double ;
alter table gc_room add rule varchar(255) ;

-- 2016-3-29
alter table gc_lottery add type char(1);

-- 2016-3-31
create table ct_log
(
   id                   varchar(30) not null,
   luckyNumber         varchar(10),
   dateline            varchar(30),
   game100             varchar(20),
   game300             varchar(20),
   result300           varchar(20),
   special             varchar(20),
   groupNum            varchar(10),
   catchTime            datetime,
   primary key (id)
);

-- 2016-4-16
-- ----------------------------
-- Table structure for pub_loginlog
-- ----------------------------
DROP TABLE IF EXISTS `pub_loginlog`;
CREATE TABLE `pub_loginlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `realIp` varchar(15) DEFAULT NULL,
  `loginTime` datetime DEFAULT NULL,
  `userName` varchar(30) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `province` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `area` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for pub_manualmoney
-- ----------------------------
DROP TABLE IF EXISTS `pub_manualmoney`;
CREATE TABLE `pub_manualmoney` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `userIdText` varchar(32) DEFAULT NULL,
  `money` double DEFAULT NULL,
  `des` varchar(255) DEFAULT NULL,
  `operator` varchar(30) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for pub_recharge
-- ----------------------------
DROP TABLE IF EXISTS `pub_recharge`;
CREATE TABLE `pub_recharge` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tradeno` varchar(50) NOT NULL,
  `fee` double NOT NULL,
  `realfee` double DEFAULT NULL,
  `tradetime` datetime NOT NULL,
  `finishtime` datetime DEFAULT NULL,
  `payno` varchar(50) DEFAULT NULL,
  `goodsname` varchar(50) DEFAULT NULL,
  `descpt` varchar(200) DEFAULT NULL,
  `status` char(1) NOT NULL DEFAULT '1',
  `gift` double DEFAULT NULL,
  `operator` double DEFAULT NULL,
  `userIdText` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_tradeno` (`tradeno`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for pub_withdraw
-- ----------------------------
DROP TABLE IF EXISTS `pub_withdraw`;
CREATE TABLE `pub_withdraw` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tradeno` varchar(50) DEFAULT NULL,
  `fee` double NOT NULL,
  `tradetime` datetime NOT NULL,
  `finishtime` datetime DEFAULT NULL,
  `payno` varchar(50) DEFAULT NULL,
  `goodsname` varchar(50) DEFAULT NULL,
  `descpt` varchar(200) DEFAULT NULL,
  `status` char(1) NOT NULL DEFAULT '1',
  `accountInfo` varchar(200) DEFAULT NULL,
  `bankName` varchar(100) DEFAULT NULL,
  `account` varchar(100) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL,
  `ownerName` varchar(30) DEFAULT NULL,
  `mobile` varchar(30) DEFAULT NULL,
  `userIdText` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_tradeno` (`tradeno`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for pub_bank
-- ----------------------------
DROP TABLE IF EXISTS `pub_bank`;
CREATE TABLE `pub_bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `bankName` varchar(100) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `account` varchar(30) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `userIdText` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;


-- 20160418
ALTER TABLE `gamechat`.`pub_user` ADD UNIQUE `userid` (userId);
-- 2016-4-20
alter table gc_room change `limit` limitNum int;
-- ----------------------------
-- Table structure for gc_roomlog
-- ----------------------------
DROP TABLE IF EXISTS `gc_roomlog`;
CREATE TABLE `gc_roomlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `roomId` varchar(50) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `createDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 20160505
alter table pub_user change userId userId varchar(32) not null UNIQUE;
alter table gc_room add column detail text;


-- ----------------------------
-- Table structure for pub_request
-- ----------------------------
DROP TABLE IF EXISTS `pub_apply`;
CREATE TABLE `pub_apply` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `userIdText` varchar(32) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `mobile` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 20016-5-13
alter table gc_lottery_detail add deposit double ;
alter table gc_lottery_detail add addback double ;
alter table gc_lottery_detail add inoutNum double ;
alter table gc_lottery_detail add masterId int ;
alter table gc_lottery_detail add gameType varchar(5);

-- 2016-5-29
alter table gc_lottery_detail add roomId varchar(50);
alter table gc_lottery_detail add desc1  varchar(20);

-- 2016-6-1
alter table pub_user add wxRefreshToken varchar(50);

-- 2016-07-17
alter table pub_user add accessToken varchar(32);
alter table pub_user add tokenExpireTime DATETIME;

-- 2016-07-18
alter table gc_lottery add expiredSeconds int;

-- ----------------------------
-- Table structure for pc_gamelog
-- ----------------------------
DROP TABLE IF EXISTS `pc_gamelog`;
CREATE TABLE `pc_gamelog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(11) DEFAULT NULL,
  `betType` varchar(2) DEFAULT NULL,
  `bet` varchar(255) DEFAULT NULL,
  `luckyNumber` varchar(100) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `userId` varchar(50) DEFAULT NULL,
  `freeze` double DEFAULT NULL,
  `bonus` double DEFAULT NULL,
  `userInout` double DEFAULT NULL,
  `addBack` double DEFAULT NULL,
  `backMoney` double DEFAULT NULL,
  `betTime` datetime DEFAULT NULL,
  `openTime` datetime DEFAULT NULL,
  `status` VARCHAR(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for pc_log
-- ----------------------------
DROP TABLE IF EXISTS `pc_log`;
CREATE TABLE `pc_log` (
  `id` int(11) NOT NULL,
  `exp` varchar(255) DEFAULT NULL,
  `lucky` varchar(10) DEFAULT NULL,
  `special` varchar(50) DEFAULT NULL,
  `dataTime` datetime DEFAULT NULL,
  `openTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for pc_rate
-- ----------------------------
DROP TABLE IF EXISTS `pc_rate`;
CREATE TABLE `pc_rate` (
  `id` int(11) NOT NULL,
  `param` varchar(255) DEFAULT NULL,
  `val` double DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pc_rate
-- ----------------------------
INSERT INTO `pc_rate` VALUES ('1', '0', '66', 'num', '0');
INSERT INTO `pc_rate` VALUES ('2', '1', '50', 'num', '1');
INSERT INTO `pc_rate` VALUES ('3', '2', '40', 'num', '2');
INSERT INTO `pc_rate` VALUES ('4', '3', '34', 'num', '3');
INSERT INTO `pc_rate` VALUES ('5', '4', '28', 'num', '4');
INSERT INTO `pc_rate` VALUES ('6', '5', '24', 'num', '5');
INSERT INTO `pc_rate` VALUES ('7', '6', '20', 'num', '6');
INSERT INTO `pc_rate` VALUES ('8', '7', '18', 'num', '7');
INSERT INTO `pc_rate` VALUES ('9', '8', '17', 'num', '8');
INSERT INTO `pc_rate` VALUES ('10', '9', '16', 'num', '9');
INSERT INTO `pc_rate` VALUES ('11', '10', '15', 'num', '10');
INSERT INTO `pc_rate` VALUES ('12', '11', '14', 'num', '11');
INSERT INTO `pc_rate` VALUES ('13', '12', '13', 'num', '12');
INSERT INTO `pc_rate` VALUES ('14', '13', '12', 'num', '13');
INSERT INTO `pc_rate` VALUES ('15', '14', '12', 'num', '14');
INSERT INTO `pc_rate` VALUES ('16', '15', '13', 'num', '15');
INSERT INTO `pc_rate` VALUES ('17', '16', '14', 'num', '16');
INSERT INTO `pc_rate` VALUES ('18', '17', '15', 'num', '17');
INSERT INTO `pc_rate` VALUES ('19', '18', '16', 'num', '18');
INSERT INTO `pc_rate` VALUES ('20', '19', '17', 'num', '19');
INSERT INTO `pc_rate` VALUES ('21', '20', '18', 'num', '20');
INSERT INTO `pc_rate` VALUES ('22', '21', '20', 'num', '21');
INSERT INTO `pc_rate` VALUES ('23', '22', '24', 'num', '22');
INSERT INTO `pc_rate` VALUES ('24', '23', '28', 'num', '23');
INSERT INTO `pc_rate` VALUES ('25', '24', '34', 'num', '24');
INSERT INTO `pc_rate` VALUES ('26', '25', '40', 'num', '25');
INSERT INTO `pc_rate` VALUES ('27', '26', '50', 'num', '26');
INSERT INTO `pc_rate` VALUES ('28', '27', '66', 'num', '27');
INSERT INTO `pc_rate` VALUES ('30', 'da', '2', 'bs', '大');
INSERT INTO `pc_rate` VALUES ('31', 'xo', '2', 'bs', '小');
INSERT INTO `pc_rate` VALUES ('32', 'dn', '2', 'bs', '单');
INSERT INTO `pc_rate` VALUES ('33', 'sh', '2', 'bs', '双');
INSERT INTO `pc_rate` VALUES ('34', 'dd', '4', 'bs', '大单');
INSERT INTO `pc_rate` VALUES ('35', 'xd', '4', 'bs', '小单');
INSERT INTO `pc_rate` VALUES ('36', 'ds', '4', 'bs', '大双');
INSERT INTO `pc_rate` VALUES ('37', 'xs', '4', 'bs', '小双');
INSERT INTO `pc_rate` VALUES ('38', 'jd', '13', 'bs', '极大');
INSERT INTO `pc_rate` VALUES ('39', 'jx', '13', 'bs', '极小');
INSERT INTO `pc_rate` VALUES ('40', 'rd', '3', 'spc', '红');
INSERT INTO `pc_rate` VALUES ('41', 'grn', '3', 'spc', '绿');
INSERT INTO `pc_rate` VALUES ('42', 'bl', '3', 'spc', '蓝');
INSERT INTO `pc_rate` VALUES ('43', 'bz', '40', 'spc', '豹子');


-- ----------------------------
-- Table structure for pc_config
-- ----------------------------
DROP TABLE IF EXISTS `pc_config`;
CREATE TABLE `pc_config` (
  `id` int(11) NOT NULL,
  `param` varchar(255) DEFAULT NULL,
  `val` varchar(255) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pc_config
-- ----------------------------
