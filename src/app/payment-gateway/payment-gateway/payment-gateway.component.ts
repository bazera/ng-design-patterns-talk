import { Component } from '@angular/core';
import { PaymentGateway, PaymentGatewayType } from './payment-gateway.model';
import { PaymentGatewayFactory } from './payment-gateway.factory';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss'],
})
export class PaymentGatewayComponent {
  private paymentGateway!: PaymentGateway;

  paymentGatewayType = PaymentGatewayType;

  constructor(private gatewayFactory: PaymentGatewayFactory) {}

  initializePaymentGateway(type: PaymentGatewayType): void {
    this.paymentGateway = this.gatewayFactory.createPaymentGateway(type);
    this.paymentGateway.initialize();
  }

  processPaymentWith(type: PaymentGatewayType): void {
    this.initializePaymentGateway(type);
    this.paymentGateway?.processPayment(100);
  }
}
