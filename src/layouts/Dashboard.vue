<template>
  <div>
    <v-app light>
      <v-navigation-drawer
          v-model="drawer"
          :mini-variant="miniVariant"
          fixed
          app
          right
      >
        <router-link :to="{name : 'Home'}">
          <v-img width="120" class="mx-auto my-3" :src="require('../assets/logo-default.svg')"/>
        </router-link>

        <v-list class="d-none">
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"/>
            </v-list-item-content>
          </v-list-item>
        </v-list>


        <v-list>
          <v-list-group
              v-for="item in navItems"
              :key="item.items.to"
              v-model="item.items.active"
              :prepend-icon="item.action"
              no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="(child,index) in item.items"
                :key="index"
                router
                exact
                :to="{name : child.to}"
            >
              <v-list-item-content>
                <router-link :to="{name : child.to}">
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </router-link>

              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
          :clipped-left="clipped"
          fixed
          app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
        <v-btn
            icon
            @click.stop="miniVariant = !miniVariant"
        >
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            icon
            @click.stop="fixed = !fixed"
        >
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <v-container>
          <router-view/>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'داشبورد',
          to: '/dashboard'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'کاربران',
          to: '/dashboard/users',
          children: [
            {icon: 'mdi-chart-bubble', title: 'افزودن محصول جدید', to: '/dashboard/users'}
          ]
        },
        {
          icon: 'mdi-products',
          title: 'محصولات',
          to: '/dashboard/users',
          children: [
            {icon: 'mdi-chart-bubble', title: 'افزودن محصول جدید', to: '/dashboard/users'}
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',


      navItems: [
        {
          action: 'mdi-view-dashboard',
          items: [{title: 'داشبورد', to: 'Home', active: true}],
          title: 'داشبورد',
        },
        {
          action: 'mdi-account-group',
          items: [{title: 'لیست کاربران', to: 'Users', active: true}],
          title: 'کاربران',
        },
        {
          action: 'mdi-shape-outline',
          items: [
            {title: 'لیست دسته بندی ها', to: 'category-index'},
          ],
          title: 'دسته بندی ها',
        },
        {
          action: 'mdi-storefront-outline',
          items: [
            {title: 'لیست محصولات', to: 'products-index'},
            {title: 'افزودن محصول', to: 'products-create'},
            {title: 'پیشنهاد شگفت انگیز', to: 'product-incredible'},
            {title: 'کد تخفیف', to: 'product-discount'},
            {title: 'شیوه ارسال', to: 'product-shipment'},
            {title: 'گارانتی ها', to: 'product-warrenty'},
            {title: 'برندها', to: 'product-brand'},
            {title: 'متغییر ها', to: 'product-variant'},
            {title: 'رضایت قیمت', to: 'product-price-survey'},
          ],
          title: 'محصولات',
        },
        {
          action: 'mdi-basket-outline',
          items: [
            {title: 'لیست  سفارشات', to: 'orders'},
          ],
          title: 'سفارشات',
        },
        {
          action: 'mdi-comment-multiple-outline',
          items: [
            {title: 'لیست  نظرات', to: 'comments'},
          ],
          title: 'نظرات',
        },
        {
          action: 'mdi-poll',
          items: [
            {title: 'لیست  گزارشات', to: 'stats'},
          ],
          title: 'گزارشات',
        },
        {
          action: 'mdi-file-document-multiple-outline',
          items: [
            {title: 'لیست  صفحات', to: 'pages'},
          ],
          title: 'صفحات',
        },
        {
          action: 'mdi-shield-lock-outline',
          items: [
            {title: 'لیست  سطوح دسترسی', to: 'permissions'},
          ],
          title: 'سطوح دسترسی',
        },
        {
          action: 'mdi-credit-card-multiple-outline',
          items: [
            {title: 'لیست درگاه پرداخت', to: 'permissions'},
          ],
          title: 'درگاه پرداخت',
        },
        {
          action: 'mdi-message-processing',
          items: [
            {title: 'سرویس دهنده ها', to: 'permissions'},
            {title: 'تنظیمات ارسال', to: 'permissions'},
          ],
          title: ' سرویس پیامکی',
        },
        {
          action: 'mdi-hammer-screwdriver',
          items: [
            {title: 'نوار اعلان', to: 'permissions'},
            {title: 'ارسال اعلان', to: 'permissions'},
          ],
          title: 'ابزار ها',
        },
        {
          action: 'mdi-cog',
          items: [
            {title: 'تنظیمات سایت', to: 'permissions'},
          ],
          title: 'تنظیمات',
        },


      ],
    }
  },
}
</script>
