Object({
    info:"让玩家知道需要点击胡牌",  //脚本描述
    guideLabel:"3：牌型配好后，点击胡牌", //给玩家的引导说明
    guideLabelPos:{x:0 , y:0},
    guideImg:"", //引导说明图片
    guideImgPos:{x:0 , y:0},
    startFunc:function(){
        
    },
    /**
     * 读取脚本�? 绑定目标按钮触发此方�?
     * 点击目标按钮�? 触发此方�?
     */
    onTapFunc:function(){
        //开始计�?
        majiang.Controllers.GameMain.play.scoreBoard.timerStart();
    }
});