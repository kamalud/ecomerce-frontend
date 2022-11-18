<template>
  <div class="home">
    <slider-view/>
    <section class="section suggest-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h3 style="float: left">SHOP BY CATEGORIES</h3>
            </div>
          </div>
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

          <div class="col" v-for="row in category" :key="row">
            <div class="product-card">
              <ul>
                <li>
                  <a class="suggest-card" href="shop-4column.html">
                    <img :src="row.image" alt="" />
                  </a>
                </li>
              </ul>

              <h6 class="text-center mt-2">{{row.name}}</h6>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section recent-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>recently sold items</h2>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/01.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text rate">Popular</label>
                  <label class="view-label off">-2%</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/03.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/02.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/04.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/05.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/11.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/02.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/06.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/08.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/09.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-btn-25">
              <a href="shop-4column.html" class="btn btn-outline"
                ><i class="fas fa-eye"></i><span>show more</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section recent-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Popular items</h2>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/01.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text rate">Popular</label>
                  <label class="view-label off">-2%</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/03.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/02.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/04.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/05.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/11.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/02.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/06.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/08.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/09.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-btn-25">
              <a href="shop-4column.html" class="btn btn-outline"
                ><i class="fas fa-eye"></i><span>show more</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section recent-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Feature items</h2>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/01.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text rate">Popular</label>
                  <label class="view-label off">-2%</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/03.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/02.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/04.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/05.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/11.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/02.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/06.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/08.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text sale">sale</label>
                </div>
                <button class="product-wish wish">
                  <i class="fas fa-heart"></i></button
                ><a class="product-image" href="product-video.html"
                  ><img src="@/assets/frontend/images/product/09.jpg" alt="product"
                /></a>
              </div>
              <div class="product-content">
                <h6 class="product-name">
                  <a href="product-video.html">Products Name</a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del><span>$28<small></small></span>
                </h6>
                <button class="product-add" title="Add to Cart">
                  <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-btn-25">
              <a href="shop-4column.html" class="btn btn-outline"
                ><i class="fas fa-eye"></i><span>show more</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

  <new-item/>

  </div>
</template>

<script>
import SliderView from '@/components/frontend/SliderView.vue'
import NewItem from '@/components/frontend/NewItem.vue'
import axios from "@/axios";
export default {
  components: { SliderView, NewItem,},

  data() {
        return {
          category: ''
        }
    },
    mounted() {
        return this.GetCategory();
    },
    methods: {
        GetCategory() {
            axios.get('category').then(response => {
                this.category = (response.data.data);
            });
        }
    }
}
</script>

