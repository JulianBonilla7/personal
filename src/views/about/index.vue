<template>
  <section class="container about">
    <div class="columns is-vcentered">
      <div class="column">
        <div class="px-3">
          <h1 class="title is-size-2">{{ $t("about.title") }}</h1>
          <p
            class="is-family-secondary is-size-5"
            v-html="$t('about.description')"
          ></p>
        </div>
        <!-- <a
          class="has-text-link"
          href="https://drive.google.com/file/d/0B-JwCiYQUxGYVnZkWTlaXzNsRFU/view?usp=sharing"
          target="_blank"
        >
          <span>CV</span>
        </a> -->
        <h2 class="is-size-2">Skills</h2>
        <dl class="skills">
          <dt class="is-size-4 is-family-secondary">Daily use</dt>
          <dd class="skill">
            <span class="icon is-large is-medium">
              <i class="is-size-3 devicon-javascript-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-html5-plain-wordmark"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-css3-plain-wordmark"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-sass-original"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-git-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <font-awesome-icon
                :icon="['fab', 'jira']"
                size="2x"
              ></font-awesome-icon>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-backbonejs-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-visualstudio-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-handlebars-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-yarn-plain"></i>
            </span>
          </dd>
          <dt class="is-size-4 is-family-secondary">Frequent</dt>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-npm-original-wordmark"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-angularjs-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-django-line"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-python-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-bootstrap-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-firefox-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-gulp-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-linux-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-wordpress-plain"></i>
            </span>
          </dd>
          <dt class="is-size-4 is-family-secondary">Basic</dt>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-go-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-react-original"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-vuejs-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-nodejs-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-mongodb-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-postgresql-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-photoshop-line"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-webpack-plain"></i>
            </span>
          </dd>
          <dt class="is-size-4 is-family-secondary">Interests</dt>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-amazonwebservices-original"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-d3js-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-typescript-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-express-original"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-jasmine-plain"></i>
            </span>
          </dd>
          <dd class="skill">
            <span class="icon is-large">
              <i class="is-size-3 devicon-mocha-plain"></i>
            </span>
          </dd>
        </dl>
      </div>
      <div class="column">
        <h2 class="is-size-2">Experience</h2>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical">
            <article
              class="tile is-child notification is-dark"
              v-for="item in experience"
              :key="item.companyName"
            >
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <h3>{{ item.role }}</h3>
                  </div>
                  <div class="level-item">
                    <a
                      class="has-text-info-dark"
                      target="_blank"
                      :href="item.companyURL"
                      >{{ item.companyName }}</a
                    >
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <span>{{ item.startDate }} - {{ item.endDate }}</span>
                  </div>
                </div>
              </div>
              <p class="is-family-secondary">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "welcome": "Welcome to my about page!"
  },
  "es": {
    "welcome": "¡Bienvenido a mi página!"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      experience: [
        {
          role: "Front-end developer",
          companyName: "EverFi",
          companyURL: "https://everfi.com/",
          startDate: "06/2017",
          endDate: "",
          description:
            "Implementation of a common framework for reusable and accessible UI components; customization of their look and feel using SASS based themes. Development of online educative courses with custom requirements related to design and functionality."
        },
        {
          role: "JavaScript Developer",
          companyName: "Victory Productions",
          companyURL: "",
          startDate: "03/2016",
          endDate: "07/2017",
          description:
            "Conversion of 300+ Flash-based educative games to HTML5 technologies and vanilla JavaScript."
        },
        {
          role: "Front-end developer",
          companyName: "Swapps",
          companyURL: "https://swapps.com/",
          startDate: "03/2016",
          endDate: "07/2017",
          description:
            "Make sure that the user experience is reflected in the design and translate it into HTML code , as well as implementing visual and interactive elements that users engage with through the application. Worked in multiple projects built  in a vast stack: Django, Wordpress, Ionic, AngularJS, Vue."
        }
      ],
      skills: []
    };
  }
};
</script>

<style lang="scss" scoped>
dd {
  display: inline-block;
}
.skills {
  i,
  svg {
    transition: all 0.3s ease-out;
    cursor: pointer;
    &:hover,
    &:focus {
      transform: scale(1.5);
      color: $primary;
    }
  }
}
</style>
