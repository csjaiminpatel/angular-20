import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { AppTranslateService } from './modules/shared/services/app-translate.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng20-template';

  constructor(public translate: AppTranslateService){}
    
  
}
