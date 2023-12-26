import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';
  greetMessage = '';
  errorMessage = '';

  constructor(private route: ActivatedRoute,
              private dataService: WelcomedataService
              ) {
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
  }

  getMessage() {
    // console.log(this.dataService.executeHelloService())
    this.dataService.executeHelloService().subscribe(
      response => this.handleSuccessRespolnse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleErrorResponse(error: any): void {
    this.errorMessage = error.error.message;
  }

  handleSuccessRespolnse(response: GreetingMessage): void {
    this.greetMessage = response.message;
  }

}

export class GreetingMessage {
  constructor(public message: string) {}
}