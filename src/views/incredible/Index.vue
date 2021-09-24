<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-space-between align-center">
        <div>
          <v-toolbar-title class="text-h5 font-weight-bold mt-5">محصولات شگفت انگیز</v-toolbar-title>
          <v-breadcrumbs
              :items="breadcrumbs"
              large
          ></v-breadcrumbs>
        </div>
        <div>
          <v-btn
              color="primary"
              router
              :to="{name : 'products-index'}"
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
      <v-col cols="12">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>
                محصولات شگفت انگیز
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
                  :headers="categoriesHeader"
                  :items="categories"
                  no-results-text="نتیجه ای یافت نشد"
              >
                <template v-slot:footer.page-text="{pageStart,pageStop,itemsLength}">
                  {{ ` از ${pageStart}-${pageStop} -- تعداد کل (${itemsLength})` }}
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

                <template v-slot:item.status="{ item }">
                  <v-chip v-if="item.status === 1"
                          color="success"
                          dark
                          outlined
                  >
                    فعال
                  </v-chip>
                  <v-chip v-else-if="item.status === 2"
                          color="error"
                          outlined
                  >
                    غیرفعال
                  </v-chip>
                  <v-chip v-else-if="item.status === 3"
                          outlined
                  >
                    قفل شده
                  </v-chip>
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
        text: 'محصولات',
        disabled: false,
        href: '/products',
      },
      {
        text: 'محصولات شگفت انگیز',
        disabled: true,
        href: '/incredible',
      }
    ],
    categoriesHeader: [
      {text: 'محصول', value: 'product'},
      {text: 'درصد تخفیف', value: 'percent'},
      {text: 'زمان اتمام', value: 'date'},
      {text: 'عملیات', value: 'actions'},
    ],
    categories: [
      {
        product: 'گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG ',
        percent: '10%',
        date: 'به اتمام رسیده',
      },
    ],
    search: ''
  })
}
</script>

<style scoped>

</style>
