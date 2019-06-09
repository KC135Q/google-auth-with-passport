$("#submit").on("click", function(event) {
  event.preventDefault();

  var username = $("#username")
    .val()
    .trim();
  var password = $("#password")
    .val()
    .trim();

  console.log(username + " logging in with password of " + password);
});
