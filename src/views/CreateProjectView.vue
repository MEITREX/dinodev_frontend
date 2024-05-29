<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type CreateProjectInput, IssuePriority, IssueStateType } from '@/gql/graphql'
import router from '@/router'
import { routes } from '@/router/routes'
import { useProjectService } from '@/service/project-service'
import { useErrorManager } from '@/utils/error-manager'

const project: Ref<CreateProjectInput> = ref({
  name: 'Test name',
  description: undefined,
  startingSprintNumber: 4,
  projectSettings: {
    imsSettings: {
      imsName: 'Gropius',
      imsProjectId: '21d4aea1-b2a6-47b9-96de-6543d03a03cc',
      imsProjectUrl: 'http://localhost:4200/projects/21d4aea1-b2a6-47b9-96de-6543d03a03cc',
      imsIcon: {
        path: '<title>logo</title>\n' +
          '    <defs>\n' +
          '      <linearGradient x1="15.8779708%" y1="0%" x2="74.5%" y2="100%" id="linearGradient-1">\n' +
          '        <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>\n' +
          '        <stop stop-color="#000000" stop-opacity="0.0346679688" offset="100%"></stop>\n' +
          '      </linearGradient>\n' +
          '      <polygon id="path-2" points="48 22 48 42 62 32"></polygon>\n' +
          '      <linearGradient x1="17.6168369%" y1="0%" x2="74.5%" y2="100%" id="linearGradient-3">\n' +
          '        <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>\n' +
          '        <stop stop-color="#000000" stop-opacity="0.5" offset="100%"></stop>\n' +
          '      </linearGradient>\n' +
          '      <polygon id="path-4" points="5 22 5 42 19 32"></polygon>\n' +
          '    </defs>\n' +
          '    <g id="logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
          '      <g id="arrow-out">\n' +
          '        <use fill="#FFBF2A" xlink:href="#path-2"></use>\n' +
          '        <use\n' +
          '          fill-opacity="0.87"\n' +
          '          fill="url(#linearGradient-1)"\n' +
          '          style="mix-blend-mode: overlay"\n' +
          '          xlink:href="#path-2"\n' +
          '        ></use>\n' +
          '      </g>\n' +
          '      <path\n' +
          '        d="M47.9992723,32.876 L54.3577709,34.0322602 L53.6422291,37.9677398 L47.9992723,36.94 L47.9992723,32.876 Z M48,22 L49.4612723,23.044 L47.9992723,24.344 L48,22 Z"\n' +
          '        id="bug-shadow"\n' +
          '        fill="#000000"\n' +
          '        opacity="0.200895764"\n' +
          '      ></path>\n' +
          '      <path\n' +
          '        d="M32,10 C37.5228475,10 42,14.4771525 42,20 C42,20.6842022 41.9312861,21.3523553 41.8003827,21.9979351 C42.1020247,22.2244646 42.3919548,22.468923 42.667136,22.7288319 L49.6712723,16.5051814 L52.3287277,19.4948186 L44.9814948,26.0267046 C45.5093621,27.2445761 45.801961,28.588118 45.801961,30 C45.801961,30.4880794 45.766228,30.9752743 45.6951477,31.4576891 L54.3577709,33.0322602 L53.6422291,36.9677398 L44.9232723,35.381 L43.7292723,41.351 L51.5364426,50.7196312 L48.4635574,53.2803688 L42.0772178,45.6160538 C40.2605938,48.290639 37.1996079,50 33.801961,50 L30.198039,50 C26.8003921,50 23.7394062,48.290639 21.9227822,45.6160538 L15.5364426,53.2803688 L12.4635574,50.7196312 L20.2692723,41.351 L18.7792723,33.901 L21.4409301,32 L18.2006973,29.6873698 C18.2396369,28.4061335 18.5255175,27.1669285 19.0201701,26.0270086 L11.6712723,19.4948186 L14.3287277,16.5051814 L21.330517,22.7292604 C21.605343,22.4691818 21.8956148,22.2240371 22.2002606,21.9954338 C22.0686428,21.351664 22,20.6838482 22,20 C22,14.4771525 26.4771525,10 32,10 Z M32,14 C28.6862915,14 26,16.6862915 26,20 L26.005897,20.2431759 C26.0824967,20.2260017 26.1594929,20.2096702 26.2368777,20.1941932 C26.8826095,20.0650469 27.5395192,20 28.198039,20 L35.801961,20 C36.5547668,20 37.2881439,20.0831844 37.9934018,20.2408627 L38,20 C38,16.6862915 35.3137085,14 32,14 Z M36.686238,24.0647065 L36.7951167,24.0818151 L36.6735387,24.0628448 L36.6735387,24.0628448 L36.6192723,24.055 L36.5683224,24.0484834 C36.5288964,24.043457 36.4893509,24.0388133 36.4496896,24.034556 C36.3519783,24.0240676 36.2535648,24.015925 36.1545065,24.0101854 L35.801961,24 L28.198039,24 C28.0004831,24 27.8031686,24.009757 27.6068133,24.0292 L27.560046,24.0357545 C27.3797918,24.0532754 27.1998551,24.0808134 27.0213422,24.1165159 L26.7586614,24.1750949 C26.751941,24.1767501 26.7452259,24.1784163 26.7385161,24.1800933 L26.6500884,24.2029028 L26.523964,24.2379164 L26.523964,24.2379164 L26.4282723,24.266 L26.4813164,24.2504253 L26.3732723,24.283 L26.3342723,24.296 L26.2630212,24.3198744 L26.2630212,24.3198744 L26.217341,24.3355772 L26.1422723,24.362 L26.1182723,24.371 L26.1285479,24.3672857 L26.1152723,24.372 L26.1102723,24.374 L26.0909631,24.3811847 L26.0909631,24.3811847 L26.0622723,24.392 L26.000623,24.415772 L26.000623,24.415772 L25.9660999,24.4294344 L25.8265835,24.4872057 L25.8265835,24.4872057 L25.6891659,24.5482178 L25.6550267,24.5640243 L25.6329635,24.5743794 L25.6329635,24.5743794 L25.4313693,24.6741959 L25.4159347,24.6822333 L25.4159347,24.6822333 L25.3400069,24.7226142 L25.3400069,24.7226142 L25.2732723,24.759 L25.2498885,24.7723928 L25.2498885,24.7723928 C25.1157755,24.8479936 24.9851643,24.9284766 24.8582447,25.0135571 L24.7361632,25.0976121 L24.7361632,25.0976121 C24.7009289,25.1225198 24.6657669,25.1479573 24.6309137,25.1737537 L24.6189763,25.1826121 L24.5540226,25.2316288 L24.4550066,25.3090788 L24.4102723,25.345 L24.3032723,25.434 L24.2872723,25.448 L24.276377,25.4576276 L24.276377,25.4576276 L24.2861251,25.4492141 C24.2263414,25.5007005 24.16764,25.5533119 24.1100475,25.607008 L24.0912723,25.624 L24.0702723,25.644 L24.0573083,25.6567768 L24.0573083,25.6567768 L24.0502723,25.663 L24.0227225,25.6900793 L24.0227225,25.6900793 L23.9792723,25.732 L23.9246694,25.7874636 L23.9246694,25.7874636 L23.8460405,25.8688915 C23.8254652,25.8906053 23.8051363,25.9123807 23.7849746,25.9343009 L23.8042723,25.913 L23.6721589,26.0604698 C23.5590647,26.1905835 23.4516718,26.3254157 23.3502645,26.4645398 L23.2982723,26.536 L23.2805464,26.5622135 L23.2805464,26.5622135 L23.2402723,26.62 L23.2042723,26.673 L23.1845396,26.7038154 L23.1845396,26.7038154 L23.1552723,26.748 L23.1496064,26.7575636 L23.1496064,26.7575636 L23.1072723,26.824 L23.0632723,26.895 L23.0329251,26.946764 L23.0329251,26.946764 L23.032161,26.948056 L22.9992723,27.004 L22.9782723,27.04 L22.9712723,27.053 L22.9652723,27.063 L22.9190323,27.1479901 L22.9190323,27.1479901 L22.8852723,27.211 L22.8660395,27.2481897 L22.8660395,27.2481897 L22.8192723,27.339 L22.8624595,27.2551268 C22.7388057,27.4951094 22.631097,27.7437399 22.5404268,27.9993784 L22.478931,28.1820292 C22.213603,29.0141099 22.1269906,29.9145879 22.2554027,30.8289999 L22.314555,31.1766968 L24.314555,41.1766968 C24.394473,41.576287 24.5129939,41.9599253 24.6657675,42.3240456 C25.5297314,44.4507179 27.593065,46 31,46 L33,46 C36.5729167,46 38.4852015,44.5207443 39.3423545,42.33561 L39.3334519,42.3259053 C39.4418913,42.0676954 39.5331034,41.7996639 39.6055361,41.5230831 L39.685445,41.1766968 L40.3195574,38 L40.3202723,37.999 L40.9212291,35 L41.685445,31.1766968 L41.7162291,31 L41.7162723,31 L41.7363408,30.8849497 C41.7800077,30.5921244 41.801961,30.2963339 41.801961,30 C41.801961,29.3152796 41.6872642,28.6573481 41.4760354,28.0443701 L41.460252,27.9991582 L41.391892,27.8155126 L41.3657101,27.7497207 L41.3657101,27.7497207 L41.3387772,27.6843132 C41.3130864,27.6229587 41.2864056,27.5621217 41.2587547,27.5018221 L41.2982723,27.592 L41.202402,27.3824329 C41.1659545,27.3073753 41.1279884,27.2331918 41.0885435,27.1599222 L41.0812723,27.147 L41.0752723,27.136 L41.0682723,27.123 L41.035479,27.0634885 L41.035479,27.0634885 L41.0272723,27.05 L41.0212723,27.04 L40.9807083,26.9681426 L40.9807083,26.9681426 L40.9682723,26.948 L40.8457126,26.7489653 C40.7526854,26.6049375 40.6536571,26.4651492 40.5489813,26.3299541 L40.5272723,26.302 L40.4752723,26.237 L40.4286659,26.1795846 L40.4286659,26.1795846 L40.4016293,26.1471115 L40.3367863,26.0710705 L40.3367863,26.0710705 L40.2732723,25.999 L40.1955343,25.9138274 L40.1955343,25.9138274 L40.1211539,25.8362521 L39.9487278,25.6635917 C39.9350732,25.6505306 39.921357,25.6375334 39.9075798,25.6246005 L39.8882723,25.607 L39.741968,25.4754896 L39.741968,25.4754896 L39.8252723,25.549 L39.8106374,25.5355677 L39.8106374,25.5355677 L39.7212723,25.457 L39.741968,25.4754896 C39.60377,25.3549759 39.4600175,25.2407072 39.3111458,25.1331165 C39.2906635,25.1178727 39.2697475,25.1029671 39.2487323,25.0881929 L39.2782723,25.11 L39.1963749,25.0521933 C39.1577904,25.0256572 39.1188809,24.9995616 39.0796535,24.9739138 L39.0649377,24.9639818 L39.0338076,24.9442353 L39.0012723,24.923 L38.9462723,24.889 L38.9147118,24.8695717 L38.9147118,24.8695717 L38.8972723,24.859 L38.8742723,24.845 L38.8630172,24.8387619 L38.793055,24.7975515 L38.793055,24.7975515 L38.8342723,24.822 L38.7672723,24.783 L38.6782723,24.733 L38.7322723,24.763 L38.6798247,24.7339351 L38.6798247,24.7339351 L38.6582723,24.722 L38.6562723,24.721 L38.6452723,24.715 L38.5982723,24.69 L38.5832723,24.682 L38.5472723,24.664 L38.5142723,24.647 L38.5382723,24.659 L38.5154927,24.6473929 L38.5154927,24.6473929 L38.4434686,24.6112503 L38.4434686,24.6112503 L38.3961329,24.5883999 C38.2935838,24.5391305 38.1894207,24.4926943 38.0837445,24.4491917 L37.8606589,24.3625047 C37.7662315,24.3280125 37.6706946,24.2958252 37.5741163,24.2660107 L37.4802097,24.2378863 L37.4382723,24.226 L37.3483219,24.2011578 L37.3483219,24.2011578 L37.2462723,24.175 L37.3432357,24.1998207 L37.1999757,24.1637419 L37.1999757,24.1637419 L37.1362723,24.149 L37.0975333,24.1402379 L37.0975333,24.1402379 L37.0702723,24.134 L37.0712723,24.134 L37.0662723,24.133 L37.0702723,24.134 L37.0553744,24.1311227 L37.0553744,24.1311227 L36.9832723,24.116 L37.0382723,24.128 L36.9452723,24.109 L36.9382723,24.108 L36.9392723,24.108 L36.9312723,24.106 L36.925741,24.1050676 L36.8322723,24.088 L36.7951167,24.0818151 L36.7951167,24.0818151 L36.8312723,24.088 L36.686238,24.0647065 L36.686238,24.0647065 Z"\n' +
          '        id="bug"\n' +
          '        fill="#0C94D8"\n' +
          '        fill-rule="nonzero"\n' +
          '      ></path>\n' +
          '      <g id="arrow-in">\n' +
          '        <use fill="#00C6EB" xlink:href="#path-4"></use>\n' +
          '        <use\n' +
          '          fill-opacity="0.32"\n' +
          '          fill="url(#linearGradient-3)"\n' +
          '          style="mix-blend-mode: overlay"\n' +
          '          xlink:href="#path-4"\n' +
          '        ></use>\n' +
          '      </g>\n' +
          '    </g>'
      },
      issueStates: [
        { name: 'Backlog', imsStateId: '908682d1-59f3-4a14-858a-a23446b8c654', type: IssueStateType.Backlog },
        {
          name: 'Sprint Backlog',
          imsStateId: '762ad7d0-6f15-4a6e-a122-d8286418eb2a',
          type: IssueStateType.SprintBacklog
        },
        { name: 'In progress', imsStateId: '6cd3e63e-6c4f-42e6-bc72-8978a8da93c3', type: IssueStateType.InProgress },
        { name: 'Under review', imsStateId: '0010fdbd-845e-439f-9d1d-8f5c6569b3d2', type: IssueStateType.InProgress },
        {
          name: 'Done (this sprint)',
          imsStateId: 'c977ec27-bb40-4963-9c6e-3000f2ba1714',
          type: IssueStateType.DoneSprint
        },
        { name: 'Done', imsStateId: '25f19ca5-561c-4729-82f2-86b7d3eb90c7', type: IssueStateType.Done }
      ],
      imsIssueTemplateId: 'af6dbacd-cbd0-484e-be16-65671ae2bd67',
      effortEstimationFieldName: 'Estimated effort',
      sprintFieldName: 'Sprint',
      partOfRelationId: 'f7599621-1e28-4f32-99f6-328041274291',
      issuePriorities: [
        { issuePriority: IssuePriority.Low, imsPriorityId: 'c5598f22-7280-41ab-b7d4-fff0d7b2449b' },
        { issuePriority: IssuePriority.Medium, imsPriorityId: 'd825d7ff-9c99-4f91-8d9c-d3879322560f' },
        { issuePriority: IssuePriority.High, imsPriorityId: '2b100680-42d4-4576-bc0a-28c7b771773b' }
      ]
    },
    codeRepositorySettings: {
      repositories: [
        {
          name: 'Frontend',
          url: 'https://github.com/MEITREX/scrum_game_frontend',
          icon: {
            mdiIcon: 'mdi-github'
          }
        },
        {
          name: 'Backend',
          url: 'https://github.com/MEITREX/scrum_game_service',
          icon: {
            mdiIcon: 'mdi-github'
          }
        }
      ]
    },
    definitionOfDone: [
      {
        text: 'My issue required changes in the code',
        required: false,
        implies: [
          { text: 'The code follows the coding guidelines', required: true },
          { text: 'The code is tested', required: true },
          { text: 'The code is reviewed', required: true }
        ]
      },
      {
        text: 'My issue required changes in the documentation',
        required: false,
        implies: [
          { text: 'The documentation is up to date', required: true }
        ]
      },
      {
        text: 'I communicated the changes to the team',
        required: true
      }
    ]
  }
})

