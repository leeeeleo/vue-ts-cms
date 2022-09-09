export const rules = {
    name:[
        {
            require:true,
            message:'用户名必填',
            trigger:'blur'
        },
        {
            pattern:/^[a-z0-9]{5,10}$/,
            message:'用户名必须是5~110个字母或数字',
            trigger:'blur'
        }
    ],
    password:[
        {
            require:true,
            message:'密码必填',
            trigger:'blur'
        },
        {
            pattern:/^[a-z0-9]{3,}$/,
            message:'用户名必须是3位以上的字母或数字',
            trigger:'blur'
        }
    ]
}