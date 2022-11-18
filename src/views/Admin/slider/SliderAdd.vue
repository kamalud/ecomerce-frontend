<template>
    <div class="sliderList">
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8 mt-5 m-auto">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Slider Table</h3>
                                <router-link :to="{ name: 'slider-list' }" class="float-right btn btn-info"><i
                                        class="fa fa-list"></i> Slider List</router-link>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <form @submit.prevent="SliderUpload" multipart >
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Slider name</label>
                                            <input type="text" class="form-control" v-model="form.name"
                                                placeholder="Enter email">
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Slider Photo</label>
                                            <vue-multi-image-upload @data-image="images" :max="100"
                                                :data-reset="component" :options="options" :image-size="imageSize"
                                                :image-format="formatType" />
                                            <button @click="component.clear = true">Clear</button>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->

                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
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

import { VueMultiImageUpload } from '@zakerxa/vue-multiple-image-upload';
import axios from 'axios';

export default {
    data(){
        return {
            form:{
                name:'',
                image:[]
            },
          component : {},
          options : {},
          imageSize : 2000000, // 2MB
          formatType : ['image/jpeg', 'image/png', 'image/jpg']
        }
    },
    components:{
      VueMultiImageUpload
    },
    methods:{
      images(e){
        let images = [];
        e.map(res=> images.push(res));
      },
      SliderUpload(){
        axios.post('admin/slider',this.form).then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
      }
    },
    mounted(){
      // Options
      this.options.max = "Max";
      this.options.ready = "Ready";
      this.options.select = "Choosed";
    }
}
</script>
<style>
.Image {
    width: 40px;
    height: 40px
}
</style>