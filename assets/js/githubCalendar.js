GitHubCalendar(".calendar", "LawnShogan", {
  proxy: function(username) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/events/public`)
  }
}).then(function(response) {
  return response.json();
}).then(function(events) {
  console.log(events);
}).catch(function(error) {
  console.error(error);
});
