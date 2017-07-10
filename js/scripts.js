$(document).ready(function() {
  $("form").submit(function(event) {
    alert ("hello");
    var pet = $("input#pet").val();//this will take the input of pet and give a value
    var color = $("input#color").val();
    var place = $("input#place").val();
    var movie = $("input#movie").val();
    var favs = [pet, color, place, movie];//this will take all of our values and create an array
    alert(favs);
    var newFavs = [];
    newFavs.push(favs[2]);//this will select a specific index of our array and push it into a new order
    alert(newFavs);
    newFavs.push(favs[1]);
    newFavs.push(favs[0]);
    newFavs.push(favs[3]);
    alert(newFavs);
    $("span#first").text(newFavs[0]);//this will take the newly ordered array and display it in the html
    $("span#second").text(newFavs[1]);
    $("span#third").text(newFavs[2]);
    $("span#fourth").text(newFavs[3]);





    event.preventDefault();
  });
});
