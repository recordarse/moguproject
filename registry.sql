/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : registry

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-07-12 11:00:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `regtable`
-- ----------------------------
DROP TABLE IF EXISTS `regtable`;
CREATE TABLE `regtable` (
  `username` varchar(255) NOT NULL,
  `password` varchar(40) NOT NULL,
  `tel` varchar(11) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of regtable
-- ----------------------------
INSERT INTO `regtable` VALUES ('aaa', '6174a86ea7a05c1c7d0ffdae873cc2143a126413', '15212121212');
INSERT INTO `regtable` VALUES ('aaaa', '6174a86ea7a05c1c7d0ffdae873cc2143a126413', '15212121212');
INSERT INTO `regtable` VALUES ('huahua', '6174a86ea7a05c1c7d0ffdae873cc2143a126413', '15266666666');
INSERT INTO `regtable` VALUES ('zhuangwei', '7c4a8d09ca3762af61e59520943dc26494f8941b', '15212121111');
INSERT INTO `regtable` VALUES ('zw', '7c4a8d09ca3762af61e59520943dc26494f8941b', '15212666666');
INSERT INTO `regtable` VALUES ('zww', '6174a86ea7a05c1c7d0ffdae873cc2143a126413', '15212121212');
INSERT INTO `regtable` VALUES ('zzw', '7c4a8d09ca3762af61e59520943dc26494f8941b', '15212666666');
INSERT INTO `regtable` VALUES ('华晨宇', '7c4a8d09ca3762af61e59520943dc26494f8941b', '15212666666');
INSERT INTO `regtable` VALUES ('庄薇', '356a192b7913b04c54574d18c28d46e6395428ab', '15212666666');
