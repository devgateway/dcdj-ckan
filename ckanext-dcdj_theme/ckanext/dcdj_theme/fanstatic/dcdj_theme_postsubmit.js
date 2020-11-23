$(function() {
  var previous_url = document.referrer;
  if (previous_url.indexOf("/dataset/new_resource") > -1) {
    if (confirm("Your dataset has been successfully entered, thank you for using this platform! Press Ok to add a new dataset, or cancel to continue.")) {
      window.location = "/dataset/new";
    }
  }
});
