import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comment } from '../../app/Models/comment';

@Component({
  selector: 'page-home',
  templateUrl: 'petka.html'
})
export class PetkaPage {

  comments:Array<Comment> = new Array<Comment>();

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    
    for (var i = 1; i < localStorage.length; i++){
        var string = localStorage.getItem("" + i);
        let comment = new Comment();
        comment.comment = string;
        this.comments.push(comment);
        
    }
  }

  
  postComment(gg) {
    
    
    let comment = new Comment();
    comment.comment = gg;
    this.comments.push(comment);
    localStorage.setItem("" + (localStorage.length + 1), gg);

  }





}//End of class 
