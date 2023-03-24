<template>
  <div class="app-single-upload">
    <a-upload
      list-type="picture-card"
      :limit="props.limit"
      :default-file-list="fileList"
      :action="uploadUrl"
      :data="props.data"
      :headers="props.headers"
      image-preview
      @success="handleUploadSuccess"
      @error="uploadError"
      @before-remove="handleRemove"
      @before-upload="beforeUpload"
    >
    </a-upload>
    <a-space v-if="$slots.default" :size="5" class="single-upload-tip">
      <icon-question-circle />
      <slot name="tip"></slot>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { notice } from '@/utils';
  import { FileItem } from '@arco-design/web-vue/es/upload/interfaces';
  import { set } from '@vueuse/core';

  interface UploadFileProps {
    imageUrl: string; // 图片地址 ==> 必传
    id?: string; // 组件id ==> 非必传，当页面存在多个上传组件时必传（默认为upload）
    drag?: boolean; // 是否支持拖拽上传 ==> 非必传（默认为true）
    disabled?: boolean; // 是否禁用上传组件 ==> 非必传（默认为false）
    fileSize?: number; // 单个文件大小限制 ==> 非必传（默认为 0.5M）
    uploadStyle?: { [key: string]: any }; // 上传组件样式 ==> 非必传
    limit?: number; // 最大上传数
    tip?: string;
    data?: any;
    headers?: any;
  }

  interface UploadEmits {
    (e: 'update:imageUrl', value: string): void;
    (e: 'check-validate'): void;
  }

  const emit = defineEmits<UploadEmits>();
  const props = withDefaults(defineProps<UploadFileProps>(), {
    id: 'upload',
    drag: true,
    disabled: false,
    fileSize: 0.5,
    limit: 1,
    modelValue: '',
    uploadStyle: () => ({ width: '175px', height: '175px' }),
    tip: '',
    data: {},
    headers: {},
  });

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const uploadUrl = `${apiUrl}/api/system/upload`;
  const imageUrl = ref('');
  const fileList = ref<any>([]);

  const bindImg = () => {
    if (props.imageUrl) {
      fileList.value[0] = {
        uid: 1,
        name: '20200717-103937.png',
        url: props.imageUrl,
      };
    }
  };

  const init = () => {
    bindImg();
  };

  init();

  // 上传成功
  const handleUploadSuccess = (uploadFile: FileItem) => {
    // console.log('uploadFile', uploadFile);
    const response = uploadFile?.response;

    if (response?.code !== 200) {
      notice({ type: 'error', content: response?.msg });
      return;
    }

    const path = response?.data?.file;
    const img = `${apiUrl}/${path}`;

    set(imageUrl, img);
    emit('update:imageUrl', img);
    notice({ content: '图片上传成功！' });
  };

  // 上传前
  const beforeUpload = (file: File) => {
    return new Promise<boolean>((resolve, reject) => {
      const imgType = ['image/jpg', 'image/jpeg', 'image/png'];

      if (!imgType.includes(file.type)) {
        notice({
          type: 'warning',
          content: '上传图片必须是 JPG/JPEG/PNG 格式！',
        });
        reject(false);
      } else if (file.size / 1024 / 1024 > props.fileSize) {
        notice({
          type: 'warning',
          content: `上传图片大小不能超过 ${props.fileSize}MB！`,
        });
        reject(false);
      }

      resolve(true);
    });
  };

  // 删除图片
  const handleRemove = (fileItem: FileItem) => {
    return new Promise<boolean>((resolve) => {
      console.log(fileItem);
      set(imageUrl, '');
      emit('update:imageUrl', '');
      resolve(true);
    });
  };

  // 图片上传错误提示
  const uploadError = () => {
    notice({
      type: 'error',
      content: '图片上传失败，请您重新上传！',
    });
  };
</script>

<style lang="less">
  .single-upload-tip {
    font-size: 12px;
    color: #ff7d00;
    padding-top: 3px;
  }
</style>
