import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./panel-list-BjRbkL-2.js";import{i}from"./moz-button-group-BL01SGh8.js";import{t as a}from"./named-deck-LsutbIP3.js";var o;function s(){return(s=e((()=>{o=``+new URL(`migration-wizard-C6F77JJl.css`,import.meta.url).href})))()}var c;function l(){return(l=e((()=>{c=Object.freeze({MIGRATOR_TYPES:Object.freeze({BROWSER:`browser`,FILE:`file`}),PAGES:Object.freeze({LOADING:`loading`,SELECTION:`selection`,PROGRESS:`progress`,FILE_IMPORT_PROGRESS:`file-import-progress`,SAFARI_PERMISSION:`safari-permission`,SAFARI_PASSWORD_PERMISSION_PRE_SEQUOIA:`safari-password-permission-pre-sequoia`,SAFARI_PASSWORD_PERMISSION:`safari-password-permission`,CHROME_WINDOWS_PASSWORD_PERMISSION:`chrome-windows-password-permission`,NO_BROWSERS_FOUND:`no-browsers-found`}),PROGRESS_VALUE:Object.freeze({LOADING:1,SUCCESS:2,WARNING:3,INFO:4}),DISPLAYED_RESOURCE_TYPES:Object.freeze({HISTORY:`HISTORY`,FORMDATA:`FORMDATA`,PASSWORDS:`PASSWORDS`,BOOKMARKS:`BOOKMARKS`,PAYMENT_METHODS:`PAYMENT_METHODS`,EXTENSIONS:`EXTENSIONS`,COOKIES:`COOKIES`,SESSION:`SESSION`,OTHERDATA:`OTHERDATA`}),DISPLAYED_FILE_RESOURCE_TYPES:Object.freeze({PASSWORDS_FROM_FILE:`PASSWORDS_FROM_FILE`,PASSWORDS_NEW:`PASSWORDS_NEW`,PASSWORDS_UPDATED:`PASSWORDS_UPDATED`,BOOKMARKS_FROM_FILE:`BOOKMARKS_FROM_FILE`}),PROFILE_RESET_ONLY_RESOURCE_TYPES:Object.freeze({COOKIES:`COOKIES`,SESSION:`SESSION`,OTHERDATA:`OTHERDATA`}),USES_FAVORITES:Object.freeze([`chromium-edge`,`chromium-edge-beta`,`edge`,`ie`]),EXTENSIONS_IMPORT_RESULT:Object.freeze({NOT_IMPORTED:`0`,NONE_MATCHED:`1`,PARTIAL_MATCH:`2`,ALL_MATCHED:`3`})})})))()}var u;function d(){return(d=e((()=>{s(),i(),l(),u=class e extends HTMLElement{static#e=null;#t=null;#n=null;#r=null;#i=null;#a=null;#o=null;#s=null;#c=null;#l=null;#u=null;#d=null;#f=null;#p=!1;#m=null;#h=null;#g=null;static get markup(){return`
      <template>
        <link rel="stylesheet" href="${o}">
        <named-deck id="wizard-deck" selected-view="page-loading" aria-busy="true" part="deck">
          <div name="page-loading">
            <h1 class="migration-wizard-header" data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <div class="loading-block large"></div>
            <div class="loading-block small"></div>
            <div class="loading-block small"></div>
            <moz-button-group class="buttons" part="buttons">
              <!-- If possible, use the same button labels as the SELECTION page with the same strings.
                   That'll prevent flicker when the load state exits if we then enter the SELECTION page. -->
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label" disabled></button>
              <button class="migration-import-button" data-l10n-id="migration-import-button-label" disabled></button>
            </moz-button-group>
          </div>

          <div name="page-selection" part="page-selection">
            <h1 class="migration-wizard-header" data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <p class="migration-wizard-subheader" part="subheader" hidden=""></p>
            <button id="browser-profile-selector" part="profile-selector" aria-haspopup="menu" aria-labelledby="migrator-name profile-name">
              <span class="migrator-icon" role="presentation"></span>
              <div class="migrator-description" role="presentation">
                <div id="migrator-name">&nbsp;</div>
                <div id="profile-name" class="text-deemphasized" part="profile-name"></div>
              </div>
              <span class="dropdown-icon" role="presentation"></span>
            </button>
            <div class="no-resources-found error-message">
              <span class="error-icon" role="img"></span>
              <div data-l10n-id="migration-wizard-import-browser-no-resources"></div>
            </div>

            <div class="no-permissions-message">
              <p data-l10n-id="migration-no-permissions-message">
              </p>
              <p data-l10n-id="migration-no-permissions-instructions">
              </p>
              <ol>
                <li data-l10n-id="migration-no-permissions-instructions-step1"></li>
                <li class="migration-no-permissions-instructions-step2" data-l10n-id="migration-no-permissions-instructions-step2-2" data-l10n-args='{"permissionsPath": "" }'>
                  <code></code>
                </li>
              </ol>
            </div>

            <div id="migration-wizard-selection-list" data-l10n-id="migration-wizard-selection-list" class="resource-selection-preamble text-deemphasized hide-on-error"></div>
            <details class="resource-selection-details hide-on-error" part="resource-selection-details">
              <summary id="resource-selection-summary">
                <div class="selected-data-header" data-l10n-id="migration-all-available-data-label"></div>
                <div class="selected-data text-deemphasized">&nbsp;</div>
                <span class="expand-collapse-icon" role="img"></span>
              </summary>
              <fieldset id="resource-type-list" part="resource-type-list" aria-labelledby="migration-wizard-selection-list">
                <label id="select-all">
                  <input type="checkbox" class="select-all-checkbox"/><span data-l10n-id="migration-select-all-option-label"></span>
                </label>
                <label id="bookmarks" class="resource-type-label" data-resource-type="BOOKMARKS"/>
                  <input type="checkbox"/><span default-data-l10n-id="migration-bookmarks-option-label" ie-edge-data-l10n-id="migration-favorites-option-label"></span>
                </label>
                <label id="logins-and-passwords" class="resource-type-label" data-resource-type="PASSWORDS">
                  <input type="checkbox"/><span data-l10n-id="migration-passwords-option-label"></span>
                </label>
                <label id="history" class="resource-type-label" data-resource-type="HISTORY">
                  <input type="checkbox"/><span data-l10n-id="migration-history-option-label"></span>
                </label>
                <label id="extensions" class="resource-type-label" data-resource-type="EXTENSIONS">
                  <input type="checkbox"/><span data-l10n-id="migration-extensions-option-label"></span>
                </label>
                <label id="form-autofill" class="resource-type-label" data-resource-type="FORMDATA">
                  <input type="checkbox"/><span data-l10n-id="migration-form-autofill-option-label"></span>
                </label>
                <label id="payment-methods" class="resource-type-label" data-resource-type="PAYMENT_METHODS">
                  <input type="checkbox"/><span data-l10n-id="migration-payment-methods-option-label"></span>
                </label>
              </fieldset>
            </details>

            <div class="file-import-error error-message">
              <span class="error-icon" role="img"></span>
              <div id="file-import-error-message"></div>
            </div>

            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label"></button>
              <button id="import-from-file" class="primary" data-l10n-id="migration-import-from-file-button-label"></button>
              <button id="import" part="import-primary" class="primary migration-import-button" data-l10n-id="migration-import-button-label"></button>
              <button id="get-permissions" class="primary" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-progress" part="page-progress">
            <h1 id="progress-header" data-l10n-id="migration-wizard-progress-header" part="header"></h1>
            <div class="resource-progress">
              <div data-resource-type="BOOKMARKS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span default-data-l10n-id="migration-bookmarks-option-label" ie-edge-data-l10n-id="migration-favorites-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="PASSWORDS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="HISTORY" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-history-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="EXTENSIONS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-extensions-option-label"></span>
                <a id="extensions-success-link" href="about:addons" class="message-text text-deemphasized"></a>
                <span class="message-text text-deemphasized"></span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="FORMDATA" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-form-autofill-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="PAYMENT_METHODS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-payment-methods-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="COOKIES" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-cookies-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="SESSION" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-session-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="OTHERDATA" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-otherdata-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>
            </div>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label" disabled></button>
              <button class="primary finish-button done-button" data-l10n-id="migration-done-button-label"></button>
              <button class="primary finish-button continue-button" part="continue-primary" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-file-import-progress">
            <h1 id="file-import-progress-header"part="header"></h1>
            <div class="resource-progress">
              <div data-resource-type="PASSWORDS_FROM_FILE" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-from-file"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>

              <div data-resource-type="PASSWORDS_NEW" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-new"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>

              <div data-resource-type="PASSWORDS_UPDATED" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-updated"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>

              <div data-resource-type="BOOKMARKS_FROM_FILE" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-bookmarks-from-file"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>
            </div>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label" disabled></button>
              <button class="primary finish-button done-button" data-l10n-id="migration-done-button-label"></button>
              <button class="primary finish-button continue-button" part="continue-primary" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-safari-password-permission-pre-sequoia">
            <h1 data-l10n-id="migration-safari-password-import-header" part="header"></h1>
            <span data-l10n-id="migration-safari-password-import-steps-header"></span>
            <ol>
              <li data-l10n-id="migration-safari-password-import-step1"></li>
              <li data-l10n-id="migration-safari-password-import-step2"><img class="safari-icon-3dots" data-l10n-name="safari-icon-3dots"/></li>
              <li data-l10n-id="migration-safari-password-import-step3"></li>
              <li class="safari-icons-group">
                <span data-l10n-id="migration-safari-password-import-step4"></span>
                <span class="page-portrait-icon"></span>
              </li>
            </ol>
            <moz-button-group class="buttons" part="buttons">
              <button class="manual-password-import-skip" data-l10n-id="migration-manual-password-import-skip-button"></button>
              <button class="manual-password-import-select primary" data-l10n-id="migration-manual-password-import-select-button"></button>
            </moz-button-group>
          </div>

          <div name="page-safari-password-permission">
            <h1 data-l10n-id="migration-safari-password-import-header" part="header"></h1>
            <ol id="migration-safari-password-import-instructions">
              <li data-l10n-id="migration-safari-password-import-post-sequoia-step1"><a id="launch-macos-passwords-app" data-l10n-name="macos-passwords-app"></a></li>
              <li data-l10n-id="migration-safari-password-import-post-sequoia-step2"></li>
              <li data-l10n-id="migration-safari-password-import-post-sequoia-step3"></li>
              <li data-l10n-id="migration-safari-password-import-post-sequoia-step4"></li>
            </ol>
            <moz-button-group class="buttons" part="buttons">
              <button class="manual-password-import-skip" data-l10n-id="migration-manual-password-import-cancel-button"></button>
              <button class="manual-password-import-select primary" data-l10n-id="migration-manual-password-import-select-button"></button>
            </moz-button-group>
          </div>

          <div name="page-chrome-windows-password-permission">
            <h1 data-l10n-id="migration-chrome-windows-password-import-header" part="header"></h1>
            <span data-l10n-id="migration-chrome-windows-password-import-steps-header"></span>
            <ol>
              <li data-l10n-id="migration-chrome-windows-password-import-step1"><img class="chrome-icon-3dots" data-l10n-name="chrome-icon-3dots"/></li>
              <li data-l10n-id="migration-chrome-windows-password-import-step2"></li>
              <li data-l10n-id="migration-chrome-windows-password-import-step3"></li>
            </ol>
            <p>
              <span data-l10n-id="migration-chrome-windows-password-import-step4"></span>
            </p>
            <moz-button-group class="buttons" part="buttons">
              <button class="manual-password-import-skip" data-l10n-id="migration-manual-password-import-skip-button"></button>
              <button class="manual-password-import-select primary" data-l10n-id="migration-manual-password-import-select-button"></button>
            </moz-button-group>
          </div>

          <div name="page-safari-permission">
            <h1 data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <div data-l10n-id="migration-wizard-safari-permissions-sub-header"></div>
            <ol>
              <li data-l10n-id="migration-wizard-safari-instructions-continue"></li>
              <li data-l10n-id="migration-wizard-safari-instructions-folder"></li>
            </ol>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label"></button>
              <button id="safari-request-permissions" class="primary" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-no-browsers-found">
            <h1 data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <div class="no-browsers-found error-message">
              <span class="error-icon" role="img"></span>
              <div class="no-browsers-found-message" data-l10n-id="migration-wizard-import-browser-no-browsers"></div>
            </div>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label"></button>
              <button id="choose-import-from-file" class="primary" data-l10n-id="migration-choose-to-import-from-file-button-label"></button>
            </moz-button-group>
          </div>
        </named-deck>
        <slot></slot>
      </template>
    `}static get fragment(){if(!e.#e){let t=new DOMParser().parseFromString(e.markup,`text/html`);e.#e=document.importNode(t.querySelector(`template`),!0)}return e.#e.content.cloneNode(!0)}constructor(){super();let t=this.attachShadow({mode:`open`});window.MozXULElement&&(window.MozXULElement.insertFTLIfNeeded(`branding/brand.ftl`),window.MozXULElement.insertFTLIfNeeded(`browser/migrationWizard.ftl`)),document.l10n.connectRoot(t),t.appendChild(e.fragment),this.#t=t.querySelector(`#wizard-deck`),this.#n=t.querySelector(`#browser-profile-selector`),this.#f=t.querySelector(`#resource-selection-summary`),this.#f.addEventListener(`click`,this);let n=t.querySelectorAll(`.cancel-close`);for(let e of n)e.addEventListener(`click`,this);let r=t.querySelectorAll(`.finish-button`);for(let e of r)e.addEventListener(`click`,this);this.#o=t.querySelector(`#import`),this.#o.addEventListener(`click`,this),this.#s=t.querySelector(`#import-from-file`),this.#s.addEventListener(`click`,this),this.#c=t.querySelector(`#choose-import-from-file`),this.#c.addEventListener(`click`,this),this.#l=t.querySelector(`#get-permissions`),this.#l.addEventListener(`click`,this),this.#n.addEventListener(`click`,this),this.#n.addEventListener(`mousedown`,this),this.#i=t.querySelector(`#resource-type-list`),this.#i.addEventListener(`change`,this),this.#u=t.querySelector(`#safari-request-permissions`),this.#u.addEventListener(`click`,this),this.#d=t.querySelector(`#select-all`).control;let i=t.querySelectorAll(`.manual-password-import-skip`);for(let e of i)e.addEventListener(`click`,this);let a=t.querySelectorAll(`.manual-password-import-select`);for(let e of a)e.addEventListener(`click`,this);this.#m=t.querySelector(`#extensions-success-link`),this.#m.addEventListener(`click`,this),this.#h=t.querySelectorAll(`.support-text`),this.#h.forEach(e=>e.addEventListener(`click`,this)),this.#g=t.querySelector(`#migration-safari-password-import-instructions`),this.#g.addEventListener(`click`,this),this.#a=t}connectedCallback(){this.hasAttribute(`auto-request-state`)&&this.requestState()}requestState(){this.dispatchEvent(new CustomEvent(`MigrationWizard:RequestState`,{bubbles:!0}))}set state(e){this.setState(e)}setState(e){switch(e.page){case c.PAGES.SELECTION:this.#b(e);break;case c.PAGES.PROGRESS:this.#x(e);break;case c.PAGES.FILE_IMPORT_PROGRESS:this.#S(e);break;case c.PAGES.NO_BROWSERS_FOUND:this.#C(e)}this.#t.toggleAttribute(`aria-busy`,e.page==c.PAGES.LOADING),this.#t.setAttribute(`selected-view`,`page-${e.page}`),window.IS_STORYBOOK&&this.#w()}get#_(){return this.hasAttribute(`dialog-mode`)}#v(){if(!this.#r){if(this.#r=document.createElement(`panel-list`),this.#r.toggleAttribute(`min-width-from-anchor`,!0),this.#r.addEventListener(`click`,this),document.createXULElement){let e=document.createXULElement(`panel`);e.appendChild(this.#r),this.#a.appendChild(e)}else this.#a.appendChild(this.#r),this.#n.popoverTargetElement=this.#r}}#y(e){this.#n.selectedPanelItem=e,this.#r.selectedPanelItem&&this.#r.selectedPanelItem.classList.remove(`selected`),this.#r.selectedPanelItem=e,this.#r.selectedPanelItem.classList.add(`selected`),this.#n.querySelector(`#migrator-name`).textContent=e.displayName,this.#n.querySelector(`#profile-name`).textContent=e.profile?.name||``,e.brandImage?this.#n.querySelector(`.migrator-icon`).style.content=`url(${e.brandImage})`:this.#n.querySelector(`.migrator-icon`).style.content=`url(chrome://global/skin/icons/defaultFavicon.svg)`;let t=e.getAttribute(`key`),n=e.resourceTypes;for(let e of this.#i.querySelectorAll(`label[data-resource-type]`))e.hidden=!0,e.control.checked=!1;for(let e of n){let n=this.#i.querySelector(`label[data-resource-type="${e}"]`);if(n){n.hidden=!1,n.control.checked=!0;let e=n.querySelector(`span[default-data-l10n-id]`);e&&(c.USES_FAVORITES.includes(t)?document.l10n.setAttributes(e,e.getAttribute(`ie-edge-data-l10n-id`)):document.l10n.setAttributes(e,e.getAttribute(`default-data-l10n-id`)))}}let r=this.#a.querySelector(`#select-all`).control;r.checked=!0,this.#A(),this.#n.selectedPanelItem=e;let i=this.#a.querySelector(`div[name='page-selection']`);i.setAttribute(`migrator-type`,e.getAttribute(`type`));let a=e.getAttribute(`type`)==c.MIGRATOR_TYPES.BROWSER&&!e.hasPermissions&&e.getAttribute(`key`)!=`safari`;i.toggleAttribute(`no-permissions`,a),a&&(i.querySelector(`.migration-no-permissions-instructions-step2`).setAttribute(`data-l10n-args`,JSON.stringify({permissionsPath:e.permissionsPath})),this.dispatchEvent(new CustomEvent(`MigrationWizard:PermissionsNeeded`,{bubbles:!0,detail:{key:t}}))),i.toggleAttribute(`no-resources`,e.getAttribute(`type`)==c.MIGRATOR_TYPES.BROWSER&&!n.length&&e.hasPermissions)}#b(e){this.#v(),this.#r.textContent=``;let t=this.#a.querySelector(`div[name='page-selection']`),n=t.querySelector(`.migration-wizard-header`),r=this.getAttribute(`selection-header-string`);this.hasAttribute(`selection-header-string`)?(n.textContent=r,n.toggleAttribute(`hidden`,!r)):n.removeAttribute(`hidden`);let i=this.getAttribute(`selection-subheader-string`),a=t.querySelector(`.migration-wizard-subheader`);a.textContent=i,a.toggleAttribute(`hidden`,!i);let o=this.#a.querySelector(`details`);if(this.hasAttribute(`force-show-import-all`)){let e=this.getAttribute(`force-show-import-all`)==`true`;t.toggleAttribute(`show-import-all`,e),o.open=!e}else t.toggleAttribute(`show-import-all`,e.showImportAll),o.open=!e.showImportAll;this.#p=!1,this.#j();for(let t of e.migrators){let e=document.createElement(`panel-item`);e.setAttribute(`key`,t.key),e.setAttribute(`type`,t.type),e.profile=t.profile,e.displayName=t.displayName,e.resourceTypes=t.resourceTypes,e.hasPermissions=t.hasPermissions,e.permissionsPath=t.permissionsPath,e.brandImage=t.brandImage;let n=e.shadowRoot.querySelector(`button`);t.brandImage&&(n.style.backgroundImage=`url(${t.brandImage})`),t.profile?document.l10n.setAttributes(e,`migration-wizard-selection-option-with-profile`,{sourceBrowser:t.displayName,profileName:t.profile.name}):document.l10n.setAttributes(e,`migration-wizard-selection-option-without-profile`,{sourceBrowser:t.displayName}),this.#r.appendChild(e)}if(e.migrators.length&&this.#y(this.#r.firstElementChild),e.migratorKey){let t=this.#r.querySelector(`panel-item[key="${e.migratorKey}"]`);t&&this.#y(t)}let s=t.querySelector(`#file-import-error-message`);e.fileImportErrorMessage?(s.textContent=e.fileImportErrorMessage,t.toggleAttribute(`file-import-error`,!0)):(s.textContent=``,t.toggleAttribute(`file-import-error`,!1)),requestAnimationFrame(()=>{this.#n.focus({focusVisible:!1})})}#x(e){let t=this.#a.querySelector(`div[name='page-progress']`),n=t.querySelectorAll(`.resource-progress-group`);this.#m.textContent=``;let r=Object.keys(e.progress).length,i=0;for(let t of n){let n=t.dataset.resourceType;if(!e.progress.hasOwnProperty(n)){t.hidden=!0;continue}t.hidden=!1;let a=t.querySelector(`.progress-icon`),o=t.querySelector(`span.message-text`),s=t.querySelector(`.support-text`),l=t.querySelector(`span[default-data-l10n-id]`);switch(l&&(c.USES_FAVORITES.includes(e.key)?document.l10n.setAttributes(l,l.getAttribute(`ie-edge-data-l10n-id`)):document.l10n.setAttributes(l,l.getAttribute(`default-data-l10n-id`))),o.textContent=``,s&&(s.textContent=``,s.removeAttribute(`href`)),e.progress[n].value){case c.PROGRESS_VALUE.LOADING:document.l10n.setAttributes(a,`migration-wizard-progress-icon-in-progress`),a.setAttribute(`state`,`loading`),o.textContent=``,s.textContent=``,s.removeAttribute(`href`),o.appendChild(document.createTextNode(`\xA0`));break;case c.PROGRESS_VALUE.SUCCESS:document.l10n.setAttributes(a,`migration-wizard-progress-icon-completed`),a.setAttribute(`state`,`success`),o.textContent=e.progress[n].message,n==c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS&&(o.textContent=``,this.#m.target=`_blank`,this.#m.textContent=e.progress[n].message),r--;break;case c.PROGRESS_VALUE.WARNING:document.l10n.setAttributes(a,`migration-wizard-progress-icon-completed`),a.setAttribute(`state`,`warning`),o.textContent=e.progress[n].message,s.textContent=e.progress[n].linkText,s.href=e.progress[n].linkURL,s.target=`_blank`,r--,i++;break;case c.PROGRESS_VALUE.INFO:document.l10n.setAttributes(a,`migration-wizard-progress-icon-completed`),a.setAttribute(`state`,`info`),o.textContent=e.progress[n].message,s.textContent=e.progress[n].linkText,s.href=e.progress[n].linkURL,s.target=`_blank`,n==c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS&&(o.textContent=``,this.#m.target=`_blank`,this.#m.textContent=e.progress[n].message),r--}}let a=r==0,o=`migration-wizard-progress-header`,s=this.#a.getElementById(`progress-header`);a&&(i?o=`migration-wizard-progress-done-with-warnings-header`:this.getAttribute(`data-import-complete-success-string`)?s.textContent=this.getAttribute(`data-import-complete-success-string`):o=`migration-wizard-progress-done-header`),document.l10n.setAttributes(s,o);let l=t.querySelectorAll(`.finish-button`),u=t.querySelector(`.cancel-close`);for(let e of l)e.hidden=!a;u.hidden=a,a&&requestAnimationFrame(()=>{(this.#_?t.querySelector(`.done-button`):t.querySelector(`.continue-button`)).focus({focusVisible:!1})})}#S(e){let t=this.#a.querySelector(`div[name='page-file-import-progress']`),n=t.querySelectorAll(`.resource-progress-group`),r=Object.keys(e.progress).length;for(let t of n){let n=t.dataset.resourceType;if(!e.progress.hasOwnProperty(n)){t.hidden=!0;continue}t.hidden=!1;let i=t.querySelector(`.progress-icon`),a=t.querySelector(`.message-text`),o=e.progress[n].value;switch(o){case c.PROGRESS_VALUE.LOADING:document.l10n.setAttributes(i,`migration-wizard-progress-icon-in-progress`),i.setAttribute(`state`,`loading`),a.textContent=``,a.appendChild(document.createTextNode(`\xA0`));break;case c.PROGRESS_VALUE.SUCCESS:document.l10n.setAttributes(i,`migration-wizard-progress-icon-completed`),i.setAttribute(`state`,`success`),a.textContent=e.progress[n].message,r--;break;case c.PROGRESS_VALUE.WARNING:document.l10n.setAttributes(i,`migration-wizard-progress-icon-completed`),i.setAttribute(`state`,`warning`),a.textContent=e.progress[n].message,r--;break;default:console.error(`Unrecognized state for file migration: `,o)}}let i=r==0,a=this.#a.getElementById(`file-import-progress-header`);a.textContent=e.title;let o=t.querySelector(`.primary`),s=t.querySelector(`.cancel-close`);o.hidden=!i,s.hidden=i,i&&requestAnimationFrame(()=>{o.focus({focusVisible:!1})})}#C(e){this.#c.hidden=!e.hasFileMigrators}#w(){this.#a.querySelectorAll(`.progress-icon`).forEach(e=>{e.getAttribute(`state`)==`loading`?e.setAttribute(`part`,`progress-spinner`):e.removeAttribute(`part`)})}doAutoImport(e,t,n){let r=this.#E({migratorKey:e,profile:t,resourceTypes:n});this.dispatchEvent(new CustomEvent(`MigrationWizard:BeginMigration`,{bubbles:!0,detail:r}))}#T(){let e=this.#E();this.dispatchEvent(new CustomEvent(`MigrationWizard:BeginMigration`,{bubbles:!0,detail:e}))}#E(e){if(e?.migratorKey){let{migratorKey:t,profile:n,resourceTypes:r}=e;return{key:t,type:c.MIGRATOR_TYPES.BROWSER,profile:n,resourceTypes:r,hasPermissions:!0,expandedDetails:this.#p,autoMigration:!0}}let t=this.#n.selectedPanelItem,n=t.getAttribute(`key`),r=t.getAttribute(`type`),i=t.profile,a=t.hasPermissions,o=this.#i.querySelectorAll(`label[data-resource-type]`),s=[];for(let e of o)e.control.checked&&s.push(e.dataset.resourceType);return{key:n,type:r,profile:i,resourceTypes:s,hasPermissions:a,expandedDetails:this.#p,autoMigration:!1}}#D(){let e=this.#E();this.dispatchEvent(new CustomEvent(`MigrationWizard:RequestSafariPermissions`,{bubbles:!0,detail:e}))}#O(){let e=this.#E();this.dispatchEvent(new CustomEvent(`MigrationWizard:SelectManualPasswordFile`,{bubbles:!0,detail:e}))}#k(){let e=this.#E();this.dispatchEvent(new CustomEvent(`MigrationWizard:GetPermissions`,{bubbles:!0,detail:e}))}async#A(){let e=this.#i.querySelectorAll(`label:not([hidden])[data-resource-type]`),t=this.#n.selectedPanelItem.getAttribute(`key`),n=e.length,r=0,i=this.#a.querySelector(`.selected-data`),a=[],o={[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]:`migration-list-bookmark-label`,[c.DISPLAYED_RESOURCE_TYPES.PASSWORDS]:`migration-list-password-label`,[c.DISPLAYED_RESOURCE_TYPES.HISTORY]:`migration-list-history-label`,[c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]:`migration-list-extensions-label`,[c.DISPLAYED_RESOURCE_TYPES.FORMDATA]:`migration-list-autofill-label`,[c.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]:`migration-list-payment-methods-label`};c.USES_FAVORITES.includes(t)&&(o[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]=`migration-list-favorites-label`);let s=Object.keys(o),l=Object.values(o).map(e=>({id:e})),u=await document.l10n.formatValues(l),d=new Map;for(let e=0;e<s.length;++e){let t=s[e];d.set(t,u[e])}let f=new Intl.ListFormat(void 0,{style:`long`,type:`conjunction`});for(let t of e)t.control.checked&&(a.push(d.get(t.dataset.resourceType)),r++);a.length?(a[0]=a[0].charAt(0).toLocaleUpperCase()+a[0].slice(1),i.textContent=f.format(a)):i.textContent=`\xA0`;let p=this.#a.querySelector(`.selected-data-header`),m=this.#a.querySelector(`#import`);m.disabled=r==0,this.hasAttribute(`option-expander-title-string`)?p.textContent=this.getAttribute(`option-expander-title-string`):r==0?document.l10n.setAttributes(p,`migration-no-selected-data-label`):r<n?document.l10n.setAttributes(p,`migration-selected-data-label`):document.l10n.setAttributes(p,`migration-all-available-data-label`),this.#a.querySelector(`div[name='page-selection']`).toggleAttribute(`single-item`,n==1),this.dispatchEvent(new CustomEvent(`MigrationWizard:ResourcesUpdated`,{bubbles:!0}))}#j(){let e=this.#a.querySelector(`div[name='page-selection']`);if(this.hasAttribute(`hide-select-all`)){let t=this.getAttribute(`hide-select-all`);e.toggleAttribute(`hide-select-all`,t)}else e.removeAttribute(`hide-select-all`);if(this.hasAttribute(`import-button-string`)&&this.getAttribute(`import-button-string`)&&(this.#o.textContent=this.getAttribute(`import-button-string`)),this.hasAttribute(`checkbox-margin-inline`)){let e=this.getAttribute(`checkbox-margin-inline`);this.style.setProperty(`--resource-type-label-margin-inline`,e)}if(this.hasAttribute(`checkbox-margin-block`)){let e=this.getAttribute(`checkbox-margin-block`);this.style.setProperty(`--resource-type-label-margin-block`,e)}if(this.hasAttribute(`import-button-class`)){let e=this.getAttribute(`import-button-class`);e&&this.#o.classList.add(e)}if(this.hasAttribute(`header-font-size`)){let e=this.getAttribute(`header-font-size`);e&&this.style.setProperty(`--embedded-wizard-header-font-size`,e)}if(this.hasAttribute(`header-font-weight`)){let e=this.getAttribute(`header-font-weight`);e&&this.style.setProperty(`--embedded-wizard-header-font-weight`,e)}if(this.hasAttribute(`header-margin-block`)){let e=this.getAttribute(`header-margin-block`);e&&this.style.setProperty(`--embedded-wizard-header-margin-block`,e)}if(this.hasAttribute(`subheader-font-size`)){let e=this.getAttribute(`subheader-font-size`);e&&this.style.setProperty(`--embedded-wizard-subheader-font-size`,e)}if(this.hasAttribute(`subheader-font-weight`)){let e=this.getAttribute(`subheader-font-weight`);e&&this.style.setProperty(`--embedded-wizard-subheader-font-weight`,e)}if(this.hasAttribute(`subheader-margin-block`)){let e=this.getAttribute(`subheader-margin-block`);e&&this.style.setProperty(`--embedded-wizard-subheader-margin-block`,e)}}#M(e){if(e.target==this.#o||e.target==this.#s)this.#T();else if(e.target.classList.contains(`cancel-close`)||e.target.classList.contains(`finish-button`))this.dispatchEvent(new CustomEvent(`MigrationWizard:Close`,{bubbles:!0}));else if(e.currentTarget==this.#r&&e.target!=this.#r)this.#y(e.target),e.target.getAttribute(`type`)==c.MIGRATOR_TYPES.FILE&&this.#T();else if(e.target==this.#u)this.#D();else if(e.currentTarget==this.#f)this.#p=!0;else if(e.target==this.#c)this.dispatchEvent(new CustomEvent(`MigrationWizard:RequestState`,{bubbles:!0,detail:{allowOnlyFileMigrators:!0}}));else if(e.target.id==`launch-macos-passwords-app`)this.dispatchEvent(new CustomEvent(`MigrationWizard:LaunchMacOSPasswordsApp`,{bubbles:!0}));else if(e.target.classList.contains(`manual-password-import-skip`)){let e=this.#a.querySelector(`label[data-resource-type="${c.DISPLAYED_RESOURCE_TYPES.PASSWORDS}"]`).control;e.checked=!1,this.#a.querySelectorAll(`label[data-resource-type] > input:checked`).length?this.#T():this.requestState()}else e.target.classList.contains(`manual-password-import-select`)?this.#O():e.target==this.#m?(this.dispatchEvent(new CustomEvent(`MigrationWizard:OpenAboutAddons`,{bubbles:!0})),e.preventDefault()):[...this.#h].includes(e.target)&&this.hasAttribute(`in-aboutwelcome-bundle`)?(this.dispatchEvent(new CustomEvent(`MigrationWizard:OpenURL`,{bubbles:!0,detail:{url:e.target.href,where:`tabshifted`}})),e.preventDefault()):e.target==this.#l&&this.#k()}#N(e){if(e.target==this.#n)this.#y();else if(e.target==this.#d){let e=this.#a.querySelectorAll(`label[data-resource-type]:not([hidden]) > input[type="checkbox"]`);for(let t of e)t.checked=this.#d.checked;this.#A()}else{let e=this.#a.querySelectorAll(`label[data-resource-type]:not([hidden]) > input[type="checkbox"]`),t=Array.from(e).every(e=>e.checked);this.#d.checked=t,this.#A()}}handleEvent(e){if(e.target==this.#n&&e.type==`click`&&e.preventDefault(),e.target==this.#n&&(e.type==`mousedown`||e.type==`click`&&e.mozInputSource==MouseEvent.MOZ_SOURCE_KEYBOARD))this.#r.toggle(e);else switch(e.type){case`click`:this.#M(e);break;case`change`:this.#N(e)}}},globalThis.customElements&&customElements.define(`migration-wizard`,u)})))()}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{t(),r(),d(),l(),a(),window.MozXULElement.insertFTLIfNeeded(`locales-preview/migrationWizardChromeWindows.ftl`),f={title:`Domain-specific UI Widgets/Migration Wizard`,component:`migration-wizard`},p=[{type:c.MIGRATOR_TYPES.BROWSER,key:`chrome`,displayName:`Chrome`,resourceTypes:[`HISTORY`,`FORMDATA`,`PASSWORDS`,`BOOKMARKS`,`PAYMENT_METHODS`,`EXTENSIONS`],profile:{id:`Default`,name:`Default`},brandImage:`chrome://browser/content/migration/brands/chrome.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`chrome`,displayName:`Chrome`,resourceTypes:[`HISTORY`,`FORMDATA`,`PASSWORDS`,`BOOKMARKS`,`PAYMENT_METHODS`,`EXTENSIONS`],profile:{id:`person-2`,name:`Person 2`},brandImage:`chrome://browser/content/migration/brands/chrome.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`ie`,displayName:`Microsoft Internet Explorer`,resourceTypes:[`HISTORY`,`BOOKMARKS`],profile:null,brandImage:`chrome://global/skin/icons/defaultFavicon.svg`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`edge`,displayName:`Microsoft Edge Legacy`,resourceTypes:[`HISTORY`,`FORMDATA`,`PASSWORDS`,`BOOKMARKS`],profile:null,brandImage:`chrome://global/skin/icons/defaultFavicon.svg`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`chromium-edge`,displayName:`Microsoft Edge`,resourceTypes:[`HISTORY`,`FORMDATA`,`PASSWORDS`,`BOOKMARKS`,`PAYMENT_METHODS`],profile:{id:`Default`,name:`Default`},brandImage:`chrome://browser/content/migration/brands/edge.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`brave`,displayName:`Brave`,resourceTypes:[`HISTORY`,`FORMDATA`,`PASSWORDS`,`BOOKMARKS`,`PAYMENT_METHODS`],profile:{id:`Default`,name:`Default`},brandImage:`chrome://browser/content/migration/brands/brave.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`internal-testing`,displayName:`Internal Testing Migrator`,resourceTypes:[`HISTORY`,`PASSWORDS`,`BOOKMARKS`],profile:null,brandImage:`chrome://global/skin/icons/defaultFavicon.svg`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`safari`,displayName:`Safari`,resourceTypes:[`HISTORY`,`PASSWORDS`,`BOOKMARKS`],profile:null,brandImage:`chrome://browser/content/migration/brands/safari.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`opera`,displayName:`Opera`,resourceTypes:[`HISTORY`,`FORMDATA`,`PASSWORDS`,`BOOKMARKS`],profile:{id:`Default`,name:`Default`},brandImage:`chrome://browser/content/migration/brands/opera.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`opera-gx`,displayName:`Opera GX`,resourceTypes:[`HISTORY`,`FORMDATA`,`PASSWORDS`,`BOOKMARKS`],profile:{id:`Default`,name:`Default`},brandImage:`chrome://browser/content/migration/brands/operagx.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`vivaldi`,displayName:`Vivaldi`,resourceTypes:[`HISTORY`],profile:{id:`Default`,name:`Default`},brandImage:`chrome://browser/content/migration/brands/vivaldi.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.BROWSER,key:`no-resources-browser`,displayName:`Browser with no resources`,resourceTypes:[],profile:{id:`Default`,name:`Default`},brandImage:`chrome://global/skin/icons/defaultFavicon.svg`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.FILE,key:`file-password-csv`,displayName:`Passwords from CSV file`,brandImage:`chrome://branding/content/document.ico`,resourceTypes:[],hasPermissions:!0},{type:c.MIGRATOR_TYPES.FILE,key:`file-bookmarks`,displayName:`Bookmarks from file`,brandImage:`chrome://branding/content/document.ico`,resourceTypes:[],hasPermissions:!0}],m=({state:e,dialogMode:t,forceShowImportAll:r,hideOptionExpanderSubtitle:i,optionExpanderTitleString:a,hideSelectAll:o,importButtonString:s,checkboxMarginInline:c,checkboxMarginBlock:l,importButtonClass:u,selectionHeaderString:d,selectionSubheaderString:f,dataImportCompleteSuccessString:p,headerFontSize:m,headerMarginBlock:h,headerFontWeight:g,subheaderFontSize:_,subheaderMarginBlock:v,subheaderFontWeight:y})=>n`
  <style>
    @media (prefers-reduced-motion: no-preference) {
      migration-wizard::part(progress-spinner) {
        mask: url(./migration/progress-mask.svg);
      }
    }
  </style>

  <moz-card style="width: fit-content">
    <migration-wizard
      ?dialog-mode=${t}
      ?force-show-import-all=${r}
      ?hide-option-expander-subtitle=${i}
      option-expander-title-string=${a}
      ?hide-select-all=${o}
      import-button-string=${s}
      import-button-class=${u}
      checkbox-margin-inline=${c}
      checkbox-margin-block=${l}
      selection-header-string=${d}
      selection-subheader-string=${f}
      data-import-complete-success-string=${p}
      header-font-size=${m}
      header-margin-block=${h}
      header-font-weight=${g}
      subheader-font-size=${_}
      subheader-margin-block=${v}
      subheader-font-weight=${y}
      .state=${e}
    ></migration-wizard>
  </moz-card>
