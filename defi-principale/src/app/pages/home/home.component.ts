import { Component } from '@angular/core';
import { OrganComponent } from '../../components/organ/organ.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [OrganComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
showOrgan: boolean = false;

organs: any[] = [
  {
    image: 'css/images/project1.jpg',
    title: 'Heart',
    description: 'The heart is a muscular organ responsible for pumping blood through the blood vessels.'
  },
  {
    image: 'brain.jpg',
    title: 'Brain',
    description: 'The brain is the control center of the body, responsible for thoughts, memory, and regulation of bodily functions.'
  },
  {
    image: 'lungs.jpg',
    title: 'Lungs',
    description: 'The lungs are a pair of spongy, air-filled organs responsible for respiration and gas exchange.'
  },
  {
    image: 'kidney.jpg',
    title: 'Kidney',
    description: 'The kidneys are bean-shaped organs that filter blood and produce urine.'
  },
  {
    image: 'liver.jpg',
    title: 'Liver',
    description: 'The liver is a vital organ that processes nutrients, detoxifies harmful substances, and produces bile.'
  }
];

title: string = '';
image: string = '';
description: string = '';
ngOnInit() {
  console.log(this.organs);
}
openOrgan(title:string,description:string,image:string){
  this.title = title;
  this.description = description;
  this.image = image;
  this.showOrgan = true;
}

}
