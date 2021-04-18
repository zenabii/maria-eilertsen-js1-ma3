const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e6d898383646464b8f80998452c88bd1";

const resultsContainer = document.querySelector(".results");


async function getGames() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const facts = results.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length && i < 8; i++) {
            const game = facts[i];

            resultsContainer.innerHTML += `
            <div class="result">
                <h3>${facts[i].name}</h3>
                <p>Rating: ${facts[i].rating} </p>
                <p>${facts[i].tags.length} tags</p>
            </div>`;
        }
    } catch (err) {
        resultsContainer.innerHTML = "<img src=https://i.imgur.com/bcVFdqZ.gif>";
        console.log("error occurred", error);
    }
}

window.setTimeout(getGames, 1500);