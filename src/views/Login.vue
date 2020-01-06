<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                  <v-toolbar-title color="deep-purple" v-if="feedback">{{feedback}}</v-toolbar-title>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />

                <v-btn color="primary" v-on:click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from "@/services/AuthServiceLogin";
export default {
  data() {
    return {
      email: "",
      password: "",
      feedback: ""
    };
  },
  methods: {
    async login() {
      if (this.email && this.password) {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
          .then(res => {
            this.feedback = "";
            console.log(res.data.msg  );
          })
          .catch(err => {
            this.feedback = "some error occurred";
          });
      } else {
        this.feedback = "must enter username and password";
      }
    }
  }
};
</script>