GitHubCalendar(".calendar", "LawnShogan", {
  proxy: function(username) {
    return fetch(`https://thingproxy.freeboard.io/fetch/https://api.github.com/users/${username}/events/public`)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(function(error) {
        console.error('Error fetching GitHub events:', error);
      });
  }
}).then(function(events) {
  console.log(events);
}).catch(function(error) {
  console.error(error);
});
