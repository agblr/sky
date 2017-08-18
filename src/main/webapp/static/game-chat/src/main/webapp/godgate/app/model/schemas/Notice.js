Ext.define('app.model.schemas.Notice', {
    extend: 'app.model.schemas.Base',
    mapping: 'org.takeback.chat.entity.PubArticle',
    name: '系统公告',
    orderInfo: 'id desc',
    items: [
        {id: 'id', type: 'int', name: 'ID', hidden: true},
        {id: 'title', type: 'string', name: '标题', allowBlank: false, width: 180, colspan: 3},
        {id: 'docType', type: 'string', name: '类型',readonly:true,value:1},
        {id: 'createTime', type: 'datetime', name: '时间', width: 160, value: new Date()},
        {id: 'createUser', type: 'string', name: '作者', dic: 'dic.users'},
        {id: 'content', type: 'string', name: '内容', allowBlank: false, width: 280, colspan: 3, xType: 'htmleditor'}
    ],
    singleton: true
});