import type { RetrospectiveActivityInput } from '@/gql/graphql'

export const retroCategoryGamePresets: RetrospectiveActivityInput[] = [
  {
    name: 'Start, Stop, Continue',
    columns: [
      { title: 'Start 🛫', description: 'What should we start doing in future sprints?' },
      { title: 'Stop 🫷', description: 'What are we doing now that we should stop doing?' },
      { title: 'Continue ⏩', description: 'What should we continue doing that is working well?' }
    ]
  },
  {
    name: 'Mad, Sad, Glad',
    columns: [
      { title: 'Mad 😡', description: 'What made you feel mad last sprint?' },
      { title: 'Sad 😞', description: 'What made you feel sad last sprint?' },
      { title: 'Glad ☺️', description: 'What made you feel glad last sprint?' }
    ]
  },
  {
    name: '4L\'s: Liked, Learned, Lacked, Longed For',
    columns: [
      { title: 'Liked 👍', description: 'What did you like about the last sprint?' },
      { title: 'Learned 📖', description: 'What did you learn?' },
      { title: 'Lacked 👎', description: 'What did was lacking last sprint, i.e., what went wrong?' },
      { title: 'Longed For 🔎', description: 'What did you long for in the last sprint?' }
    ]
  },
  {
    name: 'Sailboat',
    columns: [
      { title: 'Wind 🌬️', description: 'What is pushing us forward?' },
      { title: 'Anchor ⚓', description: 'What is holding us back?' },
      { title: 'Island 🏝️', description: 'What is our goal?' },
      { title: 'Rocks 🪨', description: 'What are the risks?' }
    ]
  }

]
