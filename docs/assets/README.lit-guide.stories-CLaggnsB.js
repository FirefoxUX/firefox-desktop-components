import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Docs/Lit Guide`}),`
`,(0,c.jsx)(t.h1,{id:`lit`,children:`Lit`}),`
`,(0,c.jsx)(t.h2,{id:`background`,children:`Background`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`https://lit.dev`,rel:`nofollow`,children:`Lit`}),` is a small library for creating web components that is maintained by Google. It aims to improve the experience of authoring web components by eliminating boilerplate and providing more declarative syntax and re-rendering optimizations, and should feel familiar to developers who have experience working with popular component-based front end frameworks.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Mozilla developers began experimenting with using Lit to build a handful of new web components in 2021. The developer experience and productivity benefits were noticeable enough that the team tasked with building out a library of new `,(0,c.jsx)(t.a,{href:`./README.reusable-widgets.stories.md`,children:`reusable widgets`}),` vendored Lit to make it available in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),` in late 2022. Lit can now be used for creating new web components anywhere in the codebase.`]}),`
`,(0,c.jsx)(t.h2,{id:`using-lit`,children:`Using Lit`}),`
`,(0,c.jsxs)(t.p,{children:[`Lit has comprehensive documentation on their website that should be consulted alongside this document when building new Lit-based custom elements: `,(0,c.jsx)(t.a,{href:`https://lit.dev/docs/`,rel:`nofollow`,children:`https://lit.dev/docs/`})]}),`
`,(0,c.jsxs)(t.p,{children:[`While Lit was initially introduced to assist with the work of the Reusable Components team it can also be used for creating both reusable and domain-specific UI widgets throughout `,(0,c.jsx)(t.code,{children:`mozilla-central`}),`. Some examples of custom elements that have been created using Lit so far include `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-toggle/moz-toggle.mjs`,rel:`nofollow`,children:`moz-toggle`}),`, `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-button-group/moz-button-group.mjs`,rel:`nofollow`,children:`moz-button-group`}),`, and the Credential Management team's `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/components/aboutlogins/content/components/login-timeline.mjs`,rel:`nofollow`,children:`login-timeline`}),` component.`]}),`
`,(0,c.jsx)(t.h3,{id:`when-to-use-lit`,children:`When to use Lit`}),`
`,(0,c.jsxs)(t.p,{children:[`Lit may be a particularly good choice if you're building a highly reactive element that needs to respond efficiently to state changes. Lit's declarative `,(0,c.jsx)(t.a,{href:`https://lit.dev/docs/templates/overview/`,rel:`nofollow`,children:`templates`}),` and `,(0,c.jsx)(t.a,{href:`https://lit.dev/docs/components/properties/`,rel:`nofollow`,children:`reactive properties`}),` can take care of a lot of the work of figuring out which parts of the UI should update in response to specific changes.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Because Lit components are ultimately just web components, you may also want to use it just because of some of the syntax it provides, like allowing you to write your template code next to your JavaScript code, providing for binding event listeners and properties in your templates, and automatically creating an open `,(0,c.jsx)(t.code,{children:`shadowRoot`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`when-not-to-use-lit`,children:`When not to use Lit`}),`
`,(0,c.jsxs)(t.p,{children:[`Lit cannot be used in cases where you want to `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#customized_built-in_elements`,rel:`nofollow`,children:`extend a built-in element`}),`. Lit can only be used for creating `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#autonomous_custom_elements`,rel:`nofollow`,children:`autonomous custom elements`}),`, i.e. elements that extend `,(0,c.jsx)(t.code,{children:`HTMLElement`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`writing-components-with-lit`,children:`Writing components with Lit`}),`
`,(0,c.jsxs)(t.p,{children:[`All of the standard features of the Lit library - with the exception of decorators - are available for use in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),`, but there are some special considerations and specific files you should be aware of when using Lit for Firefox code.`]}),`
`,(0,c.jsx)(t.h3,{id:`using-external-stylesheets`,children:`Using external stylesheets`}),`
`,(0,c.jsxs)(t.p,{children:[`Using external stylesheets is the preferred way to style your Lit-based components in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),`, despite the fact that the the Lit documentation `,(0,c.jsx)(t.a,{href:`https://lit.dev/docs/components/styles/#external-stylesheet`,rel:`nofollow`,children:`explicitly recommends against`}),` this approach. The caveats they list are not particularly relevant to our use cases, and we have implemented platform level workarounds to ensure external styles will not cause a flash-of-unstyled-content. Using external stylesheets makes it so that CSS changes can be detected by our automated linting and review tools, and helps provide greater visibility to Mozilla's `,(0,c.jsx)(t.code,{children:`desktop-theme-reviewers`}),` group.`]}),`
`,(0,c.jsxs)(t.h3,{id:`the-litallmjs-vendor-file`,children:[`The `,(0,c.jsx)(t.code,{children:`lit.all.mjs`}),` vendor file`]}),`
`,(0,c.jsxs)(t.p,{children:[`A somewhat customized, vendored version of Lit is available at `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/vendor/lit.all.mjs`,rel:`nofollow`,children:`toolkit/content/widgets/vendor/lit.all.mjs`}),`. The version of Lit in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),` has a number of patches applied to disable minification, source maps, and certain warning messages, as well as patches to replace usage of `,(0,c.jsx)(t.code,{children:`innerHTML`}),` with `,(0,c.jsx)(t.code,{children:`DOMParser`}),` and to slightly modify the behavior of the `,(0,c.jsx)(t.code,{children:`styleMap`}),` directive. More specifics on these patches, as well as information on how to update `,(0,c.jsx)(t.code,{children:`lit.all.mjs`}),`, can be found `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/vendor/lit`,rel:`nofollow`,children:`here`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Because our vendored version of Lit bundles the contents of a few different Lit source files into a single file, imports that would normally come from different files are pulled directly from `,(0,c.jsx)(t.code,{children:`lit.all.mjs`}),`. For example, imports that look like this when using the Lit npm package:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`// Standard npm package.
import { LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Would look like this in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`// All imports come from a single file (relative path also works).
import { LitElement, classMap, ifDefined } from "chrome://global/content/vendor/lit.all.mjs";
`})}),`
`,(0,c.jsxs)(t.h3,{id:`mozlitelement-and-lit-utilsmjs`,children:[(0,c.jsx)(t.code,{children:`MozLitElement`}),` and `,(0,c.jsx)(t.code,{children:`lit-utils.mjs`})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/lit-utils.mjs#84`,rel:`nofollow`,children:`MozLitElement`}),` is an extension of the `,(0,c.jsx)(t.code,{children:`LitElement`}),` class that has added functionality to make it more tailored to Mozilla developers' needs. In almost all cases `,(0,c.jsx)(t.code,{children:`MozLitElement`}),` should be used as the base class for your new Lit-based custom elements in place of `,(0,c.jsx)(t.code,{children:`LitElement`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`It can be imported from `,(0,c.jsx)(t.code,{children:`lit-utils.js`}),` and used as follows:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`import { MozLitElement } from "chrome://global/content/lit-utils.mjs";

class MyCustomElement extends MozLitElement {
    ...
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MozLitElement`}),` differs from `,(0,c.jsx)(t.code,{children:`LitElement`}),` in a few important ways:`]}),`
`,(0,c.jsx)(t.h4,{id:`it-provides-automatic-fluent-support-for-the-shadow-dom`,children:`It provides automatic Fluent support for the shadow DOM`}),`
`,(0,c.jsxs)(t.p,{children:[`When working with Fluent in the shadow DOM an element's `,(0,c.jsx)(t.code,{children:`shadowRoot`}),` must be connected before Fluent can be used. `,(0,c.jsx)(t.code,{children:`MozLitElement`}),` handles this by extending `,(0,c.jsx)(t.code,{children:`LitElement`}),`'s `,(0,c.jsx)(t.code,{children:`connectedCallback`}),` to `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/lit-utils.mjs#84`,rel:`nofollow`,children:`call`}),` `,(0,c.jsx)(t.code,{children:`document.l10n.connectRoot`}),` if needed. `,(0,c.jsx)(t.code,{children:`MozLitElement`}),` also automatically calls `,(0,c.jsx)(t.code,{children:`document.l10n.translateFragment`}),` on the renderRoot anytime an element updates. The net result of these modifications is that you can use Fluent in your Lit based components just like you would in any other markup in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`it-provides-automatic-fluent-support-for-localized-reactive-properties`,children:`It provides automatic Fluent support for localized Reactive Properties`}),`
`,(0,c.jsxs)(t.p,{children:[`Fluent requires that attributes be marked as safe if they don't fall into the default list of `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/4c8627a76e2e0a9b49c2b673424da478e08715ad/dom/l10n/L10nOverlays.cpp#44-95`,rel:`nofollow`,children:`allowed attributes`}),`. By setting `,(0,c.jsx)(t.code,{children:`fluent: true`}),` in your Reactive Property's definition `,(0,c.jsx)(t.code,{children:`MozLitElement`}),` will automatically populate the `,(0,c.jsx)(t.code,{children:`data-l10n-attrs`}),` in `,(0,c.jsx)(t.code,{children:`connectedCallback()`}),` to mark the attribute as safe for Fluent.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`class MyCustomElement extends MozLitElement {
    static properties = {
        label: { type: String, fluent: true },
        description: { type: String, fluent: true },
        value: { type: String },
    };
}
`})}),`
`,(0,c.jsx)(t.h4,{id:`it-provides-the-mapped-attribute-helpers-for-standard-web-attributes`,children:`It provides the mapped attribute helpers for standard web attributes`}),`
`,(0,c.jsxs)(t.p,{children:[`When you want to accept a standard attribute such as accesskey, title or
aria-label at the component level but it should really be set on a child
element then you can set the `,(0,c.jsx)(t.code,{children:`mapped: true`}),` option in your property
definition and the attribute will be removed from the host when it is set.
Note that the attribute can not be unset once it is set.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`class MyElement extends MozLitElement {
  static properties = {
    accessKey: { type: String, mapped: true },
  };

  render() {
    return html\`<button accesskey=\${this.accessKey}>Hello</button>\`;
  }
}
`})}),`
`,(0,c.jsxs)(t.h4,{id:`it-implements-support-for-lits-query-and-queryall-decorators`,children:[`It implements support for Lit's `,(0,c.jsx)(t.code,{children:`@query`}),` and `,(0,c.jsx)(t.code,{children:`@queryAll`}),` decorators`]}),`
`,(0,c.jsxs)(t.p,{children:[`The Lit library includes `,(0,c.jsx)(t.code,{children:`@query`}),` and `,(0,c.jsx)(t.code,{children:`@queryAll`}),` `,(0,c.jsx)(t.a,{href:`https://lit.dev/docs/components/shadow-dom/#@query-@queryall-and-@queryasync-decorators`,rel:`nofollow`,children:`decorators`}),` that provide an easy way of finding elements within the internal component DOM. These do not work in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),` as we do not have support for JavaScript decorators. Instead, `,(0,c.jsx)(t.code,{children:`MozLitElement`}),` provides equivalent `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/lit-utils.mjs#87-99`,rel:`nofollow`,children:`DOM querying functionality`}),` via defining a static `,(0,c.jsx)(t.code,{children:`queries`}),` property on the subclass. For example the following Lit code that queries the component's DOM for certain selectors and assigns the results to different class properties:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { LitElement, html } from "lit";
import { query } from "lit/decorators/query.js";

class MyCustomElement extends LitElement {
    @query("#title");
    _title;

    @queryAll("p");
    _paragraphs;

    render() {
        return html\`
            <p id="title">The title</p>
            <p>Some other paragraph.</p>
        \`;
    }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Is equivalent to this in `,(0,c.jsx)(t.code,{children:`mozilla-central`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`import { html } from "chrome://global/content/vendor/lit.all.mjs";
import { MozLitElement } from "chrome://global/content/lit-utils.mjs";

class MyCustomElement extends MozLitElement {
    static queries = {
        _title: "#title", // equivalent to @query
        _paragraphs: { all: "p" }, // equivalent to @queryAll
    };

    render() {
        return html\`
            <p id="title">The title</p>
            <p>Some other paragraph.</p>
        \`;
    }
}
`})}),`
`,(0,c.jsxs)(t.h4,{id:`it-adds-a-dispatchonupdatecomplete-method`,children:[`It adds a `,(0,c.jsx)(t.code,{children:`dispatchOnUpdateComplete`}),` method`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dispatchOnUpdateComplete`}),` method provides an easy way to communicate to test code or other element consumers that a reactive property change has taken effect. It leverages Lit's `,(0,c.jsx)(t.a,{href:`https://lit.dev/docs/components/lifecycle/#updatecomplete`,rel:`nofollow`,children:`updateComplete`}),` promise to emit an event after all updates have been applied and the component's DOM is ready to be queried. It has the potential to be particularly useful when you need to query the DOM in test code, for example:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`// my-custom-element.mjs
class MyCustomElement extends MozLitElement {
    static properties = {
        clicked: { type: Boolean },
    };

    async handleClick() {
        if (!this.clicked) {
            this.clicked = true;
        }
        this.dispatchOnUpdateComplete(new CustomEvent("button-clicked"));
    }

    render() {
        return html\`
            <p>The button was \${this.clicked ? "clicked" : "not clicked"}</p>
            <button @click=\${this.handleClick}>Click me!</button>
        \`;
    }
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`// test_my_custom_element.mjs
add_task(async function testButtonClicked() {
    let { button, message } = this.convenientHelperToGetElements();
    is(message.textContent.trim(), "The button was not clicked");

    let clicked = BrowserTestUtils.waitForEvent(button, "button-clicked");
    synthesizeMouseAtCenter(button, {});
    await clicked;

    is(message.textContent.trim(), "The button was clicked");
});
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};