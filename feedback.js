

function switchEmoji(feeling){
    let smileIcon = document.getElementById("smile");

    if (feeling == "gut") {
        smileIcon.classList.remove("bi-emoji-frown-fill");
        smileIcon.classList.remove("bi-emoji-neutral-fill");

        smileIcon.classList.add("bi-emoji-heart-eyes");
        document.getElementById("antwort").innerHTML = "Thank you very much, that makes me happy!";
        document.getElementById("antwort").style.color = "green";
    }

    else if(feeling == "schlecht") {
        
        smileIcon.classList.remove("bi-emoji-heart-eyes");
        smileIcon.classList.remove("bi-emoji-neutral-fill");

        smileIcon.classList.add("bi-emoji-frown-fill");
        document.getElementById("antwort").innerHTML = "OH NOOO I`m sorry to hear that!!";
        document.getElementById("antwort").style.color = "red";

    }
}
