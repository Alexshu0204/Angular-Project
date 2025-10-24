import { Component, signal } from '@angular/core';
import { PlayingCard } from './components/playing-card/playing-card';

@Component({ //fournit les métadonnées nécessaires pour que Angular sache comment afficher et gérer ce composant.
  selector: 'app-root', //Définit le nom de la balise HTML que Angular utilisera pour insérer ce composant dans le DOM.
  standalone: true, //Indique que ce composant est autonome (standalone). Cela signifie qu'il n'a pas besoin d'être déclaré dans un NgModule
  imports: [PlayingCard],
  templateUrl:'./app.Component.html', //Définit le template HTML du composant et ''styles'' à la ligne, définit les styles CSS spécifiques à ce composant
  styleUrl:'./app.component.css'
})
export class App {
}
