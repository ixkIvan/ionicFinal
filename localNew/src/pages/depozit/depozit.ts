import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comment } from '../../app/Models/comment';
import { MapPage } from '../../app/Models/google';


declare var map;

@Component({
  selector: 'page-home',
  templateUrl: 'depozit.html'
})
export class DepozitPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  
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


 
 
  loadMap(){
    
    var google;
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }





}//End of class 
