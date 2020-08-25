fetch("/create/user", {
  method: "POST",
  body: JSON.stringify({ username, password, bio }),
});
