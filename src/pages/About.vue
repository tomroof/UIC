<template>
  <NavigationLayout :back="true" :menu="true">
    <div class="image">
      <img src="@/assets/uic-school-front.jpg" alt="">
    </div>

    <div class="inner">
      <h1>About</h1>
      <p>Welcome to Healthy Starts, a fun new way to learn how to take excellent care of your teeth!</p>
      <h4>What is Healthy Starts?</h4>
      <p>Healthy Starts an innovative new interactive learning experience for kids, and their parents,  to learn why taking care of their teeth is so important, how to do it well, and share their accomplishments with friends. We think of this as sort of like fitbit for dental care.</p>
      <h4>How do I gets started?</h4>
      <p>First, choose your age group, coach and dental team. Then, you can choose a topic or play the one assigned by your dentist. As you play, your progress is tracked and you will earn points and badges! Check out your profile page to see your progress. The games can be played on a desktop computer, or any mobile device of your choice. Some of the games are best played while you’re brushing your teeth in the bathroom, so we recommend using a smartphone or tablet.</p>
      <p>After playing, review your progress with parents and your dentist to learn how you might do better and earn more points.</p>
      <h4>Presented By: University of Illinois at Chicago College of Dentistry</h4>
      <p>The University of Illinois at Chicago College of Dentistry is changing the future of oral health through excellence in education, patient care and research. We are a worldwide leader in oral health education, clinical care and research that is patient-centered and evidence-based, with a foundation in preventive and public health sciences. We are a part of UI Health and the University of Illinois at Chicago, Chicago’s largest university and is one of the nation’s top federally funded public research universities. Our strengths are founded in our college community, comprised of outstanding faculty, students and staff who share a commitment to the promise of public education, the advancement of knowledge, and the imperatives of doing good and giving back.</p>
      <p>Visit us online at <a href="https://dentistry.uic.edu/">dentistry.uic.edu</a>.</p>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

export default {
  name: 'Account',

  components: {
    NavigationLayout
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 40px;
}
.contacts {
  font-family: 'Zilla Slab';
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  line-height: 30px;
}

.image {
  position: fixed;
  top: -20px;
  left: 0;
  width: 100%;
  padding-bottom: 20px;

  img {
    display: block;
    width: 100%;
  }
}

.inner {
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  h1 {
    margin-top: 220px;
    font-family: 'Lato', sans-serif;
    font-size: 25px;
    color: #FFFFFF;
    letter-spacing: 0;
    max-width: 80%;
    font-weight: 300;
  }
  h4 {
    padding: 10px 0;
    color: #ffffff;
  }
  p {
    padding: 10px 0;
    color: #ffffff;
  }
  a {
    color: #ffffff;
    &:hover {
      text-decoration: none;
    }
  }
}

.title {
  opacity: 0.3;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
}

.item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  &:not(:first-child) {
    .info, .arrow {
      border-top: 1px solid rgba(255,255,255,0.05);
    }
  }
}

.items {
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}

.info {
  font-family: 'Lato', sans-serif;
  padding: 10px 0;
  font-weight: 300;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  flex: 1 1 auto;
}

.arrow {
  width: 6px;
  height: 10px;
}
</style>
