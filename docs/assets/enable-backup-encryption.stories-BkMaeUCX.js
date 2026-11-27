import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./moz-card-Ck8x1vPF.js";import{n as i,t as a}from"./backup-constants-BF3H6Sm8.js";import{t as o}from"./enable-backup-encryption-n3VSo0ln.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r(),i(),o(),window.MozXULElement.insertFTLIfNeeded(`browser/backupSettings.ftl`),window.MozXULElement.insertFTLIfNeeded(`branding/brand.ftl`),s={"(none)":0,...a},c={title:`Domain-specific UI Widgets/Backup/Enable Encryption`,component:`enable-backup-encryption`,argTypes:{type:{control:{type:`select`},options:[`set-password`,`change-password`]},enableEncryptionErrorCode:{options:Object.keys(s),mapping:s,control:{type:`select`}}}},l=({type:e,enableEncryptionErrorCode:t})=>n`
  <moz-card style="width: 23.94rem; position: relative;">
    <enable-backup-encryption
      type=${e}
      .enableEncryptionErrorCode=${t}
    ></enable-backup-encryption>
  </moz-card>
`,u=l.bind({}),u.args={type:`set-password`},d=l.bind({}),d.args={type:`change-password`},f=l.bind({}),f.args={type:`set-password`,enableEncryptionErrorCode:a.INVALID_PASSWORD}})))()}p();export{d as ChangePassword,u as SetPassword,f as SetPasswordError,c as default};