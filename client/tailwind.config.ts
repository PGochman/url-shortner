import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          1: "#EDE0D4",
          2: "#E6CCB2",
          3: "#DDB892",
          4: "#B08968",
        },
        textColor: "#3C3633",
        shadow: "#7F5539"
      }
    },
  },
  plugins: [],
}
export default config
