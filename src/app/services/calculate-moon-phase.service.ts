import { Injectable } from '@angular/core';
import { MoonDataDto } from '../dtos/moon-data.dto';
import { Timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateMoonPhaseService {

  calculatePhase(date: Date): MoonDataDto {
    const currentTimestamp = date.getTime();
    const defaultNewMoonTimestamp = 1564629120000; // 01/08/2019 - 6:12:00 AM GMT + 3:00
    const currentDay = (Math.round(
      (currentTimestamp - defaultNewMoonTimestamp) / 86400000) % 29
    );

    let moonPhase: string;
    let meditation = '-';

    if (currentDay === 0) {
      moonPhase = 'Νέα Σελήνη';
      meditation = 'Βουβή Μέρα';
    } else if (currentDay === 1) {
      moonPhase = 'Αύξων  Μηνίσκος';
      meditation = 'Εναντίον της επιθυμίας ισχύος';
    } else if (currentDay === 2) {
      moonPhase = 'Αύξων  Μηνίσκος';
      meditation = 'Εναντίον της νωθρότητας';
    } else if (currentDay === 3) {
      moonPhase = 'Αύξων  Μηνίσκος';
      meditation = 'Εναντίον της σπατάλης';
    } else if (currentDay === 4) {
      moonPhase = 'Αύξων  Μηνίσκος';
      meditation = 'Εναντίον του εγωισμού';
    } else if (currentDay === 5) {
      moonPhase = 'Αύξων  Μηνίσκος';
      meditation = 'Εναντίον της εκδίκησης';
    } else if (currentDay === 6) {
      moonPhase = 'Πρώτο Τέταρτο';
      meditation = 'Εναντίον της απληστίας';
    } else if (currentDay === 7) {
      moonPhase = 'Αύξων Αμφίκυρτος';
      meditation = 'Εναντίον της εξύμνησης και της επίπληξης';
    } else if (currentDay === 8) {
      moonPhase = 'Αύξων Αμφίκυρτος';
      meditation = 'Εναντίον της κακολογίας';
    } else if (currentDay === 9) {
      moonPhase = 'Αύξων Αμφίκυρτοςη';
      meditation = 'Εναντίον του ψεύδους';
    } else if (currentDay === 10) {
      moonPhase = 'Αύξων Αμφίκυρτος';
      meditation = 'Εναντίον της συκοφαντίας';
    } else if (currentDay === 11) {
      moonPhase = 'Αύξων Αμφίκυρτος';
      meditation = 'Εναντίον της αδιαφορίας και της ανυπομονησίας';
    } else if (currentDay === 12) {
      moonPhase = 'Αύξων Αμφίκυρτος';
      meditation = 'Εναντίον του φόβου';
    } else if (currentDay === 13) {
      moonPhase = 'Αύξων Αμφίκυρτος';
      meditation = 'Εναντίον της απειθαρχίας';
    } else if (currentDay === 14) {
      moonPhase = 'Πανσέληνος';
      meditation = 'Εναντίον της απελπισίας';
    } else if (currentDay === 15) {
      moonPhase = 'Φθίνων Αμφίκυρτος';
    } else if (currentDay === 16) {
      moonPhase = 'Φθίνων Αμφίκυρτος';
    } else if (currentDay === 17) {
      moonPhase = 'Φθίνων Αμφίκυρτος';
    } else if (currentDay === 18) {
      moonPhase = 'Φθίνων Αμφίκυρτος';
    } else if (currentDay === 19) {
      moonPhase = 'Φθίνων Αμφίκυρτος';
    } else if (currentDay === 20) {
      moonPhase = 'Φθίνων Αμφίκυρτος';
    } else if (currentDay === 21) {
      moonPhase = 'Φθίνων Αμφίκυρτος';
    } else if (currentDay === 22) {
      moonPhase = 'Τελευταίο Τέταρτο';
    } else if (currentDay === 23) {
      moonPhase = 'Φθίνων Μηνίσκος';
    } else if (currentDay === 24) {
      moonPhase = 'Φθίνων Μηνίσκος';
    } else if (currentDay === 25) {
      moonPhase = 'Φθίνων Μηνίσκος';
    } else if (currentDay === 26) {
      moonPhase = 'Φθίνων Μηνίσκος';
    } else if (currentDay === 27) {
      moonPhase = 'Φθίνων Μηνίσκος';
    } else if (currentDay === 28) {
      moonPhase = 'Φθίνων Μηνίσκος';
    } else if (currentDay === 29) {
      moonPhase = 'Φθίνων Μηνίσκος';
    } else if (currentDay === 30) {
      moonPhase = 'Φθίνων Μηνίσκος';
    }

    const moonData = new MoonDataDto();
    moonData.dayFromNewMoon = currentDay;
    moonData.moonPhase = moonPhase;
    moonData.meditation = meditation;

    return moonData;
  }
}
