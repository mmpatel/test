import { LaunchFacadeService } from "./../services/launch-facade.service";
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { LaunchListState } from "./../store/reducers/launch-list.reducer";
import { Store } from "@ngrx/store";
import * as launchListQuery from "../store/selectors";
@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {
  public loading: boolean = true;
  public isLoading: boolean = true

  constructor(private readonly launchFacade: LaunchFacadeService) {}
  pastLaunches$ = this.launchFacade.pastLaunchListStoreCache();

  ngOnInit() {
    this.launchFacade.launchListLoading$.subscribe((res) => {
      this.loading = res;
    })
  }

  onLoad() {
    this.isLoading = false;
  }
}
