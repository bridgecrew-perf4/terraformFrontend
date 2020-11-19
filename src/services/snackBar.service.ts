import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) {
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  /**
   * Open Snack Bar For Displaying Message.
   */
  openSnackBar(message: string, error: string = 'snackBarWarning', time: number = 5000) {
    this.snackBar.open(message, 'DISMISS', {
      duration: time,
      panelClass: [error]
    });
  }
}
