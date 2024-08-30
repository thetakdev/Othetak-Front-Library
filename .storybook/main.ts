import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "date-fns/_lib/format/longFormatters": require.resolve(
        "date-fns/_lib/format/longFormatters"
      ),
    };
    return config;
  },
};
export default config;
