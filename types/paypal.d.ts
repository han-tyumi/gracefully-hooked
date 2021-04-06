/* eslint-disable camelcase */

declare const paypal: any

declare namespace PayPal {
  interface PayerAddress {
    country_code: string
  }

  interface PayerName {
    given_name: string
    surname: string
  }

  enum PhoneType {
    Fax = 'FAX',
    Home = 'HOME',
    Mobile = 'MOBILE',
    Other = 'OTHER',
    Pager = 'PAGER',
  }

  interface PhoneNumber {
    national_number: string
  }

  interface Phone {
    phone_type: PhoneType
    phone_number: PhoneNumber
  }

  enum TaxIdType {
    Individual = 'BR_CPF',
    Business = 'BR_CNPJ',
  }

  interface TaxInfo {
    tax_id: string
    tax_id_type: TaxIdType
  }

  interface Payer {
    email_address: string
    payer_id: string
    address: PayerAddress
    name: PayerName
    phone?: Phone
    birth_date?: string
    tax_info?: TaxInfo
  }

  enum CurrencyCode {
    USD = 'USD',
  }

  interface Money {
    value: string
    currency_code: CurrencyCode
  }

  interface Breakdown {
    item_total: Money
    shipping?: Money
    handling?: Money
    insurance?: Money
    shipping_discount?: Money
  }

  interface MoneyWithBreakdown extends Money {
    breakdown?: Breakdown
  }

  interface Payee {
    email_address: string
    merchant_id: string
  }

  interface Item {
    name: string
    unit_amount: Money
    tax?: Money
    quantity: string
  }

  interface ShippingName {
    full_name: string
  }

  interface ShippingAddress {
    address_line_1: string
    admin_area_2: string
    admin_area_1: string
    postal_code: string
    country_code: string
  }

  interface Shipping {
    name: ShippingName
    address: ShippingAddress
  }

  interface SellerProtection {
    status: string
    dispute_categories: string[]
  }

  interface Link {
    href: string
    rel: string
    method: string
    title: string
  }

  interface Capture {
    status: string
    id: string
    final_capture: boolean
    create_time: string
    update_time: string
    amount: Money
    seller_protection: SellerProtection
    links: Link[]
  }

  interface Payments {
    captures: Capture[]
  }

  interface PlatformFee {
    amount: Money
    payee: Payee
  }

  enum DisbursementMode {
    Instant = 'INSTANT',
    Delayed = 'DELAYED',
  }

  interface PaymentInstruction {
    platform_fees: PlatformFee[]
    disbursement_mode: DisbursementMode
  }

  interface PurchaseUnit {
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

  interface Details {
    create_time: string
    update_time: string
    id: string
    intent: string
    status: string
    payer: Payer
    purchase_units: PurchaseUnit[]
    links: Link[]
  }

  enum LandingPage {
    Login = 'LOGIN',
    Billing = 'BILLING',
    NoPreference = 'NO_PREFERENCE',
  }

  enum ShippingPreference {
    File = 'GET_FROM_FILE',
    NoShipping = 'NO_SHIPPING',
    ProvidedAddress = 'SET_PROVIDED_ADDRESS',
  }

  enum UserAction {
    Continue = 'CONTINUE',
    PayNow = 'PAY_NOW',
  }

  enum PayeePreferred {
    Unrestricted = 'UNRESTRICTED',
    ImmediatePaymentRequired = 'IMMEDIATE_PAYMENT_REQUIRED',
  }

  enum StandardEntryClassCode {
    Telephone = 'TEL',
    Website = 'WEB',
    CashConcentrationDisbursement = 'CCD',
    PrearrangedPaymentDeposit = 'PPD',
  }

  interface PaymentMethod {
    payer_selected: string
    payee_preferred: PayeePreferred
    standard_entry_class_code: StandardEntryClassCode
  }

  enum PaymentInitiator {
    Customer = 'CUSTOMER',
    Merchant = 'MERCHANT',
  }

  enum PaymentType {
    OneTime = 'ONE_TIME',
    Recurring = 'RECURRING',
    Unscheduled = 'UNSCHEDULED',
  }

  enum Usage {
    First = 'FIRST',
    Subsequent = 'SUBSEQUENT',
    Derived = 'DERIVED',
  }

  enum Network {
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

  interface NetworkTransactionReference {
    id: string
    date: string
    network: Network
  }

  interface StoredPaymentSource {
    payment_initiator: PaymentMethod
    payment_type: PaymentType
    usage: Usage
    previous_network_transaction_reference: NetworkTransactionReference
  }

  interface ApplicationContext {
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

  type Action = any

  enum Intent {
    Capture = 'CAPTURE',
    Authorize = 'AUTHORIZE',
  }

  interface CreateOptions {
    intent?: Intent
    payer?: Payer
    purchase_units: PurchaseUnit[]
    application_context?: ApplicationContext
  }

  interface CreateOrderActions {
    order: {
      create: (options: CreateOptions) => Action
    }
  }

  type createOrder = (data: any, actions: CreateOrderActions) => Action

  interface OnApproveActions {
    order: {
      capture: () => Promise<Details>
    }
  }

  type onApprove = (data: any, actions: OnApproveActions) => void
}
