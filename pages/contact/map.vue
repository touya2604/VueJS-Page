<template>
  <section class="map-section">
    <h1>Địa chỉ của chúng tôi</h1>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4924999461564!2d106.70175581474917!3d10.773374292322746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1e2f88e479%3A0x4bc9b3107c42b1f3!2zVHLGsOG7nW5nIMSQ4buTIFBoxrDGoW5nIEdp4bqjbSBWxINu!5e0!3m2!1svi!2s!4v1625477395062!5m2!1svi!2s"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.map-section {
  padding: 20px;
}
.map-section h1 {
  margin-bottom: 15px;
}
.map-container {
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
