GitHubCalendar(".calendar", "LawnShogan", {
  proxy: function(username) {
    console.log('Fetching events for username:', username);
    return fetch(`https://thingproxy.freeboard.io/fetch/https://api.github.com/users/${username}/events/public`)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(function(error) {
        console.error('Error fetching GitHub events:', error);
        throw error;
      });
  }
}).then(function(events) {
  console.log('Fetched events:', events);
}).catch(function(error) {
  console.error('Unhandled error:', error);
});
