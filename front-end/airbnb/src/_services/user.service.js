import axios from 'axios';
import authHeader from '../_helpers/auth-header';
import AuthService from './authentication.service';

const API = 'http://localhost:8080/air-bnb/api';

class UserService {
  getListings() {
    return axios.get(API + '/listings');
  }

  getHostBoard() {
      return axios.get(API + '/host/listings', { headers: authHeader() });
    
  }

  getGuestBoard() {
    return axios.get(API + '/guests', { headers: authHeader() });
  }

  getUserById(id){
    return axios.get(API + '/admin/users' + {id}, { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API + '/admin', { headers: authHeader() });
  }


  postPhoto(imageFile) {
    AuthService.getCurrentUser()
    return axios.post(API + '/images/upload',
    imageFile, 
    {
      headers:{
        'content-type': 'multipart/form-data'
      }
    });
  }

  linkUserPhoto(imageFile, userId){
    const modifiedImage = {
      id: imageFile.id,
      name: imageFile.name,
      picByte: imageFile.picByte,
      type: imageFile.type,
      userId: userId,
      listingId: imageFile.listingId
    };

    modifiedImage.userId = userId;
    
    return axios.put( API + '/images/update',
    modifiedImage )
  }

  createListing(title,type,numOfBeds,numOfWc,numofRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host ) {
    return axios.post(API + '/host/listings', {
      title,type,numOfBeds,numOfWc,numofRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host
    }, { headers: authHeader() });
  }

}

export default new UserService();