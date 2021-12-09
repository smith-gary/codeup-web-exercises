(function() {
    'use strict';

    //////  FUNCTION TO GET MOST RECENT COMMIT ///////

    function getLastCommitDate(username) {
        fetch(`https://api.github.com/users/${username}/events`, {
        headers: {
            'Authorization' : GITHUB_TOKEN,
            'Accept' : 'application/vnd.github.v3+json'
        }})
        .then(response => response.json()) //Converting the response to a JSON object
        // .then(data => console.log(data))
        .then(data => {
            let commits = [];
            for(let event of data) {
                if (event.type === 'PushEvent') {
                    commits.push(event.created_at);
                };
            }
            console.log(`Most recent commit was at: ${commits[0]}`);
        })
        .catch( error => console.error(error))
    };

    getLastCommitDate('smith-gary');

    //////  FUNCTION LEVERAGING PROMISES AND SET TIMEOUT ///////

    function wait(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num === 1000) {
                    resolve(`You'll see this after 1 second`);
                }
                else if (num === 3000) {
                    resolve(`You'll see this after 3 seconds`);
                } else {
                    reject(`rejected!`);
                }
            }, num)
        });
    }

    wait(1000).then(message => console.log(message));
    wait(3000).then(message => console.log(message));
    wait(5000).catch(message => console.log(message));

})();