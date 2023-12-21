

function switchEmoji(feeling){
    let smileIcon = document.getElementById("smile");

    if (feeling == "gut") {
        smileIcon.classList.remove("bi-emoji-frown-fill");
        smileIcon.classList.remove("bi-emoji-neutral-fill");

        smileIcon.classList.add("bi-emoji-smile-fill");
    }

    else if(feeling == "schlecht") {
        
        smileIcon.classList.remove("bi-emoji-smile-fill");
        smileIcon.classList.remove("bi-emoji-neutral-fill");

        smileIcon.classList.add("bi-emoji-frown-fill");
    }
}
