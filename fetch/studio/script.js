//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        let container = document.getElementById("container");
        console.log(json);
  
        for (let astronaut of json) {
          const astronautHTML = `
            <div class="astronaut">
              <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li> Active: ${astronaut.active} </li>
                  <li> Skills: ${astronaut.skills}
                </ul>
              </div>
              <img class="avatar" src="${astronaut.picture}">
            </div>
          `;
          container.innerHTML += astronautHTML;
        }
      })
  
  });
