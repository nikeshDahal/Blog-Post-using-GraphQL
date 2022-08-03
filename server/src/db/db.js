const  user=[
    {
        id:'01',
        name:"Nikesh Dahal",
        email:"nikeshdahal297@gmail.com",
        age:23
    },
    {
        id:'02',
        name:"ram",
        email:"ram@gmail.com",
        age:25
    },
    {
        id:'03',
        name:"hari",
        email:"hari@gmail.com",
        age:26
    }
]

const  post =[
    {
        id:'010',
        title: 'Title one',
        body : 'this is the body of title one',
        published : true,
        author : "01"
    },
    {
        id:'011',
        title: 'Title two',
        body : 'this is the body of title two',
        published : true,
        author:"01"
    },
    {
        id:'012',
        title: 'Title three',
        body : 'this is the body of title three',
        published : true,
        author:"03"
    }
]

const  comment = [
    {
        id:"001",
        text:"this is first comment , hello there",
        post:"010",
        commentedBy:"01"
    },
    {
        id:"002",
        text:"this is second comment , graph ql basic",
        post:"011",
        commentedBy:"02"
    },
    {
        id:"003",
        text:"this is third comment , Rest Api",
        post:"011",
        commentedBy:"03"
    },

]

const db ={
    user,
    post,
    comment
}
export {db as default}