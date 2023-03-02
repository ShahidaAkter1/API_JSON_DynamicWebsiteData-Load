function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
function displayComment(comments){
    const commentContainer=document.getElementById('comment-container')
    for(const comment of comments){
        const commentDiv=document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML=`
        <h2>ID: ${comment.id}</h2>
        <h2>Name: ${comment.name}</h2>
        <p>Email: ${comment.email}</p>
        <p>Body: ${comment.body}</p>    
        `;
        commentContainer.appendChild(commentDiv);
    }
}

loadComment();