<template>
  <div class="sidebar">
    <h2>Dashboard</h2>
    <a href="#">🏠 Home</a>
    <a href="#">📁 Projects</a>
    <a href="#">👤 Users</a>
    <a href="#">⚙️ Settings</a>
    <a href="#">🚪 Logout</a>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Sidebar styles */
.sidebar {
  position: relative;
  height: 100vh;
  width: 220px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 20px;
  font-size: 22px;
  text-align: center;
}

.sidebar a {
  display: block;
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.sidebar a:hover {
  background-color: #34495e;
}
</style>
