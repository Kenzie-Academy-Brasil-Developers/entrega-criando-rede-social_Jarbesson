function handlleModaL (posts){

    let button = document.querySelectorAll(".abrir__post");
    let obj = {}

    for(let i = 0; i <button.length; i++){
        let btn = button[i]
        btn.addEventListener('click',(e) => {
          for(let postId = 0; postId< posts.length; postId++){
            if(button[i].id == posts[postId].id){
                obj = posts[postId];
                creatModal(obj);
            }
          }
        })
    }
}

function creatModal(obj){
    const modalPost =document.querySelector(".modalPost");
    modalPost.innerHTML = " "

    const divFist = document.createElement('div');
    const divPost = document.createElement('div');
    const imgPost = document.createElement('img');
    const divItem = document.createElement('div');
    const titleName = document.createElement('h2');
    const paragraphProfile =document.createElement('p');
    const titlePost = document.createElement('h2');
    const paragraphPost = document.createElement('p');
    const closeX = document.createElement('div');

    closeX.innerText = "X"
    closeX.classList.add("closeModal");
    closeX.addEventListener('click',() =>{
      modalPost.close()
      // console.log("teste")
    })
    divFist.classList.add('divFist');


    divPost.classList.add('div__container');

    imgPost.classList.add('item__image');
    imgPost.src = obj.img

    divItem.classList.add('div__item');

    titleName.classList.add('name__user');
    titleName.innerText = obj.user

    paragraphProfile.classList.add('text__profile');
    paragraphProfile.innerText = obj.stack

    titlePost.classList.add('title__post-listagem');
    titlePost.innerText = obj.title;

    paragraphPost.classList.add('text__post-listagem');
    paragraphPost.innerText = obj.text;

    divPost.appendChild(imgPost);
    divPost.appendChild(divItem);

  
    divItem.appendChild(titleName);
    divItem.appendChild(paragraphProfile);

    divFist.appendChild(divPost);
    divFist.appendChild(titlePost);
    divFist.appendChild(paragraphPost);

    modalPost.appendChild(divFist);
    modalPost.appendChild(closeX);

    modalPost.showModal();
}

handlleModaL(posts);

