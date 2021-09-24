<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar-title class="text-h5 font-weight-bold mt-5">ایجاد محصول جدید</v-toolbar-title>

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
                          label="عنوان"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="عنوان لاتین"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="قیمت"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-select
                          :items="categories"
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="دسته بندی"
                          solo
                      ></v-select>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-select
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          :items="categories"
                          label="برند"
                          solo
                      ></v-select>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-select
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          :items="categories"
                          label="گارانتی"
                          solo
                      ></v-select>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-select
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          :items="delivery"
                          label="بازه زمانی ارسال"
                          solo
                      ></v-select>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          label="موجودی انبار"
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
                    <v-col cols="12" lg="12">
                      <v-file-input
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          v-model="files"
                          color="deep-purple accent-4"
                          counter
                          label="گالری تصاویر"
                          multiple
                          placeholder="Select your files"
                          prepend-icon="mdi-paperclip"
                          outlined
                          :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                              v-if="index < 2"
                              color="deep-purple accent-4"
                              dark
                              label
                              small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                              v-else-if="index === 2"
                              class="text-overline grey--text text--darken-3 mx-2"
                          >
        +{{ files.length - 2 }} File(s)
      </span>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" lg="12">
                      <ckeditor :rules="[v => !!v || 'این فیلد الزامی است']" v-model="editorData" :config="editorConfig"></ckeditor>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-combobox
                          :rules="[v => !!v || 'این فیلد الزامی است']"
                          v-model="adv"
                          chips
                          clearable
                          label="نقاط قوت"
                          multiple
                          solo
                      >
                        <template v-slot:selection="{ attrs, item, select, selected }">
                          <v-chip
                              color="success"
                              outlined
                              v-bind="attrs"
                              :input-value="selected"
                              close
                              @click="select"
                              @click:close="removeAdv(item)"
                          >
                            <strong>{{ item }}</strong>&nbsp;
                          </v-chip>
                        </template>
                      </v-combobox>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-combobox
                          v-model="disadv"
                          chips
                          clearable
                          label="نقاط ضعف"
                          multiple
                          solo
                      >
                        <template v-slot:selection="{ attrs, item, select, selected }">
                          <v-chip
                              color="error"
                              outlined
                              v-bind="attrs"
                              :input-value="selected"
                              close
                              @click="select"
                              @click:close="removeDisAdv(item)"
                          >
                            <strong>{{ item }}</strong>&nbsp;
                          </v-chip>
                        </template>
                      </v-combobox>
                    </v-col>
                    <v-col cols="12" lg="12">
                      <v-combobox
                          v-model="tags"
                          chips
                          clearable
                          label="برچسب ها"
                          multiple
                          solo
                      >
                        <template v-slot:selection="{ attrs, item, select, selected }">
                          <v-chip
                              v-bind="attrs"
                              :input-value="selected"
                              close
                              @click="select"
                              @click:close="remove(item)"
                          >
                            <strong>{{ item }}</strong>&nbsp;
                          </v-chip>
                        </template>
                      </v-combobox>
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
    editorData: '<p>توضیحات محصول</p>',
    editorConfig: {
      language: 'fa',
      rtl: true,
    },
    breadcrumbs: [
      {
        text: 'داشبورد',
        disabled: false,
        href: '/dashboard',
      },
      {
        text: 'محصولات',
        disabled: false,
        href: '/dashboard/products',
      },
      {
        text: 'ایجاد محصول',
        disabled: true,
      }
    ],
    categories: ['لوزام دیجیتال', 'لوزام خانگی', 'مد و پوشاک', 'ابزار آلات'],
    brands: ['سامسونگ', 'شیائومی', 'اپل', 'سونی'],
    guarantee: ['اصالت و سلامت فیزیکی کالا', 'گرین', 'پارسیان', 'هخامنش گستر'],
    delivery: ['1 روز', '2 روز', '3 روز', '4 روز'],
    files: [],
    tags: [],
    adv: [],
    disadv: [],
    items: [],
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
    remove(item) {
      this.tags.splice(this.tags.indexOf(item), 1)
      this.tags = [...this.tags]
    },
    removeAdv(item) {
      this.adv.splice(this.adv.indexOf(item), 1)
      this.adv = [...this.adv]
    },
    removeDisAdv(item) {
      this.disadv.splice(this.disadv.indexOf(item), 1)
      this.disadv = [...this.disadv]
    },
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style scoped>

</style>
