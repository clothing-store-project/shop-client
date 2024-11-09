<script lang="ts" setup>
import {computed, ref} from 'vue'
import {ArrowDown} from '@element-plus/icons-vue'
// import { CartIcon, Logo, LogoutIcon, ProfileIcon, TicketIcon, UserIcon, Wishlist } from '@/assets'
import type {DropdownInstance} from 'element-plus'
// import { useAuthStore } from '@/store/auth.ts'
import {useRouter} from 'vue-router'
// import { toast } from 'vue3-toastify'
// import { useCartStore } from '@/store/cart.ts'
// import { useWishlistStore } from '@/store/wishlist.ts'

const activeIndex = ref('1')
const search = ref('')
const drawer = ref(false)
const profile = ref<DropdownInstance>()
// const authStore = useAuthStore()
// const wishlistStore = useWishlistStore()
const router = useRouter()
const isLogin = ref(false)
// const wishlistCount = computed(() => wishlistStore.getTotal.value)
// // const cartStore = useCartStore()
// const cartCount = computed(() => cartStore.totalCart)

function showClick() {
  if (!profile.value) return
  profile.value.handleOpen()
}

const handleSearch = () => {
  router.push({name: 'book-filter', query: {q: search.value}})
}

async function handleLogout() {
  // try {
  //   await authStore.handleLogout()
  //   await router.push({ name: 'login' })
  //   toast.success('Logout successfully')
  // } catch (error: any) {
  //   toast.error(error)
  // }
}
</script>

