<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">دسته بندی</v-toolbar-title>

        <v-breadcrumbs
            :items="breadcrumbs"
            large
        ></v-breadcrumbs>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12" lg="8">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>
                دسته بندی ها
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
                  {{ ` از ${pageStart}-${pageStop} -- کل کاربران (${itemsLength})` }}
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
      <v-col cols="12" lg="4">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>دسته بندی جدید</v-card-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
              >
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          v-model="formData.title"
                          :rules="titleRules"
                          counter
                          maxlength="20"
                          label="عنوان"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          v-model="formData.slug"
                          class="pt-0"
                          counter
                          maxlength="20"
                          :rules="slugRules"
                          label="عنوان لاتین"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        class="d-flex"
                        cols="12"
                    >
                      <v-select class="mt-5"
                                v-model="formData.parent"
                                :items="items"
                                :rules="[v => !!v || 'این فیلد الزامی است']"
                                label="انتخاب دسته پدر"
                                dense
                                required
                      ></v-select>
                    </v-col>
                    <v-col
                        class="d-flex"
                        cols="12"
                    >
                      <v-btn
                          class="ma-2"
                          outlined
                          color="primary"
                          block
                          type="submit"
                          :disabled="!valid"
                          @click="validate"
                      >
                        ایجاد
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
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
    valid: true,
    titleRules: [
      v => !!v || 'این فیلد الزامی است',
      v => (v && v.length >= 3) || 'عنوان نباید کمتر از 3 کارکتر باشد',
    ],
    slugRules: [
      v => !!v || 'این فیلد الزامی است',
      v => (v && v.length >= 3) || 'عنوان لاتین نباید کمتر از 3 کارکتر باشد',
    ],
    formData: [
      {title: '', slug: '', parent: null}
    ],
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    breadcrumbs: [
      {
        text: 'داشبورد',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'دسته بندی ها',
        disabled: true,
        href: 'breadcrumbs_dashboard',
      }
    ],
    categoriesHeader: [
      {text: 'عنوان', value: 'title'},
      {text: 'نام لاتین', value: 'slug'},
      {text: 'دسته پدر', value: 'parent'},
      {text: 'عملیات', value: 'actions'},
    ],
    categories: [
      {
        title: 'کالای دیجیتال',
        slug: 'electronic-devices',
        parent: 'اصلی',
      },
      {
        title: 'کالای دیجیتال',
        slug: 'electronic-devices',
        parent: 'اصلی',
      },
      {
        title: 'کالای دیجیتال',
        slug: 'electronic-devices',
        parent: 'اصلی',
      },
      {
        title: 'کالای دیجیتال',
        slug: 'electronic-devices',
        parent: 'اصلی',
      },
    ],
    search: ''
  }),
  methods: {
    required(value) {
      return !!value || 'این فیلد الزامی است'
    },
    validate () {
      this.$refs.form.validate()
    },
  },
}
</script>

<style scoped>

</style>
