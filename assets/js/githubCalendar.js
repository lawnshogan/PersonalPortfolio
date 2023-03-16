    GitHubCalendar(".calendar", "lawnshogan");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "lawnshogan", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "lawnshogan", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())
