GitHubCalendar(".calendar", "LawnShogan", {
  proxy: function(username) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://github.com/${LawnShogan}`)
  }
}).then(function(response) {
  return response.text();
}).then(function(html) {
  console.log(html);
}).catch(function(error) {
  console.error(error);
});
