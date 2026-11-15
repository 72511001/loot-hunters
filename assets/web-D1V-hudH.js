import{W as Z}from"./main-DgejVmDO.js";import"./index.esm-CJ3YgVqa.js";import{k as ee,a as K,E as te,g as z,L as re,t as ne,u as m,n as F,p as oe,w as ie,_ as x,C as N,r as se}from"./index.esm2017-DwHqKNM9.js";import"./index-BXElg3NN.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Map,U={activated:!1,tokenObservers:[]},ae={initialized:!1,enabled:!1};function l(t){return C.get(t)||Object.assign({},U)}function ce(t,e){return C.set(t,e),C.get(t)}function b(){return ae}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="https://content-firebaseappcheck.googleapis.com/v1",le="exchangeRecaptchaV3Token",ue="exchangeDebugToken",O={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},de=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,r,n,o,i){if(this.operation=e,this.retryPolicy=r,this.getWaitDuration=n,this.lowerBound=o,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=o,o>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new m,this.pending.promise.catch(r=>{}),await fe(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new m,this.pending.promise.catch(r=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(r){this.retryPolicy(r)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const r=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),r}}}function fe(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},d=new te("appCheck","AppCheck",ge);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function _(t){if(!l(t).activated)throw d.create("use-before-activation",{appName:t.name})}function j(t){const e=Math.round(t/1e3),r=Math.floor(e/(3600*24)),n=Math.floor((e-r*3600*24)/3600),o=Math.floor((e-r*3600*24-n*3600)/60),i=e-r*3600*24-n*3600-o*60;let s="";return r&&(s+=T(r)+"d:"),n&&(s+=T(n)+"h:"),s+=T(o)+"m:"+T(i)+"s",s}function T(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R({url:t,body:e},r){const n={"Content-Type":"application/json"},o=r.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&(n["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(e),headers:n};let s;try{s=await fetch(t,i)}catch(h){throw d.create("fetch-network-error",{originalErrorMessage:h?.message})}if(s.status!==200)throw d.create("fetch-status-error",{httpStatus:s.status});let u;try{u=await s.json()}catch(h){throw d.create("fetch-parse-error",{originalErrorMessage:h?.message})}const c=u.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw d.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const a=Number(c[1])*1e3,M=Date.now();return{token:u.token,expireTimeMillis:M+a,issuedAtTimeMillis:M}}function pe(t,e){const{projectId:r,appId:n,apiKey:o}=t.options;return{url:`${W}/projects/${r}/apps/${n}:${le}?key=${o}`,body:{recaptcha_v3_token:e}}}function q(t,e){const{projectId:r,appId:n,apiKey:o}=t.options;return{url:`${W}/projects/${r}/apps/${n}:${ue}?key=${o}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-app-check-database",Te=1,k="firebase-app-check-store",G="debug-token";let E=null;function X(){return E||(E=new Promise((t,e)=>{try{const r=indexedDB.open(ke,Te);r.onsuccess=n=>{t(n.target.result)},r.onerror=n=>{var o;e(d.create("storage-open",{originalErrorMessage:(o=n.target.error)===null||o===void 0?void 0:o.message}))},r.onupgradeneeded=n=>{const o=n.target.result;switch(n.oldVersion){case 0:o.createObjectStore(k,{keyPath:"compositeKey"})}}}catch(r){e(d.create("storage-open",{originalErrorMessage:r?.message}))}}),E)}function Ee(t){return Y(J(t))}function me(t,e){return V(J(t),e)}function we(t){return V(G,t)}function be(){return Y(G)}async function V(t,e){const n=(await X()).transaction(k,"readwrite"),i=n.objectStore(k).put({compositeKey:t,value:e});return new Promise((s,u)=>{i.onsuccess=c=>{s()},n.onerror=c=>{var a;u(d.create("storage-set",{originalErrorMessage:(a=c.target.error)===null||a===void 0?void 0:a.message}))}})}async function Y(t){const r=(await X()).transaction(k,"readonly"),o=r.objectStore(k).get(t);return new Promise((i,s)=>{o.onsuccess=u=>{const c=u.target.result;i(c?c.value:void 0)},r.onerror=u=>{var c;s(d.create("storage-get",{originalErrorMessage:(c=u.target.error)===null||c===void 0?void 0:c.message}))}})}function J(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new re("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(t){if(F()){let e;try{e=await Ee(t)}catch(r){f.warn(`Failed to read token from IndexedDB. Error: ${r}`)}return e}}function v(t,e){return F()?me(t,e).catch(r=>{f.warn(`Failed to write token to IndexedDB. Error: ${r}`)}):Promise.resolve()}async function Ae(){let t;try{t=await be()}catch{}if(t)return t;{const e=crypto.randomUUID();return we(e).catch(r=>f.warn(`Failed to persist debug token to IndexedDB. Error: ${r}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return b().enabled}async function I(){const t=b();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Ce(){const t=ne(),e=b();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const r=new m;e.token=r,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?r.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):r.resolve(Ae())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={error:"UNKNOWN_ERROR"};function Re(t){return ie.encodeString(JSON.stringify(t),!1)}async function w(t,e=!1,r=!1){const n=t.app;_(n);const o=l(n);let i=o.token,s;if(i&&!p(i)&&(o.token=void 0,i=void 0),!i){const a=await o.cachedTokenPromise;a&&(p(a)?i=a:await v(n,void 0))}if(!e&&i&&p(i))return{token:i.token};let u=!1;if(y())try{o.exchangeTokenPromise||(o.exchangeTokenPromise=R(q(n,await I()),t.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),u=!0);const a=await o.exchangeTokenPromise;return await v(n,a),o.token=a,{token:a.token}}catch(a){return a.code==="appCheck/throttled"||a.code==="appCheck/initial-throttle"?f.warn(a.message):r&&f.error(a),A(a)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),u=!0),i=await l(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"||a.code==="appCheck/initial-throttle"?f.warn(a.message):r&&f.error(a),s=a}let c;return i?s?p(i)?c={token:i.token,internalError:s}:c=A(s):(c={token:i.token},o.token=i,await v(n,i)):c=A(s),u&&Q(n,c),c}async function ye(t){const e=t.app;_(e);const{provider:r}=l(e);if(y()){const n=await I(),{token:o}=await R(q(e,n),t.heartbeatServiceProvider);return{token:o}}else{const{token:n}=await r.getToken();return{token:n}}}function P(t,e,r,n){const{app:o}=t,i=l(o),s={next:r,error:n,type:e};if(i.tokenObservers=[...i.tokenObservers,s],i.token&&p(i.token)){const u=i.token;Promise.resolve().then(()=>{r({token:u.token}),B(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>B(t))}function D(t,e){const r=l(t),n=r.tokenObservers.filter(o=>o.next!==e);n.length===0&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function B(t){const{app:e}=t,r=l(e);let n=r.tokenRefresher;n||(n=Ie(t),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function Ie(t){const{app:e}=t;return new he(async()=>{const r=l(e);let n;if(r.token?n=await w(t,!0):n=await w(t),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const r=l(e);if(r.token){let n=r.token.issuedAtTimeMillis+(r.token.expireTimeMillis-r.token.issuedAtTimeMillis)*.5+3e5;const o=r.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,o),Math.max(0,n-Date.now())}else return 0},O.RETRIAL_MIN_WAIT,O.RETRIAL_MAX_WAIT)}function Q(t,e){const r=l(t).tokenObservers;for(const n of r)try{n.type==="EXTERNAL"&&e.error!=null?n.error(e.error):n.next(e)}catch{}}function p(t){return t.expireTimeMillis-Date.now()>0}function A(t){return{token:Re(_e),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,r){this.app=e,this.heartbeatServiceProvider=r}_delete(){const{tokenObservers:e}=l(this.app);for(const r of e)D(this.app,r.next);return Promise.resolve()}}function De(t,e){return new Pe(t,e)}function Se(t){return{getToken:e=>w(t,e),getLimitedUseToken:()=>ye(t),addTokenListener:e=>P(t,"INTERNAL",e),removeTokenListener:e=>D(t.app,e)}}const Me="@firebase/app-check",xe="0.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="https://www.google.com/recaptcha/api.js";function Oe(t,e){const r=new m,n=l(t);n.reCAPTCHAState={initialized:r};const o=$e(t),i=$(!1);return i?L(t,e,i,o,r):He(()=>{const s=$(!1);if(!s)throw new Error("no recaptcha");L(t,e,s,o,r)}),r.promise}function L(t,e,r,n,o){r.ready(()=>{Le(t,e,r,n),o.resolve(r)})}function $e(t){const e=`fire_app_check_${t.name}`,r=document.createElement("div");return r.id=e,r.style.display="none",document.body.appendChild(r),e}async function Be(t){_(t);const r=await l(t).reCAPTCHAState.initialized.promise;return new Promise((n,o)=>{const i=l(t).reCAPTCHAState;r.ready(()=>{n(r.execute(i.widgetId,{action:"fire_app_check"}))})})}function Le(t,e,r,n){const o=r.render(n,{sitekey:e,size:"invisible",callback:()=>{l(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{l(t).reCAPTCHAState.succeeded=!1}}),i=l(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:o})}function He(t){const e=document.createElement("script");e.src=Ne,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,r,n;ze(this._throttleData);const o=await Be(this._app).catch(s=>{throw d.create("recaptcha-error")});if(!(!((e=l(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw d.create("recaptcha-error");let i;try{i=await R(pe(this._app,o),this._heartbeatServiceProvider)}catch(s){throw!((r=s.code)===null||r===void 0)&&r.includes("fetch-status-error")?(this._throttleData=Ke(Number((n=s.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),d.create("initial-throttle",{time:j(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):s}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=K(e,"heartbeat"),Oe(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof S?this._siteKey===e._siteKey:!1}}function Ke(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+de,httpStatus:t};{const r=e?e.backoffCount:0,n=oe(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:t}}}function ze(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw d.create("throttled",{time:j(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t=z(),e){t=ee(t);const r=K(t,"app-check");if(b().initialized||Ce(),y()&&I().then(o=>console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),r.isInitialized()){const o=r.getImmediate(),i=r.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return o;throw d.create("already-initialized",{appName:t.name})}const n=r.initialize({options:e});return Ue(t,e.provider,e.isTokenAutoRefreshEnabled),l(t).isTokenAutoRefreshEnabled&&P(n,"INTERNAL",()=>{}),n}function Ue(t,e,r=!1){const n=ce(t,Object.assign({},U));n.activated=!0,n.provider=e,n.cachedTokenPromise=ve(t).then(o=>(o&&p(o)&&(n.token=o,Q(t,{token:o.token})),o)),n.isTokenAutoRefreshEnabled=r&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&r&&f.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(t)}function We(t,e){const r=t.app,n=l(r);n.tokenRefresher&&(e===!0?n.tokenRefresher.start():n.tokenRefresher.stop()),n.isTokenAutoRefreshEnabled=e}async function je(t,e){const r=await w(t,e);if(r.error)throw r.error;if(r.internalError)throw r.internalError;return{token:r.token}}function qe(t,e,r,n){let o=()=>{},i=()=>{};return e.next!=null?o=e.next.bind(e):o=e,e.error!=null&&(i=e.error.bind(e)),P(t,"EXTERNAL",o,i),()=>D(t.app,o)}const Ge="app-check",H="app-check-internal";function Xe(){x(new N(Ge,t=>{const e=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat");return De(e,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider(H).initialize()})),x(new N(H,t=>{const e=t.getProvider("app-check").getImmediate();return Se(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),se(Me,xe)}Xe();class g extends Z{get appCheckInstance(){return this._appCheckInstance}set appCheckInstance(e){this._appCheckInstance=e,e?this.registerOnTokenChangedListener():this.unregisterOnTokenChangedListener()}async getToken(e){if(!this.appCheckInstance)throw new Error(g.errorNotInitialized);return{token:(await je(this.appCheckInstance,e?.forceRefresh)).token}}async initialize(e){if(!e||!e.siteKey)throw new Error(g.errorSiteKeyMissing);e.debug&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=!0);const r=z();this.appCheckInstance=Fe(r,{provider:new S(e.siteKey),isTokenAutoRefreshEnabled:e.isTokenAutoRefreshEnabled})}async setTokenAutoRefreshEnabled(e){if(!this.appCheckInstance)throw new Error(g.errorNotInitialized);We(this.appCheckInstance,e.enabled)}registerOnTokenChangedListener(){this.appCheckInstance&&(this.onTokenChangedListenerUnsubscribe=qe(this.appCheckInstance,e=>this.handleTokenChanged(e.token)))}unregisterOnTokenChangedListener(){this.onTokenChangedListenerUnsubscribe&&this.onTokenChangedListenerUnsubscribe()}handleTokenChanged(e){const r={token:e};this.notifyListeners(g.tokenChangedEvent,r)}}g.tokenChangedEvent="tokenChanged";g.errorNotInitialized="AppCheck has not been initialized.";g.errorSiteKeyMissing="siteKey must be provided.";export{g as FirebaseAppCheckWeb};
