<template>
<!-- <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs> -->


<div>
    <div class="login-panel">

      <h1 class="title">后台管理系统</h1>
      <el-tabs type="border-card" stretch>
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <span><i class="el-icon-user-solid"></i>账号密码登录</span>
            </span>
          </template>
          <login-account ref="accountRef" />
          <user ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone"><template #label>
            <span class="custom-tabs-label">
              <span><i class="el-icon-mobile-phone"></i>手机账号登录</span>
            </span>
          </template>
          <login-phone />
          <phone />
        </el-tab-pane>
      </el-tabs>
      <div class="account-control">

        <el-checkbox v-model="iskeepPassword" >记住密码</el-checkbox>
        <el-link type="primary" >忘记密码</el-link>
      </div>
      <div>
        <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent,ref} from 'vue'
    import LoginAccount from './login-account.vue';
    import LoginPhone from './login-phone.vue';

    export default defineComponent({
      components:{
        LoginPhone,
        LoginAccount
      },
        setup(){
          const iskeepPassword = ref(true)
          const accountRef  = ref<InstanceType<typeof LoginAccount>>()

          const handleLoginClick  = () =>{
            accountRef.value?.loginAction(iskeepPassword.value)    
          }
            return{
              iskeepPassword,
              handleLoginClick
            }
        }
    })
</script>

<style scoped>
.login-panel {
  width: 320px;
}

.title {
  text-align: center;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.account-control {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.login-btn {
  width:100%
}
</style>