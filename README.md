# 混合云客户需要准备的事项
---
* 申请苹果企业开发者账号
* 确定应用名称
* 提供 ICON 和闪屏图片
	* ICON 规格（正方形，无圆角，16张）: 20 x 20、29 x 29、40 x 40、57 x 57、58 x 58、60 x 60、76 x 76、80 x 80、87 x 87、114 x 114、120 x 120、152 x 152、167 x 167、180 x 180、512 x 512、1024 x 1024
	* 闪屏规格（9张）: 640 x 960、640 x 1136、750 x 1334、1242 x 2208、768 x 1024、1024 x 768、1536 x 2048、2048 x 1536、1125 x 2436
* 登录界面和关于界面的 LOGO 图（4张）
	* 登录页尺寸：148 x 148、222 x 222
	* 关于页尺寸：190 x 126、285 x 189
* 引导页（共10张，5个界面，每个界面2个尺寸）
	* 尺寸：600 x 600、990 x 990

* 提供开发者证书及密码 （格式：.p12）
* 提供主工程的推送证书(VoIP)及密码（格式：.p12）
* 提供主工程和四个扩展工程的描述文件（格式：.mobileprovision），步骤如下：
	* 新建一个App Groups：group.xxx.yzj (xxx最好是客户的简写)
	* 新建5个App IDs，*注意：5个App IDs在App Service处勾选App Groups选项；主工程App ID还需勾选Associated Domains和Push Notifications，其它4个不用*
		* 主工程：com.xxx.yzj
		* 分享扩展：com.xxx.yzj.extension
		* 快捷操作Widget扩展：com.xxx.yzj.widget
		* 消息Widget扩展：com.xxx.yzj.messagewidget
		* 来电智能识别扩展：com.xxx.yzj.callextension
	* *将5个App IDs关联到第一步中的App Groups上*
---
