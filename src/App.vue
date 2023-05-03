<script>
import Title from './components/Title.vue'
import Text from './components/Text.vue'
import BgColor from './components/BgColor.vue'
import Color from './components/Color.vue'
import Format from './components/Format.vue'
import QrCode from './components/QrCode.vue'
import Download from './components/Download.vue'
import Print from './components/Print.vue'
import Create from './components/Create.vue'
import Ghub from './components/Ghub.vue'
export default{
  components: {
    Title, Text, BgColor, Color, Format, QrCode, Download, Print, Create, Ghub
  }
}
</script>

<template>
  <div class="wrapper">
    <Title/>
    <main>
      <div class="settings">
        <div class="up-sett">
          <Text/>
          <Format/>
        </div>
        <div class="bott-set">
          <BgColor/>
          <Color/>
        </div>
        <Create/>
        <Ghub :className="'pt-7 hidden sm:block md:pt-20'"/>
      </div>
      <div class="ready-page">
        <QrCode/>
        <div class="buttons">
          <Print/>
          <Download/>
        </div>
      </div>
    </main>
    <footer>
      <Ghub :className="'pt-7 sm:hidden mad:pt-20'"/>
    </footer>
  </div>
</template>

