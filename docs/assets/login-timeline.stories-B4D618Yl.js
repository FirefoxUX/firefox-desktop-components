import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,i as n,u as r,y as i}from"./lit.all-BYVOqvrj.js";import{c as a,o}from"./iframe-B6GfsneT.js";var s;function c(){return(c=e((()=>{s=new URL(`login-timeline-2VOTr8py.css`,import.meta.url).href+``})))()}var l;function u(){return(u=e((()=>{c(),t(),a(),l=class extends o{static get properties(){return{history:{type:Array}}}constructor(){super(),this.history=[]}render(){this.history=this.history.filter(e=>e.time),this.history.sort((e,t)=>e.time-t.time);let e=`auto`,t=this.history.map((t,n)=>{n>0&&(e+=` ${t.time-this.history[n-1].time}fr auto`);let a=2*n+1,o=i({gridColumn:a});return r`
        <svg
          style=${o}
          class="point"
          viewBox="0 0 300 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="75" r="75" />
        </svg>
        <div
          style=${o}
          class="date"
          data-l10n-id="login-item-timeline-point-date"
          data-l10n-args=${JSON.stringify({datetime:t.time})}
        ></div>
        <div
          style=${o}
          class="action"
          data-l10n-id=${t.actionId}
        ></div>
      `});return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div
        class="timeline ${n({empty:!this.history.length})}"
        style=${i({gridTemplateColumns:e})}
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        ${t}
      </div>
    `}},customElements.define(`login-timeline`,l)})))()}var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),u(),d={title:`Domain-specific UI Widgets/Credential Management/Timeline`,component:`login-timeline`},window.MozXULElement.insertFTLIfNeeded(`browser/aboutLogins.ftl`),f=({historyItems:e})=>r`
  <login-timeline .history=${e}></login-timeline>
`,p=`login-item-timeline-action-created`,m=`login-item-timeline-action-updated`,h=`login-item-timeline-action-used`,g=f.bind({}),g.args={historyItems:[]},_=f.bind({}),_.args={historyItems:[{actionId:p,time:1463526500267},{actionId:m,time:1653621219569},{actionId:h,time:1561813190300}]},v=f.bind({}),v.args={historyItems:[{actionId:p,time:1463526500267},{actionId:m,time:1463526500267},{actionId:h,time:1463526500267}]}})))()}y();export{v as AllSameDayTimeline,g as EmptyTimeline,_ as TypicalTimeline,d as default};