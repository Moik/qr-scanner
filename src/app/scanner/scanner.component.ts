import { Component, OnInit } from '@angular/core';

import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  scanned: string;
  formats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
  ];

  constructor() {}

  ngOnInit() {}

  onScan(scanned: string): void {
    this.scanned = scanned;
  }
}
