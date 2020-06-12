

$(document).ready(function() {
    generateContent();
    initializeClickListeners();
    
    document.getElementsByClassName("sortbtn")[0].addEventListener("click", function() {
        items.sort(compareItems);
        
        document.getElementById("content").innerHTML = "";
        
        generateContent();
        initializeClickListeners();
    });
        
});


function generateContent() {
    for (let i = 0; i < items.length; i++) {
        
        
        document.getElementById("content").innerHTML += `
        <div class="content">
            <div class="poster">
                <img src="${items[i].image}" alt="${items[i].title} Poster" max-width="500" max-height="750">
            </div>
            <div class="description">
                <div class="text">
                    <h3>${items[i].title}</h3>
                    <p>${items[i].description}</p>
                </div>
                <div class="like">
                    <div class="likeNr">${items[i].likes} likes</div>
                    <img src="media/like.png" alt="likeButton" width="60" height="60">
                </div>
            </div>
        </div>
        `;
    }
}

function initializeClickListeners() {
    let likes = document.querySelectorAll(`.like img`);
    likes.forEach((element, index) => {
        element.addEventListener("click", function() { 

            items[index].likes++;
            document.getElementsByClassName("likeNr")[index].innerText =
                items[index].likes + " likes";
        });
    });
}

function compareItems (first, second) {
    if (first.likes < second.likes) {
      return 1;
    }
    if (first.likes > second.likes) {
      return -1;
    }
    return 0;
}