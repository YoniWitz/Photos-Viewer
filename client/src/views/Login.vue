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
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="email"
                    required
                    :rules="emailRules"
                  />

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    required
                    :rules="passwordRules"
                  />
                </v-form>
                <v-toolbar-title v-if="feedback">{{feedback}}</v-toolbar-title>
              </v-card-text>
              <v-card-actions>
                <v-spacer />

                <v-btn color="primary" v-on:click="login" :disabled="!valid">Login</v-btn>
                <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from "@/services/AuthService";
export default {
  data() {
    return {
      email: "",
      password: "",
      feedback: "",
      valid: false,
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be at least 6 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    async login() {
      this.feedback = "";
      if (this.$refs.form.validate()) {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
          .then(res => {
            let msg = res.data.msg;
            console.log(res.data.msg);
            if (msg === "authenticated") {
              this.$emit("authenticated", true);

              window.localStorage.setItem(
                "authenticated",
                JSON.stringify(true)
              );

              this.$router.replace({ name: "photos" });
            } else if (msg === "register") {
              console.log("not authenticated");
              this.feedback = "This email isn't registered";
            } else {
              this.feedback = "please check email and password";
            }
          })
          .catch(err => {
            console.log(err.msg);
          });
      }
    }
  }
};
</script>