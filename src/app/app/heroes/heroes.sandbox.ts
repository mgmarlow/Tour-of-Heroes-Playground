import { sandboxOf } from 'angular-playground';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';

export default sandboxOf(HeroesComponent, {
    imports: [ FormsModule ]
})
    .add('Default', {
        template: `<app-heroes></app-heroes>`
    });
