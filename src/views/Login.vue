<template>
  <div >
    <div class="login-header">
    </div>
    <div class="login-container">
      <div class="login-form">
        <h2 class="login-form-header">Welcome to Shop Easy</h2>
        <p class="login-form-label">
          Welcome to Shop Easy, please login to your account!
        </p>
        <b-input
          pill
          block
          size="lg"
          class="login-form-signin"
          variant="light"
          v-model="user_name"
          placeholder="Enter User Name"
        ></b-input>
        <b-input
          pill
          block
          size="lg"
          class="login-form-signin"
          variant="light"
          type="password"
          v-model="password"
          placeholder="Enter Password"
        ></b-input>
        <b-button
          pill
          block
          size="lg"
          class="login-form-signin"
          variant="light"
          @click="Login"
        >
          <span>Sign in</span>
        </b-button>
       
        <label v-if="error" style="color:red">
          please double check your user name and password
        </label>
      </div>
    
      <img class="login-background" alt="shop easy logo" :src="onlineStoreImg" />
    </div>
  </div>
</template>

<script>
import onlineStoreImg from "../assets/onlinestore.png"
export default {
  name: "login",
  data() {
    return {
      error: false,
      user_name: null,
      password: null,
      onlineStoreImg:onlineStoreImg,
      usersDb:[{name:"Ussif",pass:"123"},{name:"Eslam",pass:"12"}]
    };
  },
  methods: {
    Login: function() {
     let isUserFound= this.usersDb.filter(x => x.name==this.user_name && x.pass==this.password)
    if(isUserFound.length){
      this.user=isUserFound[0];
        this.$bvToast.toast('Login Done Successfully',this.sucessToastConfig);
        this.$router.push({ name: "home" });
      }
      else{
            this.error=true;
            this.$bvToast.toast('Login Failed',this.failToastConfig);
        }
        

  
    }
  }
};
</script>

<style scoped>


.login-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 4%;
}

.login-header {
  padding-top: 2%;
}

.login-header > img {
  padding-left: 4%;
  padding-right: 4%;
  width: 10;
}

.login-background {
  width: 40%;
  height: 5%;
  position: relative;
    top: -30px;
    right: 80px;
}

.login-form-header {
  font-weight: bold;
}

.login-form-label {
  font-size: 1rem;
  color: #999999;
}

.login-form-signin {
  margin-top: 8%;
}

.login-form-signin > img {
  width: 5%;
  display: inline-block;
  margin-right: 1rem;
}
.login-form-signin > span {
  font-size: medium;
  font-family: "Open Sans", sans-serif;
  color: #949fa5;
}
</style>
