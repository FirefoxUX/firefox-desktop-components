import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./moz-card-Cawhmv_M.js";import{n as a,t as o}from"./backup-constants-BF3H6Sm8.js";import{t as s}from"./turn-on-scheduled-backups-GTrzYrFs.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),a(),s(),window.MozXULElement.insertFTLIfNeeded(`browser/backupSettings.ftl`),window.MozXULElement.insertFTLIfNeeded(`branding/brand.ftl`),c={"(none)":0,...o},l={title:`Domain-specific UI Widgets/Backup/Turn On Scheduled Backups`,component:`turn-on-scheduled-backups`,argTypes:{enableBackupErrorCode:{options:Object.keys(c),mapping:c,control:{type:`select`}},hideFilePathChooser:{control:`boolean`},embeddedFxBackupOptIn:{control:`boolean`},isEncryptedBackup:{control:`boolean`}}},u=({defaultPath:e,defaultLabel:n,_newPath:i,_newLabel:a,enableBackupErrorCode:o,hideFilePathChooser:s,embeddedFxBackupOptIn:c})=>r`
  <turn-on-scheduled-backups
    defaultPath=${e}
    defaultLabel=${n}
    _newPath=${t(i)}
    _newLabel=${t(a)}
    .enableBackupErrorCode=${o}
    ?hide-file-path-chooser=${s}
    ?embedded-fx-backup-opt-in=${c}
  ></turn-on-scheduled-backups>
`,d=u.bind({}),d.args={defaultPath:`/Some/User/Documents`,defaultLabel:`Documents`,hideFilePathChooser:!1,embeddedFxBackupOptIn:!1,enableBackupErrorCode:0},f=u.bind({}),f.args={...d.args,_newPath:`/Some/Test/Custom/Dir`,_newLabel:`Dir`},p=u.bind({}),p.args={...f.args,enableBackupErrorCode:o.FILE_SYSTEM_ERROR},m=u.bind({}),m.args={...d.args,embeddedFxBackupOptIn:!0,hideFilePathChooser:!1},h=u.bind({}),h.args={...d.args,embeddedFxBackupOptIn:!0,hideFilePathChooser:!0}})))()}g();export{f as CustomLocation,d as Default,h as EmbeddedFx_EncryptedBackup_HideFilePathChooser,m as EmbeddedFx_UnencryptedBackup,p as EnableError,l as default};