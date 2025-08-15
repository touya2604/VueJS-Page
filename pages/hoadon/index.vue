<template>
  <div class="wrap">
    <div class="block-add-ticker">
      <div class="topbar-add-ticker ct-view-hd-page">
        <div class="left-topbar"></div>
        <div class="center-topbar">
          <p class="name-sp">Thông tin thanh toán</p>
        </div>
        <div class="right-topbar">
          <div class="icon-close-small">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                fill="#1C1B1F"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="block-prd-page w-1200">
        <div class="layout-block-prd-page">
          <div class="block-view-hd-page">
            <div class="title-block-view-hd">
              <h3 class="name">Hóa đơn</h3>
              <p class="txt-small text-15-light">
                (Hóa đơn được tạo sẵn hạn thanh toán dd/mm/yyyy)
              </p>
            </div>
            <div class="main-block-view-hd">
              <div class="content-view-hd">
                <div class="form-info-kh">
                  <p class="name-form-creat">Thông tin khách hàng</p>
                  <div class="main-form-info-kh form-info">
                    <div class="ct-input">
                      <label for="" class="name-ct-input">Đối tượng</label>
                      <div class="item-choose-filter">
                        <select name="" id="" class="ct-select">
                          <option value="">Lựa chọn</option>
                          <option value="">Option 1</option>
                          <option value="">Option 2</option>
                          <option value="">Option 3</option>
                        </select>
                        <span class="icon-select">
                          <svg
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                              fill="#050505"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="ct-input">
                      <label for="" class="name-ct-input">Tìm kiếm</label>
                      <div class="form-search-work">
                        <span class="icon-search">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_161_2043"
                              style="mask-type: alpha"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect
                                width="20"
                                height="20"
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_161_2043)">
                              <path
                                d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8092 4.07333 11.7608C3.02444 10.7119 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02444 5.12139 4.07333 4.0725C5.12167 3.02417 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7119 3.02417 11.7608 4.0725C12.8092 5.12139 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3022 9.84389 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3022 5.98944 10.5733 5.26C9.84389 4.53111 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98944 4.53111 5.26 5.26C4.53111 5.98944 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53111 9.84389 5.26 10.5733C5.98944 11.3022 6.875 11.6667 7.91667 11.6667Z"
                                fill="#051020"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <input type="text" placeholder="Tìm kiếm" />
                      </div>
                    </div>
                    <div class="ct-input w-100">
                      <label for="" class="name-ct-input"
                        >Tên <span class="important">(*)</span></label
                      >
                      <div class="item-choose-filter">
                        <input type="text" placeholder="Tên khách hàng" />
                      </div>
                    </div>
                    <div class="ct-input">
                      <label for="" class="name-ct-input"
                        >Số điện thoại <span class="important">(*)</span></label
                      >
                      <div class="item-choose-filter">
                        <input type="text" placeholder="Nội dung" />
                      </div>
                    </div>
                    <div class="ct-input">
                      <label for="" class="name-ct-input"
                        >Email <span class="important">(*)</span></label
                      >
                      <div class="item-choose-filter">
                        <input type="text" placeholder="Nội dung" />
                      </div>
                    </div>
                    <div class="ct-input w-100">
                      <label for="" class="name-ct-input"
                        >Địa chỉ <span class="important">(*)</span></label
                      >
                      <div class="item-choose-filter">
                        <input type="text" placeholder="Nội dung" />
                      </div>
                    </div>
                    <div class="ct-input w-100">
                      <label for="" class="name-ct-input"
                        >Nội dung hóa đơn</label
                      >
                      <div class="item-choose-filter">
                        <input type="text" placeholder="Nội dung" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block-kh-old-creat mb-3">
                  <p class="text-name-history">Lich sử</p>
                  <div class="box-kh-old-creat">
                    <p>
                      Hóa đơn đã khởi tạo liên quan<a
                        href="javascript:;"
                        class="link"
                      >
                        PT001, PC002</a
                      >
                    </p>
                  </div>
                  <div class="box-kh-old-creat">
                    <p>
                      Tìm thất 01 hợp đồng
                      <a href="javascript:;" class="link">HDD091029</a>, ấn vào
                      số Hợp đồng để gắn kèm hóa đơn này.
                    </p>
                  </div>
                </div>
                <div class="box-hd-kh-file">
                  <p class="name-form-creat">Hợp đồng khách hàng đi kèm</p>
                  <div class="ct-input ct-input-checked">
                    <label for="" class="name-ct-input">Số hóa đơn</label>
                    <div class="item-choose-filter">
                      <input type="text" value="HDD091029" />
                    </div>
                  </div>
                </div>
                <div class="box-dk-ticket">
                  <p class="name-form-creat">Định khoản</p>
                  <div class="btn-apply-suggest mb-2">
                    <a href="" class="btn-bg-blue">Áp dụng gợi ý</a>
                  </div>
                  <p class="name-form-creat">
                    AI gợi ý định khoản: Tài khoản báo có 1111, Tài khoản nợ
                    6422 | Chi phí văn phòng trả bằng tiền mặt
                  </p>
                </div>
              </div>
              <div class="form-sidebar-hd form-info">
                <div class="ct-input">
                  <label for="" class="name-ct-input">Loại hóa đơn</label>
                  <div class="item-choose-filter">
                    <select name="" id="" class="ct-select">
                      <option value="">Lựa chọn</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                    <span class="icon-select">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="ct-input">
                  <label for="" class="name-ct-input">Ngày tạo hóa đơn</label>
                  <div class="item-choose-filter">
                    <input type="date" />
                    <span class="icon-date-select">
                      <img src="img-fix/calendar_month.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div class="ct-input ct-input-checked">
                  <label for="" class="name-ct-input">Số hóa đơn</label>
                  <div class="item-choose-filter">
                    <input type="text" value="Tạo bởi hệ thống" />
                  </div>
                </div>
                <div class="ct-input">
                  <label for="" class="name-ct-input">Mục đích</label>
                  <div class="item-choose-filter">
                    <select name="" id="" class="ct-select">
                      <option value="">Lựa chọn</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                    <span class="icon-select">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="ct-input">
                  <label for="" class="name-ct-input"
                    >Hình thức thanh toán</label
                  >
                  <div class="item-choose-filter">
                    <select name="" id="" class="ct-select">
                      <option value="">Lựa chọn</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                    <span class="icon-select">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="ct-input">
                  <label for="" class="name-ct-input"
                    >Trạng thái thanh toán</label
                  >
                  <div class="item-choose-filter">
                    <select name="" id="" class="ct-select">
                      <option value="">Lựa chọn</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                    <span class="icon-select">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="ct-input">
                  <label for="" class="name-ct-input"
                    >Ghi nhận doanh thu/ chi phí</label
                  >
                  <div class="item-choose-filter">
                    <select name="" id="" class="ct-select">
                      <option value="">Lựa chọn</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                    <span class="icon-select">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="ct-input">
                  <label for="" class="name-ct-input"
                    >Phát sinh dòng tiền</label
                  >
                  <div class="item-choose-filter">
                    <select name="" id="" class="ct-select">
                      <option value="">Lựa chọn</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                    <span class="icon-select">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="ct-input">
                  <label for="" class="name-ct-input">Hạch toán, ghi sổ</label>
                  <div class="item-choose-filter">
                    <select name="" id="" class="ct-select">
                      <option value="">Lựa chọn</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                      <option value="">Option 3</option>
                    </select>
                    <span class="icon-select">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-total-bill-info ct-table-add-money">
              <div class="tanh-wrapper-ketoan">
                <div class="title-total-bill-info">
                  <div class="item-bill-stt">
                    <p class="txt-title">Stt</p>
                  </div>
                  <div class="item-bill-flex-1">
                    <p class="txt-title">Chi tiết</p>
                  </div>
                  <div class="item-bill-sl-no custom-new">
                    <p class="txt-title">TK có</p>
                  </div>
                  <div class="item-bill-sl-no custom-new">
                    <p class="txt-title">TK nợ</p>
                  </div>
                  <div class="item-bill-sl-no">
                    <p class="txt-title">Số lượng</p>
                  </div>
                  <div class="item-bill-vnd">
                    <div class="item-choose-filter">
                      <select class="ct-select">
                        <option value="">Số tiền (VNĐ)</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                      </select>
                      <span class="icon-select">
                        <svg
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.99967 4.50001L0.833008 0.333344H9.16634L4.99967 4.50001Z"
                            fill="#050505"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="item-bill-vnd">
                    <p class="txt-title">Thành tiền (VNĐ)</p>
                  </div>
                  <div class="item-bill-del"></div>
                </div>
                <div class="content-total-bill-info">
                  <div class="row-total-bill-info">
                    <div class="item-bill-stt">
                      <p class="txt-content">1</p>
                    </div>
                    <div class="item-bill-flex-1">
                      <div class="list-add-content-money">
                        <div class="item-add-money">
                          <div class="ct-input">
                            <div class="item-choose-filter">
                              <input
                                type="text"
                                placeholder="Nội dung"
                                value="Nội dung thu tiền đã nhập"
                              />
                              <span class="icon-add-money">
                                <img src="img-fix/icon-add.svg" alt="" />
                              </span>
                            </div>
                          </div>
                          <div class="box-show-money-child">
                            <div class="ct-input">
                              <div class="item-choose-filter">
                                <input
                                  type="text"
                                  placeholder="Nội dung"
                                  value="Nội dung thu tiền đã nhập"
                                />
                                <span class="icon-add-money">
                                  <img
                                    src="img-fix/icon/icon-close.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </div>
                            <div class="ct-input">
                              <div class="item-choose-filter">
                                <input
                                  type="text"
                                  placeholder="Nội dung"
                                  value="Nội dung thu tiền đã nhập"
                                />
                                <span class="icon-add-money">
                                  <img
                                    src="img-fix/icon/icon-close.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-bill-sl-no custom-new">
                     <treeselect
                     :append-to-body="true"
      v-model="selectedValue"
      :multiple="false"
      :options="options"
      placeholder="Chọn một mục"
    />
                    </div>
                    <div class="item-bill-sl-no custom-new">
                      <treeselect
                      :append-to-body="true"
      v-model="selectedValue"
      :multiple="false"
      :options="options"
      placeholder="Chọn một mục"
    />
                    </div>
                    <div class="item-bill-sl-no">
                      <div class="ct-input">
                        <div class="item-choose-filter">
                          <input type="text" placeholder="Nội dung" value="0" />
                        </div>
                      </div>
                    </div>
                    <div class="item-bill-vnd">
                      <div class="ct-input">
                        <div class="item-choose-filter">
                          <input
                            type="text"
                            placeholder="Nội dung"
                            value="15.000.000"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="item-bill-vnd">
                      <div class="ct-input">
                        <div class="item-choose-filter">
                          <input
                            type="text"
                            placeholder="Nội dung"
                            value="15.000.000"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="item-bill-del">
                      <div class="flex-action-crm">
                        <div class="imt-action-crm">
                          <div class="icon-dots-row">
                            <img src="img-fix/action-3.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="btn-filter-search">
                <a href="" class="btn-bg-blue">Thêm dòng</a>
              </div>
            </div>
            <div class="bottom-creat-ticket mt-3">
              <div class="total-money-bill">
                <p class="txt">Tạm tính:</p>
                <div class="content">
                  <p class="number">189.920.000</p>
                </div>
              </div>
              <div class="total-money-bill">
                <p class="txt">Thuế VAT:</p>
                <div class="content">
                  <p class="number">-</p>
                </div>
              </div>
              <div class="total-money-bill">
                <p class="txt">Thành tiền:</p>
                <div class="content">
                  <p class="number">189.920.000</p>
                </div>
              </div>
            </div>
            <div class="lst-btn-box-search">
              <div class="btn-cancel-search">
                <a href="" class="btn-txt-cancel">Hủy</a>
              </div>
              <div class="btn-cancel-search">
                <a href="" class="btn-txt-cancel">Nháp</a>
              </div>
              <div class="btn-filter-search">
                <a href="" class="btn-bg-blue">Tiếp theo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
  @import "../../assets/main.css";

</style>

<script>

   import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

  export default {
      layout:'popup',
    // register the component
    components: { Treeselect },
    data() {
    return {
      selectedValue: null, // lưu giá trị được chọn
      options: [
        {
          id: 'a',
          label: 'Mục A',
          children: [
            { id: 'a1', label: 'Mục A1' },
            { id: 'a2', label: 'Mục A2' }
          ]
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        },
        {
          id: 'b',
          label: 'Mục B'
        }
      ]
    }
  }
  }
</script>