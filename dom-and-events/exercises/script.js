function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });

missionAbort.addEventListener("mouseenter", function() {
  missionAbort.style.backgroundColor = "red";
});
missionAbort.addEventListener("mouseleave", function() {
  missionAbort.style.backgroundColor = "";
});

     missionAbort.addEventListener("click", function() {
        const confirmAbort = confirm("Are you sure you want to abort the mission?");
      
        if (confirmAbort) {
          statusReport.textContent = "Mission aborted! Space shuttle returning home.";
        }
});
};

window.addEventListener("load", init);
