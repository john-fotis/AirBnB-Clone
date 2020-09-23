import axios from "axios";
import {API} from '../config/config.utils';

class AuthService {
  async login(username, password) {
    const response = await axios
          .post(API + '/login', {
              username,
              password
          });
      if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
  }

  logout() {
    localStorage.removeItem("user");
    axios.post(API + '/logout')
  }

  register(username, email, password, firstName, lastName, host, tenant, number) {
    var roles = [];

    if (host & !tenant){
      roles = [{"id": 2}]
    } else if (!host & tenant){
      roles = [{"id": 3}]
    } else {
      roles = [{"id":2}, {"id":3}]
    }

    return axios.post(API + '/register', {
      username,
      email,
      password,
      firstName,
      lastName,
      roles,
      number
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();