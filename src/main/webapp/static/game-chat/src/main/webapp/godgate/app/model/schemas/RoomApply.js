Ext.define('app.model.schemas.RoomApply', {
    extend: 'app.model.schemas.Base',
    mapping: 'org.takeback.chat.entity.PubRoomApply',
    name: '房间属性',
    orderInfo: 'createTime desc',
    items: [
        {id: 'id', type: 'int', name: 'ID', display:0},
        {id: 'uid', type: 'int', name: 'UID',allowBlank:false,queryable:true},
        {id: 'userIdText', type: 'string', name: '用户名',allowBlank:false},
        {id: 'name', type: 'string', name: '姓名',allowBlank:false},
        {id: 'mobile', type: 'string', name: '联系电话',allowBlank:false},
        {id: 'createTime', type: 'datetime', name: '申请时间'},
    ],
    singleton: true
});