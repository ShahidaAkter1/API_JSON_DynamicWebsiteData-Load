const user={id:1, name: 'shahida', job:'student'};
console.log(user);//output:{ id: 1, name: 'shahida', job: 'student' }

//JavaScript Object Notation(JSON)
const stringfied= JSON.stringify(user);
console.log(stringfied);//output:{"id":1,"name":"shahida","job":"student"}

const shop={
    owner:'Shahida',
    address:{
        street:'kochuket',
        city:'mirpur',
        country:'BD'
    },
    products: ['laptop','mic','monitor','keybroad'],
    revenue:45000,
    isOpen: true,
    isNew:false
};
console.log(shop);

const shopJSON=JSON.stringify(shop);
console.log(shopJSON);

const shopObj=JSON.parse(shopJSON);
console.log(shopObj);
