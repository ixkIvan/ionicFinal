import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comment } from '../../app/Models/comment';
import { DepozitPage } from '../depozit/depozit';
import { DancePage } from '../dance/dance';
import { GradacPage } from '../gradac/gradac';
import { PetkaPage } from '../petka/petka';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

  
})

export class HomePage {

  
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

  redirectDepozit(pagename: string){
    this.navCtrl.push(DepozitPage);
  }

  redirectDance(pagename: string){
    this.navCtrl.push(DancePage);
  }

  redirectPetka(pagename: string){
    this.navCtrl.push(PetkaPage);
  }

  redirectGradac(pagename: string){
    this.navCtrl.push(GradacPage);
  }

  redirectAbout(pagename: string){
    this.navCtrl.push(AboutPage);
  }



}//End of class 
