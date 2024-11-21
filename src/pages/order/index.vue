<script lang="ts" setup>
import type { Order } from '~/types/order';

const orders = ref<Order[]>([
  {
    id: '1',
    phone: '123-456-7890',
    province: {
      id: 1,
      name: 'Abc'
    },
    district: {
      id: 1,
      name: 'Abcd',
      province_id: 1
    },
    commune: {
      id: 1,
      name: 'Abcde',
      district_id: 1
    },
    address: '123 Main St',
    shipping_fee: 10.00,
    tax: 5.00,
    tax_amount: 17.94,
    total_quantity: 3,
    total_amount: 358.75,
    status: 'IN PROGRESS',
    payment_method: 'Credit Card',
    payment_status: 'Paid',
    reference_code: '#34VB5540K83',
    created_at: '2024-05-21T10:00:00Z',
  },
  {
    id: '2',
    phone: '234-567-8901',
    province: {
      id: 1,
      name: 'Abc'
    },
    district: {
      id: 1,
      name: 'Abcd',
      province_id: 1
    },
    commune: {
      id: 1,
      name: 'Abcde',
      district_id: 1
    },
    address: '456 Elm St',
    shipping_fee: 15.00,
    tax: 7.50,
    tax_amount: 37.50,
    total_quantity: 5,
    total_amount: 760.50,
    status: 'CANCELED',
    payment_method: 'PayPal',
    payment_status: 'Refunded',
    reference_code: '#78A643CD409',
    created_at: '2024-12-09T12:00:00Z',
  },
  {
    id: '3',
    phone: '345-678-9012',
    province: {
      id: 1,
      name: 'Abc'
    },
    district: {
      id: 1,
      name: 'Abcd',
      province_id: 1
    },
    commune: {
      id: 1,
      name: 'Abcde',
      district_id: 1
    },
    address: '789 Oak St',
    shipping_fee: 20.00,
    tax: 10.00,
    tax_amount: 84.00,
    total_quantity: 7,
    total_amount: 1264.00,
    status: 'DELAYED',
    payment_method: 'Bank Transfer',
    payment_status: 'Pending',
    reference_code: '#112P45A90V2',
    created_at: '2024-10-15T14:00:00Z',
  },
  {
    id: '4',
    phone: '456-789-0123',
    province: {
      id: 1,
      name: 'Abc'
    },
    district: {
      id: 1,
      name: 'Abcd',
      province_id: 1
    },
    commune: {
      id: 1,
      name: 'Abcde',
      district_id: 1
    },
    address: '101 Pine St',
    shipping_fee: 12.00,
    tax: 6.00,
    tax_amount: 11.90,
    total_quantity: 2,
    total_amount: 198.35,
    status: 'DELIVERED',
    payment_method: 'Credit Card',
    payment_status: 'Paid',
    reference_code: '#28BA67U0981',
    created_at: '2024-07-19T16:00:00Z',
  },
  {
    id: '5',
    phone: '567-890-1234',
    province: {
      id: 1,
      name: 'Abc'
    },
    district: {
      id: 1,
      name: 'Abcd',
      province_id: 1
    },
    commune: {
      id: 1,
      name: 'Abcde',
      district_id: 1
    },
    address: '202 Maple St',
    shipping_fee: 25.00,
    tax: 12.50,
    tax_amount: 213.40,
    total_quantity: 10,
    total_amount: 2133.90,
    status: 'DELIVERED',
    payment_method: 'Credit Card',
    payment_status: 'Paid',
    reference_code: '#502TR872W2',
    created_at: '2024-04-04T18:00:00Z',
  },
  {
    id: '6',
    phone: '678-901-2345',
    province: {
      id: 1,
      name: 'Abc'
    },
    district: {
      id: 1,
      name: 'Abcd',
      province_id: 1
    },
    commune: {
      id: 1,
      name: 'Abcde',
      district_id: 1
    },
    address: '303 Birch St',
    shipping_fee: 8.00,
    tax: 4.00,
    tax_amount: 6.40,
    total_quantity: 1,
    total_amount: 86.40,
    status: 'DELIVERED',
    payment_method: 'Credit Card',
    payment_status: 'Paid',
    reference_code: '#47H76G09F33',
    created_at: '2024-03-30T20:00:00Z',
  },
  {
    id: '7',
    phone: '789-012-3456',
    province: {
      id: 1,
      name: 'Abc'
    },
    district: {
      id: 1,
      name: 'Abcd',
      province_id: 1
    },
    commune: {
      id: 1,
      name: 'Abcde',
      district_id: 1
    },
    address: '404 Cedar St',
    shipping_fee: 8.00,
    tax: 4.00,
    tax_amount: 6.40,
    total_quantity: 1,
    total_amount: 86.40,
    status: 'DELIVERED',
    payment_method: 'Credit Card',
    payment_status: 'Paid',
    reference_code: '#53U76G09E38',
    created_at: '2024-04-21T22:00:00Z',
  },
])

const currentPage = ref(1)
const pageSize = 5

const currentPageOrders = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return orders.value.slice(start, end)
})

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}

function getStatusClass(status: string): string {
  switch (status) {
    case 'IN PROGRESS':
      return 'bg-blue-500';
    case 'CANCELED':
      return 'bg-red-500';
    case 'DELAYED':
      return 'bg-yellow-500';
    case 'DELIVERED':
      return 'bg-green-500';
    default:
      return '';
  }
}

onMounted(() => {
  // Write logic get orders here
})
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <LazyLayoutsClientProfileNavbar/>
    <!-- Main Content -->
    <main class="w-full md:w-3/4 top-2 mb-8 px-4 sm:px-6 lg:px-8">
      <div class="md:p-8">
        <el-card class="box-card">
          <el-table :data="currentPageOrders" style="width: 100%">
            <el-table-column prop="reference_code" :label="$t('page.order.order')" width="180" />
            <el-table-column prop="created_at" :label="$t('page.order.date')" width="180">
              <template #default="scope">
                {{ new Date(scope.row.created_at).toLocaleDateString() }}
              </template>
            </el-table-column>
            <el-table-column prop="status" :label="$t('page.order.status')" width="150" >
              <template #default="scope">
                <div class="text-white text-center" :class="getStatusClass(scope.row.status)">{{ scope.row.status }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="total_amount" :label="$t('page.order.total')" width="120">
              <template #default="scope">
                ${{ scope.row.total_amount.toFixed(2) }}
              </template>
            </el-table-column>
            <el-table-column :label="$t('page.order.action')" width="100" align="right">
              <template #default="scope">
                <nuxt-link
                    :to="`order/${scope.row.id}`"
                    class="text-rose-500 underline hover:text-rose-600"
                >
                  {{ $t('page.order.view') }}
                </nuxt-link>
              </template>
            </el-table-column>
          </el-table>

          <div class="flex justify-center mt-4">
            <el-pagination
                v-model:current-page="currentPage"
                :page-size="pageSize"
                :total="orders.length"
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
            />
          </div>
        </el-card>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>