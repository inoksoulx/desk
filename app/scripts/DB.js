class DB {
  constructor(users){
    this.users = {
      info: [
        {
          email: 'inok@gmail.com',
          password: '12345678'
        },
        {
          email: 'adam@gmail.com',
          password: '12345678'
        },
        {
          email: 'jack@gmail.com',
          password: '12345678'
        },
        {
          email: 'admin@gmail.com',
          password: '12345678'
        }
      ]
    }
  }

  setUser(nUser){
    let usersList = JSON.parse(localStorage.database);

    usersList.info.push(nUser);
    localStorage.setItem('database', JSON.stringify(usersList));
  }

  getUser(email, pass){
    let existUsers = JSON.parse(localStorage.database);

    if (existUsers.info.some(elem => elem.email === email)) {
      return true;
    } else if (existUsers.info.some(elem => elem.email === email && elem.password === pass)) {
      alert('yes');
      return true;
    } else {
      return false
    }
  }

  deleteUser(){

  }

  defaultUsers() {
    localStorage.setItem('database', JSON.stringify(this.users))
  }
}

const base = new DB();
