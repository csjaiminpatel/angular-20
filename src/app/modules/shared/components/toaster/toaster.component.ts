import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule, NgbToastModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class ToasterComponent {

  constructor(public toastService: ToastService) {
  }

  toastClass(type: string): string {
    switch (type) {
      case 'success': 
        return 'bg-success text-light';
      case 'warning': 
        return 'bg-warning text-light';
      case 'error': 
        return 'bg-danger text-light';
      default: return '';
    }
  }

}
