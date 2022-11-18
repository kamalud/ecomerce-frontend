<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>Ecomerce Login</b></a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="login">
                        <div class="input-group mb-3">
                            <input type="phone" class="form-control" placeholder="phone" v-model="form.phone" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="password"
                                v-model="form.password" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block">
                                    Sign In
                                </button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <!-- /.social-auth-links -->

                    <p class="mb-1">
                        <router-link :to="{ name: 'admin.forget' }">I forgot my password</router-link>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>
  
<script>
import toastr from 'toastr';
export default {
    data() {
        return {
            form: {
                phone: null,
                password: null,
            },
        };
    },
    methods: {
        login() {
            this.$store
                .dispatch("AdminLogin", this.form)
                .then((res) => {
                    toastr.success(res.message);
                    this.$router.push({name:'admin'});

                })
                .catch((error) => {
                    for (const [v] of Object.entries(error.response.data.errors)) {
                        toastr.error(v);
                    }
                    toastr.error(error.message)
                });
        },
    },
};
</script>
  