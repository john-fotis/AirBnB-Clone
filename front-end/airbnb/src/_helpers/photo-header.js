export default function photoHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { 
      'Authorization': `Bearer ${user.accessToken}`,
      'Content-Type': 'multipart/form-data'
    };
  } else {
    return {};
  }
}