import type {Payment} from "~/types/payment";

export const usePaymentData = () => {
    const { t } = useI18n();
    const payments: Payment[] = [
        {
            id: 1,
            name: t('general.payment_method.cod'),
            image: '_nuxt/assets/images/payment/cod.png'
        },
        {
            id: 2,
            name: t('general.payment_method.vn_pay'),
            image: '_nuxt/assets/images/payment/vnpay.svg'
        },
        {
            id: 3,
            name: t('general.payment_method.shopee_pay'),
            image: '_nuxt/assets/images/payment/shopeepay.png'
        },
    ];
    return { payments };
};