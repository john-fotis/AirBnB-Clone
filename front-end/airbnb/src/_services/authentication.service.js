import axios from "axios";

const API = "http://localhost:8080/air-bnb/api";

class AuthService {
  async login(username, password) {
    const response = await axios
          .post(API + '/login', {
              username,
              password
          });
      if (response.data.accessToken) {
          localStorage.setItem("token", JSON.stringify(response.data));
      }
      return response.data;
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(username, email, password) {
    return axios.post(API + '/register', {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));;
  }
}

export default new AuthService();