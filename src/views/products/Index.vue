<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">محصولات</v-toolbar-title>

        <v-breadcrumbs
            :items="breadcrumbs"
            large
        ></v-breadcrumbs>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>
                محصولات
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
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'محصولات',
        disabled: true,
        href: 'breadcrumbs_dashboard',
      }
    ],
    categoriesHeader: [
      {text: 'عنوان', value: 'title'},
      {text: 'دسته بندی', value: 'category'},
      {text: 'قیمت', value: 'price'},
      {text: 'بازدید', value: 'view'},
      {text: 'فروش', value: 'sell'},
      {text: 'موجودی', value: 'count'},
      {text: 'وضعیت', value: 'status'},
      {text: 'عملیات', value: 'actions'},
    ],
    categories: [
      {
        title: 'گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG ',
        category: 'کالای دیجیتال',
        price: '6,700,000',
        view: '1254',
        sell: '850',
        count: '1500',
        status: 1,
      },
      {
        title: 'گوشی موبایل اپل مدل iPhone 12 A2404 دو سیم‌ کارت ظرفیت 128 گیگابایت',
        category: 'کالای دیجیتال',
        price: '24,700,000',
        view: '740',
        sell: '1000',
        count: '5000',
        status: 2,
      },
      {
        title: 'گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/D',
        category: 'کالای دیجیتال',
        price: '6,500,000',
        view: '7000',
        sell: '650',
        count: '140',
        status: 3,
      },
    ],
    search: ''
  })
}
</script>

<style scoped>

</style>
