<template>
   <!-- header section start -->
		<header class="header-one header-two">
			<div class="header-top-two">
				<div class="container text-center">
					<div class="row">
						<div class="col-sm-12">
							<div class="middel-top">
								<div class="left floatleft">
									<p><i class="mdi mdi-clock"></i> Mon-Fri : 09:00-19:00</p>
										<li>{{ user }}</li>
								</div>
							</div>
							<div class="middel-top clearfix">
								<ul class="clearfix right floatright">
									<li v-if="user && user.id">
										<a href="#"><i class="mdi mdi-account"></i></a>
										<ul>
											<li><router-link :to="{name: 'UserDashboard'}">MyAccount </router-link></li>
											<li><a @click.prevent="userLogout()">Logout</a></li>
										</ul>
										
									</li>
									<li v-else>
										<a href="#"><i class="mdi mdi-account"></i></a>
										<ul>
											<li><router-link :to="{name: 'UserDashboard'}">My Account</router-link></li>
											<li><router-link :to="{name: 'UserLogin'}">Login</router-link></li>
											<li><router-link :to="{name: 'UserRegister'}">Register</router-link></li>
											
										</ul>
										
									</li>
								
									<li>
										<a href="#"><i class="mdi mdi-settings"></i></a>
										<ul>
											<li><router-link :to="{name: 'UserDashboard'}">My Account</router-link></li>
											<li>Cart</li>
											<li>Wishlist</li>
											<li>Checkout</li>
										</ul>
									</li>
								</ul>
								<div class="right floatright">
									<form action="#" method="get">
										<button type="submit"><i class="mdi mdi-magnify"></i></button>
										<input type="text" placeholder="Search within these results..." />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container text-center">
				<div class="row">
					<div class="col-sm-2">
						<div class="logo">
							<router-link :to="{name:'Home'}">
								<img src="/assets/public/img/logo2.png" alt="Sellshop" />
							</router-link>
						</div>
					</div>
					<div class="col-sm-8">
						<div class="header-middel">
							<div class="mainmenu">
								<nav>
									<ul>
										<li><router-link :to="{name:'Home'}">Home</router-link></li>
										<li>Shop</li>
										
										<li>About</li>
										<li>Contact</li>
									</ul>
								</nav>
							</div>
							<!-- mobile menu start -->
							<div class="mobile-menu-area">
								<div class="mobile-menu">
									<nav id="dropdown">
										<ul>
											<li><router-link :to="{name: 'Home'}">Home</router-link></li>
											<li>Home</li>
											<li>Shop</li>
											<li>About</li>
											<li>Contact</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="cart-itmes">
							<a class="cart-itme-a" href="cart.html">
								<i class="mdi mdi-cart"></i>
								 items :  <strong>$</strong>
							</a>
							<div class="cartdrop">

								<div class="sin-itme clearfix">
									<i class="mdi mdi-close"></i>
									<a class="cart-img" href="cart.html">
										<
									</a>
									<div class="menu-cart-text">
										<a href="#"><h5></h5></a>
										<span>Color :  </span>
										<span>Size :     </span>
										<strong>$</strong>
									</div>
								</div>
								<div class="total">
									<span>total <strong>= $</strong></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
        <!-- header section end -->
</template>

<script>
export default {
	name: "UserHeader",
    methods : {
      getUser() {
           this.$store.dispatch('user/getUser');
		},
		userLogout() {
			this.$store.dispatch('user/userLogout')
			localStorage.removeItem('userLoggedIn');
			this.$router.push({name: 'Home'})
			 this.$message({
				showClose: true,
				message: 'User Logout Successfully...'
			});
		}
    },
    computed : {
      user() {
        return this.$store.getters['user/getAuthUser']
			}
    },
    created() {
		this.getUser();
    },
	/*  
		mounted(){
    	console.log(this.$store.getters['user/getAuthUser']);
    }
  */
}
</script>

<style scoped>

</style>