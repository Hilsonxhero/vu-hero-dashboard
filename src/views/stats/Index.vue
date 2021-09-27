<template>
<div>
  <v-row>
    <v-col cols="4">
      <v-card>
        <v-list-item>
          <v-list-item-content>
            <v-card-title>فروش کل</v-card-title>
          </v-list-item-content>

          <div class="text--info-ui">780,000,000 ت</div>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <apexchart type="bar" height="200" :options="sellChartOptions" :series="sellSeries"></apexchart>
          </v-list-item-content>
        </v-list-item>


      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card>
        <v-list-item>
          <v-list-item-content>
            <v-card-title>بازدید کل</v-card-title>
          </v-list-item-content>

          <div class="text--warning-ui">125000</div>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <apexchart type="bar" height="200" :options="viewsChartOptions" :series="viewsSeries"></apexchart>
          </v-list-item-content>
        </v-list-item>


      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card>
        <v-list-item>
          <v-list-item-content>
            <v-card-title>سفارشات ثبت شده</v-card-title>
          </v-list-item-content>

          <v-icon class="ml-4 d-none">
            mdi-cart-arrow-right
          </v-icon>
          <div class="text--primary-ui">500</div>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <apexchart type="bar" height="200" :options="ordersChartOptions" :series="ordersSeries"></apexchart>
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

    sellSeries: [{
      name: ' فروش کل',
      data: [44, 55, 57, 56, 61, 58]
    }],
    sellChartOptions: {
      chart: {
        type: 'bar',
        fontFamily: 'yekan-bakh-en',
        rtl: true,
      },
      pattern: {

      },
      colors: ['#7239ea'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          colors: {
            backgroundBarColors: [],
            backgroundBarOpacity: '.1',
            backgroundBarRadius: '20px',
          },

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
        categories: ['فرودین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
      },
      yaxis: {
        show: false,
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

    viewsSeries: [{
      name: ' بازدید کل',
      data: [44, 55, 57, 56, 61, 58]
    }],
    viewsChartOptions: {
      chart: {
        type: 'bar',
        fontFamily: 'yekan-bakh-en',
        rtl: true,
      },
      colors: ['#ffc700'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          colors: {
            backgroundBarColors: [],
            backgroundBarOpacity: '.1',
            backgroundBarRadius: '20px',
          },

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
        categories: ['فرودین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
      },
      yaxis: {
        show: false,
        title: {
          text: ' (بازدید)'
        }
      },
      fill: {
        opacity: .85
      },
    },

    ordersSeries: [{
      name: ' سفارش',
      data: [44, 55, 57, 56, 61, 58]
    }],
    ordersChartOptions: {
      chart: {
        type: 'bar',
        fontFamily: 'yekan-bakh-en',
        rtl: true,
      },
      colors: ['#009ef7'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',

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
        categories: ['فرودین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
      },
      yaxis: {
        show: false,
        title: {
          text: ' (سفارش)'
        }
      },
      fill: {
        opacity: .85,
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
  metaInfo() {
    return {
      title: 'آمار گزارشات',
    }
  },

}
</script>

<style scoped>

</style>
