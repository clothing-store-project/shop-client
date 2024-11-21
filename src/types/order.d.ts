export type Order = {
    id: string
    phone?: string
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
    orderDetail?: OrderDetail[]
}

export type OrderDetail = {
    product: {
        name: string
        image: string
    }
    variation: {
        price: number
        price_sale: number
        attribute?: Attribute[]
    }
}

export type Attribute = {
    name: string
    value: string
}