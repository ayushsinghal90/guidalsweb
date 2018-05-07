import { Book } from './book.model';
import { Free } from './free.model';
import { Paid } from './paid.model';

export class Content{
  public id : number ;
  public title : string ;
  public descrip : string;
  public imple : string;
  public logo : string;
  public book : Book[];
  public free : Free[];
  public paid : Paid[];
}
