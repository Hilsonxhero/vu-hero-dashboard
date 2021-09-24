<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">داشبورد</v-toolbar-title>

        <v-breadcrumbs
            :items="items"
            large
        ></v-breadcrumbs>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card
            class="mx-auto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 my-3">
                25,000,000 تومان
              </v-list-item-title>
              <v-list-item-subtitle class="mb-3">کل فروش 30 روز گذشته</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
            class="mx-auto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 my-3">
                25,000,000 تومان
              </v-list-item-title>
              <v-list-item-subtitle class="mb-3">کل فروش 30 روز گذشته</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
            class="mx-auto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 my-3">
                25,000,000 تومان
              </v-list-item-title>
              <v-list-item-subtitle class="mb-3">کل فروش 30 روز گذشته</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
            class="mx-auto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 my-3">
                25,000,000 تومان
              </v-list-item-title>
              <v-list-item-subtitle class="mb-3">کل فروش 30 روز گذشته</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="4">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>سفارشات</v-card-title>
            </v-list-item-content>

            <v-icon class="ml-4">
              mdi-basket
            </v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <apexchart type="area" height="200" :options="chartOptions" :series="series"></apexchart>
            </v-list-item-content>
          </v-list-item>


        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>سفارشات</v-card-title>
            </v-list-item-content>

            <v-icon class="ml-4">
              mdi-basket
            </v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <apexchart type="area" height="200" :options="chartOptions" :series="series"></apexchart>
            </v-list-item-content>
          </v-list-item>


        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>سفارشات</v-card-title>
            </v-list-item-content>

            <v-icon class="ml-4">
              mdi-basket
            </v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <apexchart type="area" height="200" :options="chartOptions" :series="series"></apexchart>
            </v-list-item-content>
          </v-list-item>


        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>فروش محصولات</v-card-title>
            </v-list-item-content>

            <v-icon class="ml-4">
              mdi-basket
            </v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <apexchart type="bar" height="350" :options="chartOptions2" :series="series2"></apexchart>
            </v-list-item-content>
          </v-list-item>


        </v-card>
      </v-col>
      <v-col cols="7">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>سفارشات اخیر</v-card-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-data-table
                  :headers="orderHeaders"
                  :items="orders"
              ></v-data-table>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>نظر مشتریان</v-card-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-data-table
                  :headers="commentsHeaders"
                  :items="comments"
              ></v-data-table>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data: () => ({

    series: [{
      name: 'درآمد کل',
      data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47]

    }],
    chartOptions: {
      chart: {
        height: 150,
        type: 'area',
        fontFamily: 'yekan-bakh-en',
        rtl: true,
        toolbar: false
      },
      colors: ['#00a3ff'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
      },
      yaxis: {
        labels: {
          show: false,
          enabled: false,
        },
      },
      xaxis: {
        labels: {},
        type: 'datetime',
        categories: ["1390", "1391", "1392", "1393", "1394", "1395", "1396", "1397", "1398", "1399"]
      },
      tooltip: {

        x: {
          format: 'yyyy',

        },
        y: {
          formatter: function (val) {
            return new Intl.NumberFormat().format(val) + " تومان"
          }
        }
      },
    },

    series2: [{
      name: ' دیجیتال',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'آرایشی و بهداشتی',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'مد و پوشاک',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chartOptions2: {
      chart: {
        type: 'bar',
        height: 350,
        fontFamily: 'yekan-bakh-en',
        rtl: true,
      },
      colors: ['#2481EA', '#71FACA', '#8090BC'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['فرودین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
      },
      yaxis: {
        title: {
          text: ' (فروش)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " فروش"
          }
        }
      }
    },

    items: [
      {
        text: 'داشبورد',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      }
    ],


    search: '',
    orderHeaders: [
      {text: 'شماره سفارش', value: 'title'},
      {text: 'قیمت', value: 'price'},
      {text: 'روش ارسال', value: 'send'},
      {text: 'تاریخ ثبت', value: 'date'},
      {text: 'وضعیت', value: 'status'},
    ],
    orders: [
      {
        title: 'DNC-13358507',
        price: '250000 تومان',
        send: 'پست پیشتاز',
        date: '10 اریبهشت 00 ساعت 11:45',
        status: 'در حال بررسی',
      },
      {
        title: 'DNC-13358507',
        price: '250000 تومان',
        send: 'پست پیشتاز',
        date: '10 اریبهشت 00 ساعت 11:45',
        status: 'در حال بررسی',
      },
      {
        title: 'DNC-13358507',
        price: '250000 تومان',
        send: 'پست پیشتاز',
        date: '10 اریبهشت 00 ساعت 11:45',
        status: 'در حال بررسی',
      },
    ],

    commentsHeaders: [
      {text: 'کاربر', value: 'user'},
      {text: 'عنوان', value: 'title'},
      {text: 'محصول', value: 'product'},
    ],

    comments: [
      {
        user: 'علی احمدی',
        title: 'عالیه این گوشی',
        product: 'poco m3',
      },
    ],
  }),

  components: {},
}
</script>
