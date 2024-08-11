import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects=[
    {
      title:'Viper 360°',
      src:'viper360.png',
      description:'Viper360 is an arcade game designed to serve as a stress buster, developed using the C# programming language on the Unity game engine. The project aims to provide users with an immersive and entertaining gaming experience that helps alleviate stress.In Viper360, players engage in an arcade-style gameplay experience that combines fast-paced action with captivating visuals and engaging mechanics. The game offers intuitive controls, allowing players to navigate through challenging levels, overcome obstacles, and achieve high scores.'
    }
  ]

}
