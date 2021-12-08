(function() {
'use strict';

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let threeLangs = users.filter(language =>  {
        return language.languages.length >= 3;
    })
        console.log(threeLangs);

    let emails = users.map(addresses => addresses.email);
        console.log(emails)

    const avgExperience = users.reduce((total, person) => {
       let totalExp = total + person.yearsOfExperience;
       return totalExp;

    }, 0);
        console.log(avgExperience);
        console.log(avgExperience / users.length);

    const longestEmail = users.reduce((startLength, addLetter) => startLength.email.length > addLetter.email.length ? startLength : addLetter);
    console.log(longestEmail);

    const userList = users.reduce((startStr, addNames) => `${startStr} ${addNames.name},`, '');
    console.log(`User name list is as follows: ${userList}`);

    const uniLang = users.reduce((acc, lang) => {
         const flatArr = acc.concat(lang.languages);
         let uniArr = Array.from(new Set(flatArr));
         return uniArr;
    }, []);
    console.log(uniLang);

})();