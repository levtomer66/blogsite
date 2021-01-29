<template>
  <div id="index">
    <TuiEditorViewer
        :value="content"
      />

    <TuiEditor
      mode="markdown"
      height="500px"

      :options="editorsOptions"
      :value="initContent"
      ref="tuiEditor"
    />
    <button v-on:click="save()">Save</button>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => {
    return {
      editorsOptions: {
        hideModeSwitch: true,
        language: "he_IL"
      },
      content: [
        '# 🍞📝 הוספת מאמר חדש'
      ].join('\n'),
      initContent: "התחל לכתוב כאן"
    }
  },
  methods: {
      save: async function() {
        const content = this.$refs.tuiEditor.invoke('getHtml');
        const contentBase64 = Buffer.from(content).toString('base64')
        const data = {
            title: "mynew",
            content: contentBase64
        };
        await this.$axios.post("http://lvh.me:3001/api/posts", data);


      }
  }
}
</script>
