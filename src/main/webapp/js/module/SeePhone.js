var SeePhone = {
    see : function (_this) {
        var id = _this.attr("see-id");
        $.ajax({
            url: window.basePath + "/base/getHouserePhone?id=" + id,
            type: "get",
            dataType: "json",
            timeout: 5000,
            success: function (res) {
                if (res.code < 0) {
                    jeesnsDialog.errorTips(res.message);
                } else {
                    if (res.code == 0) {
                       // _this.html("<i class='fa fa-heart'></i> 喜欢 " + res.data);
                        _this.removeClass("btn-outline")
                    } else {
                        //_this.html("<i class='fa fa-heart-o'></i> 喜欢 " + res.data);
                        _this.addClass("btn-outline");
                    }
                }
            }
        });
    }
}
