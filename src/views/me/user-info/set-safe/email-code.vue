<template>
  <a-modal
    v-model:visible="visible"
    :width="450"
    draggable
    :loading="loading"
    :footer="false"
    @cancel="onClose"
  >
    <template #title>修改密码</template>
    <a-form ref="formRef" :model="formData" auto-label-width autocomplete="off">
      <a-form-item
        field="email"
        label="邮箱"
        :rules="[{ required: true, message: '邮箱不能为空' }]"
        :validate-trigger="['change', 'blur']"
      >
        <a-input
          v-model="modelForm.email"
          size="large"
          placeholder="请输入邮箱"
          allow-clear
          autocomplete="off"
        >
        </a-input>
        <a-button
          size="large"
          :style="{ marginLeft: '10px' }"
          type="primary"
          @click="onSendCode"
        >
          发送验证码
        </a-button>
      </a-form-item>
      <a-form-item
        label="验证码"
        field="captcha"
        :rules="[{ required: true, message: '验证码不能为空' }]"
        :validate-trigger="['change', 'blur']"
      >
        <a-input
          v-model="formData.captcha"
          size="large"
          placeholder="请输入验证码"
          allow-clear
          autocomplete="off"
        >
        </a-input>
      </a-form-item>
      <a-form-item
        label="密码"
        field="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
        :validate-trigger="['change', 'blur']"
      >
        <a-input-password
          v-model="formData.password"
          size="large"
          placeholder="请输入密码"
          allow-clear
        >
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-space :size="15" class="mb-4">
          <a-button type="primary" @click="onSave">提交</a-button>
          <a-button @click="onClose">关闭</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref, watch, onMounted, reactive, toRefs } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import useLoading from '@/hooks/loading';
  import { getEmailCaptcha, updateUserPassword } from '@/api/system/user';
  import { Message } from '@arco-design/web-vue';
  import { notice } from '@/utils';
  import useUser from '@/hooks/user';

  interface EditProps {
    modelForm: any;
    editVisible: boolean;
    setEditVisible: any;
  }

  const { logout } = useUser();
  const props = withDefaults(defineProps<EditProps>(), {
    editVisible: false,
    modelForm: {
      email: '',
    },
    setEditVisible: false,
    columns: [],
  });
  const formRef = ref<FormInstance>();
  const { loading, setLoading } = useLoading(true);
  const visible = ref(false);
  const { modelForm } = toRefs(props);
  const formData = reactive({
    captcha_id: 0,
    password: '',
    captcha: '',
  });

  watch(
    () => props.editVisible,
    (show: any) => {
      visible.value = show;
    }
  );

  // 发布
  const onSave = () => {
    updateUserPassword(formData).then((res: any) => {
      if (res.code !== 200) {
        notice({ type: 'error', content: res.msg });
        return;
      }

      Message.success('密码修改成功，正在跳转中...');

      setTimeout(() => {
        logout();
      }, 2000);
    });
  };

  // 关闭
  const onClose = () => {
    props.setEditVisible();
  };

  // 发送验证码
  const onSendCode = async () => {
    const res: any = await getEmailCaptcha();

    if (typeof res.data.id === 'undefined') {
      Message.error('验证码id无返回');
      return;
    }

    formData.captcha_id = res?.data?.id;
    notice({ content: '验证码已发送至你邮箱，请注意查收！' });
  };

  onMounted(() => {
    setLoading(false);
  });
</script>
