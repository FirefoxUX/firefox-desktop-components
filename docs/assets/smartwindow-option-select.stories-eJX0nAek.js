import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./smartwindow-option-select-DsfL7lel.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),a=`chrome://browser/content/aiwindow/assets`,o=[{value:`auto`,l10nId:`smartwindow-option-select-story-auto`,secondaryLabelL10nId:`smartwindow-option-select-story-recommended`,buttonL10nId:`smartwindow-option-select-story-auto-button`,descriptionL10nId:`smartwindow-option-select-story-auto-description`,iconSrc:`${a}/model-choice-auto.svg`},{value:`qwen`,l10nId:`smartwindow-option-select-story-qwen`,buttonL10nId:`smartwindow-option-select-story-qwen-button`,descriptionL10nId:`smartwindow-option-select-story-qwen-description`,iconSrc:`${a}/model-choice-qwen.svg`},{value:`mistral`,l10nId:`smartwindow-option-select-story-mistral`,buttonL10nId:`smartwindow-option-select-story-mistral-button`,descriptionL10nId:`smartwindow-option-select-story-mistral-description`,iconSrc:`${a}/model-choice-mistral.svg`},{value:`gemini`,l10nId:`smartwindow-option-select-story-gemini`,buttonL10nId:`smartwindow-option-select-story-gemini-button`,descriptionL10nId:`smartwindow-option-select-story-gemini-description`,iconSrc:`${a}/model-choice-gemini.svg`}],s=[{value:`all`,l10nId:`smartwindow-option-select-story-memories-all`,descriptionL10nId:`smartwindow-option-select-story-memories-all-description`},{value:`browsing`,l10nId:`smartwindow-option-select-story-memories-browsing`,descriptionL10nId:`smartwindow-option-select-story-memories-browsing-description`},{value:`chats`,l10nId:`smartwindow-option-select-story-memories-chats`,descriptionL10nId:`smartwindow-option-select-story-memories-chats-description`},{value:`off`,l10nId:`smartwindow-option-select-story-memories-off`,descriptionL10nId:`smartwindow-option-select-story-memories-off-description`}],c={title:`Domain-specific UI Widgets/AI Window/Smartwindow Option Select`,component:`smartwindow-option-select`,parameters:{fluent:`
smartwindow-option-select-story-recommended = Recommended
smartwindow-option-select-story-auto = Auto
smartwindow-option-select-story-auto-button = Auto
smartwindow-option-select-story-auto-description = Smart Window picks the best model for your task
smartwindow-option-select-story-qwen = Qwen 3 235B
smartwindow-option-select-story-qwen-button = Qwen
smartwindow-option-select-story-qwen-description = Ready for a variety of tasks
smartwindow-option-select-story-mistral = Mistral Small 4
smartwindow-option-select-story-mistral-button = Mistral
smartwindow-option-select-story-mistral-description = Good if you chat and browse in multiple languages
smartwindow-option-select-story-gemini = Gemini Flash Lite 3.1
smartwindow-option-select-story-gemini-button = Gemini
smartwindow-option-select-story-gemini-description = Quick answers when you’re moving fast
smartwindow-option-select-story-memories-all = Chats and browsing
smartwindow-option-select-story-memories-all-description = Chats in Smart Window, browsing across Firefox
smartwindow-option-select-story-memories-browsing = Browsing only
smartwindow-option-select-story-memories-browsing-description = Browsing across Firefox
smartwindow-option-select-story-memories-chats = Chats only
smartwindow-option-select-story-memories-chats-description = Chats in Smart Window
smartwindow-option-select-story-memories-off = Don’t learn from activity
smartwindow-option-select-story-memories-off-description = You’ll see fewer tailored suggestions and may need to repeat details across chats.
    `},argTypes:{maxWidth:{control:{type:`text`}},value:{options:o.map(e=>e.value),control:{type:`select`}}}},l=({options:e,value:n,maxWidth:i})=>r`
  <smartwindow-option-select
    style=${t(i?`--smartwindow-option-select-max-width: ${i}`:void 0)}
    .options=${e}
    .value=${n}
  ></smartwindow-option-select>
`,u=l.bind({}),u.args={options:o,value:`auto`},d=l.bind({}),d.args={options:s,value:`all`,maxWidth:`370px`}})))()}f();export{u as WithIcons,d as WithoutIcons,c as default};