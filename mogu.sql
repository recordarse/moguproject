/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : mogu

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-07-12 10:59:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `piclist`
-- ----------------------------
DROP TABLE IF EXISTS `piclist`;
CREATE TABLE `piclist` (
  `picid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `imgurls` varchar(999) NOT NULL,
  PRIMARY KEY (`picid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of piclist
-- ----------------------------
INSERT INTO `piclist` VALUES ('1', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b67_640x960.jpg_468x468.jpg', '李婉君高腰冰丝阔腿裤女宽松显瘦休闲直筒裤薄夏季韩版休闲家居裤', '62.8', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lallbg_640x960.jpg_100x100.jpg\r\n');
INSERT INTO `piclist` VALUES ('2', 'https://s11.mogucdn.com/mlcdn/c45406/190214_25h6k0259k461bl6eggjhh50ce22e_640x960.jpg_440x587.v1cAC.40.webp', '2019春季新款韩版宽松显瘦撞色口袋牛仔外套+纯色中长款黑色背心裙两件时尚美裙套装', '67', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('3', 'https://s11.mogucdn.com/mlcdn/c45406/190227_7d5e6h7cki0e61gfhe628ha20ibh4_640x960.jpg_440x587.v1cAC.40.webp', '夏季新款韩版简约短袖中长款拼接网纱裙修身百搭连衣裙女', '79', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('4', 'https://s11.mogucdn.com/mlcdn/c45406/190124_1i2392c8dlbci374hcgf6ei8aj3c6_640x960.jpg_440x587.v1cAC.40.webp', '宽松直筒裤子 韩版显瘦复古港味剪边裤脚chic超火高腰九分牛仔裤女', '58', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('5', 'https://s11.mogucdn.com/mlcdn/c45406/190319_201451cel418915di78gadc18aif5_640x960.jpg_440x587.v1cAC.40.webp', '【2件69元】翰代维 2019夏季新款活力字母短袖t恤女纯棉', '49', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('6', 'https://s11.mogucdn.com/mlcdn/c45406/181221_1id3h9i1baf8j6g6bk2hc0i3i32fg_640x960.jpg_440x587.v1cAC.40.webp', 'chic包包女包新款韩版复古时尚休闲百搭简约明星同款单肩斜挎复古港风小方包', '68.6', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('7', 'https://s11.mogucdn.com/mlcdn/c45406/190329_0g33fkkiibaj4bl1332c611jla86f_640x960.jpg_440x587.v1cAC.40.webp', '夏季新款女装时尚显瘦喇叭袖连衣裙小清新法国小众宽松娃娃裙子', '76', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('8', 'https://s11.mogucdn.com/mlcdn/c45406/190217_6ghal4kk10jkd4f440dgc21gaihg9_640x960.jpg_440x587.v1cAC.40.webp', '刺绣网红牛仔外套女春秋2019流行新款宽松欧洲站重工韩版百搭休闲短款牛仔上衣', '136', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('9', 'https://s11.mogucdn.com/mlcdn/c45406/190109_6gl3f158h3h05jfh8eeakia904a0d_640x960.jpg_440x587.v1cAC.40.webp', 'ins小白鞋女秋冬季韩版2019新款网红女鞋低帮小熊鞋老爹超火智熏运动', '69', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('10', 'https://s11.mogucdn.com/mlcdn/c45406/190404_8dd1h5jd053f54ei26aejlg982hdk_640x960.jpg_440x587.v1cAC.40.webp', '夏季新款短袖假两件拼接中长款t恤裙修身百搭网纱裙显瘦连衣裙女', '89', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('11', 'https://s11.mogucdn.com/mlcdn/c45406/180826_5i71jhg0ebk3a40c12ehkl7d17a6i_640x960.jpg_440x587.v1cAC.40.webp', '2019新款女宝宝秋装套装0一1-2-3岁韩版潮女小童宝宝女宝秋季女童洋气衣服', '59.5', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('12', 'https://s11.mogucdn.com/mlcdn/c45406/180506_0eib5a6i4fke40kacd1401f7efi1g_640x960.jpg_440x587.v1cAC.40.webp', '【送枕芯】四季床单被套四件套简约可爱卡通公主风学生宿舍寝室单人双人床上用品', '55', 'https://s3.mogucdn.com/mlcdn/c45406/190624_4b4595dh574iidh2e00elk1h86b\r\r\n67_640x960.jpg_100x100.jpg,https://s11.mogucdn.com/mlcdn/c45406/190624_21d3496k615ab4618a19ab5lal\r\r\nlbg_640x960.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_76c0kcig675ld2dg5009e3hh8gf\r\r\nki_750x914.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_5gd43d37c5h148j9gd43c85a443\r\r\n63_750x1047.jpg_100x100.jpg,https://s3.mogucdn.com/mlcdn/c45406/190624_8cg9bf8ll0iaf665gfkik5e0b0i\r\r\n8d_750x828.jpg_100x100.jpg');
INSERT INTO `piclist` VALUES ('13', 'https://s11.mogucdn.com/mlcdn/c45406/190120_642b304f477a9b4l1g17j1i0a8ljg_640x960.jpg_440x587.v1cAC.40.webp', '新款黑色小喇叭裤 韩版春季毛边修身高腰九分长牛仔裤女显瘦百搭热卖裤子', '58.8', '');
INSERT INTO `piclist` VALUES ('14', 'https://s11.mogucdn.com/mlcdn/55cf19/190523_46631jk6ikkdk5hc07idl6je028ed_640x960.jpg_440x587.v1cAC.40.webp', '牛仔裤女高腰夏季新款宽松显瘦九分阔腿裤泫雅风直筒裤子拖地裤', '69.3', '');
INSERT INTO `piclist` VALUES ('15', 'https://s11.mogucdn.com/mlcdn/c45406/190407_14g35e5ifcj56ieka9567jj0ja448_640x960.jpg_440x587.v1cAC.40.webp', '夏装韩版宽松百搭简约中长款纯色短袖棉T恤女网红港风上衣打底衫', '26.9', '');
INSERT INTO `piclist` VALUES ('16', 'https://s11.mogucdn.com/mlcdn/c45406/190220_63c9ac5gidjbgi1hd9l90jej983ff_640x960.jpg_440x587.v1cAC.40.webp', '五十两件 女生帅气衣服嘻哈紫色短袖t恤女2019新款韩版学生宽松ulzzang百搭半袖上衣', '29.9', '');
INSERT INTO `piclist` VALUES ('17', 'https://s11.mogucdn.com/mlcdn/c45406/190505_2e2ia5bkeagke2h9k7d29dh9b5lj3_640x850.jpg_440x587.v1cAC.40.webp', '愫惠君韩版夏中长款气质修身收腰小清新仙女白色雪纺喇叭袖连衣裙', '118', '');
INSERT INTO `piclist` VALUES ('18', 'https://s11.mogucdn.com/mlcdn/c45406/190611_7e0606lc8bhc1ce2e99g4dfl7gdli_640x960.jpg_440x587.v1cAC.40.webp', '无袖背心女夏季新款学生ins性感短款紧身打底泫雅无袖t恤外穿', '49', '');
INSERT INTO `piclist` VALUES ('19', 'https://s11.mogucdn.com/mlcdn/c45406/190428_4gg4jl5kh51jeaj120j37jdcg0f86_640x960.jpg_440x587.v1cAC.40.webp', '夏季新款时尚套装格子衬衫+短裤姐妹闺蜜装女小清新减龄两件套', '89', '');
INSERT INTO `piclist` VALUES ('20', 'https://s11.mogucdn.com/mlcdn/c45406/190526_05ka8c9iag797fl4c46a407f20106_640x960.jpg_440x587.v1cAC.40.webp', '夏季新款短袖露肩印花T恤+松紧格子休闲阔腿裤短裤两件套套装女', '83', '');
