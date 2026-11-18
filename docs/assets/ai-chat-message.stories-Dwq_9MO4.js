import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./ai-chat-message-Dak6Ki4v.js";var i,a,o,s,c;function l(){return(l=e((()=>{t(),r(),i={title:`Domain-specific UI Widgets/AI Window/AI Chat Message`,component:`ai-chat-message`,argTypes:{role:{options:[`user`,`assistant`],control:{type:`select`}},content:{control:{type:`text`}}}},a=({role:e,content:t})=>n`
  <ai-chat-message .role=${e} .message=${t}></ai-chat-message>
`,o=a.bind({}),o.args={role:`user`,content:`Test: What is the weather like today?`},s=a.bind({}),s.args={role:`assistant`,content:`Test: I don't have access to real-time weather data, but I can help you with other tasks!`},c=a.bind({}),c.args={role:`assistant`,content:`Here's some **bold text** and *italic text*:

- Item 1
- Item 2

\`\`\`javascript
console.log('code block');
\`\`\``}})))()}l();export{s as AssistantMessage,c as AssistantMessageWithMarkdown,o as UserMessage,i as default};