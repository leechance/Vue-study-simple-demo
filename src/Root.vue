<template>
	<div class="root">
	 <div class="header">
	  <h1 class="title" @click="showPicker">
	    <span>{{source}}赛事</span>
	    <i class="cubeic-select" :class="{down: toDown}"></i>
	  </h1>
	  <div class="navigator">
	    <ul class="nav-list">
	      <li v-for="(item, index) in tabList" :key="index"
	        @click="switchTab(index)" :class="{active: currentPage === index}">
	        {{ item.txt }}
	      </li>
	    </ul>
	    <i class="triangle-up" :class="{left1: currentPage === 0,centerL:currentPage === 1,centerR:currentPage === 2,  right1: currentPage === 3}"></i>
	  </div>
	</div>
	<div class="content">
	  <cube-slide
	    :data="tabList"
	    :initialIndex="currentPage"
	    :loop="false"
	    :autoPlay="false"
	    :threshold="0.1"
	    @change="slideChange">
	    <cube-slide-item v-for="(item, index) in tabList" :key="index">
	      <div v-if="index!=3" class="match-list-wrapper">
					<!-- 这里的 :source="source" 第一个source是 mathList暴露的属性
										第二个source是 App组件的source，随着Picker的切换而变化-->
	        <match-list :source="source" :type="item.type"></match-list>
	      </div>
				<div v-else>
					<cube-button>Button</cube-button>
					<cube-button type="submit" @click="clickButton()">Submit Button</cube-button>
					<cube-button :active="true">Active Button</cube-button>
					<cube-button :disabled="true">Disabled Button</cube-button>
					<cube-loading></cube-loading>
					<cube-loading :size="28"></cube-loading>
					<cube-loading :size="40"></cube-loading>
					<cube-checkbox v-model="checked">
						Checkbox
					</cube-checkbox>
					<cube-checkbox v-model="checked" :position="right" :shape="square" :hollow-style="true">
						Styled Checkbox
					</cube-checkbox>
	
				</div>
				
	    </cube-slide-item>
	    <div slot="dots"></div>
	  </cube-slide>
	</div>
	</div>
</template>

<script>
	import { ENDED, LIVE, CONCERN,DEMO } from './common/config/tabs'
	import MatchList from './components/match-list'

export default {
  name: 'root',
  data () {
    return {
      currentPage: 1,
			checked:false,
      tabList: [
        {
          txt: '已结束',
          type: ENDED
        },
        {
          txt: '我的关注',
          type: CONCERN
        },
        {
          txt: '直播中',
          type: LIVE
        },
				{
					txt: '测试',
					type: DEMO
				}
      ],
      toDown: false,
      pickerList: [
        {text: 'NBA', value: 'NBA'},
        {text: 'DOTA', value: 'dota'},
        {text: 'SOCCER', value: 'soccer'}
      ],
      source: 'soccer'
    }
  },
  mounted () {
    this.picker = this.$createPicker({
      title: '赛事',
      data: [this.pickerList],
      selectedIndex: [2],
      onSelect: () => {
        this.toDown = false
      },
      onCancel: () => {
        this.toDown = false
      },
      onValueChange: (selectedVal) => {
				console.log(this.source)
        this.source = selectedVal[0]
      }
    })
  },
  methods: {
    switchTab (index) {
      this.currentPage = index
    },
    slideChange (index) {
      this.currentPage = index
    },
    showPicker () {
      this.toDown = true
      this.picker.show()
    },
		clickButton(){
			
			const toast = this.$createToast({
        time: 0,
        txt: 'Toast time 0'
      })
      toast.show()
      setTimeout(() => {
        toast.hide()
		this.$router.push('/login')
      }, 2000)
			
		}
  },
  components: {
    MatchList
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
  .header
    color: white
    background-color: #15191D
    .title
      padding: 20px 0
      font-size: 16px
      color: white
      display: inline-block
      .down
        display: inline-block
        transform: rotate(180deg)
    .navigator
      position: relative
      padding-bottom: 12px
      font-size: 12px
      .nav-list
        display: flex
        justify-content: space-around
        li
          width: 60px
          color: #E0E4E8
          &.active
            color: white
    .triangle-up
      position: absolute
      left: 33.33%
      transform: translate(-50%, 0)
      bottom: 0
      width: 0
      height: 0
      border-left: 7px solid transparent
      border-right: 7px solid transparent
      border-bottom: 8px solid color_grey
      transition: all 0.4s
		.triangle-up.centerL
			position: absolute
			left: 37%
			transform: translate(-50%, 0)
			bottom: 0
			width: 0
			height: 0
			border-left: 7px solid transparent
			border-right: 7px solid transparent
			border-bottom: 8px solid color_grey
			transition: all 0.4s
		.triangle-up.centerR
			position: absolute
			left: 63%
			transform: translate(-50%, 0)
			bottom: 0
			width: 0
			height: 0
			border-left: 7px solid transparent
			border-right: 7px solid transparent
			border-bottom: 8px solid color_grey
			transition: all 0.4s	
		.triangle-up.right1
			position: absolute
			left: 86%
			transform: translate(-50%, 0)
			bottom: 0
			width: 0
			height: 0
			border-left: 7px solid transparent
			border-right: 7px solid transparent
			border-bottom: 8px solid color_grey
			transition: all 0.4s
		.triangle-up.left1
			position: absolute
			left: 13%
			transform: translate(-50%, 0)
			bottom: 0
			width: 0
			height: 0
			border-left: 7px solid transparent
			border-right: 7px solid transparent
			border-bottom: 8px solid color_grey
			transition: all 0.4s				
  .content
    height: calc(100% - 80px)
    overflow: hidden
    .match-list-wrapper
      height: 100%
      background-color: #E2E5EA
	.picker-confirm-font-size
     font-size: 24px
	.cube-picker-confirm
	  font-size: 24px
</style>