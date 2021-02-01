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
              <post-item
              v-for="post in posts"
              :key="post._id"
              :title="post.title"
              :subtitle="post.subtitle" />
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
export default {
  components: {
    Navbar,
    PostItem
  },
  data () {
    return {
      title: 'My Title From Page',
      posts: [{
        _id: '1',
        title: 'My first Post',
        subtitle: 'My first subtitle'
      },
      {
        _id: '2',
        title: 'My second Post',
        subtitle: 'My Second Subtitle'
      }
      ]
    }
  }
}
</script>

<style>
.post-content {
  font-style: italic;
}

.post {
  margin-bottom: 20px;
  padding: 5px;
  border-bottom: 2px solid transparent;
}

.post:hover {
  border-bottom: 2px solid #e8e8e8;
}
</style>
