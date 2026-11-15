import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Domain-specific UI Widgets/Credential Management/Autocomplete/README`}),`
`,(0,c.jsx)(t.h1,{id:`autocomplete-row-item`,children:`Autocomplete Row Item`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`autocomplete-row-item`}),` is a row component for the credential management autocomplete
popup that appears when a user focuses an input field (e.g. a login or address form).
Each row displays an icon, a primary label, an optional description, and optional
action buttons.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<autocomplete-row-item
  .label=\${"example@example.com"}
  .description=\${"From this website"}
  .icon=\${"chrome://global/skin/icons/defaultFavicon.svg"}
  .actions=\${{ primary: () => {} }}
></autocomplete-row-item>
`})}),`
`,(0,c.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`When rendering a row inside the autocomplete popup for credential management
(logins, addresses, payment methods).`}),`
`,(0,c.jsx)(t.li,{children:`When a row needs to display rich content: an icon, a primary label, an optional
secondary description, and one or more actions beyond the primary fill action.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Do not use this component for general-purpose lists or menus outside of the
autocomplete popup.`}),`
`,(0,c.jsxs)(t.li,{children:[`Do not use this component in in-content pages. It is designed to live inside the
XUL `,(0,c.jsx)(t.code,{children:`richlistbox`}),` that backs the autocomplete panel, which is a chrome-level
XUL container.`]}),`
`,(0,c.jsxs)(t.li,{children:[`For plain autocomplete suggestions with no icon or actions, the existing
`,(0,c.jsx)(t.code,{children:`richlistitem`}),` is more appropriate.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,c.jsx)(t.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,c.jsx)(t.p,{children:`The component must be imported before use:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`import "chrome://global/content/autocomplete-row-item/autocomplete-row-item.mjs";
`})}),`
`,(0,c.jsx)(t.h3,{id:`creating-a-row-from-js`,children:`Creating a row from JS`}),`
`,(0,c.jsxs)(t.p,{children:[`In a XUL context (e.g. populating a `,(0,c.jsx)(t.code,{children:`richlistbox`}),`), create the element imperatively:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`const item = document.createElement("autocomplete-row-item");
item.label = "example@example.com";
item.description = "From this website";
item.icon = "chrome://global/skin/icons/defaultFavicon.svg";
item.value = "example@example.com";
item.actions = {
  primary: () => fillForm(item.value),
};
richlistbox.appendChild(item);
`})}),`
`,(0,c.jsx)(t.h3,{id:`creating-a-row-from-a-lit-template`,children:`Creating a row from a Lit template`}),`
`,(0,c.jsx)(t.p,{children:`In a Lit component context:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`html\`
  <autocomplete-row-item
    .label=\${entry.username}
    .description=\${entry.origin}
    .icon=\${entry.icon}
    .value=\${entry.value}
    .actions=\${{ primary: () => fillForm(entry.value) }}
  ></autocomplete-row-item>
\`
`})}),`
`,(0,c.jsx)(t.h3,{id:`properties`,children:`Properties`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`/**
 * The primary text displayed in the row, typically a username or email address.
 * @type {string}
 */
item.label = "example@example.com";

/**
 * Optional secondary text displayed below the label, e.g. the origin or form field name.
 * @type {string}
 */
item.description = "From this website";

/**
 * The value associated with this row, used by the caller to identify which
 * entry to fill when the primary action is triggered.
 * @type {string}
 */
item.value = "example@example.com";

/**
 * URL of the icon displayed at the leading edge of the row, typically a site favicon.
 * @type {string}
 */
item.icon = "chrome://global/skin/icons/defaultFavicon.svg";

/**
 * Defines the primary and optional secondary actions for the row.
 * See "Defining actions" below for the full shape.
 * @type {{ primary: Function, secondary?: object }}
 */
item.actions = { primary: () => fillForm(item.value) };
`})}),`
`,(0,c.jsx)(t.h3,{id:`defining-actions`,children:`Defining actions`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`actions`}),` property is an object that defines how the row responds to user
interaction. It has two keys:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`primary`})}),` — A callback invoked when the user clicks anywhere on the row
itself. This is the main fill action, e.g. populating the form with the
selected credential.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`secondary`})}),` `,(0,c.jsx)(t.em,{children:`(optional)`}),` — Defines one or more additional actions exposed
through a secondary-action button rendered on the trailing edge of the row.
The button is only shown when `,(0,c.jsx)(t.code,{children:`secondary`}),` is present.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`secondary`}),` contains an `,(0,c.jsx)(t.code,{children:`action`}),` property (singular), the component assumes
there is only one secondary action, and clicking the button invokes it directly.
When `,(0,c.jsx)(t.code,{children:`secondary`}),` contains an `,(0,c.jsx)(t.code,{children:`actions`}),` array (plural), the button opens a menu
listing all available actions.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`// Single secondary action — button invokes the action directly.
item.actions = {
  primary: () => fillForm(item.value),
  secondary: {
    type: "edit",
    action: () => openEditDialog(item.value),
  },
};

// Multiple secondary actions — button opens a menu.
item.actions = {
  primary: () => fillForm(item.value),
  secondary: {
    type: "menupopup",
    actions: [
      { label: "Edit",   action: () => openEditDialog(item.value) },
      { label: "Remove", action: () => removeEntry(item.value) },
    ],
  },
};
`})}),`
`,(0,c.jsx)(t.h3,{id:`adding-a-single-secondary-action`,children:`Adding a single secondary action`}),`
`,(0,c.jsxs)(t.p,{children:[`A secondary action renders as an icon button on the trailing edge of the row.
The `,(0,c.jsx)(t.code,{children:`type`}),` field controls which icon is shown (`,(0,c.jsx)(t.code,{children:`"edit"`}),` renders a pencil icon;
any other value falls back to a settings gear icon).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`item.actions = {
  primary: () => fillForm(item.value),
  secondary: {
    type: "edit",
    action: () => openEditDialog(item.value),
  },
};
`})}),`
`,(0,c.jsx)(t.h3,{id:`adding-multiple-secondary-actions`,children:`Adding multiple secondary actions`}),`
`,(0,c.jsxs)(t.p,{children:[`When there are multiple secondary actions, set `,(0,c.jsx)(t.code,{children:`type`}),` to `,(0,c.jsx)(t.code,{children:`"menupopup"`}),` and
provide an `,(0,c.jsx)(t.code,{children:`actions`}),` array. Each entry requires a `,(0,c.jsx)(t.code,{children:`label`}),` string (visible in
the menu) and an `,(0,c.jsx)(t.code,{children:`action`}),` callback.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`item.actions = {
  primary: () => fillForm(item.value),
  secondary: {
    type: "menupopup",
    actions: [
      { label: "Edit",   action: () => openEditDialog(item.value) },
      { label: "Remove", action: () => removeEntry(item.value) },
    ],
  },
};
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note:`}),` The multiple-actions button isn't available in Storybook demo.
Because this component will be used inside the XUL autocomplete popup
(a chrome-level `,(0,c.jsx)(t.code,{children:`richlistbox`}),`), it isn't possible to display the menupopup
example here.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};