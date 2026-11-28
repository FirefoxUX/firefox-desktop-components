import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Docs/Design Tokens`}),`
`,(0,c.jsx)(t.h1,{id:`design-tokens`,children:`Design Tokens`}),`
`,(0,c.jsx)(t.h2,{id:`background`,children:`Background`}),`
`,(0,c.jsx)(t.p,{children:`Our design tokens are stored in JSON, the benefit of which is that they can be converted or translated into other languages or tools (e.g CSS, Swift, Kotlin, Figma).`}),`
`,(0,c.jsxs)(t.p,{children:[`For more information on how design tokens are named and organized, see the `,(0,c.jsx)(t.a,{href:`https://acorn.firefox.com/latest/desktop/design-tokens/how-design-tokens-work/overview-YYp6MVjt`,rel:`nofollow`,children:`Acorn Design System docs`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`design-token-tiers`,children:`Design token tiers`}),`
`,(0,c.jsxs)(t.p,{children:[`Design tokens are split into different levels: base, application, and component. The global `,(0,c.jsx)(t.code,{children:`tokens-shared.css`}),`, `,(0,c.jsx)(t.code,{children:`tokens-brand.css`}),` and `,(0,c.jsx)(t.code,{children:`tokens-platform.css`}),` files include the base, application and `,(0,c.jsx)(t.em,{children:`some`}),` component tokens. Component tokens that are generally used for styling outside of reusable moz- components like button, card, input, sidebar, panel, etc are included.`]}),`
`,(0,c.jsxs)(t.p,{children:[`While there are many global tokens, some component tokens are stored next to their component and aren't always imported by default. The moz- components keep their design token definitions next to their CSS/JS in `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets/moz-*/`}),`, and the `,(0,c.jsx)(t.code,{children:`browser/themes/shared/`}),` folder also has design tokens. This means design tokens for tabbrowser, urlbar, etc can be kept with the code that uses them.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Only design tokens in the `,(0,c.jsx)(t.code,{children:`toolkit/themes/shared/design-system/src/tokens/`}),` folder are included in the global design tokens. Any other design tokens will be built next to their source `,(0,c.jsx)(t.code,{children:`component.tokens.json`}),` file and need to be manually included where they're needed.`]}),`
`,(0,c.jsx)(t.h2,{id:`quick-start`,children:`Quick start`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`src/tokens`}),` holds our source of truth for design tokens in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),` under the `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system`,rel:`nofollow`,children:`design-system`}),` folder in `,(0,c.jsx)(t.code,{children:`toolkit/themes/shared`}),`. The CSS design token files in that folder come from the JSON files. If you need to modify a design token file, you should be editing the JSON.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The tokens are organized into files with the `,(0,c.jsx)(t.code,{children:`*.tokens.json`}),` suffix, where the first part of the filename defines the top-level category of token. For example, `,(0,c.jsx)(t.code,{children:`border.tokens.json`}),` outputs `,(0,c.jsx)(t.code,{children:`--border-*`}),` tokens.`]}),`
`,(0,c.jsxs)(t.p,{children:[`In order for us to be able to define design tokens in one place (the JSON files) and allow all platforms to consume design tokens in their specific format, we use a build system called `,(0,c.jsx)(t.a,{href:`https://amzn.github.io/style-dictionary/#/`,rel:`nofollow`,children:`Style Dictionary`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Here's how to build design tokens for desktop:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`$ ./mach buildtokens
`})}),`
`,(0,c.jsxs)(t.p,{children:[`If successful, you should see Style Dictionary building all of our tokens files within the `,(0,c.jsx)(t.code,{children:`design-system/dist`}),` folder. Otherwise, Style Dictionary can also generate helpful errors to help you debug.`]}),`
`,(0,c.jsx)(t.p,{children:`At the end, we're capable of transforming JSON notation into CSS:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
 "color": {
  "blue": {
    "0": {
      "value": "oklch(97% 0.05 260)"
    },
    "10": {
      "value": "oklch(90% 0.13 260)"
    },
    "20": {
      "value": "oklch(83% 0.17 260)"
    },
    "30": {
      "value": "oklch(76% 0.2 260)"
    },
    "40": {
      "value": "oklch(69% 0.22 260)"
    },
    "50": {
      "value": "oklch(62% 0.24 260)"
    },
    "60": {
      "value": "oklch(55% 0.24 260)"
    },
    "70": {
      "value": "oklch(48% 0.2 260)"
    },
    "80": {
      "value": "oklch(41% 0.17 260)"
    },
    "90": {
      "value": "oklch(34% 0.14 260)"
    },
    "100": {
      "value": "oklch(27% 0.1 260)"
    },
    "110": {
      "value": "oklch(20% 0.05 260)"
    }
  },
 }
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`--color-blue-0: oklch(97% 0.05 260);
--color-blue-10: oklch(90% 0.13 260);
--color-blue-20: oklch(83% 0.17 260);
--color-blue-30: oklch(76% 0.2 260);
--color-blue-40: oklch(69% 0.22 260);
--color-blue-50: oklch(62% 0.24 260);
--color-blue-60: oklch(55% 0.24 260);
--color-blue-70: oklch(48% 0.2 260);
--color-blue-80: oklch(41% 0.17 260);
--color-blue-90: oklch(34% 0.14 260);
--color-blue-100: oklch(27% 0.1 260);
--color-blue-110: oklch(20% 0.05 260);
`})}),`
`,(0,c.jsx)(t.p,{children:`Neat!`}),`
`,(0,c.jsx)(t.h2,{id:`testing`,children:`Testing`}),`
`,(0,c.jsx)(t.p,{children:`We have basic tests in place to ensure that our built CSS files stay up to date
and that new tokens are properly categorized. These tests will fail if the JSON
is modified but the command to build the tokens CSS files doesn't run, or if the
tokens CSS files are modified directly without changing the JSON.`}),`
`,(0,c.jsxs)(t.p,{children:[`Our tests are Node-based to allow us to install and work with the
`,(0,c.jsx)(t.code,{children:`style-dictionary`}),` library, and follow a format that has been used previously
for Devtools and New Tab tests.`]}),`
`,(0,c.jsx)(t.p,{children:`You can run the tests locally using the following command:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`$ ./mach npm test --prefix=toolkit/themes/shared/design-system
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The same tests run in CI as `,(0,c.jsx)(t.code,{children:`node(design-tokens)`}),`. They compare every CSS file
the build writes against the checked-in copy, including the component
`,(0,c.jsx)(t.code,{children:`*.tokens.css`}),` files next to their `,(0,c.jsx)(t.code,{children:`*.tokens.json`}),`. They don't run the
`,(0,c.jsx)(t.code,{children:`build-figma-nova`}),` step, so they can't catch a stale or pruned
`,(0,c.jsx)(t.code,{children:`*.nova.tokens.json`}),`; only the `,(0,c.jsx)(t.code,{children:`./mach buildtokens && git status --short`}),` check
described under "Overriding tokens" does. For the same reason, build with
`,(0,c.jsx)(t.code,{children:`./mach buildtokens`}),` rather than `,(0,c.jsx)(t.code,{children:`npm run build`}),`, which skips the
`,(0,c.jsx)(t.code,{children:`build-figma-nova`}),` step that `,(0,c.jsx)(t.code,{children:`./mach buildtokens`}),` runs first.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The CI task only runs when a file under `,(0,c.jsx)(t.code,{children:`toolkit/themes/shared/design-system/`}),`
changes, so a patch that edits only component token files elsewhere has to run
the tests locally.`]}),`
`,(0,c.jsx)(t.h2,{id:`json-format-deep-dive`,children:`JSON format deep dive`}),`
`,(0,c.jsxs)(t.p,{children:[`Style Dictionary works by ingesting JSON files with tokens data and performing various platform-specific transformations to output token files formatted for different languages. The library has certain quirks and limitations that we had to take into consideration when coming up with a JSON format for representing our tokens. The following is a bit of a "how to" guide for reading and adding to `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/src/tokens`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`src/tokens`})}),` for anyone who needs to consume our tokens or add new tokens.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Every `,(0,c.jsx)(t.code,{children:`*.tokens.css`}),` file in the tree is generated, and the `,(0,c.jsx)(t.code,{children:`*.tokens.json`}),` beside it is the source. They are not confined to `,(0,c.jsx)(t.code,{children:`dist/`}),`: around eighteen component sheets sit next to the code they style, under `,(0,c.jsx)(t.code,{children:`browser/themes/shared/`}),` (`,(0,c.jsx)(t.code,{children:`urlbar.tokens.css`}),`, `,(0,c.jsx)(t.code,{children:`tab.tokens.css`}),`) and `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets/`}),` (`,(0,c.jsx)(t.code,{children:`moz-badge.tokens.css`}),`, `,(0,c.jsx)(t.code,{children:`panel-list.tokens.css`}),`). Each one opens with a header saying so. The trap is that looking up what a token resolves to lands you in exactly the file you must not edit, so check the filename suffix and the header before changing a token declaration. A hand-written theme file in the same directory, such as `,(0,c.jsx)(t.code,{children:`urlbar.css`}),`, is fair game; its `,(0,c.jsx)(t.code,{children:`.tokens.css`}),` sibling is not.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The generator reads `,(0,c.jsx)(t.code,{children:`src/tokens/base/`}),` and the directories listed in `,(0,c.jsx)(t.code,{children:`COMPONENT_TOKEN_PATHS`}),` in `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/config/helpers/general/token-paths.mjs`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`token-paths.mjs`})}),`. Tokens from `,(0,c.jsx)(t.code,{children:`src/tokens/components/`}),` go into the global sheets in `,(0,c.jsx)(t.code,{children:`dist/`}),`, while each base `,(0,c.jsx)(t.code,{children:`*.tokens.json`}),` under `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets/`}),` and `,(0,c.jsx)(t.code,{children:`browser/themes/shared/`}),` is built into a `,(0,c.jsx)(t.code,{children:`*.tokens.css`}),` beside it. An override file such as `,(0,c.jsx)(t.code,{children:`moz-badge.nova.tokens.json`}),` gets no sheet of its own; its values go into the base file's sheet, under `,(0,c.jsx)(t.code,{children:`@media -moz-pref("browser.nova.enabled")`}),` for Nova.`]}),`
`,(0,c.jsxs)(t.p,{children:[`A `,(0,c.jsx)(t.code,{children:`comment`}),` next to a token's `,(0,c.jsx)(t.code,{children:`value`}),` is written as a CSS comment above every declaration of that token, in every layer it is declared in, forced colors and Nova included. A comment about one side's value, such as how a light-mode literal was derived, then sits above the other layers' declarations too, so put such a derivation in the commit message instead. A `,(0,c.jsx)(t.code,{children:`comment`}),` inside a `,(0,c.jsx)(t.code,{children:`nova`}),` block stays in the JSON and isn't written to the CSS.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Adding one token legitimately dirties four generated files: the component sheet, plus `,(0,c.jsx)(t.code,{children:`dist/semantic-categories.mjs`}),`, `,(0,c.jsx)(t.code,{children:`dist/tokens-table.mjs`}),` and `,(0,c.jsx)(t.code,{children:`dist/tokens-figma-primitives.json`}),`. A token with a `,(0,c.jsx)(t.code,{children:`prefersContrast`}),` or `,(0,c.jsx)(t.code,{children:`forcedColors`}),` value also dirties `,(0,c.jsx)(t.code,{children:`dist/high-contrast-tokens.mjs`}),`. That is propagation rather than drift - confirm it by checking that each hunk names your token.`]}),`
`,(0,c.jsx)(t.h3,{id:`naming`,children:`Naming`}),`
`,(0,c.jsxs)(t.p,{children:[`When going from token name to JSON, each place we would insert a hyphen, underscore, or case change in a variable name translates to a layer of nesting in our JSON. That means a token with the CSS variable name `,(0,c.jsx)(t.code,{children:`--border-radius-circle`}),` would be represented as:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"border": {
  "radius": {
    "circle": {
      "value": "9999px"
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`value`}),` key is required as this is the indicator `,(0,c.jsx)(t.a,{href:`https://amzn.github.io/style-dictionary/#/architecture?id=_4a-transform-the-tokens`,rel:`nofollow`,children:`Style Dictionary looks for`}),` to know what sections of the JSON to parse into distinct tokens. It gets omitted from the final variable name.`]}),`
`,(0,c.jsxs)(t.p,{children:[`For simple cases `,(0,c.jsx)(t.code,{children:`value`}),` will be either a string or a number, but when we have to take media queries or themes into account `,(0,c.jsx)(t.code,{children:`value`}),` will be an object. Examples of these cases will be explained in more detail below.`]}),`
`,(0,c.jsx)(t.h3,{id:`base`,children:(0,c.jsx)(t.code,{children:`@base`})}),`
`,(0,c.jsxs)(t.p,{children:[`When reading through our JSON you will see many instances where we have used an `,(0,c.jsx)(t.code,{children:`@base`}),` key, always appearing right before a `,(0,c.jsx)(t.code,{children:`value`}),` key indicating that everything up to that point should be parsed as a token. For example our `,(0,c.jsx)(t.code,{children:`--font-weight`}),` CSS token is represented like this in our JSON:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"font": {
  "weight": {
    "@base": {
      "value": "normal"
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This is a workaround for a `,(0,c.jsx)(t.a,{href:`https://github.com/amzn/style-dictionary/issues/119`,rel:`nofollow`,children:`known`}),` `,(0,c.jsx)(t.a,{href:`https://github.com/amzn/style-dictionary/issues/366`,rel:`nofollow`,children:`limitation`}),` of Style Dictionary where it doesn't support nested token names that appear after a `,(0,c.jsx)(t.code,{children:`value`}),` key. If we want to have both `,(0,c.jsx)(t.code,{children:`--font-weight`}),` and `,(0,c.jsx)(t.code,{children:`--font-weight-semibold`}),` CSS tokens they need to be represented as distinct objects with their own `,(0,c.jsx)(t.code,{children:`value`}),`s:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"font": {
  "weight": {
    "@base": {
      "value": "normal"
    },
    "semibold": {
      "value": 600
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@base`}),` is a special indicator we chose to enable Style Dictionary to parse our tokens correctly while still generating our desired variable names. Much like `,(0,c.jsx)(t.code,{children:`value`}),`, it ultimately `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/159929cd10b8fba135c72a497d815ab2dd5a521c/toolkit/themes/shared/design-system/tokens-config.js#94-96`,rel:`nofollow`,children:`gets removed`}),` from the final token name.`]}),`
`,(0,c.jsxs)(t.p,{children:[`You will also see many places where `,(0,c.jsx)(t.code,{children:`@base`}),` is referenced in a value definition. This is a bit of a gotcha - even though `,(0,c.jsx)(t.code,{children:`@base`}),` isn't part of the token name, we still need to include it when using Style Dictionary's syntax for `,(0,c.jsx)(t.a,{href:`https://amzn.github.io/style-dictionary/#/tokens?id=referencing-aliasing`,rel:`nofollow`,children:`variable references/aliases`}),`. That means the following CSS:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`--input-min-height: var(--button-min-height);
`})}),`
`,(0,c.jsx)(t.p,{children:`Will look like this in our JSON:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"input": {
  "min": {
    "height": {
      "value": "{button.min.height.@base}"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`high-contrast-mode-hcm-media-queries`,children:`High Contrast Mode (HCM) media queries`}),`
`,(0,c.jsxs)(t.p,{children:[`We need to be able to change our token values to support both the `,(0,c.jsx)(t.code,{children:`prefers-contrast`}),` and `,(0,c.jsx)(t.code,{children:`forced-colors`}),` `,(0,c.jsx)(t.a,{href:`https://firefox-source-docs.mozilla.org/accessible/HCMMediaQueries.html`,rel:`nofollow`,children:`media queries`}),`. We employ `,(0,c.jsx)(t.code,{children:`prefersContrast`}),` and `,(0,c.jsx)(t.code,{children:`forcedColors`}),` keys nested in a token's `,(0,c.jsx)(t.code,{children:`value`}),` key to indicate that we need to generate a media query entry for that token. For example this JSON:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"border": {
  "color": {
    "interactive": {
      "@base": {
        "value": {
          "prefersContrast": "{text.color.@base}",
          "forcedColors": "ButtonText",
        }
      }
    },
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`results in the following CSS:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`/* tokens-shared.css */

:root,
:host(.anonymous-content-host) {
  @layer tokens-prefers-contrast {
    @media (prefers-contrast) {
      /** Border **/
      --border-color-interactive: var(--text-color);
    }
  }

  @layer tokens-forced-colors {
    @media (forced-colors) {
      /** Border **/
      --border-color-interactive: ButtonText;
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The layers and media queries are nested inside a single `,(0,c.jsx)(t.code,{children:`:root, :host(.anonymous-content-host)`}),` selector, as recommended by the `,(0,c.jsx)(t.a,{href:`https://firefox-source-docs.mozilla.org/accessible/HCMMediaQueries.html#writing-maintainable-frontend-code`,rel:`nofollow`,children:`HCM media query guidelines`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`theming`,children:`Theming`}),`
`,(0,c.jsx)(t.p,{children:`Our JSON supports two dimensions of theming designed around the needs of the Firefox desktop client; light and dark themes, and brand and platform themes.`}),`
`,(0,c.jsx)(t.h4,{id:`light-and-dark-themes`,children:`Light and dark themes`}),`
`,(0,c.jsxs)(t.p,{children:[`We employ `,(0,c.jsx)(t.code,{children:`light`}),` and `,(0,c.jsx)(t.code,{children:`dark`}),` keys in our `,(0,c.jsx)(t.code,{children:`value`}),` objects to indicate when a given token should have different values in our light and dark themes:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"background": {
  "color": {
    "box": {
      "value": {
        "light": "{color.white}",
        "dark": "{color.gray.80}",
      }
    },
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The above JSON communicates that `,(0,c.jsx)(t.code,{children:`--background-color-box`}),` should have the value of `,(0,c.jsx)(t.code,{children:`var(--color-white)`}),` in our light theme and `,(0,c.jsx)(t.code,{children:`var(--color-gray-80)`}),` in our dark theme.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If a token has the same value for both the light and dark themes it will either have a string or number as its `,(0,c.jsx)(t.code,{children:`value`}),` or it will use a `,(0,c.jsx)(t.code,{children:`default`}),` key:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"button": {
  "background": {
    "color": {
      "disabled": {
        "value": {
          "default": "{button.background.color.@base}",
        }
      }
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The above JSON indicates that `,(0,c.jsx)(t.code,{children:`--button-background-color-disabled`}),` will have the value of `,(0,c.jsx)(t.code,{children:`var(--button-background-color)`}),` regardless of theme.`]}),`
`,(0,c.jsx)(t.h4,{id:`global-token-brand-and-platform-themes`,children:`Global token brand and platform themes`}),`
`,(0,c.jsxs)(t.p,{children:[`The Firefox desktop client consists of `,(0,c.jsx)(t.a,{href:`https://acorn.firefox.com/latest/resources/browser-anatomy/desktop-ZaxCgqkt#section-anatomy-fd`,rel:`nofollow`,children:`two distinct surfaces`}),`; "the chrome," or the UI of the browser application that surrounds web pages, and the web content itself which is often referred to as "in-content." Firefox UI development spans both surfaces since our `,(0,c.jsx)(t.code,{children:`about:`}),` pages are "in-content" pages. In our design system we distinguish between these surfaces by using the terminology of `,(0,c.jsx)(t.code,{children:`platform`}),` vs `,(0,c.jsx)(t.code,{children:`brand`}),`. Chrome specific token values live in `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/dist/tokens-platform.css`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`tokens-platform.css`})}),` and in-content specific token values live in `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/dist/tokens-brand.css`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`tokens-brand.css`})}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`We use `,(0,c.jsx)(t.code,{children:`platform`}),` and `,(0,c.jsx)(t.code,{children:`brand`}),` keys in our JSON to indicate when a token has a surface-specific value. For example this token definition:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"text": {
  "color": {
    "@base": {
      "value": {
        "brand": {
          "light": "{color.gray.100}",
          "dark": "{color.gray.0}"
        },
        "platform": {
          "default": "currentColor"
        }
      }
    },
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`communicates that `,(0,c.jsx)(t.code,{children:`--text-color`}),` should have the value `,(0,c.jsx)(t.code,{children:`currentColor`}),` in `,(0,c.jsx)(t.code,{children:`tokens-platform.css`}),` for chrome surfaces, and the value `,(0,c.jsx)(t.code,{children:`light-dark(var(--color-gray-100), var(--color-gray-0))`}),` in `,(0,c.jsx)(t.code,{children:`tokens-brand.css`}),` for in-content pages. The resulting CSS spans multiple files:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`/* tokens-platform.css */
:root,
:host(.anonymous-content-host) {
  @layer tokens-foundation {
    /** Text **/
    --text-color: currentColor;
  }
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`/* tokens-brand.css */
:root,
:host(.anonymous-content-host) {
  @layer tokens-foundation {
    /** Text **/
    --text-color: light-dark(var(--color-gray-100), var(--color-gray-0));
  }
}
`})}),`
`,(0,c.jsx)(t.h4,{id:`chrome-native-os-theme`,children:`Chrome native OS theme`}),`
`,(0,c.jsxs)(t.p,{children:[`Sometimes rather than using our own theme, we defer to the user's OS theme, this only happens in the browser chrome and is referred to as the "native theme." The `,(0,c.jsx)(t.code,{children:`(-moz-native-theme)`}),` media query matches when `,(0,c.jsx)(t.code,{children:`browser.theme.native-theme`}),` is true, which it is by default on Linux only, unless the document forces the non-native theme. `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/modules/LightweightThemeConsumer.sys.mjs`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`LightweightThemeConsumer.sys.mjs`})}),` forces it for every theme other than `,(0,c.jsx)(t.code,{children:`System theme — auto`}),`, and sets the root attributes that decide which layer paints the chrome:`]}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Theme`}),(0,c.jsx)(`th`,{children:`Root attributes`}),(0,c.jsx)(`th`,{children:(0,c.jsx)(`code`,{children:`(-moz-native-theme)`})}),(0,c.jsx)(`th`,{children:`Base token layers (before overrides)`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`System theme — auto`}),` on Linux`]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`theme-in-app`})}),(0,c.jsx)(`td`,{children:`matches`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`tokens-foundation`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`System theme — auto`}),` on Windows and macOS`]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`theme-in-app`})}),(0,c.jsx)(`td`,{children:`doesn't match (the pref is false)`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`tokens-browser-theme`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`Light`}),` and `,(0,c.jsx)(`code`,{children:`Dark`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`theme-in-app`})}),(0,c.jsx)(`td`,{children:`doesn't match (forced non-native)`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`tokens-browser-theme`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Alpenglow and add-on themes`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`lwtheme`})}),(0,c.jsx)(`td`,{children:`doesn't match (forced non-native)`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`tokens-foundation`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Any theme under forced colors`}),(0,c.jsxs)(`td`,{children:[`The default theme is swapped in (`,(0,c.jsx)(`code`,{children:`browser.theme.forced-colors-override.enabled`}),`): no `,(0,c.jsx)(`code`,{children:`lwtheme`}),`, and `,(0,c.jsx)(`code`,{children:`theme-in-app`}),` as the selected theme sets it`]}),(0,c.jsxs)(`td`,{children:[`as for `,(0,c.jsx)(`code`,{children:`System theme — auto`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`tokens-forced-colors`}),` over `,(0,c.jsx)(`code`,{children:`tokens-prefers-contrast`}),` where it matches, then `,(0,c.jsx)(`code`,{children:`tokens-foundation`})]})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`A lightweight theme therefore paints the same `,(0,c.jsx)(t.code,{children:`tokens-foundation`}),` values as the native theme, even though `,(0,c.jsx)(t.code,{children:`(-moz-native-theme)`}),` doesn't match for it. When a token has a `,(0,c.jsx)(t.code,{children:`nativeTheme`}),` value, that value goes into `,(0,c.jsx)(t.code,{children:`tokens-foundation`}),` and controls both the native theme and lightweight themes, while the token's light/dark value goes into the `,(0,c.jsx)(t.code,{children:`tokens-browser-theme`}),` layer for the in-app themes.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "color.accent.primary.@base": {
    "value": {
      "light": "{color.blue.60}",
      "dark": "{color.cyan.30}",
      "nativeTheme": "AccentColor",
      "forcedColors": "ButtonText"
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This snippet will use the light/dark value in-content, and in the chrome under the `,(0,c.jsx)(t.code,{children:`Light`}),` and `,(0,c.jsx)(t.code,{children:`Dark`}),` themes and under `,(0,c.jsx)(t.code,{children:`System theme — auto`}),` on Windows and macOS. Under the native theme and lightweight themes it will use `,(0,c.jsx)(t.code,{children:`AccentColor`}),`, and `,(0,c.jsx)(t.code,{children:`ButtonText`}),` in HCM.`]}),`
`,(0,c.jsxs)(t.p,{children:[`So to give the chrome an in-app color without breaking the native theme and lightweight themes, put a value that follows the system or lightweight theme (e.g. a color-mix of `,(0,c.jsx)(t.code,{children:`currentColor`}),`, `,(0,c.jsx)(t.code,{children:`{toolbar.background.color}`}),`) in `,(0,c.jsx)(t.code,{children:`nativeTheme`}),`, and the fixed in-app color in `,(0,c.jsx)(t.code,{children:`light`}),`/`,(0,c.jsx)(t.code,{children:`dark`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The "browser theme" values end up in the `,(0,c.jsx)(t.code,{children:`tokens-browser-theme`}),` layer, which needs a narrower selector than the other layers and so gets its own top-level rule:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`/* tokens-platform.css */
:root:is([theme-in-app], :not([lwtheme])),
:host(.anonymous-content-host) {
  @layer tokens-browser-theme {
    @media not ((forced-colors) or (-moz-native-theme)) {
      /** Color **/
      --color-accent-primary: light-dark(var(--color-blue-60), var(--color-cyan-30));
    }
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`rem-is-the-system-font-size-in-chrome`,children:`rem is the system font size in chrome`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`toolkit/themes/shared/global-shared.css`}),` sets `,(0,c.jsx)(t.code,{children:`:root { font: message-box }`}),`, and the `,(0,c.jsx)(t.code,{children:`font`}),` shorthand carries `,(0,c.jsx)(t.code,{children:`font-size`}),`, so a chrome document's root font size is the system UI font size: roughly 11px on macOS, 12px on Windows, and 14 to 15px on Linux. Only content documents get 16px. Every rem-valued token scales with that.`]}),`
`,(0,c.jsx)(t.p,{children:`The space scale is 16px-based, so every space token runs short in chrome - 25% short at a 12px root. That is a property of the scale rather than of any one patch: it was once calibrated to a 15px chrome root and was deliberately rebased onto a clean 16px basis. Two consequences for a patch that swaps a fixed-px value for a space token:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The two match only at a 16px root, so never call them equivalent without saying at what root size, and never assume 16px for anything in `,(0,c.jsx)(t.code,{children:`browser/`}),` or `,(0,c.jsx)(t.code,{children:`toolkit/`}),` chrome CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Where the quantity must not scale with the system font - a geometric bleed, an overlay inset, an icon box - pick a fixed-px token instead. `,(0,c.jsx)(t.code,{children:`--size-item-*`}),`, `,(0,c.jsx)(t.code,{children:`--icon-size-*`}),`, `,(0,c.jsx)(t.code,{children:`--size-image-*`}),` and `,(0,c.jsx)(t.code,{children:`--size-layout-*`}),` are all literal px.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`adding-new-tokens`,children:`Adding new tokens`}),`
`,(0,c.jsxs)(t.p,{children:[`In order to add a new token you will need to make changes to the appropriate file in `,(0,c.jsx)(t.code,{children:`src/tokens`}),` or add a new file if needed - any files generated based on our JSON token definitions should never be modified directly. You should be able to work backwards from the variable name in whatever language you're working with to figure out the correct JSON structure.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Once you've made your changes, you can generate the new tokens CSS files by running `,(0,c.jsx)(t.code,{children:`./mach buildtokens`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`If you encounter errors or get unexpected results when running the build command it may be because:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`You forgot to nest everything in a `,(0,c.jsx)(t.code,{children:`value`}),` key and consequently Style Dictionary is not parsing your tokens correctly, or;`]}),`
`,(0,c.jsxs)(t.li,{children:[`You omitted `,(0,c.jsx)(t.code,{children:`@base`}),` when referencing another token, or;`]}),`
`,(0,c.jsx)(t.li,{children:`You are referencing another token that you haven't defined in the JSON yet - Style Dictionary should give descriptive error messages in this case.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`If you need any help feel free to reach out in #firefox-reusable-components on Slack or #reusable-components on Matrix.`}),`
`,(0,c.jsx)(t.h3,{id:`built-in-theme-manifests-read-token-json`,children:`Built-in theme manifests read token JSON`}),`
`,(0,c.jsxs)(t.p,{children:[`The AI window and private window themes in `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/themes/addons`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`browser/themes/addons/`})}),` don't check in their `,(0,c.jsx)(t.code,{children:`manifest.json`}),`. `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/themes/addons/process_tokens.py`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`process_tokens.py`})}),` generates it at build time from the theme's `,(0,c.jsx)(t.code,{children:`manifest.in.json`}),` and the token JSON files that `,(0,c.jsx)(t.code,{children:`browser/themes/addons/moz.build`}),` lists as the `,(0,c.jsx)(t.code,{children:`GeneratedFile`}),` inputs. A `,(0,c.jsx)(t.code,{children:`{a.b.c}`}),` reference in the `,(0,c.jsx)(t.code,{children:`colors`}),` or `,(0,c.jsx)(t.code,{children:`properties`}),` of the manifest's `,(0,c.jsx)(t.code,{children:`theme`}),` or `,(0,c.jsx)(t.code,{children:`dark_theme`}),` is a path into those files, with the file name as its first segment and a `,(0,c.jsx)(t.code,{children:`*.nova.tokens.json`}),` merged over its base file; a reference anywhere else, such as in `,(0,c.jsx)(t.code,{children:`images`}),`, is copied unchanged. The script takes the token's `,(0,c.jsx)(t.code,{children:`nova`}),` value when it has one, then picks the `,(0,c.jsx)(t.code,{children:`light`}),` or `,(0,c.jsx)(t.code,{children:`dark`}),` side for the manifest's `,(0,c.jsx)(t.code,{children:`theme`}),` or `,(0,c.jsx)(t.code,{children:`dark_theme`}),`, falling back to `,(0,c.jsx)(t.code,{children:`default`}),` and then `,(0,c.jsx)(t.code,{children:`brand`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The references are substituted at build time, and a reference inside a token's value is followed too, so `,(0,c.jsx)(t.code,{children:`{toolbar.field.border.color.focus}`}),` also depends on `,(0,c.jsx)(t.code,{children:`focus.outline.color`}),`. When the theme applies, its `,(0,c.jsx)(t.code,{children:`colors`}),` are parsed as standalone colors with `,(0,c.jsx)(t.code,{children:`currentColor`}),` taken as black, so a token that resolves where it is used (e.g. a color-mix of `,(0,c.jsx)(t.code,{children:`currentColor`}),`) can't feed one; spell such a color out in `,(0,c.jsx)(t.code,{children:`manifest.in.json`}),`. A `,(0,c.jsx)(t.code,{children:`theme_experiment`}),` property reaches CSS as written, so a color expression in one still resolves where it is used. Renaming or removing a token a manifest references, or deleting a listed `,(0,c.jsx)(t.code,{children:`*.nova.tokens.json`}),` (which `,(0,c.jsx)(t.code,{children:`./mach buildtokens`}),` does when an override becomes empty), breaks the build unless the same commit updates the manifest or `,(0,c.jsx)(t.code,{children:`moz.build`}),`. Reshaping a referenced token's `,(0,c.jsx)(t.code,{children:`value`}),` so that none of those keys applies writes an unusable value into the manifest without an error. Before such a change, search `,(0,c.jsx)(t.code,{children:`browser/themes/addons/*/manifest.in.json`}),` for the token's path, then the token files `,(0,c.jsx)(t.code,{children:`browser/themes/addons/moz.build`}),` lists for the tokens that reference it, and `,(0,c.jsx)(t.code,{children:`moz.build`}),` for its file.`]}),`
`,(0,c.jsx)(t.h3,{id:`overriding-tokens`,children:`Overriding tokens`}),`
`,(0,c.jsxs)(t.p,{children:[`Our build process provides a mechanism to override design tokens behind a pref. To do so, you will need to update `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/config/helpers/general/override-identifiers.mjs`,rel:`nofollow`,children:`override-identifiers.mjs`}),`, adding an `,(0,c.jsx)(t.code,{children:`id`}),` and a `,(0,c.jsx)(t.code,{children:`pref`}),` to classify the token overrides. For example, to override design tokens for Nova, we use this configuration:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`{
  id: "nova",
  pref: "browser.nova.enabled",
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Then you can create new JSON files in `,(0,c.jsx)(t.code,{children:`src/tokens`}),` that end with a suffix using the `,(0,c.jsx)(t.code,{children:`id`}),` (e.g. `,(0,c.jsx)(t.code,{children:`*.nova.tokens.json`}),`) and follow the JSON format to define the tokens that are different from the design system defaults. They should follow the same structure as the defaults so the tokens end up with the same names.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The high contrast overrides are emitted into cascade layers. A single `,(0,c.jsx)(t.code,{children:`@layer`}),` statement at the top of `,(0,c.jsx)(t.code,{children:`dist/tokens-shared.css`}),` and of every component `,(0,c.jsx)(t.code,{children:`*.tokens.css`}),` declares all of them in precedence order, ending `,(0,c.jsx)(t.code,{children:`tokens-prefers-contrast`}),`, `,(0,c.jsx)(t.code,{children:`tokens-prefers-contrast-nova`}),`, `,(0,c.jsx)(t.code,{children:`tokens-forced-colors`}),`, `,(0,c.jsx)(t.code,{children:`tokens-forced-colors-nova`}),`, so that forced colors wins when a surface is in both regimes at once. `,(0,c.jsx)(t.code,{children:`getLayerString`}),` in `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/config/helpers/desktop-format/get-layer-string.mjs`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`get-layer-string.mjs`})}),` generates the statement: the three theme layers (`,(0,c.jsx)(t.code,{children:`tokens-foundation`}),`, `,(0,c.jsx)(t.code,{children:`tokens-browser-theme`}),`, `,(0,c.jsx)(t.code,{children:`tokens-foundation-brand`}),`), then those three again with each override `,(0,c.jsx)(t.code,{children:`id`}),` as a suffix, then each of the two accessibility layers followed by its override twins. Each document or shadow tree orders layers by the first appearance of their names, and a later statement cannot reorder a name already registered. A layer name missing from the statement is therefore ordered after every layer registered before its first use, which normally includes the forced colors and prefers-contrast layers, so its values beat them; add a new layer to `,(0,c.jsx)(t.code,{children:`getLayerString`}),` rather than naming it only in a sheet. Anything a consumer declares outside a layer beats all of them, whatever the specificity - see the `,(0,c.jsx)(t.a,{href:`https://firefox-source-docs.mozilla.org/code-quality/coding-style/css_guidelines.html#an-unlayered-declaration-outranks-every-cascade-layer`,rel:`nofollow`,children:`CSS guidelines`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`When you run `,(0,c.jsx)(t.code,{children:`./mach buildtokens`}),`, the CSS output will include the new tokens under a media query using the `,(0,c.jsx)(t.code,{children:`pref`}),` that you defined. For example:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`:root,
:host(.anonymous-content-host) {
  @media -moz-pref("browser.nova.enabled") {
    @layer tokens-foundation-nova {
      /* Your token overrides */
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The generator emits only the tokens that actually have an override - `,(0,c.jsx)(t.code,{children:`shouldSkipToken`}),` drops the rest - so an override sheet references far more tokens than it defines. The others resolve from the ungated foundation layer, which every consumer of `,(0,c.jsx)(t.code,{children:`tokens-shared.css`}),` gets. A token missing from an override sheet is therefore usually not a regression; the question to ask is whether the ungated layer carries the same value, not whether the override sheet still defines it.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`./mach buildtokens`}),` prunes as well as generating. A `,(0,c.jsx)(t.code,{children:`build-figma-nova`}),` step re-derives every `,(0,c.jsx)(t.code,{children:`*.nova.tokens.json`}),` as a delta against its base `,(0,c.jsx)(t.code,{children:`*.tokens.json`}),` and unlinks the ones that come out empty (`,(0,c.jsx)(t.code,{children:`writeTokens`}),` in `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/src/figma-import.mjs`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`src/figma-import.mjs`})}),`). So once a base token holds the same literal value its override did, the next build deletes that override file. Restoring it by hand does not survive the following build, and the deletion belongs in the patch that made the values agree.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ignoreFigma`}),` on a base token stops Figma from writing an override for it, on the understanding that the token should use the base value. It does not preserve an existing override. To keep one, declare it as a key named after the override identifier inside the base `,(0,c.jsx)(t.code,{children:`*.tokens.json`}),` instead, which the importer keeps:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "value": {
    "default": "...",
    "nova": { "comment": "why", "value": "..." }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Whether a token patch is complete comes down to one check:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`$ ./mach buildtokens && git status --short
`})}),`
`,(0,c.jsx)(t.p,{children:`Empty output means the committed tree is a fixed point of the generator. Any output means the patch and the generator disagree, and the generator wins. Run it after a rebase too, since an upstream change to the token config can stale generated files your patch owns without touching a line of it.`}),`
`,(0,c.jsx)(t.h4,{id:`importing-from-figma`,children:`Importing from Figma`}),`
`,(0,c.jsxs)(t.p,{children:[`Figma's values reach the `,(0,c.jsx)(t.code,{children:`*.nova.tokens.json`}),` files through two committed exports in `,(0,c.jsx)(t.code,{children:`src/`}),`. `,(0,c.jsx)(t.code,{children:`figma-variables-all.json`}),` mirrors the Figma file's variable collections, and `,(0,c.jsx)(t.code,{children:`./mach buildtokens --import-figma --remote`}),` rewrites it from the Figma API. `,(0,c.jsx)(t.code,{children:`nova-export-clean-variables.json`}),` is the subset the build reads: a plain `,(0,c.jsx)(t.code,{children:`./mach buildtokens`}),` maps it onto the override files and never reads the mirror.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`./mach buildtokens --import-figma`}),` updates the subset from the mirror before building. It takes every token whose Nova value the mirror would change, so a difference already sitting between the two files comes along with whatever just changed in Figma; read the subset's diff before committing an import. `,(0,c.jsx)(t.code,{children:`--match=<path substring>`}),` narrows the import to matching tokens and `,(0,c.jsx)(t.code,{children:`--all`}),` takes every change. With neither, it asks in an editor which tokens to take, and when stdin is not a terminal it takes them all.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The import does not override a token whose base `,(0,c.jsx)(t.code,{children:`*.tokens.json`}),` holds a `,(0,c.jsx)(t.code,{children:`nova`}),` key, so a Figma change to that token reaches the tree only once the key is removed.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};