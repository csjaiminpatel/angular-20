import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { AppTranslateService } from './modules/shared/services/app-translate.service';
import { ToasterComponent } from './modules/shared/components/toaster/toaster.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,ToasterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng20-template';

  constructor(public translate: AppTranslateService){}
    
  
}
