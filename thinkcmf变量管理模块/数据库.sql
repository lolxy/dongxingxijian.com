CREATE TABLE IF NOT EXISTS `zysj_variable` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '变量ID',
  `variableName` varchar(255) NOT NULL COMMENT '变量名',
  `variableValue` varchar(255) DEFAULT NULL COMMENT '变量值',
  `beizhu` varchar(255) DEFAULT NULL COMMENT '备注说明',
  `listorder` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  UNIQUE KEY `variableName` (`variableName`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;