import axios from 'axios';
import authHeader from '../_helpers/auth-header';
import AuthService from './authentication.service';

const API = 'http://localhost:8080/air-bnb/api';

class UserService {
  async getAdminListings() {
    const result = await axios.get(API + '/admin/listings', {headers: authHeader() });
    return result;
  }

  async getCurrentListing (listingId) {
    const result = await axios.get(API + '/listings/' + listingId, {headers: authHeader() });
    return result;
  }

  async getHostBoard() {
    const result = await axios.get(API + '/host/listings', { headers: authHeader() });
    return result;
  }

  async getGuestBoard() {
    const result = await axios.get(API + '/guest/reviews', { headers: authHeader() });
    return result;
  }

  async getUserById(id){
    const result = await axios.get(API + `/admin/users/${id}`, { headers: authHeader() });
    return result.data;
  }

  getAdminBoard() {
    return axios.get(API + '/admin', { headers: authHeader() });
  }

  async getAdminUsers() {
    const result = await axios.get(API + '/admin/users', {headers: authHeader() });
    return result;
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

    return axios.put( API + '/images/update',
    modifiedImage, {headers: authHeader()} )
  }

  createListing(title,type,numOfBeds,numOfWc,numofRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host ) {
    console.log(postalCode)
    return axios.post(API + '/host/listings', {
      title,type,numOfBeds,numOfWc,numofRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host
    }, { headers: authHeader() });
  }

  linkListingPhoto(imageFile, listingId){
    const modifiedImage = {
      id: imageFile.id,
      name: imageFile.name,
      picByte: imageFile.picByte,
      type: imageFile.type,
      userId: imageFile.userId,
      listingId: listingId
    };
    
    return axios.put( API + '/images/update',
    modifiedImage, {headers: authHeader()} )
  }

  searchListings(numOfBeds,numOfWc,numofRooms,smoking,animals,parties,maxGuests,latitude,longitude,country,city,neighborhood,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate){
    return axios.put(API + '/listings',
    {startDate, endDate, maxGuests, country, city}, {headers: authHeader()})
  }
}

export default new UserService();