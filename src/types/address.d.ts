export type Address = {
    id: number;
    name: string;
    address: string;
    province: number;
    district: number;
    commune: number;
    phone: string;
    type: number;
    isDefault: boolean;
}

export type Province = {
    id: number;
    name: string;
}

export type District = {
    id: number;
    name: string;
    provinceId: number;
}

export type Commune = {
    id: number;
    name: string;
    districtId: number;
}