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
                <span v-if="feedback" class="red--text">{{feedback}}</span>
              </v-card-text>
              <v-card-actions>
                <v-spacer />

                <v-btn color="primary" v-on:click="login" :disabled="!valid">Login</v-btn>
                <v-btn color="warning" @click="reset">Reset Form</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
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
    login() {
      this.feedback = "";
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            //console.log(cred)
            this.$router.push({ name: "photos" });
          })
          .catch(err => {
            this.feedback = "Email and password don't exist";
          });
      }
    }
  }
};
</script>