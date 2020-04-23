import { User } from './user';
import { SignRequest } from './signRequest';
import { Status } from './status';

export class Document {
  private id: number;
  private name: string;
  private process: string;
  private created_at: string;
  private updated_at: string;
  private user: User;
  private status: Status;
  private sign_requests: Array<SignRequest>;


}
