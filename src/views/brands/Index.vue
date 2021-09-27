<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-space-between align-center">
        <div>
          <v-toolbar-title class="text-h5 font-weight-bold mt-5">برند ها</v-toolbar-title>
          <v-breadcrumbs
              :items="breadcrumbs"
              large
          ></v-breadcrumbs>
        </div>
        <div>
          <v-btn
              color="primary"
              router
              :to="{name : 'guarantee-create'}"
              class="ma-2 white--text"
          >
            ایجاد
            <v-icon
                right
                dark
            >
              mdi-plus
            </v-icon>
          </v-btn>
        </div>

      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="6">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>
                برند ها
                <v-spacer></v-spacer>
                <v-text-field
                    class="pt-0"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="جستجو"
                    single-line
                    hide-details
                ></v-text-field>
              </v-card-title>

            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-data-table
                  :search="search"
                  :headers="guaranteeHeader"
                  :items="guarantee"
                  no-results-text="نتیجه ای یافت نشد"
              >
                <template v-slot:footer.page-text="{pageStart,pageStop,itemsLength}">
                  {{ ` از ${pageStart}-${pageStop} -- تعداد کل (${itemsLength})` }}
                </template>
                <template v-slot:item.image="{ item }">


                  <v-img width="90" :src="item.image"></v-img>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-btn
                      class="mr-2"
                      outlined
                      fab
                      color="primary"
                      x-small
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>

                  <v-btn
                      class="mr-2"
                      outlined
                      fab
                      color="error"
                      x-small
                  >
                    <v-icon> mdi-delete</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    breadcrumbs: [
      {
        text: 'داشبورد',
        disabled: false,
        href: '/dashboard',
      },
      {
        text: 'برند ها',
        disabled: true,
      }
    ],
    guaranteeHeader: [
      {text: 'تصویر', value: 'image'},
      {text: 'نام', value: 'title'},
      {text: ' نام لاتین', value: 'slug'},
    ],
    guarantee: [
      {
        image: require('../../assets/images/brands/lg-logo.png'),
        title: 'ال جی',
        slug: 'lg',
      },
      {
        image: require('../../assets/images/brands/samsung-logo.png'),
        title: 'سامسونگ',
        slug: 'samsung',
      },
    ],
    search: ''
  }),
  metaInfo() {
    return {
      title: 'برند ها',
    }
  },
}
</script>

<style scoped>

</style>
