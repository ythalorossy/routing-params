import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent, RecipeService } from './recipes';
import { ShoppingListComponent } from './shopping-list';

@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives: [ HeaderComponent, RecipesComponent, ShoppingListComponent ],
  providers: [ RecipeService ]
})
export class AppComponent {
  
}
