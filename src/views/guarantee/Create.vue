<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">ایجاد گارانتی جدید</v-toolbar-title>

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
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="نام"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="نام لاتین"
                          solo
                      ></v-text-field>
                    </v-col>


                    <v-col cols="12" lg="12">
                      <v-btn
                          block
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
    radioGroup: 1,

    breadcrumbs: [
      {
        text: 'داشبورد',
        disabled: false,
        href: '/dashboard',
      },
      {
        text: 'گاارنتی ها',
        disabled: false,
        href: '/dashboard/guarantee',
      },
      {
        text: 'ایجاد گارانتی جدید',
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
      title: 'ایجاد گارانتی جدید',
    }
  },
}
</script>

<style scoped>

</style>