<template>
  <el-row class="top-header">
    <el-container>
      <el-row align="middle" justify="end" type="flex">
        <el-col :lg="22" :sm="21" :xs="19" class="slogan">
          <p>Kiai's Culture Sincerity・Sharing・Arigatou・Respect</p>
        </el-col>
        <el-col :lg="2" :sm="3" :xs="5">
          <el-dropdown>
            <span class="el-dropdown-link">
              English
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>Vietnamese</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-container>
  </el-row>
  <el-header class="header-menu">
    <el-menu
        :default-active="activeIndex"
        :ellipsis="false"
        :popper-offset="10"
        active-text-color="#000"
        background-color="transparent"
        class="nav-menu"
        close-on-click-outside
        collapse-transition
        max-width="90rem"
        mode="horizontal"
        text-color="#000"
    >
      <el-image
          :src="Logo"
          alt="Element logo"
          class="logo"
          @click="$router.push({ name: 'home' })"
      />
      <el-row class="link-item">
        <el-menu-item index="1">
          <NuxtLink to="/">Home</NuxtLink>
        </el-menu-item>
        <el-menu-item index="2">
          <NuxtLink to="/">Contact</NuxtLink>
        </el-menu-item>
        <el-menu-item index="3">
          <NuxtLink to="/">About</NuxtLink>
        </el-menu-item>
        <el-menu-item v-if="!isLogin" index="4">
          <NuxtLink to="/">Sign Up</NuxtLink>
        </el-menu-item>
      </el-row>
      <el-row class="action">
        <el-form class="form">
          <el-input v-model="search" placeholder="Search" size="default"/>
          <el-icon @click.prevent="handleSearch">
            <Search/>
          </el-icon>
        </el-form>
        <el-badge
            v-if="isLogin"
            :value="1"
            class="wishlist-info"
            @click="$router.push({ name: 'wishlist' })"
        >
          <el-image :src="Wishlist" alt="Wishlist Icon" class="wishlist-icon"/>
        </el-badge>
        <el-badge
            v-if="isLogin"
            :value="1"
            class="cart-info"
            @click="$router.push({ name: 'cart' })"
        >
          <el-image :src="CartIcon" alt="Cart Icon" class="cart-icon"/>
        </el-badge>
        <el-dropdown v-if="isLogin" ref="profile" class="user-action" trigger="contextmenu">
          <el-image :src="ProfileIcon" alt="Profile Icon" class="profile-icon" @click="showClick"/>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link :to="{ name: 'account.profile' }">
                  <el-image :src="UserIcon" alt="User Icon"/>
                  <span>Manage My Account</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{ name: 'account.ticket' }">
                  <el-image :src="TicketIcon" alt="Ticket Icon"/>
                  <span>My Ticket</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item @click="handleLogout">
                <router-link to="#">
                  <el-image :src="LogoutIcon" alt="Logout Icon"/>
                  <span>Logout</span>
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-row>
    </el-menu>
    <el-button class="toggle-menu" type="primary" @click="drawer = true">
      <el-icon>
        <Fold/>
      </el-icon>
    </el-button>
    <el-drawer v-model="drawer" direction="ltr" size="80%">
      <el-menu
          :default-active="activeIndex"
          :ellipsis="false"
          :popper-offset="16"
          active-text-color="#000"
          background-color="transparent"
          class="nav-menu-mobile"
          close-on-click-outside
          collapse-transition
          mode="vertical"
          text-color="#000"
      >
        <el-image
            :src="Logo"
            alt="Element logo"
            class="logo"
            @click="$router.push({ name: 'home' })"
        />
        <el-row class="menu-mobile">
          <el-form class="form">
            <el-input v-model="search" placeholder="Search" size="default"/>
            <el-icon @click.prevent="handleSearch">
              <Search/>
            </el-icon>
          </el-form>
          <el-menu-item index="1">
            <NuxtLink to="/">Home</NuxtLink>
          </el-menu-item>
          <el-menu-item index="2">
            <NuxtLink to="/">Contact</NuxtLink>
          </el-menu-item>
          <el-menu-item index="3">
            <NuxtLink to="/">About</NuxtLink>
          </el-menu-item>
          <el-menu-item v-if="!isLogin" index="4">
            <NuxtLink to="/">Sign Up</NuxtLink>
          </el-menu-item>
        </el-row>
        <el-row class="action menu-mobile">
          <!--          <el-badge-->
          <!--              v-if="isLogin"-->
          <!--              :value="wishlistCount"-->
          <!--              class="wishlist-info"-->
          <!--              @click="$router.push({ name: 'wishlist' })"-->
          <!--          >-->
          <!--            <el-image :src="Wishlist" alt="Wishlist Icon" class="wishlist-icon"/>-->
          <!--          </el-badge>-->
          <el-badge
              v-if="isLogin"
              :value="1"
              class="cart-info"
              @click="$router.push({ name: 'cart' })"
          >
            <el-icon class="cart-icon">
              <ShoppingTrolley/>
            </el-icon>
          </el-badge>
          <!--          <el-dropdown v-if="isLogin" ref="profile" class="user-action" trigger="contextmenu">-->
          <!--            <el-image-->
          <!--                :src="ProfileIcon"-->
          <!--                alt="Profile Icon"-->
          <!--                class="profile-icon"-->
          <!--                @click="showClick"-->
          <!--            />-->
          <!--            <template #dropdown>-->
          <!--              <el-dropdown-menu>-->
          <!--                <el-dropdown-item>-->
          <!--                  <router-link :to="{ name: 'account.profile' }">-->
          <!--                    <el-image :src="UserIcon" alt="User Icon"/>-->
          <!--                    <span>Manage My Account</span>-->
          <!--                  </router-link>-->
          <!--                </el-dropdown-item>-->
          <!--                <el-dropdown-item>-->
          <!--                  <router-link :to="{ name: 'account.ticket' }">-->
          <!--                    <el-image :src="TicketIcon" alt="Ticket Icon"/>-->
          <!--                    <span>My Ticket</span>-->
          <!--                  </router-link>-->
          <!--                </el-dropdown-item>-->
          <!--                <el-dropdown-item @click="handleLogout">-->
          <!--                  <router-link to="#">-->
          <!--                    <el-image :src="LogoutIcon" alt="Logout Icon"/>-->
          <!--                    <span>Logout</span>-->
          <!--                  </router-link>-->
          <!--                </el-dropdown-item>-->
          <!--              </el-dropdown-menu>-->
          <!--            </template>-->
          <!--          </el-dropdown>-->
        </el-row>
      </el-menu>
    </el-drawer>
  </el-header>
