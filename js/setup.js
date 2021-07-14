
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

const movies = [
    {
        id: 1,
        title: "City of Angels",
        description: "When guardian angel Seth -- who invisibly watches over the citizens of Los Angeles -- becomes captivated by Maggie.",
        info: "https://www.themoviedb.org/movie/795-city-of-angels?language=en",
        watch: "https://www.justwatch.com/us/movie/city-of-angels",
    },
    {
        id: 2,
        title: "The Rock",
        description: "A group of renegade marine commandos seizes a stockpile of chemical weapons and takes over Alcatraz, with 81 tourists as hostages.",
        info: "https://www.themoviedb.org/movie/9802-the-rock?language=en",
        watch: "https://www.justwatch.com/us/movie/the-rock",
    },
    {
        id: 3,
        title: "Lord of War",
        description: "Yuri Orlov is a globetrotting arms dealer. Through some of the deadliest war zones, Yuri struggles to stay one step ahead of a relentless Interpol agent.",
        info: "https://www.themoviedb.org/movie/1830-lord-of-war?language=en",
        watch: "https://www.justwatch.com/us/movie/lord-of-war",
    },
    {
        id: 4,
        title: "Spider-Man: Into The Spider-Verse",
        description: "Miles Morales is juggling his life between being a high school student and being a spider-man.",
        info: "https://www.themoviedb.org/movie/324857-spider-man-into-the-spider-verse?language=en",
        watch: "https://www.justwatch.com/us/movie/spider-man-into-the-spider-verse",
    },
    {
        id: 5,
        title: "Kick-Ass",
        description: "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a super-hero, even though he has no powers, training or meaningful reason to do so.",
        info: "https://www.themoviedb.org/movie/23483-kick-ass?language=en",
        watch: "https://www.justwatch.com/us/movie/kick-ass",
    },
    {
        id: 6,
        title: "Face/Off",
        description: "Sean Archer, a very tough, rugged FBI Agent. Who is still grieving for his dead son Michael. Archer believes that his son's killer is his sworn enemy, a very powerful criminal, Castor Troy.",
        info: "https://www.themoviedb.org/movie/754-face-off?language=en",
        watch: "https://www.justwatch.com/us/movie/face-off",
    },
    {
        id: 7,
        title: "Adaptation. ",
        description: "Nicolas Cage is Charlie Kaufman, a confused L.A. screenwriter overwhelmed by feelings of inadequacy, sexual frustration, self-loathing, and by the screenwriting ambitions of his freeloading twin brother Donald.",
        info: "https://www.themoviedb.org/movie/2757-adaptation?language=en",
        watch: "https://www.justwatch.com/us/movie/adaptation",
    },
    {
        id: 8,
        title: "The Family Man",
        description: "Jack's lavish, fast-paced lifestyle changes one Christmas night when he stumbles into a grocery store holdup and disarms the gunman.",
        info: "https://www.themoviedb.org/movie/5994-the-family-man?language=en",
        watch: "https://www.justwatch.com/us/movie/the-family-man",
    },
    {
        id: 9,
        title: "National Treasure",
        description: "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War.",
        info: "https://www.themoviedb.org/movie/2059-national-treasure?language=en",
        watch: "https://www.justwatch.com/us/movie/national-treasure",
    },
    {
        id: 10,
        title: "Matchstick Men",
        description: "A phobic con artist and his protege are on the verge of pulling off a lucrative swindle when the con artist's teenage daughter arrives unexpectedly.",
        info: "https://www.themoviedb.org/movie/7270-matchstick-men?language=en",
        watch: "https://www.justwatch.com/us/movie/matchstick-men",
    },
    {
        id: 11,
        title: "Teen Titans Go! To The Movies",
        description: "All the major DC superheroes are starring in their own films, all but the Teen Titans, so Robin is determined to remedy this situation by getting over his role as a sidekick and becoming a movie star.",
        info: "https://www.themoviedb.org/movie/474395-teen-titans-go-to-the-movies?language=en",
        watch: "https://www.justwatch.com/us/movie/teen-titans-go-to-the-movies",
    },
    {
        id: 12,
        title: "Red Rock West",
        description: "When a promised job for Texan Michael fails to materialise in Wyoming, Mike is mistaken by Wayne to be the hitman he hired to kill his unfaithful wife, Suzanne.",
        info: "https://www.themoviedb.org/movie/10427-red-rock-west?language=en",
        watch: "https://www.justwatch.com/us/movie/red-rock-west",
    },
    {
        id: 13,
        title: "Con Air",
        description: "When the government puts all its rotten criminal eggs in one airborne basket, it's asking for trouble.",
        info: "https://www.themoviedb.org/movie/1701-con-air?language=en",
        watch: "https://www.justwatch.com/us/movie/con-air",
    },
    {
        id: 14,
        title: "Left Behind",
        description: "A small group of survivors are left behind after millions of people suddenly vanish during the rapture and the world is plunged into chaos and destruction.",
        info: "https://www.themoviedb.org/movie/218043-left-behind?language=en",
        watch: "https://www.justwatch.com/us/movie/left-behind",
    },
    {
        id: 15,
        title: "Arsenal",
        description: "After the deadbeat brother of a businessman is assumed to be in on his own kidnapping, his sibling must take action to rescue him.",
        info: "https://www.themoviedb.org/movie/388202-philly-fury?language=en",
        watch: "https://www.justwatch.com/us/movie/arsenal-2017",
    },
    {
        id: 16,
        title: "Deadfall",
        description: "After he accidentally kills his father, Mike, during a sting, Joe tries to carry out Mike's dying wish by recovering valuables that Mike's twin brother Lou stole from him years earlier.",
        info: "https://www.themoviedb.org/movie/33927-deadfall?language=en",
        watch: "https://www.justwatch.com/us/movie/deadfall ",
    },
    {
        id: 17,
        title: "Zandalee",
        description: "Bored with her marriage to burnt out poet turned corporate executive Thierry, Zandalee falls prey to an old friend of her husband, the manipulative and egotistical Johhny and becomes enmeshed in a sensual, passionate and destructive affair.",
        info: "https://www.themoviedb.org/movie/36630-zandalee?language=en",
        watch: "https://www.justwatch.com/us/movie/zandalee",
    },
    {
        id: 18,
        title: "Ghost Rider",
        description: "In order to save his dying father, young stunt cyclist Johnny Blaze sells his soul to Mephistopheles and sadly parts from the pure-hearted Roxanne Simpson, the love of his life.",
        info: "https://www.themoviedb.org/movie/1250-ghost-rider?language=en",
        watch: "https://www.justwatch.com/us/movie/ghost-rider-extended-cut",
    },
    {
        id: 19,
        title: "211",
        description: "Inspired by one of the longest and bloodiest real-life events in police history, Officer Mike Chandler and a young civilian passenger find themselves under-prepared and outgunned when fate puts them squarely in the crosshairs of a daring bank heist.",
        info: "https://www.themoviedb.org/movie/500919-211?language=en",
        watch: "https://www.justwatch.com/us/movie/211",
    },
    {
        id: 20,
        title: "The Wicker Man",
        description: "A sheriff investigating the disappearance of a young girl from a small island discovers there's a larger mystery to solve among the island's secretive, neo-pagan community.",
        info: "https://www.themoviedb.org/movie/9708-the-wicker-man?language=en",
        watch: "https://www.justwatch.com/us/movie/the-wicker-man-2006",
    }
];

function movieChanger(poster) {
    document.querySelector(".main-movie").style.backgroundImage = 'url(img/covers/cover' + poster + '.jpg)';
    for (let i = 0; i < movies.length; i++){
        if (poster === movies[i].id) {
            document.querySelector(".title").innerHTML = movies[i].title;
            document.querySelector(".description").innerHTML = movies[i].description;
        }
    }
}

function moreInfo() {
    var seriesInfo = "";
    let seriesTitle = document.querySelector(".title").innerHTML;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title == seriesTitle) {
            seriesInfo = movies[i].info;
        }   
    }
    window.open(seriesInfo);
}

function play() {
    var seriesPlay = "";
    let seriesTitle = document.querySelector(".title").innerHTML;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title == seriesTitle) {
            seriesPlay = movies[i].watch;
        }   
    }
    window.open(seriesPlay); 
}