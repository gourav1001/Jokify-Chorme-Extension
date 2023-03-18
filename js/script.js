// using the https://icanhazdadjoke.com/api to fecth jokes as slack message
fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(apiJokeData => {
        // fecthing the random joke text from json data apiJokeData
        randomJokeText = apiJokeData.attachments[0]["text"];
        // fetching the joke text paragraph element
        const jokeElement = document.getElementById("jokeText");
        // manipulating the dom and inserting the joke
        jokeElement.innerHTML = randomJokeText;
    });