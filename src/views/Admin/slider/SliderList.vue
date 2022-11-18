<template>
    <div class="sliderList">
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8 mt-5 m-auto">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Slider Table</h3>
                                <router-link :to="{name:'slider-add'}" class="float-right btn btn-success"><i class="fa fa-plus-circle"></i> Add Slider</router-link>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style="width: 10px">Id</th>
                                            <th>Slider name</th>
                                            <th>Slider image</th>
                                            <th style="width: 120px">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="row in data" :key="row">
                                            <td>1.</td>
                                            <td>{{row.name}}</td>
                                            <td><img class="Image" :src="row.image" alt=""></td>
                                            <td>
                                                <a class="badge bg-success mr-3"><i class="fa fa-edit"></i></a>
                                                <a href="#" class="badge bg-danger"><i class="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer clearfix">
                                <ul class="pagination pagination-sm m-0 float-right">
                                    <li class="page-item"><a class="page-link" href="#">«</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">»</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>

                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            data: []
        }
    },
    mounted(){
        this.getSlider()
    },
    methods: {
        getSlider() {
            axios.get('slider').then(response => {
               this.data = response.data.data;
            })
        }
    }
}
</script>

<style>
 .Image{
    width:40px;
    height: 40px
 }
</style>