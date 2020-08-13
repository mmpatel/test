import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LaunchFacadeService } from '../services/launch-facade.service';

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {
  id: any;
  launchDetails$;
  loading: boolean = true;
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchFacade: LaunchFacadeService,
    private router: Router
  ) {}


  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "nextArrow": "<i class='fa fa-angle-left' aria-hidden='true' style='position:absolute;left: -23px;top: 35px;font-size: 30px;'></i>",
    "prevArrow": "<i class='fa fa-angle-right' aria-hidden='true' style='position:absolute;right: -23px;top: 35px;font-size: 30px;'></i>",
    "dots": false,
    "infinite": false
  };

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params['params'].id;
      this.launchDetails$ = this.launchFacade.pastLaunchDetailsStoreCache({id:this.id});
    });
    this.launchFacade.launchDetailLoading$.subscribe((res) => {
      this.loading = res;
    })
  }

  redirect() {
    this.router.navigate([''])
  }
}
