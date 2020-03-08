import { Component } from '@angular/core';
import { NgNeo4jD3Options, NgNeo4jd3Service } from 'ng-neo4jd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-neo4jd3-test';

  constructor(public ngNeo4jD3Service: NgNeo4jd3Service) { }

  ngOnInit(): void {
    let options: NgNeo4jD3Options = this.ngNeo4jD3Service.getOptionsPresentation();
    this.ngNeo4jD3Service.setValues('#neo4jd3', options);
    this.ngNeo4jD3Service.init();
  }

}