`,h=m.bind({}),h.args={dialogMode:!0,state:{page:c.PAGES.LOADING}},g=m.bind({}),g.args={dialogMode:!0,state:{page:c.PAGES.SELECTION,migrators:p,showImportAll:!1}},_=m.bind({}),_.args={dialogMode:!0,state:{page:c.PAGES.SELECTION,migrators:p,showImportAll:!0}},v=m.bind({}),v.args={dialogMode:!0,state:{page:c.PAGES.SELECTION,migrators:p,showImportAll:!0},forceShowImportAll:!1,hideOptionExpanderSubtitle:!1,hideSelectAll:!1,importButtonString:`Custom Button String`,checkboxMarginInline:`5px`,checkboxMarginBlock:`10px`,importButtonClass:`test-class`,optionExpanderTitleString:`Options`,selectionHeaderString:`Custom Header`,selectionSubheaderString:`Custom Subheader`,dataImportCompleteSuccessString:`Custom Data Import Success`,headerFontSize:`24px`,headerMarginBlock:`0 4px`,headerFontWeight:`590`,subheaderFontSize:`13px`,subheaderMarginBlock:`0 28px`,subheaderFontWeight:`400`},y=m.bind({}),y.args={dialogMode:!0,state:{page:c.PAGES.SELECTION,migrators:[{type:c.MIGRATOR_TYPES.BROWSER,key:`chromium`,displayName:`Chromium`,resourceTypes:[],profile:null,brandImage:`chrome://browser/content/migration/brands/chromium.png`,hasPermissions:!1,permissionsPath:`/home/user/snap/chromium/common/chromium`},{type:c.MIGRATOR_TYPES.BROWSER,key:`safari`,displayName:`Safari`,resourceTypes:[`HISTORY`,`PASSWORDS`,`BOOKMARKS`],profile:null,brandImage:`chrome://browser/content/migration/brands/safari.png`,hasPermissions:!1,permissionsPath:`/Users/user/Library/Safari`},{type:c.MIGRATOR_TYPES.BROWSER,key:`vivaldi`,displayName:`Vivaldi`,resourceTypes:[`HISTORY`],profile:{id:`Default`,name:`Default`},brandImage:`chrome://browser/content/migration/brands/vivaldi.png`,hasPermissions:!0},{type:c.MIGRATOR_TYPES.FILE,key:`file-password-csv`,displayName:`Passwords from CSV file`,brandImage:`chrome://branding/content/document.ico`,resourceTypes:[],hasPermissions:!0},{type:c.MIGRATOR_TYPES.FILE,key:`file-bookmarks`,displayName:`Bookmarks from file`,brandImage:`chrome://branding/content/document.ico`,resourceTypes:[],hasPermissions:!0}],showImportAll:!1}},b=m.bind({}),b.args={dialogMode:!0,state:{page:c.PAGES.PROGRESS,key:`chrome`,progress:{[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]:{value:c.PROGRESS_VALUE.LOADING},[c.DISPLAYED_RESOURCE_TYPES.PASSWORDS]:{value:c.PROGRESS_VALUE.LOADING},[c.DISPLAYED_RESOURCE_TYPES.HISTORY]:{value:c.PROGRESS_VALUE.LOADING},[c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]:{value:c.PROGRESS_VALUE.LOADING},[c.DISPLAYED_RESOURCE_TYPES.FORMDATA]:{value:c.PROGRESS_VALUE.LOADING},[c.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]:{value:c.PROGRESS_VALUE.LOADING}}}},x=m.bind({}),x.args={dialogMode:!0,state:{page:c.PAGES.PROGRESS,key:`chrome`,progress:{[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]:{value:c.PROGRESS_VALUE.LOADING},[c.DISPLAYED_RESOURCE_TYPES.PASSWORDS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 logins and passwords`},[c.DISPLAYED_RESOURCE_TYPES.HISTORY]:{value:c.PROGRESS_VALUE.LOADING},[c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`10 extensions`},[c.DISPLAYED_RESOURCE_TYPES.FORMDATA]:{value:c.PROGRESS_VALUE.SUCCESS,message:`Addresses, credit cards, form history`},[c.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`6 payment methods`}}}},S=m.bind({}),S.args={dialogMode:!0,state:{page:c.PAGES.PROGRESS,key:`chrome`,progress:{[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 bookmarks`},[c.DISPLAYED_RESOURCE_TYPES.PASSWORDS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 logins and passwords`},[c.DISPLAYED_RESOURCE_TYPES.HISTORY]:{value:c.PROGRESS_VALUE.SUCCESS,message:`From the last 180 days`},[c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`1 extension`},[c.DISPLAYED_RESOURCE_TYPES.FORMDATA]:{value:c.PROGRESS_VALUE.SUCCESS,message:`Addresses, credit cards, form history`},[c.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`6 payment methods`}}}},C=m.bind({}),C.args={dialogMode:!0,state:{page:c.PAGES.PROGRESS,key:`chrome`,progress:{[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 bookmarks`},[c.DISPLAYED_RESOURCE_TYPES.PASSWORDS]:{value:c.PROGRESS_VALUE.WARNING,message:`Something didn't work correctly.`},[c.DISPLAYED_RESOURCE_TYPES.HISTORY]:{value:c.PROGRESS_VALUE.SUCCESS,message:`From the last 180 days`},[c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`1 extension`},[c.DISPLAYED_RESOURCE_TYPES.FORMDATA]:{value:c.PROGRESS_VALUE.SUCCESS,message:`Addresses, credit cards, form history`},[c.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`6 payment methods`}}}},w=m.bind({}),w.args={dialogMode:!0,state:{page:c.PAGES.PROGRESS,key:`chrome`,progress:{[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 bookmarks`},[c.DISPLAYED_RESOURCE_TYPES.PASSWORDS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 logins and passwords`},[c.DISPLAYED_RESOURCE_TYPES.HISTORY]:{value:c.PROGRESS_VALUE.SUCCESS,message:`From the last 180 days`},[c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]:{value:c.PROGRESS_VALUE.INFO,message:`5 of 10 extensions`,linkText:`Learn how Firefox matches extensions`,linkURL:`https://support.mozilla.org/kb/import-data-another-browser#w_import-extensions-from-chrome/`},[c.DISPLAYED_RESOURCE_TYPES.FORMDATA]:{value:c.PROGRESS_VALUE.SUCCESS,message:`Addresses, credit cards, form history`},[c.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`6 payment methods`}}}},T=m.bind({}),T.args={dialogMode:!0,state:{page:c.PAGES.PROGRESS,key:`chrome`,progress:{[c.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 bookmarks`},[c.DISPLAYED_RESOURCE_TYPES.PASSWORDS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 logins and passwords`},[c.DISPLAYED_RESOURCE_TYPES.HISTORY]:{value:c.PROGRESS_VALUE.SUCCESS,message:`From the last 180 days`},[c.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]:{value:c.PROGRESS_VALUE.WARNING,message:`No matching extensions`,linkText:`Browse extensions for Firefox`,linkURL:`https://addons.mozilla.org/`},[c.DISPLAYED_RESOURCE_TYPES.FORMDATA]:{value:c.PROGRESS_VALUE.SUCCESS,message:`Addresses, credit cards, form history`},[c.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]:{value:c.PROGRESS_VALUE.SUCCESS,message:`6 payment methods`}}}},E=m.bind({}),E.args={dialogMode:!0,state:{page:c.PAGES.FILE_IMPORT_PROGRESS,title:`Importing passwords`,progress:{[c.DISPLAYED_FILE_RESOURCE_TYPES.PASSWORDS_FROM_FILE]:{value:c.PROGRESS_VALUE.LOADING}}}},D=m.bind({}),D.args={dialogMode:!0,state:{page:c.PAGES.FILE_IMPORT_PROGRESS,title:`Passwords imported successfully`,progress:{[c.DISPLAYED_FILE_RESOURCE_TYPES.PASSWORDS_NEW]:{value:c.PROGRESS_VALUE.SUCCESS,message:`2 added`},[c.DISPLAYED_FILE_RESOURCE_TYPES.PASSWORDS_UPDATED]:{value:c.PROGRESS_VALUE.SUCCESS,message:`14 updated`}}}},O=m.bind({}),O.args={dialogMode:!0,state:{page:c.PAGES.SAFARI_PERMISSION}},k=m.bind({}),k.args={dialogMode:!0,state:{page:c.PAGES.SAFARI_PASSWORD_PERMISSION_PRE_SEQUOIA}},A=m.bind({}),A.args={dialogMode:!0,state:{page:c.PAGES.SAFARI_PASSWORD_PERMISSION}},j=m.bind({}),j.args={dialogMode:!0,state:{page:c.PAGES.CHROME_WINDOWS_PASSWORD_PERMISSION}},M=m.bind({}),M.args={dialogMode:!0,state:{page:c.PAGES.NO_BROWSERS_FOUND,hasFileMigrators:!0}},N=m.bind({}),N.args={dialogMode:!0,state:{page:c.PAGES.SELECTION,migrators:p,showImportAll:!1,migratorKey:`file-password-csv`,fileImportErrorMessage:`Some file import error message`}}})))()}P();export{j as ChromeWindowsPasswordPermissions,v as CustomizedSelectionPage,T as ExtensionsImportFailure,w as ExtensionsPartialSuccess,N as FileImportError,E as FileImportProgress,D as FileImportSuccess,h as LoadingSkeleton,g as MainSelectorVariant1,_ as MainSelectorVariant2,M as NoBrowsersFound,y as NoPermissionMessage,x as PartialProgress,b as Progress,A as SafariPasswordPermissions,O as SafariPermissions,k as SafariPreSequoiaPasswordPermissions,S as Success,C as SuccessWithWarnings,f as default};