
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'FooterNav': typeof import("../components/FooterNav.vue")['default']
    'MenusLayoutNotifications': typeof import("../components/Menus/LayoutNotifications.vue")['default']
    'MenusBlogbar': typeof import("../components/Menus/blogbar.vue")['default']
    'MenusCharacterbar': typeof import("../components/Menus/characterbar.vue")['default']
    'MenusEcosystemmenu': typeof import("../components/Menus/ecosystemmenu.vue")['default']
    'MenusGamebar': typeof import("../components/Menus/gamebar.vue")['default']
    'MenusLowerbar': typeof import("../components/Menus/lowerbar.vue")['default']
    'MenusMonsterbar': typeof import("../components/Menus/monsterbar.vue")['default']
    'MenusMythologybar': typeof import("../components/Menus/mythologybar.vue")['default']
    'MenusStorybar': typeof import("../components/Menus/storybar.vue")['default']
    'RelatedAbility': typeof import("../components/Related/ability.vue")['default']
    'RelatedCharacter': typeof import("../components/Related/character.vue")['default']
    'RelatedDictionary': typeof import("../components/Related/dictionary.vue")['default']
    'RelatedFacet': typeof import("../components/Related/facet.vue")['default']
    'RelatedProductCard': typeof import("../components/Related/productCard.vue")['default']
    'RelatedRelatedabilities': typeof import("../components/Related/relatedabilities.vue")['default']
    'RelatedRelatedcharacters': typeof import("../components/Related/relatedcharacters.vue")['default']
    'RelatedRelateddictionaries': typeof import("../components/Related/relateddictionaries.vue")['default']
    'RelatedRelatedposts': typeof import("../components/Related/relatedposts.vue")['default']
    'RelatedRelatedproducts': typeof import("../components/Related/relatedproducts.vue")['default']
    'RelatedRelatedstories': typeof import("../components/Related/relatedstories.vue")['default']
    'RelatedStory': typeof import("../components/Related/story.vue")['default']
    'RelatedVideo': typeof import("../components/Related/video.vue")['default']
    'SearchFilters': typeof import("../components/Search/filters.vue")['default']
    'SearchResultsBooksSearch': typeof import("../components/Search/results/booksSearch.vue")['default']
    'SearchResultsFinanceSearch': typeof import("../components/Search/results/financeSearch.vue")['default']
    'SearchResultsImageSearch': typeof import("../components/Search/results/imageSearch.vue")['default']
    'SearchResultsMusicSearch': typeof import("../components/Search/results/musicSearch.vue")['default']
    'SearchResultsNewsSearch': typeof import("../components/Search/results/newsSearch.vue")['default']
    'SearchResultsSpaceSearch': typeof import("../components/Search/results/spaceSearch.vue")['default']
    'SearchResultsTravelSearch': typeof import("../components/Search/results/travelSearch.vue")['default']
    'SearchResultsVideoSearch': typeof import("../components/Search/results/videoSearch.vue")['default']
    'Search': typeof import("../components/Search/search.vue")['default']
    'SearchWidgetsClearRefinements': typeof import("../components/Search/widgets/ClearRefinements.vue")['default']
    'SearchWidgetsNoResults': typeof import("../components/Search/widgets/NoResults.vue")['default']
    'AuthenticationLogout': typeof import("../components/authentication/logout.vue")['default']
    'BlocksLogo': typeof import("../components/blocks/logo.vue")['default']
    'HomePageCharacters': typeof import("../components/homePage/characters.vue")['default']
    'HomePageContentSection': typeof import("../components/homePage/contentSection.vue")['default']
    'HomePageIntro': typeof import("../components/homePage/intro.vue")['default']
    'HomePageMultiversebanner': typeof import("../components/homePage/multiversebanner.vue")['default']
    'HomePageVideoSection': typeof import("../components/homePage/videoSection.vue")['default']
    'MediaAudioPlayer': typeof import("../components/media/audio/audioPlayer.vue")['default']
    'MediaLivePlayer': typeof import("../components/media/live/livePlayer.vue")['default']
    'MediaVideoVideojs': typeof import("../components/media/video/videojs.vue")['default']
    'PagesAbilities': typeof import("../components/pages/abilities.vue")['default']
    'PagesDictionary': typeof import("../components/pages/dictionary.vue")['default']
    'PagesItems': typeof import("../components/pages/items.vue")['default']
    'PagesLevels': typeof import("../components/pages/levels.vue")['default']
    'PagesMonsters': typeof import("../components/pages/monsters/index.vue")['default']
    'PagesMythology': typeof import("../components/pages/mythology/index.vue")['default']
    'PagesPlaces': typeof import("../components/pages/places.vue")['default']
    'PagesStories': typeof import("../components/pages/stories.vue")['default']
    'PagesTypes': typeof import("../components/pages/types.vue")['default']
    'PartialsAddtolist': typeof import("../components/partials/addtolist.vue")['default']
    'PartialsComments': typeof import("../components/partials/comments.vue")['default']
    'PartialsCreateListBtn': typeof import("../components/partials/createListBtn.vue")['default']
    'PartialsFollowButton': typeof import("../components/partials/followButton.vue")['default']
    'PartialsListBtn': typeof import("../components/partials/listBtn.vue")['default']
    'PartialsShare': typeof import("../components/partials/share.vue")['default']
    'PartialsShareDialog': typeof import("../components/partials/shareDialog.vue")['default']
    'NuxtWelcome': typeof import("../../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'NuxtPage': typeof import("../../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyFooterNav': LazyComponent<typeof import("../components/FooterNav.vue")['default']>
    'LazyMenusLayoutNotifications': LazyComponent<typeof import("../components/Menus/LayoutNotifications.vue")['default']>
    'LazyMenusBlogbar': LazyComponent<typeof import("../components/Menus/blogbar.vue")['default']>
    'LazyMenusCharacterbar': LazyComponent<typeof import("../components/Menus/characterbar.vue")['default']>
    'LazyMenusEcosystemmenu': LazyComponent<typeof import("../components/Menus/ecosystemmenu.vue")['default']>
    'LazyMenusGamebar': LazyComponent<typeof import("../components/Menus/gamebar.vue")['default']>
    'LazyMenusLowerbar': LazyComponent<typeof import("../components/Menus/lowerbar.vue")['default']>
    'LazyMenusMonsterbar': LazyComponent<typeof import("../components/Menus/monsterbar.vue")['default']>
    'LazyMenusMythologybar': LazyComponent<typeof import("../components/Menus/mythologybar.vue")['default']>
    'LazyMenusStorybar': LazyComponent<typeof import("../components/Menus/storybar.vue")['default']>
    'LazyRelatedAbility': LazyComponent<typeof import("../components/Related/ability.vue")['default']>
    'LazyRelatedCharacter': LazyComponent<typeof import("../components/Related/character.vue")['default']>
    'LazyRelatedDictionary': LazyComponent<typeof import("../components/Related/dictionary.vue")['default']>
    'LazyRelatedFacet': LazyComponent<typeof import("../components/Related/facet.vue")['default']>
    'LazyRelatedProductCard': LazyComponent<typeof import("../components/Related/productCard.vue")['default']>
    'LazyRelatedRelatedabilities': LazyComponent<typeof import("../components/Related/relatedabilities.vue")['default']>
    'LazyRelatedRelatedcharacters': LazyComponent<typeof import("../components/Related/relatedcharacters.vue")['default']>
    'LazyRelatedRelateddictionaries': LazyComponent<typeof import("../components/Related/relateddictionaries.vue")['default']>
    'LazyRelatedRelatedposts': LazyComponent<typeof import("../components/Related/relatedposts.vue")['default']>
    'LazyRelatedRelatedproducts': LazyComponent<typeof import("../components/Related/relatedproducts.vue")['default']>
    'LazyRelatedRelatedstories': LazyComponent<typeof import("../components/Related/relatedstories.vue")['default']>
    'LazyRelatedStory': LazyComponent<typeof import("../components/Related/story.vue")['default']>
    'LazyRelatedVideo': LazyComponent<typeof import("../components/Related/video.vue")['default']>
    'LazySearchFilters': LazyComponent<typeof import("../components/Search/filters.vue")['default']>
    'LazySearchResultsBooksSearch': LazyComponent<typeof import("../components/Search/results/booksSearch.vue")['default']>
    'LazySearchResultsFinanceSearch': LazyComponent<typeof import("../components/Search/results/financeSearch.vue")['default']>
    'LazySearchResultsImageSearch': LazyComponent<typeof import("../components/Search/results/imageSearch.vue")['default']>
    'LazySearchResultsMusicSearch': LazyComponent<typeof import("../components/Search/results/musicSearch.vue")['default']>
    'LazySearchResultsNewsSearch': LazyComponent<typeof import("../components/Search/results/newsSearch.vue")['default']>
    'LazySearchResultsSpaceSearch': LazyComponent<typeof import("../components/Search/results/spaceSearch.vue")['default']>
    'LazySearchResultsTravelSearch': LazyComponent<typeof import("../components/Search/results/travelSearch.vue")['default']>
    'LazySearchResultsVideoSearch': LazyComponent<typeof import("../components/Search/results/videoSearch.vue")['default']>
    'LazySearch': LazyComponent<typeof import("../components/Search/search.vue")['default']>
    'LazySearchWidgetsClearRefinements': LazyComponent<typeof import("../components/Search/widgets/ClearRefinements.vue")['default']>
    'LazySearchWidgetsNoResults': LazyComponent<typeof import("../components/Search/widgets/NoResults.vue")['default']>
    'LazyAuthenticationLogout': LazyComponent<typeof import("../components/authentication/logout.vue")['default']>
    'LazyBlocksLogo': LazyComponent<typeof import("../components/blocks/logo.vue")['default']>
    'LazyHomePageCharacters': LazyComponent<typeof import("../components/homePage/characters.vue")['default']>
    'LazyHomePageContentSection': LazyComponent<typeof import("../components/homePage/contentSection.vue")['default']>
    'LazyHomePageIntro': LazyComponent<typeof import("../components/homePage/intro.vue")['default']>
    'LazyHomePageMultiversebanner': LazyComponent<typeof import("../components/homePage/multiversebanner.vue")['default']>
    'LazyHomePageVideoSection': LazyComponent<typeof import("../components/homePage/videoSection.vue")['default']>
    'LazyMediaAudioPlayer': LazyComponent<typeof import("../components/media/audio/audioPlayer.vue")['default']>
    'LazyMediaLivePlayer': LazyComponent<typeof import("../components/media/live/livePlayer.vue")['default']>
    'LazyMediaVideoVideojs': LazyComponent<typeof import("../components/media/video/videojs.vue")['default']>
    'LazyPagesAbilities': LazyComponent<typeof import("../components/pages/abilities.vue")['default']>
    'LazyPagesDictionary': LazyComponent<typeof import("../components/pages/dictionary.vue")['default']>
    'LazyPagesItems': LazyComponent<typeof import("../components/pages/items.vue")['default']>
    'LazyPagesLevels': LazyComponent<typeof import("../components/pages/levels.vue")['default']>
    'LazyPagesMonsters': LazyComponent<typeof import("../components/pages/monsters/index.vue")['default']>
    'LazyPagesMythology': LazyComponent<typeof import("../components/pages/mythology/index.vue")['default']>
    'LazyPagesPlaces': LazyComponent<typeof import("../components/pages/places.vue")['default']>
    'LazyPagesStories': LazyComponent<typeof import("../components/pages/stories.vue")['default']>
    'LazyPagesTypes': LazyComponent<typeof import("../components/pages/types.vue")['default']>
    'LazyPartialsAddtolist': LazyComponent<typeof import("../components/partials/addtolist.vue")['default']>
    'LazyPartialsComments': LazyComponent<typeof import("../components/partials/comments.vue")['default']>
    'LazyPartialsCreateListBtn': LazyComponent<typeof import("../components/partials/createListBtn.vue")['default']>
    'LazyPartialsFollowButton': LazyComponent<typeof import("../components/partials/followButton.vue")['default']>
    'LazyPartialsListBtn': LazyComponent<typeof import("../components/partials/listBtn.vue")['default']>
    'LazyPartialsShare': LazyComponent<typeof import("../components/partials/share.vue")['default']>
    'LazyPartialsShareDialog': LazyComponent<typeof import("../components/partials/shareDialog.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../../../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const FooterNav: typeof import("../components/FooterNav.vue")['default']
export const MenusLayoutNotifications: typeof import("../components/Menus/LayoutNotifications.vue")['default']
export const MenusBlogbar: typeof import("../components/Menus/blogbar.vue")['default']
export const MenusCharacterbar: typeof import("../components/Menus/characterbar.vue")['default']
export const MenusEcosystemmenu: typeof import("../components/Menus/ecosystemmenu.vue")['default']
export const MenusGamebar: typeof import("../components/Menus/gamebar.vue")['default']
export const MenusLowerbar: typeof import("../components/Menus/lowerbar.vue")['default']
export const MenusMonsterbar: typeof import("../components/Menus/monsterbar.vue")['default']
export const MenusMythologybar: typeof import("../components/Menus/mythologybar.vue")['default']
export const MenusStorybar: typeof import("../components/Menus/storybar.vue")['default']
export const RelatedAbility: typeof import("../components/Related/ability.vue")['default']
export const RelatedCharacter: typeof import("../components/Related/character.vue")['default']
export const RelatedDictionary: typeof import("../components/Related/dictionary.vue")['default']
export const RelatedFacet: typeof import("../components/Related/facet.vue")['default']
export const RelatedProductCard: typeof import("../components/Related/productCard.vue")['default']
export const RelatedRelatedabilities: typeof import("../components/Related/relatedabilities.vue")['default']
export const RelatedRelatedcharacters: typeof import("../components/Related/relatedcharacters.vue")['default']
export const RelatedRelateddictionaries: typeof import("../components/Related/relateddictionaries.vue")['default']
export const RelatedRelatedposts: typeof import("../components/Related/relatedposts.vue")['default']
export const RelatedRelatedproducts: typeof import("../components/Related/relatedproducts.vue")['default']
export const RelatedRelatedstories: typeof import("../components/Related/relatedstories.vue")['default']
export const RelatedStory: typeof import("../components/Related/story.vue")['default']
export const RelatedVideo: typeof import("../components/Related/video.vue")['default']
export const SearchFilters: typeof import("../components/Search/filters.vue")['default']
export const SearchResultsBooksSearch: typeof import("../components/Search/results/booksSearch.vue")['default']
export const SearchResultsFinanceSearch: typeof import("../components/Search/results/financeSearch.vue")['default']
export const SearchResultsImageSearch: typeof import("../components/Search/results/imageSearch.vue")['default']
export const SearchResultsMusicSearch: typeof import("../components/Search/results/musicSearch.vue")['default']
export const SearchResultsNewsSearch: typeof import("../components/Search/results/newsSearch.vue")['default']
export const SearchResultsSpaceSearch: typeof import("../components/Search/results/spaceSearch.vue")['default']
export const SearchResultsTravelSearch: typeof import("../components/Search/results/travelSearch.vue")['default']
export const SearchResultsVideoSearch: typeof import("../components/Search/results/videoSearch.vue")['default']
export const Search: typeof import("../components/Search/search.vue")['default']
export const SearchWidgetsClearRefinements: typeof import("../components/Search/widgets/ClearRefinements.vue")['default']
export const SearchWidgetsNoResults: typeof import("../components/Search/widgets/NoResults.vue")['default']
export const AuthenticationLogout: typeof import("../components/authentication/logout.vue")['default']
export const BlocksLogo: typeof import("../components/blocks/logo.vue")['default']
export const HomePageCharacters: typeof import("../components/homePage/characters.vue")['default']
export const HomePageContentSection: typeof import("../components/homePage/contentSection.vue")['default']
export const HomePageIntro: typeof import("../components/homePage/intro.vue")['default']
export const HomePageMultiversebanner: typeof import("../components/homePage/multiversebanner.vue")['default']
export const HomePageVideoSection: typeof import("../components/homePage/videoSection.vue")['default']
export const MediaAudioPlayer: typeof import("../components/media/audio/audioPlayer.vue")['default']
export const MediaLivePlayer: typeof import("../components/media/live/livePlayer.vue")['default']
export const MediaVideoVideojs: typeof import("../components/media/video/videojs.vue")['default']
export const PagesAbilities: typeof import("../components/pages/abilities.vue")['default']
export const PagesDictionary: typeof import("../components/pages/dictionary.vue")['default']
export const PagesItems: typeof import("../components/pages/items.vue")['default']
export const PagesLevels: typeof import("../components/pages/levels.vue")['default']
export const PagesMonsters: typeof import("../components/pages/monsters/index.vue")['default']
export const PagesMythology: typeof import("../components/pages/mythology/index.vue")['default']
export const PagesPlaces: typeof import("../components/pages/places.vue")['default']
export const PagesStories: typeof import("../components/pages/stories.vue")['default']
export const PagesTypes: typeof import("../components/pages/types.vue")['default']
export const PartialsAddtolist: typeof import("../components/partials/addtolist.vue")['default']
export const PartialsComments: typeof import("../components/partials/comments.vue")['default']
export const PartialsCreateListBtn: typeof import("../components/partials/createListBtn.vue")['default']
export const PartialsFollowButton: typeof import("../components/partials/followButton.vue")['default']
export const PartialsListBtn: typeof import("../components/partials/listBtn.vue")['default']
export const PartialsShare: typeof import("../components/partials/share.vue")['default']
export const PartialsShareDialog: typeof import("../components/partials/shareDialog.vue")['default']
export const NuxtWelcome: typeof import("../../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../../../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../../../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../../../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyFooterNav: LazyComponent<typeof import("../components/FooterNav.vue")['default']>
export const LazyMenusLayoutNotifications: LazyComponent<typeof import("../components/Menus/LayoutNotifications.vue")['default']>
export const LazyMenusBlogbar: LazyComponent<typeof import("../components/Menus/blogbar.vue")['default']>
export const LazyMenusCharacterbar: LazyComponent<typeof import("../components/Menus/characterbar.vue")['default']>
export const LazyMenusEcosystemmenu: LazyComponent<typeof import("../components/Menus/ecosystemmenu.vue")['default']>
export const LazyMenusGamebar: LazyComponent<typeof import("../components/Menus/gamebar.vue")['default']>
export const LazyMenusLowerbar: LazyComponent<typeof import("../components/Menus/lowerbar.vue")['default']>
export const LazyMenusMonsterbar: LazyComponent<typeof import("../components/Menus/monsterbar.vue")['default']>
export const LazyMenusMythologybar: LazyComponent<typeof import("../components/Menus/mythologybar.vue")['default']>
export const LazyMenusStorybar: LazyComponent<typeof import("../components/Menus/storybar.vue")['default']>
export const LazyRelatedAbility: LazyComponent<typeof import("../components/Related/ability.vue")['default']>
export const LazyRelatedCharacter: LazyComponent<typeof import("../components/Related/character.vue")['default']>
export const LazyRelatedDictionary: LazyComponent<typeof import("../components/Related/dictionary.vue")['default']>
export const LazyRelatedFacet: LazyComponent<typeof import("../components/Related/facet.vue")['default']>
export const LazyRelatedProductCard: LazyComponent<typeof import("../components/Related/productCard.vue")['default']>
export const LazyRelatedRelatedabilities: LazyComponent<typeof import("../components/Related/relatedabilities.vue")['default']>
export const LazyRelatedRelatedcharacters: LazyComponent<typeof import("../components/Related/relatedcharacters.vue")['default']>
export const LazyRelatedRelateddictionaries: LazyComponent<typeof import("../components/Related/relateddictionaries.vue")['default']>
export const LazyRelatedRelatedposts: LazyComponent<typeof import("../components/Related/relatedposts.vue")['default']>
export const LazyRelatedRelatedproducts: LazyComponent<typeof import("../components/Related/relatedproducts.vue")['default']>
export const LazyRelatedRelatedstories: LazyComponent<typeof import("../components/Related/relatedstories.vue")['default']>
export const LazyRelatedStory: LazyComponent<typeof import("../components/Related/story.vue")['default']>
export const LazyRelatedVideo: LazyComponent<typeof import("../components/Related/video.vue")['default']>
export const LazySearchFilters: LazyComponent<typeof import("../components/Search/filters.vue")['default']>
export const LazySearchResultsBooksSearch: LazyComponent<typeof import("../components/Search/results/booksSearch.vue")['default']>
export const LazySearchResultsFinanceSearch: LazyComponent<typeof import("../components/Search/results/financeSearch.vue")['default']>
export const LazySearchResultsImageSearch: LazyComponent<typeof import("../components/Search/results/imageSearch.vue")['default']>
export const LazySearchResultsMusicSearch: LazyComponent<typeof import("../components/Search/results/musicSearch.vue")['default']>
export const LazySearchResultsNewsSearch: LazyComponent<typeof import("../components/Search/results/newsSearch.vue")['default']>
export const LazySearchResultsSpaceSearch: LazyComponent<typeof import("../components/Search/results/spaceSearch.vue")['default']>
export const LazySearchResultsTravelSearch: LazyComponent<typeof import("../components/Search/results/travelSearch.vue")['default']>
export const LazySearchResultsVideoSearch: LazyComponent<typeof import("../components/Search/results/videoSearch.vue")['default']>
export const LazySearch: LazyComponent<typeof import("../components/Search/search.vue")['default']>
export const LazySearchWidgetsClearRefinements: LazyComponent<typeof import("../components/Search/widgets/ClearRefinements.vue")['default']>
export const LazySearchWidgetsNoResults: LazyComponent<typeof import("../components/Search/widgets/NoResults.vue")['default']>
export const LazyAuthenticationLogout: LazyComponent<typeof import("../components/authentication/logout.vue")['default']>
export const LazyBlocksLogo: LazyComponent<typeof import("../components/blocks/logo.vue")['default']>
export const LazyHomePageCharacters: LazyComponent<typeof import("../components/homePage/characters.vue")['default']>
export const LazyHomePageContentSection: LazyComponent<typeof import("../components/homePage/contentSection.vue")['default']>
export const LazyHomePageIntro: LazyComponent<typeof import("../components/homePage/intro.vue")['default']>
export const LazyHomePageMultiversebanner: LazyComponent<typeof import("../components/homePage/multiversebanner.vue")['default']>
export const LazyHomePageVideoSection: LazyComponent<typeof import("../components/homePage/videoSection.vue")['default']>
export const LazyMediaAudioPlayer: LazyComponent<typeof import("../components/media/audio/audioPlayer.vue")['default']>
export const LazyMediaLivePlayer: LazyComponent<typeof import("../components/media/live/livePlayer.vue")['default']>
export const LazyMediaVideoVideojs: LazyComponent<typeof import("../components/media/video/videojs.vue")['default']>
export const LazyPagesAbilities: LazyComponent<typeof import("../components/pages/abilities.vue")['default']>
export const LazyPagesDictionary: LazyComponent<typeof import("../components/pages/dictionary.vue")['default']>
export const LazyPagesItems: LazyComponent<typeof import("../components/pages/items.vue")['default']>
export const LazyPagesLevels: LazyComponent<typeof import("../components/pages/levels.vue")['default']>
export const LazyPagesMonsters: LazyComponent<typeof import("../components/pages/monsters/index.vue")['default']>
export const LazyPagesMythology: LazyComponent<typeof import("../components/pages/mythology/index.vue")['default']>
export const LazyPagesPlaces: LazyComponent<typeof import("../components/pages/places.vue")['default']>
export const LazyPagesStories: LazyComponent<typeof import("../components/pages/stories.vue")['default']>
export const LazyPagesTypes: LazyComponent<typeof import("../components/pages/types.vue")['default']>
export const LazyPartialsAddtolist: LazyComponent<typeof import("../components/partials/addtolist.vue")['default']>
export const LazyPartialsComments: LazyComponent<typeof import("../components/partials/comments.vue")['default']>
export const LazyPartialsCreateListBtn: LazyComponent<typeof import("../components/partials/createListBtn.vue")['default']>
export const LazyPartialsFollowButton: LazyComponent<typeof import("../components/partials/followButton.vue")['default']>
export const LazyPartialsListBtn: LazyComponent<typeof import("../components/partials/listBtn.vue")['default']>
export const LazyPartialsShare: LazyComponent<typeof import("../components/partials/share.vue")['default']>
export const LazyPartialsShareDialog: LazyComponent<typeof import("../components/partials/shareDialog.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../../../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../../../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
