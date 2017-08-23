<form action="caseKnowledge/${msg }.do" name="ckForm" id="ckForm" method="post" enctype="multipart/form-data">  
    <input type="hidden" name="ck_belong" value="${CK_BELONG }"/>  
    <input type="hidden" name="ck_id" id="ck_id" value="${pd.CK_ID }"/>  
    <table id="table_report" class="table table-striped table-bordered table-hover">  
        <c:if test="${fx != 'head'}">  
        <tr>  
            <td style="width:79px;text-align: right;padding-top: 13px;">类型:</td>  
            <td id="tp_ids">  
                <select class="chosen-select form-control" name="tp_id" id="tp_id" data-placeholder="请选择类型" style="vertical-align:top;" style="width:98%;" >  
                <option value=""></option>  
                <c:forEach items="${tpList}" var="tp">  
                    <option value="${tp.TP_ID }" <c:if test="${tp.TP_ID == pd.TP_ID }">selected</c:if>>${tp.TP_NAME }</option>  
                </c:forEach>  
                </select>  
            </td>  
        </tr>  
        </c:if>  
        <tr>  
            <td style="width:79px;text-align: right;padding-top: 13px;">标题:</td>  
            <td><input type="text" name="ck_title" id="ck_title" value="${pd.CK_TITLE }" maxlength="32" placeholder="这里输入标题" title="标题" style="width:98%;"/></td>  
        </tr>  
        <tr>  
            <td style="width:79px;text-align: right;padding-top: 13px;">简介:</td>  
            <td><input type="text" name="ck_blurb" id="ck_blurb" value="${pd.CK_BLURB }" maxlength="32" placeholder="这里输入简介" title="简介" style="width:98%;"/></td>  
        </tr>  
        <tr id="attach_type">  
            <td style="width:79px;text-align: right;padding-top: 13px;">附件类型:</td>  
            <td>  
                <select name="ck_attach_type" id="ck_attach_type" placeholder="附件类型" title="附件类型" style="width:98%;">  
                    <option value="">请选择附件类型</option>  
                    <option value="0">图片</option>  
                    <option value="1">视频</option>  
                    <option value="2">文档</option>  
                </select>  
            </td>  
        </tr>  
        <tr id="attach_path">  
            <td style="width:79px;text-align: right;padding-top: 13px;">附件:</td>  
            <td>  
                <input type="file" name="file" id="ck_attach_path" style="width:98%;"/>  
            </td>  
        </tr>  
        <tr style="display: none;">  
            <td style="width:79px;text-align: right;padding-top: 13px;">状态:</td>  
            <td>  
                <span id="ck_state"></span>  
                <input type="radio" name="ck_state" title="状态" value="0" checked="checked">可用      
                <input type="radio" name="ck_state" title="状态" value="1" >不可用  
            </td>  
        </tr>  
        <tr>  
            <td style="width:79px;text-align: right;padding-top: 13px;">备注:</td>  
            <td><textarea name="remarks" id="remarks" title="备注" style="width:98%;">${pd.REMARKS }</textarea></td>  
        </tr>  
        <tr>  
            <td style="text-align: center;" colspan="10">  
                <a class="btn btn-mini btn-primary" onclick="save();">保存</a>  
                <a class="btn btn-mini btn-danger" onclick="top.Dialog.close();">取消</a>  
            </td>  
        </tr>  
    </table>  
</form>  