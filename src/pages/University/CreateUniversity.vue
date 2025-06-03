<template>
  <Drawer
      v-model:visible="props.visible"
      position="right"
      :modal="true"
      :dismissableMask="true"
      :header="props.isEdit ? 'Редактировать университет' : 'Создать университет'"
      :style="{ width: '40%' }"
  >
    <div class="p-3">
      <div class="flex flex-col gap-3 mb-5">
        <InputText v-model="form.name" size="small" placeholder="Название"/>
        <InputText v-model="form.email" size="small" placeholder="Почта"/>
        <InputText v-model="form.city" size="small" placeholder="Город"/>
        <InputText v-model="form.photo_url" size="small" placeholder="Фото университета (URL)"/>
        <InputText v-model="form.university_type" size="small"
                   placeholder="Тип университета (Государственная или Частная)"/>
        <InputText v-model="form.website_url" size="small" placeholder="Ссылка на официальный сайт"/>
        <InputText v-model="form.admission_phone" size="small" placeholder="Телефонный номер"/>

        <div class="flex flex-col gap-px">
          <span>Краткая информация (макс 200 символов)</span>
          <Editor v-model="form.short_info" editorStyle="height: 120px"/>
        </div>

        <div class="flex flex-col gap-px">
          <span>Дополнительная информация (макс 500 символов)</span>
          <Editor v-model="form.extra_info" editorStyle="height: 120px"/>
        </div>

        <div class="flex flex-col gap-px">
          <span>Международное сотрудничество, обмен и т.д.</span>
          <Editor v-model="form.international_partners" editorStyle="height: 120px"/>
        </div>

        <div class="flex flex-col gap-px">
          <span>Поддержка спорта</span>
          <Editor v-model="form.sports" editorStyle="height: 120px"/>
        </div>

        <div class="flex flex-col gap-px">
          <span>Соцсети</span>
          <InputText v-model="form.instagram_url" class="mt-1.5" size="small" placeholder="Инстаграм"/>
          <InputText v-model="form.facebook_url" class="mt-1.5" size="small" placeholder="Фейсбук"/>
          <InputText v-model="form.tiktok_url" class="mt-1.5" size="small" placeholder="ТикТок"/>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-4">
        <button class="cancel" @click="close">Отменить</button>
        <button v-if="props.isEdit" class="delete" @click="deleteuniversity">Удалить</button>
        <button v-if="props.isEdit" class="update" @click="update">Обновить</button>
        <button class="create" @click="handleSubmit" v-if="!props.isEdit">Создать</button>
      </div>
    </template>
  </Drawer>
</template>

<script setup>
import {ref, defineProps, defineEmits, watch} from 'vue';
import {createUniversity, updateUniversity, deleteUniversity} from '@/services/universityService.js';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import Drawer from 'primevue/drawer';
import {useRouter} from "vue-router";



const props = defineProps({
  visible: Boolean,
  isEdit: {type: Boolean, default: false},
  initialData: {type: Object, default: () => ({})}
});
const emit = defineEmits(['update:visible', 'created']);

const form = ref({
  name: '',
  email: '',
  location: '',
  photo_url: '',
  university_type: '',
  website_url: '',
  admission_phone: '',
  short_info: '',
  extra_info: '',
  international_partners: '',
  sports: '',
  instagram_url: '',
  facebook_url: '',
  tiktok_url: ''
});
watch(
    () => props.initialData,
    (newData) => {
      if (props.isEdit && newData?.id) {
        form.value = {...newData};
      }
    },
    {immediate: true}
);
const update = async () => {
  try {
    await updateUniversity(form.value.id, form.value);
    emit('updated');
    emit('update:visible', false);
  } catch (err) {
    console.error('Ошибка при обновлении университета:', err);
  }
};
const deleteuniversity = async () => {
  try {
    await deleteUniversity((form.value.id));
    const router = useRouter();
    router.push({name: 'University'});
  } catch
      (err) {
    console.log(err)
  }
};


const handleSubmit = async () => {
  try {
    await createUniversity(form.value);
    emit('created');
    emit('update:visible', false);
    Object.keys(form.value).forEach(key => form.value[key] = '');
  } catch (err) {
    console.error('Ошибка при создании университета:', err);
  }
};

const close = () => {
  emit('update:visible', false);
};
</script>

<style scoped>
.create {
  @apply px-4 py-2 bg-blue-900 text-blue-50 text-sm font-medium rounded-md;
}

.cancel {
  @apply px-4 py-2 bg-gray-200 text-slate-700 text-base font-medium rounded-md;
}

.update {
  @apply px-4 py-2 bg-yellow-200 text-yellow-700 text-base font-medium rounded-md;
}

.delete {
  @apply px-4 py-2 bg-red-200 text-red-700 text-base font-medium rounded-md;
}
</style>
