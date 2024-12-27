const letters = {
    "a": document.querySelector(".letterA"),
    "s": document.querySelector(".letterS"),
    "d": document.querySelector(".letterD"),
    "f": document.querySelector(".letterF"),
    "g": document.querySelector(".letterG"),
    "h": document.querySelector(".letterH"),
    "j": document.querySelector(".letterJ"),
    "k": document.querySelector(".letterK"),
    "l": document.querySelector(".letterL")
};

const audioFiles = {
    "a": new Audio('audio/flock flock.mp3'),
    "s": new Audio('audio/saw.mp3'),
    "d": new Audio('audio/yah.mp3'),
    "f": new Audio('audio/what- yah.mp3'),
    "g": new Audio('audio/woo2.mp3'),
    "h": new Audio('audio/yeahaw.mp3'),
    "j": new Audio('audio/talk.mp3'),
    "k": new Audio('audio/shkrrrrt.mp3'),
    "l": new Audio('audio/bih.mp3')
};

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();  
    const USER_LETTER = letters[key];  
    const AUDIO = audioFiles[key];

    if (USER_LETTER && AUDIO) {
        USER_LETTER.classList.add("transform");
        // Only play audio if it is not already playing
        if (AUDIO.paused) {
            AUDIO.play();
        }
    }
});

document.addEventListener("keyup", function(event) {
    const key = event.key.toLowerCase();  
    const USER_LETTER = letters[key]; 
    const AUDIO = audioFiles[key]; 

    if (USER_LETTER && AUDIO) {
        USER_LETTER.classList.remove("transform");
        // Stop the audio when the key is released
        AUDIO.pause();
        AUDIO.currentTime = 0;
    }
});





 

document.addEventListener("touchstart", function(event) {

    const targetElement = event.target;


    if (targetElement && targetElement.classList.length > 0) {

        // Extract the key from the class name (assuming your classes are structured like "letterA", "letterS", etc.)
        const touchClass = targetElement.classList[0];
        const key = touchClass.slice(6).toLowerCase(); // Get the character after "letter"

        const USER_LETTER = letters[key];
        const AUDIO = audioFiles[key];

        if (USER_LETTER && AUDIO) {
            USER_LETTER.classList.add("transform");
            // Only play audio if it is not already playing
            if (AUDIO.paused) {
                AUDIO.play();
            }
        }
    } 
});
  


  document.addEventListener("touchend", function (event) {

    const targetElement = event.target;
   
        if (targetElement.classList.length > 1) {
            const key = targetElement.classList[0].charAt(6).toLowerCase(); // Extract the letter from the class
            const USER_LETTER = letters[key];
            const AUDIO = audioFiles[key];

        if (USER_LETTER && AUDIO) {
            USER_LETTER.classList.remove("transform");
            // Stop the audio when the key is released
            AUDIO.pause();
            AUDIO.currentTime = 0;
        }
    }

  });

