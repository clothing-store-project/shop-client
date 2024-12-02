<script setup lang="ts">
const categories = [
  {
    id: 'nu',
    title: 'NỮ',
    image: 'https://media.canifa.com/Simiconnector/nu_spmoi-04Oct.webp',
    link: '#'
  },
  {
    id: 'nam',
    title: 'NAM',
    image: 'https://media.canifa.com/Simiconnector/nam_spmoi-04Oct.webp',
    link: '#'
  },
  {
    id: 'be-gai',
    title: 'BÉ GÁI',
    image: 'https://media.canifa.com/Simiconnector/girl_spmoi-04Oct.webp',
    link: '#'
  },
  {
    id: 'be-trai',
    title: 'BÉ TRAI',
    image: 'https://media.canifa.com/Simiconnector/boy_spmoi-04Oct.webp',
    link: '#'
  }
]
const containerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (containerRef.value) {
    const container = containerRef.value
    let isDown = false
    let startX: number
    let scrollLeft: number

    container.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true
      container.classList.add('active')
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
    })

    container.addEventListener('mouseleave', () => {
      isDown = false
      container.classList.remove('active')
    })

    container.addEventListener('mouseup', () => {
      isDown = false
      container.classList.remove('active')
    })

    container.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 4
      container.scrollLeft = scrollLeft - walk
    })
  }
})
</script>

<template>
  <section class="max-w-screen-2xl mx-auto px-4 py-6 md:py-12 overflow-hidden">
    <div
        ref="containerRef"
        class="grid  grid-flow-col md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible snap-x md:snap-none scrollbar-hide"
    >
      <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="category.link"
          class="group relative overflow-hidden rounded-lg aspect-[3/4] flex-shrink-0 w-[35vw] sm:w-[45vw] md:w-auto snap-center"
      >
        <img
            :src="category.image"
            :alt="category.title"
            class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </NuxtLink>
    </div>
  </section>
</template>

