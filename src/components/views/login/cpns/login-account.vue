<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name"/>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password" />
            </el-form-item>
        </el-form>
        
    </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive,ref } from 'vue'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

export default defineComponent({
    setup () {
        const account = reactive({
            name:localCache.getCache('name') ?? '',
            password:localCache.getCache('password') ?? ''
        })
        const formRef = ref<InstanceType<typeof ElForm>>() 

        const loginAction = (iskeepPassword:boolean) =>{
            formRef.value?.validate((valid) =>{
               if(valid) {
              if(iskeepPassword) {
                localCache.setCache('name',account.name)
                localCache.setCache('password',account.password)
              } else {
                localCache.deleteCache('name')
                localCache.deleteCache('password')
              }
                
               }
                
            })
            
        }
        
        return {
            account,
            rules,
            loginAction,
            formRef
        }
    }
})
</script>

<style scoped>

</style>