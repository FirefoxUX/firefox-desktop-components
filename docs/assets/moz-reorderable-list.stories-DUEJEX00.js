import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,n as r,u as i}from"./lit.all-Co4HOUmF.js";import{t as a}from"./moz-reorderable-list-BXtZ-F29.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),o=`Default`,s=`Shadow DOM`,c=`Drag selector`,l={title:`UI Widgets/Reorderable List`,component:`moz-reorderable-list`,argTypes:{demoType:{options:[o,s,c],control:{type:`select`}}},parameters:{status:`stable`,actions:{handles:[`reorder`]}}},u=class extends r{static shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0};static properties={item:{type:String}};render(){return i`<style>
        #shadowed {
          border: var(--border-width) solid var(--border-color);
          border-radius: var(--border-radius-small);
          background-color: var(--background-color-box);
          display: flex;
          align-items: center;
          padding: var(--space-small);
        }
      </style>
      <button id="shadowed">${this.item}</button>`}},customElements.define(`shadow-demo`,u),d=class extends r{static properties={items:{type:Array,state:!0},type:{type:String}};createRenderRoot(){return this}constructor(){super(),this.items=[`Item 1`,`Item 2`,`Item 3`,`Item 4`]}async reorderItems(e,t,n=!1){let r=this.items.indexOf(e.textContent.trim()),i=this.items.indexOf(t.textContent.trim()),a=[...this.items],[o]=a.splice(r,1),s=i;r<i&&s--,n||(s+=1),a.splice(s,0,o),this.items=a,await this.updateComplete;let c=this.querySelectorAll(`li`)[s];this.getFocusableEl(c)?.focus()}getFocusableEl(e){return this.type==c?e.querySelector(this.selectors.dragSelector):e.shadowRoot?.querySelector(this.selectors.itemSelector)??e.firstElementChild}handleReorder(e){let{draggedElement:t,targetElement:n,position:r}=e.detail;this.reorderItems(t,n,r===-1)}handleKeydown(e){e.stopPropagation();let t=this.children[1].evaluateKeyDownEvent(e);t&&this.handleReorder({detail:t})}addItem(){this.items=[...this.items,`Item ${this.items.length+1}`]}get selectors(){switch(this.type){case o:return{itemSelector:`li`};case s:return{itemSelector:`#shadowed`};case c:return{itemSelector:`li`,dragSelector:`.handle`};default:return{}}}contentTemplate(e){return this.type==o?i`<button>${e}</button>`:this.type==c?i`<div class="draggable">
        <div class="handle" tabindex="0"></div>
        <span>${e}</span>
      </div>`:i`<shadow-demo item=${e}></shadow-demo>`}render(){let{itemSelector:e,dragSelector:n}=this.selectors;return i`
      <style>
        ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-small);
        }
        li {
          list-style: none;
        }
        .handle {
          width: var(--button-size-icon);
          height: var(--button-size-icon);
          cursor: pointer;
          background-image: url("chrome://global/skin/icons/more.svg");
          background-position: center;
          background-repeat: no-repeat;
          border-radius: var(--button-border-radius);
          -moz-context-properties: fill;
          fill: currentColor;
        }
        .draggable {
          border: var(--border-width) solid var(--border-color);
          border-radius: var(--border-radius-small);
          background-color: var(--background-color-box);
          display: flex;
          align-items: center;
          gap: var(--space-small);
        }
      </style>
      <moz-reorderable-list
        itemselector=${t(e)}
        dragselector=${t(n)}
        @reorder=${this.handleReorder}
        @keydown=${this.handleKeydown}
      >
        <ul>
          ${this.items.map(e=>i` <li>${this.contentTemplate(e)}</li> `)}
        </ul>
      </moz-reorderable-list>
      <button @click=${this.addItem}>Add another item</button>
    `}},customElements.define(`reorderable-demo`,d),f=({demoType:e})=>i`
  <reorderable-demo type=${e}></reorderable-demo>
`,p=f.bind({}),p.args={demoType:o},m=f.bind({}),m.args={demoType:s},h=f.bind({}),h.args={demoType:c}})))()}g();export{p as Default,h as DragSelector,m as ShadowDOM,l as default};