</template>

<style lang="scss">
.top-header {
  background-color: var(--primary-color);
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3125rem;
  padding: 1rem 0;

  .el-container {
    margin: 0 auto;

    .slogan {
      text-align: center;
    }

    .el-row {
      width: 100%;
    }

    .el-dropdown {
      color: var(--Text, #fafafa);
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.3125rem;
      cursor: pointer;

      &:focus,
      &:hover,
      &:active {
        outline: none;
        border: none;
      }
    }
  }
}

.header-menu {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  border-bottom: 1px solid rgba(255, 69, 0, 0.78);
  padding: 0;

  .el-menu--horizontal {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    height: 3rem;
    max-width: 90rem;
    margin: 0 auto;
    gap: 14.5rem;

    .el-image {
      width: 7.375rem;
      height: 1.5rem;
    }

    .el-menu-item {
      color: var(--primary-color-light, #000);
      text-align: center;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      border: none;

      .router-link-exact-active {
        border-bottom: 1px solid var(--primary-color-light, #000);
      }

      a {
        color: var(--primary-color-light);
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;

        &:hover {
          border-bottom: 1px solid var(--primary-color-light, #000);
        }
      }

      &:hover,
      .is-active {
        background-color: transparent;
        border: none;
      }

      &:not(.is-disabled):focus,
      &:not(.is-disabled):hover {
        background-color: transparent;
      }
    }

    .action {
      display: flex;
      align-items: center;
      gap: 1rem;

      .cart-info,
      .wishlist-info {
        margin-bottom: -0.5rem;
      }

      .wishlist-icon,
      .cart-icon,
      .profile-icon {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }

      .form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        border-radius: 0.25rem;
        background: var(--Secondary, #f5f5f5);
        padding: 0.4rem;

        .el-icon {
          cursor: pointer;
          margin: 0 0.5rem;
        }

        .el-input {
          .el-input__wrapper {
            background-color: transparent;
            border: none;
            box-shadow: none;

            &:focus,
            &:hover,
            &.is-focus {
              outline: none;
              border: none;
              box-shadow: none;
            }
          }
        }
      }
    }

    &.el-menu {
      border: none;
    }
  }

  .toggle-menu {
    display: none;
  }
}

.el-dropdown__popper {
  .el-dropdown-menu {
    display: flex;
    width: 15.0625rem;
    padding: 0.75rem 0.625rem;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8125rem;
    border-radius: 0.25rem;
    background-color: rgba(29, 29, 29, 0.28);
    backdrop-filter: blur(75px);

    .el-dropdown-menu__item {
      width: 100%;

      &:not(.is-disabled):hover,
      &:not(.is-disabled):focus {
        background-color: #7988994d;
        color: var(--primary-color-light);
      }

      a {
        display: flex;
        align-items: center;
        gap: 1rem;

        .el-image {
          width: 2rem;
          height: 2rem;
        }

        span {
          color: var(--second-color-light);
          text-align: center;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.3125rem;
        }
      }
    }
  }
}

@media screen and (max-width: 321px) {
  .el-header {
    justify-items: center;
    align-items: center;

    .el-menu--horizontal {
      .el-image {
        margin-right: 8rem;
      }

      .el-row,
      .el-form {
        display: none;
      }
    }

    .toggle-menu {
      display: block;
    }

    .el-button {
      background-color: transparent;
      border: 1px solid var(--primary-color-light);
      border-radius: 0.25rem;
      color: var(--primary-color-light);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      margin: 0 0.5rem;

      &:focus {
        background-color: transparent;
      }
    }

    .el-drawer {
      .menu-mobile {
        flex-direction: column;
        align-items: center;
      }

      .el-drawer__body {
        padding: 0;
      }

      .logo {
        display: flex;
        justify-content: center;

        .el-image__inner {
          width: 8rem;
          margin: 1rem auto;
        }
      }

      .el-menu {
        border: none;

        .form {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          border-radius: 0.25rem;
          background: var(--Secondary, #f5f5f5);
          padding: 0.4rem;

          .el-icon {
            margin: 0 0.5rem;
          }

          .el-input {
            .el-input__wrapper {
              background-color: transparent;
              border: none;
              box-shadow: none;

              &:focus,
              &:hover,
              &.is-focus {
                outline: none;
                border: none;
                box-shadow: none;
              }
            }
          }
        }
      }

      .el-menu-item {
        border: none;

        .router-link-exact-active {
          border-bottom: 1px solid var(--primary-color-light, #000);
        }

        a {
          color: var(--primary-color-light);
          text-align: center;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.5rem;

          &:hover {
            border-bottom: 1px solid var(--primary-color-light, #000);
          }
        }

        &:hover,
        .is-active {
          background-color: transparent;
          border: none;
        }

        &:not(.is-disabled):focus,
        &:not(.is-disabled):hover {
          background-color: transparent;
        }
      }

      .action {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: nowrap;

        .cart-info,
        .wishlist-info {
          margin-bottom: -0.5rem;
        }

        .wishlist-icon,
        .cart-icon,
        .profile-icon {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}

@media screen and (min-width: 321px) and (max-width: 768px) {
  .top-header {
    padding: 0.5rem 0;

    .slogan {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
  .el-header {
    justify-items: center;
    align-items: center;

    .el-menu--horizontal {
      .el-image {
        margin-right: 12.5rem;
      }

      .el-row,
      .el-form {
        display: none;
      }
    }

    .toggle-menu {
      display: block;
    }

    .el-button {
      background-color: transparent;
      border: 1px solid var(--primary-color-light);
      border-radius: 0.25rem;
      color: var(--primary-color-light);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      margin: 0 0.5rem;

      &:focus {
        background-color: transparent;
      }
    }

    .el-drawer {
      .menu-mobile {
        flex-direction: column;
        align-items: center;
      }

      .el-drawer__body {
        padding: 0;
      }

      .logo {
        display: flex;
        justify-content: center;

        .el-image__inner {
          width: 10rem;
          margin: 1rem auto;
        }
      }

      .el-menu {
        border: none;

        .form {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          border-radius: 0.25rem;
          background: var(--Secondary, #f5f5f5);
          padding: 0.4rem;

          .el-icon {
            margin: 0 0.5rem;
          }

          .el-input {
            .el-input__wrapper {
              background-color: transparent;
              border: none;
              box-shadow: none;

              &:focus,
              &:hover,
              &.is-focus {
                outline: none;
                border: none;
                box-shadow: none;
              }
            }
          }
        }
      }

      .el-menu-item {
        border: none;

        .router-link-exact-active {
          border-bottom: 1px solid var(--primary-color-light, #000);
        }

        a {
          color: var(--primary-color-light);
          text-align: center;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.5rem;

          &:hover {
            border-bottom: 1px solid var(--primary-color-light, #000);
          }
        }

        &:hover,
        .is-active {
          background-color: transparent;
          border: none;
        }

        &:not(.is-disabled):focus,
        &:not(.is-disabled):hover {
          background-color: transparent;
        }
      }

      .action {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: nowrap;

        .cart-info,
        .wishlist-info {
          margin-bottom: -0.5rem;
        }

        .wishlist-icon,
        .cart-icon,
        .profile-icon {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .el-header {
    .el-menu--horizontal {
      gap: 7rem;
      margin: 0 1rem;
    }
  }
}
</style>
