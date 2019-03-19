<template>
  <div id="app">
			<!--在引入router之后，这个UI组件就已经存在-->
    <router-view>
   
    </router-view>
  </div>
</template>

<script>
import { ENDED, LIVE, CONCERN,DEMO } from './common/config/tabs'
import MatchList from './components/match-list'

export default {
  name: 'app'
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
html, body, #app
  height: 100%
  text-align: center
#app
  background-color: color_grey
</style>
