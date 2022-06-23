import { Injectable } from '@angular/core';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogData } from 'src/app/dialog/DialogData';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(title: string, message: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let dialogData: DialogData = {
      title: title,
      description: message
    }
    dialogConfig.data = dialogData

    this.dialog.open<DialogComponent, DialogData>(DialogComponent, dialogConfig)
  }
}
