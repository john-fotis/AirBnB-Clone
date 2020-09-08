import axios from 'axios';
import authHeader from '../_helpers/auth-header';

const API = 'http://localhost:8080/air-bnb/api';

class UserService {
  getListings() {
    return axios.get(API + '/listings');
  }

  getHostBoard() {
    return axios.get(API + '/users', { headers: authHeader() });
  }

  getGuestBoard() {
    return axios.get(API + '/guests', { headers: authHeader() });
  }

  getUserById(id){
    return axios.get(API + '/admin/' + {id}, { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API + '/admin', { headers: authHeader() });
  }
}

export default new UserService();