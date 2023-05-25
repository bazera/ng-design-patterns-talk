// payment-gateway.interface.ts
export interface PaymentGateway {
  initialize(): void;
  processPayment(amount: number): void;
}

export enum PaymentGatewayType {
  Paypal,
  Stripe,
}
