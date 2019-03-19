<template>
	<form  v-if="!isReg">
		<div>
			<div>用户名：</div>
			<div>
			<input type="text" />
			</div>
			<div>
			密码 ：
			</div>
			</div>
			<input type="text" />
			</div>

			<button type="button" @click="login()">登录</button>
			<button type="button" @click="reg()">注册</button>
		</div>
	</form>
	<form v-else>
		<div>
			
			用户名：
			<input type="text" />
			
			密码：
			<input type="text" />
			再次输入密码：
			<input type="text" />
	
			<button type="button" @click="addUser()">确定</button>
			<button type="button" @click="cancle()">取消</button>
			
		</div>
	</form>
</template>

<script>
	export default {
		name: "Login",
		data(){
			return{
				isReg:false,
				name:'',
				passwd:'',
				repeat:''
			}
		},
		methods: {
			login() {

				this.$router.push('/home/list')
			},
			reg(){
				this.isReg=true
			},
			addUser(){
			  localStorage.setItem("name",this.name);
			   localStorage.setItem("passwd",this.passwd);
			},
			cancle(){
			this.isReg=false;	
			}
		}
		
	}
</script>

<style>
</style>
