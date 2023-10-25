// Display the team name and city of the first 15 results, but exclude any team whose name begins with `c`.

// There will be a maximum of 15 results displayed if no teams' names begin with "C", and less than 15 displayed if there are teams whose names begin with "C".

const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";
const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        resultsContainer.innerHTML = "";

        for(let i=0; i<json.length; i++) {
            if (i === 15) {
                break;}

            if (json[i].teamName.startsWith("C") || json[i].teamName.startsWith("c") ){
                continue;
            }
            
            resultsContainer.innerHTML += `<div class="card">
                                            <h4>${json[i].teamName}</h4>
                                            <p>${json[i].location}</p>
                                            </div>`;
        
                                           
        }
        
    }
    catch (error){
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
}

makeApiCall();
