const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const ulEl = document.getElementById('post-list')

posts.forEach((post,index) => {
    let postHTML = `<div class="post-header">
                        <img class="avatar-img post-avatar round" src="${post.avatar}" alt="user image">
                        <div class="post-header-description">
                            <h3 class="post-name">${post.name}</h3>
                            <h5 class="post-location">${post.location}</h5>
                        </div>
                    </div>
                    <img id="post-post-${index}" class="post-post" src="${post.post}" alt="user image">
                    <div class="post-footer">
                        <div class="post-buttons">
                            <img id="post-heart-${index}" class="post-heart" src="images/icon-heart.png" alt="user image">
                            <img id="post-comment-${index}" class="post-comment" src="images/icon-comment.png" alt="user image">
                            <img id="post-dm-${index}" class="post-dm" src="images/icon-dm.png" alt="user image">
                        </div>
                        <p class="post-like"><span id="post-like-${index}">${post.likes}</span> Likes</p>
                        <p class="post-description"><span>${post.username}</span> ${post.comment}</p>
                    </div>`
    let postDiv = document.createElement('div')
        postDiv.setAttribute('class', 'post')
        postDiv.setAttribute('id', `post-${index}`)
        postDiv.innerHTML = postHTML
    ulEl.appendChild(postDiv)

    const likeBtnEl = document.getElementById(`post-heart-${index}`)
    const postPostEl = document.getElementById(`post-post-${index}`)
    let likeSpanEl = document.getElementById(`post-like-${index}`)
    likeBtnEl.addEventListener('click', () => {
        likeSpanEl.textContent = Number(likeSpanEl.innerText) + 1
    })
    postPostEl.addEventListener('dblclick', () => {
        likeSpanEl.textContent = Number(likeSpanEl.innerText) + 1
    })
})



