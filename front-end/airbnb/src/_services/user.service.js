import axios from 'axios';
import authHeader from '../_helpers/auth-header';

const API = 'http://localhost:8080/air-bnb/api';

class UserService {

  async getAdminListings() {
    const result = await axios.get(API + '/admin/listings', {headers: authHeader() });
    return result;
  }

  async getAdminUsers() {
    const result = await axios.get(API + '/admin/users', {headers: authHeader() });
    return result;
  }

  async getAdminReviews() {
    const result = await axios.get(API + '/admin/reviews', {headers: authHeader() });
    return result;
  }

  async adminExtractEverything() {
    const result = await axios.get(API + '/admin/extractEverything', {headers: authHeader()});
    return result;
  }

  async getCurrentListing (listingId) {
    const result = await axios.get(API + `/listings/${listingId}`, {headers: authHeader() });
    return result;
  }

  async getCurrentReview (reviewId) {
    const result = await axios.get(API + `/reviews/${reviewId}`, {headers: authHeader() });
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

  async getReviewById(id){
    const result = await axios.get(API + `/admin/reviews/${id}`, { headers: authHeader() });
    return result.data;
  }

  async getProfile(id){
    const result = await axios.get(API + `/profile/`, { headers: authHeader() });
    return result.data;
  }

  postPhoto(imageFile) {
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

  createListing(title,type,numOfBeds,numOfWc,numOfRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host ) {
    return axios.post(API + '/host/listings', {
      title,type,numOfBeds,numOfWc,numOfRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host
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
    console.log(modifiedImage)
    return axios.put( API + '/images/update',
      modifiedImage, {headers: authHeader()})
  }

  searchListings(type,smoking,animals,parties,guests,latitude,longitude,country,city,neighborhood,maxCost,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate){
    return axios.put(API + '/listings',
    {startDate, endDate, guests, country, city}, {headers: authHeader()})
  }

  updateProfileInfo(firstName,lastName,email,number,password){
    return axios.put(API + '/profile', {
      firstName,
      lastName,
      email,
      number,
      password
    }, {headers: authHeader()});
  }

  updateListingInfo(listing){
    console.log(listing)
    // return axios.put(API + `/host/listings/${listing}`,{
    //   //....
    // }, {headers: authHeader()});
  }
}

export default new UserService();