const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"username-email-address",
        name:"userNameOrEmail",
        type:"text",
        autoComplete:"email",
        isRequired:true,
        placeholder:"UserName or Email"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"pass",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"userName",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

export {loginFields,signupFields}