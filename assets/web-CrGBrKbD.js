import{W as k}from"./main-BWQd_lo_.js";import{k as m,a as x,l as z,E as B,g as j,F as P,_ as $,C as K,r as M,n as V,L as W,s as G,S as H,p as q}from"./index.esm2017-DwHqKNM9.js";import"./index.esm2017-DRxH6w4D.js";import"./index-DC3UKVmW.js";const F="@firebase/remote-config",I="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Y{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */const R="remote-config",A=100;/**
 * @license
 * Copyright 2019 Google LLC
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
 */const J={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported."},g=new B("remoteconfig","Remote Config",J);function X(i,t){return i instanceof P&&i.code.indexOf(t)!==-1}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Q=!1,Z="",L=0,tt=["1","true","t","yes","y","on"];class T{constructor(t,e=Z){this._source=t,this._value=e}asString(){return this._value}asBoolean(){return this._source==="static"?Q:tt.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return L;let t=Number(this._value);return isNaN(t)&&(t=L),t}getSource(){return this._source}}/**
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
 */function _(i=j(),t={}){var e,s;i=m(i);const a=x(i,R);if(a.isInitialized()){const c=a.getOptions();if(z(c,t))return a.getImmediate();throw g.create("already-initialized")}a.initialize({options:t});const n=a.getImmediate();return t.initialFetchResponse&&(n._initializePromise=Promise.all([n._storage.setLastSuccessfulFetchResponse(t.initialFetchResponse),n._storage.setActiveConfigEtag(((e=t.initialFetchResponse)===null||e===void 0?void 0:e.eTag)||""),n._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),n._storageCache.setLastFetchStatus("success"),n._storageCache.setActiveConfig(((s=t.initialFetchResponse)===null||s===void 0?void 0:s.config)||{})]).then(),n._isInitializationComplete=!0),n}async function O(i){const t=m(i),[e,s]=await Promise.all([t._storage.getLastSuccessfulFetchResponse(),t._storage.getActiveConfigEtag()]);return!e||!e.config||!e.eTag||e.eTag===s?!1:(await Promise.all([t._storageCache.setActiveConfig(e.config),t._storage.setActiveConfigEtag(e.eTag)]),!0)}function et(i){const t=m(i);return t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then(()=>{t._isInitializationComplete=!0})),t._initializePromise}async function D(i){const t=m(i),e=new Y;setTimeout(async()=>{e.abort()},t.settings.fetchTimeoutMillis);const s=t._storageCache.getCustomSignals();s&&t._logger.debug(`Fetching config with custom signals: ${JSON.stringify(s)}`);try{await t._client.fetch({cacheMaxAgeMillis:t.settings.minimumFetchIntervalMillis,signal:e,customSignals:s}),await t._storageCache.setLastFetchStatus("success")}catch(a){const n=X(a,"fetch-throttle")?"throttle":"failure";throw await t._storageCache.setLastFetchStatus(n),a}}function st(i,t){return b(m(i),t).asBoolean()}function it(i,t){return b(m(i),t).asNumber()}function at(i,t){return b(m(i),t).asString()}function b(i,t){const e=m(i);e._isInitializationComplete||e._logger.debug(`A value was requested for key "${t}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const s=e._storageCache.getActiveConfig();return s&&s[t]!==void 0?new T("remote",s[t]):e.defaultConfig&&e.defaultConfig[t]!==void 0?new T("default",String(e.defaultConfig[t])):(e._logger.debug(`Returning static value for key "${t}". Define a default or remote value if this is unintentional.`),new T("static"))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class nt{constructor(t,e,s,a){this.client=t,this.storage=e,this.storageCache=s,this.logger=a}isCachedDataFresh(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const s=Date.now()-e,a=s<=t;return this.logger.debug(`Config fetch cache check. Cache age millis: ${s}. Cache max age millis (minimumFetchIntervalMillis setting): ${t}. Is cache hit: ${a}.`),a}async fetch(t){const[e,s]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(s&&this.isCachedDataFresh(t.cacheMaxAgeMillis,e))return s;t.eTag=s&&s.eTag;const a=await this.client.fetch(t),n=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return a.status===200&&n.push(this.storage.setLastSuccessfulFetchResponse(a)),await Promise.all(n),a}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function ot(i=navigator){return i.languages&&i.languages[0]||i.language}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class rt{constructor(t,e,s,a,n,c){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=s,this.projectId=a,this.apiKey=n,this.appId=c}async fetch(t){const[e,s]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),n=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,c={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},r={sdk_version:this.sdkVersion,app_instance_id:e,app_instance_id_token:s,app_id:this.appId,language_code:ot(),custom_signals:t.customSignals},o={method:"POST",headers:c,body:JSON.stringify(r)},l=fetch(n,o),w=new Promise((u,p)=>{t.signal.addEventListener(()=>{const y=new Error("The operation was aborted.");y.name="AbortError",p(y)})});let h;try{await Promise.race([l,w]),h=await l}catch(u){let p="fetch-client-network";throw u?.name==="AbortError"&&(p="fetch-timeout"),g.create(p,{originalErrorMessage:u?.message})}let f=h.status;const E=h.headers.get("ETag")||void 0;let C,d;if(h.status===200){let u;try{u=await h.json()}catch(p){throw g.create("fetch-client-parse",{originalErrorMessage:p?.message})}C=u.entries,d=u.state}if(d==="INSTANCE_STATE_UNSPECIFIED"?f=500:d==="NO_CHANGE"?f=304:(d==="NO_TEMPLATE"||d==="EMPTY_CONFIG")&&(C={}),f!==304&&f!==200)throw g.create("fetch-status",{httpStatus:f});return{status:f,eTag:E,config:C}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function ct(i,t){return new Promise((e,s)=>{const a=Math.max(t-Date.now(),0),n=setTimeout(e,a);i.addEventListener(()=>{clearTimeout(n),s(g.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function lt(i){if(!(i instanceof P)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class gt{constructor(t,e){this.client=t,this.storage=e}async fetch(t){const e=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(t,e)}async attemptFetch(t,{throttleEndTimeMillis:e,backoffCount:s}){await ct(t.signal,e);try{const a=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),a}catch(a){if(!lt(a))throw a;const n={throttleEndTimeMillis:Date.now()+q(s),backoffCount:s+1};return await this.storage.setThrottleMetadata(n),this.attemptFetch(t,n)}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ut=60*1e3,ht=12*60*60*1e3;class mt{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(t,e,s,a,n){this.app=t,this._client=e,this._storageCache=s,this._storage=a,this._logger=n,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:ut,minimumFetchIntervalMillis:ht},this.defaultConfig={}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function v(i,t){const e=i.target.error||void 0;return g.create(t,{originalErrorMessage:e&&e?.message})}const S="app_namespace_store",ft="firebase_remote_config",dt=1;function pt(){return new Promise((i,t)=>{try{const e=indexedDB.open(ft,dt);e.onerror=s=>{t(v(s,"storage-open"))},e.onsuccess=s=>{i(s.target.result)},e.onupgradeneeded=s=>{const a=s.target.result;switch(s.oldVersion){case 0:a.createObjectStore(S,{keyPath:"compositeKey"})}}}catch(e){t(g.create("storage-open",{originalErrorMessage:e?.message}))}})}class N{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(t){return this.set("last_fetch_status",t)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(t){return this.set("last_successful_fetch_timestamp_millis",t)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(t){return this.set("last_successful_fetch_response",t)}getActiveConfig(){return this.get("active_config")}setActiveConfig(t){return this.set("active_config",t)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(t){return this.set("active_config_etag",t)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(t){return this.set("throttle_metadata",t)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}}class _t extends N{constructor(t,e,s,a=pt()){super(),this.appId=t,this.appName=e,this.namespace=s,this.openDbPromise=a}async setCustomSignals(t){const s=(await this.openDbPromise).transaction([S],"readwrite"),a=await this.getWithTransaction("custom_signals",s),n=U(t,a||{});return await this.setWithTransaction("custom_signals",n,s),n}async getWithTransaction(t,e){return new Promise((s,a)=>{const n=e.objectStore(S),c=this.createCompositeKey(t);try{const r=n.get(c);r.onerror=o=>{a(v(o,"storage-get"))},r.onsuccess=o=>{const l=o.target.result;s(l?l.value:void 0)}}catch(r){a(g.create("storage-get",{originalErrorMessage:r?.message}))}})}async setWithTransaction(t,e,s){return new Promise((a,n)=>{const c=s.objectStore(S),r=this.createCompositeKey(t);try{const o=c.put({compositeKey:r,value:e});o.onerror=l=>{n(v(l,"storage-set"))},o.onsuccess=()=>{a()}}catch(o){n(g.create("storage-set",{originalErrorMessage:o?.message}))}})}async get(t){const s=(await this.openDbPromise).transaction([S],"readonly");return this.getWithTransaction(t,s)}async set(t,e){const a=(await this.openDbPromise).transaction([S],"readwrite");return this.setWithTransaction(t,e,a)}async delete(t){const e=await this.openDbPromise;return new Promise((s,a)=>{const c=e.transaction([S],"readwrite").objectStore(S),r=this.createCompositeKey(t);try{const o=c.delete(r);o.onerror=l=>{a(v(l,"storage-delete"))},o.onsuccess=()=>{s()}}catch(o){a(g.create("storage-delete",{originalErrorMessage:o?.message}))}})}createCompositeKey(t){return[this.appId,this.appName,this.namespace,t].join()}}class St extends N{constructor(){super(...arguments),this.storage={}}async get(t){return Promise.resolve(this.storage[t])}async set(t,e){return this.storage[t]=e,Promise.resolve(void 0)}async delete(t){return this.storage[t]=void 0,Promise.resolve()}async setCustomSignals(t){const e=this.storage.custom_signals||{};return this.storage.custom_signals=U(t,e),Promise.resolve(this.storage.custom_signals)}}function U(i,t){const e=Object.assign(Object.assign({},t),i),s=Object.fromEntries(Object.entries(e).filter(([a,n])=>n!==null).map(([a,n])=>typeof n=="number"?[a,n.toString()]:[a,n]));if(Object.keys(s).length>A)throw g.create("custom-signal-max-allowed-signals",{maxSignals:A});return s}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ct{constructor(t){this.storage=t}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),s=this.storage.getActiveConfig(),a=this.storage.getCustomSignals(),n=await t;n&&(this.lastFetchStatus=n);const c=await e;c&&(this.lastSuccessfulFetchTimestampMillis=c);const r=await s;r&&(this.activeConfig=r);const o=await a;o&&(this.customSignals=o)}setLastFetchStatus(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)}setLastSuccessfulFetchTimestampMillis(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)}setActiveConfig(t){return this.activeConfig=t,this.storage.setActiveConfig(t)}async setCustomSignals(t){this.customSignals=await this.storage.setCustomSignals(t)}}/**
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
 */function wt(){$(new K(R,i,"PUBLIC").setMultipleInstances(!0)),M(F,I),M(F,I,"esm2017");function i(t,{options:e}){const s=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate(),{projectId:n,apiKey:c,appId:r}=s.options;if(!n)throw g.create("registration-project-id");if(!c)throw g.create("registration-api-key");if(!r)throw g.create("registration-app-id");const o=e?.templateId||"firebase",l=V()?new _t(r,s.name,o):new St,w=new Ct(l),h=new W(F);h.logLevel=G.ERROR;const f=new rt(a,H,o,n,c,r),E=new gt(f,l),C=new nt(E,l,w,h),d=new mt(s,C,w,l,h);return et(d),d}}/**
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
 */async function vt(i){return i=m(i),await D(i),O(i)}wt();class yt extends k{async activate(){const t=_();await O(t)}async fetchAndActivate(){const t=_();await vt(t)}async fetchConfig(){const t=_();await D(t)}async getBoolean(t){const e=_();return{value:st(e,t.key)}}async getNumber(t){const e=_();return{value:it(e,t.key)}}async getString(t){const e=_();return{value:at(e,t.key)}}async setMinimumFetchInterval(t){const e=_();e.settings.minimumFetchIntervalMillis=t.minimumFetchIntervalInSeconds*1e3}async setSettings(t){const e=_();t.fetchTimeoutInSeconds!==void 0&&(e.settings.fetchTimeoutMillis=t.fetchTimeoutInSeconds*1e3),t.minimumFetchIntervalInSeconds!==void 0&&(e.settings.minimumFetchIntervalMillis=t.minimumFetchIntervalInSeconds*1e3)}async addConfigUpdateListener(t){this.throwUnimplementedError()}async removeConfigUpdateListener(t){this.throwUnimplementedError()}throwUnimplementedError(){throw this.unimplemented("Not implemented on web.")}}export{yt as FirebaseRemoteConfigWeb};
