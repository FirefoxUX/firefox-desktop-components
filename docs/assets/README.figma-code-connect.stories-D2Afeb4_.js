import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,img:`img`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Docs/Figma Code Connect`}),`
`,(0,c.jsx)(t.h1,{id:`figma-code-connect`,children:`Figma Code Connect`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`https://www.figma.com/code-connect-docs/`,rel:`nofollow`,children:`Code Connect`}),` is a bridge between your codebase and Figma’s Dev Mode, connecting components in your repositories directly to components in your design files.
We use Code Connect to generate recommended code snippets for our Figma components to improve the developer experience when translating designs to code.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Firefox uses the `,(0,c.jsx)(t.a,{href:`https://developers.figma.com/docs/code-connect/template-api/`,rel:`nofollow`,children:`Template API`}),` (`,(0,c.jsx)(t.code,{children:`.figma.ts`}),` files that `,(0,c.jsx)(t.code,{children:`import figma from "figma"`}),` and export a `,(0,c.jsx)(t.code,{children:`figma.code`}),` snippet).
The legacy `,(0,c.jsx)(t.code,{children:`@figma/code-connect/html`}),` parser format (`,(0,c.jsx)(t.code,{children:`figma.connect(...)`}),`) is no longer used in-tree.
See the `,(0,c.jsx)(t.a,{href:`https://developers.figma.com/docs/code-connect/templates-migration-guide/`,rel:`nofollow`,children:`templates migration guide`}),` if you need to convert older parser-based files.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-set-up-code-connect`,children:`How to set up Code Connect`}),`
`,(0,c.jsxs)(t.p,{children:[`First, you'll need to install `,(0,c.jsx)(t.a,{href:`https://www.figma.com/code-connect-docs/quickstart-guide/#install-the-code-connect-command-line-tool`,rel:`nofollow`,children:`the Code Connect command line tool`}),` via `,(0,c.jsx)(t.code,{children:`npm`}),` (Node 18+):`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`npm install --global @figma/code-connect@latest`})}),`
`,(0,c.jsxs)(t.p,{children:[`Second, you'll either need to add your `,(0,c.jsx)(t.a,{href:`https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens`,rel:`nofollow`,children:`Figma personal access token`}),` to your terminal environment:`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`export FIGMA_ACCESS_TOKEN='your-generated-access-token'`})}),`
`,(0,c.jsxs)(t.p,{children:[`You could also add your personal access token via `,(0,c.jsx)(t.code,{children:`.bashrc`}),`, `,(0,c.jsx)(t.code,{children:`.zshrc`}),`, or other appropriate file based on your shell environment.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-use-code-connect`,children:`How to use Code Connect`}),`
`,(0,c.jsx)(t.h3,{id:`finding-a-figma-component-to-generate-the-initial-code-connect-file`,children:`Finding a Figma component to generate the initial Code Connect file`}),`
`,(0,c.jsxs)(t.p,{children:[`After installing and setting your `,(0,c.jsx)(t.code,{children:`FIGMA_ACCESS_TOKEN`}),` in your terminal, you will need to navigate to our Figma library to find a component that needs a Code Connect config file.`]}),`
`,(0,c.jsx)(t.p,{children:`You can find a potential component through various ways:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Searching through the open dependent bugs on `,(0,c.jsx)(t.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1955395`,rel:`nofollow`,children:`Bug 1955395 - [meta] Figma Code Connect`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Checking the "Explore component behavior" in Figma and seeing if there no code snippet at the bottom of the "Component playground" window, underneath the "Variable modes" section.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note:`}),` Not all Figma components will need a Code Connect config.
For example, the `,(0,c.jsx)(t.a,{href:`https://www.figma.com/design/3WoKOSGtaSjhUHKldHCXbc/Desktop-Components-3?node-id=32-678&m=dev`,rel:`nofollow`,children:`"Radio Button"`}),` exists as a standalone Figma component, but it is only used as a subcomponent for the `,(0,c.jsx)(t.a,{href:`https://www.figma.com/design/3WoKOSGtaSjhUHKldHCXbc/Desktop-Components-3?node-id=3907-17657&m=dev`,rel:`nofollow`,children:`"Radio Button with label,"`}),` which more accurately models our `,(0,c.jsx)(t.code,{children:`moz-label`}),` web component.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Once you are aware of the Figma component you want to work on, you'll need to navigate to Figma and find the base Figma component.
It should have an icon of a diamond made of four smaller diamonds.
When you select this component, it likely will say `,(0,c.jsx)(t.strong,{children:`Component set`}),` in the sidebar.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.img,{src:`./img/figma-diamond-example.png`,alt:`Figma user interface showing the diamond icon next to "Checkbox"`}),`
`,(0,c.jsx)(t.img,{src:`./img/figma-component-set-example.png`,alt:`Figma user interface showing the diamond icon next to "Component set"`})]}),`
`,(0,c.jsx)(t.p,{children:`Ensure that you have selected the main Figma component instead of an instance of it.
Code Connect will not setup correctly for an instance.
There should be an option indicated by either a diamond with four smaller diamonds or a diamond with an arrow pointing out from the diamond.
This icon button is used to go to the main component, and will be labelled "Go to main component" once you hover on the icon button.
Use this "Go to main component" button to check if there is a component set higher up in the hierarchy.
Once you've got the main component set, then you can copy a link to the component and move to generating the Code Connect config in your terminal.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.img,{src:`./img/figma-go-to-main-component-one.png`,alt:`Figma user interface showing the "Go to main component" tooltip text when hovering over the diamond icon with four smaller diamonds`}),`
`,(0,c.jsx)(t.img,{src:`./img/figma-go-to-main-component-two.png`,alt:`Figma user interface showing the "Go to main component" tooltip text when hovering over the diamond with an arrowing pointing out from it`})]}),`
`,(0,c.jsx)(t.h3,{id:`generating-the-initial-code-connect-file-for-a-figma-component`,children:`Generating the initial Code Connect file for a Figma component`}),`
`,(0,c.jsxs)(t.p,{children:[`After finding the main component set in the previous step and copying the link to the main component, navigate to your Firefox repo in your terminal.
Code Connect is configured by the checked-in `,(0,c.jsx)(t.code,{children:`toolkit/figma.config.json`}),`.
From the repository root, run the following command (please note the single quotes are needed to correctly parse the URL!):`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`npx figma connect create --config toolkit/figma.config.json --dir toolkit '<main component set link>'`})}),`
`,(0,c.jsxs)(t.p,{children:[`For example, this command would look something like `,(0,c.jsx)(t.code,{children:`npx figma connect create --config toolkit/figma.config.json --dir toolkit 'https://www.figma.com/design/[...]?node-id=1-255'`}),` where the full URL is the GUID for your design document.
This command will work regardless if you copied the link in Dev Mode (which has an additional query `,(0,c.jsx)(t.code,{children:`&m=dev`}),` at the end of the link) or not.`]}),`
`,(0,c.jsx)(t.p,{children:`If the Code Connect tool was able to find a component in that copied URL, you will receive the following output in your terminal:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`Fetching component information from Figma...
Parsing response
Generating Code Connect files...
Code Connect files generated successfully:
<firefox-repo-path>\\<component-name>.figma.ts
`})}),`
`,(0,c.jsx)(t.p,{children:`If the Code Connect tool was not able to find a component, it will throw an error and notify you in your terminal output.
The most common reason for this error is the particular node or layer you used for the linked URL is not actually a component but a wrapper for one or more components.
Try navigating a layer above or below the node you used and see if you are able to generate a Code Connect config file using one of those other nodes.`}),`
`,(0,c.jsx)(t.h3,{id:`modifying-the-generated-config-file`,children:`Modifying the generated config file`}),`
`,(0,c.jsxs)(t.p,{children:[`While generating the file is a good start, you will need to move it, rename it, and modify it.
You should move this generated file to the component specific folder and rename it to `,(0,c.jsx)(t.code,{children:`<component-name>.figma.ts`}),`.
The generator names the file according to the Figma component, so this may not have the same name as the Lit component.
For example, the generator creates a file titled `,(0,c.jsx)(t.code,{children:`checkbox.figma.ts`}),`.
This file should be moved to the corresponding folder - in this case `,(0,c.jsx)(t.code,{children:`/toolkit/content/widgets/moz-checkbox`}),` - and renamed to `,(0,c.jsx)(t.code,{children:`moz-checkbox.figma.ts`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Template files map Figma properties with `,(0,c.jsx)(t.code,{children:`figma.selectedInstance`}),` helpers (`,(0,c.jsx)(t.code,{children:`getString`}),`, `,(0,c.jsx)(t.code,{children:`getBoolean`}),`, `,(0,c.jsx)(t.code,{children:`getEnum`}),`, `,(0,c.jsx)(t.code,{children:`findInstance`}),`, …) and render the snippet with `,(0,c.jsx)(t.code,{children:"figma.code`...`"}),`.
Keep the `,(0,c.jsx)(t.code,{children:`// url=...`}),` comment at the top of the file — that is how the template is linked to the Figma component.
Give each template a unique `,(0,c.jsx)(t.code,{children:`id`}),`.
When the same Lit component is connected to both Nova and Desktop Components 3, use a `,(0,c.jsx)(t.code,{children:`-desktop-v3`}),` suffix for the Desktop library file (for example `,(0,c.jsx)(t.code,{children:`moz-badge.figma.ts`}),` and `,(0,c.jsx)(t.code,{children:`moz-badge-desktop-v3.figma.ts`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`// url=https://www.figma.com/design/.../Nova-Components--Experimental-?node-id=3480-22604
import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const iconSrc = figma.selectedInstance.getBoolean("Show icon", {
  true: "chrome://example.svg",
  false: undefined,
})

export default {
  id: "moz-badge",
  example: figma.code\`
    <moz-badge
      label="\${label}"
      \${iconSrc ? \`iconsrc="\${iconSrc}"\` : ""}
      title="This appears as a tooltip on hover"
    ></moz-badge>
  \`,
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Use `,(0,c.jsx)(t.code,{children:"figma.code`...`"}),` with template interpolation for attributes.
Omit optional attributes with conditionals (for example `,(0,c.jsx)(t.code,{children:'${disabled ? "disabled" : ""}'}),`).
Match attribute names to the web component's reflected properties in its `,(0,c.jsx)(t.code,{children:`.mjs`}),` file.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note:`}),` The generated template may not capture all of the properties that can or should be mapped from Figma.`]}),`
`,(0,c.jsx)(t.h4,{id:`when-the-property-types-match`,children:`When the property types match`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getBoolean("Checked")`}),` returns the current value from the selected Figma instance.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const checked = figma.selectedInstance.getBoolean("Checked")
`})}),`
`,(0,c.jsx)(t.h4,{id:`when-the-property-types-are-different`,children:`When the property types are different`}),`
`,(0,c.jsx)(t.p,{children:`Pass a mapping object to convert Figma values into Lit attribute values.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`// Figma State=Disabled will set disabled:true
const disabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
// Figma "Show icon"=true will set iconSrc:"chrome://example.svg"
const iconSrc = figma.selectedInstance.getBoolean("Show icon", {
  true: "chrome://example.svg",
  false: undefined,
})
`})}),`
`,(0,c.jsx)(t.h4,{id:`creating-the-example-template`,children:`Creating the example template`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`example`}),` field becomes the code snippet shown in Figma.
Prefer `,(0,c.jsx)(t.code,{children:"figma.code`...`"}),` tagged templates for the example snippet.`]}),`
`,(0,c.jsxs)(t.p,{children:[`There is `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/search?q=figma.ts&path=&case=false&regexp=false`,rel:`nofollow`,children:`other prior art available on searchfox`}),` when you search for figma.ts files that will assist you.`]}),`
`,(0,c.jsx)(t.h3,{id:`publishing-the-modified-config-file`,children:`Publishing the modified config file`}),`
`,(0,c.jsxs)(t.p,{children:[`Code Connect discovery is configured by `,(0,c.jsx)(t.code,{children:`toolkit/figma.config.json`}),`.
From the repository root, verify your changes with:`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`npx figma connect publish --config toolkit/figma.config.json --dir toolkit --dry-run`})}),`
`,(0,c.jsxs)(t.p,{children:[`If this check passes, publish with `,(0,c.jsx)(t.code,{children:`npx figma connect publish --config toolkit/figma.config.json --dir toolkit`}),`.
After doing this, navigate to the node that you copied the link for earlier in this process (or check the `,(0,c.jsx)(t.code,{children:`// url=`}),` comment in the template).
You can test the code snippet by opening "Explore component behavior" under the "Component information" section.`]}),`
`,(0,c.jsx)(t.p,{children:`If this generated snippet does not appear to be correct, you can undo the change on Figma with:`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`npx figma connect unpublish --config toolkit/figma.config.json --dir toolkit`})}),`
`,(0,c.jsxs)(t.p,{children:[`Afterwards, commit and submit the file via `,(0,c.jsx)(t.code,{children:`moz-phab`}),` as you would any other bug.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-find-the-code-connect-snippet`,children:`How to find the Code Connect snippet`}),`
`,(0,c.jsx)(t.p,{children:`If you are interacting with an instance of a Figma component and you are in Dev Mode, then you will be able to find a section called "Code Connect" in the "Inspect" sidebar.
The code snippet for the instance will be within that section. Depending on the component, there may be additional comments at the bottom of the code snippet that explains what may be missing from the implementation of the Figma component compared to the Lit component.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:`./img/code-connect-snippet-comments.png`,alt:`Figma user interface showing the snippet with additional comments`})}),`
`,(0,c.jsx)(t.p,{children:`This section is also available if you are interacting with one of the variants of the main Figma component.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:`./img/code-connect-main-component-variant.png`,alt:`Figma user interface showing the snippet when interacting with main component variants`})}),`
`,(0,c.jsx)(t.p,{children:`If you are interacting with the main Figma component itself - the wrapper holding all the variants that may exist - then there will be a "Component information" section under the "Inspect" sidebar.
Click on "Explore component behavior" to inspect the code snippet as you test changing the properties of the Figma component.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:`./img/code-connect-component-playground.png`,alt:`Figma user interface showing the component playground`})}),`
`,(0,c.jsxs)(t.p,{children:[`For more examples, you can check out `,(0,c.jsx)(t.a,{href:`https://www.figma.com/code-connect-docs/#publish-to-figma-to-make-handoff-a-breeze`,rel:`nofollow`,children:`Figma's Code Connect documentation`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`code-connect-issuespitfallsscenarios`,children:`Code Connect issues/pitfalls/scenarios`}),`
`,(0,c.jsx)(t.h3,{id:`mapping-figma-props-back-to-lit-props`,children:`Mapping Figma props back to Lit props`}),`
`,(0,c.jsxs)(t.p,{children:[`You may encounter cases where in Figma you can toggle some configuration of a component.
For example, given `,(0,c.jsx)(t.a,{href:`https://www.figma.com/design/PqfaOcMGbX5liEXTTUzeYX/Nova-Components--Experimental-?node-id=3907-17658&m=dev`,rel:`nofollow`,children:`the "Checkbox" component`}),`, we can toggle a description, a support link, and an icon.
When activating the "Show description" and "Show support link" toggles, we get two new editable text fields, "Description" and "Support link".
To ensure the generated code snippet shows the correct value for these fields, map a Figma boolean to return a string when the boolean is true:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const labelInstance = figma.selectedInstance.findInstance("Label")
const description =
  labelInstance.type !== "ERROR"
    ? labelInstance.getBoolean("Show description", {
        true: labelInstance.getString("Description"),
      })
    : undefined
const supportPage =
  labelInstance.type !== "ERROR"
    ? labelInstance.getBoolean("Show support link", {
        true: "sumo-slug",
      })
    : undefined
`})}),`
`,(0,c.jsxs)(t.p,{children:[`In the "Description" case, we use `,(0,c.jsx)(t.code,{children:`labelInstance.getString("Description")`}),` inside the `,(0,c.jsx)(t.code,{children:`Show description`}),` boolean mapping so that the generated snippet will show the current value in the "Description" text field.
We don't do this for the "Support link" case though, since the way to get the correct generated support link element is by passing a SUMO slug to `,(0,c.jsx)(t.code,{children:`<moz-checkbox>`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`working-with-nested-components`,children:`Working with nested components`}),`
`,(0,c.jsxs)(t.p,{children:[`Some Figma wrappers nest other components. For example, `,(0,c.jsx)(t.a,{href:`https://www.figma.com/design/PqfaOcMGbX5liEXTTUzeYX/Nova-Components--Experimental-?node-id=3907-17658&m=dev`,rel:`nofollow`,children:`the Nova "Checkbox" component`}),` contains nested "Checkbox" and "Label" instances.
Use `,(0,c.jsx)(t.code,{children:`findInstance("LayerName")`}),` to read nested properties:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const labelInstance = figma.selectedInstance.findInstance("Label")
const checkboxInstance = figma.selectedInstance.findInstance("Checkbox")

const description =
  labelInstance.type !== "ERROR"
    ? labelInstance.getBoolean("Show description", {
        true: labelInstance.getString("Description"),
      })
    : undefined
const checked =
  checkboxInstance.type !== "ERROR"
    ? (checkboxInstance.getBoolean("Checked", {
        true: true,
        false: undefined,
      }) ?? checkboxInstance.getEnum("State", { Checked: true }))
    : undefined
`})}),`
`,(0,c.jsx)(t.h3,{id:`prefer-mapping-figma-props-over-ad-hoc-snippet-conditionals`,children:`Prefer mapping Figma props over ad-hoc snippet conditionals`}),`
`,(0,c.jsx)(t.p,{children:`Template files can use normal JavaScript conditionals, but for simple show/hide cases it is clearer to map the Figma property to the Lit value directly:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const label = figma.selectedInstance.getString("Label")
// Only provide an icon when the Figma "Show label" toggle is on
const iconSrc = figma.selectedInstance.getBoolean("Show label", {
  true: "chrome://example.svg",
  false: undefined,
})

export default {
  id: "moz-component",
  example: figma.code\`
    <moz-component
      label="\${label}"
      \${iconSrc ? \`iconsrc="\${iconSrc}"\` : ""}
    ></moz-component>
  \`,
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`match-the-case-of-what-is-present-in-figma`,children:`Match the case of what is present in Figma`}),`
`,(0,c.jsxs)(t.p,{children:[`Ensure that the names of any components, nested components, and properties that you use in the Code Connect file matches the name used in the Figma file.
For example, if a Figma property is named `,(0,c.jsx)(t.code,{children:`sHoW dEsCrIpTiOn`}),` (not that anyone would do that), it will not map correctly if it is referred to as "Show description" in the config file.`]}),`
`,(0,c.jsx)(t.h3,{id:`what-if-something-in-figma-doesnt-map-back-to-anything-in-the-implemented-component`,children:`What if something in Figma doesn't map back to anything in the implemented component?`}),`
`,(0,c.jsx)(t.p,{children:`Sometimes that's okay!
Some props will not map back to code and may be there to make using Figma easier.
For example, many of the options under the "State" select for a component do not get mapped to code.
Using the Nova "Checkbox" Figma component as an example again, there are various options for State:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Default`}),`
`,(0,c.jsx)(t.li,{children:`Hover`}),`
`,(0,c.jsx)(t.li,{children:`Active`}),`
`,(0,c.jsx)(t.li,{children:`Focus`}),`
`,(0,c.jsx)(t.li,{children:`Disabled`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`There's nothing we have to pass to `,(0,c.jsx)(t.code,{children:`<moz-checkbox>`}),` for it to appear in a "Default" state, so we do not need to map this.
"Hover", "Active", and "Focus" are all CSS pseudo-classes that are handled by the code implementation, we don't have to pass any additional props for these states to behave as expected.
This leaves us with "Disabled" which is something that can be controlled through a property/attribute, therefore we want to make sure this attribute appears in the generated snippet when a Figma user selects "Disabled" in the dropdown.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const disabled = figma.selectedInstance.getEnum("State", { Disabled: true })
`})}),`
`,(0,c.jsx)(t.p,{children:`Other times, this could be a sign that there's a deviation in the design or the implemented component.
Maybe it's a feature that hasn't been implemented yet, and so we don't want to show any code snippets when that feature is enabled in Figma.
It could be something that was missed when previously creating the Code Connect config for a particular component, there could be a variety of reasons.
It may be worth reaching out to design to make sure the implemented component and the design component are not deviating from each other.`}),`
`,(0,c.jsx)(t.h4,{id:`an-example-of-a-disrepancy-between-the-lit-and-figma-components`,children:`An example of a disrepancy between the Lit and Figma components`}),`
`,(0,c.jsxs)(t.p,{children:[`The following are some of the properties of the `,(0,c.jsx)(t.code,{children:`moz-message-bar`}),` component as declared in the constructor in `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets/moz-message-bar.mjs`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`constructor() {
  super();

  /**
   * The type of the displayed message.
   *
   * @type {MozMessageBarType}
   */
  this.type = "info";

  /**
   * Whether or not the element is dismissable.
   *
   * @type {boolean}
   */
  this.dismissable = false;

  /**
   * The message text.
   *
   * @type {string | undefined}
   */
  this.message = undefined;

  /**
   * l10n ID for the message.
   *
   * @type {string | undefined}
   */
  this.messageL10nId = undefined;

  /**
   * The heading of the message.
   *
   * @type {string | undefined}
   */
  this.heading = undefined;
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`In Storybook, we are able to change the message, heading, and action button label through the Fluent tab.
This mostly maps to the properties in the Figma component, however, we can only update the action button label through the nested Button component.
Additionally, we generally do not include l10n properties in the Code Connect example snippets.
As the nested Button's properties are not currently exposed on the top level of the component, we are not able to reflect any changes to the Button in the Message Bar's example snippet.
Below, the `,(0,c.jsx)(t.code,{children:`moz-button`}),` code has been hard-coded.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:`./img/code-connect-message-bar.png`,alt:`Figma user interface showing the message bar code snippet`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};