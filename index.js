async function fetchData() {
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();

        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await postsResponse.json();

        return {users, posts};
    } catch (error) {
        console.error('Error fetching data:', error);
        return {users: [], posts: []}; 
    }
}

async function displayData() {
    try {
        const {users, posts} = await fetchData();
        const usersContainer = document.getElementById('users');

        users.forEach((user, index) => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `<h2>${index + 1}. ${user.name}</h2><ol></ol>`;

            const todoList = userDiv.querySelector('ol');

            posts.forEach(todo => {
                if (todo.userId === user.id) {
                    const todoItem = document.createElement('li');
                    todoItem.innerHTML = `<span>${todo.title}</span>`;
                    if (todo.completed) {
                        todoItem.innerHTML += '<img src="complete_icon.png" alt="checked" class="check-icon">';
                        todoItem.style.textDecoration = 'line-through';
                    }
                    todoList.appendChild(todoItem);
                }
            });
            usersContainer.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error displaying data:', error);
    }
}

displayData();
