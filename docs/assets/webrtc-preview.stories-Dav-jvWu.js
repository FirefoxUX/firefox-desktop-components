import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,i as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DP8hlEO7.js";import{t as o}from"./moz-card-CuvP1qjo.js";var s;function c(){return(c=e((()=>{s=new URL(`webrtc-preview-Du7fS3qf.css`,import.meta.url).href+``})))()}var l,u,d;function f(){return(f=e((()=>{c(),t(),i(),{XPCOMUtils:l}=ChromeUtils.importESModule(`resource://gre/modules/XPCOMUtils.sys.mjs`),u={},l.defineLazyPreferenceGetter(u,`testGumDelayMs`,`privacy.webrtc.preview.testGumDelayMs`,0),window.MozXULElement?.insertFTLIfNeeded(`browser/webrtc-preview.ftl`),d=class extends a{static properties={deviceId:String,mediaSource:String,showPreviewControlButtons:Boolean,_previewActive:{type:Boolean,state:!0},_loading:{type:Boolean,state:!0}};static queries={videoEl:`video`};#e=null;#t=null;constructor(){super(),this.showPreviewControlButtons=!1,this._previewActive=!1,this._loading=!1}disconnectedCallback(){super.disconnectedCallback(),this.stopPreview()}async startPreview({deviceId:e=null,mediaSource:t=null,showPreviewControlButtons:n=null}={}){if(!this.isConnected||!this.videoEl)throw Error(`Can not start preview: Not connected yet.`);if(e!=null&&(this.deviceId=e),t!=null&&(this.mediaSource=t),n!=null&&(this.showPreviewControlButtons=n),this.deviceId==null)throw Error(`Missing deviceId`);this.stopPreview(),this.#t=new AbortController;let{signal:r}=this.#t;this._loading=!0,this._previewActive=!0;let i={video:{mediaSource:this.mediaSource,deviceId:{exact:this.deviceId},frameRate:30,width:854,height:480}},a;try{a=await navigator.mediaDevices.getUserMedia(i),u.testGumDelayMs>0&&await new Promise(e=>setTimeout(e,u.testGumDelayMs))}catch(e){if(r.aborted){this.#n(`aborted`);return}if(this._loading=!1,e.name==`OverconstrainedError`&&e.constraint==`deviceId`){this.stopPreview(),this.#n(`error`);return}console.error(`error in preview: ${e.message} ${e.constraint}`),this.#n(`error`);return}r.aborted?(a.getTracks().forEach(e=>e.stop()),this.#n(`aborted`)):(this.videoEl.srcObject=a,this.#e=a,this.#n(`success`))}#n(e){u.testGumDelayMs>0&&this.dispatchEvent(new CustomEvent(`test-preview-complete`,{detail:{result:e}}))}stopPreview(){this.#t?.abort(),this.#t=null,this._loading=!1,this.#e?.getTracks().forEach(e=>e.stop()),this.#e=null,this.videoEl&&(this.videoEl.srcObject=null),this._previewActive=!1}render(){return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div id="preview-container">
        <video
          autoplay
          tabindex="-1"
          @play=${()=>this._loading=!1}
          class=${n({active:this._previewActive})}
        ></video>
        <moz-button
          id="show-preview-button"
          class="centered"
          data-l10n-id="webrtc-share-preview-button-show"
          @click=${()=>this.startPreview()}
          ?hidden=${this.deviceId==null||!this.showPreviewControlButtons||this._previewActive}
        ></moz-button>
        <img
          id="loading-indicator"
          class="centered"
          src="chrome://global/skin/icons/loading.svg"
          alt="Loading"
          ?hidden=${!this._loading}
        />
      </div>
      <moz-button
        id="stop-preview-button"
        data-l10n-id="webrtc-share-preview-button-hide"
        @click=${()=>this.stopPreview()}
        ?hidden=${!this.showPreviewControlButtons||!this._previewActive}
      ></moz-button>
    `}},customElements.define(`webrtc-preview`,d)})))()}var p,m,h,g;function _(){return(_=e((()=>{t(),o(),f(),window.MozXULElement.insertFTLIfNeeded(`browser/webrtc-preview.ftl`),p={title:`Domain-specific UI Widgets/WebRTC/Preview`,component:`webrtc-preview`,argTypes:{deviceId:{control:`text`},mediaSource:{control:`select`,options:[`camera`,`screen`,`window`,`browser`]},showPreviewControlButtons:{control:{type:`boolean`}}}},m=(e,t)=>{let n=t?.loaded?.deviceId||e.deviceId;return n?r`
    <div style="position: relative; width: 25rem;">
      <webrtc-preview
        .deviceId=${n}
        .mediaSource=${e.mediaSource}
        .showPreviewControlButtons=${e.showPreviewControlButtons}
      ></webrtc-preview>
    </div>
  `:r`
      <moz-card style="position: relative; width: 25rem;">
        <div style="padding: 1rem; text-align: center;">
          No device or no permission granted.
        </div>
      </moz-card>
    `},h=async()=>{try{let e=await navigator.mediaDevices.getUserMedia({video:!0,mediaSource:`camera`}),t=e.getVideoTracks()[0].getSettings().deviceId;return e.getTracks().forEach(e=>e.stop()),t||``}catch(e){return console.warn(`Could not get device:`,e),``}},g=m.bind({}),g.args={deviceId:``,mediaSource:`camera`,showPreviewControlButtons:!0},g.loaders=[async()=>({deviceId:await h()})],g.play=async({args:e,loaded:t})=>{e.deviceId=t.deviceId}})))()}_();export{g as Camera,p as default};