<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">ایجاد کد تخفیف جدید</v-toolbar-title>

        <v-breadcrumbs
            :items="breadcrumbs"
            large
        ></v-breadcrumbs>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>

              </v-card-title>
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
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="کد تخفیف"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="تاریخ انقضا"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          solo
                          label="تخفیف"
                          value="10.00"
                          prefix="%"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="سقف خرید"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="تعداد قابل استفاده"
                          solo
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="12">
                      <v-btn
                          class=""
                          outlined
                          color="primary"
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
  name: "Create",
  data: () => ({
    valid: true,

    breadcrumbs: [
      {
        text: 'داشبورد',
        disabled: false,
        href: '/dashboard',
      },
      {
        text: 'ایجاد کد تخفیف',
        disabled: true,
      }
    ],

    titleRules: [
      v => !!v || 'این فیلد الزامی است',
      v => (v && v.length >= 3) || 'عنوان نباید کمتر از 3 کارکتر باشد',
    ],
    slugRules: [
      v => !!v || 'این فیلد الزامی است',
      v => (v && v.length >= 3) || 'عنوان لاتین نباید کمتر از 3 کارکتر باشد',
    ],
    priceRules: [
      v => !!v || 'این فیلد الزامی است',
    ],
    categoryRules: [
      v => !!v || 'این فیلد الزامی است',
      v => (v && v.length >= 3) || 'عنوان لاتین نباید کمتر از 3 کارکتر باشد',
    ],

  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
  metaInfo() {
    return {
      title: 'ایجاد تخفیف',
    }
  },
}
</script>

<style scoped>

</style>
