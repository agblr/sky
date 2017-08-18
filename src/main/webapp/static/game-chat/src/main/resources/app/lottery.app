<?xml version="1.0" encoding="UTF-8"?>
<app name="网站管理" iconCls="fa fa-desktop">
    <catagory id="CONFIG" name="网站管理" iconCls="fa fa-users">
        <module id="config_report_users" name="用户管理" script="app.chat.UserListView" iconCls="fa fa-user">
            <properties>
                <p name="entityName">WebsiteUser</p>
                <p name="listService">userManageService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="create" name="新建" iconCls="fa fa-create"/>
            <action id="update" name="修改" iconCls="fa fa-edit"/>
            <action id="moneyOrder" name="↓余额" />
            <action id="scoreOrder" name="↓积分"/>
            <action id="chargeAmountOrder" name="↓提款"/>
            <action id="registDateOrder" name="↓注册"/>
            <action id="loginDateOrder" name="↓登陆"/>
            <!--<action id="export" name="导出结果"/>-->
        </module>
        <module id="user_ip" name="IP地址监控" script="app.ux.MyListView" iconCls="fa fa-user">
            <properties>
                <p name="entityName">LoginIp</p>
                <p name="listService">myListServiceInt</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="read"  name="查看" iconCls="fa fa-search-plus"/>
            <action id="vpn"  name="VPN嫌疑" iconCls="fa fa-search-plus"/>
            <action id="mutiAccount"  name="多号嫌疑" iconCls="fa fa-search-plus"/>
        </module>
    </catagory>
    <catagory id="RECHARGE_WITHDRAW" name="充值提现管理" iconCls="fa fa-users">
        <module id="userAddMoney" name="手动充值" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">ManualMoneyLog</p>
                <p name="listService">manualMoneyService</p>
            </properties>
            <action id="read" name="查看" iconCls="fa fa-search-plus"/>
            <action id="create" name="增加余额" iconCls="fa fa-edit"/>
        </module>
        <module id="recharge" name="充值查询" script="app.chat.RechargeListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">Recharge</p>
                <p name="listService">rechargeService</p>
                <p name="cnd">['ne',['$','status'],['s','9']]</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="read" name="查看" iconCls="fa fa-search-plus"/>
            <action id="timeOrder" name="时间排序" iconCls="fa fa-search-plus"/>
            <action id="moneyOrder" name="金额排序" iconCls="fa fa-search-plus"/>
        </module>
        <module id="withdraw" name="提现管理" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">Withdraw</p>
                <p name="listService">withdrawAdminService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="read" name="查看" iconCls="fa fa-search-plus"/>
            <action id="update" name="审核" iconCls="fa fa-edit"/>
            <action id="delete" name="删除" iconCls="fa fa-edit"/>
        </module>
        <module id="bankinfo" name="客户提现账号" script="app.ux.MyListView" iconCls="fa fa-cogs">
            <properties>
                <p name="entityName">Bank</p>
                <p name="listService">myListServiceInt</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="read" name="查看" iconCls="fa fa-search-plus"/>
        </module>
    </catagory>

    <catagory id="room" name="房间管理" iconCls="fa fa-users">
        <module id="roomList" name="房间列表" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">Room</p>
                <p name="listService">roomAdminService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="create" name="新增" iconCls="fa fa-search-plus"/>
            <action id="update" name="修改" iconCls="fa fa-edit"/>
            <action id="delete" name="删除" iconCls="fa fa-edit"/>
        </module>
        <module id="roomPropList" name="房间属性管理" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">RoomProp</p>
                <p name="listService">roomPropAdminService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="create" name="新增" iconCls="fa fa-search-plus"/>
            <action id="update" name="修改" iconCls="fa fa-edit"/>
        </module>
        <module id="roomApply" name="开房申请" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">RoomApply</p>
                <p name="listService">myListServiceInt</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="delete" name="删除" iconCls="fa fa-edit"/>
        </module>

        <module id="robotList" name="机器人管理" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">RoomRobot</p>
                <p name="listService">robotAdminService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>

            <action id="update" name="修改" iconCls="fa fa-edit"/>
        </module> -->
    </catagory>

    <catagory id="BET" name="红包游戏" iconCls="fa fa-users">
        <module id="detail" name="抢包明细" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">LotteryDetail</p>
                <p name="listService">myListServiceInt</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="read" name="查看" iconCls="fa fa-search-plus"/>
        </module>
        <module id="lotteryControl" name="点数控制" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">ValueControl</p>
                <p name="listService">controlService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
            <action id="create" name="添加" iconCls="fa fa-create"/>
            <action id="delete" name="删除" iconCls="fa fa-delete"/>
        </module>
    </catagory>

    <catagory id="PCDD" name="PC蛋蛋" iconCls="fa fa-users">
        <module id="betLog" name="下注明细" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">ValueControl</p>
                <p name="listService">controlService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
        </module>
        <module id="rateControl" name="赔率控制" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">PcRateConfig</p>
                <p name="listService">myListServiceInt</p>
            </properties>
            <action id="update" name="修改" iconCls="fa fa-edit"/>
        </module>
        <module id="pcConfig" name="蛋蛋配置" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">PcParams</p>
                <p name="listService">myListServiceInt</p>
            </properties>
            <action id="update" name="修改" iconCls="fa fa-edit"/>
        </module>
    </catagory>

    <catagory id="caculate" name="统计报表" iconCls="fa fa-users">
        <module id="summaryInfo" name="站点统计" script="app.lottery.SummaryListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">Summary</p>
                <p name="listService">summaryService</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
        </module>



        <module id="config_online_users" name="在线用户" script="app.ux.MyListView" iconCls="fa fa-user">
            <properties>
                <p name="entityName">WebsiteUser4Online</p>
                <p name="listService">onlineUserService</p>
            </properties>
            <action id="read"  name="查看" iconCls="fa fa-search-plus"/>
            <action id="update" name="修改" iconCls="fa fa-edit"/>
        </module>
<!--
        <module id="game" name="游戏汇总报表" script="app.ux.MyListView" iconCls="fa fa-gift">
            <properties>
                <p name="entityName">GameReport</p>
                <p name="listService">myListServiceInt</p>
            </properties>
            <action id="query" name="搜索" iconCls="fa fa-search"/>
        </module>  -->
    </catagory>

</app>
