<template>
  <div>
    <NavigationLayout :closeCourseButton="true" :menu="true">
      <div class="questions-container">
      <template v-for="(question,index) in questions"  >
        <VueButton :key="index" :disabled="index>max_page" @click="onclick(index)"  >
          {{question.text}}
        </VueButton>
      </template>
    </div>
      </NavigationLayout>

  </div>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import CourseContainer from '@/containers/Course'
import AudioManager from '@/helpers/audioManager'
import { mapGetters } from 'vuex'
import VueButton from '@/components/Button'
import config from '@/data/config'

export default {
  name: 'ContentsPage',

  data () {
    return {

    }
  },

  components: {
    NavigationLayout,
    CourseContainer,
    VueButton
  },

  computed: {
    ...mapGetters(['getCourses']),
    courseId () {
      if (this.$route.params.url_prefix === null || this.$route.params.url_prefix.length === 0) {
        return 0
      }
      for (var i = 0; i < this.getCourses.length; i++) {
        var q = this.getCourses[i];
        if (q.url_prefix === this.$route.params.url_prefix) {
          return q.id
        }
      }
    },

    course () {
      let course = config().courses[this.courseId-1];
      if(this.courseId && course && course.content)
        return course.content;
    },

    max_page(){
      return this.getCourses[this.courseId -1].max_page;
    },

    steps () {
      return this.course.questions.map((q, index) => {
        return {
          label: q.text,
          slot: q.id,
          url_prefix: q.url_prefix,
          type: this.course.questions[index].type,
          options: {nextDisabled: this.course.questions[index] ?
            (this.course.questions[index].type === 'icons' ||
              this.course.questions[index].type === 'cards' ||
              this.course.questions[index].type === 'calc' ||
              this.course.questions[index].type === 'mouth' ||
              this.course.questions[index].type === 'select'):
                false},
          nextLabel: this.course.questions[index + 1] ? this.course.questions[index + 1].text : null,
          nextType: this.course.questions[index + 1] ? this.course.questions[index + 1].type : null,
        }
      })
    },

    questions (){
      return this.course.questions;
    },

    getI18nAudio() {
      return config().audio
    },
  },

  methods: {

    onclick(page){
        if(page>this.max_page)
          return;
        let questionTitle = this.steps[page].url_prefix
        this.$router.push('/course/' + this.$route.params.url_prefix + "/" + questionTitle +  "/" + page)
    }
  }
}
</script>

<style scoped lang="scss">

  .questions-container{
     overflow-y: scroll;
     height: 83vh;
     margin-top: 15px;
  }

</style>
