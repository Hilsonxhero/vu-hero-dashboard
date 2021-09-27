<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">نظر مشتریان</v-toolbar-title>

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
                نظرات
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
                  :items="comments"
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
                    تایید شده
                  </v-chip>
                  <v-chip v-else-if="item.status === 2"
                          outlined
                          color="error"
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
        text: 'نظر مشتریان',
        disabled: true,
        href: '/dashboard/comments',
      }
    ],
    header: [
      {text: 'کاربر', value: 'user'},
      {text: 'عنوان', value: 'title'},
      {text: 'محصول', value: 'product'},
      {text: 'تاریخ ثبت', value: 'date'},
      {text: 'وضعیت', value: 'status'},
      {text: 'عملیات', value: 'actions'},
    ],
    comments: [
      {
        id: '12',
        user: 'امیر ارسلان',
        title: 'سرعت خوبی داره',
        product: 'گوشی شیائومی poco x3 pro',
        date: '12 مهر 1400',
        status: 2,
      },
    ],
    search: ''
  }),
  metaInfo() {
    return {
      title: 'نظرات کاربران',
    }
  },
}
</script>

<style scoped>

</style>
