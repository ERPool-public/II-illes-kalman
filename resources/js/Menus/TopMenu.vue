<template>
    <v-app id="app">
      <v-navigation-drawer app clipped>
        <v-list>
          <v-list-item to="/">
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/contact">
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-toolbar-title>Felső menü</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-form inline>
          <v-text-field label="Search" prepend-inner-icon="mdi-magnify"></v-text-field>
          <v-btn color="primary" type="submit">Search</v-btn>
        </v-form>
      </v-app-bar>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </template>

  <script>
  export default {
    name: 'TopMenu',
  };
  </script>

  <style scoped>

  </style>
