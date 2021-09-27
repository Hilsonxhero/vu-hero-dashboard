<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">سفارش DKR-1454514</v-toolbar-title>

        <v-breadcrumbs
            :items="breadcrumbs"
            large
        ></v-breadcrumbs>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col cols="12" md="6">
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">شماره سفارش</v-card-text>
                  <v-card-subtitle>DKR-1454514</v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">تاریخ ثبت</v-card-text>
                  <v-card-subtitle>10 اسفند 1400 ساعت 1:50</v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">نام مشتری</v-card-text>
                  <v-card-subtitle>امیر ارسلان</v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">اطلاعات دریافت سفارش</v-card-text>
                  <v-card-text>آدرس : تهران میدان تجریش خیابان ولیعصر پ 70</v-card-text>
                  <v-card-text>شماره تماس : 09334049898</v-card-text>
                  <v-card-text>کد پستی : 1254798924</v-card-text>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">روش ارسال</v-card-text>
                  <v-card-subtitle>پست پیشتاز</v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">کد پرداخت</v-card-text>
                  <v-card-subtitle>5456452</v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">روش پرداخت</v-card-text>
                  <v-card-subtitle>پرداخت درب منزل</v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="6">
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">قیمت کل سفارش</v-card-text>
                  <v-card-subtitle>7,400,254</v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">محصولات</v-card-text>
                  <v-list>
                    <v-list-item>گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG</v-list-item>
                    <v-list-item>گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت ظرفیت 128 گیگابایت
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-card-text class="font-weight-bold">وضعیت سفارش</v-card-text>
                  <v-col cols="6">
                    <v-select
                        v-model="select"
                        :items="statuses"
                        item-text="state"
                        item-value="abbr"
                        label="انتخاب وضعیت سفارش"
                        solo
                    ></v-select>
                  </v-col>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mb-4">
                <v-list-item-content>
                  <v-card-actions class="">
                    <v-btn
                        class="ml-3"
                        color="success"
                        large
                    >
                      دریافت فاکتور
                    </v-btn>
                    <v-btn
                        color="primary"
                        large
                        @click="submit"
                    >
                      ویرایش
                    </v-btn>
                  </v-card-actions>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>




        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data: () => ({
    snackbar: false,
    text: `Hello, I'm a snackbar`,
    breadcrumbs: [
      {
        text: 'داشبورد',
        disabled: false,
        href: '/dashboard',
      },
      {
        text: 'سفارشات',
        disabled: false,
        href: '/dashboard/orders',
      },
      {
        text: 'ویرایش سفارش',
        disabled: true,
      }
    ],
    select: {state: 'در صف بررسی', abbr: '1'},
    statuses: [
      {state: 'پرداخت نا موفق', abbr: '0'},
      {state: 'در صف بررسی', abbr: '1'},
      {state: 'تایید سفارش', abbr: '2'},
      {state: 'آماده سازی سفارش', abbr: '3'},
      {state: 'خروج از مرکز پرداش', abbr: '4'},
      {state: 'تحویل به پست', abbr: '5'},
      {state: 'تحویل مرسوله به مشتری', abbr: '6'},
    ],
  }),
  methods : {
    submit(){

      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'عملیات با موفقیت انجام شد'
      })
      // this.$router.push({name : 'orders'})
    }
  },
  metaInfo() {
    return {
      title: 'ویرایش سفارش',
    }
  },

}
</script>

<style scoped>

</style>
