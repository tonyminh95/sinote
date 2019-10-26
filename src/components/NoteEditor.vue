<template>
  <div class="full-height">
    <v-toolbar
      :flat="true"
      :extension-height="true"
    >
      <v-toolbar-title>Category Name</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>click this to del note</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider></v-divider>
      <v-col>
        <v-textarea
          outlined
          name="title"
          label="Title"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-col>
      <v-col>
        <v-textarea
          outlined
          name="Content"
          label="Content"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-col>
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

}
</script>

<style>
</style>
