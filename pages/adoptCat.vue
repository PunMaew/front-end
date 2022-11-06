<template>
  <section>
    <punmaew-banner :color="true" :ordersm="false" class="mt-0">
      <template slot="img-banner">
        <img src="@/assets/imgs/banner.png" alt="" />
      </template>
      <template slot="title-banner">จับคู่แมวตัวโปรดของคุณ</template>
      <template slot="content-banner">
        <div>
          <p class="text-center text-sm-left desc-banner mb-0">
            ค้นหาแมวที่ต้องการช่วยเหลือให้ตรงใจคุณ
          </p>

          <base-button
            @click="goToMatching"
            :fillSearch="true"
            class="d-none d-sm-flex mt-4 btn-banner"
          >
            <img src="@/assets/imgs/icon-search.svg" alt="" />
            เริ่มค้นหาแมวในอุดมคติ
          </base-button>
        </div>
      </template>
      <template slot="details-other">
        <v-col
          cols="10"
          align-self="center"
          class="pt-0 d-sm-none d-md-none d-lg-none d-xl-none"
        >
          <base-button @click="goToMatching" :fillSearch="true">
            <img src="@/assets/imgs/icon-search.svg" alt="" />
            เริ่มค้นหาแมวในอุดมคติ
          </base-button>
        </v-col>
      </template>
    </punmaew-banner>

    <div class="mt-6">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" align-self="center">
            <v-row class="d-md-none d-lg-none d-xl-none">
              <v-col cols="12" align-self="center">
                <h2>รับเลี้ยงแมว</h2>
              </v-col>
              <v-col cols="12" align-self="center">
                <div>
                  <template>
                    <v-row align-self="center" class="gap-drop-down">
                      <v-col cols="6">
                        <!--  -->
                        <div @click="sheetMobile = true" class="filter-by">
                          <div>ตัวกรอง</div>
                          <i class="fi fi-rr-settings-sliders"></i>
                        </div>
                        <v-bottom-sheet v-model="sheetMobile" persistent>
                          <v-sheet>
                            <v-container class="set-sheet">
                              <div
                                @click="sheetMobile = !sheetMobile"
                                class="cross-circle"
                              >
                                <i class="fi fi-rr-cross-circle"></i>
                              </div>
                              <div class="filter-sheet">
                                <div class="justify-space-between d-flex">
                                  <p class="mb-2 ml-3"><b>ค้นหาจากพิกัด</b></p>
                                  <div @click="showDataFilter">
                                    <i
                                      v-if="openTab"
                                      class="fi fi-rr-angle-small-up"
                                    ></i>
                                    <i
                                      v-else
                                      class="fi fi-rr-angle-small-down"
                                    ></i>
                                  </div>
                                </div>
                                <div>
                                  <div
                                    v-if="openTab"
                                    class="iput-search d-flex"
                                  >
                                    <i class="fi fi-rr-search mr-2"></i>
                                    <input
                                      v-model="search"
                                      placeholder="กรุณากรอกจังหวัด"
                                      type="text"
                                    />
                                  </div>
                                  <div>
                                    <v-container>
                                      <div v-if="openTab" class="scroll-bar">
                                        <v-checkbox
                                          v-for="p in duplicatedRemove"
                                          v-model="isSelected"
                                          :value="p.province"
                                          :key="p.id"
                                          :label="'จังหวัด' + p.province"
                                          hide-details
                                        >
                                        </v-checkbox>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">อายุ</p>
                                          <div @click="showDataFilter2">
                                            <i
                                              v-if="openTab2"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab2">
                                          <v-checkbox
                                            v-for="i in filterList.age"
                                            v-model="isAge"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">เพศ</p>
                                          <div @click="showDataFilter3">
                                            <i
                                              v-if="openTab3"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab3">
                                          <v-checkbox
                                            v-for="i in filterList.gender"
                                            v-model="isGender"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">ขนาด</p>
                                          <div @click="showDataFilter4">
                                            <i
                                              v-if="openTab4"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab4">
                                          <v-checkbox
                                            v-for="i in filterList.bodySize"
                                            v-model="isBodySize"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">สี</p>
                                          <div @click="showDataFilter5">
                                            <i
                                              v-if="openTab5"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab5" class="scroll-bar">
                                          <v-checkbox
                                            v-for="i in filterList.color"
                                            v-model="isColor"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">ลักษณะขน</p>
                                          <div @click="showDataFilter6">
                                            <i
                                              v-if="openTab6"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab6">
                                          <v-checkbox
                                            v-for="i in filterList.hairStyle"
                                            v-model="isHairStyle"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">การใช้กระบะทราย</p>
                                          <div @click="showDataFilter7">
                                            <i
                                              v-if="openTab7"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab7">
                                          <v-checkbox
                                            v-for="i in filterList.sandBox"
                                            v-model="isSandBox"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">สายพันธุ์</p>
                                          <div @click="showDataFilter8">
                                            <i
                                              v-if="openTab8"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab8" class="scroll-bar">
                                          <v-checkbox
                                            v-for="i in filterList.breed"
                                            v-model="isBreed"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">ลักษณะนิสัย</p>
                                          <div @click="showDataFilter9">
                                            <i
                                              v-if="openTab9"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab9" class="scroll-bar">
                                          <v-checkbox
                                            v-for="i in filterList.characteristic"
                                            v-model="isCharacteristic"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">การได้รับวัคซีน</p>
                                          <div @click="showDataFilter10">
                                            <i
                                              v-if="openTab10"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab10">
                                          <v-checkbox
                                            v-for="i in filterList.receiveVaccine"
                                            v-model="isVaccine"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                      <div class="line"></div>
                                      <div class="filter-side-bar">
                                        <div
                                          class="justify-space-between d-flex"
                                        >
                                          <p class="mb-0">การทำหมัน</p>
                                          <div @click="showDataFilter11">
                                            <i
                                              v-if="openTab11"
                                              class="fi fi-rr-angle-small-up"
                                            ></i>
                                            <i
                                              v-else
                                              class="fi fi-rr-angle-small-down"
                                            ></i>
                                          </div>
                                        </div>
                                        <div v-if="openTab11">
                                          <v-checkbox
                                            v-for="i in filterList.neutered"
                                            v-model="isNeutered"
                                            :value="i.name"
                                            :key="i.id"
                                            :label="i.name"
                                            hide-details
                                          ></v-checkbox>
                                        </div>
                                      </div>
                                    </v-container>
                                  </div>
                                </div>
                              </div>
                            </v-container>
                          </v-sheet>
                        </v-bottom-sheet>
                        <!--  -->
                      </v-col>
                      <v-col cols="6">
                        <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <div v-bind="attrs" v-on="on">
                              <div class="filter-by">
                                <div>เรียงตาม</div>
                                <i class="fi fi-rr-angle-down"></i>
                              </div>
                            </div>
                          </template>
                          <v-list>
                            <v-list-item
                              v-for="(item, index) in items"
                              :key="index"
                            >
                              <v-list-item-title
                                @click="filterAction(item.action)"
                                >{{ item.title }}</v-list-item-title
                              >
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </template>
                </div>
              </v-col>

              <v-col v-if="posts" cols="12" align-self="center">
                <div>
                  <v-row>
                    <v-col
                      v-for="post in filterByProvince"
                      :key="post._id"
                      cols="12"
                      sm="4"
                      md="4"
                      lg="4"
                      xl="4"
                      align-self="center"
                    >
                      <!-- @click="sheet = true" -->
                      <div
                        @click="getOnePost(post._id)"
                        class="card position-relative"
                      >
                        <div
                          v-if="post.statusbar === 'รับเลี้ยงสำเร็จ'"
                          class="status-adopt-success"
                        >
                          รับเลี้ยงแล้ว
                        </div>
                        <div v-else class="status-adopt">
                          ยังไม่ถูกรับเลี้ยง
                        </div>
                        <div class="thumbnail">
                          <img
                            :src="`${$config.findHome}readFileIdFindHome?id=${post._id}`"
                            alt=""
                          />
                        </div>
                        <div class="card-title">
                          <v-row justify="center">
                            <v-col cols="12" class="pb-lg-3 pb-sm-3">
                              <div>
                                <h2 class="h4">
                                  {{ post.generalInfo.catName }}
                                </h2>
                                <p class="mb-0 location">
                                  <i class="fi fi-rr-marker"></i>
                                  {{
                                    "จังหวัด" +
                                    post.generalInfo.location.province +
                                    " " +
                                    "เขต" +
                                    post.generalInfo.location.district
                                  }}
                                </p>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col v-if="!posts">
                <div class="text-center">ยังไม่มีโพสหาบ้าน</div>
              </v-col>
            </v-row>
            <v-row justify="center" class="d-none d-md-flex">
              <v-col cols="3">
                <div>
                  <div class="justify-space-between d-flex">
                    <p class="mb-2 ml-3"><b>ค้นหาจากพิกัด</b></p>
                    <div @click="showDataFilter">
                      <i v-if="openTab" class="fi fi-rr-angle-small-up"></i>
                      <i v-else class="fi fi-rr-angle-small-down"></i>
                    </div>
                  </div>
                  <div>
                    <div v-if="openTab" class="iput-search d-flex">
                      <i class="fi fi-rr-search mr-2"></i>
                      <input
                        v-model="search"
                        placeholder="กรุณากรอกจังหวัด"
                        type="text"
                      />
                    </div>
                    <div>
                      <v-container>
                        <div v-if="openTab" class="scroll-bar">
                          <v-checkbox
                            v-for="p in duplicatedRemove"
                            v-model="isSelected"
                            :value="p.province"
                            :key="p.id"
                            :label="'จังหวัด' + p.province"
                            hide-details
                          >
                          </v-checkbox>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">อายุ</p>
                            <div @click="showDataFilter2">
                              <i
                                v-if="openTab2"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab2">
                            <v-checkbox
                              v-for="i in filterList.age"
                              v-model="isAge"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">เพศ</p>
                            <div @click="showDataFilter3">
                              <i
                                v-if="openTab3"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab3">
                            <v-checkbox
                              v-for="i in filterList.gender"
                              v-model="isGender"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">ขนาด</p>
                            <div @click="showDataFilter4">
                              <i
                                v-if="openTab4"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab4">
                            <v-checkbox
                              v-for="i in filterList.bodySize"
                              v-model="isBodySize"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">สี</p>
                            <div @click="showDataFilter5">
                              <i
                                v-if="openTab5"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab5" class="scroll-bar">
                            <v-checkbox
                              v-for="i in filterList.color"
                              v-model="isColor"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">ลักษณะขน</p>
                            <div @click="showDataFilter6">
                              <i
                                v-if="openTab6"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab6">
                            <v-checkbox
                              v-for="i in filterList.hairStyle"
                              v-model="isHairStyle"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">การใช้กระบะทราย</p>
                            <div @click="showDataFilter7">
                              <i
                                v-if="openTab7"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab7">
                            <v-checkbox
                              v-for="i in filterList.sandBox"
                              v-model="isSandBox"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">สายพันธุ์</p>
                            <div @click="showDataFilter8">
                              <i
                                v-if="openTab8"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab8" class="scroll-bar">
                            <v-checkbox
                              v-for="i in filterList.breed"
                              v-model="isBreed"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">ลักษณะนิสัย</p>
                            <div @click="showDataFilter9">
                              <i
                                v-if="openTab9"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab9" class="scroll-bar">
                            <v-checkbox
                              v-for="i in filterList.characteristic"
                              v-model="isCharacteristic"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">การได้รับวัคซีน</p>
                            <div @click="showDataFilter10">
                              <i
                                v-if="openTab10"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab10">
                            <v-checkbox
                              v-for="i in filterList.receiveVaccine"
                              v-model="isVaccine"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="line"></div>
                        <div class="filter-side-bar">
                          <div class="justify-space-between d-flex">
                            <p class="mb-0">การทำหมัน</p>
                            <div @click="showDataFilter11">
                              <i
                                v-if="openTab11"
                                class="fi fi-rr-angle-small-up"
                              ></i>
                              <i v-else class="fi fi-rr-angle-small-down"></i>
                            </div>
                          </div>
                          <div v-if="openTab11">
                            <v-checkbox
                              v-for="i in filterList.neutered"
                              v-model="isNeutered"
                              :value="i.name"
                              :key="i.id"
                              :label="i.name"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                      </v-container>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="mb-9">
                  <v-row no-gutters justify="center">
                    <v-col cols="8" align-self="center">
                      <div>
                        <h2>รับเลี้ยงแมว</h2>
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <div v-bind="attrs" v-on="on">
                            <v-row no-gutters justify="end">
                              <v-col cols="9">
                                <div class="filter-by">
                                  <div>เรียงตาม</div>
                                  <i class="fi fi-rr-angle-down"></i>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                          >
                            <v-list-item-title
                              @click="filterAction(item.action)"
                              >{{ item.title }}</v-list-item-title
                            >
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-col>
                  </v-row>
                </div>
                <v-row v-if="posts">
                  <v-col
                    v-for="post in filterByProvince"
                    :key="post._id"
                    cols="12"
                    sm="4"
                    md="4"
                    lg="4"
                    xl="4"
                    align-self="center"
                  >
                    <!-- card -->
                    <div
                      @click="getOnePost(post._id)"
                      class="card position-relative"
                    >
                      <div
                        v-if="post.statusbar === 'รับเลี้ยงสำเร็จ'"
                        class="status-adopt-success"
                      >
                        รับเลี้ยงแล้ว
                      </div>
                      <div v-else class="status-adopt">ยังไม่ถูกรับเลี้ยง</div>
                      <!-- <div
                        v-if="post.generalInfo.gender === 'เพศเมีย'"
                        class="gender-icon"
                      >
                        <i class="fi fi-rr-venus"></i>
                      </div>
                      <div v-else class="gender-icon-male">
                        <i class="fi fi-rr-mars"></i>
                      </div> -->

                      <div class="thumbnail">
                        <img
                          :src="`${$config.findHome}readFileIdFindHome?id=${post._id}`"
                          alt=""
                        />
                      </div>
                      <div class="card-title">
                        <v-row justify="center">
                          <v-col cols="12" class="pb-lg-3 pb-sm-3">
                            <div>
                              <h2 class="h4">{{ post.generalInfo.catName }}</h2>
                              <p class="mb-0 location">
                                <i class="fi fi-rr-marker"></i>
                                {{
                                  "จังหวัด" +
                                  post.generalInfo.location.province +
                                  " " +
                                  "เขต" +
                                  post.generalInfo.location.district
                                }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row v-if="!posts">
                  <v-col>
                    <div class="text-center">ยังไม่มีโพสหาบ้าน</div>
                  </v-col>
                </v-row>
                <div class="text-center">
                  <v-bottom-sheet v-model="sheet" persistent>
                    <v-sheet v-if="onePost" class="text-center">
                      <v-container class="set-sheet">
                        <div @click="sheet = !sheet" class="cross-circle">
                          <i class="fi fi-rr-cross-circle"></i>
                        </div>

                        <div class="adopt-sheet">
                          <v-row justify="center">
                            <v-col cols="12" md="8" lg="8">
                              <v-row justify="center">
                                <v-col
                                  cols="6"
                                  align-self="center"
                                  class="text-left pb-0"
                                >
                                  <h2>{{ onePost.generalInfo.catName }}</h2>
                                </v-col>
                                <v-col
                                  cols="6"
                                  align-self="center"
                                  class="d-flex justify-end pb-0"
                                >
                                  <div @click="feelToPost(onePost._id)">
                                    <div v-if="!isLike" class="un-like-btn">
                                      <i class="fi fi-rr-heart"></i>
                                      ถูกใจ
                                    </div>
                                    <div v-else class="like-btn">
                                      <img
                                        src="@/assets/imgs/fi-sr-heart.svg"
                                        alt=""
                                      />
                                      ถูกใจ
                                    </div>
                                  </div>
                                </v-col>
                                <v-col
                                  cols="12"
                                  align-self="center"
                                  class="py-0"
                                >
                                  <p class="post-by text-left mb-0">
                                    โพสต์โดย
                                    {{
                                      onePost.author.firstName +
                                      " " +
                                      onePost.author.lastName
                                    }}
                                    | {{ convertDateTime(onePost.updatedAt) }}
                                  </p>
                                </v-col>
                                <v-col cols="12">
                                  <div class="cat-img">
                                    <img
                                      :src="`${$config.findHome}readFileIdFindHome?id=${onePost._id}`"
                                      alt=""
                                    />
                                  </div>
                                  <div class="mt-4 mt-lg-9">
                                    <div class="charac-show">
                                      <div
                                        v-show="!Array.isArray(character)"
                                        v-for="(character, index) in onePost
                                          .generalInfo.characteristic"
                                        :key="index"
                                        class="charac-details"
                                      >
                                        <p class="mb-0">
                                          {{ character }}
                                        </p>
                                      </div>
                                      <div
                                        v-for="(character, index) in onePost
                                          .generalInfo.characteristic.habit"
                                        :key="index"
                                        class="charac-details"
                                      >
                                        <p class="mb-0">
                                          {{ character }}
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="mt-4 mt-lg-9">
                                    <div>
                                      <div class="d-flex post-title">
                                        <i class="fi fi-rr-info"></i>
                                        <p class="mb-0">ข้อมูลทั่วไป</p>
                                      </div>
                                      <div class="text-left mt-3">
                                        <v-row no-gutters>
                                          <v-col cols="12" md="6">
                                            <div>
                                              <p>
                                                สายพันธุ์:
                                                {{ onePost.generalInfo.breeds }}
                                              </p>
                                              <p>
                                                อายุ:
                                                {{ onePost.generalInfo.age }}
                                              </p>
                                              <p>
                                                สี:
                                                {{ onePost.generalInfo.color }}
                                              </p>
                                              <p>
                                                เพศ:
                                                {{ onePost.generalInfo.gender }}
                                              </p>

                                              <p>
                                                ที่อยู่:
                                                {{
                                                  onePost.generalInfo.location
                                                    .province +
                                                  " " +
                                                  onePost.generalInfo.location
                                                    .district
                                                }}
                                              </p>
                                            </div>
                                          </v-col>
                                          <v-col cols="12" md="6">
                                            <div>
                                              <p>
                                                การทำหมัน:
                                                {{
                                                  onePost.generalInfo.neutered
                                                }}
                                              </p>
                                              <p>
                                                วัคซีนที่ได้รับ:
                                                {{
                                                  onePost.generalInfo
                                                    .vaccination ===
                                                    "ได้รับวัคซีนบางชนิด" ||
                                                  onePost.generalInfo
                                                    .vaccination ===
                                                    "ได้รับวัคซีนครบตามช่วงอายุของแมว"
                                                    ? " "
                                                    : onePost.generalInfo
                                                        .vaccination
                                                }}
                                                <span
                                                  v-for="vac in onePost
                                                    .generalInfo.receiveVaccine"
                                                  :key="vac"
                                                >
                                                  {{ vac + "," }}
                                                </span>
                                              </p>

                                              <p>
                                                โรคประจำตัว:
                                                {{
                                                  onePost.generalInfo.disease
                                                }}
                                              </p>
                                              <p>
                                                รายละเอียดเพิ่มเติม:
                                                {{ onePost.generalInfo.others }}
                                              </p>
                                            </div>
                                          </v-col>
                                        </v-row>
                                      </div>
                                    </div>

                                    <div class="mt-6">
                                      <div class="d-flex post-title">
                                        <i class="fi fi-rr-portrait"></i>
                                        <p class="mb-0">ช่องทางการติดต่อ</p>
                                      </div>
                                      <div class="text-left mt-3">
                                        <v-row no-gutters>
                                          <v-col cols="12" md="6">
                                            <div>
                                              <p>
                                                ชื่อผู้ติดต่อ:
                                                {{
                                                  onePost.contact.contactName
                                                }}
                                              </p>
                                              <p>
                                                Facebook:
                                                {{ onePost.contact.facebook }}
                                              </p>
                                            </div>
                                          </v-col>
                                          <v-col cols="12" md="6">
                                            <div>
                                              <p>
                                                โทรศัพท์:
                                                {{ onePost.contact.tel }}
                                              </p>
                                              <p>
                                                Line ID:
                                                {{ onePost.contact.line }}
                                              </p>
                                            </div>
                                          </v-col>
                                        </v-row>
                                      </div>
                                    </div>
                                  </div>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </div>
                      </v-container>
                      <div class="footer-more">
                        <div>
                          <v-container>
                            <div class="mt-10">
                              <h2 class="text-left">น้องแมวที่คุณอาจสนใจ</h2>
                            </div>
                            <div class="my-6">
                              <v-row justify="center">
                                <v-col
                                  v-for="(random, index) in randomPost"
                                  :key="random._id"
                                  cols="12"
                                  sm="4"
                                  md="4"
                                  lg="4"
                                  xl="4"
                                  align-self="center"
                                >
                                  <div
                                    v-if="randomPost.length > 0"
                                    class="card"
                                  >
                                    <div
                                      v-if="
                                        randomPost.statusbar ===
                                        'รับเลี้ยงสำเร็จ'
                                      "
                                      class="status-adopt-success"
                                    >
                                      รับเลี้ยงแล้ว
                                    </div>
                                    <div v-else class="status-adopt">
                                      ยังไม่ถูกรับเลี้ยง
                                    </div>
                                    <div
                                      :class="[index == 2 ? 'backdrop' : '']"
                                    ></div>
                                    <button
                                      @click="adoptCat"
                                      v-if="index === 2"
                                      :class="[index == 2 ? 'more' : '']"
                                    >
                                      ดูทั้งหมด
                                    </button>
                                    <div class="thumbnail">
                                      <img
                                        :src="`${$config.findHome}readFileIdFindHome?id=${random._id}`"
                                        alt=""
                                      />
                                    </div>
                                    <div class="card-title">
                                      <v-row justify="center">
                                        <v-col
                                          cols="12"
                                          class="pb-lg-3 pb-sm-3"
                                        >
                                          <div class="text-left">
                                            <h2 class="h4">
                                              {{ random.generalInfo.catName }}
                                            </h2>
                                            <p class="mb-0 location">
                                              <i class="fi fi-rr-marker"></i
                                              >{{
                                                random.generalInfo.location
                                                  .province +
                                                " " +
                                                random.generalInfo.location
                                                  .district
                                              }}
                                            </p>
                                          </div>
                                        </v-col>
                                      </v-row>
                                    </div>
                                  </div>
                                </v-col>
                              </v-row>
                            </div>
                          </v-container>
                        </div>
                      </div>
                    </v-sheet>
                  </v-bottom-sheet>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <punmaew-banner :color="false" :ordersm="true">
      <template slot="img-banner">
        <img src="@/assets/imgs/banner2.png" alt="" />
      </template>
      <template slot="content-banner">
        <div>
          <v-row justify="center" class="banner-set-row">
            <v-col cols="12" lg="10" align-self="center" class="pt-0">
              <adopt-btn-group>
                <template slot="finderHome">
                  <button @click="finderHome" class="adoption-btn">
                    <svg
                      width="54"
                      height="41"
                      viewBox="0 0 54 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.4996 19.1199C20.8696 19.3672 21.3046 19.4991 21.7496 19.4991C22.3464 19.4991 22.9187 19.2621 23.3406 18.8401C23.7626 18.4182 23.9996 17.8459 23.9996 17.2491C23.9996 16.8041 23.8677 16.3691 23.6204 15.9991C23.3732 15.6291 23.0218 15.3407 22.6107 15.1704C22.1995 15.0001 21.7471 14.9555 21.3107 15.0424C20.8742 15.1292 20.4733 15.3435 20.1587 15.6581C19.844 15.9728 19.6297 16.3737 19.5429 16.8102C19.4561 17.2466 19.5006 17.699 19.6709 18.1102C19.8412 18.5213 20.1296 18.8727 20.4996 19.1199ZM29.5306 5.38658C28.9661 4.7085 28.3395 4.07786 27.6559 3.50367C24.9518 1.2322 21.5312 -0.00923569 17.9996 -0.000869475C7.64966 -0.000869475 4.68566 7.01013 2.72816 11.6496C2.33124 12.9624 1.65646 14.1743 0.749666 15.2031C0.481244 15.3618 0.268937 15.6002 0.142271 15.8851C0.0156042 16.17 -0.0191248 16.4873 0.0429135 16.7929C0.104952 17.0984 0.260673 17.3771 0.488421 17.59C0.71617 17.803 1.00462 17.9397 1.31366 17.9811C5.02136 18.2929 8.75038 17.7276 12.1992 16.3311C12.009 16.7528 11.9534 17.2228 12.0399 17.6772C12.1264 18.1316 12.3509 18.5482 12.6828 18.8705C13.0146 19.1927 13.4377 19.4048 13.8945 19.4779C14.3512 19.5511 14.8194 19.4816 15.2352 19.2791C15.6511 19.0766 15.9944 18.7509 16.2185 18.3462C16.4426 17.9416 16.5365 17.4777 16.4875 17.0177C16.4385 16.5578 16.2489 16.1241 15.9445 15.7758C15.6402 15.4275 15.2359 15.1814 14.7866 15.0711C17.7336 13.4203 20.2737 11.1309 22.2206 8.37063C22.3351 8.21029 22.4168 8.02897 22.4612 7.83704C22.5056 7.6451 22.5117 7.4463 22.4793 7.252C22.4468 7.05769 22.3764 6.87168 22.2721 6.70458C22.1677 6.53749 22.0315 6.39258 21.8711 6.27813C21.7108 6.16368 21.5295 6.08194 21.3375 6.03756C21.1456 5.99319 20.9468 5.98706 20.7525 6.01951C20.5582 6.05196 20.3722 6.12237 20.2051 6.22671C20.038 6.33105 19.8931 6.46729 19.7786 6.62763C18.0309 9.09098 15.7487 11.1272 13.1028 12.5839C10.4569 14.0406 7.51584 14.8801 4.49966 15.0396C4.81629 14.4078 5.11216 13.7111 5.42225 12.9809C5.44564 12.9258 5.4691 12.8706 5.49266 12.8151C7.33766 8.44113 9.63416 2.99913 17.9996 2.99913C20.9628 2.99159 23.8233 4.08379 26.0274 6.06425C26.9352 6.87995 27.705 7.82243 28.3181 8.85479C28.3065 9.02009 28.3006 9.18707 28.3006 9.35553C28.3006 10.0724 28.4167 10.7589 28.6149 11.4081C28.4158 12.0327 28.3006 12.6888 28.3006 13.3688C28.3006 15.7816 29.6438 17.9175 31.7124 19.25C31.6849 19.2625 31.6572 19.2744 31.6291 19.2857C31.3598 19.3945 31.0716 19.4487 30.7811 19.4451L30.1331 19.4346C29.8203 19.4361 29.5152 19.5326 29.2583 19.7112C29.0015 19.8899 28.8049 20.1423 28.6946 20.4351C27.3206 24.3306 22.6946 28.4991 17.9996 28.4991C14.1131 28.4991 10.4637 25.6851 8.56766 22.8981C8.07694 22.1666 7.37834 21.5989 6.56193 21.2681C5.74551 20.9373 4.84874 20.8588 3.98724 21.0424C3.12574 21.2261 2.33902 21.6637 1.72854 22.2987C1.11806 22.9337 0.711803 23.7371 0.562166 24.6051L0.112166 27.2151C-0.0750333 28.2924 -0.024403 29.3977 0.26051 30.4533C0.545423 31.509 1.05773 32.4897 1.76153 33.3265C2.46533 34.1633 3.3436 34.8362 4.33482 35.2978C5.32603 35.7595 6.4062 35.9989 7.49966 35.9991H13.4997C13.8975 35.9991 14.279 35.8411 14.5603 35.5598C14.8416 35.2785 14.9996 34.897 14.9996 34.4991V31.0941C15.978 31.3578 16.9864 31.4939 17.9996 31.4991C19.0123 31.4954 20.0204 31.3628 20.9996 31.1046V34.4991C20.9996 34.897 21.1577 35.2785 21.439 35.5598C21.7203 35.8411 22.1018 35.9991 22.4996 35.9991H27.4954C28.7803 39.4141 32.42 41 36.7093 41C40.5109 41 43.8004 39.7527 45.3941 37.0917C51.4588 35.5278 54.49 31.2972 53.9353 25.0839C53.861 24.249 53.1211 23.6328 52.2847 23.7065C51.4479 23.7807 50.8297 24.5184 50.9041 25.3532C51.1766 28.4067 50.4359 30.648 48.6396 32.2058C47.9837 32.7748 47.2212 33.2193 46.4069 33.5684C46.4148 33.4114 46.4191 33.2523 46.4191 33.0901C46.4191 29.0412 44.1582 22.7281 40.7874 19.7717C43.3691 18.5214 45.1184 16.1244 45.1184 13.3697C45.1184 12.5262 44.9463 11.72 44.6455 10.9662C44.7655 10.448 44.832 9.90891 44.832 9.35597C44.832 7.21748 43.8834 5.28716 42.3658 4.00043C41.4886 4.74376 40.8052 5.69916 40.3757 6.7864C39.2663 6.31672 38.0252 6.04567 36.7093 6.04567C35.2978 6.04567 33.9693 6.35272 32.8012 6.88702C32.3817 5.75944 31.687 4.76414 30.7859 4C30.3087 4.40437 29.886 4.8705 29.5306 5.38658ZM28.6396 26.2257C27.6242 28.5811 27.0185 31.0442 27.0004 32.9991H23.9996V29.9271C25.7677 28.9771 27.3367 27.7199 28.6396 26.2257ZM6.08816 24.5811C7.59847 26.8093 9.62703 28.6377 11.9997 29.9091V32.9991H7.49966C6.84375 32.9984 6.19594 32.8542 5.60159 32.5768C5.00724 32.2994 4.48072 31.8954 4.0589 31.3932C3.63708 30.8909 3.33015 30.3025 3.15962 29.6691C2.98908 29.0358 2.95907 28.3728 3.07166 27.7266L3.52166 25.1181C3.57825 24.7946 3.74545 24.5007 3.9947 24.2867C4.24394 24.0728 4.55975 23.952 4.88816 23.9451H4.91366C5.14659 23.9466 5.37558 24.0054 5.58042 24.1163C5.78525 24.2272 5.95963 24.3869 6.08816 24.5811Z"
                        fill="#6F73BD"
                      />
                    </svg>
                    <span>หาบ้านให้แมว</span>
                  </button>
                </template>
                <template slot="adoptCat">
                  <button @click="adoptCat" class="adoption-btn">
                    <svg
                      width="54"
                      height="41"
                      viewBox="0 0 54 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.0003 33.0095H4.12531C3.03129 33.0095 1.98208 32.5749 1.20849 31.8013C0.434904 31.0277 0.000306686 29.9785 0.000306686 28.8845V15.3861C-0.00123672 14.8442 0.1048 14.3074 0.31227 13.8068C0.51974 13.3062 0.824517 12.8517 1.20893 12.4698L11.6383 2.03901C12.9291 0.751998 14.6775 0.0292769 16.5003 0.0292769C18.3231 0.0292769 20.0715 0.751998 21.3623 2.03901L28.3101 8.98773C28.4132 6.98203 29.3544 5.21309 30.7859 4C31.6871 4.76415 32.3818 5.75945 32.8013 6.88702C33.9694 6.35272 35.2979 6.04568 36.7094 6.04568C38.0253 6.04568 39.2664 6.31673 40.3758 6.78641C40.8053 5.69917 41.4886 4.74376 42.3659 4.00043C43.8835 5.28717 44.832 7.21749 44.832 9.35597C44.832 9.90892 44.7655 10.448 44.6455 10.9662C44.9464 11.72 45.1185 12.5262 45.1185 13.3697C45.1185 16.1244 43.3692 18.5214 40.7874 19.7717C44.1582 22.7281 46.4192 29.0412 46.4192 33.0901C46.4192 33.2523 46.4148 33.4114 46.407 33.5684C47.2212 33.2193 47.9837 32.7748 48.6397 32.2058C50.4359 30.648 51.1767 28.4067 50.9041 25.3532C50.8298 24.5184 51.448 23.7807 52.2848 23.7065C53.1212 23.6328 53.8611 24.249 53.9354 25.0839C54.4901 31.2972 51.4588 35.5278 45.3941 37.0917C43.8005 39.7527 40.511 41 36.7094 41C31.3472 41 27 38.5215 27 33.0892C27 33.0627 27.0001 33.0362 27.0003 33.0095ZM27.3324 30.2595H23.3753V24.8503C23.3753 23.0269 22.651 21.2782 21.3617 19.9889C20.0724 18.6996 18.3237 17.9753 16.5003 17.9753C14.6769 17.9753 12.9283 18.6996 11.6389 19.9889C10.3496 21.2782 9.62531 23.0269 9.62531 24.8503V30.2595H4.12531C3.76063 30.2595 3.4109 30.1146 3.15304 29.8568C2.89517 29.5989 2.75031 29.2492 2.75031 28.8845V15.3861C2.75158 15.0217 2.89632 14.6725 3.15318 14.414L13.5826 3.98739C14.3576 3.21592 15.4067 2.78281 16.5003 2.78281C17.5939 2.78281 18.643 3.21592 19.4181 3.98739L28.3196 12.8901C28.3071 13.0483 28.3007 13.2079 28.3007 13.3688C28.3007 15.151 29.0336 16.7822 30.2503 18.0501V23.1561C28.8687 25.3397 27.8324 27.9279 27.3324 30.2595ZM12.3753 24.8503V30.2595H20.6253V24.8503C20.6253 23.7562 20.1907 22.707 19.4171 21.9334C18.6435 21.1599 17.5943 20.7253 16.5003 20.7253C15.4063 20.7253 14.3571 21.1599 13.5835 21.9334C12.8099 22.707 12.3753 23.7562 12.3753 24.8503Z"
                        fill="#6F73BD"
                      />
                    </svg>
                    <span>รับเลี้ยงแมว</span>
                  </button>
                </template>
              </adopt-btn-group>
            </v-col>
          </v-row>
        </div>
      </template>
    </punmaew-banner>
  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import provinceList from "@/assets/data/province.json";
import filterList from "@/assets/data/filterList.json";
import AdoptBtnGroup from "../components/punmaew/components/AdoptBtnGroup.vue";
import BaseButton from "../components/punmaew/components/BaseButton.vue";
import PunmaewBanner from "../components/punmaew/elements/PunmaewBanner.vue";
import PunmaewAllAdoption from "../components/punmaew/sections/PunmaewAllAdoption.vue";
export default {
  components: {
    provinceList,
    ValidationObserver,
    ValidationProvider,
    PunmaewAllAdoption,
    PunmaewBanner,
    BaseButton,
    AdoptBtnGroup,
    filterList,
  },

  data() {
    return {
      sheetMobile: false,
      sheet: false,
      onePost: null,
      posts: null,
      province: provinceList,
      filterList: filterList,
      openTab: true,
      openTab2: false,
      openTab3: false,
      openTab4: false,
      openTab5: false,
      openTab6: false,
      openTab7: false,
      openTab8: false,
      openTab9: false,
      openTab10: false,
      openTab11: false,
      search: "",
      isSelected: [],
      isGender: [],
      isAge: [],
      isBodySize: [],
      isColor: [],
      isHairStyle: [],
      isSandBox: [],
      isCharacteristic: [],
      isVaccine: [],
      isNeutered: [],
      isBreed: [],
      randomPost: [],
      items: [
        { title: "เก่า", action: "old-post" },
        { title: "ล่าสุด", action: "lastest-post" },
        { title: "Best match", action: "best-match" },
        { title: "ถูกใจแล้ว", action: "favor" },
        { title: "ยังไม่ถูกรับเลี้ยง", action: "not-adopt" },
        { title: "รับเลี้ยงแล้ว", action: "by-adopted" },
      ],
    };
  },
  // async asyncData({ $axios, $config }) {
  //   try {
  //     const res = await $axios.get(`${$config.findHome}allPost`);
  //     return {
  //       posts: res.data,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  async created() {
    await this.fetchData();
  },

  computed: {
    duplicatedRemove() {
      let newProvince = [];
      let unique = this.province.filter((e) => {
        let isDuplicate = newProvince.includes(e.province);
        if (!isDuplicate) {
          newProvince.push(e.province);
          return true;
        }
        return false;
      });

      return this.search
        ? unique.filter((post) => {
            return post.province.includes(this.search);
          })
        : unique;
    },
    filterByProvince() {
      if (
        this.isSelected.length !== 0 ||
        this.isGender.length !== 0 ||
        this.isBodySize.length !== 0 ||
        this.isColor.length !== 0 ||
        this.isHairStyle.length !== 0 ||
        this.isSandBox.length !== 0 ||
        this.isCharacteristic.length !== 0 ||
        this.isVaccine.length !== 0 ||
        this.isNeutered.length !== 0 ||
        this.isBreed.length !== 0 ||
        this.isAge.length !== 0
      ) {
        return this.posts
          .filter((post) =>
            this.isSelected.length !== 0
              ? this.isSelected.indexOf(post.generalInfo.location.province) !==
                -1
              : post
          )
          .filter((post) =>
            this.isGender.length !== 0
              ? this.isGender.indexOf(post.generalInfo.gender) !== -1
              : post
          )
          .filter((post) =>
            this.isBodySize.length !== 0
              ? this.isBodySize.some((habit) =>
                  post.generalInfo.characteristic.size.includes(habit)
                )
              : post
          )
          .filter((post) =>
            this.isColor.length !== 0
              ? this.isColor.some((color) => post.generalInfo.color === color)
              : post
          )
          .filter((post) =>
            this.isHairStyle.length !== 0
              ? this.isHairStyle.some((hair) =>
                  post.generalInfo.characteristic.hair.includes(hair)
                )
              : post
          )
          .filter((post) =>
            this.isBreed.length !== 0
              ? this.isBreed.indexOf(post.generalInfo.breeds) != -1
              : post
          )
          .filter((post) =>
            this.isSandBox.length !== 0
              ? this.isSandBox.some(
                  (sandBox) =>
                    post.generalInfo.characteristic.sandbox === sandBox
                )
              : post
          )
          .filter((post) =>
            this.isCharacteristic.length !== 0
              ? this.isCharacteristic.some((charac) =>
                  post.generalInfo.characteristic.habit.includes(charac)
                )
              : post
          )
          .filter((post) =>
            this.isVaccine.length !== 0
              ? this.isVaccine.some((vaccine) =>
                  post.generalInfo.vaccination.includes(vaccine)
                )
              : post
          )
          .filter((post) =>
            this.isNeutered.length !== 0
              ? this.isNeutered.some((neutered) =>
                  post.generalInfo.neutered.includes(neutered)
                )
              : post
          )
          .filter((post) =>
            this.isAge.length !== 0
              ? this.isAge.indexOf(post.generalInfo.ageRange) != -1
              : post
          );
      } else {
        return this.posts;
      }
    },
    isLike() {
      return this.$store.state.auth?.user?.favor?.some(
        (fav) => this.onePost._id === fav.itemId
      );
    },
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
  },

  methods: {
    async filterAction(action) {
      if (action === "old-post") {
        console.log("old-post");
        try {
          const res = await this.$axios.get(`${this.$config.findHome}oldPost`);
          this.posts = res.data;
        } catch (error) {
          console.log(error);
        }
      }
      if (action === "lastest-post") {
        console.log("lastest-post");
        try {
          const res = await this.$axios.get(
            `${this.$config.findHome}latestPost`
          );
          this.posts = res.data;
        } catch (error) {
          console.log(error);
        }
      }

      if (action === "best-match") {
        console.log("best-match");
        if (this.loggedIn) {
          if (this.$store.state.auth.user.idealCat.length <= 0) {
            const checked = await this.$swal.fire({
              confirmButtonColor: "#19ba88",
              confirmButtonText: "ตกลง",
              text: "กรุณาตอบแบบสอบถามให้เรียบร้อยก่อน",
              icon: "warning",
            });
            if (checked.isConfirmed) {
              this.$router.push("/matching");
            }
          } else {
            try {
              const res = await this.$axios.get(
                `${this.$config.authURL}user/getBestmatch`
              );
              this.posts = res.data;
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          const checked = await this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            text: "กรุณาเข้าสู่ระบบก่อน",
            icon: "warning",
          });
          if (checked.isConfirmed) {
            await this.$router.push("/login");
          }
        }
      }
      if (action === "favor") {
        console.log("favor");
        if (this.loggedIn) {
          try {
            const res = await this.$axios.get(
              `${this.$config.findHome}getLikePost`
            );
            this.posts = res.data;
          } catch (error) {
            console.log(error);
          }
        } else {
          const checked = await this.$swal.fire({
            confirmButtonColor: "#19ba88",
            confirmButtonText: "ตกลง",
            text: "กรุณาเข้าสู่ระบบก่อน",
            icon: "warning",
          });
          if (checked.isConfirmed) {
            await this.$router.push("/login");
          }
        }
      }
      if (action === "not-adopt") {
        console.log("not-adopt");
        try {
          const res = await this.$axios.get(
            `${this.$config.findHome}getNotAdopt`
          );
          this.posts = res.data.success;
        } catch (error) {
          console.log(error);
        }
      }
      if (action === "by-adopted") {
        console.log("by-adopted");
        try {
          const res = await this.$axios.get(`${this.$config.findHome}getAdopt`);
          this.posts = res.data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async fetchData() {
      try {
        const res = await this.$axios.get(`${this.$config.findHome}allPost`);
        console.log(res.data);
        this.posts = res.data;

        const random = await this.$axios.get(
          `${this.$config.findHome}RandomPost`
        );
        this.randomPost = random.data;
        console.log(random.data);
      } catch (error) {
        console.log(error);
      }
    },
    async feelToPost(id) {
      if (this.loggedIn) {
        try {
          const res = await this.$axios.post(
            `${this.$config.findHome}likePost?id=${id}`
          );
          console.log(res);
          this.$store.commit("SET_FAVOR", id);
        } catch (error) {
          console.log(error);
        }
      } else {
        const checked = await this.$swal.fire({
          confirmButtonColor: "#19ba88",
          confirmButtonText: "ตกลง",
          text: "กรุณาเข้าสู่ระบบก่อน",
          icon: "warning",
        });
        if (checked.isConfirmed) {
          await this.$router.push("/login");
        }
      }
    },

    goToMatching() {
      this.$router.push(`/matching`);
    },
    adoptCat() {
      this.$router.push(`/adoptCat`);
    },
    showDataFilter11() {
      this.openTab11 = !this.openTab11;
    },
    showDataFilter10() {
      this.openTab10 = !this.openTab10;
    },
    showDataFilter9() {
      this.openTab9 = !this.openTab9;
    },
    showDataFilter8() {
      this.openTab8 = !this.openTab8;
    },
    showDataFilter7() {
      this.openTab7 = !this.openTab7;
    },
    showDataFilter6() {
      this.openTab6 = !this.openTab6;
    },
    showDataFilter5() {
      this.openTab5 = !this.openTab5;
    },
    showDataFilter4() {
      this.openTab4 = !this.openTab4;
    },
    showDataFilter3() {
      this.openTab3 = !this.openTab3;
    },
    showDataFilter2() {
      this.openTab2 = !this.openTab2;
    },
    showDataFilter() {
      this.openTab = !this.openTab;
      // console.log(this.openTab);
    },
    finderHome() {
      this.$router.push(`/finderHome`);
    },
    adoptCat() {
      this.$router.push(`/adoptCat`);
    },
    async getOnePost(id) {
      try {
        const res = await this.$axios.get(
          `${this.$config.findHome}onePost?id=${id}`
        );
        this.onePost = res.data.data;

        this.sheet = true;
      } catch (error) {
        console.log(error);
      }
    },
    convertDateTime(d) {
      let newDate = new Date(d);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let dt = newDate.getDate();
      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }
      const newFormat = dt + "/" + month + "/" + year;
      return newFormat;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-by {
  display: flex;
  grid-gap: 10px;
  gap: 10px;
  border: 1px solid $gray;
  border-radius: 50px;
  padding: 14px 24px;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  i {
    font-size: 18px;
    display: flex;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    i {
      font-size: 24px;
      display: flex;
    }
  }
}
.like-btn {
  display: flex;
  gap: 4px;
  background: $white;
  border: 1px solid $error;
  border-radius: 50px;
  justify-content: center;
  font-size: 10px;
  padding: 8px 16px;
  width: 75px;
  height: 24px;
  align-items: center;
  color: $error;
  img {
    width: 12px;
    height: 12px;
  }
  @media (min-width: 1440px) {
    gap: 8px;
    border: 2px solid $error;
    font-size: 14px;
    padding: 10px 32px;
    width: 138px;
    height: 38px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
.un-like-btn {
  display: flex;
  gap: 4px;
  background: $white;
  border: 1px solid $dark;
  border-radius: 50px;
  justify-content: center;
  font-size: 10px;
  padding: 8px 16px;
  width: 75px;
  height: 24px;
  align-items: center;
  i {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    gap: 8px;
    border: 2px solid $dark;
    font-size: 14px;
    padding: 10px 32px;
    width: 138px;
    height: 38px;
    i {
      font-size: 20px;
      color: $dark;
    }
  }
}
.post-title {
  p {
    font-weight: bold;
    font-size: 16px;
    @media (min-width: 1440px) {
      font-size: 20px;
    }
    i {
      font-size: 15px;
      @media (min-width: 1440px) {
        font-size: 20px;
      }
    }
  }

  gap: 4px;
}
.charac-show {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .charac-details {
    background-color: $orange;
    font-size: 14px;
    display: flex;
    justify-content: center;
    padding: 6px 15px;

    border-radius: 50px;
    align-self: center;
    p {
      color: $white;
    }
  }
}
.cat-img {
  img {
    border-radius: 10px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    align-items: center;
    @media (min-width: 1440px) {
      height: 520px;
    }
  }
}
.post-by {
  font-size: 12px;
  color: $gray;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
}

.status-adopt-success {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: $success;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 14px;
  color: $white;
}
.status-adopt {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: $error;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 14px;
  color: $white;
}
// .gender-icon-male {
//   position: absolute;
//   top: 5%;
//   right: 5%;
//   background-color: $white;
//   border-radius: 50%;
//   padding: 6px;
//   i {
//     display: flex;
//     justify-content: center;
//     font-size: 16px;
//     color: #13b8ff;
//   }
// }
// .gender-icon {
//   position: absolute;
//   top: 5%;
//   right: 5%;
//   background-color: $white;
//   border-radius: 50%;
//   padding: 6px;
//   i {
//     display: flex;
//     justify-content: center;
//     font-size: 16px;
//     color: #ff90e0;
//   }
// }
::v-deep
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
.backdrop {
  background: #000000;
  opacity: 0.5;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.more {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $white;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid $white;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px 8px 32px;
  &:hover {
    background-color: $white;
    opacity: 0.8;
    color: $dark;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    padding: 12px 44px 13px 45px;
  }
}
.footer-more {
  background-color: $light;
}
::v-deep .v-bottom-sheet.v-dialog {
  overflow: scroll;
  border-radius: 24px 24px 0px 0px;
  @media (min-width: 1440px) {
    border-radius: 50px 50px 0px 0px;
  }
}

.location {
  i {
    color: $orange;
    font-size: 12px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
}
.adopt-details {
  row-gap: 35px;
  display: grid;
}
.details-icon {
  gap: 4px;
  i {
    font-size: 20px;
  }
}
.adopt-sheet {
  h2 {
    font-size: 24px;
    @media (min-width: 1440px) {
      font-size: 36px;
    }
  }
}

::v-deep .theme--light.v-sheet {
  border-radius: 24px 24px 0px 0px;
  @media (min-width: 1440px) {
    border-radius: 50px 50px 0px 0px;
  }
}
.set-sheet {
  row-gap: 16px;
  display: grid;
  @media (min-width: 1440px) {
    row-gap: 32px;
  }
  .cross-circle {
    display: flex;
    justify-content: right;
    i {
      font-size: 24px;
      @media (min-width: 768px) {
        font-size: 46px;
      }
    }
  }
}

@media (min-width: 1440px) {
  .banner-set-row {
    justify-content: flex-start !important;
  }
  .btn-banner {
    width: 55% !important;
  }
}
.adoption-btn {
  width: 100%;
  background: #ffffff;
  border: 1px solid $purple-dark;
  color: $purple-dark;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px 12px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px !important;
    margin-right: 1px;
  }
  @media (min-width: 1440px) {
    border: 2px solid $purple-dark;
    border-radius: 10px;
    padding: 34px 25px;
    font-size: 20px;
    img {
      width: 54px !important;
      margin-right: 15px;
    }
  }
}
.set-test {
  img {
    width: 100%;
  }
}
.bg {
  background-color: #000000;
}
.card {
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  .thumbnail {
    overflow: hidden;
    line-height: 0;
    img {
      max-width: 100%;
      // width: 100%;
      // height: 260px;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
      @media (min-width: 768px) {
        object-fit: cover;
        align-items: center;
      }
      @media (min-width: 1024px) {
        width: 100%;
        height: 200px;
      }
    }
  }

  .card-title {
    padding: 22px;
  }
  &:hover {
    .card-title {
      color: $dark;
    }
  }
}
::v-deep .v-select > .v-input__control > .v-input__slot {
  padding: 0 30px !important;
}
.filter-side-bar {
  // margin-top: 30px;
  margin-top: 14px;
}
.line {
  margin-top: 14px;
  // margin-top: 30px;
  width: 100%;
  border: 1px solid $light;
}
.scroll-bar {
  max-height: 165px;
  overflow-y: scroll;
}
::v-deep .v-input--selection-controls.v-input {
  padding-top: 0px;
  margin-top: 9px;
}
.iput-search {
  background-color: $light;
  border-radius: 50px;
  margin-left: 8px;
  padding: 11px 14px;
  input {
    width: 100%;
    outline: none;
  }
}
::v-deep .v-input__slot {
  border-radius: 50px;
  margin-bottom: 0px;
}
// .gap-drop-down {
//   gap: 10px;
// }
.btn-search {
  background: linear-gradient(180deg, #fdc454 0%, #ff9474 100%);
  box-shadow: 0px 4px 15px #ffcab4;
  border-radius: 50px;
  width: 100%;
  color: $white;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: center;
  img {
    width: 15px !important;
    margin-right: 5px;
  }
  @media (min-width: 1440px) {
    width: 55%;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 18px;
    img {
      width: 20px !important;
      margin-right: 12px;
    }
  }
}
.pm-banner {
  background-color: $yellow-light;
  padding: 18px 8px;

  .set-banner {
    background-color: $white;
    padding: 18px 9px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    img {
      width: 100%;
    }
    @media (min-width: 768px) {
      padding: 32px 16px !important;
    }
    @media (min-width: 1440px) {
      padding: 40px 16px !important;
    }
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
</style>
