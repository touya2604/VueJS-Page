<template>
  <section class="about">
    <h1>Về chúng tôi</h1>
    <p>
      Chúng tôi là một đội ngũ chuyên gia công nghệ đam mê sáng tạo. Với hơn 5
      năm kinh nghiệm, chúng tôi đã triển khai hàng trăm dự án phần mềm cho các
      doanh nghiệp trong và ngoài nước.
    </p>

    <div class="team">
      <div class="member">
        <img src="https://via.placeholder.com/120" alt="Team Member" />
        <h4>Nguyễn Văn A</h4>
        <p>Giám đốc kỹ thuật</p>
      </div>
      <div class="member">
        <img src="https://via.placeholder.com/120" alt="Team Member" />
        <h4>Trần Thị B</h4>
        <p>Trưởng phòng sản phẩm</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "default",
  name: "AboutPage",
};
</script>

<style>
.about {
  padding: 20px;
}
.about .team {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}
.about .member {
  text-align: center;
}
.about .member img {
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>
