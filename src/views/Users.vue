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
      <v-col cols="12">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>
                کاربران
                <v-spacer></v-spacer>
                <v-text-field
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
                  :headers="usersHeader"
                  :items="users"
              >
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
                  <v-chip v-else
                          color="error"
                          outlined
                  >
                    احراز هویت نشده
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
  name: "Users",
  data: () => ({
    items: [
      {
        text: 'داشبورد',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'کاربران',
        disabled: true,
        href: 'breadcrumbs_dashboard',
      }
    ],

    usersHeader: [
      {text: '#', value: 'id'},
      {text: 'نام کاربری', value: 'username'},
      {text: 'شماره تماس', value: 'phone'},
      {text: 'ایمیل', value: 'email'},
      {text: 'وضعیت', value: 'status'},
      {text: 'تاریخ ثبت نام', value: 'date'},
      {text: 'عملیات', value: 'actions'},
    ],
    users: [
      {
        id: '1214',
        username: 'Amir',
        phone: '09334558888',
        email: 'amir4030@gmail.com',
        status: 1,
        date: '10 اریبهشت 00 ساعت 11:45',
      },
      {
        id: '1454',
        username: 'AliReza',
        phone: '09334558888',
        email: 'amir4030@gmail.com',
        status: 0,
        date: '14 اسفند 00 ساعت 11:41',
      },
    ],
    search: ''
  }),
  metaInfo() {
    return {
      title: 'کاربران',
    }
  },
}
</script>

<style scoped>

</style>
