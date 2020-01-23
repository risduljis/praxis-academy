fetch('/js/users.json')
    .then(response => {
        // handle response data
    })
    .catch(err => {
        // handle errors
    });

    //Fetch API uses GET method

    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => {
        res.data.map(user => {
            console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
        });
    });

    //Fetch API uses POST method

    const user = {
        first_name: 'John',
        last_name: 'Lilly',
        job_title: 'Software Engineer'
    };
    
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    fetch('https://reqres.in/api/users', options)
        .then(res => res.json())
        .then(res => console.log(res));

    // DELETE Request

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    fetch('https://reqres.in/api/users/2', options)
        .then(res => {
            if (res.ok) {
                return Promise.resolve('User deleted.');
            } else {
                return Promise.reject('An error occurred.');
            }
        })
        .then(res => console.log(res));


    // ERROR Handling

    fetch('https://reqres.in/api/users/22') // 404 Error
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res.status);
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(`Error with message: ${err}`));

    // Responsive Object

    fetch('https://reqres.in/api/users')
    .then(res => {
        console.log(res.headers.get('content-type'));
        console.log(res.headers.get('expires'));

        console.log(res.status);
        console.log(res.ok); // shorthand for `status` between 200 and 299
        console.log(res.statusText);
        console.log(res.redirected);
        console.log(res.type);
        console.log(res.url);
    });

    // Fetch & Async/await

    const fetchUsers = async () => {
        try {
            const res = await fetch('https://reqres.in/api/users');
            if (!res.ok) {
                throw new Error(res.status);
            }
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    fetchUsers();


