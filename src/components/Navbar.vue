<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
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
            <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link" active-class="active">Blog</router-link>
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-link {
  font-weight: 500;
  color: #ffffff !important;
  transition: color 0.3s;
}

.nav-link.active,
.nav-link:hover {
  color: #f15d44 !important;
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

@media (max-width: 991.98px) {
  .navbar-collapse {
    padding-top: 20px;
  }
  
  .nav-item {
    margin-bottom: 10px;
  }
  .signup-btn
  {
    border: saddlebrown solid 2px;
    margin-top: 10px;
    margin-left: 0 !important;
    padding: 20px;
  }
  .btn-success {
    margin-top: 10px;
    margin-left: 0 !important;
  }
}
</style>