<template>
  <div class="full-height">
    <v-row no-gutters class="full-height">
      <v-col :cols="3" class="full-height">
        <NoteList/>
      </v-col>
      <v-col>
        <NoteEditor/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NoteList from '@/components/NoteList'
import NoteEditor from '@/components/NoteEditor'

export default {
  components: {
    NoteList,
    NoteEditor
  },

  data () {
    return {
    }
  },

  methods: {
  },

  created () {
  }
}
</script>

<style>
.test {
  height: 100%;
}
</style>
