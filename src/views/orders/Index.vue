<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">سفارشات</v-toolbar-title>

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
                سفارشات
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
                  :headers="header"
                  :items="orders"
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
                      router
                      :to="{name : 'orders-edit',params : {id : 2}}"
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
                          color="error"
                          dark
                          outlined
                  >
                    پرداخت نا موفق
                  </v-chip>
                  <v-chip v-else-if="item.status === 2"
                          outlined
                          color="secondary"
                  >
                    در صف بررسی
                  </v-chip>
                  <v-chip v-else-if="item.status === 3"
                          outlined
                  >
                    تایید سفارش
                  </v-chip>
                  <v-chip v-else-if="item.status === 4"
                          outlined
                  >
                    آماده سازی سفارش
                  </v-chip>
                  <v-chip v-else-if="item.status === 5"
                          outlined
                  >
                    خروج از مرکز پردازش
                  </v-chip>
                  <v-chip v-else-if="item.status === 6"
                          outlined
                  >
                    تحویل به پست
                  </v-chip>
                  <v-chip v-else-if="item.status === 7"
                          outlined
                  >
                    تحویل مرسوله به مشتری
                  </v-chip>
                  <v-chip v-else-if="item.status === 8"
                          outlined
                          color="success"
                  >
                    تایید نشده
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
        text: 'سفارشات',
        disabled: true,
        href: '/dashboard/orders',
      }
    ],
    header: [
      {text: 'شماره سفارش', value: 'id'},
      {text: 'قیمت', value: 'price'},
      {text: 'روش ارسال', value: 'shipment'},
      {text: 'تاریخ ثبت', value: 'date'},
      {text: 'وضعیت', value: 'status'},
      {text: 'عملیات', value: 'actions'},
    ],
    orders: [
      {
        id: 'DKR-1454514',
        price: '7,400,000',
        shipment: 'پیشتاز',
        date: '12 مهر 1400',
        status: 1,
      },
      {
        id: 'DKR-1451314',
        price: '7,400,000',
        shipment: 'پیشتاز',
        date: '12 مهر 1400',
        status: 2,
      },
      {
        id: 'DKR-1459314',
        price: '7,400,000',
        shipment: 'پیشتاز',
        date: '12 مهر 1400',
        status: 8,
      },
    ],
    search: ''
  }),
  metaInfo() {
    return {
      title: 'سفارشات',
    }
  },
}
</script>

<style scoped>

</style>
