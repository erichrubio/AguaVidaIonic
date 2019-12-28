import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  static eric() { return 'rubio'; }

  // static *cartesian(head, ...tail) {
  //   let remainder = tail.length ? this.cartesian(tail) : [[]];
  //   for (let r of remainder) for (let h of head) yield [h, ...r];
  // }

  static allPossibleCases(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      var result = [];
      // recur with the rest of array
      var allCasesOfRest = this.allPossibleCases(arr.slice(1));
      for (var i = 0; i < allCasesOfRest.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          result.push(arr[0][j] + allCasesOfRest[i]);
        }
      }
      return result;
    }
  }
}
