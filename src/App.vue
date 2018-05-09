<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'Welcome'" slot="activator">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            Bienvenido
          </v-list-tile>
          <span>Bienvenido a nuestro sitio web</span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'Games'" slot="activator">
            <v-list-tile-action>
              <v-icon>gamepad</v-icon>
            </v-list-tile-action>
            Juegos
          </v-list-tile>
          <span>Ve nuestros juegos</span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'PrivacyPolicy'" slot="activator">
            <v-list-tile-action>
              <v-icon>import_contacts</v-icon>
            </v-list-tile-action>
            Privacidad
          </v-list-tile>
          <span>Consultas las políticas de privacidad</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-xs-center">
        <v-bottom-sheet v-model="sheet">
          <v-btn slot="activator" color="purple" dark>Contacto</v-btn>
          <v-list>
            <v-subheader>Social</v-subheader>
            <v-list-tile
              v-for="tile in tiles"
              :key="tile.title"
              @click="sheet = false"
              :href="`${tile.url}`"
            >
                <v-list-tile-avatar>
                  <v-avatar size="32px" tile>
                    <img :src="`/static/social/${tile.img}`" :alt="tile.title">
                  </v-avatar>
                </v-list-tile-avatar>
                <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
            </v-list-tile>
  
          </v-list>
        </v-bottom-sheet>
      </div>
    </v-toolbar>
    <v-content>
      <!-- <router-view/> -->
      <v-container grid-list-xl text-xs-center>
        <component :is="currentPage" id="comp"></component>
      </v-container>
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import Contact from '@/components/Contact'
import Games from '@/components/Games'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Welcome from '@/components/Welcome'

export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'FuryGames',
      currentPage: 'Welcome',
      sheet: false,
      tiles: [
        { img: 'Playstore.png', title: 'PlayStore', url: 'https://play.google.com/store/apps/dev?id=8706941542662346005' },
        { img: 'Facebook.png', title: 'Facebook (FuryGames)', url: 'https://www.facebook.com/FuryGamesOrg/' },
        { img: 'Facebook.png', title: 'Facebook (FuryCode)', url: 'https://www.facebook.com/FuryCode/' },
        { img: 'Instagram.png', title: 'Instagram', url: 'https://www.instagram.com/furycodeandfurygames/' },
        { img: 'Youtube.png', title: 'Youtube (FuryCode)', url: 'https://www.youtube.com/user/ElementalCodeNet' },
        { img: 'Itchio.png', title: 'Itch.io', url: 'http://furygames.itch.io' }
      ]
    }
  },
  components: {
    Contact,
    Games,
    PrivacyPolicy,
    Welcome
  },
  name: 'App'
}
</script>
