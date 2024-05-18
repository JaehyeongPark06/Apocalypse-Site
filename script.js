// if image is clicked, increment likes by 1.
document.getElementById("barati-img").addEventListener("click", function () {
  var likes = document.getElementById("barati-likes").innerHTML;
  likes++;
  // cool animation if liked -> change border to red for 1 second
  document.getElementById("barati-img").style.border = "5px solid red";
  setTimeout(function () {
    document.getElementById("barati-img").style.border = "5px solid black";
  }, 500);
  // update likes
  document.getElementById("barati-likes").innerHTML = likes;
  if (likes % 10 === 0) {
    // make back ground color of body green for 2 seconds
    document.body.style.backgroundColor = "green";
    setTimeout(function () {
      document.body.style.backgroundColor = "white";
    }, 2000);
  }
});
