import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./ai-clarifying-question-BPX4pA68.js";import{n as i,t as a}from"./ai-window-shared-DGsZhA-2.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),t(),r(),o=[{id:`coverage`,question:`What should the report cover?`,options:[{id:`kit`,label:`The whole cold-night kit`,description:`The cold nights`,recommended:!0},{id:`jacket`,label:`Just the jacket`,description:`The page you are on, on its own`},{id:`sleep`,label:`Sleeping bag and pad`,description:`The sleep system on its own`}]},{id:`owned`,question:`Is there anything you already own that you'd like to keep using?`,options:[{id:`none`,label:`Nothing yet, start from scratch`,description:`I'll price a full kit`,recommended:!0},{id:`bag`,label:`I have a sleeping bag`,description:`I'll work around it`},{id:`stove`,label:`I have a stove`,description:`Hot food is already covered`}]}],s={title:`Domain-specific UI Widgets/AI Window/Clarifying question`,component:`ai-clarifying-question`,argTypes:{questions:{control:`object`},currentIndex:{control:{type:`number`,min:0}},maxCustomAnswerLength:{control:`number`}},parameters:{actions:{handles:[`ai-clarifying-question:answer`,`ai-clarifying-question:close`]},fluent:`
ai-clarifying-question-progress = Question { $current } of { $total }
ai-clarifying-question-recommended = Recommended
ai-clarifying-question-custom-answer =
    .placeholder = Something else
    .aria-label = Something else
ai-clarifying-question-skip =
    .label = Skip
ai-clarifying-question-send =
    .label = Send
ai-clarifying-question-close =
    .title = Close questions
    `}},c=({questions:e,currentIndex:t,maxCustomAnswerLength:r})=>n`
  <link
    rel="stylesheet"
    href="${a}"
  />
  <ai-clarifying-question
    .questions=${e}
    .currentIndex=${t}
    .maxCustomAnswerLength=${r}
  ></ai-clarifying-question>
`,l=c.bind({}),l.args={questions:o,currentIndex:0,maxCustomAnswerLength:500},u=c.bind({}),u.args={...l.args,currentIndex:1},d=c.bind({}),d.args={...l.args,questions:[o[0]]},f=c.bind({}),f.args={...l.args,questions:[{...o[0],options:o[0].options.map(e=>({...e,recommended:!1}))}]},p=c.bind({}),p.args={...l.args,questions:[{id:`long`,question:`Which parts of the trip should the report focus on, given the forecast lows and how far you plan to hike in and out each day?`,options:[{id:`a`,label:`Everything you need to stay warm overnight, from the sleeping system to hot food without a campfire`,description:`Covers the bag, pad, layers and a stove, priced as a full kit`,recommended:!0},{id:`b`,label:`Only the clothing layers`,description:`Jacket, base layers and accessories`}]}]},m=c.bind({}),m.args={...l.args,maxCustomAnswerLength:20}})))()}h();export{l as Default,p as LongText,f as NoRecommendation,u as SecondQuestion,m as ShortCharacterLimit,d as SingleQuestion,s as default};