<template>
  <nav class="navbar navbar-expand-lg navbar-light  shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img :src="logo" alt="Gutlin Logo" >
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/classes" class="nav-link" active-class="active">Classes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link" active-class="active">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link" active-class="active">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
          </li>
        </ul>

        <router-link to="/appointment" class="btn signup-btn ms-lg-3">
          SignUp
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 20px 0;
  background-color: #191818;
  border-bottom: 1px solid #f15d44;
}

.nav-link {
  font-weight: 500;
  color: #ffffff !important;
  transition:  0.3s;
  margin-right: 20px;
}

.nav-link.active,
.nav-link:hover {
  color: #f15d44 !important;
  border-bottom: #f15d44 2px solid;
}

.signup-btn {
  border-color: #f15d44;
  padding: 10px 20px;
  font-weight: 500;
  color: #ffffff;
  transition: background-color 0.3s;
}

.signup-btn:hover {
  background-color: #f15d44;
}

@media (max-width: 430px) {
  .navbar-collapse {
    margin-top: 20px;
    padding: 10px;
    background-color: #615d5d;

  }

}
</style>