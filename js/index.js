function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

// function displayUsers2(data){
//     for(const user of data){
//         // console.log(user);
//         // console.log(user.name);
//         // console.log(user.username);
//         console.log(user.email);
//     }
// }

function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li=document.createElement('li');
        // li.innerText= 'user';
        li.innerText= user.name;
        ul.appendChild(li);
    }
}