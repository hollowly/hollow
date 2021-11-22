/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : db_scitc_ego

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 26/09/2021 16:11:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tel` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `api_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `state` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('admin', '$2y$10$Tvfoduhc7WHD77j/zyayYuNOvmOC80dabp/5UppEWHxiEbsDzbiaO', NULL, NULL, NULL, '1');

-- ----------------------------
-- Table structure for carousels
-- ----------------------------
DROP TABLE IF EXISTS `carousels`;
CREATE TABLE `carousels`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carousels
-- ----------------------------
INSERT INTO `carousels` VALUES (1, '/img/swiper/sw-01.jpg', '#');
INSERT INTO `carousels` VALUES (2, '/img/swiper/sw-02.jpg', '#');
INSERT INTO `carousels` VALUES (3, '/img/swiper/sw-03.jpg', '#');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT 0,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `count` int(0) DEFAULT 0,
  `add_time` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `intro` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `state` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '1',
  `cid` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `uid` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '小米11 pro', '/img/goods/1.jpg', 4999, '/pages/grid/grid1/grid1', 10, '2021-06-07 19:50:17', '1.12GN2 | 骁龙888', '1', '', NULL);
INSERT INTO `goods` VALUES (2, 'MIX FOLD小米折叠屏', '/img/goods/2.jpg', 9999, '/pages/grid/grid2/grid2', 10, '2021-06-07 19:57:53', '折叠大屏 | 自研芯片', '1', NULL, NULL);
INSERT INTO `goods` VALUES (3, 'Note 9 5G', '/img/goods/3.jpg', 1299, '/pages/grid/grid3/grid3', 10, '2021-06-07 21:01:52', '天玑 800U处理器，5000mA大电池', '1', NULL, NULL);
INSERT INTO `goods` VALUES (4, '小米10S', '/img/goods/4.jpg', 3299, '/pages/grid/grid4/grid4', 10, '2021-06-07 21:02:01', '骁龙870 | 对称式双扬声器', '1', NULL, NULL);
INSERT INTO `goods` VALUES (5, 'Note 9 Pro 5G', '/img/goods/5.jpg', 1599, '/pages/grid/grid5/grid5', 10, '2021-06-07 21:02:07', '一亿像素夜景相机 | 120HZ六档变速高刷', '1', NULL, NULL);
INSERT INTO `goods` VALUES (6, '小米11', '/img/goods/6.jpg', 3999, '/pages/grid/grid6/grid6', 10, '2021-06-07 21:02:14', '骁龙888 | 2K曲面屏', '1', NULL, NULL);

