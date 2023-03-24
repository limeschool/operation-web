<template>
  <a-row :gutter="[20, 10]">
    <a-col :span="6">
      <a-spin style="display: block" :loading="loading">
        <a-card class="app-user-card-item app-user-info">
          <div class="user-profile">
            <div class="user-photo">
              <span className="avatar-container">
                <UploadImg
                  v-model:imageUrl="userInfo.avatar"
                  :data="uploadConfig.data"
                  :headers="uploadConfig.headers"
                >
                </UploadImg>
              </span>
              <div class="name">{{ userInfo.name }}</div>
              <div class="slogon">{{ userInfo.nickname }}</div>
            </div>
            <div class="user-info">
              <ul class="user-info-list">
                <li>
                  <template v-if="userInfo.sex">
                    <div class="arco-icon gender-icon">♂</div>男
                  </template>
                  <template v-else>
                    <div class="arco-icon gender-icon">♀</div>女
                  </template>
                </li>
                <li><icon-location />{{ userInfo.team.name }}</li>
                <li><icon-user />{{ userInfo.role.name }}</li>
                <li><icon-phone />{{ userInfo.phone }}</li>
                <li><icon-email />{{ userInfo.email }}</li>
              </ul>
            </div>
          </div>
        </a-card>
      </a-spin>
    </a-col>

    <a-col :span="18">
      <a-spin style="display: block" :loading="loading">
        <a-card class="app-user-card-item app-user-options">
          <a-tabs :default-active-key="activeTab">
            <a-tab-pane key="1" title="基础信息">
              <a-form ref="formRef" class="app-user-form" :model="formData">
                <a-form-item label="昵称">
                  <a-input v-model="formData.nickname"></a-input>
                </a-form-item>
                <a-form-item label="性别">
                  <a-radio v-model="formData.sex" :value="true">男</a-radio>
                  <a-radio v-model="formData.sex" :value="false">女</a-radio>
                </a-form-item>
                <a-form-item>
                  <a-button type="primary" @click="onSubmit">保存</a-button>
                </a-form-item>
              </a-form>
            </a-tab-pane>
            <a-tab-pane key="2" title="安全设置">
              <SetSafe :user-info="userInfo"></SetSafe>
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-spin>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import useLoading from '@/hooks/loading';
  import { useUserStore } from '@/store';
  import { updateUserInfo } from '@/api/system/user';
  import UploadImg from '@/components/upload-img/index.vue';
  import { notice } from '@/utils';
  import { getToken } from '@/utils/auth';
  import SetSafe from '../set-safe/index.vue';

  const userStore = useUserStore();
  const userInfo: any = computed(() => userStore);
  const { email, nickname, phone, sex } = userInfo.value;
  const formData = reactive({ email, nickname, phone, sex });
  const formRef = ref<any>(null);
  const { loading, setLoading } = useLoading(true);
  const activeTab = ref('1');
  // 上传配置
  const uploadConfig = reactive({
    // 上传需要参数
    data: {
      dir: 'avatar',
    },
    // auth
    headers: {
      Authorization: getToken(),
    },
    // 单个文件大小限制
    fileSize: 0.5,
  });

  // 提交
  const onSubmit = () => {
    formRef.value.validate(async (valid: any) => {
      if (valid) return;

      Object.assign(formData, { avatar: userInfo.value.avatar });

      updateUserInfo(formData)
        .then(() => {
          notice({ content: '修改成功' });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  onMounted(() => {
    setLoading(false);
  });
</script>

<script lang="ts">
  export default {
    name: 'UserCard',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 20px;
  }
  .app-user-card {
    min-height: 410px;
  }
  .user-photo {
    text-align: center;
    line-height: 25px;
    padding-top: 20px;
    .slogon {
      padding-top: 8px;
      color: #999;
    }
    .name {
      margin-top: 15px;
      font-size: 24px;
      font-weight: 500;
      color: #262626;
    }
    .role {
      color: #bbb;
    }
  }
  .user-info-list {
    list-style: none;
    .arco-icon {
      margin-right: 5px;
      width: 15px;
    }
  }
  .user-info-list li {
    line-height: 30px;
    color: #666;
  }
  .user-info-list li:nth-child(1) .arco-icon {
    color: cornflowerblue;
  }
  .user-info-list li:nth-child(2) .arco-icon {
    color: green;
  }
  .user-info-list li:nth-child(3) .arco-icon {
    color: blue;
  }
  .user-info-list li:nth-child(4) .arco-icon {
    color: orange;
  }
  .user-info-list li:nth-child(5) .arco-icon {
    color: rebeccapurple;
  }
  .user-info-list li:nth-child(6) .arco-icon {
    color: magenta;
  }
  .user-info-list li:nth-child(7) .arco-icon {
    color: deepskyblue;
  }
  .app-user-card-item {
    min-height: calc(100vh - 155px);
  }
  .app-user-form {
    width: 80%;
  }
  .gender-icon {
    position: relative;
    top: -3px;
    margin-left: 2px;
  }
</style>
