<template>
  <div class="login">
    <div>
      <section class="user-form-part">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-6">
              <div class="user-form-card ">
                <div class="user-form-title">
                  <h2 v-if="!sendOtp">Customer Register</h2>
                  <h2 v-else>verify your phone</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div class="user-form-group" id="axiosForm" v-if="!sendOtp">
                  <form class="user-form" @submit.prevent="Register">
                    <!--v-if-->
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="User name" v-model="form.name" />
                      <span class="text-danger" v-if="error.name && !form.name">{{error.name[0]}}</span>
                      <!--v-if-->
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email" v-model="form.email" />
                      <span class="text-danger" v-if="error.email && !form.email">{{error.email[0]}}</span>
                      <!--v-if-->
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Phone number" v-model="form.phone" />
                      <span class="text-danger" v-if="error.phone && !form.phone">{{error.phone[0]}}</span>
                      <!--v-if-->
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="password" v-model="form.password" />
                      <span class="view-password"><i class="fas text-success fa-eye"></i></span>
                      <span class="text-danger" v-if="error.password && !form.password">{{error.password[0]}}</span>
                      <!--v-if-->
                    </div>
                    <div class="form-button">
                      <button type="submit">Register</button>
                    </div>
                  </form>
                </div>
                <div class="user-form-group" id="axiosForm" v-else >
                  <form class="user-form" @submit.prevent="VerifiedCode">
                    <!--v-if-->
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Otp code" v-model="form.otp_code" />
                      <span class="text-danger" v-if="error.otp_code && !form.otp_code">{{error.otp_code[0]}}</span>
                      <!--v-if-->
                    </div>
                    <div class="form-button">
                      <button type="submit">Verify</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="user-form-remind">
                <p>
                  Don't have any login?<router-link :to="{ name: 'user.login' }" class="">login here
                  </router-link>
                </p>
              </div>
              <div class="user-form-footer"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'
export default {
  data(){
    return {
      form:{
        name:'',
        email:'',
        phone:'',
        password:'',
      },
      error:{},
      sendOtp : false,
    }
  },
  methods:{
    Register(){

      this.$store.dispatch('register', this.form).then((response) => {
        this.sendOtp = true;
        toastr.success(response.message);
      }).catch(error => {
         this.error = error.response.data.errors;
      })
    },
    VerifiedCode(){

    }
  }
}
</script>

<style>

</style>