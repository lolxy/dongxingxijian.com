CREATE TABLE IF NOT EXISTS `zysj_variable` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '����ID',
  `variableName` varchar(255) NOT NULL COMMENT '������',
  `variableValue` varchar(255) DEFAULT NULL COMMENT '����ֵ',
  `beizhu` varchar(255) DEFAULT NULL COMMENT '��ע˵��',
  `listorder` int(11) NOT NULL DEFAULT '0' COMMENT '����',
  PRIMARY KEY (`id`),
  UNIQUE KEY `variableName` (`variableName`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;