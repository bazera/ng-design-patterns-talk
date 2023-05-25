import { PaymentGateway } from '../payment-gateway.model';

export class StripeGateway implements PaymentGateway {
  initialize(): void {
    // Initialization logic for Stripe gateway
  }

  processPayment(amount: number): void {
    // Processing payment logic for Stripe gateway
  }
}
