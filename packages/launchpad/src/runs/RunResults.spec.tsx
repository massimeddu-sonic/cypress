import RunResults from './RunResults.vue'
import { RunCardFragmentDoc } from '../generated/graphql-test'

describe('<RunResults />', () => {
  it('playground', () => {
    cy.mountFragment(RunCardFragmentDoc, {
      type: (ctx) => {
        return ctx.stubCloudData.CloudRunStubs.allPassing
      },
      render (gql) {
        return <RunResults gql={gql} />
      },
    })
  })
})