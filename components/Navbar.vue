<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <NavbarMobileMenuButton :toggleMenu="toggleMenu" :isHiddenNav="isHiddenNav" />
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink :to="{ path: '/' }">
              <img class="block lg:hidden h-8 w-auto" src="~/assets/logo.svg" alt="Logo" />
              <img
                class="hidden lg:block h-8 w-auto"
                src="~/assets/logo-text.svg"
                alt="Logo with text"
              />
            </NuxtLink>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <NuxtLink
                v-for="value in navMenuValues"
                :key="value"
                :to="{ path: `/${value.toLowerCase()}` }"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >{{ value }}</NuxtLink
              >
            </div>
          </div>
        </div>
        <NavbarUserInfo
          v-if="this.$auth.loggedIn"
          :toggleMenu="toggleMenu"
          :userMenuValues="userMenuValues"
          :isHiddenUser="isHiddenUser"
        />
        <NavbarAuthButtons v-else />
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <!-- class="hidden sm:hidden" -->
    <div :class="isHiddenNav ? 'hidden sm:hidden' : 'block'">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="value in navMenuValues"
          :key="value"
          :to="value.toLowerCase()"
          class="text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
          >{{ value }}</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isHiddenUser: true,
      isHiddenNav: true,
      navMenuValues: ['Dashboard', 'Team', 'Projects', 'Calendar'],
      userMenuValues: ['Mi perfil', 'Ajustes'],
    }
  },
  methods: {
    toggleMenu(type) {
      if (type === 'user') {
        this.isHiddenUser = !this.isHiddenUser
      } else if (type === 'nav') {
        this.isHiddenNav = !this.isHiddenNav
      }
    },
    toggleActiveMenu() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style></style>
