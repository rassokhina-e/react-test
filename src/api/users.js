class UserApi {
  static async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response) {
      return await response.json();
    } else {
      return [];
    } 
  }
}

export default UserApi;
