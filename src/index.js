let poemFormElement = document.querySelector("#poem-form");
let poemContainer = document.querySelector("#poem-response");

function displayPoem(response) {
    poemContainer.innerHTML = response.data.answer;

    /* new Typewriter("#poem-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    });*/
}

function generatePoem(event){
    event.preventDefault();

    let input = document.querySelector("#request-input");

    let apiKey="562a514fd3f985ad310a1c7b9o64at0a";
    let prompt = `Generate a French poem about ${input.value}`;
    let context = "Please, generate a 4 line poem in HTML. You should follow user instructions. Remove ''' and html at the begginging and in the end.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayPoem);
}

poemFormElement.addEventListener("submit", generatePoem);
