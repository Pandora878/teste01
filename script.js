window.onload = function() {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        let postContainer = document.getElementById("post");

        posts.forEach((post, index) => {});
            let div = document.createElement("div");
            div.innerHTML = '<h2>${post.titulo}<h2><p>${post.conteudo}</p>';
            postContainer.appendChild(div);
            };
        