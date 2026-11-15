import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Docs/Xul And Html`}),`
`,(0,c.jsx)(t.h1,{id:`xul-and-html`,children:`XUL and HTML`}),`
`,(0,c.jsx)(t.p,{children:`This document gives a quick overview of XUL and HTML, especially as it pertains to desktop front-end developers.
As we migrate away from XUL elements to HTML elements where possible, it is important to note the differences between these two technologies.
Additionally it is helpful to know how to use both where needed, as some elements will still need to use XUL.`}),`
`,(0,c.jsx)(t.h2,{id:`what-is-xul`,children:`What is XUL`}),`
`,(0,c.jsx)(t.p,{children:`XUL is an XML-based language for building cross-platform user interfaces and applications, so all the features of XML are available in XUL as well.
This is in contrast to HTML which is intended for developing web pages.
Because of this XUL is oriented towards application artifacts such as windows, scrollbars, and menus instead of pages, headings, links, etc.
These XUL elements are provided to an HTML page without the page having any control over them.`}),`
`,(0,c.jsx)(t.p,{children:`XUL was and is used to create various UI elements, for example:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Input controls such as textboxes and checkboxes`}),`
`,(0,c.jsx)(t.li,{children:`Toolbars with buttons or other content`}),`
`,(0,c.jsx)(t.li,{children:`Menus on a menu bar or pop up menus`}),`
`,(0,c.jsx)(t.li,{children:`Tabbed dialogs`}),`
`,(0,c.jsx)(t.li,{children:`Trees for hierarchical or tabular information`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`XUL is a Mozilla-specific technology with many similarities but also many differences to HTML.
These include a different box model (although it is now synthesized in the HTML box model) and the ability to be backed by C++ code.`}),`
`,(0,c.jsx)(t.h2,{id:`what-requires-xul`,children:`What requires XUL`}),`
`,(0,c.jsxs)(t.p,{children:[`While many of the existing XUL elements that make up the browser can be migrated to HTML, there are some elements that require XUL.
These elements tend to be fundamental to the browser such as windows, popups, panels, etc.
Elements that need to emulate OS-specific styling also tend to be XUL elements.
While there are parts of these elements that must be XUL, that does not mean that the component must be entirely implmented in XUL.
For example, we require that a `,(0,c.jsx)(t.code,{children:`panel`}),` can be drawn outside of a window's bounds, but then we can have HTML inside of that `,(0,c.jsx)(t.code,{children:`panel`}),` element.`]}),`
`,(0,c.jsx)(t.p,{children:`The following is not an exhaustive list of elements that require XUL:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Browser Window`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`https://searchfox.org/firefox-main/source/xpfe/appshell/nsIXULBrowserWindow.idl`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`Popups`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`https://searchfox.org/firefox-main/source/dom/webidl/XULPopupElement.webidl`}),`
`,(0,c.jsx)(t.li,{children:`https://searchfox.org/firefox-main/source/layout/xul/nsMenuPopupFrame.cpp`}),`
`,(0,c.jsx)(t.li,{children:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/autocomplete-popup.js`}),`
`,(0,c.jsx)(t.li,{children:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/menupopup.js`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`Panels`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/panel.js`}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`when-to-use-html-or-xul`,children:`When to use HTML or XUL`}),`
`,(0,c.jsx)(t.p,{children:`Now that HTML is powerful enough for us to create almost an entire application with it, the need for the features of XUL has diminished.
We now prefer to write HTML components over XUL components since that model is better understood by the web and front-end community.
This also allows us to gain new features of the web in the UI that we write without backporting them to XUL.`}),`
`,(0,c.jsxs)(t.p,{children:[`There are some cases where XUL may still be required for non-standard functionality.
Some XUL elements have more functions over similar HTML elements, such as the XUL `,(0,c.jsx)(t.code,{children:`<browser>`}),` element compared to the HTML `,(0,c.jsx)(t.code,{children:`<iframe>`}),` element.
The XUL `,(0,c.jsx)(t.code,{children:`<panel>`}),` can exceed the bounds of its parent document and is useful for dropdowns, menus, and similar situations.
In these situations, it would be appropriate to use XUL elements.
Otherwise, we want to `,(0,c.jsx)(t.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1563415`,rel:`nofollow`,children:`start replacing XUL elements with HTML elements`}),`.
Because of this, new code `,(0,c.jsx)(t.strong,{children:`should use HTML whenever possible`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`mixing-html-and-xul`,children:`Mixing HTML and XUL`}),`
`,(0,c.jsxs)(t.p,{children:[`There are a few things you must do in order to use HTML in a XUL file.
First, you must add the following attribute to the `,(0,c.jsx)(t.code,{children:`window`}),` tag of the XUL file, or to the outermost HTML element.
`,(0,c.jsx)(t.code,{children:`xmlns:html="http://www.w3.org/1999/xhtml`}),`.
Using this allows Firefox (or other applications using Gecko) to distinguish the HTML tags from the XUL ones.
Second, any HTML element used must be prefixed with `,(0,c.jsx)(t.code,{children:`html:`}),` otherwise the element will be parsed as a XUL element.
For example, to use a HTML anchor, you would declare it as `,(0,c.jsx)(t.code,{children:`<html:a>`}),`.
Third, any tags or attributes you use have to be in lowercase as XML is case-sensitive.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Please note `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/7a4c08f2c3a895c9dc064734ada320f920250c1f/toolkit/content/tests/widgets/test_panel_list_in_xul_panel.html#35-36`,rel:`nofollow`,children:`you cannot declare XUL in HTML markup`}),`.
You can use `,(0,c.jsx)(t.code,{children:`document.createXULElement()`}),` to programmatically create a XUL element in chrome privileged documents.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};