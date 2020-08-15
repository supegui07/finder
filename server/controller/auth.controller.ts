import { AuthService } from '../service/auth.service';

export class AuthController {
  private app;
  private authService: AuthService;
  constructor(app) {
    this.app = app;
    this.authService = new AuthService();
    app.post('/api/auth/signin', this.signIn);
  }

  public signIn = async (req, res) => {
    try {
      const reponse = await this.authService.signIn();
      return res.status(200).json(reponse);      
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}