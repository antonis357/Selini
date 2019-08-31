import { Component } from '@angular/core';
import { CalculateMoonPhaseService } from './services/calculate-moon-phase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  day: number;
  moonPhase: string;
  meditation: string;

  constructor(private calculateMoonPhaseService: CalculateMoonPhaseService) {
    // const moonData = calculateMoonPhaseService.calculatePhase(new Date(2019, 8, 28));
    const moonData = calculateMoonPhaseService.calculatePhase(new Date());
    this.day = moonData.dayFromNewMoon;
    this.moonPhase = moonData.moonPhase;
    this.meditation = moonData.meditation;
    console.log(this.daysOfTheMonth());
  }

  daysOfTheMonth(): number[] {
    const date = new Date();

    const month = date.getMonth();
    const year = date.getFullYear();

    const days = new Date(year, month, 0).getDate();

    const daysArray = new Array();

    for (let i = 1; i <= days; i++ ) {
      daysArray.push(i);
    }

    return daysArray;
  }
}