-- ----------------------------
-- Table structure for goods_class_right
-- ----------------------------
DROP TABLE IF EXISTS `goods_class_right`;
CREATE TABLE `goods_class_right`  (
  `id` int(0) NOT NULL,
  `category` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_class_right
-- ----------------------------
INSERT INTO `goods_class_right` VALUES (1, 'xiaomiDigital', '小米11 Ultra', '/img/class/xiaomiPhone/xiaomiDigital/1.png');
INSERT INTO `goods_class_right` VALUES (2, 'xiaomiDigital', '小米11 Pro', '/img/class/xiaomiPhone/xiaomiDigital/2.png');
INSERT INTO `goods_class_right` VALUES (3, 'xiaomiDigital', '小米11 青春版', '/img/class/xiaomiPhone/xiaomiDigital/3.png');
INSERT INTO `goods_class_right` VALUES (4, 'xiaomiDigital', '小米10S', '/img/class/xiaomiPhone/xiaomiDigital/4.png');
INSERT INTO `goods_class_right` VALUES (5, 'xiaomiDigital', '小米11', '/img/class/xiaomiPhone/xiaomiDigital/5.png');
INSERT INTO `goods_class_right` VALUES (6, 'xiaomiDigital', '小米10 至尊版', '/img/class/xiaomiPhone/xiaomiDigital/6.png');
INSERT INTO `goods_class_right` VALUES (7, 'xiaomiDigital', '小米10 青春版', '/img/class/xiaomiPhone/xiaomiDigital/7.png');
INSERT INTO `goods_class_right` VALUES (8, 'xiaomiDigital', '小米10', '/img/class/xiaomiPhone/xiaomiDigital/8.png');
INSERT INTO `goods_class_right` VALUES (9, 'xiaomiMix', 'MIX FOLD', '/img/class/xiaomiPhone/xiaomiMix/1.png');
INSERT INTO `goods_class_right` VALUES (10, 'xiaomiMix', 'MIX Alpha', '/img/class/xiaomiPhone/xiaomiMix/2.png');
INSERT INTO `goods_class_right` VALUES (11, 'xiaomiPhoneAccessories', '无线充', '/img/class/xiaomiPhone/xiaomiPhoneAccessories/1.png');
INSERT INTO `goods_class_right` VALUES (12, 'xiaomiPhoneAccessories', '充电器', '/img/class/xiaomiPhone/xiaomiPhoneAccessories/2.png');
INSERT INTO `goods_class_right` VALUES (13, 'xiaomiPhoneAccessories', '数据线', '/img/class/xiaomiPhone/xiaomiPhoneAccessories/3.png');
INSERT INTO `goods_class_right` VALUES (14, 'xiaomiPhoneAccessories', '小米充电宝', '/img/class/xiaomiPhone/xiaomiPhoneAccessories/4.png');
INSERT INTO `goods_class_right` VALUES (15, 'xiaomiPhoneAccessories', '小米手机保护壳', '/img/class/xiaomiPhone/xiaomiPhoneAccessories/5.png');
INSERT INTO `goods_class_right` VALUES (16, 'xiaomiPhoneAccessories', '小米手机贴膜', '/img/class/xiaomiPhone/xiaomiPhoneAccessories/6.png');
INSERT INTO `goods_class_right` VALUES (17, 'readmiNote', 'Note 10 Pro', '/img/class/readmiPhone/readmiNote/1.png');
INSERT INTO `goods_class_right` VALUES (18, 'readmiNote', 'Note 10 5G', '/img/class/readmiPhone/readmiNote/2.png');
INSERT INTO `goods_class_right` VALUES (19, 'readmiNote', 'Note 9 Pro', '/img/class/readmiPhone/readmiNote/3.png');
INSERT INTO `goods_class_right` VALUES (20, 'readmiNote', 'Note 9', '/img/class/readmiPhone/readmiNote/4.png');
INSERT INTO `goods_class_right` VALUES (21, 'readmiNote', 'Note 9 4G', '/img/class/readmiPhone/readmiNote/5.png');
INSERT INTO `goods_class_right` VALUES (22, 'readmiNote', 'Note 8 Pro', '/img/class/readmiPhone/readmiNote/6.png');
INSERT INTO `goods_class_right` VALUES (23, 'readmiNote', 'Note 8', '/img/class/readmiPhone/readmiNote/7.png');
INSERT INTO `goods_class_right` VALUES (24, 'readmiK', 'K40游戏增强版', '/img/class/readmiPhone/readmiK/1.png');
INSERT INTO `goods_class_right` VALUES (25, 'readmiK', 'K40 Pro系列', '/img/class/readmiPhone/readmiK/2.png');
INSERT INTO `goods_class_right` VALUES (26, 'readmiK', 'Readmi K40', '/img/class/readmiPhone/readmiK/3.png');
INSERT INTO `goods_class_right` VALUES (27, 'readmiK', 'Readmi K30 5G', '/img/class/readmiPhone/readmiK/4.png');
INSERT INTO `goods_class_right` VALUES (28, 'readmiK', 'Readmi K30 4G', '/img/class/readmiPhone/readmiK/5.png');
INSERT INTO `goods_class_right` VALUES (29, 'readmiK', 'K30 Pro 变焦版', '/img/class/readmiPhone/readmiK/6.png');
INSERT INTO `goods_class_right` VALUES (30, 'readmiK', 'K30 至尊版', '/img/class/readmiPhone/readmiK/7.png');
INSERT INTO `goods_class_right` VALUES (31, 'readmiK', 'K30 Pro', '/img/class/readmiPhone/readmiK/8.png');
INSERT INTO `goods_class_right` VALUES (32, 'readmiK', 'K30S 至尊版', '/img/class/readmiPhone/readmiK/9.png');
INSERT INTO `goods_class_right` VALUES (33, 'readmiX', '10X 5G', '/img/class/readmiPhone/readmiX/1.png');
INSERT INTO `goods_class_right` VALUES (34, 'readmiX', '10X Pro 5G', '/img/class/readmiPhone/readmiX/2.png');
INSERT INTO `goods_class_right` VALUES (35, 'readmiX', '10X 4G', '/img/class/readmiPhone/readmiX/3.png');
INSERT INTO `goods_class_right` VALUES (36, 'readmiDigital', 'Readmi 9A', '/img/class/readmiPhone/readmiDigital/1.png');
INSERT INTO `goods_class_right` VALUES (37, 'readmiDigital', 'Readmi 9', '/img/class/readmiPhone/readmiDigital/2.png');
INSERT INTO `goods_class_right` VALUES (38, 'readmiDigital', 'Readmi 8A', '/img/class/readmiPhone/readmiDigital/3.png');
INSERT INTO `goods_class_right` VALUES (39, 'readmiDigital', 'Readmi 7A', '/img/class/readmiPhone/readmiDigital/4.png');
INSERT INTO `goods_class_right` VALUES (43, 'readmiPhoneAccessories', 'Readmi 充电宝', '/img/class/readmiPhone/readmiPhoneAccessories/1.png');
INSERT INTO `goods_class_right` VALUES (44, 'readmiPhoneAccessories', 'Redmi手机保护壳', '/img/class/readmiPhone/readmiPhoneAccessories/2.png');
INSERT INTO `goods_class_right` VALUES (45, 'readmiPhoneAccessories', 'Readmi 手机贴膜', '/img/class/readmiPhone/readmiPhoneAccessories/3.png');
INSERT INTO `goods_class_right` VALUES (46, 'gamePhone', 'K40游戏增强版', '/img/class/gamePhone/gamePhone/1.png');
INSERT INTO `goods_class_right` VALUES (47, 'gamePhone', '黑鲨 4 Pro', '/img/class/gamePhone/gamePhone/2.png');
INSERT INTO `goods_class_right` VALUES (48, 'gamePhone', '黑鲨 4', '/img/class/gamePhone/gamePhone/3.png');
INSERT INTO `goods_class_right` VALUES (49, 'gamePhone', '黑鲨 3S', '/img/class/gamePhone/gamePhone/4.png');
INSERT INTO `goods_class_right` VALUES (50, 'gamePhoneAccessories', '黑鲨游戏耳机', '/img/class/gamePhone/gamePhoneAccessories/1.png');
INSERT INTO `goods_class_right` VALUES (51, 'gamePhoneAccessories', '冰封散热背夹', '/img/class/gamePhone/gamePhoneAccessories/2.png');
INSERT INTO `goods_class_right` VALUES (52, 'gamePhoneAccessories', '黑鲨手游肩键', '/img/class/gamePhone/gamePhoneAccessories/3.png');
INSERT INTO `goods_class_right` VALUES (53, 'gamePhoneAccessories', '黑鲨移动电源', '/img/class/gamePhone/gamePhoneAccessories/4.png');
INSERT INTO `goods_class_right` VALUES (54, 'gamePhoneAccessories', '肩键中框保护壳', '/img/class/gamePhone/gamePhoneAccessories/5.png');
INSERT INTO `goods_class_right` VALUES (55, 'gamePhoneAccessories', '数据线', '/img/class/gamePhone/gamePhoneAccessories/6.png');
INSERT INTO `goods_class_right` VALUES (56, 'gamePhoneAccessories', '黑鲨其他配件', '/img/class/gamePhone/gamePhoneAccessories/7.png');
INSERT INTO `goods_class_right` VALUES (57, 'smartWear', '智能手表', '/img/class/smartWear/smartWear/1.png');
INSERT INTO `goods_class_right` VALUES (58, 'smartWear', '智能手环', '/img/class/smartWear/smartWear/2.png');
INSERT INTO `goods_class_right` VALUES (59, 'smartWear', '儿童手表', '/img/class/smartWear/smartWear/3.png');
INSERT INTO `goods_class_right` VALUES (60, 'smartWear', '耳机', '/img/class/smartWear/smartWear/4.png');
INSERT INTO `goods_class_right` VALUES (61, 'smartWear', '石英表', '/img/class/smartWear/smartWear/5.png');
INSERT INTO `goods_class_right` VALUES (62, 'television', '32-43英寸', '/img/class/television/television/1.png');
INSERT INTO `goods_class_right` VALUES (63, 'television', '50-55英寸', '/img/class/television/television/2.png');
INSERT INTO `goods_class_right` VALUES (64, 'television', '60-65英寸', '/img/class/television/television/3.png');
INSERT INTO `goods_class_right` VALUES (65, 'television', '70-75英寸', '/img/class/television/television/4.png');
INSERT INTO `goods_class_right` VALUES (66, 'television', '75英寸以上', '/img/class/television/television/5.png');
INSERT INTO `goods_class_right` VALUES (67, 'television', '激光投影电视', '/img/class/television/television/6.png');
INSERT INTO `goods_class_right` VALUES (68, 'TvMaster', '82英寸', '/img/class/television/TvMaster/1.png');
INSERT INTO `goods_class_right` VALUES (69, 'TvMaster', '65英寸OLED', '/img/class/television/TvMaster/2.png');
INSERT INTO `goods_class_right` VALUES (70, 'TvMaster', '82英寸至尊版', '/img/class/television/TvMaster/3.png');
INSERT INTO `goods_class_right` VALUES (71, 'TvAccessories', '盒子', '/img/class/television/TvAccessories/1.png');
INSERT INTO `goods_class_right` VALUES (72, 'TvAccessories', '音响', '/img/class/television/TvAccessories/2.png');
INSERT INTO `goods_class_right` VALUES (73, 'TvAccessories', '会员卡', '/img/class/television/TvAccessories/3.png');
INSERT INTO `goods_class_right` VALUES (74, 'TvAccessories', '遥控器', '/img/class/television/TvAccessories/4.png');
INSERT INTO `goods_class_right` VALUES (75, 'readmiBook', 'Pro 14 锐龙版', '/img/class/computerOffice/readmiBook/1.png');
INSERT INTO `goods_class_right` VALUES (76, 'readmiBook', 'Pro 15 锐龙版', '/img/class/computerOffice/readmiBook/2.png');
INSERT INTO `goods_class_right` VALUES (77, 'readmiBook', 'Pro 14', '/img/class/computerOffice/readmiBook/3.png');
INSERT INTO `goods_class_right` VALUES (78, 'readmiBook', 'Pro 15', '/img/class/computerOffice/readmiBook/4.png');
INSERT INTO `goods_class_right` VALUES (79, 'readmiBook', 'Pro 13', '/img/class/computerOffice/readmiBook/5.png');
INSERT INTO `goods_class_right` VALUES (80, 'readmiBook', 'ReadmiBook 16', '/img/class/computerOffice/readmiBook/6.png');
INSERT INTO `goods_class_right` VALUES (81, 'readmiBook', 'ReadmiBook 14', '/img/class/computerOffice/readmiBook/7.png');
INSERT INTO `goods_class_right` VALUES (82, 'readmiBook', 'Readmi 游戏本', '/img/class/computerOffice/readmiBook/8.png');
INSERT INTO `goods_class_right` VALUES (83, 'xiaomibook', 'Pro 15 AMD', '/img/class/computerOffice/xiaomibook/1.png');
INSERT INTO `goods_class_right` VALUES (84, 'xiaomibook', 'Pro 15', '/img/class/computerOffice/xiaomibook/2.png');
INSERT INTO `goods_class_right` VALUES (85, 'xiaomibook', 'Pro 14', '/img/class/computerOffice/xiaomibook/3.png');
INSERT INTO `goods_class_right` VALUES (86, 'xiaomibook', 'Pro 15.6', '/img/class/computerOffice/xiaomibook/4.png');
INSERT INTO `goods_class_right` VALUES (87, 'monitor', '小米/Readmi显示器', '/img/class/computerOffice/monitor/1.png');
INSERT INTO `goods_class_right` VALUES (88, 'monitor', 'Readmi 27英寸', '/img/class/computerOffice/monitor/2.png');
INSERT INTO `goods_class_right` VALUES (89, 'monitor', 'Readmi 23.8\"', '/img/class/computerOffice/monitor/3.png');
INSERT INTO `goods_class_right` VALUES (90, 'monitor', '显示器23.8\"', '/img/class/computerOffice/monitor/4.png');
INSERT INTO `goods_class_right` VALUES (91, 'monitor', '显示器1A 23.8\"', '/img/class/computerOffice/monitor/5.png');
INSERT INTO `goods_class_right` VALUES (92, 'monitor', '显示器24.5\"', '/img/class/computerOffice/monitor/6.png');
INSERT INTO `goods_class_right` VALUES (93, 'monitor', '27\" 165HZ', '/img/class/computerOffice/monitor/7.png');
INSERT INTO `goods_class_right` VALUES (94, 'monitor', '曲面 34\"', '/img/class/computerOffice/monitor/8.png');
INSERT INTO `goods_class_right` VALUES (95, 'computerAccessories', '笔记本贴纸', '/img/class/computerOffice/computerAccessories/1.png');
INSERT INTO `goods_class_right` VALUES (96, 'computerAccessories', '鼠标', '/img/class/computerOffice/computerAccessories/2.png');
INSERT INTO `goods_class_right` VALUES (97, 'computerAccessories', '其他配件', '/img/class/computerOffice/computerAccessories/3.png');
INSERT INTO `goods_class_right` VALUES (98, 'officeStudy', '电子教育', '/img/class/computerOffice/officeStudy/1.png');
INSERT INTO `goods_class_right` VALUES (99, 'officeStudy', '签字笔', '/img/class/computerOffice/officeStudy/2.png');
INSERT INTO `goods_class_right` VALUES (100, 'officeStudy', '打印机', '/img/class/computerOffice/officeStudy/3.png');
INSERT INTO `goods_class_right` VALUES (101, 'airConditioner', '1匹挂机', '/img/class/bigAppliances/airConditioner/1.png');
INSERT INTO `goods_class_right` VALUES (102, 'airConditioner', '1.5匹挂机', '/img/class/bigAppliances/airConditioner/2.png');
INSERT INTO `goods_class_right` VALUES (103, 'airConditioner', '2匹挂机', '/img/class/bigAppliances/airConditioner/3.png');
INSERT INTO `goods_class_right` VALUES (104, 'airConditioner', '2匹柜机', '/img/class/bigAppliances/airConditioner/4.png');
INSERT INTO `goods_class_right` VALUES (105, 'airConditioner', '3匹柜机', '/img/class/bigAppliances/airConditioner/5.png');
INSERT INTO `goods_class_right` VALUES (106, 'airConditioner', '新风空调', '/img/class/bigAppliances/airConditioner/6.png');
INSERT INTO `goods_class_right` VALUES (107, 'washingMachine', '波轮洗衣机', '/img/class/bigAppliances/washingMachine/1.png');
INSERT INTO `goods_class_right` VALUES (108, 'washingMachine', '滚筒洗衣机', '/img/class/bigAppliances/washingMachine/2.png');
INSERT INTO `goods_class_right` VALUES (109, 'washingMachine', '洗烘一体机', '/img/class/bigAppliances/washingMachine/3.png');
INSERT INTO `goods_class_right` VALUES (110, 'refrigerator', '两门三门冰箱', '/img/class/bigAppliances/refrigerator/1.png');
INSERT INTO `goods_class_right` VALUES (111, 'refrigerator', '对开门冰箱', '/img/class/bigAppliances/refrigerator/2.png');
INSERT INTO `goods_class_right` VALUES (112, 'refrigerator', '四门冰箱', '/img/class/bigAppliances/refrigerator/3.png');
INSERT INTO `goods_class_right` VALUES (113, 'bigKitchenElectrical', '净水器', '/img/class/bigAppliances/bigKitchenElectrical/1.png');
INSERT INTO `goods_class_right` VALUES (114, 'bigKitchenElectrical', '洗碗机', '/img/class/bigAppliances/bigKitchenElectrical/2.png');
INSERT INTO `goods_class_right` VALUES (115, 'bigKitchenElectrical', '烟机灶具', '/img/class/bigAppliances/bigKitchenElectrical/3.png');
INSERT INTO `goods_class_right` VALUES (116, 'smallKitchenElectrical', '微蒸烤', '/img/class/smallAppliances/smallKitchenElectrical/1.png');
INSERT INTO `goods_class_right` VALUES (117, 'smallKitchenElectrical', '净饮机', '/img/class/smallAppliances/smallKitchenElectrical/2.png');
INSERT INTO `goods_class_right` VALUES (118, 'smallKitchenElectrical', '饮水机', '/img/class/smallAppliances/smallKitchenElectrical/3.png');
INSERT INTO `goods_class_right` VALUES (119, 'smallKitchenElectrical', '电饭煲', '/img/class/smallAppliances/smallKitchenElectrical/4.png');
INSERT INTO `goods_class_right` VALUES (120, 'smallKitchenElectrical', '电磁炉', '/img/class/smallAppliances/smallKitchenElectrical/5.png');
INSERT INTO `goods_class_right` VALUES (121, 'smallKitchenElectrical', '电压力锅', '/img/class/smallAppliances/smallKitchenElectrical/6.png');
INSERT INTO `goods_class_right` VALUES (122, 'smallKitchenElectrical', '水壶', '/img/class/smallAppliances/smallKitchenElectrical/7.png');
INSERT INTO `goods_class_right` VALUES (123, 'smallKitchenElectrical', '养生壶', '/img/class/smallAppliances/smallKitchenElectrical/8.png');
INSERT INTO `goods_class_right` VALUES (124, 'smallKitchenElectrical', '料理机', '/img/class/smallAppliances/smallKitchenElectrical/9.png');
INSERT INTO `goods_class_right` VALUES (125, 'smallKitchenElectrical', '咖啡机', '/img/class/smallAppliances/smallKitchenElectrical/10.png');
INSERT INTO `goods_class_right` VALUES (126, 'smallKitchenElectrical', '空气炸锅', '/img/class/smallAppliances/smallKitchenElectrical/11.png');
INSERT INTO `goods_class_right` VALUES (127, 'smallKitchenElectrical', '电热杯', '/img/class/smallAppliances/smallKitchenElectrical/12.png');
INSERT INTO `goods_class_right` VALUES (128, 'floorCleaning', '扫地机器人', '/img/class/smallAppliances/floorCleaning/1.png');
INSERT INTO `goods_class_right` VALUES (129, 'floorCleaning', '吸尘器', '/img/class/smallAppliances/floorCleaning/2.png');
INSERT INTO `goods_class_right` VALUES (130, 'floorCleaning', '擦地机', '/img/class/smallAppliances/floorCleaning/3.png');
INSERT INTO `goods_class_right` VALUES (131, 'airPurification', '空气净化器', '/img/class/smallAppliances/airPurification/1.png');
INSERT INTO `goods_class_right` VALUES (132, 'airPurification', '加湿器', '/img/class/smallAppliances/airPurification/2.png');
INSERT INTO `goods_class_right` VALUES (133, 'airPurification', '新风机', '/img/class/smallAppliances/airPurification/3.png');
INSERT INTO `goods_class_right` VALUES (134, 'lifeAppliance', '电风扇', '/img/class/smallAppliances/lifeAppliance/1.png');
INSERT INTO `goods_class_right` VALUES (135, 'lifeAppliance', '除螨仪', '/img/class/smallAppliances/lifeAppliance/2.png');
INSERT INTO `goods_class_right` VALUES (136, 'lifeAppliance', '挂烫机', '/img/class/smallAppliances/lifeAppliance/3.png');
INSERT INTO `goods_class_right` VALUES (137, 'lifeAppliance', '电暖器', '/img/class/smallAppliances/lifeAppliance/4.png');
INSERT INTO `goods_class_right` VALUES (138, 'lifeAppliance', '暖风机', '/img/class/smallAppliances/lifeAppliance/5.png');
INSERT INTO `goods_class_right` VALUES (139, 'AndyLoudspeakerBox', '触屏音箱', '/img/class/smartHome/AndyLoudspeakerBox/1.png');
INSERT INTO `goods_class_right` VALUES (140, 'AndyLoudspeakerBox', '智能音箱', '/img/class/smartHome/AndyLoudspeakerBox/2.png');
INSERT INTO `goods_class_right` VALUES (141, 'AndyLoudspeakerBox', '蓝牙音箱', '/img/class/smartHome/AndyLoudspeakerBox/3.png');
INSERT INTO `goods_class_right` VALUES (142, 'routers', 'WiFi6', '/img/class/smartHome/routers/1.png');
INSERT INTO `goods_class_right` VALUES (143, 'routers', '千兆版', '/img/class/smartHome/routers/2.png');
INSERT INTO `goods_class_right` VALUES (144, 'routers', '百兆版', '/img/class/smartHome/routers/3.png');
INSERT INTO `goods_class_right` VALUES (145, 'routers', 'WiFi 放大器', '/img/class/smartHome/routers/4.png');
INSERT INTO `goods_class_right` VALUES (146, 'IntelligentSecurity', '智能门锁', '/img/class/smartHome/IntelligentSecurity/1.png');
INSERT INTO `goods_class_right` VALUES (147, 'IntelligentSecurity', '智能猫眼', '/img/class/smartHome/IntelligentSecurity/2.png');
INSERT INTO `goods_class_right` VALUES (148, 'IntelligentSecurity', '智能门铃', '/img/class/smartHome/IntelligentSecurity/3.png');
INSERT INTO `goods_class_right` VALUES (149, 'IntelligentSecurity', '摄像机', '/img/class/smartHome/IntelligentSecurity/4.png');
INSERT INTO `goods_class_right` VALUES (150, 'IntelligentSecurity', '保管箱', '/img/class/smartHome/IntelligentSecurity/5.png');
INSERT INTO `goods_class_right` VALUES (151, 'IntelligentSecurity', '传感器', '/img/class/smartHome/IntelligentSecurity/6.png');
INSERT INTO `goods_class_right` VALUES (152, 'intelligentControl', '智能晾衣机', '/img/class/smartHome/intelligentControl/1.png');
INSERT INTO `goods_class_right` VALUES (153, 'intelligentControl', '智能窗帘', '/img/class/smartHome/intelligentControl/2.png');
INSERT INTO `goods_class_right` VALUES (154, 'intelligentControl', '智能浴霸', '/img/class/smartHome/intelligentControl/3.png');
INSERT INTO `goods_class_right` VALUES (155, 'intelligentControl', '智能插座', '/img/class/smartHome/intelligentControl/4.png');
INSERT INTO `goods_class_right` VALUES (156, 'intelligentControl', '开关', '/img/class/smartHome/intelligentControl/5.png');
INSERT INTO `goods_class_right` VALUES (157, 'IntelligentLamps', '台灯', '/img/class/smartHome/IntelligentLamps/1.png');
INSERT INTO `goods_class_right` VALUES (158, 'IntelligentLamps', '吸顶灯', '/img/class/smartHome/IntelligentLamps/2.png');
INSERT INTO `goods_class_right` VALUES (159, 'IntelligentLamps', '床头灯', '/img/class/smartHome/IntelligentLamps/3.png');
INSERT INTO `goods_class_right` VALUES (160, 'IntelligentLamps', '夜灯', '/img/class/smartHome/IntelligentLamps/4.png');
INSERT INTO `goods_class_right` VALUES (161, 'IntelligentLamps', '灯泡', '/img/class/smartHome/IntelligentLamps/5.png');
INSERT INTO `goods_class_right` VALUES (162, 'IntelligentLamps', '筒灯', '/img/class/smartHome/IntelligentLamps/6.png');
INSERT INTO `goods_class_right` VALUES (163, 'SmartCoolPlay', '手持摄像头', '/img/class/smartHome/SmartCoolPlay/1.png');
INSERT INTO `goods_class_right` VALUES (164, 'SmartCoolPlay', '宠物生活', '/img/class/smartHome/SmartCoolPlay/2.png');
INSERT INTO `goods_class_right` VALUES (165, 'SmartCoolPlay', 'K歌麦克风', '/img/class/smartHome/SmartCoolPlay/3.png');
INSERT INTO `goods_class_right` VALUES (166, 'outdoorTravel', '助力车', '/img/class/outdoorTravel/outdoorTravel/1.png');
INSERT INTO `goods_class_right` VALUES (167, 'outdoorTravel', '平衡车', '/img/class/outdoorTravel/outdoorTravel/2.png');
INSERT INTO `goods_class_right` VALUES (168, 'outdoorTravel', '滑板车', '/img/class/outdoorTravel/outdoorTravel/3.png');
INSERT INTO `goods_class_right` VALUES (169, 'outdoorTravel', '对讲机', '/img/class/outdoorTravel/outdoorTravel/4.png');
INSERT INTO `goods_class_right` VALUES (170, 'outdoorTravel', '卡丁车套件', '/img/class/outdoorTravel/outdoorTravel/5.png');
INSERT INTO `goods_class_right` VALUES (171, 'outdoorTravel', '车具配件', '/img/class/outdoorTravel/outdoorTravel/6.png');
INSERT INTO `goods_class_right` VALUES (172, 'luggageBag', '旅行箱', '/img/class/outdoorTravel/luggageBag/1.png');
INSERT INTO `goods_class_right` VALUES (173, 'luggageBag', '背包', '/img/class/outdoorTravel/luggageBag/2.png');
INSERT INTO `goods_class_right` VALUES (174, 'luggageBag', '胸包', '/img/class/outdoorTravel/luggageBag/3.png');
INSERT INTO `goods_class_right` VALUES (175, 'HouseholdDailyUse', '暖宝宝', '/img/class/generalMerchandise/HouseholdDailyUse/1.png');
INSERT INTO `goods_class_right` VALUES (176, 'HouseholdDailyUse', '天痕胶带', '/img/class/generalMerchandise/HouseholdDailyUse/2.png');
INSERT INTO `goods_class_right` VALUES (177, 'HouseholdDailyUse', '垃圾收纳', '/img/class/generalMerchandise/HouseholdDailyUse/3.png');
INSERT INTO `goods_class_right` VALUES (178, 'HouseholdDailyUse', '插线板', '/img/class/generalMerchandise/HouseholdDailyUse/4.png');
INSERT INTO `goods_class_right` VALUES (179, 'HouseholdDailyUse', '转换器', '/img/class/generalMerchandise/HouseholdDailyUse/5.png');
INSERT INTO `goods_class_right` VALUES (180, 'HouseholdDailyUse', '电池', '/img/class/generalMerchandise/HouseholdDailyUse/6.png');
INSERT INTO `goods_class_right` VALUES (181, 'HouseholdDailyUse', '驱蚊器', '/img/class/generalMerchandise/HouseholdDailyUse/7.png');
INSERT INTO `goods_class_right` VALUES (182, 'HouseholdDailyUse', '工具', '/img/class/generalMerchandise/HouseholdDailyUse/8.png');
INSERT INTO `goods_class_right` VALUES (183, 'HouseholdDailyUse', '保温杯', '/img/class/generalMerchandise/HouseholdDailyUse/9.png');
INSERT INTO `goods_class_right` VALUES (184, 'HouseholdDailyUse', '餐厨', '/img/class/generalMerchandise/HouseholdDailyUse/10.png');
INSERT INTO `goods_class_right` VALUES (185, 'HouseholdDailyUse', '毛球修剪器', '/img/class/generalMerchandise/HouseholdDailyUse/11.png');
INSERT INTO `goods_class_right` VALUES (186, 'HouseholdDailyUse', '花洒', '/img/class/generalMerchandise/HouseholdDailyUse/12.png');
INSERT INTO `goods_class_right` VALUES (187, 'ProtectionCleaning', '洗手机', '/img/class/generalMerchandise/ProtectionCleaning/1.png');
INSERT INTO `goods_class_right` VALUES (188, 'ProtectionCleaning', '超声波清洗机', '/img/class/generalMerchandise/ProtectionCleaning/2.png');
INSERT INTO `goods_class_right` VALUES (189, 'ProtectionCleaning', '清洁湿巾', '/img/class/generalMerchandise/ProtectionCleaning/3.png');
INSERT INTO `goods_class_right` VALUES (190, 'ProtectionCleaning', '口罩', '/img/class/generalMerchandise/ProtectionCleaning/4.png');
INSERT INTO `goods_class_right` VALUES (191, 'ProtectionCleaning', '纸巾', '/img/class/generalMerchandise/ProtectionCleaning/5.png');
INSERT INTO `goods_class_right` VALUES (192, 'ProtectionCleaning', '毛巾', '/img/class/generalMerchandise/ProtectionCleaning/6.png');
INSERT INTO `goods_class_right` VALUES (193, 'personalCare', '剃须刀', '/img/class/generalMerchandise/personalCare/1.png');
INSERT INTO `goods_class_right` VALUES (194, 'personalCare', '吹风机', '/img/class/generalMerchandise/personalCare/2.png');
INSERT INTO `goods_class_right` VALUES (195, 'personalCare', '香氛机', '/img/class/generalMerchandise/personalCare/3.png');
INSERT INTO `goods_class_right` VALUES (196, 'personalCare', '面部护理', '/img/class/generalMerchandise/personalCare/4.png');
INSERT INTO `goods_class_right` VALUES (197, 'personalCare', '化妆镜', '/img/class/generalMerchandise/personalCare/5.png');
INSERT INTO `goods_class_right` VALUES (198, 'personalCare', '头部护理', '/img/class/generalMerchandise/personalCare/6.png');
INSERT INTO `goods_class_right` VALUES (199, 'personalCare', '采耳棒', '/img/class/generalMerchandise/personalCare/7.png');
INSERT INTO `goods_class_right` VALUES (200, 'personalCare', '指甲刀', '/img/class/generalMerchandise/personalCare/8.png');
INSERT INTO `goods_class_right` VALUES (201, 'healthy', '体脂称', '/img/class/generalMerchandise/healthy/1.png');
INSERT INTO `goods_class_right` VALUES (202, 'healthy', '电子体温计', '/img/class/generalMerchandise/healthy/2.png');
INSERT INTO `goods_class_right` VALUES (203, 'healthy', '体重秤', '/img/class/generalMerchandise/healthy/3.png');
INSERT INTO `goods_class_right` VALUES (204, 'healthy', '健身器材', '/img/class/generalMerchandise/healthy/4.png');
INSERT INTO `goods_class_right` VALUES (205, 'healthy', '按摩保健', '/img/class/generalMerchandise/healthy/5.png');
INSERT INTO `goods_class_right` VALUES (206, 'healthy', '足浴器', '/img/class/generalMerchandise/healthy/6.png');
INSERT INTO `goods_class_right` VALUES (207, 'healthy', '筋膜枪', '/img/class/generalMerchandise/healthy/7.png');
INSERT INTO `goods_class_right` VALUES (208, 'healthy', '蒸汽眼罩', '/img/class/generalMerchandise/healthy/8.png');
INSERT INTO `goods_class_right` VALUES (209, 'footwearAccessories', '定制T恤', '/img/class/generalMerchandise/footwearAccessories/1.png');
INSERT INTO `goods_class_right` VALUES (210, 'footwearAccessories', '用心电T恤', '/img/class/generalMerchandise/footwearAccessories/2.png');
INSERT INTO `goods_class_right` VALUES (211, 'footwearAccessories', '眼镜', '/img/class/generalMerchandise/footwearAccessories/3.png');
INSERT INTO `goods_class_right` VALUES (212, 'footwearAccessories', '运动鞋', '/img/class/generalMerchandise/footwearAccessories/4.png');
INSERT INTO `goods_class_right` VALUES (213, 'footwearAccessories', '卫衣', '/img/class/generalMerchandise/footwearAccessories/5.png');
INSERT INTO `goods_class_right` VALUES (214, 'bedFurniture', '床垫', '/img/class/generalMerchandise/bedFurniture/1.png');
INSERT INTO `goods_class_right` VALUES (215, 'bedFurniture', '枕头', '/img/class/generalMerchandise/bedFurniture/2.png');
INSERT INTO `goods_class_right` VALUES (216, 'bedFurniture', '窗帘', '/img/class/generalMerchandise/bedFurniture/3.png');
INSERT INTO `goods_class_right` VALUES (217, 'giftPeriphery', '冰格', '/img/class/generalMerchandise/giftPeriphery/1.png');
INSERT INTO `goods_class_right` VALUES (218, 'giftPeriphery', '零食坚果', '/img/class/generalMerchandise/giftPeriphery/2.png');
INSERT INTO `goods_class_right` VALUES (219, 'giftPeriphery', '红包', '/img/class/generalMerchandise/giftPeriphery/3.png');
INSERT INTO `goods_class_right` VALUES (220, 'giftPeriphery', 'ReadmiKino', '/img/class/generalMerchandise/giftPeriphery/4.png');
INSERT INTO `goods_class_right` VALUES (221, 'giftPeriphery', '抱抱米', '/img/class/generalMerchandise/giftPeriphery/5.png');
INSERT INTO `goods_class_right` VALUES (222, 'giftPeriphery', '环保袋', '/img/class/generalMerchandise/giftPeriphery/6.png');
INSERT INTO `goods_class_right` VALUES (223, 'giftPeriphery', '手链吊坠', '/img/class/generalMerchandise/giftPeriphery/7.png');
INSERT INTO `goods_class_right` VALUES (224, 'giftPeriphery', '一往无前', '/img/class/generalMerchandise/giftPeriphery/8.png');
INSERT INTO `goods_class_right` VALUES (225, 'childrenArticles', '益智积木', '/img/class/childrenArticles/childrenArticles/1.png');
INSERT INTO `goods_class_right` VALUES (226, 'childrenArticles', '液晶小黑板', '/img/class/childrenArticles/childrenArticles/2.png');
INSERT INTO `goods_class_right` VALUES (227, 'childrenArticles', '遥控车', '/img/class/childrenArticles/childrenArticles/3.png');
INSERT INTO `goods_class_right` VALUES (228, 'childrenArticles', '儿童滑板', '/img/class/childrenArticles/childrenArticles/4.png');
INSERT INTO `goods_class_right` VALUES (229, 'childrenArticles', '早教启智', '/img/class/childrenArticles/childrenArticles/5.png');
INSERT INTO `goods_class_right` VALUES (230, 'childrenArticles', '儿童手表', '/img/class/childrenArticles/childrenArticles/6.png');
INSERT INTO `goods_class_right` VALUES (231, 'hotRecommend', '免费安装服务', '/img/class/xiaomiService/hotRecommend/1.png');
INSERT INTO `goods_class_right` VALUES (232, 'hotRecommend', '以旧换新', '/img/class/xiaomiService/hotRecommend/2.png');
INSERT INTO `goods_class_right` VALUES (233, 'hotRecommend', '企业团购', '/img/class/xiaomiService/hotRecommend/3.png');
INSERT INTO `goods_class_right` VALUES (234, 'communicationServices', '移动1元体验包', '/img/class/xiaomiService/communicationServices/1.png');
INSERT INTO `goods_class_right` VALUES (235, 'communicationServices', 'G折扣套餐', '/img/class/xiaomiService/communicationServices/2.png');
INSERT INTO `goods_class_right` VALUES (236, 'communicationServices', '大流量卡', '/img/class/xiaomiService/communicationServices/3.png');
INSERT INTO `goods_class_right` VALUES (237, 'communicationServices', '联通腾讯王卡', '/img/class/xiaomiService/communicationServices/4.png');
INSERT INTO `goods_class_right` VALUES (238, 'communicationServices', '电信米粉流量卡', '/img/class/xiaomiService/communicationServices/5.png');
INSERT INTO `goods_class_right` VALUES (239, 'communicationServices', '移动花卡', '/img/class/xiaomiService/communicationServices/6.png');
INSERT INTO `goods_class_right` VALUES (240, 'communicationServices', '吃到饱', '/img/class/xiaomiService/communicationServices/7.png');
INSERT INTO `goods_class_right` VALUES (241, 'communicationServices', '1元/天任性用', '/img/class/xiaomiService/communicationServices/8.png');
INSERT INTO `goods_class_right` VALUES (242, 'communicationServices', '联通5G升级包', '/img/class/xiaomiService/communicationServices/9.png');
INSERT INTO `goods_class_right` VALUES (243, 'phoneService', '外屏碎威胁服务', '/img/class/xiaomiService/phoneService/1.png');
INSERT INTO `goods_class_right` VALUES (244, 'phoneService', '手机保障服务', '/img/class/xiaomiService/phoneService/2.png');
INSERT INTO `goods_class_right` VALUES (245, 'phoneService', '手机上门维修', '/img/class/xiaomiService/phoneService/3.png');
INSERT INTO `goods_class_right` VALUES (246, 'phoneService', '后壳换新服务', '/img/class/xiaomiService/phoneService/4.png');
INSERT INTO `goods_class_right` VALUES (247, 'phoneService', '屏幕换新服务', '/img/class/xiaomiService/phoneService/5.png');
INSERT INTO `goods_class_right` VALUES (248, 'phoneService', '电池换新服务', '/img/class/xiaomiService/phoneService/6.png');
INSERT INTO `goods_class_right` VALUES (249, 'phoneService', '手机贴膜服务', '/img/class/xiaomiService/phoneService/7.png');
INSERT INTO `goods_class_right` VALUES (250, 'phoneService', '\"机\"艺重塑', '/img/class/xiaomiService/phoneService/8.png');
INSERT INTO `goods_class_right` VALUES (251, 'notebookService', '电池换新服务', '/img/class/xiaomiService/notebookService/1.png');
INSERT INTO `goods_class_right` VALUES (252, 'financeService', '小米中信卡', '/img/class/xiaomiService/financeService/1.png');
INSERT INTO `goods_class_right` VALUES (253, 'financeService', '小米光大卡', '/img/class/xiaomiService/financeService/2.png');
INSERT INTO `goods_class_right` VALUES (254, 'financeService', '小米招行卡', '/img/class/xiaomiService/financeService/3.png');
INSERT INTO `goods_class_right` VALUES (255, 'financeService', '小米广发卡', '/img/class/xiaomiService/financeService/4.png');
INSERT INTO `goods_class_right` VALUES (256, 'cloudService', '云服务空间年卡', '/img/class/xiaomiService/cloudService/1.png');
INSERT INTO `goods_class_right` VALUES (257, 'cloudService', '云服务空间月卡', '/img/class/xiaomiService/cloudService/1.png');
INSERT INTO `goods_class_right` VALUES (258, 'retailStores', '小米之家', '/img/class/retailStores/retailStores/1.png');
INSERT INTO `goods_class_right` VALUES (259, 'retailStores', '服务网点', '/img/class/retailStores/retailStores/2.png');

-- ----------------------------
-- Table structure for goods_classes
-- ----------------------------
DROP TABLE IF EXISTS `goods_classes`;
CREATE TABLE `goods_classes`  (
  `id` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sort` int(0) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_classes
-- ----------------------------
INSERT INTO `goods_classes` VALUES ('1', '小米秒杀', '/img/grid/1.png', '/pages/grid/grid1/grid1', 0);
INSERT INTO `goods_classes` VALUES ('2', '小米众筹', '/img/grid/2.png', '/pages/grid/grid2/grid2', 0);
INSERT INTO `goods_classes` VALUES ('3', 'Note 9 系列', '/img/grid/3.png', '/pages/grid/grid3/grid3', 0);
INSERT INTO `goods_classes` VALUES ('4', '以旧换新', '/img/grid/4.png', '/pages/grid/grid4/grid4', 0);
INSERT INTO `goods_classes` VALUES ('5', '小米上新', '/img/grid/5.png', '/pages/grid/grid5/grid5', 0);
INSERT INTO `goods_classes` VALUES ('6', '智能', '/img/grid/6.png', '/pages/grid/grid6/grid6', 0);
INSERT INTO `goods_classes` VALUES ('7', '笔记本热卖', '/img/grid/7.png', '/pages/grid/grid7/grid7', 0);
INSERT INTO `goods_classes` VALUES ('8', '电视热卖', '/img/grid/8.png', '/pages/grid/grid8/grid8', 0);

-- ----------------------------
-- Table structure for goods_img
-- ----------------------------
DROP TABLE IF EXISTS `goods_img`;
CREATE TABLE `goods_img`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `gid` int(0) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int unsigned NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for my_option_imgs
-- ----------------------------
DROP TABLE IF EXISTS `my_option_imgs`;
CREATE TABLE `my_option_imgs`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `value` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of my_option_imgs
-- ----------------------------
INSERT INTO `my_option_imgs` VALUES ('1', '会员中心', '/img/my/member.png');
INSERT INTO `my_option_imgs` VALUES ('2', '我的优惠', '/img/my/discount.png');
INSERT INTO `my_option_imgs` VALUES ('3', '服务中心', '/img/my/service.png');
INSERT INTO `my_option_imgs` VALUES ('4', '小米之家', '/img/my/xiaomiHome.png');
INSERT INTO `my_option_imgs` VALUES ('5', '联系客服', '/img/my/customerService.png');
INSERT INTO `my_option_imgs` VALUES ('6', '我的F码', '/img/my/Fcode.png');
INSERT INTO `my_option_imgs` VALUES ('7', '礼物码兑换', '/img/my/giftExchange.png');
INSERT INTO `my_option_imgs` VALUES ('8', '设置', '/img/my/setting.png');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `hits` int(0) DEFAULT 0,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT NULL,
  `uid` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8310 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (1, '以物易物内购会，快来参与！', '/news/001.jpg', '亲们，还在为宿舍空间小而发愁吗？还在为查宿舍时一大堆东西不知道往哪放而烦恼吗？没关系，我们来帮你！把你不想要的东西拿出来，告诉我们你想要的东西，只要有合适的、符合你们要求的，我们会联系你，只要双方达成协议，你们就算易物成功。还在等什么？快快行动吧~~~~~~~~~~~<p>活动时间：本周六全天 <p>活动地点：风雨操场。</p>联系方式：景琪18835792284 <p>刘晓婷：18734793932。</p></p>', 200, '2021-06-09 12:30:25', NULL, 'zs');
INSERT INTO `news` VALUES (2, '川信“618”，我们准备好了！！', '/news/002.jpg', '活动前，指导老师对志愿者们进行了关于家电维修知识的培训，同时对本次志愿服务进行了明确部署及分工，强调了安全注意事项。活动现场，志愿者们对社区居民送来的家电逐一进行了登记，并认真对每一件家电进行了问题查找，经过几个小时的劳动，在带队教师的指导下修理好了二十余件家电，受到了社区居民的一致好评。本次志愿服务活动，不仅是学史力行的一次具体实践，也是一次现实而生动的劳动教育课，更彰显了该院师生的社会责任与担当。', 120, '2021-06-09 12:30:25', NULL, 'zs');
INSERT INTO `news` VALUES (3, '多媒体专业免费摄影，还有精美相框相送哟', '/news/003.jpg', '<p>是的，我预计免费拍100个人像计划。</p><p>希望你是一个人，一对情侣，一对闺蜜，一对基友，一对姐妹，一对兄弟……只要你想在川信拍一组有趣的照片记录你的生活，联系我吧，我们一起将人像定格为永恒的灵魂。</p><p>拍摄地点，川信的“大街小巷”。如果我不小心去了你的地盘，你带上时间我拎着相机就开拍，拍摄时间主要以周末和节假日为主。如果我们聊得特别来，下课之后也可以约一波哟！拍摄完成的图片，我们会筛选部分修图，并免费赠送给你。</p>', 370, '2021-06-09 12:30:25', NULL, 'zs');
INSERT INTO `news` VALUES (4, '第五届“川信跳骚市场”将在室内体育馆举行', '/news/004.jpg', '活动前，指导老师对志愿者们进行了关于家电维修知识的培训，同时对本次志愿服务进行了明确部署及分工，强调了安全注意事项。活动现场，志愿者们对社区居民送来的家电逐一进行了登记，并认真对每一件家电进行了问题查找，经过几个小时的劳动，在带队教师的指导下修理好了二十余件家电，受到了社区居民的一致好评。本次志愿服务活动，不仅是学史力行的一次具体实践，也是一次现实而生动的劳动教育课，更彰显了该院师生的社会责任与担当。', 333, '2021-06-09 12:30:25', NULL, 'zs');
INSERT INTO `news` VALUES (5, '易班第八届竞聘面试会成功举行', '/news/005.jpg', '活动前，指导老师对志愿者们进行了关于家电维修知识的培训，同时对本次志愿服务进行了明确部署及分工，强调了安全注意事项。活动现场，志愿者们对社区居民送来的家电逐一进行了登记，并认真对每一件家电进行了问题查找，经过几个小时的劳动，在带队教师的指导下修理好了二十余件家电，受到了社区居民的一致好评。本次志愿服务活动，不仅是学史力行的一次具体实践，也是一次现实而生动的劳动教育课，更彰显了该院师生的社会责任与担当。', 213, '2021-06-09 12:30:25', NULL, 'zs');
INSERT INTO `news` VALUES (6, '浓情端午粽意飘香，软件学院包粽子活动', '/news/006.jpg', '粽香满堂飘，粽意满校园。在端午佳节临近之际，为传承中华传统文化，纪念中国伟大的浪漫主义诗人屈原，积极弘扬爱国精神，同时丰富教职工的校园文化生活，缓解教师工作压力，愉悦身心，增进广大教职工的沟通与友谊。2020年6月19日下午，软件学院的小哥哥小姐姐们在思源餐厅开展“浓情端午，粽意飘香”为主题的端午节包粽子活动。甜蜜有你，快带上你心爱的她（他）体验爱情包裹吧。', 145, '2021-06-09 12:30:25', NULL, 'ls');
INSERT INTO `news` VALUES (7, '庆祝中国共产党成立100周年展演活动演员招募', '/news/007.jpg', '为庆祝中国共产党成立100周年，展现新时代学子精神风貌，学校精心组织排演了红色舞剧《林青的远方》、红色诗歌剧《高原之鹰》、红色话剧《草原艺术社》、“光荣岁月”交响音乐会、“唱支山歌给党听”合唱音乐会等，激励广大青年学子坚定理想信念，坚定不移听党话、感党恩、跟党走，为实现中华民族伟大复兴的中国梦不懈努力。', 784, '2021-06-09 12:30:25', NULL, 'ls');
INSERT INTO `news` VALUES (8, '学霸笔记，你想要吗？', '/news/008.jpg', '一年一度的学霸笔记售卖会即将开始了，还带着学长、学姐们的签名和期盼，来一份毕业季的清凉盛宴，寻着学长学姐们的足迹，走向更美好的未来。加油，每一届莘莘学子们。', 346, '2021-06-09 12:30:25', NULL, 'ls');
INSERT INTO `news` VALUES (9, '“中国梦·校园情”软件学院第一届微电影短视频大赛开始了', '/news/009.jpg', '以此次技能竞赛为背景，通过对其整个学习、备赛、参赛全过程心路历程的生动刻画，弘扬了高职学院学生尊重知识、苦练技能、锤炼工匠精神的崇高理想和远大抱负。通过艺术的手段和角度，向全社会发出了呼唤工匠、培育工匠、标榜工匠的新时代最强音，为学院大学生思想政治教育，践行社会主义核心价值观提供了全新的载体和手段。在积极引导当代大学生树立正确三观的同时，也教育当代大学生，无论何时何地，科技永远是立国之本、强国之基、报国之道，每一个大学生都应该把对专业技术技能的极致追求作为自己矢志不渝的前进方向，把“爱岗敬业、严谨专注、精益求精”的工匠精神作为自己永恒的奋斗目标。', 223, '2021-06-09 12:30:25', NULL, 'ls');
INSERT INTO `news` VALUES (10, '带货直播，没你不行', '/news/010.jpg', '发展电商产业就是在助推优势产业的升级换代，促进电商产业的转型发展就是在抓民生促就业。直播带货作为电商产业发展的一种新业态，不仅是未来互联网发展的重要内容，更是物联网建设的重要措施。青春扶贫，能量助农，广元市2021年“我为广元品牌农产品代言”活动在川信网红青年的“直播带货”下圆满结束，每一位参赛选手以饱满的热情、精彩的解说，为广元品牌农产品代言，通过网络让更多的人了解广元、认识广元、走进广元。', 221, '2021-06-09 12:30:25', NULL, 'ls');

-- ----------------------------
-- Table structure for order_imgs
-- ----------------------------
DROP TABLE IF EXISTS `order_imgs`;
CREATE TABLE `order_imgs`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `text` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_imgs
-- ----------------------------
INSERT INTO `order_imgs` VALUES ('1', '/img/my/orderSituation/1.png', '待付款');
INSERT INTO `order_imgs` VALUES ('2', '/img/my/orderSituation/2.png', '待收货');
INSERT INTO `order_imgs` VALUES ('3', '/img/my/orderSituation/3.png', '退换修');

-- ----------------------------
-- Table structure for order_items
-- ----------------------------
DROP TABLE IF EXISTS `order_items`;
CREATE TABLE `order_items`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `gid` int(0) DEFAULT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT 0,
  `count` int(0) DEFAULT 1,
  `order_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `uid` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `uid` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for recommends
-- ----------------------------
DROP TABLE IF EXISTS `recommends`;
CREATE TABLE `recommends`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of recommends
-- ----------------------------
INSERT INTO `recommends` VALUES ('1', '/img/recommend/1.png', '/pages/index/detailed/detailed?id=1');
INSERT INTO `recommends` VALUES ('2', '/img/recommend/2.png', '/pages/index/detailed/detailed?id=2');
INSERT INTO `recommends` VALUES ('3', '/img/recommend/3.png', '/pages/index/detailed/detailed?id=3');

-- ----------------------------
-- Table structure for shop_cars
-- ----------------------------
DROP TABLE IF EXISTS `shop_cars`;
CREATE TABLE `shop_cars`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `gid` int(0) DEFAULT NULL,
  `img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT 0,
  `state` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `count` int(0) DEFAULT 1,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `uid` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop_cars
-- ----------------------------
INSERT INTO `shop_cars` VALUES (1, 1, '/img/shopcar/productList/1.jpg', '小米11 Ultra 8GB+256GB 陶瓷黑', 5999, 'true', 1, '2021-06-10 19:29:45', '1');
INSERT INTO `shop_cars` VALUES (2, 2, '/img/shopcar/productList/2.jpg', '小米曲面显示器 34英寸黑色', 2579, 'false', 1, '2021-06-10 19:35:34', '2');
INSERT INTO `shop_cars` VALUES (3, 3, '/img/shopcar/productList/3.jpg', 'Readmi 手表 水墨蓝', 269, 'true', 1, '2021-06-10 19:35:56', '3');
INSERT INTO `shop_cars` VALUES (4, 4, '/img/shopcar/productList/4.jpg', '小米全面屏电视E32C 灰色 32英寸', 899, 'true', 1, '2021-06-10 19:36:07', '4');
INSERT INTO `shop_cars` VALUES (5, 5, '/img/shopcar/productList/5.jpg', '小米路由器mesh 白色', 799, 'false', 1, '2021-06-10 19:36:25', '5');
INSERT INTO `shop_cars` VALUES (6, 6, '/img/shopcar/productList/6.jpg', '米家变频滚筒洗衣机1A 8kg 白色', 1249, 'true', 1, '2021-06-10 19:36:43', '6');
INSERT INTO `shop_cars` VALUES (7, 7, '/img/shopcar/productList/7.jpg', '自然风 | 米家空调 鎏金版 2匹', 2999, 'true', 1, '2021-06-10 19:37:06', '7');
INSERT INTO `shop_cars` VALUES (8, 8, '/img/shopcar/productList/8.jpg', '斯奥米米家喷墨打印机 白色', 959, 'false', 1, '2021-06-10 19:37:20', '8');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tel` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `face` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `api_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `state` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '$2y$10$MF0GjXJX8iK5KbWHxKA06ucDEa0roVC9XHhMnFu8NaxGVU78QqJN.', '张三', '13980524660', NULL, '1dca62fe3bcb3226fa00e12d352cbe53b561ac522171860925921c5693e4e141d', '1');

SET FOREIGN_KEY_CHECKS = 1;
