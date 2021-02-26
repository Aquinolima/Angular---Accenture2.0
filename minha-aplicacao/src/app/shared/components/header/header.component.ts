import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  

  @Input() title: string;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnChanges()	{}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  ngOnDestroy() {}

  logout(){
    this.authService.logout();
  }

}
