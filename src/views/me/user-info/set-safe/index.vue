<template>
  <ul class="app-user-setting">
    <li class="item">
      <div class="body">
        <div class="title">账户密码</div>
        <div class="desc">当前密码强度：强</div>
      </div>
      <div class="action">
        <a-button @click="handleUpdate">修改</a-button>
      </div>
    </li>
    <li class="item">
      <div class="body">
        <div class="title">手机</div>
        <div class="desc">{{ userInfo.phone }}</div>
      </div>
      <div class="action none">
        <a-button @click="handleUpdate">修改</a-button>
      </div>
    </li>
    <li class="item">
      <div class="body">
        <div class="title">邮箱</div>
        <div class="desc">{{ userInfo.email }}</div>
      </div>
      <div class="action none">
        <a-button @click="handleUpdate">修改</a-button>
      </div>
    </li>
  </ul>
  <EmailCode
    v-model:edit-visible="editVisible"
    :model-form="modelForm"
    :set-edit-visible="setEditVisible"
  />
</template>

<script lang="ts" setup>
  import { reactive, ref, toRefs } from 'vue';
  import EmailCode from './email-code.vue';

  interface EditProps {
    userInfo: any;
  }

  const props = withDefaults(defineProps<EditProps>(), {
    userInfo: {},
  });
  const { userInfo } = toRefs(props);
  const editVisible = ref(false);
  const modelForm = reactive<any>({ email: userInfo.value.email });
  const setEditVisible = (v = false) => {
    editVisible.value = v;
  };

  // 更新
  const handleUpdate = () => {
    setEditVisible(true);
  };
</script>

<style lang="less">
  .app-user-setting {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
    .title {
      margin-bottom: 5px;
      color: #6c6c6c;
      font-size: 16px;
    }
    .desc {
      color: #bbb;
    }
  }
</style>
