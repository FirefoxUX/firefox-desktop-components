import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-BYVOqvrj.js";import{t as r}from"./chat-assistant-error-BhpAecy3.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),i={title:`Domain-specific UI Widgets/AI Window/Chat Assistant Error`,component:`chat-assistant-error`,argTypes:{error:{control:`object`},actionButton:{control:`object`},errorText:{control:`object`}},parameters:{fluent:`
smartwindow-assistant-error-generic-header = Something went wrong. Please try again.
smartwindow-assistant-error-budget-header = You’ve reached today’s chat limit.
smartwindow-assistant-error-budget-body = You can still browse in this window. Chat will be available again after midnight ET.
smartwindow-assistant-error-many-requests-header = Please wait a moment and try again. Too many messages were sent in a short time.
smartwindow-assistant-error-max-length-header = It’s time to start a new chat. This one’s reached its length limit.
smartwindow-retry-btn = Try Again
smartwindow-clear-btn = New chat
    `}},a=({error:e,errorText:t,actionButton:r})=>n`
  <chat-assistant-error
    .error=${e}
    .errorText=${t}
    .actionButton=${r}
  ></chat-assistant-error>
`,o=a.bind({}),o.args={error:{error:`generic error message that is not a number`},errorText:{header:`smartwindow-assistant-error-generic-header`},actionButton:{label:`smartwindow-retry-btn`}},s=a.bind({}),s.args={error:{error:1},errorText:{header:`smartwindow-assistant-error-budget-header`,body:`smartwindow-assistant-error-budget-body`}},c=a.bind({}),c.args={error:{error:2},errorText:{header:`smartwindow-assistant-error-many-requests-header`}},l=a.bind({}),l.args={error:{error:3},errorText:{header:`smartwindow-assistant-error-max-length-header`},actionButton:{label:`smartwindow-clear-btn`}}})))()}u();export{s as Budget,o as Default,c as ManyRequests,l as MaxLength,i as default};