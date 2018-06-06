import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { ConditionalExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public name;
  public items;
  public showDetailedView = false;
  public response;
  public repos;
  constructor(public http: Http) { }
  ngOnInit() {
    this.name = '';
  }

  searchGit() {
    console.log(this.name);
    this.http.get('https://api.github.com/search/users?q=' + this.name).subscribe(
      (data) => {
        // data = JSON.parse(data);
      console.log(data);
        this.items = JSON.parse(data['_body']);
        this.items = this.items['items'];
      },
      (err) => {
        console.log('Error occured!');
      }
    );
  }

  userDetail(e, url) {
    this.http.get(url).subscribe(
      (res) => {
        this.response = JSON.parse(res['_body']);
        this.http.get(this.response.repos_url).subscribe(
          (repos) => {
              this.repos = JSON.parse(repos['_body']);
          }
        );
      }
    );
    this.showDetailedView = true;
  }
}
