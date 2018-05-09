<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="secundary">
          <marquee class="headline">
            <!-- <a href="#"> Se actualizaron las políticas de privacidad</a> |  -->
            <a href="https://play.google.com/store/apps/details?id=aprender.a.programar.furygames"> Aprender a Programar: Aprende a Programar con divertidos personajes</a> | 
            <a href="https://play.google.com/store/apps/details?id=net.furygames.tablasdemultiplicar"> Tablas de multiplicar: Aprende o refuerza las tablas de multiplicar</a>          </marquee> 
        </v-card>
      </v-flex>

      <v-flex xs12 class="normal-align">
        <v-layout colum>
          <v-flex xs4>
            <v-card class="secundary">
              <v-card-media
                class="white--text"
                height="200px"
                src="/static/images/cards/aprender-a-programar.png"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Aprender a Programar</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">Android</span><br>
                  <span>Juego que enseña a programar paso a paso y con divertidos mini juegos y actividades.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="purple" href="https://play.google.com/store/apps/details?id=aprender.a.programar.furygames">PlayStore</v-btn>
                <v-btn flat color="purple" href="https://www.youtube.com/watch?v=-dPWZPals_Y">Youtube</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card class="secundary">
              <v-card-media
                class="white--text"
                height="200px"
                src="/static/images/cards/tablas-de-multiplicar.png"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Tablas de Multiplicar</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">Android</span><br>
                  <span>Juego para reforzar las tablas de multiplicar y aprenderlas.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="purple" href="https://play.google.com/store/apps/details?id=net.furygames.tablasdemultiplicar">PlayStore</v-btn>
                <v-btn flat color="purple" href="https://www.youtube.com/watch?v=aK6UBz_4lgI">Youtube</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card class="secundary">
              <v-card-media
                class="white--text"
                height="200px"
                src="/static/images/cards/ultra-space-ships.png"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Ultra Spaceships</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">PC</span><br>
                  <span>Divertido juego space shooter, en el cual podrás pasar de nivel y destruir gigantes boss.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="purple" href="https://furygames.itch.io/ultra-space-ships">Itch.io</v-btn>
                <v-btn flat color="purple" href="https://www.youtube.com/watch?v=aJ5gpJ6l6pg">Youtube</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- <v-layout colum>
          <v-flex xs6>
            <v-card class="secundary">
              xd
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card id="li-points-block" class="primary">
              <h6 class="title pt-1 pb-1">Today Points</h6>
              <h6 class="title pt-1 pb-1">1533</h6>
              <hr />
              <h6 class="title pt-1 pb-1">Total Points</h6>
              <h6 class="title pt-1 pb-1">10293</h6>
            </v-card>
          </v-flex>
        </v-layout> -->
      </v-flex>

      <v-flex xs12>
        <v-card dark color="secundary">
          <v-card-title class="headline">Acerca de FuryGames</v-card-title>
          <v-card-text class="text-sm-left">
            <p><br>Hola.&nbsp;</p>
<p>Mi nombre es <strong>Matías Muñoz Espinoza</strong>&nbsp;(sí soy solo una persona)&nbsp;y me estoy dedicando al desarrollo de videojuegos desde mayo del 2016, evidentemente lo he dejado y lo he retomado por algunos periodos de tiempo.&nbsp;</p>
<p>Mi principal herramienta de trabajo es <a href="http://godotengine.org" target="_blank">Godot Engine</a> y estoy enfocándome&nbsp;mucho en esa herramienta ya que también me gusta mucho el Open Source. También <a href="http://www.youtube.com/user/ElementalCodeNet" target="_blank">tengo un canal de youtube</a> en el cual hago principalmente tutoriales y devlogs, entre otros.&nbsp;La mayoría de las cosas que he aprendido ha sido de forma autodidacta y aún me faltan muchas cosas por aprender. Por ejemplo me gustaría aprender sobre la utilización del programa <a href="http://krita.org/es/" target="_blank">Krita</a>, entre otras cosas.</p>
<p>Tengo juegos tanto <a href="http://play.google.com/store/apps/dev?id=8706941542662346005" target="_blank">en la PlayStore</a>. como en <a href="http://furygames.itch.io">en Itch.io</a></p>
<p>Bueno, tómense su tiempo y jueguen alguno de mis juegos.<br></p>
<p>Eso es todo, de momento, ;-)</p>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.normal-align {
  text-align: left;
}

.secundary {
  min-height: 100%;
}

.headline {
  background-color: #000000b3;
  padding: 4px;
}
</style>

<script>
  export default {
    data () {
      return {
        images: [
          {
            src: '/static/images/cards/aprender-a-programar.png'
          },
          {
            src: '/static/images/carousel/Carousel2.png'
          },
          {
            src: '/static/images/carousel/Carousel3.png'
          }
        ]
      }
    }
  }
</script>