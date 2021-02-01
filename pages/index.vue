<template>
<div>
  <!-- Navbar -->
  <navbar />
  <div class="blogs-page">
    <div class="main-content">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-8 is-offset-2">
            <div class="section">
              <div class="title">
                <h1>Newest Posts</h1>
                <hr />
              </div>
              <post-item v-for="post in posts" :key="post._id" :title="post.title" :subtitle="post.subtitle" :date="post.createdAt" :isRead="post.isRead" />
            </div>
            <!-- end of post -->
          </div>
          <!-- end of side bar -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import PostItem from '~/components/PostItem'
import { fetchPostsAPI } from '~/store/post'
export default {
  components: {
    Navbar,
    PostItem
  },
  data () {
    return {
      title: 'My Title From Page',
      form: {
        title: 'some title',
        subtitle: 'some subtitle'
      }
    }
  },
  // async asyncData () {
  //   const posts = await fetchPostsAPI()
  //   return { posts }
  // },
  // mounted () {
  //   this.$store.dispatch('post/fetchPosts')
  //     .then((posts) => {
  //     })
  // },
  fetch ({ store }) {
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  computed: {
    posts () {
      return this.$store.state.post.items
    }
  },
  methods: {
    isFormValid () {
      if (this.form.title) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>

</style>
