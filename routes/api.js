var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* apiList */
router.get('/apiList', function(req, res, next) {
  
    var data = [
      {
          "name": "shaoXia",
          "age":18
      }
    ];
  
    var response = {isSuccess:true,data:data};
    res.send(JSON.stringify(response));

  });


/* marketIntelligent */
router.get('/marketIntelligent', function(req, res, next) {
    var rows = [];
    var names = ["靳东", "贺涵", "马伊琍", "罗子君", "袁泉", "唐晶", "雷佳音", "陈俊生 ", "吴越", "凌玲", "许娣", "薛甄珠", "张龄心", "罗子群", "邬君梅", "吴大娘", "栾元晖", "白光", "郑罗茜", "薇薇安", "啜妮", "洛洛", "梅婷", "卓渐清前女友", "谭凯", "Adom", "孔维", "单身女人", "张棪琰", "苏曼殊", "侯岩松", "老金", "魏之皓", "平儿", "王天泽", "冷佳清", "于明加", "安琪儿CEO", "任东霖", "李睿", "张衣", "罗平", "黄澜", "M女士", "陈道明", "卓渐清"];
    for (var i = 0; i< 10; i++){
        var item = {};
        item.money = parseInt(Math.random()*9999 + 10000);
        item.orderNumber = parseInt(Math.random()*100);
        item.rankIndex = i+1;
        item.userId = '014'+ (parseInt(Math.random()*999 + 1000)).toString();
        item.userName = names[parseInt(Math.random()*46)];
        rows.push(item);
    }
    var data = {
        mine: {
          money: 20000,
          orderNumber: 10,
          userId: "0141953",
          userName: "陈涛",
          rankIndex: 1
        },
        rows: rows
      };
  
    var response = {
      isSuccess:true,
      code: 0001,
      Message: "请求成功",
      data:data
    };
    res.send(JSON.stringify(response));

  });


/* personalData */
router.get('/personalData', function(req, res, next) {
  
    var data = [
      {
        userId: "0141953",
        userName: "陈涛",
        email:'chentao@worldunion.com.cn', //邮箱
        department: "深圳总部",
        departmentlabel: "广州顾问及工商资产运营事业部_营业二部",//本部标签
        channelabbreviation: "广州地区直辖", //渠道简称
        channelCode:"1104-000-003-1071", //渠道编码
        jobStation:"商业咨询顾问", //岗位
        channelRole:"渠道推介成员",  //渠道角色
        leader:"渠道推介成员",  //上级
        cityName:'广州',
        CityId:'009449',
        telPhone: "13399999999",
        region: "广州地区" , //归属地区
        userPic:'http://facebook.github.io/react/img/logo_og.png'
      }
    ];
  
    var response = {
      isSuccess:true,
      code: 0001,
      Message: "请求成功",
      data:data
    };
    res.send(JSON.stringify(response));

  });


/* userInfo */
router.get('/userInfo', function(req, res, next) {
  
    var data = {
        userId: "0141953",
        userName: "陈涛",
        department: "深圳总部",
        hApplicationFormNum: "18",
        dApplicationFormNum: "20",
        allIncome: "19000",
        dealIncome: "8000",
        resultsRank: "2",
        learnNum: "10",
        telPhone: "13399999999",
        region: "广州地区直辖"
      };
  
    var response = {
      isSuccess:true,
      code: 0001,
      Message: "请求成功",
      data:data
    };
    res.send(JSON.stringify(response));

  });
  

module.exports = router;
