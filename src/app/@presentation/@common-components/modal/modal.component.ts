import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  openWithBackdrop() {
    this.open(true);
  }

  openWithoutBackdrop() {
    this.open(false);
  }

  protected open(hasBackdrop: boolean) {
    this.dialogService.open(ModalComponent, { hasBackdrop });
  }
}
