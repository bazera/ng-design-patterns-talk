import { Injectable } from '@angular/core';
import { PaymentGateway, PaymentGatewayType } from './payment-gateway.model';
import { PayPalGateway, StripeGateway } from './gateways';

@Injectable({
  providedIn: 'root',
})
export class PaymentGatewayFactory {
  createPaymentGateway(type: PaymentGatewayType): PaymentGateway {
    switch (type) {
      case PaymentGatewayType.Paypal: {
        return new PayPalGateway();
      }
      case PaymentGatewayType.Stripe: {
        return new StripeGateway();
      }
      default: {
        throw new Error('Invalid payment gateway type');
      }
    }
  }
}
