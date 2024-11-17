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
     * Configuration for `@storefront-ui/nuxt`
     */
    ["storefrontUi"]: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-vuefire`
     */
    ["vuefire"]: typeof import("nuxt-vuefire").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
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
     * Configuration for `@storefront-ui/nuxt`
     */
    ["storefrontUi"]?: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-vuefire`
     */
    ["vuefire"]?: typeof import("nuxt-vuefire").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     */
    ["devtools"]?: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@storefront-ui/nuxt", Exclude<NuxtConfig["storefrontUi"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-vuefire", Exclude<NuxtConfig["vuefire"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
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
     * Configuration for `@storefront-ui/nuxt`
     * @see https://www.npmjs.com/package/@storefront-ui/nuxt
     */
    ["storefrontUi"]: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
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
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
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
     * Configuration for `@storefront-ui/nuxt`
     * @see https://www.npmjs.com/package/@storefront-ui/nuxt
     */
    ["storefrontUi"]?: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
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
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]?: typeof import("C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
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
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@storefront-ui/nuxt", Exclude<NuxtConfig["storefrontUi"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-vuefire", Exclude<NuxtConfig["vuefire"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/elitenovels-frontend/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
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

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

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

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

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
         id: string,
      },

      identity: any,

      version: string,
   },

   "nuxt-seo": {
      canonicalQueryWhitelist: Array<string>,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }