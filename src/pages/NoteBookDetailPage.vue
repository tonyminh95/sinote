<template>
  <div class="full-height">
    <v-row no-gutters class="full-height">
      <v-col :cols="3" class="full-height">
        <v-card class="pa-2 full-height" outlined tile >
          {{ n }} of 3 {{ n === 2 ? '(wider)' : '' }}
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile >
          {{ n }} of 3 {{ n === 2 ? '(wider)' : '' }}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
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
