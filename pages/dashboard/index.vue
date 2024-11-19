<script lang="ts" setup>
import {Clock, Heart, ShoppingCart} from 'lucide-vue-next'
import {Line} from 'vue-chartjs'
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const {t} = useI18n()

const stats = [
  {name: t('general.dashboard.total_orders'), value: '3658', icon: ShoppingCart},
  {name: t('general.dashboard.total_pending_orders'), value: '215', icon: Clock},
  {name: t('general.dashboard.total_cart_items'), value: '31576', icon: Heart},
]

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: 'Sales',
      data: [190, 185, 200, 185, 205, 185, 195, 185],
      borderColor: 'rgb(244, 63, 94)',
      tension: 0.4,
      fill: false
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
        drawBorder: false
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 12,
          family: 'Inter'
        }
      }
    },
    y: {
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
        drawBorder: false
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 12,
          family: 'Inter'
        },
        callback: (value: number) => `$${value}`
      },
      min: 185,
      max: 205,
      stepSize: 5
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        boxWidth: 10,
        usePointStyle: true,
        pointStyle: 'line',
        color: '#6B7280',
        font: {
          size: 12,
          family: 'Inter'
        }
      }
    },
    tooltip: {
      backgroundColor: 'white',
      titleColor: '#111827',
      bodyColor: '#111827',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      padding: 10,
      displayColors: false,
      callbacks: {
        label: (context: any) => `$${context.parsed.y}`
      }
    }
  }
}
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <!-- Sidebar -->
    <LayoutsClientProfileNavbar/>

    <!-- Main Content -->
    <main class="w-full md:w-3/4 top-2 mb-8 px-4 sm:px-6 lg:px-8">
      <div class="md:p-8">
        <!-- Welcome Section -->
        <div class="rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <p class="text-gray-600">
            Hello John Doe (not John Doe?
            <a class="text-rose-500 hover:underline" href="#">Log out</a>)
          </p>
          <p class="text-gray-600 mt-2">
            From your account dashboard you can view your
            <a class="text-gray-800 hover:underline" href="#">recent orders</a>,
            manage your
            <a class="text-gray-800 hover:underline" href="#"
            > billing addresses</a
            >, and
            <a class="text-gray-800 hover:underline" href="#"
            >edit your password and account details</a
            >.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
              v-for="stat in stats"
              :key="stat.name"
              class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:bg-rose-500 logo"
          >
            <div class="flex items-center mb-4">
              <div
                  class="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center"
              >
                <component
                    :is="stat.icon"
                    class="w-6 h-6 text-rose-500 "
                />
              </div>
            </div>
            <h3 class="text-gray-500 text-sm mb-2">{{ stat.name }}</h3>
            <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
          </div>
        </div>

        <!-- Chart Section -->
        <div class="line-chart rounded-xl border border-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Line :data="chartData" :options="chartOptions"/>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.logo:hover {
  transition: ease-in 0.3s;
  h3, p {
    color: white;
  }
}

.line-chart {
  height: 20rem;
}
</style>
