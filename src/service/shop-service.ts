import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { graphql, useFragment } from '@/gql'
import { computed } from 'vue'
import type { PlaceAssetInput, ShopItemFragment } from '@/gql/graphql'
import { useErrorManager } from '@/utils/error-manager'
import { useProjectId } from '@/stores/project-id'
import { useAuth } from '@/service/use-auth'

class ShopService {

  public shopItems = computed<readonly ShopItemFragment[]>(() => {
    return useFragment(shopItemFragment, this.shopQuery.result.value?.project?.shopItems) || []
  })

  public buyAndPlace = async (projectId: string, input: PlaceAssetInput) => {
    await this.buyAndPlaceMutation.mutate({
      projectId,
      input
    })
  }

  constructor() {
    this.shopQuery.onError(useErrorManager().catchError)
    this.buyAndPlaceMutation.onError(useErrorManager().catchError)
  }

  shopQuery = provideApolloClient(apolloClient)(() => {
    return useQuery(graphql(`
        query Shop($projectId: UUID!) {
            project(id: $projectId) {
                shopItems {
                    ...ShopItem
                }
            }
        }
    `), () => ({
      projectId: useProjectId().getProjectIdOrThrow()
    }), () => ({
      enabled: useAuth().isLoggedIn() && useProjectId().isProjectSelected()
    }))
  })

  buyAndPlaceMutation = provideApolloClient(apolloClient)(() => {
    return useMutation(graphql(`
        mutation BuyAndPlace($projectId: UUID!, $input: PlaceAssetInput!) {
            mutateProject(id: $projectId) {
                buyAndPlace(input: $input) {
                    id
                }
            }
        }
    `), () => ({
      refetchQueries: ['UserStatsQuery', 'Sprint']
    }))
  })
}

const shopService = new ShopService()

export function useShopService() {
  return shopService
}

export const shopItemFragment = graphql(`
    fragment ShopItem on ShopItem {
        id
        name
        image
        price
    }
`)
