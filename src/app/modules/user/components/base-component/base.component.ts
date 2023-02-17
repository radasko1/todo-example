import { Component } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  protected headerTitle = 'Example header title';
  protected subheaderTitle = 'Example subheader title';

  protected imageSrc = 'https://primefaces.org/cdn/primeng/images/usercard.png';

  /** Card component width. Insert value like in CSS */
  protected cardWidth = '400px';

  protected primaryButtonLabel = 'Save';
  protected secondaryButtonLabel = 'Cancel';
}
