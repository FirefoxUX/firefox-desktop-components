import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Docs/Storybook`}),`
`,(0,c.jsx)(t.h1,{id:`storybook-for-firefox`,children:`Storybook for Firefox`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`https://storybook.js.org/`,rel:`nofollow`,children:`Storybook`}),` is an interactive tool that creates a
playground for UI components. We use Storybook to document our design system,
reusable components, and any specific components you might want to test with
dummy data. `,(0,c.jsx)(t.a,{href:`https://firefoxux.github.io/firefox-desktop-components/`,rel:`nofollow`,children:`Take a look at our Storybook
instance!`})]}),`
`,(0,c.jsx)(t.h2,{id:`background`,children:`Background`}),`
`,(0,c.jsx)(t.p,{children:`Storybook lists components that can be reused, and helps document
what common elements we have. It can also list implementation specific
components, but they should be added to the "Domain-Specific UI Widgets" section.`}),`
`,(0,c.jsxs)(t.p,{children:[`Changes to files directly referenced from Storybook (so basically non-chrome://
paths) should automatically reflect changes in the opened browser. If you make a
change to a `,(0,c.jsx)(t.code,{children:`chrome://`}),` referenced file then you'll need to do a hard refresh
(Cmd+Shift+R/Ctrl+Shift+R) to notice the changes. If you're on Windows you may
need to `,(0,c.jsx)(t.code,{children:`./mach build faster`}),` to have the `,(0,c.jsx)(t.code,{children:`chrome://`}),` URL show the latest version.`]}),`
`,(0,c.jsx)(t.h2,{id:`running-storybook`,children:`Running Storybook`}),`
`,(0,c.jsxs)(t.p,{children:[`Installing the npm dependencies and running the `,(0,c.jsx)(t.code,{children:`storybook`}),` npm script should be
enough to get Storybook running. This can be done via `,(0,c.jsx)(t.code,{children:`./mach storybook`}),`
commands, or with your personal npm/node that happens to be compatible.`]}),`
`,(0,c.jsx)(t.p,{children:`Production exports hash stylesheet module identifiers to avoid oversized generated
filenames in Windows checkouts.`}),`
`,(0,c.jsx)(t.h3,{id:`running-with-mach-commands`,children:`Running with mach commands`}),`
`,(0,c.jsx)(t.p,{children:`This is the recommended approach for installing dependencies and running
Storybook locally.`}),`
`,(0,c.jsx)(t.p,{children:`To install dependencies, start the Storybook server, and launch the Storybook
site in a local build of Firefox, just run:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`# This uses npm ci under the hood to install the package-lock.json exactly.
./mach storybook
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This single command will first install any missing dependencies then start the
local Storybook server. It will also start your local browser and point it to
`,(0,c.jsx)(t.code,{children:`http://localhost:5703`}),` while enabling certain preferences to ensure components
display as expected (specifically `,(0,c.jsx)(t.code,{children:`svg.context-properties.content.enabled`}),`,
`,(0,c.jsx)(t.code,{children:`layout.forms.input-type-search.enabled`}),`, and `,(0,c.jsx)(t.code,{children:`layout.forms.reveal-password-button.enabled`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`It's necessary to use your local build to test in Storybook since `,(0,c.jsx)(t.code,{children:`chrome://`}),`
URLs are currently being pulled from the running browser, so any changes to
common-shared.css for example will come from your build.`]}),`
`,(0,c.jsx)(t.p,{children:`The Storybook server will continue running and will watch for component file
changes.`}),`
`,(0,c.jsx)(t.h4,{id:`alternative-mach-commands`,children:`Alternative mach commands`}),`
`,(0,c.jsxs)(t.p,{children:[`Although running `,(0,c.jsx)(t.code,{children:`./mach storybook`}),` is the most convenient way to interact with
Storybook locally it is also possible to run separate commands to start the
Storybook server and run your local build with the necessary prefs.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If you only want to start the Storybook server - for example in cases where you
already have a local build running - you can pass a `,(0,c.jsx)(t.code,{children:`--no-open`}),` flag to `,(0,c.jsx)(t.code,{children:`./mach storybook`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`# Start the storybook server without launching a local Firefox build.
./mach storybook --no-open
`})}),`
`,(0,c.jsxs)(t.p,{children:[`If you just want to spin up a local build of Firefox with the required prefs
enabled you can use the `,(0,c.jsx)(t.code,{children:`launch`}),` subcommand:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`# In another terminal:
./mach storybook launch
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This will run your local browser and point it at `,(0,c.jsx)(t.code,{children:`http://localhost:5703`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Alternatively, you can simply navigate to `,(0,c.jsx)(t.code,{children:`http://localhost:5703/`}),` or run:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`# In another terminal:
./mach run http://localhost:5703/
`})}),`
`,(0,c.jsx)(t.p,{children:`although with this option certain prefs won't be enabled, so what's displayed in
Storybook may not exactly reflect how components will look when used in Firefox.`}),`
`,(0,c.jsx)(t.h3,{id:`personal-npm`,children:`Personal npm`}),`
`,(0,c.jsxs)(t.p,{children:[`You can use your own `,(0,c.jsx)(t.code,{children:`npm`}),` to install and run Storybook. Compatibility is up
to you to sort out.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`cd browser/components/storybook
npm ci # Install the package-lock.json exactly so lockfileVersion won't change.
npm run storybook
`})}),`
`,(0,c.jsx)(t.h2,{id:`updating-storybook-dependencies`,children:`Updating Storybook dependencies`}),`
`,(0,c.jsxs)(t.p,{children:[`On occasion you may need to update or add a npm dependency for Storybook.
This can be done using the version of `,(0,c.jsx)(t.code,{children:`npm`}),` packaged with `,(0,c.jsx)(t.code,{children:`mach`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`# Install a dev dependency from within the storybook directory.
cd browser/components/storybook && ../../../mach npm i -D your-package
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Use `,(0,c.jsx)(t.code,{children:`./mach storybook upgrade`}),` to update dependencies within the ranges in `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`adding-new-stories`,children:`Adding new stories`}),`
`,(0,c.jsxs)(t.p,{children:[`Storybook is currently configured to search for story files (any file with a
`,(0,c.jsx)(t.code,{children:`.stories.(js|mjs|md)`}),` extension) in `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets`}),` and
`,(0,c.jsx)(t.code,{children:`browser/components/storybook/stories`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Stories in `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets`}),` are used to document design system
components, also known as UI widgets.
As long as you used `,(0,c.jsx)(t.code,{children:`./mach addwidget`}),` correctly, there is no additional setup needed to view your newly created story in Storybook.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Stories in `,(0,c.jsx)(t.code,{children:`browser/components/storybook/stories`}),` are used for non-design system components, also called domain-specific UI widgets.
The easiest way to use Storybook for non-design system element is to use `,(0,c.jsx)(t.code,{children:`./mach addstory new-component "Your Project"`}),`.
You can also use `,(0,c.jsx)(t.code,{children:`./mach addstory new-component "Your Project" --path browser/components/new-component.mjs`}),` where `,(0,c.jsx)(t.code,{children:`--path`}),` is the path to your new components' source.
`,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/2c11f18f89056a806c299a9d06bfa808718c2e84/browser/components/storybook/stories/login-timeline.stories.mjs#11`,rel:`nofollow`,children:`See the Credential Management/Timeline widget for an example.`})]}),`
`,(0,c.jsxs)(t.p,{children:[`If you want to colocate your story with the code it is documenting you will need
to add to the `,(0,c.jsx)(t.code,{children:`stories`}),` array in `,(0,c.jsx)(t.code,{children:`.storybook/main.mjs`}),`
so that Storybook knows where to look for your files.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The Storybook docs site has a `,(0,c.jsx)(t.a,{href:`https://storybook.js.org/docs/web-components/get-started/whats-a-story`,rel:`nofollow`,children:`good
overview`}),`
of what's involved in writing a new story. For convenience you can use the `,(0,c.jsx)(t.a,{href:`https://lit.dev/`,rel:`nofollow`,children:`Lit
library`}),` to define the template code for your story, but this
is not a requirement.`]}),`
`,(0,c.jsx)(t.h3,{id:`ui-widgets-versus-domain-specific-ui-widgets`,children:`UI Widgets versus Domain-Specific UI Widgets`}),`
`,(0,c.jsxs)(t.p,{children:[`Widgets that are part of `,(0,c.jsx)(t.a,{href:`https://acorn.firefox.com/latest/acorn.html`,rel:`nofollow`,children:`our design system`}),` and intended to be used across the Mozilla suite of products live under the "UI Widgets" category in Storybook and under `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets/`}),` in Firefox.
These global widgets are denoted in code by the `,(0,c.jsx)(t.code,{children:`moz-`}),` prefix in their name.
For example, the name `,(0,c.jsx)(t.code,{children:`moz-support-link`}),` informs us that this widget is design system compliant and can be used anywhere in Firefox.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Storybook can also be used to help document and prototype widgets that are specific to a part of the codebase and not intended for more global use.
Stories for these types of widgets live under the "Domain-Specific UI Widgets" category, while the code can live in any appropriate folder in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),`.
`,(0,c.jsx)(t.a,{href:`https://firefoxux.github.io/firefox-desktop-components/?path=/docs/domain-specific-ui-widgets-credential-management-timeline--empty-timeline`,rel:`nofollow`,children:`See the Credential Management folder as an example of a domain specific folder`}),` and `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/components/storybook/stories/login-timeline.stories.mjs`,rel:`nofollow`,children:`see the login-timeline.stories.mjs for how to make a domain specific folder in Storybook`}),`.
`,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/components/storybook/stories/migration-wizard.stories.mjs`,rel:`nofollow`,children:`To add a non-team specific widget to the "Domain-specific UI Widgets" section, see the migration-wizard.stories.mjs file`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Creating and documenting domain specific UI widgets allows other teams to be aware of and take inspiration from existing UI patterns.
With these widgets, `,(0,c.jsx)(t.strong,{children:`there is no guarantee that the element will work for your domain.`}),`
If you need to use a domain-specific widget outside of its intended domain, it may be worth discussing how to convert this domain specific widget into a global UI widget.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};