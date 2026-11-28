import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-DoVFImma.js";import{t as a}from"./moz-card-DQNK5Yz_.js";var o;function s(){return(s=e((()=>{o=``+new URL(`ai-chat-card-Taozcd5b.css`,import.meta.url).href})))()}var c,l;function u(){return(u=e((()=>{s(),t(),r(),a(),c=`chrome://global/skin/icons/defaultFavicon.svg`,l=class extends i{static properties={url:{type:String},title:{type:String},favicon:{type:String},thumbnail:{type:String},timestamp:{type:String},thumbnailError:{type:Boolean,state:!0}};get domain(){return URL.parse(this.url)?.hostname??``}willUpdate(e){e.has(`thumbnail`)&&(this.thumbnailError=!1)}renderImage(){return this.thumbnailError?this.renderFallback():this.thumbnail?n`<img
        part="thumbnail"
        decoding="async"
        loading="lazy"
        class="thumbnail"
        src=${this.thumbnail}
        role="presentation"
        @error=${()=>{this.thumbnailError=!0}}
      />`:this.favicon?n`<div part="thumbnail" class="thumbnail">
        <div>
          <img
            part="thumbnail"
            decoding="async"
            loading="lazy"
            src=${this.favicon}
            role="presentation"
            @error=${e=>{e.target.src=c}}
          />
        </div>
      </div>`:this.renderFallback()}renderFavicon(){return n`<img
      class="favicon"
      src=${this.favicon||c}
      role="presentation"
      @error=${e=>{e.target.src=c}}
    />`}render(){return n`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <a class="ai-chat-card" href=${this.url} target="_blank">
        <moz-card>
          ${this.renderImage()}
          <div class="description">
            <span part="title" class="title">${this.title}</span>
            <div class="meta">
              <div class="site">
                ${this.renderFavicon()}
                <span class="domain" title=${this.domain}>${this.domain}</span>
              </div>
              <span part="timestamp" class="timestamp">${this.timestamp}</span>
            </div>
          </div>
        </moz-card>
      </a>
    `}renderFallback(){return n`
      <svg
        class="ai-chat-card-thumbnail-fallback"
        preserveAspectRatio="none"
        viewBox="0 0 221 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect class="background" width="221" height="142" fill="context-fill" />
        <rect
          class="box"
          x="12"
          y="12"
          width="111"
          height="55"
          rx="4"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="22"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="32"
          width="78"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="42"
          width="60"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="52"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="85"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="95"
          width="78"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="105"
          width="60"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="115"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="98"
          y="75"
          width="111"
          height="55"
          rx="4"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
      </svg>
    `}},customElements.define(`ai-chat-card`,l)})))()}export{u as t};