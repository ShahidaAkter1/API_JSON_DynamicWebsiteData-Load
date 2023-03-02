function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))

}
/**
 1.get the container element where you want to add the new elements
 2.creat child element
 3.set innerText or innerHTML
 4.appendChild
 */

function displayPosts(posts){
    const postsContainer= document.getElementById('posts-container');
    for(const post of posts){
    //    console.log(post);
    const postDiv=document.createElement('div');
    postDiv.classList.add('post');
    console.log(post);
    postDiv.innerHTML = `
     <h5>User-${post.userId}</h5>
     <h5>Post: ${post.title}</h5>
     <p>Post Description: ${post.body}</p>
    `;
    postsContainer.appendChild(postDiv);
    }
}

loadPosts();