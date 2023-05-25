import { PaymentGateway } from '../payment-gateway.model';

export class PayPalGateway implements PaymentGateway {
  initialize(): void {
    // Initialization logic for PayPal gateway
  }

  processPayment(amount: number): void {
    // Processing payment logic for PayPal gateway
  }
}
