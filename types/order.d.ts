export type Order = {
    id: string
    phone: string
    province: object
    district: object
    commune: object
    address: string
    shipping_fee: number
    tax: number
    tax_amount: number
    total_quantity: number
    total_amount: number
    status: string
    payment_method: string
    payment_status: string
    reference_code: string
    created_at: string
    total: number
}