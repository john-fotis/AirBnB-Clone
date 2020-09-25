import axios from 'axios';
import authHeader from '../_helpers/auth-header';
import {API} from '../config/config.utils';

class UserService {

  async getAdminListings() {
    const result = await axios.get(API + '/admin/listings', {headers: authHeader()});
    return result;
  }

  async getAdminUsers() {
    const result = await axios.get(API + '/admin/users', {headers: authHeader()});
    return result;
  }

  async getAllUserInfo(userId){
    const result = await axios.get(API + `/admin/users/${userId}/full`, {headers: authHeader()});
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

  async getCurrentBooking(bookingId) {
    const result = await axios.get(API + `/guest/bookings/${bookingId}`, {headers: authHeader()});
    return result;
  }

  async getHostBoard() {
    const result = await axios.get(API + '/host/listings', { headers: authHeader() });
    return result;
  }

  async getHostMessages(listingId) {
    const result = await axios.get(API + `/host/listings/${listingId}/messages`, { headers: authHeader() });
    return result;
  }

  async getGuestBoard() {
    const result = await axios.get(API + '/guest/bookings', { headers: authHeader() });
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

  approveHost(hostId){
    return axios.put(API + `/admin/users/${hostId}/approve`,
    {}, {headers: authHeader()});
  }

  postPhoto(imageFile) {
    return axios.post(API + '/images/upload',
    imageFile, 
    {headers:{
        'content-type': 'multipart/form-data'
      }}
    );
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
      modifiedImage,
      {headers: authHeader()}
    );
  }

  createListing(title,type,numOfBeds,numOfWc,numOfRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host ) {
    return axios.post(API + '/host/listings',
    {title,type,numOfBeds,numOfWc,numOfRooms,livingRoom,squareFootage,description,smoking,animals,parties,minRentDays,maxGuests,latitude,longitude,country,city,neighborhood,address,postalCode,transportation,minCost,costPerExtraGuest,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate,host},
      {headers: authHeader()}
    );
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
      modifiedImage,
      {headers: authHeader()});
  }

  searchListings(type,smoking,animals,parties,guests,latitude,longitude,country,city,maxCost,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate){
    return axios.put(API + '/listings',
      {type,smoking,animals,parties,guests,latitude,longitude,country,city,maxCost,wifi,ac,heating,kitchen,tv,parking,elevator,startDate,endDate},
      {headers: authHeader()});
  }

  updateProfileInfo(firstName,lastName,email,number,password){
    return axios.put(API + '/profile', {
      firstName,
      lastName,
      email,
      number,
      password
    },
    {headers: authHeader()});
  }

  updateListingInfo(id,title,type,country,city,neighborhood,address,postalCode,description,transportation,numOfBeds,numOfWc,numOfRooms,minRentDays,maxGuests,minCost,costPerExtraGuest,squareFootage,livingRoom,kitchen,parking,elevator,smoking,tv,ac,heating,wifi,parties,animals,startDate,endDate,images,host,reviews){
    return axios.put(API + `/host/listings/${id}`,
    {id,title,type,country,city,neighborhood,address,postalCode,description,transportation,numOfBeds,numOfWc,numOfRooms,minRentDays,maxGuests,minCost,costPerExtraGuest,squareFootage,livingRoom,kitchen,parking,elevator,smoking,tv,ac,heating,wifi,parties,animals,startDate,endDate,images,host,reviews},
    {headers: authHeader()});
  }

  bookListing (listingId, startDate, endDate){
    return axios.post( API + '/guest/bookings',
      {startDate, endDate, listingId},
      {headers: authHeader()
    });
  }

  chatFromGuest(text, listingId, guestId){
    return axios.post(API + '/guest/messages',
    {text, listingId, guestId},
    {headers: authHeader()});
  }

  chatFromHost(text, listingId, guestId){
    return axios.post(API + '/host/messages',
    {text, listingId, guestId},
    {headers: authHeader()});
  }

  hostMessageSeen(listingId){
    return axios.put(API + `/host/messages/${listingId}/seen`,
    {},
    {headers: authHeader()});
  }

  hostDeleteMessage(messageId){
    return axios.delete(API + `/host/messages/${messageId}`,
    {headers: authHeader()});
  }

  guestReview(comment, rating, listingId, userId){
    return axios.post(API + '/guest/reviews',
    {comment, rating, listingId, userId},
    {headers: authHeader()});
  }
}

export default new UserService();