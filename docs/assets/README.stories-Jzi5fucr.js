import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,s as r}from"./blocks-DYgZUhjJ.js";import{a as i}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as a,r as o}from"./react-Bg8UoiFE.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{title:`Docs/README`}),`
`,(0,l.jsx)(n.h1,{id:`multiline-editor`,children:`Multiline Editor`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`moz-multiline-editor`}),` is a multiline rich text editor custom element based on ProseMirror.`]}),`
`,(0,l.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,l.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,l.jsx)(`with-common-styles`,{children:(0,l.jsx)(`moz-multiline-editor`,{placeholder:`Enter your text here`})})})}),`
`,(0,l.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,l.jsxs)(n.p,{children:[`The source for `,(0,l.jsx)(n.code,{children:`moz-multiline-editor`}),` can be found under `,(0,l.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/browser/components/multilineeditor`,rel:`nofollow`,children:`browser/components/multilineeditor/`})]}),`
`,(0,l.jsxs)(n.h2,{id:`how-to-use-moz-multiline-editor`,children:[`How to use `,(0,l.jsx)(n.code,{children:`moz-multiline-editor`})]}),`
`,(0,l.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,l.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,l.jsx)(n.code,{children:`moz-multiline-editor`}),` getting lazy loaded at the time of first use.
See `,(0,l.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,l.jsxs)(n.h3,{id:`setting-the-placeholder`,children:[`Setting the `,(0,l.jsx)(n.code,{children:`placeholder`})]}),`
`,(0,l.jsxs)(n.p,{children:[`A placeholder can be set via the `,(0,l.jsx)(n.code,{children:`placeholder`}),` attribute. The placeholder is displayed when the editor is empty.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-multiline-editor placeholder="Placeholder text"></moz-multiline-editor>
`})}),`
`,(0,l.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,l.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,l.jsx)(`with-common-styles`,{children:(0,l.jsx)(`moz-multiline-editor`,{placeholder:`Placeholder text`})})})}),`
`,(0,l.jsxs)(n.h3,{id:`setting-the-readonly-state`,children:[`Setting the `,(0,l.jsx)(n.code,{children:`readonly`}),` state`]}),`
`,(0,l.jsxs)(n.p,{children:[`The editor can be set to be read-only using the `,(0,l.jsx)(n.code,{children:`readonly`}),` attribute, which prevents editing while still allowing text selection.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-multiline-editor
  readonly
  placeholder="This editor is read-only"
></moz-multiline-editor>
`})}),`
`,(0,l.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,l.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,l.jsx)(`with-common-styles`,{children:(0,l.jsx)(`moz-multiline-editor`,{readonly:!0,placeholder:`This editor is read-only`})})})}),`
`,(0,l.jsxs)(n.h3,{id:`setting-the-maxlength`,children:[`Setting the `,(0,l.jsx)(n.code,{children:`maxlength`})]}),`
`,(0,l.jsxs)(n.p,{children:[`The editor can limit the number of characters using the `,(0,l.jsx)(n.code,{children:`maxlength`}),` attribute.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-multiline-editor maxlength="100"></moz-multiline-editor>
`})}),`
`,(0,l.jsx)(n.h3,{id:`programmatic-access`,children:`Programmatic access`}),`
`,(0,l.jsx)(n.p,{children:`The editor exposes properties and methods for programmatic control:`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Properties:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value`}),` - Get or set text content`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`selectionStart`}),` - Get or set the start offset of the selection`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`selectionEnd`}),` - Get or set the end offset of the selection`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`composing`}),` - `,(0,l.jsx)(n.code,{children:`True`}),` if IME composition is in progress`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Methods:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`setSelectionRange(start, end)`}),` - Set the selection range`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`select()`}),` - Select text content`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`focus()`}),` - Focus the editor`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`events`,children:`Events`}),`
`,(0,l.jsx)(n.p,{children:`The editor dispatches input and selection events:`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`input`}),` - Fired when the text content changes`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`selectionchange`}),` - Fired when the text selection changes`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`plugins`,children:`Plugins`}),`
`,(0,l.jsx)(n.p,{children:`The editor supports extending functionality with plugins:`}),`
`,(0,l.jsx)(n.h4,{id:`native-prosemirror-plugins`,children:`Native ProseMirror plugins`}),`
`,(0,l.jsxs)(n.p,{children:[`Native ProseMirror plugins can be used directly and work as documented in the `,(0,l.jsx)(n.a,{href:`https://prosemirror.net/docs/guide/`,rel:`nofollow`,children:`ProseMirror guide`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-js`,children:`import { Plugin } from "chrome://browser/content/multilineeditor/prosemirror.bundle.mjs";

const plugin = new Plugin();
editor.plugins = [plugin];
`})}),`
`,(0,l.jsx)(n.h4,{id:`custom-plugins`,children:`Custom plugins`}),`
`,(0,l.jsxs)(n.p,{children:[`Custom plugins can be added to `,(0,l.jsx)(n.code,{children:`/plugins`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-js`,children:`import { createCustomPlugin } from "chrome://browser/content/multilineeditor/plugins/CustomPlugin.mjs";

const customPlugin = createCustomPlugin();
editor.plugins = [customPlugin];
`})}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Plugin structure:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`schemaExtension`}),` - Extends the ProseMirror schema with custom nodes and marks.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`createPlugin(editor)`}),` - Receives the editor instance and returns a ProseMirror Plugin`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`placeholder`}),` attribute of `,(0,l.jsx)(n.code,{children:`moz-multiline-editor`}),` will generally be provided via `,(0,l.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
The relevant `,(0,l.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,l.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,l.jsx)(n.p,{children:`For example, the following Fluent message:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:`multiline-editor-placeholder =
  .placeholder = Enter your text here
`})}),`
`,(0,l.jsxs)(n.p,{children:[`would be used to set the placeholder on `,(0,l.jsx)(n.code,{children:`moz-multiline-editor`}),` as follows:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-multiline-editor data-l10n-id="multiline-editor-placeholder"></moz-multiline-editor>
`})})]})}function c(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=i(),o(),n()})))()}u();export{c as default};