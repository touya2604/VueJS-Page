<template>
  <section class="contact">
    <h1>Liên hệ với chúng tôi</h1>
    <form class="contact-form">
      <label>Họ và tên</label>
      <input type="text" placeholder="Nhập họ tên" />

      <label>Email</label>
      <input type="email" placeholder="Nhập email" />

      <label>Nội dung</label>
      <textarea rows="5" placeholder="Nội dung liên hệ..."></textarea>

      <button type="submit">Gửi liên hệ</button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
.contact {
  padding: 20px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
}
.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.contact-form button {
  padding: 10px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.contact-form button:hover {
  background: #1a242f;
}
</style>
