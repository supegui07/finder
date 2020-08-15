export class AuthService {
  

  async signIn(): Promise<any> {
    try {
      return Promise.resolve({ token: 'xxxxxxxxxxx', username: 'supegui'})
    } catch (error) {
      console.log('Error authenticating a user. ', error)
      return Promise.reject();
    }
  }
}