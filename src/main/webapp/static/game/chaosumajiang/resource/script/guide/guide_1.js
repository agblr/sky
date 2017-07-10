Object({
    info:"让玩家丢掉胡牌区的牌",  //脚本描述
    guideLabel:"1：丢掉不需要的牌", //给玩家的引导说明
    guideLabelPos:{x:0 , y:0},
    guideImg:"", //引导说明图片
    guideImgPos:{x:0 , y:0},
    startFunc:function(){
        //暂停时间
        majiang.Controllers.GameMain.play.scoreBoard.timerStop();
    },
    /**
     * 读取脚本�? 绑定目标按钮触发此方�?
     * 点击目标按钮�? 触发此方�?
     */
    onTapFunc:function(){
        //执行�?2个脚�?
        var target = majiang.Controllers.GameMain.play.xuanArea.paiGroup.getChildAt(0);
        majiang.Controllers.GuideMain.loadGuideScript(2,target);
    }
});