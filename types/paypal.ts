/* eslint-disable camelcase */

export interface PayerAddress {
  country_code: string
}

export interface PayerName {
  given_name: string
  surname: string
}

export enum PhoneType {
  Fax = 'FAX',
  Home = 'HOME',
  Mobile = 'MOBILE',
  Other = 'OTHER',
  Pager = 'PAGER',
}

export interface PhoneNumber {
  national_number: string
}

export interface Phone {
  phone_type: PhoneType
  phone_number: PhoneNumber
}

export enum TaxIdType {
  Individual = 'BR_CPF',
  Business = 'BR_CNPJ',
}

export interface TaxInfo {
  tax_id: string
  tax_id_type: TaxIdType
}

export interface Payer {
  email_address: string
  payer_id: string
  address: PayerAddress
  name: PayerName
  phone?: Phone
  birth_date?: string
  tax_info?: TaxInfo
}

export enum CurrencyCode {
  USD = 'USD',
}

export interface Money {
  value: string
  currency_code: CurrencyCode
}

export interface Breakdown {
  item_total: Money
  shipping?: Money
  handling?: Money
  insurance?: Money
  shipping_discount?: Money
}

export interface MoneyWithBreakdown extends Money {
  breakdown?: Breakdown
}

export interface Payee {
  email_address: string
  merchant_id: string
}

export interface Item {
  name: string
  unit_amount: Money
  tax?: Money
  quantity: string
}

export interface ShippingName {
  full_name: string
}

export interface ShippingAddress {
  address_line_1: string
  admin_area_2: string
  admin_area_1: string
  postal_code: string
  country_code: string
}

export interface Shipping {
  name: ShippingName
  address: ShippingAddress
}

export interface SellerProtection {
  status: string
  dispute_categories: string[]
}

export interface Link {
  href: string
  rel: string
  method: string
  title: string
}

export interface Capture {
  status: string
  id: string
  final_capture: boolean
  create_time: string
  update_time: string
  amount: Money
  seller_protection: SellerProtection
  links: Link[]
}

export interface Payments {
  captures: Capture[]
}

export interface PlatformFee {
  amount: Money
  payee: Payee
}

export enum DisbursementMode {
  Instant = 'INSTANT',
  Delayed = 'DELAYED',
}

export interface PaymentInstruction {
  platform_fees: PlatformFee[]
  disbursement_mode: DisbursementMode
}

export interface PurchaseUnit {
  description?: string
  reference_id?: string
  amount: MoneyWithBreakdown
  payee?: Payee
  items?: Item[]
  shipping?: Shipping
  payments?: Payments
  payment_instruction?: PaymentInstruction
  custom_id?: string
  invoice_id?: string
  id?: string
  soft_descriptor?: string
}

export interface Details {
  create_time: string
  update_time: string
  id: string
  intent: string
  status: string
  payer: Payer
  purchase_units: PurchaseUnit[]
  links: Link[]
}

export enum LandingPage {
  Login = 'LOGIN',
  Billing = 'BILLING',
  NoPreference = 'NO_PREFERENCE',
}

export enum ShippingPreference {
  File = 'GET_FROM_FILE',
  NoShipping = 'NO_SHIPPING',
  ProvidedAddress = 'SET_PROVIDED_ADDRESS',
}

export enum UserAction {
  Continue = 'CONTINUE',
  PayNow = 'PAY_NOW',
}

export enum PayeePreferred {
  Unrestricted = 'UNRESTRICTED',
  ImmediatePaymentRequired = 'IMMEDIATE_PAYMENT_REQUIRED',
}

export enum StandardEntryClassCode {
  Telephone = 'TEL',
  Website = 'WEB',
  CashConcentrationDisbursement = 'CCD',
  PrearrangedPaymentDeposit = 'PPD',
}

export interface PaymentMethod {
  payer_selected: string
  payee_preferred: PayeePreferred
  standard_entry_class_code: StandardEntryClassCode
}

export enum PaymentInitiator {
  Customer = 'CUSTOMER',
  Merchant = 'MERCHANT',
}

export enum PaymentType {
  OneTime = 'ONE_TIME',
  Recurring = 'RECURRING',
  Unscheduled = 'UNSCHEDULED',
}

export enum Usage {
  First = 'FIRST',
  Subsequent = 'SUBSEQUENT',
  Derived = 'DERIVED',
}

export enum Network {
  Visa = 'VISA',
  Mastercard = 'MASTERCARD',
  Discover = 'DISCOVER',
  Amex = 'AMEX',
  Solo = 'SOLO',
  JCB = 'JCB',
  Star = 'STAR',
  Delta = 'DELTA',
  Switch = 'SWITCH',
  Maestro = 'MAESTRO',
  CBNationale = 'CB_NATIONALE',
  Configoga = 'CONFIGOGA',
  Confidis = 'CONFIDIS',
  Electron = 'ELECTRON',
  Cetelem = 'CETELEM',
  ChinaUnionPay = 'CHINA_UNION_PAY',
}

export interface NetworkTransactionReference {
  id: string
  date: string
  network: Network
}

export interface StoredPaymentSource {
  payment_initiator: PaymentMethod
  payment_type: PaymentType
  usage: Usage
  previous_network_transaction_reference: NetworkTransactionReference
}

export interface ApplicationContext {
  brand_name: string
  locale: string
  landing_page: LandingPage
  shipping_preference: ShippingPreference
  user_action: UserAction
  payment_method: PaymentMethod
  return_url: string
  cancel_url: string
  stored_payment_source: StoredPaymentSource
}

export type Action = any

export enum Intent {
  Capture = 'CAPTURE',
  Authorize = 'AUTHORIZE',
}

export interface CreateOptions {
  intent?: Intent
  payer?: Payer
  purchase_units: PurchaseUnit[]
  application_context?: ApplicationContext
}

export interface CreateOrderActions {
  order: {
    create: (options: CreateOptions) => Action
  }
}

export type createOrder = (data: any, actions: CreateOrderActions) => Action

export interface OnApproveActions {
  order: {
    capture: () => Promise<Details>
  }
}

export type onApprove = (data: any, actions: OnApproveActions) => void

export interface OnCancelData {
  orderId: string
}

export type onCancel = (data: OnCancelData) => void

export type onError = (err: any) => void
