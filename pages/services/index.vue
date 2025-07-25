<template>
  <section class="services">
    <h1>Dịch vụ của chúng tôi</h1>
    <div class="service-list">
      <div class="service-item">
        <h3>🌐 Thiết kế Website</h3>
        <p>
          Chúng tôi thiết kế các trang web hiện đại, chuẩn responsive, tối ưu
          SEO.
        </p>
      </div>
      <div class="service-item">
        <h3>📱 Ứng dụng di động</h3>
        <p>Phát triển ứng dụng iOS & Android theo yêu cầu doanh nghiệp.</p>
      </div>
      <div class="service-item">
        <h3>💼 Tư vấn chuyển đổi số</h3>
        <p>
          Đồng hành cùng doanh nghiệp trong hành trình số hóa quy trình vận
          hành.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.services {
  padding: 20px;
}
.services h1 {
  margin-bottom: 20px;
}
.service-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.service-item {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33% - 20px);
}
</style>
