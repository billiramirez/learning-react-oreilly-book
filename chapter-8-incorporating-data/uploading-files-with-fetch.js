const formData = new FormData();
formData.append("username", "moontahoe");
formData.append("fullname", "Alex Banks");
formData.append("avatar", imgFile);

fetch("/create/user", {
  method: "POST",
  body: formData,
});
