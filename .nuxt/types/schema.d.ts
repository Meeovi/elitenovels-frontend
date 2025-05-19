import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-vuefire`
     */
    ["vuefire"]: typeof import("nuxt-vuefire").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@storyblok/nuxt`
     */
    ["storyblok"]: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     */
    ["devtools"]: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-vuefire`
     */
    ["vuefire"]?: typeof import("nuxt-vuefire").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@storyblok/nuxt`
     */
    ["storyblok"]?: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     */
    ["devtools"]?: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-vuefire", Exclude<NuxtConfig["vuefire"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@storyblok/nuxt", Exclude<NuxtConfig["storyblok"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-vuefire`
     * @see https://www.npmjs.com/package/nuxt-vuefire
     */
    ["vuefire"]: typeof import("nuxt-vuefire").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@storyblok/nuxt`
     * @see https://www.npmjs.com/package/@storyblok/nuxt
     */
    ["storyblok"]: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module
     */
    ["devtools"]: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-vuefire`
     * @see https://www.npmjs.com/package/nuxt-vuefire
     */
    ["vuefire"]?: typeof import("nuxt-vuefire").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@storyblok/nuxt`
     * @see https://www.npmjs.com/package/@storyblok/nuxt
     */
    ["storyblok"]?: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module
     */
    ["devtools"]?: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-vuefire", Exclude<NuxtConfig["vuefire"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@storyblok/nuxt", Exclude<NuxtConfig["storyblok"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   turnstile: {
      secretKey: string,
   },

   nitro: {
      envPrefix: string,
   },

   vuefire: {
      admin: any,

      auth: {
         enabled: boolean,

         errorMap: string,

         persistence: Array<string>,

         popupRedirectResolver: string,

         sessionCookie: boolean,
      },
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         "data-nuxt-schema-org": boolean,
      },

      identity: any,

      version: string,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },
  }
  interface PublicRuntimeConfig {
   appId: string,

   apiKey: string,

   indexName: string,

   authSecret: string,

   jwtSecret: string,

   directus: {
      url: string,

      auth: {
         email: string,

         password: string,

         token: string,
      },
   },

   meeDirectusUrl: string,

   auth: {
      meeDirectusEmail: string,

      meeDirectusPassword: string,

      meeDirectusToken: string,
   },

   firebaseApiKey: string,

   firebaseAuthDomain: string,

   firebaseProjectId: string,

   firebaseStorageBucket: string,

   firebaseMessagingSenderId: string,

   firebaseAppId: string,

   measurementId: string,

   commerceUrl: string,

   commerceGraphql: string,

   commerceApiToken: string,

   commentsUrl: string,

   budibaseEmbed: string,

   vuefire: {
      config: {
         apiKey: string,

         authDomain: string,

         projectId: string,

         storageBucket: string,

         messagingSenderId: string,

         appId: string,

         measurementId: string,
      },

      appCheck: {
         provider: string,

         key: string,

         isTokenAutoRefreshEnabled: boolean,

         debug: string,
      },
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         "data-nuxt-schema-org": boolean,
      },

      identity: any,

      version: string,
   },

   "nuxt-link-checker": {
      version: string,

      hasSitemapModule: boolean,

      rootDir: string,

      excludeLinks: Array<any>,

      skipInspections: Array<any>,

      fetchTimeout: number,

      showLiveInspections: boolean,

      fetchRemoteUrls: boolean,
   },

   "seo-utils": {
      canonicalQueryWhitelist: Array<string>,

      canonicalLowercase: boolean,
   },

   storyblok: {
      accessToken: string,

      enableSudoMode: boolean,

      usePlugin: boolean,

      bridge: boolean,

      devtools: boolean,

      componentsDir: string,

      apiOptions: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }