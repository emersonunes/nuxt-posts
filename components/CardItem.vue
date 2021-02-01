<template lang="html">
    <div class="card">
      <div class="card-content">
        <div class="msg-header">
          <span class="msg-from"><small>From Filip Jerga</small></span>
          <span class="msg-timestamp"></span>
          <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
        </div>
        <div class="msg-subject">
          <span class="msg-subject"><strong id="fake-subject-1">{{title}}</strong></span>
        </div>
        <div class="msg-snippet">
          <p id="fake-snippet-1">{{subtitle}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
}

</style>
