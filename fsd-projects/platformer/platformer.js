$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300,575, 200, 20);
createPlatform(900, 575, 300, 30, "red");
createPlatform(500, 400, 100, 10, "lime");
createPlatform(650, 680, 100, 10, "maroon");
createPlatform(650, 500, 100, 10, "hotpink");



    // TODO 3 - Create Collectables

createCollectable("steve", 700, 50, .3, .9);
createCollectable("diamond", 400, 170, 0.5, 0.7);
createCollectable("max", 1150, 50, 1, 1);
createCollectable("kennedi", 550, 50, .8, 0);

    
    // TODO 4 - Create Cannons

createCannon("top", 900, 900);
createCannon("right", 300, 800);
createCannon("top", 500, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
