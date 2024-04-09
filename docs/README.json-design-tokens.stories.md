# JSON design tokens
## Background
The benefit of storing design tokens with a platform-agnostic format such as JSON is that it can be converted or translated into other languages or tools (e.g CSS, Swift, Kotlin, Figma).

## Quick start
`design-tokens.json` holds our source of truth for design tokens in `mozilla-central` under the [design-system](https://searchfox.org/mozilla-central/source/toolkit/themes/shared/design-system) folder in `toolkit/themes/shared`. The CSS design token files in that folder come from the JSON file. If you need to modify a design token file, you should be editing the JSON.

In order for us to be able to define design tokens in one place (the JSON file) and allow all platforms to consume design tokens in their specific format, we use a build system called [Style Dictionary](https://amzn.github.io/style-dictionary/#/).

Here's how to build design tokens for desktop:

```sh
$ ./mach buildtokens
```

If successful, you should see Style Dictionary building all of our tokens files within the `design-system` folder. Otherwise, Style Dictionary can also generate helpful errors to help you debug.

At the end, we're capable of transforming JSON notation into CSS:

```json
{
 "color": {
    "blue": {
      "05": {
        "value": "#deeafc"
      },
      "30": {
        "value": "#73a7f3"
      },
      "50": {
        "value": "#0060df"
      },
      "60": {
        "value": "#0250bb"
      },
      "70": {
        "value": "#054096"
      },
      "80": {
        "value": "#003070"
      }
    },
  },
}
```

```css
--color-blue-05: #deeafc;
--color-blue-30: #73a7f3;
--color-blue-50: #0060df;
--color-blue-60: #0250bb;
--color-blue-70: #054096;
--color-blue-80: #003070;
```

Neat!

## Testing

We have basic tests in place to ensure that our built CSS files stay up to date
and that new tokens are properly categorized. These tests will fail if the JSON
is modified but the command to build the tokens CSS files doesn't run, or if the
tokens CSS files are modified directly without changing the JSON.

Our tests are Node-based to allow us to install and work with the
`style-dictionary` library, and follow a format that has been used previously
for Devtools and New Tab tests.

You can run the tests locally using the following command:

```sh
$ ./mach npm test --prefix=toolkit/themes/shared/design-system
```
