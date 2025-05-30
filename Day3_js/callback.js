function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: "jay", email: "jay@test.com" },
      { username: "joy", email: "joy@test.com" },
    ]);
  }, 1000);
}

function findUser(username) {
  

  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    console.log(user);
  });
}

findUser("jay");
