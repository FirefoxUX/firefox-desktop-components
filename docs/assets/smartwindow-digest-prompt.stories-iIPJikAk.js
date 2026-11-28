import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./smartwindow-prompts-tUi81mbA.js";var i,a,o,s,c;function l(){return(l=e((()=>{t(),r(),window.MozXULElement.insertFTLIfNeeded(`browser/aiWindow.ftl`),window.MozXULElement.insertFTLIfNeeded(`preview/aiWindow.ftl`),i={title:`Domain-specific UI Widgets/AI Window/Smartwindow Digest Prompt`,component:`smartwindow-digest-prompt`},a=({prompts:e})=>n`
  <div style="min-height: 300px; padding: 20px;">
    <smartwindow-prompts
      mode="fullpage"
      .prompts=${e}
    ></smartwindow-prompts>
  </div>
`,o=e=>({title:`Morning News`,type:`digest`,id:`catch-up`,highlightExpiresAt:e?Date.now()+864e5:0}),s=a.bind({}),s.args={prompts:[o(!0)]},c=a.bind({}),c.args={prompts:[o(!1)]}})))()}l();export{s as Highlighted,c as NotHighlighted,i as default};