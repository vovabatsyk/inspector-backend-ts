export class ViolationPaymentDto {
  readonly ViolationId: number
  readonly FineAmount: number
  readonly PaymentState: string
  readonly PayedAmount: null | number
}
