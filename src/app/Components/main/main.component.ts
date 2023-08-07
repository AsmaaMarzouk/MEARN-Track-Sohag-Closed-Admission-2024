import { Component } from '@angular/core';
import { TrackInfo } from 'src/app/Models/track-info';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // title:string="Hello world test asd any thing";
  // num:number=5;
// property : className
track:TrackInfo=new TrackInfo("MEARN Track","https://cdn.mobcoder.com/assets/blog_images/mern-stack/Mern-1_11zon.webp",["Node Js","Angular","React js"]);

}
