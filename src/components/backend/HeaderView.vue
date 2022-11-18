<template>
  <div class="header-bar">
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="index3.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">

        <li class="nav-item">
            <a class="nav-link" @click="logout" role="button">
              <i class="fas fa-sign-out text-danger"></i>
              <p class="sing_out text-danger">Sing out</p>
            </a>
          </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import toastr from 'toastr';
export default {
  methods:{
    logout(){
      this.$store
        .dispatch("Adminlogout",)
        .then((res) => {
          this.$router.push({name:'admin.login'});
          alert(toastr.success(res.message));
        })
        .catch((error) => {
          // toastr.error(error.message);
          console.log(error);
        });
    }
  }
};
</script>

<style>
.sing_out {
  margin-left: 29px;
  margin-top: -25px;
}
</style>