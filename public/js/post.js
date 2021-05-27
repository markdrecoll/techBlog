var submitPostBtnEl = document.getElementById('submitPostBtn');

async function submitPost(event){
    console.log(event);
    event.preventDefault();
    var postTitleEl = document.getElementById('newPostTitle').value;
    var postTextAreaEl = document.getElementById('newPostTextArea').value;    

    await fetch('/api/posts/newpost', {
        method: "POST",
        body: JSON.stringify({
            title: postTitleEl, text: postTextAreaEl
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    document.location.replace("/");
}

submitPostBtnEl.addEventListener("submit", submitPost);