const valid = ref(false)

const projectNameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => /\S+/.test(v) || 'Name cannot be empty'
]

const { createProject, loading } = useProjectService()

function submit() {
  createProject(project.value)
    .then(result => {
      const newProjectId = result?.id
      if (!newProjectId) {
        throw new Error('Project creation failed')
      }
      return router.push(routes.project(newProjectId).main)
    })
    .catch((e) => {
      useErrorManager().catchError(e)
    })
}
</script>

<template>
  <v-main class="fill-height">
    <v-form fast-fail @submit.prevent v-model="valid" validate-on="blur">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" md="8">
            <h2 class="my-3">Create new project</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="project.name"
              label="Project name"
              :rules="projectNameRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="project.description"
              label="Description"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Settings</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="project.projectSettings.imsSettings.imsProjectId"
              label="IMS Project ID"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- states -->
        <v-row>
          <v-col cols="12">
            <h4>Issue states</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row v-for="(state, index) in project.projectSettings.imsSettings.issueStates" :key="index">
              <v-col cols="4">
                <v-text-field
                  v-model="state.name"
                  :label="'State ' + (index + 1)"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="state.imsStateId"
                  :label="'IMS State ID ' + (index + 1)"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="state.type"
                  :items="Object.values(IssueStateType)"
                  :label="'Type ' + (index + 1)"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-btn @click="submit" :loading="loading" :disabled="!valid">Create project</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-main>
</template>

<style scoped>

</style>
