function OpenMenuMb() {
    $('.wp-menu-mb-js').addClass('open-menu-mb');
    $('.bg-menu-js').addClass('active');
    $('html,body').addClass('overflow-body');
}

function RemoveMenuMb() {
    $('.wp-menu-mb-js').removeClass('open-menu-mb');
    $('.bg-menu-js').removeClass('active');
    $('html,body').removeClass('overflow-body');
}
$(document).ready(function() {
    $('.user-login').click(function() {
        $('.block-user').toggleClass('open-box-user');
    });
    $('body').click(function(e) {
        var eventTarget = e.target;
        var listenClick = '.block-user';
        if ($(eventTarget).parents(listenClick).length != 1) {
            $('.block-user').removeClass('open-box-user');
        }
    });
    // Click menu mobile
    $('.icon-nav-sidebar-mb').click(function() {
        $('.main-sidebar-left').addClass('open-sidebar');
        $('.bg-sidebar-left').addClass('open-bg');
        $('body').addClass('overflow-hidden');
    });
    $('.close-popup-sidebar,.bg-sidebar-left').click(function() {
        $('.main-sidebar-left').removeClass('open-sidebar');
        $('.bg-sidebar-left').removeClass('open-bg');
        $('body').removeClass('overflow-hidden');
    });

    $('.block-nav-menu-bt').click(function() {
        $('.wrap').toggleClass('compact-sidebar');
    });
    // Ckick tab thông báo
    $('.item-support-topbar').click(function() {
        $('.item-support-topbar').removeClass('active');
        $(this).addClass('active');
    });
    $('body').click(function(e) {
        var eventTarget = e.target;
        var listenClick = '.lst-call-noti';
        if ($(eventTarget).parents(listenClick).length != 1) {
            $('.item-support-topbar').removeClass('active');
        }
    });
    // Click box user menu
    $('.flex-user').click(function(){
        $('.box-user-login').toggleClass('open-box');
    });
    $('body').click(function(e) {
        var eventTarget = e.target;
        var listenClick = '.box-user-login';
        if ($(eventTarget).parents(listenClick).length != 1) {
            $('.box-user-login').removeClass('open-box');
        }
    });
    // Sscroll fixed add class
    $(window).scroll(function(event) {
        offsetAdd = $(window).scrollTop();
        if (offsetAdd > 10) {
            $('.topbar-fixed').addClass('scroll-page');
        } else {
            $('.topbar-fixed').removeClass('scroll-page');
        }
    });
    $(window).scroll(function(event) {
        if (offsetAdd > 10) {
            $('.menu-topbar-mobile').addClass('scroll');
        } else {
            $('.menu-topbar-mobile').removeClass('scroll');
        }
    });

    // Click box bộ lọc
    $('.box-filter-search').click(function(){
        $('.box-popup-filter-search').addClass('open-box-filter');
    });
    $('.icon-close-box').click(function(){
        $('.box-popup-filter-search ').removeClass('open-box-filter');
    });
    $('body').click(function(e) {
        var eventTarget = e.target;
        var listenClick = '.filter-search';
        if ($(eventTarget).parents(listenClick).length != 1) {
            $('.box-popup-filter-search ').removeClass('open-box-filter');
        }
    });
    // Click box bộ lọc
    $('.box-filter-search').click(function(){
        $('.box-popup-filter-search').addClass('open-box-filter');
    });
    $('.box-popup-filter-search .icon-close-box').click(function(){
        $('.box-popup-filter-search ').removeClass('open-box-filter');
    });
    $('body').click(function(e) {
        var eventTarget = e.target;
        var listenClick = '.filter-search';
        if ($(eventTarget).parents(listenClick).length != 1) {
            $('.box-popup-filter-search ').removeClass('open-box-filter');
        }
    });
    // Click box sắp xếp
    $('.title-box-ss-column').click(function(){
        $('.box-popup-ss-column').addClass('open-box-ss');
    });
    $('.box-popup-ss-column .icon-close-box').click(function(){
        $('.box-popup-ss-column').removeClass('open-box-ss');
    });
    $('body').click(function(e) {
        var eventTarget = e.target;
        var listenClick = '.box-ss-column';
        if ($(eventTarget).parents(listenClick).length != 1) {
            $('.box-popup-ss-column').removeClass('open-box-ss');
        }
    });

    // Click tab
    $('.box-info-hs-crm .title-box .arrow').click(function () {
        $(this).parents('.box-info-hs-crm').toggleClass('active');
    })

    // Click sidebar Hồ sơ
    $('.box-mobile-menu-sidebar').click(function (e) { 
        $('body').addClass('overflow-hidden');
        $('.sidebar-hs-new').addClass('open-sidebar-hs');
    });
    $('.close-popup-sidebar-hs').click(function (e) { 
        $('body').removeClass('overflow-hidden');
        $('.sidebar-hs-new').removeClass('open-sidebar-hs');
    });
 
    // Click sidebar
    $('.icon-sidebar').click(function (e) { 
        $('.sidebar-site').addClass('open-sidebar');
        $('body').addClass('overflow-hidden');
    });
    $('.close-popup-sidebar,.bg-sidebar').click(function (e) { 
        $('.sidebar-site').removeClass('open-sidebar');
        $('body').removeClass('overflow-hidden');
    });


    // Click icon question
    $('.icon-dots-row').click(function (e) { 
        $('.box-popup-action-imt').removeClass('open-box');
        $(this).closest('.imt-action-crm').find('.box-popup-action-imt').toggleClass('open-box');
    });


    $('.back-sidebar').click(function() {
        $('.wp-site-2025').toggleClass('compact-sidebar');
    });
});
 function toggleMenu(el) {
        // Ẩn tất cả menu khác trước
        document
          .querySelectorAll(".finance-2025-action-menu")
          .forEach((menu) => {
            if (menu !== el.querySelector(".finance-2025-action-menu")) {
              menu.classList.remove("active");
            }
          });

        // Toggle menu hiện tại
        const menu = el.querySelector(".finance-2025-action-menu");
        menu.classList.toggle("active");
      }

      // Ẩn menu khi click ra ngoài
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".finance-2025-dots")) {
          document
            .querySelectorAll(".finance-2025-action-menu")
            .forEach((menu) => {
              menu.classList.remove("active");
            });
        }
      });