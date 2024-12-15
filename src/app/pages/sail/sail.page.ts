import { Component } from '@angular/core';

@Component({
  selector: 'app-sail',
  templateUrl: './sail.page.html',
  styleUrls: ['./sail.page.scss'],
})
export class SailPage  {

  posts = [
    {
      username: 'Shark Wave',
      avatarUrl: 'assets/SVG/blue-gear.svg',
      timestamp: new Date(),
      title: 'My First Post',
      content: 'Hello, Ionic World!',
      imageUrl: 'assets/swave-007-logos/72ppi/black.png',
    },
  ];

  likePost(post: any) {
    console.log('Liked:', post.title);
  }

  commentPost(post: any) {
    console.log('Comment on:', post.title);
  }



}
