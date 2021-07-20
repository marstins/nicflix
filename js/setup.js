
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const movies = {
    'nic-cage': {
        title: "Nicolas Cage",
        description: "Nicolas Cage is one of the best actors ever, that is not up to debate. However, his movies vary from really really bad to really really good. Here you can find just a few of those movies, and enjoy some good ol' Nic Cage entertainment.",
        cover: "img/covers/nic-cage.jpg"
    },
    'city-of-angels': {
        title: "City of Angels",
        description: "When guardian angel Seth -- who invisibly watches over the citizens of Los Angeles -- becomes captivated by Maggie.",
        info: "https://www.themoviedb.org/movie/795-city-of-angels?language=en",
        watch: "https://www.justwatch.com/us/movie/city-of-angels",
        cover: "img/covers/cover1.jpg"
    },
    'the-rock': {
        title: "The Rock",
        description: "A group of renegade marine commandos seizes a stockpile of chemical weapons and takes over Alcatraz, with 81 tourists as hostages.",
        info: "https://www.themoviedb.org/movie/9802-the-rock?language=en",
        watch: "https://www.justwatch.com/us/movie/the-rock",
        cover: "img/covers/cover2.jpg"
    },
    'lord-of-war': {
        title: "Lord of War",
        description: "Yuri Orlov is a globetrotting arms dealer. Through some of the deadliest war zones, Yuri struggles to stay one step ahead of a relentless Interpol agent.",
        info: "https://www.themoviedb.org/movie/1830-lord-of-war?language=en",
        watch: "https://www.justwatch.com/us/movie/lord-of-war",
        cover: "img/covers/cover3.jpg"
    },
    'spider-man': {
        title: "Spider-Man: Into The Spider-Verse",
        description: "Miles Morales is juggling his life between being a high school student and being a spider-man.",
        info: "https://www.themoviedb.org/movie/324857-spider-man-into-the-spider-verse?language=en",
        watch: "https://www.justwatch.com/us/movie/spider-man-into-the-spider-verse",
        cover: "img/covers/cover4.jpg"
    },
    'kick-ass': {
        title: "Kick-Ass",
        description: "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a super-hero, even though he has no powers, training or meaningful reason to do so.",
        info: "https://www.themoviedb.org/movie/23483-kick-ass?language=en",
        watch: "https://www.justwatch.com/us/movie/kick-ass",
        cover: "img/covers/cover5.jpg"
    },
    'face-off': {
        title: "Face/Off",
        description: "Sean Archer, a very tough, rugged FBI Agent. Who is still grieving for his dead son Michael. Archer believes that his son's killer is his sworn enemy, a very powerful criminal, Castor Troy.",
        info: "https://www.themoviedb.org/movie/754-face-off?language=en",
        watch: "https://www.justwatch.com/us/movie/face-off",
        cover: "img/covers/cover6.jpg"
    },
    'adaptation': {
        title: "Adaptation. ",
        description: "Nicolas Cage is Charlie Kaufman, a confused L.A. screenwriter overwhelmed by feelings of inadequacy, sexual frustration, self-loathing, and by the screenwriting ambitions of his freeloading twin brother Donald.",
        info: "https://www.themoviedb.org/movie/2757-adaptation?language=en",
        watch: "https://www.justwatch.com/us/movie/adaptation",
        cover: "img/covers/cover7.jpg"
    },
    'the-family-man': {
        title: "The Family Man",
        description: "Jack's lavish, fast-paced lifestyle changes one Christmas night when he stumbles into a grocery store holdup and disarms the gunman.",
        info: "https://www.themoviedb.org/movie/5994-the-family-man?language=en",
        watch: "https://www.justwatch.com/us/movie/the-family-man",
        cover: "img/covers/cover8.jpg"
    },
    'national-treasure': {
        title: "National Treasure",
        description: "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War.",
        info: "https://www.themoviedb.org/movie/2059-national-treasure?language=en",
        watch: "https://www.justwatch.com/us/movie/national-treasure",
        cover: "img/covers/cover9.jpg"
    },
    'matchstick-men': {
        title: "Matchstick Men",
        description: "A phobic con artist and his protege are on the verge of pulling off a lucrative swindle when the con artist's teenage daughter arrives unexpectedly.",
        info: "https://www.themoviedb.org/movie/7270-matchstick-men?language=en",
        watch: "https://www.justwatch.com/us/movie/matchstick-men",
        cover: "img/covers/cover10.jpg"
    },
    'teen-titans': {
        title: "Teen Titans Go! To The Movies",
        description: "All the major DC superheroes are starring in their own films, all but the Teen Titans, so Robin is determined to remedy this situation by getting over his role as a sidekick and becoming a movie star.",
        info: "https://www.themoviedb.org/movie/474395-teen-titans-go-to-the-movies?language=en",
        watch: "https://www.justwatch.com/us/movie/teen-titans-go-to-the-movies",
        cover: "img/covers/cover11.jpg"
    },
    'red-rock-west': {
        title: "Red Rock West",
        description: "When a promised job for Texan Michael fails to materialise in Wyoming, Mike is mistaken by Wayne to be the hitman he hired to kill his unfaithful wife, Suzanne.",
        info: "https://www.themoviedb.org/movie/10427-red-rock-west?language=en",
        watch: "https://www.justwatch.com/us/movie/red-rock-west",
        cover: "img/covers/cover12.jpg"
    },
    'con-air': {
        title: "Con Air",
        description: "When the government puts all its rotten criminal eggs in one airborne basket, it's asking for trouble.",
        info: "https://www.themoviedb.org/movie/1701-con-air?language=en",
        watch: "https://www.justwatch.com/us/movie/con-air",
        cover: "img/covers/cover13.jpg"
    },
    'left-behind': {
        title: "Left Behind",
        description: "A small group of survivors are left behind after millions of people suddenly vanish during the rapture and the world is plunged into chaos and destruction.",
        info: "https://www.themoviedb.org/movie/218043-left-behind?language=en",
        watch: "https://www.justwatch.com/us/movie/left-behind",
        cover: "img/covers/cover14.jpg"
    },
    'arsenal': {
        title: "Arsenal",
        description: "After the deadbeat brother of a businessman is assumed to be in on his own kidnapping, his sibling must take action to rescue him.",
        info: "https://www.themoviedb.org/movie/388202-philly-fury?language=en",
        watch: "https://www.justwatch.com/us/movie/arsenal-2017",
        cover: "img/covers/cover15.jpg"
    },
    'deadfall': {
        title: "Deadfall",
        description: "After he accidentally kills his father, Mike, during a sting, Joe tries to carry out Mike's dying wish by recovering valuables that Mike's twin brother Lou stole from him years earlier.",
        info: "https://www.themoviedb.org/movie/33927-deadfall?language=en",
        watch: "https://www.justwatch.com/us/movie/deadfall ",
        cover: "img/covers/cover16.jpg"
    },
    'zandalee': {
        title: "Zandalee",
        description: "Bored with her marriage to burnt out poet turned corporate executive Thierry, Zandalee falls prey to an old friend of her husband, the manipulative and egotistical Johhny and becomes enmeshed in a sensual, passionate and destructive affair.",
        info: "https://www.themoviedb.org/movie/36630-zandalee?language=en",
        watch: "https://www.justwatch.com/us/movie/zandalee",
        cover: "img/covers/cover17.jpg"
    },
    'ghost-rider': {
        title: "Ghost Rider",
        description: "In order to save his dying father, young stunt cyclist Johnny Blaze sells his soul to Mephistopheles and sadly parts from the pure-hearted Roxanne Simpson, the love of his life.",
        info: "https://www.themoviedb.org/movie/1250-ghost-rider?language=en",
        watch: "https://www.justwatch.com/us/movie/ghost-rider-extended-cut",
        cover: "img/covers/cover18.jpg"
    },
    '211': {
        title: "211",
        description: "Inspired by one of the longest and bloodiest real-life events in police history, Officer Mike Chandler and a young civilian passenger find themselves under-prepared and outgunned when fate puts them squarely in the crosshairs of a daring bank heist.",
        info: "https://www.themoviedb.org/movie/500919-211?language=en",
        watch: "https://www.justwatch.com/us/movie/211",
        cover: "img/covers/cover19.jpg"
    },
    'the-wicker-man': {
        title: "The Wicker Man",
        description: "A sheriff investigating the disappearance of a young girl from a small island discovers there's a larger mystery to solve among the island's secretive, neo-pagan community.",
        info: "https://www.themoviedb.org/movie/9708-the-wicker-man?language=en",
        watch: "https://www.justwatch.com/us/movie/the-wicker-man-2006",
        cover: "img/covers/cover20.jpg"
    }
};

function movieChanger(key) {
    const movieData = movies[key];
    document.querySelector(".main-movie").style.backgroundImage = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)100%), url(${movieData.cover})`;
    document.querySelector(".title").innerHTML = movieData.title;
    document.querySelector(".description").innerHTML = movieData.description;
    document.getElementById("play-button").setAttribute("href", movieData.watch); 
    document.getElementById("info-button").setAttribute("href", movieData.info);
        
    function show(){
        const playButton = document.getElementById("play-button");
        const infoButton = document.getElementById("info-button");
        if (key != 'nic-cage') {
            playButton.style.display = 'inline-block';
            infoButton.style.display = 'inline-block';
        } else if (key == 'nic-cage') {
            playButton.style.display = 'none';
            infoButton.style.display = 'none';
        }
    }
    show();  
}