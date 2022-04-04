const Axios = require('axios')

Axios.post('http://3.36.88.174:8000/login', {email:"aa", passWord:'aa'}).then((result) => console.log(result))
