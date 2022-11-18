<template>
    <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">

            <!-- Preloader -->
            <div class="preloader flex-column justify-content-center align-items-center">
                <!-- <img class="animation__shake" src="../../assets/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60"> -->
            </div>

            <HeaderView />
            <MenuView />
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
               
                <!-- /.content-header -->

                <!-- Main content -->
                <router-view></router-view>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
            <footer class="main-footer">
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                All rights reserved.
                <div class="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.2.0
                </div>
            </footer>

            <!-- Control Sidebar -->
            <aside class="control-sidebar control-sidebar-dark">
                <!-- Control sidebar content goes here -->
            </aside>
            <!-- /.control-sidebar -->
        </div>
        <!-- ./wrapper -->

        <!-- jQuery -->
    </div>
</template>

<script>

import HeaderView from '@/components/backend/HeaderView.vue';
import MenuView from '@/components/backend/MenuView.vue';

export default {
    components: { HeaderView, MenuView }
}
</script>
