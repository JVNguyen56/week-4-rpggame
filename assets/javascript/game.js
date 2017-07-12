	var p1Bank = [
    "assets/images/pikachu2.gif", 
    "assets/images/squirtle2.gif", 
    "assets/images/charmander2.gif", 
    "assets/images/bulbasaur2.gif", 
    "assets/images/caterpie.gif",
    "assets/images/sandshrew2.gif"];

    //setting the DOM 
    function pokePick(name,healthPoint,hitPoint,battlePoints){
        this.pokeName = name;
        this.pokeHealthPoint = healthPoint;
        this.pokeHitPoint = hitPoint;
        this.pokeBattlePoints = battlePoints;
    }
    //assigning variables
    var pikachu = new pokePick(p1Bank[0],125, 5, [3,4,6,7,8]);
    var squirtle = new pokePick(p1Bank[1],160, 2, [1,1,2,3,4,4,5,6]);
    var charmander = new pokePick(p1Bank[2],150, 7, [0,1,2,3,4,8,10]);
    var bulbasaur = new pokePick(p1Bank[3], 200, 1, [4,5,6]);
    var caterpie = new pokePick(p1Bank[4],120, 4, [2,2,3,3,4,7,12]);
    var sandshrew = new pokePick(p1Bank[5],175, 3, [3,4,5,6,7,8,9]);
    //setting the players on bench
    var player1Char = 3;
    var player2Char = 3;

  var player1;
  var player2;
  //setting the battlefield 
 $("#attack").on("click", function(){
    player1.pokeHitPoint += player1.pokeBattlePoints[Math.floor(Math.random() * player1.pokeBattlePoints.length)];
    player2.pokeHitPoint += player2.pokeBattlePoints[Math.floor(Math.random() * player2.pokeBattlePoints.length)];
    player1.pokeHealthPoint -= player2.pokeHitPoint;
    player2.pokeHealthPoint -= player1.pokeHitPoint;


    //showing health and hit points to html
   document.getElementById('p1CharHealth').innerHTML = player1.pokeHealthPoint;
    document.getElementById('p2CharHealth').innerHTML = player2.pokeHealthPoint;
    document.getElementById('p1CharHit').innerHTML = player1.pokeHitPoint;
    document.getElementById('p2CharHit').innerHTML = player2.pokeHitPoint;

    //setting loss values
    if (player1.pokeHealthPoint <= 0) {
      $('#legend1').empty();
      $('#p1Select').empty();
      player1.pokeBattlePoints = null;
      player1Char--;
      $("#1").removeClass("clear");
      $("#2").removeClass("clear");
      $("#3").removeClass("clear");
    //    //if (player2Char ===0 && player2.pokeBattlePoint === null){
    //     alert("Player 2 WON!!!!!!");
    // }

    }
    //setting win values
    if (player2.pokeHealthPoint <= 0) {
      $('#legend2').empty();
      $('#p2Select').empty();
      player2.pokeBattlePoints = null;
      player2Char--;
      $("#4").removeClass("clear");
      $("#5").removeClass("clear");
      $("#6").removeClass("clear");
    //    if (player1Char ===0 && player1.pokeBattlePoint === null){
    //     alert("Player 1 WON!!!!!!");
    // }

    }
    //setting reset values
    if (player1Char === 0 || player2Char === 0){
       $("#resetButton").empty();
      $("#resetButton").append("<p><button type='button' class='btn btn-default btn-lg'>Play Again?</button></p>");
       $("#resetButton").click(function() {
        location.reload();
        });
    }
   
   if (player1Char ===0 && player1.pokeBattlePoints === null){
        alert("Player 2 WON!!!!!");
    }

   if (player2Char ===0 && player2.pokeBattlePoints === null){
        alert("Player 1 WON!!!!!!");
    }

 });
 //click for each player on bench
  $(document).ready(function(){
    //player side
      $("#1").click(function(){
        player1 = pikachu;
        $("#p1Select").empty();
          $(this).hide();
          $("#p1Select").append("<img id='pokemon1Appear' src='" + pikachu.pokeName + "'>");
          $("#legend1").empty();
          $("#legend1").append("<h1>Health Points</h1>" + "<h3 id='p1CharHealth'>" + pikachu.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" +  "<h3 id='p1CharHit'>" + pikachu.pokeHitPoint + "</h3>");
          $("#2").addClass("clear");
          $("#3").addClass("clear");

      });

      $("#2").click(function(){
        player1 = squirtle;
        $("#p1Select").empty();
          $(this).hide();
          $("#p1Select").append("<img id='pokemon1Appear' src='" + squirtle.pokeName + "'>");
          $("#legend1").empty();
          $("#legend1").append("<h1>Health Points</h1>" +  "<h3 id='p1CharHealth'>" + squirtle.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p1CharHit'>" + squirtle.pokeHitPoint + "</h3>");
          $("#1").addClass("clear");
          $("#3").addClass("clear");
      });

      $("#3").click(function(){
        player1 = charmander;
        $("#p1Select").empty();
          $(this).hide();
          $("#p1Select").append("<img id='pokemon1Appear' src='" + charmander.pokeName + "'>");
          $("#legend1").empty();
          $("#legend1").append("<h1>Health Points</h1>" + "<h3 id='p1CharHealth'>" + charmander.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p1CharHit'>" + charmander.pokeHitPoint + "</3>");
          $("#1").addClass("clear");
          $("#2").addClass("clear");

      });

//enemy Side
      $("#4").click(function(){
        player2 = bulbasaur;
        $("#p2Select").empty();
          $(this).hide();
          $("#p2Select").append("<img id='pokemon2Appear' src='" + bulbasaur.pokeName + "'>");
          $("#legend2").empty();
          $("#legend2").append("<h1>Health Points</h1>" + "<h3 id='p2CharHealth'>" + bulbasaur.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p2CharHit'>" + bulbasaur.pokeHitPoint + "</h3>");
          $("#5").addClass("clear");
          $("#6").addClass("clear");

      });

      $("#5").click(function(){
          player2 = caterpie;
        $("#p2Select").empty();
          $(this).hide();
          $("#p2Select").append("<img id='pokemon2Appear' src='" + caterpie.pokeName + "'>");
          $("#legend2").empty();
          $("#legend2").append("<h1>Health Points</h1>" + "<h2 id='p2CharHealth'>" + caterpie.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p2CharHit'>" + caterpie.pokeHitPoint + "</h3>");
          $("#4").addClass("clear");
          $("#6").addClass("clear");
      });

      $("#6").click(function(){
         player2 = sandshrew;
        $("#p2Select").empty();
          $(this).hide();
          $("#p2Select").append("<img id='pokemon2Appear' src='" + sandshrew.pokeName + "'>");
          $("#legend2").empty();
          $("#legend2").append("<h1>Health Points</h1>" + "<h2 id='p2CharHealth'>" + sandshrew.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p2CharHit'>" + sandshrew.pokeHitPoint + "</h3>");
          $("#4").addClass("clear");
          $("#5").addClass("clear");
      });
    

  }); 
