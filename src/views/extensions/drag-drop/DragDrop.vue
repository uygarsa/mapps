<template>
  <b-row>
    <b-col cols="12">
     
      <drag-drop-multiple-list />

    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import DragDropSimple from './DragDropSimple.vue'
import DragDropMultipleList from './DragDropMultipleList.vue'
import DragDropClone from './DragDropClone.vue'
import DragDropAnimation from './DragDropAnimation.vue'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    vSelect,
    DragDropSimple,
    DragDropMultipleList,
    DragDropClone,
    DragDropAnimation,
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
  },
  data(){

  },
  setup(props, { emit }) {
    const blankUserData = {
      fullName: '',
      username: '',
      email: '',
      role: null,
      currentPlan: null,
      company: '',
      country: '',
      contact: '',
    }

    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }
  }
}
</script>
