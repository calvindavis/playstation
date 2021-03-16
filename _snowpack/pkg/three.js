const To="125",Yc=0,Ao=1,Zc=2,Lo=1,Jc=2,pi=3,Qi=0,Yt=1,Ki=2,Co=1,mi=0,gi=1,Ro=2,Po=3,Io=4,Qc=5,Ln=100,Kc=101,$c=102,Do=103,Oo=104,tl=200,el=201,nl=202,il=203,No=204,Fo=205,rl=206,sl=207,ol=208,al=209,cl=210,ll=0,hl=1,ul=2,Kr=3,fl=4,dl=5,pl=6,ml=7,$i=0,gl=1,yl=2,yi=0,vl=1,xl=2,_l=3,bl=4,Ml=5,Bo=300,$r=301,ts=302,zo=303,Uo=304,es=306,ns=307,is=1e3,le=1001,rs=1002,ie=1003,Ho=1004,Go=1005,te=1006,wl=1007,tr=1008,ss=1009,Sl=1010,El=1011,er=1012,Tl=1013,nr=1014,Ze=1015,ir=1016,Al=1017,Ll=1018,Cl=1019,vi=1020,Rl=1021,dn=1022,_e=1023,Pl=1024,Il=1025,Cn=1026,xi=1027,Dl=1028,Ol=1029,Nl=1030,Fl=1031,Bl=1032,zl=1033,ko=33776,Vo=33777,Wo=33778,jo=33779,qo=35840,Xo=35841,Yo=35842,Zo=35843,Ul=36196,Jo=37492,Qo=37496,Hl=37808,Gl=37809,kl=37810,Vl=37811,Wl=37812,jl=37813,ql=37814,Xl=37815,Yl=37816,Zl=37817,Jl=37818,Ql=37819,Kl=37820,$l=37821,th=36492,eh=37840,nh=37841,ih=37842,rh=37843,sh=37844,oh=37845,ah=37846,ch=37847,lh=37848,hh=37849,uh=37850,fh=37851,dh=37852,ph=37853,mh=2200,gh=2201,yh=2202,rr=2300,sr=2301,os=2302,Rn=2400,Pn=2401,or=2402,as=2500,Ko=2501,vh=0,_i=3e3,$o=3001,xh=3007,_h=3002,bh=3003,Mh=3004,wh=3005,Sh=3006,Eh=3200,Th=3201,In=0,Ah=1,cs=7680,Lh=519,ar=35044,bi=35048,ta="300 es";function Je(){}Object.assign(Je.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e)}}});const Kt=[];for(let e=0;e<256;e++)Kt[e]=(e<16?"0":"")+e.toString(16);let cr=1234567;const mt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[e&255]+Kt[e>>8&255]+Kt[e>>16&255]+Kt[e>>24&255]+"-"+Kt[t&255]+Kt[t>>8&255]+"-"+Kt[t>>16&15|64]+Kt[t>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},damp:function(e,t,n,i){return mt.lerp(e,t,1-Math.exp(-n*i))},pingpong:function(e,t=1){return t-Math.abs(mt.euclideanModulo(e,t*2)-t)},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(cr=e%2147483647),cr=cr*16807%2147483647,(cr-1)/2147483646},degToRad:function(e){return e*mt.DEG2RAD},radToDeg:function(e){return e*mt.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)==0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),m=o((i-t)/2);switch(r){case"XYX":e.set(a*u,c*h,c*f,a*l);break;case"YZY":e.set(c*f,a*u,c*h,a*l);break;case"ZXZ":e.set(c*h,c*f,a*u,a*l);break;case"XZX":e.set(a*u,c*m,c*d,a*l);break;case"YXY":e.set(c*d,a*u,c*m,a*l);break;case"ZYZ":e.set(c*m,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class W{constructor(t=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class me{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],v=r[0],y=r[3],g=r[6],p=r[1],S=r[4],T=r[7],E=r[2],b=r[5],L=r[8];return s[0]=o*v+a*p+c*E,s[3]=o*y+a*S+c*b,s[6]=o*g+a*T+c*L,s[1]=l*v+u*p+h*E,s[4]=l*y+u*S+h*b,s[7]=l*g+u*T+h*L,s[2]=f*v+d*p+m*E,s[5]=f*y+d*S+m*b,s[8]=f*g+d*T+m*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,m=n*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=h*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=f*v,t[4]=(u*n-r*c)*v,t[5]=(r*s-a*n)*v,t[6]=d*v,t[7]=(i*c-l*n)*v,t[8]=(o*n-i*s)*v,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).copy(this).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(t){const n=Math.cos(t),i=Math.sin(t),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*u,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*u,this}translate(t,n){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}}let Dn;const On={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dn===void 0&&(Dn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Dn.width=e.width,Dn.height=e.height;const n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dn}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}};let Ch=0;function Ft(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=le,i=le,r=te,s=tr,o=_e,a=ss,c=1,l=_i){Object.defineProperty(this,"id",{value:Ch++}),this.uuid=mt.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Ft.DEFAULT_IMAGE=void 0,Ft.DEFAULT_MAPPING=Bo,Ft.prototype=Object.assign(Object.create(Je.prototype),{constructor:Ft,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=mt.generateUUID()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(ls(i[s].image)):r.push(ls(i[s]))}else r=ls(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case le:e.x=e.x<0?0:1;break;case rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case le:e.y=e.y<0?0:1;break;case rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}}),Object.defineProperty(Ft.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function ls(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?On.getDataURL(e):e.data?{data:Array.prototype.slice.call(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Dt{constructor(t=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const o=.01,a=.1,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],v=c[2],y=c[6],g=c[10];if(Math.abs(u-f)<o&&Math.abs(h-v)<o&&Math.abs(m-y)<o){if(Math.abs(u+f)<a&&Math.abs(h+v)<a&&Math.abs(m+y)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,T=(d+1)/2,E=(g+1)/2,b=(u+f)/4,L=(h+v)/4,H=(m+y)/4;return S>T&&S>E?S<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=L/i):T>E?T<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=b/r,s=H/r):E<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=L/s,r=H/s),this.set(i,r,s,n),this}let p=Math.sqrt((y-m)*(y-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(p)<.001&&(p=1),this.x=(y-m)/p,this.y=(h-v)/p,this.z=(f-u)/p,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}class Mi extends Je{constructor(t,n,i){super();Object.defineProperty(this,"isWebGLRenderTarget",{value:!0}),this.width=t,this.height=n,this.scissor=new Dt(0,0,t,n),this.scissorTest=!1,this.viewport=new Dt(0,0,t,n),i=i||{},this.texture=new Ft(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=n,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:te,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setSize(t,n){(this.width!==t||this.height!==n)&&(this.width=t,this.height=n,this.texture.image.width=t,this.texture.image.height=n,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class he{constructor(t=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=n,this._z=i,this._w=r}static slerp(t,n,i,r){return i.copy(t).slerp(n,r)}static slerpFlat(t,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(h!==v||c!==f||l!==d||u!==m){let y=1-a;const g=c*f+l*d+u*m+h*v,p=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const E=Math.sqrt(S),b=Math.atan2(E,g*p);y=Math.sin(y*b)/E,a=Math.sin(a*b)/E}const T=a*p;if(c=c*y+f*T,l=l*y+d*T,u=u*y+m*T,h=h*y+v*T,y===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[n]=c,t[n+1]=l,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[n]=a*m+u*h+c*d-l*f,t[n+1]=c*m+u*f+l*h-a*d,t[n+2]=l*m+u*d+a*f-c*h,t[n+3]=u*m-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){const i=1e-6;let r=t.dot(n)+1;return r<i?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(mt.clamp(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,n)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}class w{constructor(t=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,n)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ea.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ea.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*n+o*r-a*i,u=c*i+a*n-s*r,h=c*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,n)):this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hs.copy(this).projectOnVector(t),this.sub(hs)}reflect(t){return this.sub(hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(mt.clamp(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const hs=new w,ea=new he;class pn{constructor(t,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=t!==void 0?t:new w(Infinity,Infinity,Infinity),this.max=n!==void 0?n:new w(-Infinity,-Infinity,-Infinity)}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<n&&(n=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(t){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<n&&(n=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new w),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new w),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const n=t.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox),fs.applyMatrix4(t.matrixWorld),this.union(fs));const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new w),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),lr.subVectors(this.max,Si),Nn.subVectors(t.a,Si),Fn.subVectors(t.b,Si),Bn.subVectors(t.c,Si),Qe.subVectors(Fn,Nn),Ke.subVectors(Bn,Fn),mn.subVectors(Nn,Bn);let n=[0,-Qe.z,Qe.y,0,-Ke.z,Ke.y,0,-mn.z,mn.y,Qe.z,0,-Qe.x,Ke.z,0,-Ke.x,mn.z,0,-mn.x,-Qe.y,Qe.x,0,-Ke.y,Ke.x,0,-mn.y,mn.x,0];return!us(n,Nn,Fn,Bn,lr)||(n=[1,0,0,0,1,0,0,0,1],!us(n,Nn,Fn,Bn,lr))?!1:(hr.crossVectors(Qe,Ke),n=[hr.x,hr.y,hr.z],us(n,Nn,Fn,Bn,lr))}clampPoint(t,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new w),n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return wi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function us(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){gn.fromArray(e,s);const a=r.x*Math.abs(gn.x)+r.y*Math.abs(gn.y)+r.z*Math.abs(gn.z),c=t.dot(gn),l=n.dot(gn),u=i.dot(gn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ze=[new w,new w,new w,new w,new w,new w,new w,new w],wi=new w,fs=new pn,Nn=new w,Fn=new w,Bn=new w,Qe=new w,Ke=new w,mn=new w,Si=new w,lr=new w,hr=new w,gn=new w,Rh=new pn;class yn{constructor(t,n){this.center=t!==void 0?t:new w,this.radius=n!==void 0?n:-1}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Rh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new w),n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new pn),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}}const Ue=new w,ds=new w,ur=new w,$e=new w,ps=new w,fr=new w,ms=new w;class Ei{constructor(t,n){this.origin=t!==void 0?t:new w,this.direction=n!==void 0?n:new w(0,0,-1)}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new w),n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ue)),this}closestPointToPoint(t,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new w),n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ue.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ue.copy(this.direction).multiplyScalar(n).add(this.origin),Ue.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){ds.copy(t).add(n).multiplyScalar(.5),ur.copy(n).sub(t).normalize(),$e.copy(this.origin).sub(ds);const s=t.distanceTo(n)*.5,o=-this.direction.dot(ur),a=$e.dot(this.direction),c=-$e.dot(ur),l=$e.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ur).multiplyScalar(f).add(ds),d}intersectSphere(t,n){Ue.subVectors(t.center,this.origin);const i=Ue.dot(this.direction),r=Ue.dot(Ue)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Ue)!==null}intersectTriangle(t,n,i,r,s){ps.subVectors(n,t),fr.subVectors(i,t),ms.crossVectors(ps,fr);let o=this.direction.dot(ms),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$e.subVectors(this.origin,t);const c=a*this.direction.dot(fr.crossVectors($e,fr));if(c<0)return null;const l=a*this.direction.dot(ps.cross($e));if(l<0||c+l>o)return null;const u=-a*$e.dot(ms);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}class Lt{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,n,i,r,s,o,a,c,l,u,h,f,d,m,v,y){const g=this.elements;return g[0]=t,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=v,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/zn.setFromMatrixColumn(t,0).length(),s=1/zn.setFromMatrixColumn(t,1).length(),o=1/zn.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,m=a*u,v=a*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=d+m*l,n[5]=f-v*l,n[9]=-a*c,n[2]=v-f*l,n[6]=m+d*l,n[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,m=l*u,v=l*h;n[0]=f+v*a,n[4]=m*a-d,n[8]=o*l,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=d*a-m,n[6]=v+f*a,n[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,m=l*u,v=l*h;n[0]=f-v*a,n[4]=-o*h,n[8]=m+d*a,n[1]=d+m*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,m=a*u,v=a*h;n[0]=c*u,n[4]=m*l-d,n[8]=f*l+v,n[1]=c*h,n[5]=v*l+f,n[9]=d*l-m,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,m=a*c,v=a*l;n[0]=c*u,n[4]=v-f*h,n[8]=m*h+d,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=d*h+m,n[10]=f-v*h}else if(t.order==="XZY"){const f=o*c,d=o*l,m=a*c,v=a*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=f*h+v,n[5]=o*u,n[9]=d*h-m,n[2]=m*h-d,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Ih)}lookAt(t,n,i){const r=this.elements;return ue.subVectors(t,n),ue.lengthSq()===0&&(ue.z=1),ue.normalize(),tn.crossVectors(i,ue),tn.lengthSq()===0&&(Math.abs(i.z)===1?ue.x+=1e-4:ue.z+=1e-4,ue.normalize(),tn.crossVectors(i,ue)),tn.normalize(),dr.crossVectors(ue,tn),r[0]=tn.x,r[4]=dr.x,r[8]=ue.x,r[1]=tn.y,r[5]=dr.y,r[9]=ue.y,r[2]=tn.z,r[6]=dr.z,r[10]=ue.z,this}multiply(t,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,n)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],v=i[6],y=i[10],g=i[14],p=i[3],S=i[7],T=i[11],E=i[15],b=r[0],L=r[4],H=r[8],P=r[12],I=r[1],O=r[5],z=r[9],N=r[13],C=r[2],R=r[6],B=r[10],V=r[14],Y=r[3],$=r[7],rt=r[11],it=r[15];return s[0]=o*b+a*I+c*C+l*Y,s[4]=o*L+a*O+c*R+l*$,s[8]=o*H+a*z+c*B+l*rt,s[12]=o*P+a*N+c*V+l*it,s[1]=u*b+h*I+f*C+d*Y,s[5]=u*L+h*O+f*R+d*$,s[9]=u*H+h*z+f*B+d*rt,s[13]=u*P+h*N+f*V+d*it,s[2]=m*b+v*I+y*C+g*Y,s[6]=m*L+v*O+y*R+g*$,s[10]=m*H+v*z+y*B+g*rt,s[14]=m*P+v*N+y*V+g*it,s[3]=p*b+S*I+T*C+E*Y,s[7]=p*L+S*O+T*R+E*$,s[11]=p*H+S*z+T*B+E*rt,s[15]=p*P+S*N+T*V+E*it,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],v=t[7],y=t[11],g=t[15];return m*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+v*(+n*c*d-n*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+y*(+n*l*h-n*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+g*(-r*a*u-n*c*h+n*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],v=t[13],y=t[14],g=t[15],p=h*y*l-v*f*l+v*c*d-a*y*d-h*c*g+a*f*g,S=m*f*l-u*y*l-m*c*d+o*y*d+u*c*g-o*f*g,T=u*v*l-m*h*l+m*a*d-o*v*d-u*a*g+o*h*g,E=m*h*c-u*v*c-m*a*f+o*v*f+u*a*y-o*h*y,b=n*p+i*S+r*T+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/b;return t[0]=p*L,t[1]=(v*f*s-h*y*s-v*r*d+i*y*d+h*r*g-i*f*g)*L,t[2]=(a*y*s-v*c*s+v*r*l-i*y*l-a*r*g+i*c*g)*L,t[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*L,t[4]=S*L,t[5]=(u*y*s-m*f*s+m*r*d-n*y*d-u*r*g+n*f*g)*L,t[6]=(m*c*s-o*y*s-m*r*l+n*y*l+o*r*g-n*c*g)*L,t[7]=(o*f*s-u*c*s+u*r*l-n*f*l-o*r*d+n*c*d)*L,t[8]=T*L,t[9]=(m*h*s-u*v*s-m*i*d+n*v*d+u*i*g-n*h*g)*L,t[10]=(o*v*s-m*a*s+m*i*l-n*v*l-o*i*g+n*a*g)*L,t[11]=(u*a*s-o*h*s-u*i*l+n*h*l+o*i*d-n*a*d)*L,t[12]=E*L,t[13]=(u*v*r-m*h*r+m*i*f-n*v*f-u*i*y+n*h*y)*L,t[14]=(m*a*r-o*v*r-m*i*c+n*v*c+o*i*y-n*a*y)*L,t[15]=(o*h*r-u*a*r+u*i*c-n*h*c-o*i*f+n*a*f)*L,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i){return this.set(1,n,i,0,t,1,i,0,t,n,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,m=s*h,v=o*u,y=o*h,g=a*h,p=c*l,S=c*u,T=c*h,E=i.x,b=i.y,L=i.z;return r[0]=(1-(v+g))*E,r[1]=(d+T)*E,r[2]=(m-S)*E,r[3]=0,r[4]=(d-T)*b,r[5]=(1-(f+g))*b,r[6]=(y+p)*b,r[7]=0,r[8]=(m+S)*L,r[9]=(y-p)*L,r[10]=(1-(f+v))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=zn.set(r[0],r[1],r[2]).length();const o=zn.set(r[4],r[5],r[6]).length(),a=zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],be.copy(this);const l=1/s,u=1/o,h=1/a;return be.elements[0]*=l,be.elements[1]*=l,be.elements[2]*=l,be.elements[4]*=u,be.elements[5]*=u,be.elements[6]*=u,be.elements[8]*=h,be.elements[9]*=h,be.elements[10]*=h,n.setFromRotationMatrix(be),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(n-t),l=2*s/(i-r),u=(n+t)/(n-t),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,n,i,r,s,o){const a=this.elements,c=1/(n-t),l=1/(i-r),u=1/(o-s),h=(n+t)*c,f=(i+r)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const zn=new w,be=new Lt,Ph=new w(0,0,0),Ih=new w(1,1,1),tn=new w,dr=new w,ue=new w;class Ti{constructor(t=0,n=0,i=0,r=Ti.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n,i){const r=mt.clamp,s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(na,n,i)}setFromVector3(t,n){return this.set(t.x,t.y,t.z,n||this._order)}reorder(t){return ia.setFromEuler(this),this.setFromQuaternion(ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Ti.DefaultOrder="XYZ",Ti.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const na=new Lt,ia=new he;class ra{constructor(){this.mask=1|0}set(t){this.mask=1<<t|0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=4294967295|0}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!=0}}let Dh=0;const sa=new w,Un=new he,He=new Lt,pr=new w,Ai=new w,Oh=new w,Nh=new he,oa=new w(1,0,0),aa=new w(0,1,0),ca=new w(0,0,1),Fh={type:"added"},la={type:"removed"};function ut(){Object.defineProperty(this,"id",{value:Dh++}),this.uuid=mt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DefaultUp.clone();const e=new w,t=new Ti,n=new he,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new me}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=ut.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ut.DefaultUp=new w(0,1,0),ut.DefaultMatrixAutoUpdate=!0,ut.prototype=Object.assign(Object.create(Je.prototype),{constructor:ut,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this},rotateOnWorldAxis:function(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this},rotateX:function(e){return this.rotateOnAxis(oa,e)},rotateY:function(e){return this.rotateOnAxis(aa,e)},rotateZ:function(e){return this.rotateOnAxis(ca,e)},translateOnAxis:function(e,t){return sa.copy(e).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(oa,e)},translateY:function(e){return this.translateOnAxis(aa,e)},translateZ:function(e){return this.translateOnAxis(ca,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(He.copy(this.matrixWorld).invert())},lookAt:function(e,t,n){e.isVector3?pr.copy(e):pr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?He.lookAt(Ai,pr,this.up):He.lookAt(pr,Ai,this.up),this.quaternion.setFromRotationMatrix(He),i&&(He.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(He),this.quaternion.premultiply(Un.invert()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(la)),this},clear:function(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(la)}return this.children.length=0,this},attach:function(e){return this.updateWorldMatrix(!0,!1),He.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),He.multiply(e.parent.matrixWorld)),e.applyMatrix4(He),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new he),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,Oh),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Nh,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)},traverseAncestors:function(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const u=a[c];r(e.shapes,u)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(e.materials,this.material[a]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(e.animations,a))}}if(t){const o=s(e.geometries),a=s(e.materials),c=s(e.textures),l=s(e.images),u=s(e.shapes),h=s(e.skeletons),f=s(e.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}});const gs=new w,Bh=new w,zh=new me;class Ge{constructor(t,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=t!==void 0?t:new w(1,0,0),this.constant=n!==void 0?n:0}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=gs.subVectors(i,n).cross(Bh.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}clone(){return new this.constructor().copy(this)}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new w),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new w);const i=t.delta(gs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):void 0;const s=-(t.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||zh.getNormalMatrix(t),r=this.coplanarPoint(gs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}}const Me=new w,ke=new w,ys=new w,Ve=new w,Hn=new w,Gn=new w,ha=new w,vs=new w,xs=new w,_s=new w;class re{constructor(t,n,i){this.a=t!==void 0?t:new w,this.b=n!==void 0?n:new w,this.c=i!==void 0?i:new w}static getNormal(t,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new w),r.subVectors(i,n),Me.subVectors(t,n),r.cross(Me);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Me.subVectors(r,n),ke.subVectors(i,n),ys.subVectors(t,n);const o=Me.dot(Me),a=Me.dot(ke),c=Me.dot(ys),l=ke.dot(ke),u=ke.dot(ys),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new w),h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return s.set(1-d-m,m,d)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Ve),Ve.x>=0&&Ve.y>=0&&Ve.x+Ve.y<=1}static getUV(t,n,i,r,s,o,a,c){return this.getBarycoord(t,n,i,r,Ve),c.set(0,0),c.addScaledVector(s,Ve.x),c.addScaledVector(o,Ve.y),c.addScaledVector(a,Ve.z),c}static isFrontFacing(t,n,i,r){return Me.subVectors(i,n),ke.subVectors(t,n),Me.cross(ke).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Me.subVectors(this.c,this.b),ke.subVectors(this.a,this.b),Me.cross(ke).length()*.5}getMidpoint(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new w),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return re.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new Ge),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return re.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,r,s){return re.getUV(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return re.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return re.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new w);const i=this.a,r=this.b,s=this.c;let o,a;Hn.subVectors(r,i),Gn.subVectors(s,i),vs.subVectors(t,i);const c=Hn.dot(vs),l=Gn.dot(vs);if(c<=0&&l<=0)return n.copy(i);xs.subVectors(t,r);const u=Hn.dot(xs),h=Gn.dot(xs);if(u>=0&&h<=u)return n.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Hn,o);_s.subVectors(t,s);const d=Hn.dot(_s),m=Gn.dot(_s);if(m>=0&&d<=m)return n.copy(s);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),n.copy(i).addScaledVector(Gn,a);const y=u*m-d*h;if(y<=0&&h-u>=0&&d-m>=0)return ha.subVectors(s,r),a=(h-u)/(h-u+(d-m)),n.copy(r).addScaledVector(ha,a);const g=1/(y+v+f);return o=v*g,a=f*g,n.copy(i).addScaledVector(Hn,o).addScaledVector(Gn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},we={h:0,s:0,l:0},mr={h:0,s:0,l:0};function bs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Ms(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ws(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}class ft{constructor(t,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(t):this.setRGB(t,n,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,n,i){return this.r=t,this.g=n,this.b=i,this}setHSL(t,n,i){if(t=mt.euclideanModulo(t,1),n=mt.clamp(n,0,1),i=mt.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=bs(s,r,t+1/3),this.g=bs(s,r,t),this.b=bs(s,r,t-1/3)}return this}setStyle(t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const n=ua[t];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,n=2){return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}copyLinearToGamma(t,n=2){const i=n>0?1/n:1;return this.r=Math.pow(t.r,i),this.g=Math.pow(t.g,i),this.b=Math.pow(t.b,i),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case n:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-n)/u+2;break;case r:a=(n-i)/u+4;break}a/=6}return t.h=a,t.s=c,t.l=l,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,n,i){return this.getHSL(we),we.h+=t,we.s+=n,we.l+=i,this.setHSL(we.h,we.s,we.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(we),t.getHSL(mr);const i=mt.lerp(we.h,mr.h,n),r=mt.lerp(we.s,mr.s,n),s=mt.lerp(we.l,mr.l,n);return this.setHSL(i,r,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ft.NAMES=ua,ft.prototype.r=1,ft.prototype.g=1,ft.prototype.b=1;class Uh{constructor(t,n,i,r,s,o=0){this.a=t,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new w,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ft,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(let n=0,i=t.vertexNormals.length;n<i;n++)this.vertexNormals[n]=t.vertexNormals[n].clone();for(let n=0,i=t.vertexColors.length;n<i;n++)this.vertexColors[n]=t.vertexColors[n].clone();return this}}let Hh=0;function dt(){Object.defineProperty(this,"id",{value:Hh++}),this.uuid=mt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=gi,this.side=Qi,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}dt.prototype=Object.assign(Object.create(Je.prototype),{constructor:dt,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Co;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}},toJSON:function(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Qi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(dt.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function en(e){dt.call(this),this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$i,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}en.prototype=Object.create(dt.prototype),en.prototype.constructor=en,en.prototype.isMeshBasicMaterial=!0,en.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};const Bt=new w,gr=new W;function St(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ar,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(St.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(St.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ft),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this},copyVector2sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new W),t[n++]=s.x,t[n++]=s.y}return this},copyVector3sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new w),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this},copyVector4sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Dt),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this},applyMatrix4:function(e){for(let t=0,n=this.count;t<n;t++)Bt.x=this.getX(t),Bt.y=this.getY(t),Bt.z=this.getZ(t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this},applyNormalMatrix:function(e){for(let t=0,n=this.count;t<n;t++)Bt.x=this.getX(t),Bt.y=this.getY(t),Bt.z=this.getZ(t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this},transformDirection:function(e){for(let t=0,n=this.count;t<n;t++)Bt.x=this.getX(t),Bt.y=this.getY(t),Bt.z=this.getZ(t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this},set:function(e,t=0){return this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Ss(e,t,n){St.call(this,new Int8Array(e),t,n)}Ss.prototype=Object.create(St.prototype),Ss.prototype.constructor=Ss;function Es(e,t,n){St.call(this,new Uint8Array(e),t,n)}Es.prototype=Object.create(St.prototype),Es.prototype.constructor=Es;function Ts(e,t,n){St.call(this,new Uint8ClampedArray(e),t,n)}Ts.prototype=Object.create(St.prototype),Ts.prototype.constructor=Ts;function As(e,t,n){St.call(this,new Int16Array(e),t,n)}As.prototype=Object.create(St.prototype),As.prototype.constructor=As;function Li(e,t,n){St.call(this,new Uint16Array(e),t,n)}Li.prototype=Object.create(St.prototype),Li.prototype.constructor=Li;function Ls(e,t,n){St.call(this,new Int32Array(e),t,n)}Ls.prototype=Object.create(St.prototype),Ls.prototype.constructor=Ls;function Ci(e,t,n){St.call(this,new Uint32Array(e),t,n)}Ci.prototype=Object.create(St.prototype),Ci.prototype.constructor=Ci;function yr(e,t,n){St.call(this,new Uint16Array(e),t,n)}yr.prototype=Object.create(St.prototype),yr.prototype.constructor=yr,yr.prototype.isFloat16BufferAttribute=!0;function qt(e,t,n){St.call(this,new Float32Array(e),t,n)}qt.prototype=Object.create(St.prototype),qt.prototype.constructor=qt;function Cs(e,t,n){St.call(this,new Float64Array(e),t,n)}Cs.prototype=Object.create(St.prototype),Cs.prototype.constructor=Cs;function fa(e){if(e.length===0)return-Infinity;let t=e[0];for(let n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}const Gh={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function vr(e,t){return new Gh[e](t)}let kh=0;const Ae=new Lt,Rs=new ut,kn=new w,fe=new pn,Ri=new pn,Zt=new w;function Ht(){Object.defineProperty(this,"id",{value:kh++}),this.uuid=mt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}Ht.prototype=Object.assign(Object.create(Je.prototype),{constructor:Ht,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){return Array.isArray(e)?this.index=new(fa(e)>65535?Ci:Li)(e,1):this.index=e,this},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},hasAttribute:function(e){return this.attributes[e]!==void 0},addGroup:function(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new me().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return Ae.makeRotationX(e),this.applyMatrix4(Ae),this},rotateY:function(e){return Ae.makeRotationY(e),this.applyMatrix4(Ae),this},rotateZ:function(e){return Ae.makeRotationZ(e),this.applyMatrix4(Ae),this},translate:function(e,t,n){return Ae.makeTranslation(e,t,n),this.applyMatrix4(Ae),this},scale:function(e,t,n){return Ae.makeScale(e,t,n),this.applyMatrix4(Ae),this},lookAt:function(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this},setFromPoints:function(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(t,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-Infinity,-Infinity,-Infinity),new w(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,fe.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,fe.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(fe.min),this.boundingBox.expandByPoint(fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,Infinity);return}if(e){const n=this.boundingSphere.center;if(fe.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(fe.min,Ri.min),fe.expandByPoint(Zt),Zt.addVectors(fe.max,Ri.max),fe.expandByPoint(Zt)):(fe.expandByPoint(Ri.min),fe.expandByPoint(Ri.max))}fe.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Zt.fromBufferAttribute(o,c),a&&(kn.fromBufferAttribute(e,c),Zt.add(kn)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new St(new Float32Array(4*o),4));const a=t.tangent.array,c=[],l=[];for(let P=0;P<o;P++)c[P]=new w,l[P]=new w;const u=new w,h=new w,f=new w,d=new W,m=new W,v=new W,y=new w,g=new w;function p(P,I,O){u.fromArray(i,P*3),h.fromArray(i,I*3),f.fromArray(i,O*3),d.fromArray(s,P*2),m.fromArray(s,I*2),v.fromArray(s,O*2),h.sub(u),f.sub(u),m.sub(d),v.sub(d);const z=1/(m.x*v.y-v.x*m.y);!isFinite(z)||(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(z),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(z),c[P].add(y),c[I].add(y),c[O].add(y),l[P].add(g),l[I].add(g),l[O].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let P=0,I=S.length;P<I;++P){const O=S[P],z=O.start,N=O.count;for(let C=z,R=z+N;C<R;C+=3)p(n[C+0],n[C+1],n[C+2])}const T=new w,E=new w,b=new w,L=new w;function H(P){b.fromArray(r,P*3),L.copy(b);const I=c[P];T.copy(I),T.sub(b.multiplyScalar(b.dot(I))).normalize(),E.crossVectors(L,I);const z=E.dot(l[P])<0?-1:1;a[P*4]=T.x,a[P*4+1]=T.y,a[P*4+2]=T.z,a[P*4+3]=z}for(let P=0,I=S.length;P<I;++P){const O=S[P],z=O.start,N=O.count;for(let C=z,R=z+N;C<R;C+=3)H(n[C+0]),H(n[C+1]),H(n[C+2])}},computeVertexNormals:function(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new w,r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,u=new w;if(e)for(let h=0,f=e.count;h<f;h+=3){const d=e.getX(h+0),m=e.getX(h+1),v=e.getX(h+2);i.fromBufferAttribute(t,d),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(n,d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),o.add(l),a.add(l),c.add(l),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,o=e.attributes[i],a=o.array,c=o.itemSize*t,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)},toNonIndexed:function(){function e(o,a){const c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l);let f=0,d=0;for(let m=0,v=a.length;m<v;m++){f=a[m]*l;for(let y=0;y<l;y++)h[d++]=c[f++]}return new St(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=e(a,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){const h=c[l],f=e(h,n);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t},toJSON:function(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(e.data);c.name!==""&&(l.name=c.name),e.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=f.toJSON(e.data);f.name!==""&&(d.name=f.name),l.push(d)}l.length>0&&(i[a]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e},clone:function(){return new Ht().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,f=u.length;h<f;h++)l.push(u[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const da=new Lt,Vn=new Ei,Ps=new yn,nn=new w,rn=new w,sn=new w,Is=new w,Ds=new w,Os=new w,xr=new w,_r=new w,br=new w,Mr=new W,wr=new W,Sr=new W,Ns=new w,Er=new w;function Jt(e=new Ht,t=new en){ut.call(this),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}Jt.prototype=Object.assign(Object.create(ut.prototype),{constructor:Jt,isMesh:!0,copy:function(e){return ut.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),e.ray.intersectsSphere(Ps)===!1)||(da.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(da),n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const y=f[m],g=i[y.materialIndex],p=Math.max(y.start,d.start),S=Math.min(y.start+y.count,d.start+d.count);for(let T=p,E=S;T<E;T+=3){const b=o.getX(T),L=o.getX(T+1),H=o.getX(T+2);s=Tr(this,g,e,Vn,a,c,l,u,h,b,L,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let y=m,g=v;y<g;y+=3){const p=o.getX(y),S=o.getX(y+1),T=o.getX(y+2);s=Tr(this,i,e,Vn,a,c,l,u,h,p,S,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const y=f[m],g=i[y.materialIndex],p=Math.max(y.start,d.start),S=Math.min(y.start+y.count,d.start+d.count);for(let T=p,E=S;T<E;T+=3){const b=T,L=T+1,H=T+2;s=Tr(this,g,e,Vn,a,c,l,u,h,b,L,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let y=m,g=v;y<g;y+=3){const p=y,S=y+1,T=y+2;s=Tr(this,i,e,Vn,a,c,l,u,h,p,S,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function Vh(e,t,n,i,r,s,o,a){let c;if(t.side===Yt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side!==Ki,a),c===null)return null;Er.copy(a),Er.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Er);return l<n.near||l>n.far?null:{distance:l,point:Er.clone(),object:e}}function Tr(e,t,n,i,r,s,o,a,c,l,u,h){nn.fromBufferAttribute(r,l),rn.fromBufferAttribute(r,u),sn.fromBufferAttribute(r,h);const f=e.morphTargetInfluences;if(t.morphTargets&&s&&f){xr.set(0,0,0),_r.set(0,0,0),br.set(0,0,0);for(let m=0,v=s.length;m<v;m++){const y=f[m],g=s[m];y!==0&&(Is.fromBufferAttribute(g,l),Ds.fromBufferAttribute(g,u),Os.fromBufferAttribute(g,h),o?(xr.addScaledVector(Is,y),_r.addScaledVector(Ds,y),br.addScaledVector(Os,y)):(xr.addScaledVector(Is.sub(nn),y),_r.addScaledVector(Ds.sub(rn),y),br.addScaledVector(Os.sub(sn),y)))}nn.add(xr),rn.add(_r),sn.add(br)}e.isSkinnedMesh&&(e.boneTransform(l,nn),e.boneTransform(u,rn),e.boneTransform(h,sn));const d=Vh(e,t,n,i,nn,rn,sn,Ns);if(d){a&&(Mr.fromBufferAttribute(a,l),wr.fromBufferAttribute(a,u),Sr.fromBufferAttribute(a,h),d.uv=re.getUV(Ns,nn,rn,sn,Mr,wr,Sr,new W)),c&&(Mr.fromBufferAttribute(c,l),wr.fromBufferAttribute(c,u),Sr.fromBufferAttribute(c,h),d.uv2=re.getUV(Ns,nn,rn,sn,Mr,wr,Sr,new W));const m=new Uh(l,u,h);re.getNormal(nn,rn,sn,m.normal),d.face=m}return d}class Ar extends Ht{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,n,t,o,s,0),m("z","y","x",1,-1,i,n,-t,o,s,1),m("x","z","y",1,1,t,i,n,r,o,2),m("x","z","y",1,-1,t,i,-n,r,o,3),m("x","y","z",1,-1,t,n,i,r,s,4),m("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function m(v,y,g,p,S,T,E,b,L,H,P){const I=T/L,O=E/H,z=T/2,N=E/2,C=b/2,R=L+1,B=H+1;let V=0,Y=0;const $=new w;for(let rt=0;rt<B;rt++){const it=rt*O-N;for(let _t=0;_t<R;_t++){const bt=_t*I-z;$[v]=bt*p,$[y]=it*S,$[g]=C,l.push($.x,$.y,$.z),$[v]=0,$[y]=0,$[g]=b>0?1:-1,u.push($.x,$.y,$.z),h.push(_t/L),h.push(1-rt/H),V+=1}}for(let rt=0;rt<H;rt++)for(let it=0;it<L;it++){const _t=f+it+R*rt,bt=f+it+R*(rt+1),Nt=f+(it+1)+R*(rt+1),G=f+(it+1)+R*rt;c.push(_t,bt,G),c.push(bt,Nt,G),Y+=6}a.addGroup(d,Y,P),d+=Y,f+=V}}}function Wn(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function ee(e){const t={};for(let n=0;n<e.length;n++){const i=Wn(e[n]);for(const r in i)t[r]=i[r]}return t}const Wh={clone:Wn,merge:ee};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function ce(e){dt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=jh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}ce.prototype=Object.create(dt.prototype),ce.prototype.constructor=ce,ce.prototype.isShaderMaterial=!0,ce.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this},ce.prototype.toJSON=function(e){const t=dt.prototype.toJSON.call(this,e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t};function on(){ut.call(this),this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt}on.prototype=Object.assign(Object.create(ut.prototype),{constructor:on,isCamera:!0,copy:function(e,t){return ut.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){ut.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(e,t){ut.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Qt(e=50,t=1,n=.1,i=2e3){on.call(this),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Qt.prototype=Object.assign(Object.create(on.prototype),{constructor:Qt,isPerspectiveCamera:!0,copy:function(e,t){return on.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){const t=.5*this.getFilmHeight()/e;this.fov=mt.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){const e=Math.tan(mt.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return mt.RAD2DEG*2*Math.atan(Math.tan(mt.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=this.near;let t=e*Math.tan(mt.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,t-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(e){const t=ut.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});const jn=90,qn=1;function Xn(e,t,n){if(ut.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Qt(jn,qn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const r=new Qt(jn,qn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);const s=new Qt(jn,qn,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new w(0,1,0)),this.add(s);const o=new Qt(jn,qn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);const a=new Qt(jn,qn,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new w(0,0,1)),this.add(a);const c=new Qt(jn,qn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,f=l.getRenderTarget();l.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(u,i),l.setRenderTarget(n,1),l.render(u,r),l.setRenderTarget(n,2),l.render(u,s),l.setRenderTarget(n,3),l.render(u,o),l.setRenderTarget(n,4),l.render(u,a),n.texture.generateMipmaps=d,l.setRenderTarget(n,5),l.render(u,c),l.setRenderTarget(f),l.xr.enabled=h}}Xn.prototype=Object.create(ut.prototype),Xn.prototype.constructor=Xn;function an(e,t,n,i,r,s,o,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:$r,o=o!==void 0?o:dn,Ft.call(this,e,t,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}an.prototype=Object.create(Ft.prototype),an.prototype.constructor=an,an.prototype.isCubeTexture=!0,Object.defineProperty(an.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});class Xh extends Mi{constructor(t,n,i){Number.isInteger(n)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),n=i),super(t,t,n),Object.defineProperty(this,"isWebGLCubeRenderTarget",{value:!0}),n=n||{},this.texture=new an(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.format=_e,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ar(5,5,5),s=new ce({name:"CubemapFromEquirect",uniforms:Wn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:mi});s.uniforms.tEquirect.value=n;const o=new Jt(r,s),a=n.minFilter;return n.minFilter===tr&&(n.minFilter=te),new Xn(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}function Yn(e,t,n,i,r,s,o,a,c,l,u,h){Ft.call(this,null,s,o,a,c,l,i,r,u,h),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:ie,this.minFilter=l!==void 0?l:ie,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Yn.prototype=Object.create(Ft.prototype),Yn.prototype.constructor=Yn,Yn.prototype.isDataTexture=!0;const Zn=new yn,Lr=new w;class Cr{constructor(t,n,i,r,s,o){this.planes=[t!==void 0?t:new Ge,n!==void 0?n:new Ge,i!==void 0?i:new Ge,r!==void 0?r:new Ge,s!==void 0?s:new Ge,o!==void 0?o:new Ge]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const n=this.planes,i=t.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],d=i[9],m=i[10],v=i[11],y=i[12],g=i[13],p=i[14],S=i[15];return n[0].setComponents(a-r,h-c,v-f,S-y).normalize(),n[1].setComponents(a+r,h+c,v+f,S+y).normalize(),n[2].setComponents(a+s,h+l,v+d,S+g).normalize(),n[3].setComponents(a-s,h-l,v-d,S-g).normalize(),n[4].setComponents(a-o,h-u,v-m,S-p).normalize(),n[5].setComponents(a+o,h+u,v+m,S+p).normalize(),this}intersectsObject(t){const n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Zn.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Lr.x=r.normal.x>0?t.max.x:t.min.x,Lr.y=r.normal.y>0?t.max.y:t.min.y,Lr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}}function pa(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Yh(e,t){const n=t.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,d=e.createBuffer();e.bindBuffer(u,d),e.bufferData(u,h,f),l.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?n?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:h instanceof Uint8Array&&(m=5121),{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,d=u.updateRange;e.bindBuffer(h,l),d.count===-1?e.bufferSubData(h,0,f):(n?e.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):e.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(e.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Zh extends Ht{constructor(t=1,n=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=n/c,d=[],m=[],v=[],y=[];for(let g=0;g<u;g++){const p=g*f-o;for(let S=0;S<l;S++){const T=S*h-s;m.push(T,-p,0),v.push(0,0,1),y.push(S/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let p=0;p<a;p++){const S=p+l*g,T=p+l*(g+1),E=p+1+l*(g+1),b=p+1+l*g;d.push(S,T,b),d.push(T,E,b)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(y,2))}}var Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,$h=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu="vec3 transformed = vec3( position );",nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,hu=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_u="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Au=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Fu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,ku=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ju=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,rf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,of=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,af=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,lf=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_f=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,If=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Df=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Of=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Nf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,od=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,ud=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,md=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Tt={alphamap_fragment:Jh,alphamap_pars_fragment:Qh,alphatest_fragment:Kh,aomap_fragment:$h,aomap_pars_fragment:tu,begin_vertex:eu,beginnormal_vertex:nu,bsdfs:iu,bumpmap_pars_fragment:ru,clipping_planes_fragment:su,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:au,clipping_planes_vertex:cu,color_fragment:lu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:fu,common:du,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:yu,emissivemap_fragment:vu,emissivemap_pars_fragment:xu,encodings_fragment:_u,encodings_pars_fragment:bu,envmap_fragment:Mu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Su,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Fu,envmap_vertex:Tu,fog_vertex:Au,fog_pars_vertex:Lu,fog_fragment:Cu,fog_pars_fragment:Ru,gradientmap_pars_fragment:Pu,lightmap_fragment:Iu,lightmap_pars_fragment:Du,lights_lambert_vertex:Ou,lights_pars_begin:Nu,lights_toon_fragment:Bu,lights_toon_pars_fragment:zu,lights_phong_fragment:Uu,lights_phong_pars_fragment:Hu,lights_physical_fragment:Gu,lights_physical_pars_fragment:ku,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:ju,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Xu,logdepthbuf_pars_vertex:Yu,logdepthbuf_vertex:Zu,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:Ku,map_particle_pars_fragment:$u,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphnormal_vertex:nf,morphtarget_pars_vertex:rf,morphtarget_vertex:sf,normal_fragment_begin:of,normal_fragment_maps:af,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:lf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:uf,packing:ff,premultiplied_alpha_fragment:df,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:_f,shadowmap_vertex:bf,shadowmask_pars_fragment:Mf,skinbase_vertex:wf,skinning_pars_vertex:Sf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:Af,specularmap_pars_fragment:Lf,tonemapping_fragment:Cf,tonemapping_pars_fragment:Rf,transmissionmap_fragment:Pf,transmissionmap_pars_fragment:If,uv_pars_fragment:Df,uv_pars_vertex:Of,uv_vertex:Nf,uv2_pars_fragment:Ff,uv2_pars_vertex:Bf,uv2_vertex:zf,worldpos_vertex:Uf,background_frag:Hf,background_vert:Gf,cube_frag:kf,cube_vert:Vf,depth_frag:Wf,depth_vert:jf,distanceRGBA_frag:qf,distanceRGBA_vert:Xf,equirect_frag:Yf,equirect_vert:Zf,linedashed_frag:Jf,linedashed_vert:Qf,meshbasic_frag:Kf,meshbasic_vert:$f,meshlambert_frag:td,meshlambert_vert:ed,meshmatcap_frag:nd,meshmatcap_vert:id,meshtoon_frag:rd,meshtoon_vert:sd,meshphong_frag:od,meshphong_vert:ad,meshphysical_frag:cd,meshphysical_vert:ld,normal_frag:hd,normal_vert:ud,points_frag:fd,points_vert:dd,shadow_frag:pd,shadow_vert:md,sprite_frag:gd,sprite_vert:yd},Q={common:{diffuse:{value:new ft(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new me},uv2Transform:{value:new me},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new me}},sprite:{diffuse:{value:new ft(15658734)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new me}}},Le={basic:{uniforms:ee([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ee([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.fog,Q.lights,{emissive:{value:new ft(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ee([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ee([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ee([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new ft(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ee([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ee([Q.points,Q.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ee([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ee([Q.common,Q.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ee([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.normal_vert,fragmentShader:Tt.normal_frag},sprite:{uniforms:ee([Q.sprite,Q.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},cube:{uniforms:ee([Q.envmap,{opacity:{value:1}}]),vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:ee([Q.common,Q.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:ee([Q.lights,Q.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Le.physical={uniforms:ee([Le.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new W(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ft(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function vd(e,t,n,i,r){const s=new ft(0);let o=0,a,c,l=null,u=0,h=null;function f(m,v,y,g){let p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=t.get(p));const S=e.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(p=null),p===null?d(s,o):p&&p.isColor&&(d(p,1),g=!0),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===es)?(c===void 0&&(c=new Jt(new Ar(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:Wn(Le.cube.uniforms),vertexShader:Le.cube.vertexShader,fragmentShader:Le.cube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),p.isWebGLCubeRenderTarget&&(p=p.texture),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||u!==p.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,l=p,u=p.version,h=e.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Jt(new Zh(2,2),new ce({name:"BackgroundMaterial",uniforms:Wn(Le.background.uniforms),vertexShader:Le.background.vertexShader,fragmentShader:Le.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||u!==p.version||h!==e.toneMapping)&&(a.material.needsUpdate=!0,l=p,u=p.version,h=e.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function d(m,v){n.buffers.color.setClear(m.r,m.g,m.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(m,v=1){s.set(m),o=v,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,d(s,o)},render:f}}function xd(e,t,n,i){const r=e.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null);let l=c;function u(N,C,R,B,V){let Y=!1;if(o){const $=m(B,R,C);l!==$&&(l=$,f(l.object)),Y=y(B,V),Y&&g(B,V)}else{const $=C.wireframe===!0;(l.geometry!==B.id||l.program!==R.id||l.wireframe!==$)&&(l.geometry=B.id,l.program=R.id,l.wireframe=$,Y=!0)}N.isInstancedMesh===!0&&(Y=!0),V!==null&&n.update(V,34963),Y&&(L(N,C,R,B),V!==null&&e.bindBuffer(34963,n.get(V).buffer))}function h(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function f(N){return i.isWebGL2?e.bindVertexArray(N):s.bindVertexArrayOES(N)}function d(N){return i.isWebGL2?e.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,C,R){const B=R.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let Y=V[C.id];Y===void 0&&(Y={},V[C.id]=Y);let $=Y[B];return $===void 0&&($=v(h()),Y[B]=$),$}function v(N){const C=[],R=[],B=[];for(let V=0;V<r;V++)C[V]=0,R[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:B,object:N,attributes:{},index:null}}function y(N,C){const R=l.attributes,B=N.attributes;let V=0;for(const Y in B){const $=R[Y],rt=B[Y];if($===void 0||$.attribute!==rt||$.data!==rt.data)return!0;V++}return l.attributesNum!==V||l.index!==C}function g(N,C){const R={},B=N.attributes;let V=0;for(const Y in B){const $=B[Y],rt={};rt.attribute=$,$.data&&(rt.data=$.data),R[Y]=rt,V++}l.attributes=R,l.attributesNum=V,l.index=C}function p(){const N=l.newAttributes;for(let C=0,R=N.length;C<R;C++)N[C]=0}function S(N){T(N,0)}function T(N,C){const R=l.newAttributes,B=l.enabledAttributes,V=l.attributeDivisors;R[N]=1,B[N]===0&&(e.enableVertexAttribArray(N),B[N]=1),V[N]!==C&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,C),V[N]=C)}function E(){const N=l.newAttributes,C=l.enabledAttributes;for(let R=0,B=C.length;R<B;R++)C[R]!==N[R]&&(e.disableVertexAttribArray(R),C[R]=0)}function b(N,C,R,B,V,Y){i.isWebGL2===!0&&(R===5124||R===5125)?e.vertexAttribIPointer(N,C,R,V,Y):e.vertexAttribPointer(N,C,R,B,V,Y)}function L(N,C,R,B){if(i.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const V=B.attributes,Y=R.getAttributes(),$=C.defaultAttributeValues;for(const rt in Y){const it=Y[rt];if(it>=0){const _t=V[rt];if(_t!==void 0){const bt=_t.normalized,Nt=_t.itemSize,G=n.get(_t);if(G===void 0)continue;const $t=G.buffer,gt=G.type,Rt=G.bytesPerElement;if(_t.isInterleavedBufferAttribute){const yt=_t.data,Pt=yt.stride,Et=_t.offset;yt&&yt.isInstancedInterleavedBuffer?(T(it,yt.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=yt.meshPerAttribute*yt.count)):S(it),e.bindBuffer(34962,$t),b(it,Nt,gt,bt,Pt*Rt,Et*Rt)}else _t.isInstancedBufferAttribute?(T(it,_t.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=_t.meshPerAttribute*_t.count)):S(it),e.bindBuffer(34962,$t),b(it,Nt,gt,bt,0,0)}else if(rt==="instanceMatrix"){const bt=n.get(N.instanceMatrix);if(bt===void 0)continue;const Nt=bt.buffer,G=bt.type;T(it+0,1),T(it+1,1),T(it+2,1),T(it+3,1),e.bindBuffer(34962,Nt),e.vertexAttribPointer(it+0,4,G,!1,64,0),e.vertexAttribPointer(it+1,4,G,!1,64,16),e.vertexAttribPointer(it+2,4,G,!1,64,32),e.vertexAttribPointer(it+3,4,G,!1,64,48)}else if(rt==="instanceColor"){const bt=n.get(N.instanceColor);if(bt===void 0)continue;const Nt=bt.buffer,G=bt.type;T(it,1),e.bindBuffer(34962,Nt),e.vertexAttribPointer(it,3,G,!1,12,0)}else if($!==void 0){const bt=$[rt];if(bt!==void 0)switch(bt.length){case 2:e.vertexAttrib2fv(it,bt);break;case 3:e.vertexAttrib3fv(it,bt);break;case 4:e.vertexAttrib4fv(it,bt);break;default:e.vertexAttrib1fv(it,bt)}}}}E()}function H(){O();for(const N in a){const C=a[N];for(const R in C){const B=C[R];for(const V in B)d(B[V].object),delete B[V];delete C[R]}delete a[N]}}function P(N){if(a[N.id]===void 0)return;const C=a[N.id];for(const R in C){const B=C[R];for(const V in B)d(B[V].object),delete B[V];delete C[R]}delete a[N.id]}function I(N){for(const C in a){const R=a[C];if(R[N.id]===void 0)continue;const B=R[N.id];for(const V in B)d(B[V].object),delete B[V];delete R[N.id]}}function O(){z(),l!==c&&(l=c,f(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:z,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:p,enableAttribute:S,disableUnusedAttributes:E}}function _d(e,t,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){e.drawArrays(s,l,u),n.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(r)f=e,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),n.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function bd(e,t,n){let i;function r(){if(i!==void 0)return i;const b=t.get("EXT_texture_filter_anisotropic");return b!==null?i=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(b){if(b==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&e instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,u=e.getParameter(34930),h=e.getParameter(35660),f=e.getParameter(3379),d=e.getParameter(34076),m=e.getParameter(34921),v=e.getParameter(36347),y=e.getParameter(36348),g=e.getParameter(36349),p=h>0,S=o||!!t.get("OES_texture_float"),T=p&&S,E=o?e.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:E}}function Md(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new Ge,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const m=h.length!==0||f||i!==0||r;return r=f,n=u(h,d,0),i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,y=h.clipShadows,g=e.get(h);if(!r||m===null||m.length===0||s&&!y)s?u(null):l();else{const p=s?0:i,S=p*4;let T=g.clippingState||null;c.value=T,T=u(m,f,S,d);for(let E=0;E!==S;++E)T[E]=n[E];g.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let y=null;if(v!==0){if(y=c.value,m!==!0||y===null){const g=d+v*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<g)&&(y=new Float32Array(g));for(let S=0,T=d;S!==v;++S,T+=4)o.copy(h[S]).applyMatrix4(p,a),o.normal.toArray(y,T),y[T+3]=o.constant}c.value=y,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,y}}function wd(e){let t=new WeakMap;function n(o,a){return a===zo?o.mapping=$r:a===Uo&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zo||a===Uo)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=e.getRenderList(),u=e.getRenderTarget(),h=new Xh(c.height/2);return h.fromEquirectangularTexture(e,o),t.set(o,h),e.setRenderTarget(u),e.setRenderList(l),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}function Sd(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ed(e,t,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)t.update(f[m],34962);const d=h.morphAttributes;for(const m in d){const v=d[m];for(let y=0,g=v.length;y<g;y++)t.update(v[y],34962)}}function l(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const p=d.array;v=d.version;for(let S=0,T=p.length;S<T;S+=3){const E=p[S+0],b=p[S+1],L=p[S+2];f.push(E,b,b,L,L,E)}}else{const p=m.array;v=m.version;for(let S=0,T=p.length/3-1;S<T;S+=3){const E=S+0,b=S+1,L=S+2;f.push(E,b,b,L,L,E)}}const y=new(fa(f)>65535?Ci:Li)(f,1);y.version=v;const g=s.get(h);g&&t.remove(g),s.set(h,y)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Td(e,t,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){e.drawElements(s,d,a,f*c),n.update(d,s,1)}function h(f,d,m){if(m===0)return;let v,y;if(r)v=e,y="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](s,d,a,f*c,m),n.update(d,s,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Ad(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ld(e,t){return e[0]-t[0]}function Cd(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Rd(e){const t={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,u=l===void 0?0:l.length;let h=t[o.id];if(h===void 0){h=[];for(let y=0;y<u;y++)h[y]=[y,0];t[o.id]=h}for(let y=0;y<u;y++){const g=h[y];g[0]=y,g[1]=l[y]}h.sort(Cd);for(let y=0;y<8;y++)y<u&&h[y][1]?(i[y][0]=h[y][0],i[y][1]=h[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(Ld);const f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const g=i[y],p=g[0],S=g[1];p!==Number.MAX_SAFE_INTEGER&&S?(f&&o.getAttribute("morphTarget"+y)!==f[p]&&o.setAttribute("morphTarget"+y,f[p]),d&&o.getAttribute("morphNormal"+y)!==d[p]&&o.setAttribute("morphNormal"+y,d[p]),n[y]=S,m+=S):(f&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),d&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),n[y]=0)}const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(e,"morphTargetBaseInfluence",v),c.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:r}}function Pd(e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);return r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function Pi(e=null,t=1,n=1,i=1){Ft.call(this,null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ie,this.minFilter=ie,this.wrapR=le,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Pi.prototype=Object.create(Ft.prototype),Pi.prototype.constructor=Pi,Pi.prototype.isDataTexture2DArray=!0;function Ii(e=null,t=1,n=1,i=1){Ft.call(this,null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ie,this.minFilter=ie,this.wrapR=le,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Ii.prototype=Object.create(Ft.prototype),Ii.prototype.constructor=Ii,Ii.prototype.isDataTexture3D=!0;const ma=new Ft,Id=new Pi,Dd=new Ii,ga=new an,ya=[],va=[],xa=new Float32Array(16),_a=new Float32Array(9),ba=new Float32Array(4);function Jn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=ya[r];if(s===void 0&&(s=new Float32Array(r),ya[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function ge(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function de(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ma(e,t){let n=va[t];n===void 0&&(n=new Int32Array(t),va[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Od(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Nd(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ge(n,t))return;e.uniform2fv(this.addr,t),de(n,t)}}function Fd(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ge(n,t))return;e.uniform3fv(this.addr,t),de(n,t)}}function Bd(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ge(n,t))return;e.uniform4fv(this.addr,t),de(n,t)}}function zd(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ge(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),de(n,t)}else{if(ge(n,i))return;ba.set(i),e.uniformMatrix2fv(this.addr,!1,ba),de(n,i)}}function Ud(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ge(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),de(n,t)}else{if(ge(n,i))return;_a.set(i),e.uniformMatrix3fv(this.addr,!1,_a),de(n,i)}}function Hd(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ge(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),de(n,t)}else{if(ge(n,i))return;xa.set(i),e.uniformMatrix4fv(this.addr,!1,xa),de(n,i)}}function Gd(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(t||ma,r)}function kd(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Id,r)}function Vd(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Dd,r)}function Wd(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(t||ga,r)}function jd(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qd(e,t){const n=this.cache;ge(n,t)||(e.uniform2iv(this.addr,t),de(n,t))}function Xd(e,t){const n=this.cache;ge(n,t)||(e.uniform3iv(this.addr,t),de(n,t))}function Yd(e,t){const n=this.cache;ge(n,t)||(e.uniform4iv(this.addr,t),de(n,t))}function Zd(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Jd(e){switch(e){case 5126:return Od;case 35664:return Nd;case 35665:return Fd;case 35666:return Bd;case 35674:return zd;case 35675:return Ud;case 35676:return Hd;case 5124:case 35670:return jd;case 35667:case 35671:return qd;case 35668:case 35672:return Xd;case 35669:case 35673:return Yd;case 5125:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Gd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return kd}}function Qd(e,t){e.uniform1fv(this.addr,t)}function Kd(e,t){e.uniform1iv(this.addr,t)}function $d(e,t){e.uniform2iv(this.addr,t)}function tp(e,t){e.uniform3iv(this.addr,t)}function ep(e,t){e.uniform4iv(this.addr,t)}function np(e,t){const n=Jn(t,this.size,2);e.uniform2fv(this.addr,n)}function ip(e,t){const n=Jn(t,this.size,3);e.uniform3fv(this.addr,n)}function rp(e,t){const n=Jn(t,this.size,4);e.uniform4fv(this.addr,n)}function sp(e,t){const n=Jn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function op(e,t){const n=Jn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ap(e,t){const n=Jn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function cp(e,t,n){const i=t.length,r=Ma(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(t[s]||ma,r[s])}function lp(e,t,n){const i=t.length,r=Ma(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(t[s]||ga,r[s])}function hp(e){switch(e){case 5126:return Qd;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return op;case 35676:return ap;case 5124:case 35670:return Kd;case 35667:case 35671:return $d;case 35668:case 35672:return tp;case 35669:case 35673:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35680:case 36300:case 36308:case 36293:return lp}}function up(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jd(t.type)}function wa(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=hp(t.type)}wa.prototype.updateCache=function(e){const t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),de(t,e)};function Sa(e){this.id=e,this.seq=[],this.map={}}Sa.prototype.setValue=function(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}};const Fs=/(\w+)(\])?(\[|\.)?/g;function Ea(e,t){e.seq.push(t),e.map[t.id]=t}function fp(e,t,n){const i=e.name,r=i.length;for(Fs.lastIndex=0;;){const s=Fs.exec(i),o=Fs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ea(n,l===void 0?new up(a,e,t):new wa(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new Sa(a),Ea(n,h)),n=h}}}function cn(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);fp(r,s,this)}}cn.prototype.setValue=function(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)},cn.prototype.setOptional=function(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)},cn.upload=function(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}},cn.seqWithValue=function(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n};function Ta(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let dp=0;function pp(e){const t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Aa(e){switch(e){case _i:return["Linear","( value )"];case $o:return["sRGB","( value )"];case _h:return["RGBE","( value )"];case Mh:return["RGBM","( value, 7.0 )"];case wh:return["RGBM","( value, 16.0 )"];case Sh:return["RGBD","( value, 256.0 )"];case xh:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case bh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function La(e,t,n){const i=e.getShaderParameter(t,35713),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+pp(s)}function Di(e,t){const n=Aa(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function mp(e,t){const n=Aa(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function gp(e,t){let n;switch(t){case vl:n="Linear";break;case xl:n="Reinhard";break;case _l:n="OptimizedCineon";break;case bl:n="ACESFilmic";break;case Ml:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yp(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function vp(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function xp(e,t){const n={},i=e.getProgramParameter(t,35721);for(let r=0;r<i;r++){const o=e.getActiveAttrib(t,r).name;n[o]=e.getAttribLocation(t,o)}return n}function Oi(e){return e!==""}function Ca(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ra(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bs(e){return e.replace(_p,bp)}function bp(e,t){const n=Tt[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return Bs(n)}const Mp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(e){return e.replace(wp,Ia).replace(Mp,Sp)}function Sp(e,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ia(e,t,n,i)}function Ia(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Da(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ep(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Lo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Tp(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case $r:case ts:t="ENVMAP_TYPE_CUBE";break;case es:case ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ap(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ts:case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Lp(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case $i:t="ENVMAP_BLENDING_MULTIPLY";break;case gl:t="ENVMAP_BLENDING_MIX";break;case yl:t="ENVMAP_BLENDING_ADD";break}return t}function Cp(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Ep(n),l=Tp(n),u=Ap(n),h=Lp(n),f=e.gammaFactor>0?e.gammaFactor:1,d=n.isWebGL2?"":yp(n),m=vp(s),v=r.createProgram();let y,g,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=[m].filter(Oi).join(`
`),y.length>0&&(y+=`
`),g=[d,m].filter(Oi).join(`
`),g.length>0&&(g+=`
`)):(y=[Da(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),g=[d,Da(n),"#define SHADER_NAME "+n.shaderName,m,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?Tt.tonemapping_pars_fragment:"",n.toneMapping!==yi?gp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Tt.encodings_pars_fragment,n.map?Di("mapTexelToLinear",n.mapEncoding):"",n.matcap?Di("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Di("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Di("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Di("lightMapTexelToLinear",n.lightMapEncoding):"",mp("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Bs(o),o=Ca(o,n),o=Ra(o,n),a=Bs(a),a=Ca(a,n),a=Ra(a,n),o=Pa(o),a=Pa(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===ta?"":"out highp vec4 pc_fragColor;",n.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=p+y+o,T=p+g+a,E=Ta(r,35633,S),b=Ta(r,35632,T);if(r.attachShader(v,E),r.attachShader(v,b),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),e.debug.checkShaderErrors){const P=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(E).trim(),O=r.getShaderInfoLog(b).trim();let z=!0,N=!0;if(r.getProgramParameter(v,35714)===!1){z=!1;const C=La(r,E,"vertex"),R=La(r,b,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",P,C,R)}else P!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",P):(I===""||O==="")&&(N=!1);N&&(this.diagnostics={runnable:z,programLog:P,vertexShader:{log:I,prefix:y},fragmentShader:{log:O,prefix:g}})}r.deleteShader(E),r.deleteShader(b);let L;this.getUniforms=function(){return L===void 0&&(L=new cn(r,v)),L};let H;return this.getAttributes=function(){return H===void 0&&(H=xp(r,v)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=n.shaderName,this.id=dp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}function Rp(e,t,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(b){const H=b.skeleton.bones;if(l)return 1024;{const I=Math.floor((u-20)/4),O=Math.min(I,H.length);return O<H.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+H.length+" bones. This GPU supports "+O+"."),0):O}}function y(b){let L;return b&&b.isTexture?L=b.encoding:b&&b.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),L=b.texture.encoding):L=_i,L}function g(b,L,H,P,I){const O=P.fog,z=b.isMeshStandardMaterial?P.environment:null,N=t.get(b.envMap||z),C=d[b.type],R=I.isSkinnedMesh?v(I):0;b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let B,V;if(C){const rt=Le[C];B=rt.vertexShader,V=rt.fragmentShader}else B=b.vertexShader,V=b.fragmentShader;const Y=e.getRenderTarget();return{isWebGL2:a,shaderID:C,shaderName:b.type,vertexShader:B,fragmentShader:V,defines:b.defines,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:I.isInstancedMesh===!0,instancingColor:I.isInstancedMesh===!0&&I.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Y!==null?y(Y.texture):e.outputEncoding,map:!!b.map,mapEncoding:y(b.map),matcap:!!b.matcap,matcapEncoding:y(b.matcap),envMap:!!N,envMapMode:N&&N.mapping,envMapEncoding:y(N),envMapCubeUV:!!N&&(N.mapping===es||N.mapping===ns),lightMap:!!b.lightMap,lightMapEncoding:y(b.lightMap),aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:y(b.emissiveMap),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Ah,tangentSpaceNormalMap:b.normalMapType===In,clearcoatMap:!!b.clearcoatMap,clearcoatRoughnessMap:!!b.clearcoatRoughnessMap,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,transmissionMap:!!b.transmissionMap,combine:b.combine,vertexTangents:b.normalMap&&b.vertexTangents,vertexColors:b.vertexColors,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.transmissionMap)&&!!b.displacementMap,fog:!!O,useFog:b.fog,fogExp2:O&&O.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c,skinning:b.skinning&&R>0,maxBones:R,useVertexTexture:l,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&H.length>0,shadowMapType:e.shadowMap.type,toneMapping:b.toneMapped?e.toneMapping:yi,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:b.side===Ki,flipSided:b.side===Yt,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.fragmentShader),L.push(b.vertexShader)),b.defines!==void 0)for(const H in b.defines)L.push(H),L.push(b.defines[H]);if(b.isRawShaderMaterial===!1){for(let H=0;H<m.length;H++)L.push(b[m[H]]);L.push(e.outputEncoding),L.push(e.gammaFactor)}return L.push(b.customProgramCacheKey),L.join()}function S(b){const L=d[b.type];let H;if(L){const P=Le[L];H=Wh.clone(P.uniforms)}else H=b.uniforms;return H}function T(b,L){let H;for(let P=0,I=o.length;P<I;P++){const O=o[P];if(O.cacheKey===L){H=O,++H.usedTimes;break}}return H===void 0&&(H=new Cp(e,L,b,r),o.push(H)),H}function E(b){if(--b.usedTimes==0){const L=o.indexOf(b);o[L]=o[o.length-1],o.pop(),b.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:T,releaseProgram:E,programs:o}}function Pp(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function Ip(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Dp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Oa(e){const t=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(f,d,m,v,y,g){let p=t[n];const S=e.get(m);return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,program:S.program||s,groupOrder:v,renderOrder:f.renderOrder,z:y,group:g},t[n]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.program=S.program||s,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=y,p.group=g),n++,p}function c(f,d,m,v,y,g){const p=a(f,d,m,v,y,g);(m.transparent===!0?r:i).push(p)}function l(f,d,m,v,y,g){const p=a(f,d,m,v,y,g);(m.transparent===!0?r:i).unshift(p)}function u(f,d){i.length>1&&i.sort(f||Ip),r.length>1&&r.sort(d||Dp)}function h(){for(let f=n,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function Op(e){let t=new WeakMap;function n(r,s){const o=t.get(r);let a;return o===void 0?(a=new Oa(e),t.set(r,new WeakMap),t.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Oa(e),o.set(s,a))),a}function i(){t=new WeakMap}return{get:n,dispose:i}}function Np(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new w,color:new ft};break;case"SpotLight":n={position:new w,direction:new w,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new w,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new w,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new w,halfWidth:new w,halfHeight:new w};break}return e[t.id]=n,n}}}function Fp(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Bp=0;function zp(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function Up(e,t){const n=new Np,i=Fp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new w);const s=new w,o=new Lt,a=new Lt;function c(u){let h=0,f=0,d=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let m=0,v=0,y=0,g=0,p=0,S=0,T=0,E=0;u.sort(zp);for(let L=0,H=u.length;L<H;L++){const P=u[L],I=P.color,O=P.intensity,z=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*O,f+=I.g*O,d+=I.b*O;else if(P.isLightProbe)for(let C=0;C<9;C++)r.probe[C].addScaledVector(P.sh.coefficients[C],O);else if(P.isDirectionalLight){const C=n.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const R=P.shadow,B=i.get(P);B.shadowBias=R.bias,B.shadowNormalBias=R.normalBias,B.shadowRadius=R.radius,B.shadowMapSize=R.mapSize,r.directionalShadow[m]=B,r.directionalShadowMap[m]=N,r.directionalShadowMatrix[m]=P.shadow.matrix,S++}r.directional[m]=C,m++}else if(P.isSpotLight){const C=n.get(P);if(C.position.setFromMatrixPosition(P.matrixWorld),C.color.copy(I).multiplyScalar(O),C.distance=z,C.coneCos=Math.cos(P.angle),C.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),C.decay=P.decay,P.castShadow){const R=P.shadow,B=i.get(P);B.shadowBias=R.bias,B.shadowNormalBias=R.normalBias,B.shadowRadius=R.radius,B.shadowMapSize=R.mapSize,r.spotShadow[y]=B,r.spotShadowMap[y]=N,r.spotShadowMatrix[y]=P.shadow.matrix,E++}r.spot[y]=C,y++}else if(P.isRectAreaLight){const C=n.get(P);C.color.copy(I).multiplyScalar(O),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=C,g++}else if(P.isPointLight){const C=n.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),C.distance=P.distance,C.decay=P.decay,P.castShadow){const R=P.shadow,B=i.get(P);B.shadowBias=R.bias,B.shadowNormalBias=R.normalBias,B.shadowRadius=R.radius,B.shadowMapSize=R.mapSize,B.shadowCameraNear=R.camera.near,B.shadowCameraFar=R.camera.far,r.pointShadow[v]=B,r.pointShadowMap[v]=N,r.pointShadowMatrix[v]=P.shadow.matrix,T++}r.point[v]=C,v++}else if(P.isHemisphereLight){const C=n.get(P);C.skyColor.copy(P.color).multiplyScalar(O),C.groundColor.copy(P.groundColor).multiplyScalar(O),r.hemi[p]=C,p++}}g>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=d;const b=r.hash;(b.directionalLength!==m||b.pointLength!==v||b.spotLength!==y||b.rectAreaLength!==g||b.hemiLength!==p||b.numDirectionalShadows!==S||b.numPointShadows!==T||b.numSpotShadows!==E)&&(r.directional.length=m,r.spot.length=y,r.rectArea.length=g,r.point.length=v,r.hemi.length=p,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotShadowMatrix.length=E,b.directionalLength=m,b.pointLength=v,b.spotLength=y,b.rectAreaLength=g,b.hemiLength=p,b.numDirectionalShadows=S,b.numPointShadows=T,b.numSpotShadows=E,r.version=Bp++)}function l(u,h){let f=0,d=0,m=0,v=0,y=0;const g=h.matrixWorldInverse;for(let p=0,S=u.length;p<S;p++){const T=u[p];if(T.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(T.isSpotLight){const E=r.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),a.identity(),o.copy(T.matrixWorld),o.premultiply(g),a.extractRotation(o),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const E=r.hemi[y];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(g),E.direction.normalize(),y++}}}return{setup:c,setupView:l,state:r}}function Na(e,t){const n=new Up(e,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){n.setup(i)}function l(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Hp(e,t){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Na(e,t),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new Na(e,t),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function vn(e){dt.call(this),this.type="MeshDepthMaterial",this.depthPacking=Eh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}vn.prototype=Object.create(dt.prototype),vn.prototype.constructor=vn,vn.prototype.isMeshDepthMaterial=!0,vn.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function xn(e){dt.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}xn.prototype=Object.create(dt.prototype),xn.prototype.constructor=xn,xn.prototype.isMeshDistanceMaterial=!0,xn.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var Gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Fa(e,t,n){let i=new Cr;const r=new W,s=new W,o=new Dt,a=[],c=[],l={},u={0:Yt,1:Qi,2:Ki},h=new ce({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:kp,fragmentShader:Gp}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const d=new Ht;d.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Jt(d,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo,this.render=function(E,b,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;const H=e.getRenderTarget(),P=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),O=e.state;O.setBlending(mi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let z=0,N=E.length;z<N;z++){const C=E[z],R=C.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const B=R.getFrameExtents();if(r.multiply(B),s.copy(R.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/B.x),r.x=s.x*B.x,R.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/B.y),r.y=s.y*B.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===pi){const Y={minFilter:te,magFilter:te,format:_e};R.map=new Mi(r.x,r.y,Y),R.map.texture.name=C.name+".shadowMap",R.mapPass=new Mi(r.x,r.y,Y),R.camera.updateProjectionMatrix()}if(R.map===null){const Y={minFilter:ie,magFilter:ie,format:_e};R.map=new Mi(r.x,r.y,Y),R.map.texture.name=C.name+".shadowMap",R.camera.updateProjectionMatrix()}e.setRenderTarget(R.map),e.clear();const V=R.getViewportCount();for(let Y=0;Y<V;Y++){const $=R.getViewport(Y);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),O.viewport(o),R.updateMatrices(C,Y),i=R.getFrustum(),T(b,L,R.camera,C,this.type)}!R.isPointLightShadow&&this.type===pi&&y(R,L),R.needsUpdate=!1}v.needsUpdate=!1,e.setRenderTarget(H,P,I)};function y(E,b){const L=t.update(m);h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(b,null,L,h,m,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(b,null,L,f,m,null)}function g(E,b,L){const H=E<<0|b<<1|L<<2;let P=a[H];return P===void 0&&(P=new vn({depthPacking:Th,morphTargets:E,skinning:b}),a[H]=P),P}function p(E,b,L){const H=E<<0|b<<1|L<<2;let P=c[H];return P===void 0&&(P=new xn({morphTargets:E,skinning:b}),c[H]=P),P}function S(E,b,L,H,P,I,O){let z=null,N=g,C=E.customDepthMaterial;if(H.isPointLight===!0&&(N=p,C=E.customDistanceMaterial),C===void 0){let R=!1;L.morphTargets===!0&&(R=b.morphAttributes&&b.morphAttributes.position&&b.morphAttributes.position.length>0);let B=!1;E.isSkinnedMesh===!0&&(L.skinning===!0?B=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",E));const V=E.isInstancedMesh===!0;z=N(R,B,V)}else z=C;if(e.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0){const R=z.uuid,B=L.uuid;let V=l[R];V===void 0&&(V={},l[R]=V);let Y=V[B];Y===void 0&&(Y=z.clone(),V[B]=Y),z=Y}return z.visible=L.visible,z.wireframe=L.wireframe,O===pi?z.side=L.shadowSide!==null?L.shadowSide:L.side:z.side=L.shadowSide!==null?L.shadowSide:u[L.side],z.clipShadows=L.clipShadows,z.clippingPlanes=L.clippingPlanes,z.clipIntersection=L.clipIntersection,z.wireframeLinewidth=L.wireframeLinewidth,z.linewidth=L.linewidth,H.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(H.matrixWorld),z.nearDistance=P,z.farDistance=I),z}function T(E,b,L,H,P){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===pi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const z=t.update(E),N=E.material;if(Array.isArray(N)){const C=z.groups;for(let R=0,B=C.length;R<B;R++){const V=C[R],Y=N[V.materialIndex];if(Y&&Y.visible){const $=S(E,z,Y,H,L.near,L.far,P);e.renderBufferDirect(L,null,z,$,E,V)}}}else if(N.visible){const C=S(E,z,N,H,L.near,L.far,P);e.renderBufferDirect(L,null,z,C,E,null)}}const O=E.children;for(let z=0,N=O.length;z<N;z++)T(O[z],b,L,H,P)}}function Vp(e,t,n){const i=n.isWebGL2;function r(){let A=!1;const X=new Dt;let et=null;const at=new Dt(0,0,0,0);return{setMask:function(J){et!==J&&!A&&(e.colorMask(J,J,J,J),et=J)},setLocked:function(J){A=J},setClear:function(J,ot,ht,vt,st){st===!0&&(J*=vt,ot*=vt,ht*=vt),X.set(J,ot,ht,vt),at.equals(X)===!1&&(e.clearColor(J,ot,ht,vt),at.copy(X))},reset:function(){A=!1,et=null,at.set(-1,0,0,0)}}}function s(){let A=!1,X=null,et=null,at=null;return{setTest:function(J){J?rt(2929):it(2929)},setMask:function(J){X!==J&&!A&&(e.depthMask(J),X=J)},setFunc:function(J){if(et!==J){if(J)switch(J){case ll:e.depthFunc(512);break;case hl:e.depthFunc(519);break;case ul:e.depthFunc(513);break;case Kr:e.depthFunc(515);break;case fl:e.depthFunc(514);break;case dl:e.depthFunc(518);break;case pl:e.depthFunc(516);break;case ml:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);et=J}},setLocked:function(J){A=J},setClear:function(J){at!==J&&(e.clearDepth(J),at=J)},reset:function(){A=!1,X=null,et=null,at=null}}}function o(){let A=!1,X=null,et=null,at=null,J=null,ot=null,ht=null,vt=null,st=null;return{setTest:function(pt){A||(pt?rt(2960):it(2960))},setMask:function(pt){X!==pt&&!A&&(e.stencilMask(pt),X=pt)},setFunc:function(pt,kt,oe){(et!==pt||at!==kt||J!==oe)&&(e.stencilFunc(pt,kt,oe),et=pt,at=kt,J=oe)},setOp:function(pt,kt,oe){(ot!==pt||ht!==kt||vt!==oe)&&(e.stencilOp(pt,kt,oe),ot=pt,ht=kt,vt=oe)},setLocked:function(pt){A=pt},setClear:function(pt){st!==pt&&(e.clearStencil(pt),st=pt)},reset:function(){A=!1,X=null,et=null,at=null,J=null,ot=null,ht=null,vt=null,st=null}}}const a=new r,c=new s,l=new o;let u={},h=null,f=null,d=null,m=null,v=null,y=null,g=null,p=null,S=null,T=!1,E=null,b=null,L=null,H=null,P=null;const I=e.getParameter(35661);let O=!1,z=0;const N=e.getParameter(7938);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=z>=2);let C=null,R={};const B=new Dt,V=new Dt;function Y(A,X,et){const at=new Uint8Array(4),J=e.createTexture();e.bindTexture(A,J),e.texParameteri(A,10241,9728),e.texParameteri(A,10240,9728);for(let ot=0;ot<et;ot++)e.texImage2D(X+ot,0,6408,1,1,0,6408,5121,at);return J}const $={};$[3553]=Y(3553,3553,1),$[34067]=Y(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),rt(2929),c.setFunc(Kr),gt(!1),Rt(Ao),rt(2884),G(mi);function rt(A){u[A]!==!0&&(e.enable(A),u[A]=!0)}function it(A){u[A]!==!1&&(e.disable(A),u[A]=!1)}function _t(A){return h!==A?(e.useProgram(A),h=A,!0):!1}const bt={[Ln]:32774,[Kc]:32778,[$c]:32779};if(i)bt[Do]=32775,bt[Oo]=32776;else{const A=t.get("EXT_blend_minmax");A!==null&&(bt[Do]=A.MIN_EXT,bt[Oo]=A.MAX_EXT)}const Nt={[tl]:0,[el]:1,[nl]:768,[No]:770,[cl]:776,[ol]:774,[rl]:772,[il]:769,[Fo]:771,[al]:775,[sl]:773};function G(A,X,et,at,J,ot,ht,vt){if(A===mi){f&&(it(3042),f=!1);return}if(f||(rt(3042),f=!0),A!==Qc){if(A!==d||vt!==T){if((m!==Ln||g!==Ln)&&(e.blendEquation(32774),m=Ln,g=Ln),vt)switch(A){case gi:e.blendFuncSeparate(1,771,1,771);break;case Ro:e.blendFunc(1,1);break;case Po:e.blendFuncSeparate(0,0,769,771);break;case Io:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case gi:e.blendFuncSeparate(770,771,1,771);break;case Ro:e.blendFunc(770,1);break;case Po:e.blendFunc(0,769);break;case Io:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}v=null,y=null,p=null,S=null,d=A,T=vt}return}J=J||X,ot=ot||et,ht=ht||at,(X!==m||J!==g)&&(e.blendEquationSeparate(bt[X],bt[J]),m=X,g=J),(et!==v||at!==y||ot!==p||ht!==S)&&(e.blendFuncSeparate(Nt[et],Nt[at],Nt[ot],Nt[ht]),v=et,y=at,p=ot,S=ht),d=A,T=null}function $t(A,X){A.side===Ki?it(2884):rt(2884);let et=A.side===Yt;X&&(et=!et),gt(et),A.blending===gi&&A.transparent===!1?G(mi):G(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const at=A.stencilWrite;l.setTest(at),at&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Pt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits)}function gt(A){E!==A&&(A?e.frontFace(2304):e.frontFace(2305),E=A)}function Rt(A){A!==Yc?(rt(2884),A!==b&&(A===Ao?e.cullFace(1029):A===Zc?e.cullFace(1028):e.cullFace(1032))):it(2884),b=A}function yt(A){A!==L&&(O&&e.lineWidth(A),L=A)}function Pt(A,X,et){A?(rt(32823),(H!==X||P!==et)&&(e.polygonOffset(X,et),H=X,P=et)):it(32823)}function Et(A){A?rt(3089):it(3089)}function j(A){A===void 0&&(A=33984+I-1),C!==A&&(e.activeTexture(A),C=A)}function Z(A,X){C===null&&j();let et=R[C];et===void 0&&(et={type:void 0,texture:void 0},R[C]=et),(et.type!==A||et.texture!==X)&&(e.bindTexture(A,X||$[A]),et.type=A,et.texture=X)}function K(){const A=R[C];A!==void 0&&A.type!==void 0&&(e.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function lt(){try{e.compressedTexImage2D.apply(e,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function nt(){try{e.texImage2D.apply(e,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function M(){try{e.texImage3D.apply(e,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function x(A){B.equals(A)===!1&&(e.scissor(A.x,A.y,A.z,A.w),B.copy(A))}function q(A){V.equals(A)===!1&&(e.viewport(A.x,A.y,A.z,A.w),V.copy(A))}function k(){u={},C=null,R={},h=null,f=null,d=null,m=null,v=null,y=null,g=null,p=null,S=null,T=!1,E=null,b=null,L=null,H=null,P=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:rt,disable:it,useProgram:_t,setBlending:G,setMaterial:$t,setFlipSided:gt,setCullFace:Rt,setLineWidth:yt,setPolygonOffset:Pt,setScissorTest:Et,activeTexture:j,bindTexture:Z,unbindTexture:K,compressedTexImage2D:lt,texImage2D:nt,texImage3D:M,scissor:x,viewport:q,reset:k}}function Wp(e,t,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=new WeakMap;let d,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function v(M,x){return m?new OffscreenCanvas(M,x):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(M,x,q,k){let A=1;if((M.width>k||M.height>k)&&(A=k/Math.max(M.width,M.height)),A<1||x===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const X=x?mt.floorPowerOfTwo:Math.floor,et=X(A*M.width),at=X(A*M.height);d===void 0&&(d=v(et,at));const J=q?v(et,at):d;return J.width=et,J.height=at,J.getContext("2d").drawImage(M,0,0,et,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+et+"x"+at+")."),J}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function g(M){return mt.isPowerOfTwo(M.width)&&mt.isPowerOfTwo(M.height)}function p(M){return a?!1:M.wrapS!==le||M.wrapT!==le||M.minFilter!==ie&&M.minFilter!==te}function S(M,x){return M.generateMipmaps&&x&&M.minFilter!==ie&&M.minFilter!==te}function T(M,x,q,k){e.generateMipmap(M);const A=i.get(x);A.__maxMipLevel=Math.log(Math.max(q,k))*Math.LOG2E}function E(M,x,q){if(a===!1)return x;if(M!==null){if(e[M]!==void 0)return e[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let k=x;return x===6403&&(q===5126&&(k=33326),q===5131&&(k=33325),q===5121&&(k=33321)),x===6407&&(q===5126&&(k=34837),q===5131&&(k=34843),q===5121&&(k=32849)),x===6408&&(q===5126&&(k=34836),q===5131&&(k=34842),q===5121&&(k=32856)),(k===33325||k===33326||k===34842||k===34836)&&t.get("EXT_color_buffer_float"),k}function b(M){return M===ie||M===Ho||M===Go?9728:9729}function L(M){const x=M.target;x.removeEventListener("dispose",L),P(x),x.isVideoTexture&&f.delete(x),o.memory.textures--}function H(M){const x=M.target;x.removeEventListener("dispose",H),I(x),o.memory.textures--}function P(M){const x=i.get(M);x.__webglInit!==void 0&&(e.deleteTexture(x.__webglTexture),i.remove(M))}function I(M){const x=i.get(M),q=i.get(M.texture);if(!!M){if(q.__webglTexture!==void 0&&e.deleteTexture(q.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++)e.deleteFramebuffer(x.__webglFramebuffer[k]),x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[k]);else e.deleteFramebuffer(x.__webglFramebuffer),x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer&&e.deleteRenderbuffer(x.__webglColorRenderbuffer),x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer);i.remove(M.texture),i.remove(M)}}let O=0;function z(){O=0}function N(){const M=O;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),O+=1,M}function C(M,x){const q=i.get(M);if(M.isVideoTexture&&j(M),M.version>0&&q.__version!==M.version){const k=M.image;if(k===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(q,M,x);return}}n.activeTexture(33984+x),n.bindTexture(3553,q.__webglTexture)}function R(M,x){const q=i.get(M);if(M.version>0&&q.__version!==M.version){_t(q,M,x);return}n.activeTexture(33984+x),n.bindTexture(35866,q.__webglTexture)}function B(M,x){const q=i.get(M);if(M.version>0&&q.__version!==M.version){_t(q,M,x);return}n.activeTexture(33984+x),n.bindTexture(32879,q.__webglTexture)}function V(M,x){const q=i.get(M);if(M.version>0&&q.__version!==M.version){bt(q,M,x);return}n.activeTexture(33984+x),n.bindTexture(34067,q.__webglTexture)}const Y={[is]:10497,[le]:33071,[rs]:33648},$={[ie]:9728,[Ho]:9984,[Go]:9986,[te]:9729,[wl]:9985,[tr]:9987};function rt(M,x,q){q?(e.texParameteri(M,10242,Y[x.wrapS]),e.texParameteri(M,10243,Y[x.wrapT]),(M===32879||M===35866)&&e.texParameteri(M,32882,Y[x.wrapR]),e.texParameteri(M,10240,$[x.magFilter]),e.texParameteri(M,10241,$[x.minFilter])):(e.texParameteri(M,10242,33071),e.texParameteri(M,10243,33071),(M===32879||M===35866)&&e.texParameteri(M,32882,33071),(x.wrapS!==le||x.wrapT!==le)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(M,10240,b(x.magFilter)),e.texParameteri(M,10241,b(x.minFilter)),x.minFilter!==ie&&x.minFilter!==te&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const k=t.get("EXT_texture_filter_anisotropic");if(k){if(x.type===Ze&&t.get("OES_texture_float_linear")===null||x.type===ir&&(a||t.get("OES_texture_half_float_linear"))===null)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(e.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function it(M,x){M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",L),M.__webglTexture=e.createTexture(),o.memory.textures++)}function _t(M,x,q){let k=3553;x.isDataTexture2DArray&&(k=35866),x.isDataTexture3D&&(k=32879),it(M,x),n.activeTexture(33984+q),n.bindTexture(k,M.__webglTexture),e.pixelStorei(37440,x.flipY),e.pixelStorei(37441,x.premultiplyAlpha),e.pixelStorei(3317,x.unpackAlignment);const A=p(x)&&g(x.image)===!1,X=y(x.image,A,!1,u),et=g(X)||a,at=s.convert(x.format);let J=s.convert(x.type),ot=E(x.internalFormat,at,J);rt(k,x,et);let ht;const vt=x.mipmaps;if(x.isDepthTexture)ot=6402,a?x.type===Ze?ot=36012:x.type===nr?ot=33190:x.type===vi?ot=35056:ot=33189:x.type===Ze&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Cn&&ot===6402&&x.type!==er&&x.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=er,J=s.convert(x.type)),x.format===xi&&ot===6402&&(ot=34041,x.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=vi,J=s.convert(x.type))),n.texImage2D(3553,0,ot,X.width,X.height,0,at,J,null);else if(x.isDataTexture)if(vt.length>0&&et){for(let st=0,pt=vt.length;st<pt;st++)ht=vt[st],n.texImage2D(3553,st,ot,ht.width,ht.height,0,at,J,ht.data);x.generateMipmaps=!1,M.__maxMipLevel=vt.length-1}else n.texImage2D(3553,0,ot,X.width,X.height,0,at,J,X.data),M.__maxMipLevel=0;else if(x.isCompressedTexture){for(let st=0,pt=vt.length;st<pt;st++)ht=vt[st],x.format!==_e&&x.format!==dn?at!==null?n.compressedTexImage2D(3553,st,ot,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,st,ot,ht.width,ht.height,0,at,J,ht.data);M.__maxMipLevel=vt.length-1}else if(x.isDataTexture2DArray)n.texImage3D(35866,0,ot,X.width,X.height,X.depth,0,at,J,X.data),M.__maxMipLevel=0;else if(x.isDataTexture3D)n.texImage3D(32879,0,ot,X.width,X.height,X.depth,0,at,J,X.data),M.__maxMipLevel=0;else if(vt.length>0&&et){for(let st=0,pt=vt.length;st<pt;st++)ht=vt[st],n.texImage2D(3553,st,ot,at,J,ht);x.generateMipmaps=!1,M.__maxMipLevel=vt.length-1}else n.texImage2D(3553,0,ot,at,J,X),M.__maxMipLevel=0;S(x,et)&&T(k,x,X.width,X.height),M.__version=x.version,x.onUpdate&&x.onUpdate(x)}function bt(M,x,q){if(x.image.length!==6)return;it(M,x),n.activeTexture(33984+q),n.bindTexture(34067,M.__webglTexture),e.pixelStorei(37440,x.flipY),e.pixelStorei(37441,x.premultiplyAlpha),e.pixelStorei(3317,x.unpackAlignment);const k=x&&(x.isCompressedTexture||x.image[0].isCompressedTexture),A=x.image[0]&&x.image[0].isDataTexture,X=[];for(let st=0;st<6;st++)!k&&!A?X[st]=y(x.image[st],!1,!0,l):X[st]=A?x.image[st].image:x.image[st];const et=X[0],at=g(et)||a,J=s.convert(x.format),ot=s.convert(x.type),ht=E(x.internalFormat,J,ot);rt(34067,x,at);let vt;if(k){for(let st=0;st<6;st++){vt=X[st].mipmaps;for(let pt=0;pt<vt.length;pt++){const kt=vt[pt];x.format!==_e&&x.format!==dn?J!==null?n.compressedTexImage2D(34069+st,pt,ht,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+st,pt,ht,kt.width,kt.height,0,J,ot,kt.data)}}M.__maxMipLevel=vt.length-1}else{vt=x.mipmaps;for(let st=0;st<6;st++)if(A){n.texImage2D(34069+st,0,ht,X[st].width,X[st].height,0,J,ot,X[st].data);for(let pt=0;pt<vt.length;pt++){const oe=vt[pt].image[st].image;n.texImage2D(34069+st,pt+1,ht,oe.width,oe.height,0,J,ot,oe.data)}}else{n.texImage2D(34069+st,0,ht,J,ot,X[st]);for(let pt=0;pt<vt.length;pt++){const kt=vt[pt];n.texImage2D(34069+st,pt+1,ht,J,ot,kt.image[st])}}M.__maxMipLevel=vt.length}S(x,at)&&T(34067,x,et.width,et.height),M.__version=x.version,x.onUpdate&&x.onUpdate(x)}function Nt(M,x,q,k){const A=s.convert(x.texture.format),X=s.convert(x.texture.type),et=E(x.texture.internalFormat,A,X);n.texImage2D(k,0,et,x.width,x.height,0,A,X,null),e.bindFramebuffer(36160,M),e.framebufferTexture2D(36160,q,k,i.get(x.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function G(M,x,q){if(e.bindRenderbuffer(36161,M),x.depthBuffer&&!x.stencilBuffer){let k=33189;if(q){const A=x.depthTexture;A&&A.isDepthTexture&&(A.type===Ze?k=36012:A.type===nr&&(k=33190));const X=Et(x);e.renderbufferStorageMultisample(36161,X,k,x.width,x.height)}else e.renderbufferStorage(36161,k,x.width,x.height);e.framebufferRenderbuffer(36160,36096,36161,M)}else if(x.depthBuffer&&x.stencilBuffer){if(q){const k=Et(x);e.renderbufferStorageMultisample(36161,k,35056,x.width,x.height)}else e.renderbufferStorage(36161,34041,x.width,x.height);e.framebufferRenderbuffer(36160,33306,36161,M)}else{const k=s.convert(x.texture.format),A=s.convert(x.texture.type),X=E(x.texture.internalFormat,k,A);if(q){const et=Et(x);e.renderbufferStorageMultisample(36161,et,X,x.width,x.height)}else e.renderbufferStorage(36161,X,x.width,x.height)}e.bindRenderbuffer(36161,null)}function $t(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),C(x.depthTexture,0);const k=i.get(x.depthTexture).__webglTexture;if(x.depthTexture.format===Cn)e.framebufferTexture2D(36160,36096,3553,k,0);else if(x.depthTexture.format===xi)e.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function gt(M){const x=i.get(M),q=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");$t(x.__webglFramebuffer,M)}else if(q){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)e.bindFramebuffer(36160,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]=e.createRenderbuffer(),G(x.__webglDepthbuffer[k],M,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=e.createRenderbuffer(),G(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function Rt(M){const x=i.get(M),q=i.get(M.texture);M.addEventListener("dispose",H),q.__webglTexture=e.createTexture(),o.memory.textures++;const k=M.isWebGLCubeRenderTarget===!0,A=M.isWebGLMultisampleRenderTarget===!0,X=g(M)||a;if(a&&M.texture.format===dn&&(M.texture.type===Ze||M.texture.type===ir)&&(M.texture.format=_e,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),k){x.__webglFramebuffer=[];for(let et=0;et<6;et++)x.__webglFramebuffer[et]=e.createFramebuffer()}else if(x.__webglFramebuffer=e.createFramebuffer(),A)if(a){x.__webglMultisampledFramebuffer=e.createFramebuffer(),x.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,x.__webglColorRenderbuffer);const et=s.convert(M.texture.format),at=s.convert(M.texture.type),J=E(M.texture.internalFormat,et,at),ot=Et(M);e.renderbufferStorageMultisample(36161,ot,J,M.width,M.height),e.bindFramebuffer(36160,x.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,x.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),M.depthBuffer&&(x.__webglDepthRenderbuffer=e.createRenderbuffer(),G(x.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(k){n.bindTexture(34067,q.__webglTexture),rt(34067,M.texture,X);for(let et=0;et<6;et++)Nt(x.__webglFramebuffer[et],M,36064,34069+et);S(M.texture,X)&&T(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,q.__webglTexture),rt(3553,M.texture,X),Nt(x.__webglFramebuffer,M,36064,3553),S(M.texture,X)&&T(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&gt(M)}function yt(M){const x=M.texture,q=g(M)||a;if(S(x,q)){const k=M.isWebGLCubeRenderTarget?34067:3553,A=i.get(x).__webglTexture;n.bindTexture(k,A),T(k,x,M.width,M.height),n.bindTexture(k,null)}}function Pt(M){if(M.isWebGLMultisampleRenderTarget)if(a){const x=i.get(M);e.bindFramebuffer(36008,x.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,x.__webglFramebuffer);const q=M.width,k=M.height;let A=16384;M.depthBuffer&&(A|=256),M.stencilBuffer&&(A|=1024),e.blitFramebuffer(0,0,q,k,0,0,q,k,A,9728),e.bindFramebuffer(36160,x.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Et(M){return a&&M.isWebGLMultisampleRenderTarget?Math.min(h,M.samples):0}function j(M){const x=o.render.frame;f.get(M)!==x&&(f.set(M,x),M.update())}let Z=!1,K=!1;function lt(M,x){M&&M.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),M=M.texture),C(M,x)}function nt(M,x){M&&M.isWebGLCubeRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),K=!0),M=M.texture),V(M,x)}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=C,this.setTexture2DArray=R,this.setTexture3D=B,this.setTextureCube=V,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Pt,this.safeSetTexture2D=lt,this.safeSetTextureCube=nt}function jp(e,t,n){const i=n.isWebGL2;function r(s){let o;if(s===ss)return 5121;if(s===Al)return 32819;if(s===Ll)return 32820;if(s===Cl)return 33635;if(s===Sl)return 5120;if(s===El)return 5122;if(s===er)return 5123;if(s===Tl)return 5124;if(s===nr)return 5125;if(s===Ze)return 5126;if(s===ir)return i?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Rl)return 6406;if(s===dn)return 6407;if(s===_e)return 6408;if(s===Pl)return 6409;if(s===Il)return 6410;if(s===Cn)return 6402;if(s===xi)return 34041;if(s===Dl)return 6403;if(s===Ol)return 36244;if(s===Nl)return 33319;if(s===Fl)return 33320;if(s===Bl)return 36248;if(s===zl)return 36249;if(s===ko||s===Vo||s===Wo||s===jo)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qo||s===Xo||s===Yo||s===Zo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===qo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ul)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Jo||s===Qo)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Jo)return o.COMPRESSED_RGB8_ETC2;if(s===Qo)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Hl||s===Gl||s===kl||s===Vl||s===Wl||s===jl||s===ql||s===Xl||s===Yl||s===Zl||s===Jl||s===Ql||s===Kl||s===$l||s===eh||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===ch||s===lh||s===hh||s===uh||s===fh||s===dh||s===ph)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===th)return o=t.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===vi)return i?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function zs(e=[]){Qt.call(this),this.cameras=e}zs.prototype=Object.assign(Object.create(Qt.prototype),{constructor:zs,isArrayCamera:!0});function _n(){ut.call(this),this.type="Group"}_n.prototype=Object.assign(Object.create(ut.prototype),{constructor:_n,isGroup:!0});function Ni(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Ni.prototype,{constructor:Ni,getHandSpace:function(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(c&&e.hand){s=!0;for(const m of e.hand.values()){const v=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const g=new _n;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[m.jointName]=g,c.add(g)}const y=c.joints[m.jointName];v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=v.radius),y.visible=v!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),f=.02,d=.005;c.inputState.pinching&&h>f+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Ba(e,t){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,u=new Qt;u.layers.enable(1),u.viewport=new Dt;const h=new Qt;h.layers.enable(2),h.viewport=new Dt;const f=[u,h],d=new zs;d.layers.enable(1),d.layers.enable(2);let m=null,v=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=c[I];return O===void 0&&(O=new Ni,c[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=c[I];return O===void 0&&(O=new Ni,c[I]=O),O.getGripSpace()},this.getHand=function(I){let O=c[I];return O===void 0&&(O=new Ni,c[I]=O),O.getHandSpace()};function y(I){const O=l.get(I.inputSource);O&&O.dispatchEvent({type:I.type,data:I.inputSource})}function g(){l.forEach(function(I,O){I.disconnect(O)}),l.clear(),m=null,v=null,e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),P.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",g),i.addEventListener("inputsourceschange",p);const O=t.getContextAttributes();O.xrCompatible!==!0&&await t.makeXRCompatible();const z={antialias:O.antialias,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r},N=new XRWebGLLayer(i,t,z);i.updateRenderState({baseLayer:N}),s=await i.requestReferenceSpace(o),P.setContext(i),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function p(I){const O=i.inputSources;for(let z=0;z<c.length;z++)l.set(O[z],c[z]);for(let z=0;z<I.removed.length;z++){const N=I.removed[z],C=l.get(N);C&&(C.dispatchEvent({type:"disconnected",data:N}),l.delete(N))}for(let z=0;z<I.added.length;z++){const N=I.added[z],C=l.get(N);C&&C.dispatchEvent({type:"connected",data:N})}}const S=new w,T=new w;function E(I,O,z){S.setFromMatrixPosition(O.matrixWorld),T.setFromMatrixPosition(z.matrixWorld);const N=S.distanceTo(T),C=O.projectionMatrix.elements,R=z.projectionMatrix.elements,B=C[14]/(C[10]-1),V=C[14]/(C[10]+1),Y=(C[9]+1)/C[5],$=(C[9]-1)/C[5],rt=(C[8]-1)/C[0],it=(R[8]+1)/R[0],_t=B*rt,bt=B*it,Nt=N/(-rt+it),G=Nt*-rt;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(G),I.translateZ(Nt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const $t=B+Nt,gt=V+Nt,Rt=_t-G,yt=bt+(N-G),Pt=Y*V/gt*$t,Et=$*V/gt*$t;I.projectionMatrix.makePerspective(Rt,yt,Pt,Et,$t,gt)}function b(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.getCamera=function(I){d.near=h.near=u.near=I.near,d.far=h.far=u.far=I.far,(m!==d.near||v!==d.far)&&(i.updateRenderState({depthNear:d.near,depthFar:d.far}),m=d.near,v=d.far);const O=I.parent,z=d.cameras;b(d,O);for(let C=0;C<z.length;C++)b(z[C],O);I.matrixWorld.copy(d.matrixWorld),I.matrix.copy(d.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const N=I.children;for(let C=0,R=N.length;C<R;C++)N[C].updateMatrixWorld(!0);return z.length===2?E(d,u,h):d.projectionMatrix.copy(u.projectionMatrix),d};let L=null;function H(I,O){if(a=O.getViewerPose(s),a!==null){const N=a.views,C=i.renderState.baseLayer;e.setFramebuffer(C.framebuffer);let R=!1;N.length!==d.cameras.length&&(d.cameras.length=0,R=!0);for(let B=0;B<N.length;B++){const V=N[B],Y=C.getViewport(V),$=f[B];$.matrix.fromArray(V.transform.matrix),$.projectionMatrix.fromArray(V.projectionMatrix),$.viewport.set(Y.x,Y.y,Y.width,Y.height),B===0&&d.matrix.copy($.matrix),R===!0&&d.cameras.push($)}}const z=i.inputSources;for(let N=0;N<c.length;N++){const C=c[N],R=z[N];C.update(R,O,s)}L&&L(I,O)}const P=new pa;P.setAnimationLoop(H),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}Object.assign(Ba.prototype,Je.prototype);function qp(e){function t(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,S,T){p.isMeshBasicMaterial?i(g,p):p.isMeshLambertMaterial?(i(g,p),c(g,p)):p.isMeshToonMaterial?(i(g,p),u(g,p)):p.isMeshPhongMaterial?(i(g,p),l(g,p)):p.isMeshStandardMaterial?(i(g,p),p.isMeshPhysicalMaterial?f(g,p):h(g,p)):p.isMeshMatcapMaterial?(i(g,p),d(g,p)):p.isMeshDepthMaterial?(i(g,p),m(g,p)):p.isMeshDistanceMaterial?(i(g,p),v(g,p)):p.isMeshNormalMaterial?(i(g,p),y(g,p)):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,S,T):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);const S=e.get(p).envMap;if(S){g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;const b=e.get(S).__maxMipLevel;b!==void 0&&(g.maxMipLevel.value=b)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let T;p.map?T=p.map:p.specularMap?T=p.specularMap:p.displacementMap?T=p.displacementMap:p.normalMap?T=p.normalMap:p.bumpMap?T=p.bumpMap:p.roughnessMap?T=p.roughnessMap:p.metalnessMap?T=p.metalnessMap:p.alphaMap?T=p.alphaMap:p.emissiveMap?T=p.emissiveMap:p.clearcoatMap?T=p.clearcoatMap:p.clearcoatNormalMap?T=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(T=p.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uv2Transform.value.copy(E.matrix))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,S,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=T*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function c(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p){h(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Yt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function d(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function v(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function y(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Xp(){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.style.display="block",e}function Fi(e){e=e||{};const t=e.canvas!==void 0?e.canvas:Xp(),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,s=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,c=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",u=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=_i,this.physicallyCorrectLights=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const m=this;let v=!1,y=null,g=0,p=0,S=null,T=null,E=-1,b=null;const L=new Dt,H=new Dt;let P=null,I=t.width,O=t.height,z=1,N=null,C=null;const R=new Dt(0,0,I,O),B=new Dt(0,0,I,O);let V=!1;const Y=new Cr;let $=!1,rt=!1;const it=new Lt,_t=new w,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return S===null?z:1}let G=n;function $t(_,F){for(let D=0;D<_.length;D++){const U=_[D],tt=t.getContext(U,F);if(tt!==null)return tt}return null}try{const _={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",oe,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&F.shift(),G=$t(F,_),G===null)throw $t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let gt,Rt,yt,Pt,Et,j,Z,K,lt,nt,M,x,q,k,A,X,et,at,J,ot,ht;function vt(){gt=new Sd(G),Rt=new bd(G,gt,e),gt.init(Rt),ot=new jp(G,gt,Rt),yt=new Vp(G,gt,Rt),yt.scissor(H.copy(B).multiplyScalar(z).floor()),yt.viewport(L.copy(R).multiplyScalar(z).floor()),Pt=new Ad(G),Et=new Pp,j=new Wp(G,gt,yt,Et,Rt,ot,Pt),Z=new wd(m),K=new Yh(G,Rt),ht=new xd(G,gt,K,Rt),lt=new Ed(G,K,Pt,ht),nt=new Pd(G,lt,K,Pt),et=new Rd(G),A=new Md(Et),M=new Rp(m,Z,gt,Rt,ht,A),x=new qp(Et),q=new Op(Et),k=new Hp(gt,Rt),X=new vd(m,Z,yt,nt,a),at=new _d(G,gt,Pt,Rt),J=new Td(G,gt,Pt,Rt),Pt.programs=M.programs,m.capabilities=Rt,m.extensions=gt,m.properties=Et,m.renderLists=q,m.state=yt,m.info=Pt}vt();const st=new Ba(m,G);this.xr=st;const pt=new Fa(m,nt,Rt.maxTextureSize);this.shadowMap=pt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const _=gt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=gt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(I,O,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new W),_.set(I,O)},this.setSize=function(_,F,D){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=_,O=F,t.width=Math.floor(_*z),t.height=Math.floor(F*z),D!==!1&&(t.style.width=_+"px",t.style.height=F+"px"),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new W),_.set(I*z,O*z).floor()},this.setDrawingBufferSize=function(_,F,D){I=_,O=F,z=D,t.width=Math.floor(_*D),t.height=Math.floor(F*D),this.setViewport(0,0,_,F)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Dt),_.copy(L)},this.getViewport=function(_){return _.copy(R)},this.setViewport=function(_,F,D,U){_.isVector4?R.set(_.x,_.y,_.z,_.w):R.set(_,F,D,U),yt.viewport(L.copy(R).multiplyScalar(z).floor())},this.getScissor=function(_){return _.copy(B)},this.setScissor=function(_,F,D,U){_.isVector4?B.set(_.x,_.y,_.z,_.w):B.set(_,F,D,U),yt.scissor(H.copy(B).multiplyScalar(z).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(_){yt.setScissorTest(V=_)},this.setOpaqueSort=function(_){N=_},this.setTransparentSort=function(_){C=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new ft),_.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(_,F,D){let U=0;(_===void 0||_)&&(U|=16384),(F===void 0||F)&&(U|=256),(D===void 0||D)&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",oe,!1),q.dispose(),k.dispose(),Et.dispose(),Z.dispose(),nt.dispose(),ht.dispose(),st.dispose(),ui.stop()};function kt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1,vt()}function _o(_){const F=_.target;F.removeEventListener("dispose",_o),Vc(F)}function Vc(_){bo(_),Et.remove(_)}function bo(_){const F=Et.get(_).program;F!==void 0&&M.releaseProgram(F)}function Wc(_,F){_.render(function(D){m.renderBufferImmediate(D,F)})}this.renderBufferImmediate=function(_,F){ht.initAttributes();const D=Et.get(_);_.hasPositions&&!D.position&&(D.position=G.createBuffer()),_.hasNormals&&!D.normal&&(D.normal=G.createBuffer()),_.hasUvs&&!D.uv&&(D.uv=G.createBuffer()),_.hasColors&&!D.color&&(D.color=G.createBuffer());const U=F.getAttributes();_.hasPositions&&(G.bindBuffer(34962,D.position),G.bufferData(34962,_.positionArray,35048),ht.enableAttribute(U.position),G.vertexAttribPointer(U.position,3,5126,!1,0,0)),_.hasNormals&&(G.bindBuffer(34962,D.normal),G.bufferData(34962,_.normalArray,35048),ht.enableAttribute(U.normal),G.vertexAttribPointer(U.normal,3,5126,!1,0,0)),_.hasUvs&&(G.bindBuffer(34962,D.uv),G.bufferData(34962,_.uvArray,35048),ht.enableAttribute(U.uv),G.vertexAttribPointer(U.uv,2,5126,!1,0,0)),_.hasColors&&(G.bindBuffer(34962,D.color),G.bufferData(34962,_.colorArray,35048),ht.enableAttribute(U.color),G.vertexAttribPointer(U.color,3,5126,!1,0,0)),ht.disableUnusedAttributes(),G.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,F,D,U,tt,At){F===null&&(F=bt);const Mt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ct=Eo(_,F,U,tt);yt.setMaterial(U,Mt);let wt=D.index;const jt=D.attributes.position;if(wt===null){if(jt===void 0||jt.count===0)return}else if(wt.count===0)return;let Wt=1;U.wireframe===!0&&(wt=lt.getWireframeAttribute(D),Wt=2),(U.morphTargets||U.morphNormals)&&et.update(tt,D,U,Ct),ht.setup(tt,U,Ct,D,wt);let xt,It=at;wt!==null&&(xt=K.get(wt),It=J,It.setIndex(xt));const Be=wt!==null?wt.count:jt.count,Ut=D.drawRange.start*Wt,fn=D.drawRange.count*Wt,Xt=At!==null?At.start*Wt:0,Qr=At!==null?At.count*Wt:Infinity,ae=Math.max(Ut,Xt),fi=Math.min(Be,Ut+fn,Xt+Qr)-1,An=Math.max(0,fi-ae+1);if(An!==0){if(tt.isMesh)U.wireframe===!0?(yt.setLineWidth(U.wireframeLinewidth*Nt()),It.setMode(1)):It.setMode(4);else if(tt.isLine){let di=U.linewidth;di===void 0&&(di=1),yt.setLineWidth(di*Nt()),tt.isLineSegments?It.setMode(1):tt.isLineLoop?It.setMode(2):It.setMode(3)}else tt.isPoints?It.setMode(0):tt.isSprite&&It.setMode(4);if(tt.isInstancedMesh)It.renderInstances(ae,An,tt.count);else if(D.isInstancedBufferGeometry){const di=Math.min(D.instanceCount,D._maxInstanceCount);It.renderInstances(ae,An,di)}else It.render(ae,An)}},this.compile=function(_,F){f=k.get(_),f.init(),_.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const D=new WeakMap;_.traverse(function(U){const tt=U.material;if(tt)if(Array.isArray(tt))for(let At=0;At<tt.length;At++){const Mt=tt[At];D.has(Mt)===!1&&(Fe(Mt,_,U),D.set(Mt))}else D.has(tt)===!1&&(Fe(tt,_,U),D.set(tt))})};let Jr=null;function jc(_){st.isPresenting||Jr&&Jr(_)}const ui=new pa;ui.setAnimationLoop(jc),typeof window!="undefined"&&ui.setContext(window),this.setAnimationLoop=function(_){Jr=_,st.setAnimationLoop(_),_===null?ui.stop():ui.start()},this.render=function(_,F){let D,U;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),D=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),U=arguments[3]),F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;ht.resetDefaultState(),E=-1,b=null,_.autoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(F=st.getCamera(F)),_.isScene===!0&&_.onBeforeRender(m,_,F,D||S),f=k.get(_,d.length),f.init(),d.push(f),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(it),rt=this.localClippingEnabled,$=A.init(this.clippingPlanes,rt,F),h=q.get(_,F),h.init(),Mo(_,F,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(N,C),$===!0&&A.beginShadows();const tt=f.state.shadowsArray;pt.render(tt,_,F),f.setupLights(),f.setupLightsView(F),$===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),D!==void 0&&this.setRenderTarget(D),X.render(h,_,F,U);const At=h.opaque,Mt=h.transparent;At.length>0&&wo(At,_,F),Mt.length>0&&wo(Mt,_,F),_.isScene===!0&&_.onAfterRender(m,_,F),S!==null&&(j.updateRenderTargetMipmap(S),j.updateMultisampleRenderTarget(S)),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1),d.pop(),d.length>0?f=d[d.length-1]:f=null,h=null};function Mo(_,F,D,U){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)D=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){U&&_t.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const Mt=nt.update(_),Ct=_.material;Ct.visible&&h.push(_,Mt,Ct,D,_t.z,null)}}else if(_.isImmediateRenderObject)U&&_t.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it),h.push(_,null,_.material,D,_t.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==Pt.render.frame&&(_.skeleton.update(),_.skeleton.frame=Pt.render.frame),!_.frustumCulled||Y.intersectsObject(_))){U&&_t.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const Mt=nt.update(_),Ct=_.material;if(Array.isArray(Ct)){const wt=Mt.groups;for(let jt=0,Wt=wt.length;jt<Wt;jt++){const xt=wt[jt],It=Ct[xt.materialIndex];It&&It.visible&&h.push(_,Mt,It,D,_t.z,xt)}}else Ct.visible&&h.push(_,Mt,Ct,D,_t.z,null)}}const At=_.children;for(let Mt=0,Ct=At.length;Mt<Ct;Mt++)Mo(At[Mt],F,D,U)}function wo(_,F,D){const U=F.isScene===!0?F.overrideMaterial:null;for(let tt=0,At=_.length;tt<At;tt++){const Mt=_[tt],Ct=Mt.object,wt=Mt.geometry,jt=U===null?Mt.material:U,Wt=Mt.group;if(D.isArrayCamera){const xt=D.cameras;for(let It=0,Be=xt.length;It<Be;It++){const Ut=xt[It];Ct.layers.test(Ut.layers)&&(yt.viewport(L.copy(Ut.viewport)),f.setupLightsView(Ut),So(Ct,F,Ut,wt,jt,Wt))}}else So(Ct,F,D,wt,jt,Wt)}}function So(_,F,D,U,tt,At){if(_.onBeforeRender(m,F,D,U,tt,At),_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){const Mt=Eo(D,F,tt,_);yt.setMaterial(tt),ht.reset(),Wc(_,Mt)}else m.renderBufferDirect(D,F,U,tt,_,At);_.onAfterRender(m,F,D,U,tt,At)}function Fe(_,F,D){F.isScene!==!0&&(F=bt);const U=Et.get(_),tt=f.state.lights,At=f.state.shadowsArray,Mt=tt.state.version,Ct=M.getParameters(_,tt.state,At,F,D),wt=M.getProgramCacheKey(Ct);let jt=U.program,Wt=!0;if(U.environment=_.isMeshStandardMaterial?F.environment:null,U.fog=F.fog,U.envMap=Z.get(_.envMap||U.environment),jt===void 0)_.addEventListener("dispose",_o);else if(jt.cacheKey!==wt)bo(_);else if(U.lightsStateVersion!==Mt)Wt=!1;else{if(Ct.shaderID!==void 0)return;Wt=!1}Wt&&(Ct.uniforms=M.getUniforms(_),_.onBeforeCompile(Ct,m),jt=M.acquireProgram(Ct,wt),U.program=jt,U.uniforms=Ct.uniforms,U.outputEncoding=Ct.outputEncoding);const xt=U.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(U.numClippingPlanes=A.numPlanes,U.numIntersection=A.numIntersection,xt.clippingPlanes=A.uniform),U.needsLights=Xc(_),U.lightsStateVersion=Mt,U.needsLights&&(xt.ambientLightColor.value=tt.state.ambient,xt.lightProbe.value=tt.state.probe,xt.directionalLights.value=tt.state.directional,xt.directionalLightShadows.value=tt.state.directionalShadow,xt.spotLights.value=tt.state.spot,xt.spotLightShadows.value=tt.state.spotShadow,xt.rectAreaLights.value=tt.state.rectArea,xt.ltc_1.value=tt.state.rectAreaLTC1,xt.ltc_2.value=tt.state.rectAreaLTC2,xt.pointLights.value=tt.state.point,xt.pointLightShadows.value=tt.state.pointShadow,xt.hemisphereLights.value=tt.state.hemi,xt.directionalShadowMap.value=tt.state.directionalShadowMap,xt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,xt.spotShadowMap.value=tt.state.spotShadowMap,xt.spotShadowMatrix.value=tt.state.spotShadowMatrix,xt.pointShadowMap.value=tt.state.pointShadowMap,xt.pointShadowMatrix.value=tt.state.pointShadowMatrix);const It=U.program.getUniforms(),Be=cn.seqWithValue(It.seq,xt);U.uniformsList=Be}function Eo(_,F,D,U){F.isScene!==!0&&(F=bt),j.resetTextureUnits();const tt=F.fog,At=D.isMeshStandardMaterial?F.environment:null,Mt=S===null?m.outputEncoding:S.texture.encoding,Ct=Z.get(D.envMap||At),wt=Et.get(D),jt=f.state.lights;if($===!0&&(rt===!0||_!==b)){const Xt=_===b&&D.id===E;A.setState(D,_,Xt)}D.version===wt.__version?(D.fog&&wt.fog!==tt||wt.environment!==At||wt.needsLights&&wt.lightsStateVersion!==jt.state.version||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==A.numPlanes||wt.numIntersection!==A.numIntersection)||wt.outputEncoding!==Mt||wt.envMap!==Ct)&&Fe(D,F,U):(Fe(D,F,U),wt.__version=D.version);let Wt=!1,xt=!1,It=!1;const Be=wt.program,Ut=Be.getUniforms(),fn=wt.uniforms;if(yt.useProgram(Be.program)&&(Wt=!0,xt=!0,It=!0),D.id!==E&&(E=D.id,xt=!0),Wt||b!==_){if(Ut.setValue(G,"projectionMatrix",_.projectionMatrix),Rt.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),b!==_&&(b=_,xt=!0,It=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Xt=Ut.map.cameraPosition;Xt!==void 0&&Xt.setValue(G,_t.setFromMatrixPosition(_.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",_.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||D.skinning)&&Ut.setValue(G,"viewMatrix",_.matrixWorldInverse)}if(D.skinning){Ut.setOptional(G,U,"bindMatrix"),Ut.setOptional(G,U,"bindMatrixInverse");const Xt=U.skeleton;if(Xt){const Qr=Xt.bones;if(Rt.floatVertexTextures){if(Xt.boneTexture===null){let ae=Math.sqrt(Qr.length*4);ae=mt.ceilPowerOfTwo(ae),ae=Math.max(ae,4);const fi=new Float32Array(ae*ae*4);fi.set(Xt.boneMatrices);const An=new Yn(fi,ae,ae,_e,Ze);Xt.boneMatrices=fi,Xt.boneTexture=An,Xt.boneTextureSize=ae}Ut.setValue(G,"boneTexture",Xt.boneTexture,j),Ut.setValue(G,"boneTextureSize",Xt.boneTextureSize)}else Ut.setOptional(G,Xt,"boneMatrices")}}return(xt||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,Ut.setValue(G,"receiveShadow",U.receiveShadow)),xt&&(Ut.setValue(G,"toneMappingExposure",m.toneMappingExposure),wt.needsLights&&qc(fn,It),tt&&D.fog&&x.refreshFogUniforms(fn,tt),x.refreshMaterialUniforms(fn,D,z,O),cn.upload(G,wt.uniformsList,fn,j)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(cn.upload(G,wt.uniformsList,fn,j),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Ut.setValue(G,"center",U.center),Ut.setValue(G,"modelViewMatrix",U.modelViewMatrix),Ut.setValue(G,"normalMatrix",U.normalMatrix),Ut.setValue(G,"modelMatrix",U.matrixWorld),Be}function qc(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function Xc(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.setFramebuffer=function(_){y!==_&&S===null&&G.bindFramebuffer(36160,_),y=_},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderList=function(){return h},this.setRenderList=function(_){h=_},this.getRenderTarget=function(){return S},this.setRenderTarget=function(_,F=0,D=0){S=_,g=F,p=D,_&&Et.get(_).__webglFramebuffer===void 0&&j.setupRenderTarget(_);let U=y,tt=!1;if(_){const At=Et.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(U=At[F],tt=!0):_.isWebGLMultisampleRenderTarget?U=Et.get(_).__webglMultisampledFramebuffer:U=At,L.copy(_.viewport),H.copy(_.scissor),P=_.scissorTest}else L.copy(R).multiplyScalar(z).floor(),H.copy(B).multiplyScalar(z).floor(),P=V;if(T!==U&&(G.bindFramebuffer(36160,U),T=U),yt.viewport(L),yt.scissor(H),yt.setScissorTest(P),tt){const At=Et.get(_.texture);G.framebufferTexture2D(36160,36064,34069+F,At.__webglTexture,D)}},this.readRenderTargetPixels=function(_,F,D,U,tt,At,Mt){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Et.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){let wt=!1;Ct!==T&&(G.bindFramebuffer(36160,Ct),wt=!0);try{const jt=_.texture,Wt=jt.format,xt=jt.type;if(Wt!==_e&&ot.convert(Wt)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=xt===ir&&(gt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&gt.has("EXT_color_buffer_float"));if(xt!==ss&&ot.convert(xt)!==G.getParameter(35738)&&!(xt===Ze&&(Rt.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?F>=0&&F<=_.width-U&&D>=0&&D<=_.height-tt&&G.readPixels(F,D,U,tt,ot.convert(Wt),ot.convert(xt),At):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{wt&&G.bindFramebuffer(36160,T)}}},this.copyFramebufferToTexture=function(_,F,D=0){const U=Math.pow(2,-D),tt=Math.floor(F.image.width*U),At=Math.floor(F.image.height*U),Mt=ot.convert(F.format);j.setTexture2D(F,0),G.copyTexImage2D(3553,D,Mt,_.x,_.y,tt,At,0),yt.unbindTexture()},this.copyTextureToTexture=function(_,F,D,U=0){const tt=F.image.width,At=F.image.height,Mt=ot.convert(D.format),Ct=ot.convert(D.type);j.setTexture2D(D,0),G.pixelStorei(37440,D.flipY),G.pixelStorei(37441,D.premultiplyAlpha),G.pixelStorei(3317,D.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,U,_.x,_.y,tt,At,Mt,Ct,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,U,_.x,_.y,F.mipmaps[0].width,F.mipmaps[0].height,Mt,F.mipmaps[0].data):G.texSubImage2D(3553,U,_.x,_.y,Mt,Ct,F.image),U===0&&D.generateMipmaps&&G.generateMipmap(3553),yt.unbindTexture()},this.initTexture=function(_){j.setTexture2D(_,0),yt.unbindTexture()},this.resetState=function(){yt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function za(e){Fi.call(this,e)}za.prototype=Object.assign(Object.create(Fi.prototype),{constructor:za,isWebGL1Renderer:!0});class Ua extends ut{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.background!==null&&(n.object.background=this.background.toJSON(t)),this.environment!==null&&(n.object.environment=this.environment.toJSON(t)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function ye(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ar,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=mt.generateUUID()}Object.defineProperty(ye.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(ye.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t=0){return this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mt.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new ye(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mt.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const bn=new w;function Mn(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Object.defineProperties(Mn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}}),Object.assign(Mn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,n=this.data.count;t<n;t++)bn.x=this.getX(t),bn.y=this.getY(t),bn.z=this.getZ(t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function wn(e){dt.call(this),this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}wn.prototype=Object.create(dt.prototype),wn.prototype.constructor=wn,wn.prototype.isSpriteMaterial=!0,wn.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};let Qn;const Bi=new w,Kn=new w,$n=new w,ti=new W,zi=new W,Ha=new Lt,Rr=new w,Ui=new w,Pr=new w,Ga=new W,Us=new W,ka=new W;function Va(e){if(ut.call(this),this.type="Sprite",Qn===void 0){Qn=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ye(t,5);Qn.setIndex([0,1,2,0,2,3]),Qn.setAttribute("position",new Mn(n,3,0,!1)),Qn.setAttribute("uv",new Mn(n,2,3,!1))}this.geometry=Qn,this.material=e!==void 0?e:new wn,this.center=new W(.5,.5)}Va.prototype=Object.assign(Object.create(ut.prototype),{constructor:Va,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kn.setFromMatrixScale(this.matrixWorld),Ha.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$n.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kn.multiplyScalar(-$n.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Ir(Rr.set(-.5,-.5,0),$n,s,Kn,i,r),Ir(Ui.set(.5,-.5,0),$n,s,Kn,i,r),Ir(Pr.set(.5,.5,0),$n,s,Kn,i,r),Ga.set(0,0),Us.set(1,0),ka.set(1,1);let o=e.ray.intersectTriangle(Rr,Ui,Pr,!1,Bi);if(o===null&&(Ir(Ui.set(-.5,.5,0),$n,s,Kn,i,r),Us.set(0,1),o=e.ray.intersectTriangle(Rr,Pr,Ui,!1,Bi),o===null))return;const a=e.ray.origin.distanceTo(Bi);a<e.near||a>e.far||t.push({distance:a,point:Bi.clone(),uv:re.getUV(Bi,Rr,Ui,Pr,Ga,Us,ka,new W),face:null,object:this})},copy:function(e){return ut.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function Ir(e,t,n,i,r,s){ti.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(zi.x=s*ti.x-r*ti.y,zi.y=r*ti.x+s*ti.y):zi.copy(ti),e.copy(t),e.x+=zi.x,e.y+=zi.y,e.applyMatrix4(Ha)}const Dr=new w,Wa=new w;function Hs(){ut.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Hs.prototype=Object.assign(Object.create(ut.prototype),{constructor:Hs,isLOD:!0,copy:function(e){ut.prototype.copy.call(this,e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){if(this.levels.length>0){Dr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Dr);this.getObjectForDistance(i).raycast(e,t)}},update:function(e){const t=this.levels;if(t.length>1){Dr.setFromMatrixPosition(e.matrixWorld),Wa.setFromMatrixPosition(this.matrixWorld);const n=Dr.distanceTo(Wa)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}},toJSON:function(e){const t=ut.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];t.object.levels.push({object:s.object.uuid,distance:s.distance})}return t}});const ja=new w,qa=new Dt,Xa=new Dt,Yp=new w,Ya=new Lt;function Gs(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Jt.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt}Gs.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Gs,isSkinnedMesh:!0,copy:function(e){return Jt.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==Infinity?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){Jt.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(e,t){const n=this.skeleton,i=this.geometry;qa.fromBufferAttribute(i.attributes.skinIndex,e),Xa.fromBufferAttribute(i.attributes.skinWeight,e),ja.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Xa.getComponent(r);if(s!==0){const o=qa.getComponent(r);Ya.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yp.copy(ja).applyMatrix4(Ya),s)}}return t.applyMatrix4(this.bindMatrixInverse)}});function ks(){ut.call(this),this.type="Bone"}ks.prototype=Object.assign(Object.create(ut.prototype),{constructor:ks,isBone:!0});const Za=new Lt,Zp=new Lt;function Vs(e=[],t=[]){this.uuid=mt.generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(Vs.prototype,{init:function(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Lt)}},calculateInverses:function(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:Zp;Za.multiplyMatrices(o,t[r]),Za.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new Vs(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new ks),this.bones.push(s),this.boneInverses.push(new Lt().fromArray(e.boneInverses[n]))}return this.init(),this},toJSON:function(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}});const Ja=new Lt,Qa=new Lt,Or=[],Hi=new Jt;function Ka(e,t,n){Jt.call(this,e,t),this.instanceMatrix=new St(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}Ka.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Ka,isInstancedMesh:!0,copy:function(e){return Jt.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this},getColorAt:function(e,t){t.fromArray(this.instanceColor.array,e*3)},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){const n=this.matrixWorld,i=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ja),Qa.multiplyMatrices(n,Ja),Hi.matrixWorld=Qa,Hi.raycast(e,Or);for(let s=0,o=Or.length;s<o;s++){const a=Or[s];a.instanceId=r,a.object=this,t.push(a)}Or.length=0}},setColorAt:function(e,t){this.instanceColor===null&&(this.instanceColor=new St(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Ce(e){dt.call(this),this.type="LineBasicMaterial",this.color=new ft(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}Ce.prototype=Object.create(dt.prototype),Ce.prototype.constructor=Ce,Ce.prototype.isLineBasicMaterial=!0,Ce.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};const $a=new w,tc=new w,ec=new Lt,Ws=new Ei,Nr=new yn;function ei(e=new Ht,t=new Ce){ut.call(this),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}ei.prototype=Object.assign(Object.create(ut.prototype),{constructor:ei,isLine:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$a.fromBufferAttribute(t,i-1),tc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$a.distanceTo(tc);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;ec.copy(i).invert(),Ws.copy(e.ray).applyMatrix4(ec);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new w,c=new w,l=new w,u=new w,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,m=n.attributes.position;if(f!==null){const v=f.array;for(let y=0,g=v.length-1;y<g;y+=h){const p=v[y],S=v[y+1];if(a.fromBufferAttribute(m,p),c.fromBufferAttribute(m,S),Ws.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(let v=0,y=m.count-1;v<y;v+=h){if(a.fromBufferAttribute(m,v),c.fromBufferAttribute(m,v+1),Ws.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const p=e.ray.origin.distanceTo(u);p<e.near||p>e.far||t.push({distance:p,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const nc=new w,ic=new w;function rc(e,t){ei.call(this,e,t),this.type="LineSegments"}rc.prototype=Object.assign(Object.create(ei.prototype),{constructor:rc,isLineSegments:!0,computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nc.fromBufferAttribute(t,i),ic.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nc.distanceTo(ic);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});function sc(e,t){ei.call(this,e,t),this.type="LineLoop"}sc.prototype=Object.assign(Object.create(ei.prototype),{constructor:sc,isLineLoop:!0});function Sn(e){dt.call(this),this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}Sn.prototype=Object.create(dt.prototype),Sn.prototype.constructor=Sn,Sn.prototype.isPointsMaterial=!0,Sn.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};const oc=new Lt,js=new Ei,Fr=new yn,Br=new w;function ac(e=new Ht,t=new Sn){ut.call(this),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}ac.prototype=Object.assign(Object.create(ut.prototype),{constructor:ac,isPoints:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;oc.copy(i).invert(),js.copy(e.ray).applyMatrix4(oc);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const u=a.array;for(let h=0,f=u.length;h<f;h++){const d=u[h];Br.fromBufferAttribute(l,d),cc(Br,d,o,i,e,t,this)}}else for(let u=0,h=l.count;u<h;u++)Br.fromBufferAttribute(l,u),cc(Br,u,o,i,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function cc(e,t,n,i,r,s,o){const a=js.distanceSqToPoint(e);if(a<n){const c=new w;js.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}function lc(e,t,n,i,r,s,o,a,c){Ft.call(this,e,t,n,i,r,s,o,a,c),this.format=o!==void 0?o:dn,this.minFilter=s!==void 0?s:te,this.magFilter=r!==void 0?r:te,this.generateMipmaps=!1;const l=this;function u(){l.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}lc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:lc,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Gi(e,t,n,i,r,s,o,a,c,l,u,h){Ft.call(this,null,s,o,a,c,l,i,r,u,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Gi.prototype=Object.create(Ft.prototype),Gi.prototype.constructor=Gi,Gi.prototype.isCompressedTexture=!0;function zr(e,t,n,i,r,s,o,a,c){Ft.call(this,e,t,n,i,r,s,o,a,c),this.needsUpdate=!0}zr.prototype=Object.create(Ft.prototype),zr.prototype.constructor=zr,zr.prototype.isCanvasTexture=!0;function Ur(e,t,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:Cn,l!==Cn&&l!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Cn&&(n=er),n===void 0&&l===xi&&(n=vi),Ft.call(this,null,i,r,s,o,a,l,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:ie,this.minFilter=a!==void 0?a:ie,this.flipY=!1,this.generateMipmaps=!1}Ur.prototype=Object.create(Ft.prototype),Ur.prototype.constructor=Ur,Ur.prototype.isDepthTexture=!0,new w,new w,new w,new re;const Jp={triangulate:function(e,t,n){n=n||2;const i=t&&t.length,r=i?t[0]*n:e.length;let s=hc(e,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(i&&(s=em(e,t,s,n)),e.length>80*n){a=l=e[0],c=u=e[1];for(let m=n;m<r;m+=n)h=e[m],f=e[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?1/d:0}return ki(s,o,n,a,c,d),o}};function hc(e,t,n,i,r){let s,o;if(r===fm(e,t,n,i)>0)for(s=t;s<n;s+=i)o=dc(s,e[s],e[s+1],o);else for(s=n-i;s>=t;s-=i)o=dc(s,e[s],e[s+1],o);return o&&Hr(o,o.next)&&(Wi(o),o=o.next),o}function ln(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Hr(n,n.next)||Vt(n.prev,n,n.next)===0)){if(Wi(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function ki(e,t,n,i,r,s,o){if(!e)return;!o&&s&&om(e,i,r,s);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,s?Kp(e,i,r,s):Qp(e)){t.push(c.i/n),t.push(e.i/n),t.push(l.i/n),Wi(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=$p(ln(e),t,n),ki(e,t,n,i,r,s,2)):o===2&&tm(e,t,n,i,r,s):ki(ln(e),t,n,i,r,s,1);break}}}function Qp(e){const t=e.prev,n=e,i=e.next;if(Vt(t,n,i)>=0)return!1;let r=e.next.next;for(;r!==e.prev;){if(ni(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Vt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Kp(e,t,n,i){const r=e.prev,s=e,o=e.next;if(Vt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=qs(a,c,t,n,i),f=qs(l,u,t,n,i);let d=e.prevZ,m=e.nextZ;for(;d&&d.z>=h&&m&&m.z<=f;){if(d!==e.prev&&d!==e.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Vt(d.prev,d,d.next)>=0||(d=d.prevZ,m!==e.prev&&m!==e.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Vt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=h;){if(d!==e.prev&&d!==e.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Vt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=f;){if(m!==e.prev&&m!==e.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Vt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function $p(e,t,n){let i=e;do{const r=i.prev,s=i.next.next;!Hr(r,s)&&uc(r,i,i.next,s)&&Vi(r,s)&&Vi(s,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(s.i/n),Wi(i),Wi(i.next),i=e=s),i=i.next}while(i!==e);return ln(i)}function tm(e,t,n,i,r,s){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lm(o,a)){let c=fc(o,a);o=ln(o,o.next),c=ln(c,c.next),ki(o,t,n,i,r,s),ki(c,t,n,i,r,s);return}a=a.next}o=o.next}while(o!==e)}function em(e,t,n,i){const r=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*i,c=s<o-1?t[s+1]*i:e.length,l=hc(e,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(cm(l));for(r.sort(nm),s=0;s<r.length;s++)im(r[s],n),n=ln(n,n.next);return n}function nm(e,t){return e.x-t.x}function im(e,t){if(t=rm(e,t),t){const n=fc(t,e);ln(t,t.next),ln(n,n.next)}}function rm(e,t){let n=t;const i=e.x,r=e.y;let s=-Infinity,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s){if(s=f,f===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let u=Infinity,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&ni(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),Vi(n,e)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&sm(o,n)))&&(o=n,u=h)),n=n.next;while(n!==a);return o}function sm(e,t){return Vt(e.prev,e,t.prev)<0&&Vt(t.next,e,e.next)<0}function om(e,t,n,i){let r=e;do r.z===null&&(r.z=qs(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,am(r)}function am(e){let t,n,i,r,s,o,a,c,l=1;do{for(n=e,e=null,s=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return e}function qs(e,t,n,i,r){return e=32767*(e-n)*r,t=32767*(t-i)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function cm(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ni(e,t,n,i,r,s,o,a){return(r-o)*(t-a)-(e-o)*(s-a)>=0&&(e-o)*(i-a)-(n-o)*(t-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function lm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!hm(e,t)&&(Vi(e,t)&&Vi(t,e)&&um(e,t)&&(Vt(e.prev,e,t.prev)||Vt(e,t.prev,t))||Hr(e,t)&&Vt(e.prev,e,e.next)>0&&Vt(t.prev,t,t.next)>0)}function Vt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Hr(e,t){return e.x===t.x&&e.y===t.y}function uc(e,t,n,i){const r=kr(Vt(e,t,n)),s=kr(Vt(e,t,i)),o=kr(Vt(n,i,e)),a=kr(Vt(n,i,t));return!!(r!==s&&o!==a||r===0&&Gr(e,n,t)||s===0&&Gr(e,i,t)||o===0&&Gr(n,e,i)||a===0&&Gr(n,t,i))}function Gr(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function kr(e){return e>0?1:e<0?-1:0}function hm(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&uc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Vi(e,t){return Vt(e.prev,e,e.next)<0?Vt(e,t,e.next)>=0&&Vt(e,e.prev,t)>=0:Vt(e,t,e.prev)<0||Vt(e,e.next,t)<0}function um(e,t){let n=e,i=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function fc(e,t){const n=new Xs(e.i,e.x,e.y),i=new Xs(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function dc(e,t,n,i){const r=new Xs(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Wi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Xs(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fm(e,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}const hn={area:function(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},isClockWise:function(e){return hn.area(e)<0},triangulateShape:function(e,t){const n=[],i=[],r=[];pc(e),mc(n,e);let s=e.length;t.forEach(pc);for(let a=0;a<t.length;a++)i.push(s),s+=t[a].length,mc(n,t[a]);const o=Jp.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function pc(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function mc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class gc extends Ht{constructor(t,n){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:6,m=n.bevelSize!==void 0?n.bevelSize:d-2,v=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,p=n.UVGenerator!==void 0?n.UVGenerator:dm;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let S,T=!1,E,b,L,H;g&&(S=g.getSpacedPoints(u),T=!0,f=!1,E=g.computeFrenetFrames(u,!1),b=new w,L=new w,H=new w),f||(y=0,d=0,m=0,v=0);const P=a.extractPoints(l);let I=P.shape;const O=P.holes;if(!hn.isClockWise(I)){I=I.reverse();for(let j=0,Z=O.length;j<Z;j++){const K=O[j];hn.isClockWise(K)&&(O[j]=K.reverse())}}const N=hn.triangulateShape(I,O),C=I;for(let j=0,Z=O.length;j<Z;j++){const K=O[j];I=I.concat(K)}function R(j,Z,K){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(K).add(j)}const B=I.length,V=N.length;function Y(j,Z,K){let lt,nt,M;const x=j.x-Z.x,q=j.y-Z.y,k=K.x-j.x,A=K.y-j.y,X=x*x+q*q,et=x*A-q*k;if(Math.abs(et)>Number.EPSILON){const at=Math.sqrt(X),J=Math.sqrt(k*k+A*A),ot=Z.x-q/at,ht=Z.y+x/at,vt=K.x-A/J,st=K.y+k/J,pt=((vt-ot)*A-(st-ht)*k)/(x*A-q*k);lt=ot+x*pt-j.x,nt=ht+q*pt-j.y;const kt=lt*lt+nt*nt;if(kt<=2)return new W(lt,nt);M=Math.sqrt(kt/2)}else{let at=!1;x>Number.EPSILON?k>Number.EPSILON&&(at=!0):x<-Number.EPSILON?k<-Number.EPSILON&&(at=!0):Math.sign(q)===Math.sign(A)&&(at=!0),at?(lt=-q,nt=x,M=Math.sqrt(X)):(lt=x,nt=q,M=Math.sqrt(X/2))}return new W(lt/M,nt/M)}const $=[];for(let j=0,Z=C.length,K=Z-1,lt=j+1;j<Z;j++,K++,lt++)K===Z&&(K=0),lt===Z&&(lt=0),$[j]=Y(C[j],C[K],C[lt]);const rt=[];let it,_t=$.concat();for(let j=0,Z=O.length;j<Z;j++){const K=O[j];it=[];for(let lt=0,nt=K.length,M=nt-1,x=lt+1;lt<nt;lt++,M++,x++)M===nt&&(M=0),x===nt&&(x=0),it[lt]=Y(K[lt],K[M],K[x]);rt.push(it),_t=_t.concat(it)}for(let j=0;j<y;j++){const Z=j/y,K=d*Math.cos(Z*Math.PI/2),lt=m*Math.sin(Z*Math.PI/2)+v;for(let nt=0,M=C.length;nt<M;nt++){const x=R(C[nt],$[nt],lt);gt(x.x,x.y,-K)}for(let nt=0,M=O.length;nt<M;nt++){const x=O[nt];it=rt[nt];for(let q=0,k=x.length;q<k;q++){const A=R(x[q],it[q],lt);gt(A.x,A.y,-K)}}}const bt=m+v;for(let j=0;j<B;j++){const Z=f?R(I[j],_t[j],bt):I[j];T?(L.copy(E.normals[0]).multiplyScalar(Z.x),b.copy(E.binormals[0]).multiplyScalar(Z.y),H.copy(S[0]).add(L).add(b),gt(H.x,H.y,H.z)):gt(Z.x,Z.y,0)}for(let j=1;j<=u;j++)for(let Z=0;Z<B;Z++){const K=f?R(I[Z],_t[Z],bt):I[Z];T?(L.copy(E.normals[j]).multiplyScalar(K.x),b.copy(E.binormals[j]).multiplyScalar(K.y),H.copy(S[j]).add(L).add(b),gt(H.x,H.y,H.z)):gt(K.x,K.y,h/u*j)}for(let j=y-1;j>=0;j--){const Z=j/y,K=d*Math.cos(Z*Math.PI/2),lt=m*Math.sin(Z*Math.PI/2)+v;for(let nt=0,M=C.length;nt<M;nt++){const x=R(C[nt],$[nt],lt);gt(x.x,x.y,h+K)}for(let nt=0,M=O.length;nt<M;nt++){const x=O[nt];it=rt[nt];for(let q=0,k=x.length;q<k;q++){const A=R(x[q],it[q],lt);T?gt(A.x,A.y+S[u-1].y,S[u-1].x+K):gt(A.x,A.y,h+K)}}}Nt(),G();function Nt(){const j=r.length/3;if(f){let Z=0,K=B*Z;for(let lt=0;lt<V;lt++){const nt=N[lt];Rt(nt[2]+K,nt[1]+K,nt[0]+K)}Z=u+y*2,K=B*Z;for(let lt=0;lt<V;lt++){const nt=N[lt];Rt(nt[0]+K,nt[1]+K,nt[2]+K)}}else{for(let Z=0;Z<V;Z++){const K=N[Z];Rt(K[2],K[1],K[0])}for(let Z=0;Z<V;Z++){const K=N[Z];Rt(K[0]+B*u,K[1]+B*u,K[2]+B*u)}}i.addGroup(j,r.length/3-j,0)}function G(){const j=r.length/3;let Z=0;$t(C,Z),Z+=C.length;for(let K=0,lt=O.length;K<lt;K++){const nt=O[K];$t(nt,Z),Z+=nt.length}i.addGroup(j,r.length/3-j,1)}function $t(j,Z){let K=j.length;for(;--K>=0;){const lt=K;let nt=K-1;nt<0&&(nt=j.length-1);for(let M=0,x=u+y*2;M<x;M++){const q=B*M,k=B*(M+1),A=Z+lt+q,X=Z+nt+q,et=Z+nt+k,at=Z+lt+k;yt(A,X,et,at)}}}function gt(j,Z,K){c.push(j),c.push(Z),c.push(K)}function Rt(j,Z,K){Pt(j),Pt(Z),Pt(K);const lt=r.length/3,nt=p.generateTopUV(i,r,lt-3,lt-2,lt-1);Et(nt[0]),Et(nt[1]),Et(nt[2])}function yt(j,Z,K,lt){Pt(j),Pt(Z),Pt(lt),Pt(Z),Pt(K),Pt(lt);const nt=r.length/3,M=p.generateSideWallUV(i,r,nt-6,nt-3,nt-2,nt-1);Et(M[0]),Et(M[1]),Et(M[3]),Et(M[1]),Et(M[2]),Et(M[3])}function Pt(j){r.push(c[j*3+0]),r.push(c[j*3+1]),r.push(c[j*3+2])}function Et(j){s.push(j.x),s.push(j.y)}}}toJSON(){const t=Ht.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return pm(n,i,t)}}const dm={generateTopUV:function(e,t,n,i,r){const s=t[n*3],o=t[n*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new W(s,o),new W(a,c),new W(l,u)]},generateSideWallUV:function(e,t,n,i,r,s){const o=t[n*3],a=t[n*3+1],c=t[n*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],d=t[r*3+1],m=t[r*3+2],v=t[s*3],y=t[s*3+1],g=t[s*3+2];return Math.abs(a-u)<.01?[new W(o,1-c),new W(l,1-h),new W(f,1-m),new W(v,1-g)]:[new W(a,1-c),new W(u,1-h),new W(d,1-m),new W(y,1-g)]}};function pm(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function Ys(e,t,n){Ht.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new w,l=new w,u=new w,h=new w,f=new w;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const d=t+1;for(let m=0;m<=n;m++){const v=m/n;for(let y=0;y<=t;y++){const g=y/t;e(g,v,l),r.push(l.x,l.y,l.z),g-a>=0?(e(g-a,v,u),h.subVectors(l,u)):(e(g+a,v,u),h.subVectors(u,l)),v-a>=0?(e(g,v-a,u),f.subVectors(l,u)):(e(g,v+a,u),f.subVectors(u,l)),c.crossVectors(h,f).normalize(),s.push(c.x,c.y,c.z),o.push(g,v)}}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const y=m*d+v,g=m*d+v+1,p=(m+1)*d+v+1,S=(m+1)*d+v;i.push(y,g,S),i.push(g,p,S)}this.setIndex(i),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(s,3)),this.setAttribute("uv",new qt(o,2))}Ys.prototype=Object.create(Ht.prototype),Ys.prototype.constructor=Ys;class mm extends Ht{constructor(t,n=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(s,3)),this.setAttribute("uv",new qt(o,2));function l(u){const h=r.length/3,f=u.extractPoints(n);let d=f.shape;const m=f.holes;hn.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,g=m.length;y<g;y++){const p=m[y];hn.isClockWise(p)===!0&&(m[y]=p.reverse())}const v=hn.triangulateShape(d,m);for(let y=0,g=m.length;y<g;y++){const p=m[y];d=d.concat(p)}for(let y=0,g=d.length;y<g;y++){const p=d[y];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let y=0,g=v.length;y<g;y++){const p=v[y],S=p[0]+h,T=p[1]+h,E=p[2]+h;i.push(S,T,E),c+=3}}}toJSON(){const t=Ht.prototype.toJSON.call(this),n=this.parameters.shapes;return gm(n,t)}}function gm(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function ii(e){dt.call(this),this.type="ShadowMaterial",this.color=new ft(0),this.transparent=!0,this.setValues(e)}ii.prototype=Object.create(dt.prototype),ii.prototype.constructor=ii,ii.prototype.isShadowMaterial=!0,ii.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this};function ji(e){ce.call(this,e),this.type="RawShaderMaterial"}ji.prototype=Object.create(ce.prototype),ji.prototype.constructor=ji,ji.prototype.isRawShaderMaterial=!0;function We(e){dt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}We.prototype=Object.create(dt.prototype),We.prototype.constructor=We,We.prototype.isMeshStandardMaterial=!0,We.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function En(e){We.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=mt.clamp(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}En.prototype=Object.create(We.prototype),En.prototype.constructor=En,En.prototype.isMeshPhysicalMaterial=!0,En.prototype.copy=function(e){return We.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new ft).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function un(e){dt.call(this),this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$i,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}un.prototype=Object.create(dt.prototype),un.prototype.constructor=un,un.prototype.isMeshPhongMaterial=!0,un.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ri(e){dt.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}ri.prototype=Object.create(dt.prototype),ri.prototype.constructor=ri,ri.prototype.isMeshToonMaterial=!0,ri.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function si(e){dt.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}si.prototype=Object.create(dt.prototype),si.prototype.constructor=si,si.prototype.isMeshNormalMaterial=!0,si.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function oi(e){dt.call(this),this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$i,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}oi.prototype=Object.create(dt.prototype),oi.prototype.constructor=oi,oi.prototype.isMeshLambertMaterial=!0,oi.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ai(e){dt.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ft(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}ai.prototype=Object.create(dt.prototype),ai.prototype.constructor=ai,ai.prototype.isMeshMatcapMaterial=!0,ai.prototype.copy=function(e){return dt.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ci(e){Ce.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}ci.prototype=Object.create(Ce.prototype),ci.prototype.constructor=ci,ci.prototype.isLineDashedMaterial=!0,ci.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var ym=Object.freeze({__proto__:null,ShadowMaterial:ii,SpriteMaterial:wn,RawShaderMaterial:ji,ShaderMaterial:ce,PointsMaterial:Sn,MeshPhysicalMaterial:En,MeshStandardMaterial:We,MeshPhongMaterial:un,MeshToonMaterial:ri,MeshNormalMaterial:si,MeshLambertMaterial:oi,MeshDepthMaterial:vn,MeshDistanceMaterial:xn,MeshBasicMaterial:en,MeshMatcapMaterial:ai,LineDashedMaterial:ci,LineBasicMaterial:Ce,Material:dt});const Gt={arraySlice:function(e,t,n){return Gt.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(r,s){return e[r]-e[s]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){const i=e.length,r=new e.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*t;for(let c=0;c!==t;++c)r[o++]=e[a+c]}return r},flattenJSON:function(e,t,n,i){let r=1,s=e[0];for(;s!==void 0&&s[i]===void 0;)s=e[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push.apply(n,o)),s=e[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=e[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=e[r++];while(s!==void 0)},subclip:function(e,t,n,i,r=30){const s=e.clone();s.name=t;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const m=l.times[d]*r;if(!(m<n||m>=i)){h.push(l.times[d]);for(let v=0;v<u;++v)f.push(l.values[d*u+v])}}h.length!==0&&(l.times=Gt.convertArray(h,l.times.constructor),l.values=Gt.convertArray(f,l.values.constructor),o.push(l))}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(e,t=0,n=e,i=30){i<=0&&(i=30);const r=n.tracks.length,s=t/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=e.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=a.times.length-1;let v;if(s<=a.times[0]){const g=u,p=h-u;v=Gt.arraySlice(a.values,g,p)}else if(s>=a.times[m]){const g=m*h+u,p=g+h-u;v=Gt.arraySlice(a.values,g,p)}else{const g=a.createInterpolant(),p=u,S=h-u;g.evaluate(s),v=Gt.arraySlice(g.resultBuffer,p,S)}c==="quaternion"&&new he().fromArray(v).normalize().conjugate().toArray(v);const y=l.times.length;for(let g=0;g<y;++g){const p=g*d+f;if(c==="quaternion")he.multiplyQuaternionsFlat(l.values,p,v,0,l.values,p);else{const S=d-f*2;for(let T=0;T<S;++T)l.values[p+T]-=v[T]}}}return e.blendMode=Ko,e}};function ve(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(ve.prototype,{evaluate:function(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];t:{e:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break n}break t}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(ve.prototype,{beforeStart_:ve.prototype.copySampleValue_,afterEnd_:ve.prototype.copySampleValue_});function Zs(e,t,n,i){ve.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Zs.prototype=Object.assign(Object.create(ve.prototype),{constructor:Zs,DefaultSettings_:{endingStart:Rn,endingEnd:Rn},intervalChanged_:function(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Pn:r=e,o=2*t-n;break;case or:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Pn:s=e,a=2*n-t;break;case or:s=1,a=n+i[1]-i[0];break;default:s=e-1,a=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,d=(n-t)/(i-t),m=d*d,v=m*d,y=-h*v+2*h*m-h*d,g=(1+h)*v+(-1.5-2*h)*m+(-.5+h)*d+1,p=(-1-f)*v+(1.5+f)*m+.5*d,S=f*v-f*m;for(let T=0;T!==o;++T)r[T]=y*s[l+T]+g*s[c+T]+p*s[a+T]+S*s[u+T];return r}});function Vr(e,t,n,i){ve.call(this,e,t,n,i)}Vr.prototype=Object.assign(Object.create(ve.prototype),{constructor:Vr,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=(n-t)/(i-t),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function Js(e,t,n,i){ve.call(this,e,t,n,i)}Js.prototype=Object.assign(Object.create(ve.prototype),{constructor:Js,interpolate_:function(e){return this.copySampleValue_(e-1)}});function ne(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gt.convertArray(t,this.TimeBufferType),this.values=Gt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(ne,{toJSON:function(e){const t=e.constructor;let n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:Gt.convertArray(e.times,Array),values:Gt.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}}),Object.assign(ne.prototype,{constructor:ne,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:sr,InterpolantFactoryMethodDiscrete:function(e){return new Js(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Vr(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new Zs(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case os:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return os}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this},scale:function(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this},trim:function(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Gt.arraySlice(n,r,s),this.values=Gt.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(i!==void 0&&Gt.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e},optimize:function(){const e=Gt.arraySlice(this.times),t=Gt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===os,r=e.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=e[o],l=e[o+1];if(c!==l&&(o!==1||c!==e[0]))if(i)a=!0;else{const u=o*n,h=u-n,f=u+n;for(let d=0;d!==n;++d){const m=t[u+d];if(m!==t[h+d]||m!==t[f+d]){a=!0;break}}}if(a){if(o!==s){e[s]=e[o];const u=o*n,h=s*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)t[a+c]=t[o+c];++s}return s!==e.length?(this.times=Gt.arraySlice(e,0,s),this.values=Gt.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this},clone:function(){const e=Gt.arraySlice(this.times,0),t=Gt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}});function Qs(e,t,n){ne.call(this,e,t,n)}Qs.prototype=Object.assign(Object.create(ne.prototype),{constructor:Qs,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:rr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ks(e,t,n,i){ne.call(this,e,t,n,i)}Ks.prototype=Object.assign(Object.create(ne.prototype),{constructor:Ks,ValueTypeName:"color"});function qi(e,t,n,i){ne.call(this,e,t,n,i)}qi.prototype=Object.assign(Object.create(ne.prototype),{constructor:qi,ValueTypeName:"number"});function $s(e,t,n,i){ve.call(this,e,t,n,i)}$s.prototype=Object.assign(Object.create(ve.prototype),{constructor:$s,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let c=e*o;for(let l=c+o;c!==l;c+=4)he.slerpFlat(r,0,s,c-o,s,c,a);return r}});function Wr(e,t,n,i){ne.call(this,e,t,n,i)}Wr.prototype=Object.assign(Object.create(ne.prototype),{constructor:Wr,ValueTypeName:"quaternion",DefaultInterpolation:sr,InterpolantFactoryMethodLinear:function(e){return new $s(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function to(e,t,n,i){ne.call(this,e,t,n,i)}to.prototype=Object.assign(Object.create(ne.prototype),{constructor:to,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:rr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Xi(e,t,n,i){ne.call(this,e,t,n,i)}Xi.prototype=Object.assign(Object.create(ne.prototype),{constructor:Xi,ValueTypeName:"vector"});function Se(e,t=-1,n,i=as){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mt.generateUUID(),this.duration<0&&this.resetDuration()}function vm(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return Ks;case"quaternion":return Wr;case"bool":case"boolean":return Qs;case"string":return to}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function xm(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=vm(e.type);if(e.times===void 0){const n=[],i=[];Gt.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(Se,{parse:function(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(xm(n[s]).scale(i));const r=new Se(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r},toJSON:function(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(ne.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=Gt.getKeyframeOrder(a);a=Gt.sortedArray(a,1,l),c=Gt.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new qi(".morphTargetInfluences["+t[o].name+"]",a,c).scale(1/n))}return new Se(e,-1,s)},findByName:function(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.name.match(r);if(l&&l.length>1){const u=l[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Se.CreateFromMorphTargetSequence(o,i[o],t,n));return s},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,d,m){if(f.length!==0){const v=[],y=[];Gt.flattenJSON(f,v,y,d),v.length!==0&&m.push(new u(h,v,y))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let d;for(d=0;d<h.length;d++)if(h[d].morphTargets)for(let m=0;m<h[d].morphTargets.length;m++)f[h[d].morphTargets[m]]=-1;for(const m in f){const v=[],y=[];for(let g=0;g!==h[d].morphTargets.length;++g){const p=h[d];v.push(p.time),y.push(p.morphTarget===m?1:0)}i.push(new qi(".morphTargetInfluence["+m+"]",v,y))}a=f.length*(s||1)}else{const f=".bones["+t[u].name+"]";n(Xi,f+".position",h,"pos",i),n(Wr,f+".quaternion",h,"rot",i),n(Xi,f+".scale",h,"scl",i)}}return i.length===0?null:new Se(r,a,i,o)}}),Object.assign(Se.prototype,{resetDuration:function(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new Se(this.name,this.duration,e,this.blendMode)},toJSON:function(){return Se.toJSON(this)}});const li={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function _m(e,t,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],d=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}const bm=new _m;function Ot(e){this.manager=e!==void 0?e:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ot.prototype,{load:function(){},loadAsync:function(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});const Ee={};function je(e){Ot.call(this,e)}je.prototype=Object.assign(Object.create(Ot.prototype),{constructor:je,load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=li.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;if(Ee[e]!==void 0){Ee[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(o);let c;if(a){const l=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let f;const d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":const m=new Uint8Array(h.length);for(let y=0;y<h.length;y++)m[y]=h.charCodeAt(y);d==="blob"?f=new Blob([m.buffer],{type:l}):f=m.buffer;break;case"document":f=new DOMParser().parseFromString(h,l);break;case"json":f=JSON.parse(h);break;default:f=h;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Ee[e]=[],Ee[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(l){const u=this.response,h=Ee[e];if(delete Ee[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),li.add(e,u);for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onLoad&&m.onLoad(u)}r.manager.itemEnd(e)}else{for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onError&&m.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(l){const u=Ee[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onProgress&&d.onProgress(l)}},!1),c.addEventListener("error",function(l){const u=Ee[e];delete Ee[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(l){const u=Ee[e];delete Ee[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(e),c},setResponseType:function(e){return this.responseType=e,this},setMimeType:function(e){return this.mimeType=e,this}});function yc(e){Ot.call(this,e)}yc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:yc,load:function(e,t,n,i){const r=this,s=new je(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=[];for(let n=0;n<e.length;n++){const i=Se.parse(e[n]);t.push(i)}return t}});function vc(e){Ot.call(this,e)}vc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:vc,load:function(e,t,n,i){const r=this,s=[],o=new Gi,a=new je(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(e[u],function(h){const f=r.parse(h,!0);s[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=te),o.image=s,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,h=e.length;u<h;++u)l(u);else a.load(e,function(u){const h=r.parse(u,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let d=0;d<f;d++){s[d]={mipmaps:[]};for(let m=0;m<h.mipmapCount;m++)s[d].mipmaps.push(h.mipmaps[d*h.mipmapCount+m]),s[d].format=h.format,s[d].width=h.width,s[d].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=te),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}});function jr(e){Ot.call(this,e)}jr.prototype=Object.assign(Object.create(Ot.prototype),{constructor:jr,load:function(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=li.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}});function eo(e){Ot.call(this,e)}eo.prototype=Object.assign(Object.create(Ot.prototype),{constructor:eo,load:function(e,t,n,i){const r=new an,s=new jr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(e[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)a(c);return r}});function xc(e){Ot.call(this,e)}xc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:xc,load:function(e,t,n,i){const r=this,s=new Yn,o=new je(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(a){const c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:le,s.wrapT=c.wrapT!==void 0?c.wrapT:le,s.magFilter=c.magFilter!==void 0?c.magFilter:te,s.minFilter=c.minFilter!==void 0?c.minFilter:te,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=tr),c.mipmapCount===1&&(s.minFilter=te),s.needsUpdate=!0,t&&t(s,c))},n,i),s}});function no(e){Ot.call(this,e)}no.prototype=Object.assign(Object.create(Ot.prototype),{constructor:no,load:function(e,t,n,i){const r=new Ft,s=new jr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o;const a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=a?dn:_e,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}});function ct(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(ct.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){const e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,f=(s-l)/h;return(i+f)/(r-1)},getTangent:function(e,t){const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=t||(s.isVector2?new W:new w);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){const n=new w,i=[],r=[],s=[],o=new w,a=new Lt;for(let f=0;f<=e;f++){const d=f/e;i[f]=this.getTangentAt(d,new w),i[f].normalize()}r[0]=new w,s[0]=new w;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos(mt.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,d))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(mt.clamp(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let d=1;d<=e;d++)r[d].applyMatrix4(a.makeRotationAxis(i[d],f*d)),s[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function xe(e,t,n,i,r,s,o,a){ct.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}xe.prototype=Object.create(ct.prototype),xe.prototype.constructor=xe,xe.prototype.isEllipseCurve=!0,xe.prototype.getPoint=function(e,t){const n=t||new W,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,f=c-this.aY;a=h*l-f*u+this.aX,c=h*u+f*l+this.aY}return n.set(a,c)},xe.prototype.copy=function(e){return ct.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this},xe.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e},xe.prototype.fromJSON=function(e){return ct.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function Yi(e,t,n,i,r,s){xe.call(this,e,t,n,n,i,r,s),this.type="ArcCurve"}Yi.prototype=Object.create(xe.prototype),Yi.prototype.constructor=Yi,Yi.prototype.isArcCurve=!0;function io(){let e=0,t=0,n=0,i=0;function r(s,o,a,c){e=s,t=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}const qr=new w,ro=new io,so=new io,oo=new io;function Te(e=[],t=!1,n="centripetal",i=.5){ct.call(this),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}Te.prototype=Object.create(ct.prototype),Te.prototype.constructor=Te,Te.prototype.isCatmullRomCurve3=!0,Te.prototype.getPoint=function(e,t=new w){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(qr.subVectors(i[0],i[1]).add(i[0]),c=qr);const u=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(qr.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(l),f);m<1e-4&&(m=1),d<1e-4&&(d=m),v<1e-4&&(v=m),ro.initNonuniformCatmullRom(c.x,u.x,h.x,l.x,d,m,v),so.initNonuniformCatmullRom(c.y,u.y,h.y,l.y,d,m,v),oo.initNonuniformCatmullRom(c.z,u.z,h.z,l.z,d,m,v)}else this.curveType==="catmullrom"&&(ro.initCatmullRom(c.x,u.x,h.x,l.x,this.tension),so.initCatmullRom(c.y,u.y,h.y,l.y,this.tension),oo.initCatmullRom(c.z,u.z,h.z,l.z,this.tension));return n.set(ro.calc(a),so.calc(a),oo.calc(a)),n},Te.prototype.copy=function(e){ct.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this},Te.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e},Te.prototype.fromJSON=function(e){ct.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function _c(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,c=e*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*e+n}function Mm(e,t){const n=1-e;return n*n*t}function wm(e,t){return 2*(1-e)*e*t}function Sm(e,t){return e*e*t}function Zi(e,t,n,i){return Mm(e,t)+wm(e,n)+Sm(e,i)}function Em(e,t){const n=1-e;return n*n*n*t}function Tm(e,t){const n=1-e;return 3*n*n*e*t}function Am(e,t){return 3*(1-e)*e*e*t}function Lm(e,t){return e*e*e*t}function Ji(e,t,n,i,r){return Em(e,t)+Tm(e,n)+Am(e,i)+Lm(e,r)}function Re(e=new W,t=new W,n=new W,i=new W){ct.call(this),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}Re.prototype=Object.create(ct.prototype),Re.prototype.constructor=Re,Re.prototype.isCubicBezierCurve=!0,Re.prototype.getPoint=function(e,t=new W){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ji(e,i.x,r.x,s.x,o.x),Ji(e,i.y,r.y,s.y,o.y)),n},Re.prototype.copy=function(e){return ct.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},Re.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},Re.prototype.fromJSON=function(e){return ct.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function qe(e=new w,t=new w,n=new w,i=new w){ct.call(this),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}qe.prototype=Object.create(ct.prototype),qe.prototype.constructor=qe,qe.prototype.isCubicBezierCurve3=!0,qe.prototype.getPoint=function(e,t=new w){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ji(e,i.x,r.x,s.x,o.x),Ji(e,i.y,r.y,s.y,o.y),Ji(e,i.z,r.z,s.z,o.z)),n},qe.prototype.copy=function(e){return ct.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},qe.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},qe.prototype.fromJSON=function(e){return ct.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function pe(e=new W,t=new W){ct.call(this),this.type="LineCurve",this.v1=e,this.v2=t}pe.prototype=Object.create(ct.prototype),pe.prototype.constructor=pe,pe.prototype.isLineCurve=!0,pe.prototype.getPoint=function(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n},pe.prototype.getPointAt=function(e,t){return this.getPoint(e,t)},pe.prototype.getTangent=function(e,t){const n=t||new W;return n.copy(this.v2).sub(this.v1).normalize(),n},pe.prototype.copy=function(e){return ct.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},pe.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},pe.prototype.fromJSON=function(e){return ct.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Pe(e=new w,t=new w){ct.call(this),this.type="LineCurve3",this.v1=e,this.v2=t}Pe.prototype=Object.create(ct.prototype),Pe.prototype.constructor=Pe,Pe.prototype.isLineCurve3=!0,Pe.prototype.getPoint=function(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n},Pe.prototype.getPointAt=function(e,t){return this.getPoint(e,t)},Pe.prototype.copy=function(e){return ct.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Pe.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Pe.prototype.fromJSON=function(e){return ct.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Ie(e=new W,t=new W,n=new W){ct.call(this),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}Ie.prototype=Object.create(ct.prototype),Ie.prototype.constructor=Ie,Ie.prototype.isQuadraticBezierCurve=!0,Ie.prototype.getPoint=function(e,t=new W){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Zi(e,i.x,r.x,s.x),Zi(e,i.y,r.y,s.y)),n},Ie.prototype.copy=function(e){return ct.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Ie.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Ie.prototype.fromJSON=function(e){return ct.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Xe(e=new w,t=new w,n=new w){ct.call(this),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}Xe.prototype=Object.create(ct.prototype),Xe.prototype.constructor=Xe,Xe.prototype.isQuadraticBezierCurve3=!0,Xe.prototype.getPoint=function(e,t=new w){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Zi(e,i.x,r.x,s.x),Zi(e,i.y,r.y,s.y),Zi(e,i.z,r.z,s.z)),n},Xe.prototype.copy=function(e){return ct.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Xe.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Xe.prototype.fromJSON=function(e){return ct.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function De(e=[]){ct.call(this),this.type="SplineCurve",this.points=e}De.prototype=Object.create(ct.prototype),De.prototype.constructor=De,De.prototype.isSplineCurve=!0,De.prototype.getPoint=function(e,t=new W){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(_c(o,a.x,c.x,l.x,u.x),_c(o,a.y,c.y,l.y,u.y)),n},De.prototype.copy=function(e){ct.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this},De.prototype.toJSON=function(){const e=ct.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e},De.prototype.fromJSON=function(e){ct.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new W().fromArray(i))}return this};var Cm=Object.freeze({__proto__:null,ArcCurve:Yi,CatmullRomCurve3:Te,CubicBezierCurve:Re,CubicBezierCurve3:qe,EllipseCurve:xe,LineCurve:pe,LineCurve3:Pe,QuadraticBezierCurve:Ie,QuadraticBezierCurve3:Xe,SplineCurve:De});function Tn(){ct.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Tn.prototype=Object.assign(Object.create(ct.prototype),{constructor:Tn,add:function(e){this.curves.push(e)},closePath:function(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new pe(t,e))},getPoint:function(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){ct.prototype.copy.call(this,e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){const e=ct.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){ct.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Cm[i.type]().fromJSON(i))}return this}});function Oe(e){Tn.call(this),this.type="Path",this.currentPoint=new W,e&&this.setFromPoints(e)}Oe.prototype=Object.assign(Object.create(Tn.prototype),{constructor:Oe,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){const n=new pe(this.currentPoint.clone(),new W(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,i){const r=new Ie(this.currentPoint.clone(),new W(e,t),new W(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(e,t,n,i,r,s){const o=new Re(this.currentPoint.clone(),new W(e,t),new W(n,i),new W(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(e){const t=[this.currentPoint.clone()].concat(e),n=new De(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,i,r,s),this},absarc:function(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this},ellipse:function(e,t,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,i,r,s,o,a),this},absellipse:function(e,t,n,i,r,s,o,a){const c=new xe(e,t,n,i,r,s,o,a);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(e){return Tn.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){const e=Tn.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return Tn.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function hi(e){Oe.call(this,e),this.uuid=mt.generateUUID(),this.type="Shape",this.holes=[]}hi.prototype=Object.assign(Object.create(Oe.prototype),{constructor:hi,getPointsHoles:function(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Oe.prototype.copy.call(this,e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){const e=Oe.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){Oe.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Oe().fromJSON(i))}return this}});function zt(e,t=1){ut.call(this),this.type="Light",this.color=new ft(e),this.intensity=t}zt.prototype=Object.assign(Object.create(ut.prototype),{constructor:zt,isLight:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){const t=ut.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function bc(e,t,n){zt.call(this,e,n),this.type="HemisphereLight",this.position.copy(ut.DefaultUp),this.updateMatrix(),this.groundColor=new ft(t)}bc.prototype=Object.assign(Object.create(zt.prototype),{constructor:bc,isHemisphereLight:!0,copy:function(e){return zt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function Ye(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new W(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}Object.assign(Ye.prototype,{_projScreenMatrix:new Lt,_lightPositionWorld:new w,_lookTarget:new w,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){const t=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(e.matrixWorld),t.position.copy(s),r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r),t.updateMatrixWorld(),i.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function ao(){Ye.call(this,new Qt(50,1,.5,500)),this.focus=1}ao.prototype=Object.assign(Object.create(Ye.prototype),{constructor:ao,isSpotLightShadow:!0,updateMatrices:function(e){const t=this.camera,n=mt.RAD2DEG*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),Ye.prototype.updateMatrices.call(this,e)}});function Mc(e,t,n,i,r,s){zt.call(this,e,t),this.type="SpotLight",this.position.copy(ut.DefaultUp),this.updateMatrix(),this.target=new ut,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new ao}Mc.prototype=Object.assign(Object.create(zt.prototype),{constructor:Mc,isSpotLight:!0,copy:function(e){return zt.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function co(){Ye.call(this,new Qt(90,1,.5,500)),this._frameExtents=new W(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}co.prototype=Object.assign(Object.create(Ye.prototype),{constructor:co,isPointLightShadow:!0,updateMatrices:function(e,t=0){const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function lo(e,t,n,i){zt.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new co}lo.prototype=Object.assign(Object.create(zt.prototype),{constructor:lo,isPointLight:!0,copy:function(e){return zt.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function ho(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){on.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}ho.prototype=Object.assign(Object.create(on.prototype),{constructor:ho,isOrthographicCamera:!0,copy:function(e,t){return on.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(e){const t=ut.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function uo(){Ye.call(this,new ho(-5,5,5,-5,.5,500))}uo.prototype=Object.assign(Object.create(Ye.prototype),{constructor:uo,isDirectionalLightShadow:!0,updateMatrices:function(e){Ye.prototype.updateMatrices.call(this,e)}});function wc(e,t){zt.call(this,e,t),this.type="DirectionalLight",this.position.copy(ut.DefaultUp),this.updateMatrix(),this.target=new ut,this.shadow=new uo}wc.prototype=Object.assign(Object.create(zt.prototype),{constructor:wc,isDirectionalLight:!0,copy:function(e){return zt.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function fo(e,t){zt.call(this,e,t),this.type="AmbientLight"}fo.prototype=Object.assign(Object.create(zt.prototype),{constructor:fo,isAmbientLight:!0});function Sc(e,t,n,i){zt.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Sc.prototype=Object.assign(Object.create(zt.prototype),{constructor:Sc,isRectAreaLight:!0,copy:function(e){return zt.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){const t=zt.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});class Rm{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new w)}set(t){for(let n=0;n<9;n++)this.coefficients[n].copy(t[n]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,n){const i=t.x,r=t.y,s=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(t,n){const i=t.x,r=t.y,s=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(t){for(let n=0;n<9;n++)this.coefficients[n].add(t.coefficients[n]);return this}addScaledSH(t,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],n);return this}scale(t){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(t);return this}lerp(t,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],n);return this}equals(t){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(t.coefficients[n]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(t,n+r*3);return this}toArray(t=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(t,n+r*3);return t}static getBasisAt(t,n){const i=t.x,r=t.y,s=t.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function Ne(e,t){zt.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new Rm}Ne.prototype=Object.assign(Object.create(zt.prototype),{constructor:Ne,isLightProbe:!0,copy:function(e){return zt.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){const t=zt.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function Ec(e){Ot.call(this,e),this.textures={}}Ec.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Ec,load:function(e,t,n,i){const r=this,s=new je(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new ym[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new ft().setHex(e.sheen)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ft().setHex(s.value);break;case"v2":i.uniforms[r].value=new W().fromArray(s.value);break;case"v3":i.uniforms[r].value=new w().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Dt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new me().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Lt().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new W().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i},setTextures:function(e){return this.textures=e,this}});const Pm={decodeText:function(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}},extractUrlBase:function(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function Xr(){Ht.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}Xr.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Xr,isInstancedBufferGeometry:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e=Ht.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function po(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),St.call(this,e,t,n),this.meshPerAttribute=i||1}po.prototype=Object.assign(Object.create(St.prototype),{constructor:po,isInstancedBufferAttribute:!0,copy:function(e){return St.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){const e=St.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function Tc(e){Ot.call(this,e)}Tc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Tc,load:function(e,t,n,i){const r=this,s=new je(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t={},n={};function i(f,d){if(t[d]!==void 0)return t[d];const v=f.interleavedBuffers[d],y=r(f,v.buffer),g=vr(v.type,y),p=new ye(g,v.stride);return p.uuid=v.uuid,t[d]=p,p}function r(f,d){if(n[d]!==void 0)return n[d];const v=f.arrayBuffers[d],y=new Uint32Array(v).buffer;return n[d]=y,y}const s=e.isInstancedBufferGeometry?new Xr:new Ht,o=e.data.index;if(o!==void 0){const f=vr(o.type,o.array);s.setIndex(new St(f,1))}const a=e.data.attributes;for(const f in a){const d=a[f];let m;if(d.isInterleavedBufferAttribute){const v=i(e.data,d.data);m=new Mn(v,d.itemSize,d.offset,d.normalized)}else{const v=vr(d.type,d.array),y=d.isInstancedBufferAttribute?po:St;m=new y(v,d.itemSize,d.normalized)}d.name!==void 0&&(m.name=d.name),s.setAttribute(f,m)}const c=e.data.morphAttributes;if(c)for(const f in c){const d=c[f],m=[];for(let v=0,y=d.length;v<y;v++){const g=d[v];let p;if(g.isInterleavedBufferAttribute){const S=i(e.data,g.data);p=new Mn(S,g.itemSize,g.offset,g.normalized)}else{const S=vr(g.type,g.array);p=new St(S,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),m.push(p)}s.morphAttributes[f]=m}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,d=u.length;f!==d;++f){const m=u[f];s.addGroup(m.start,m.count,m.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const f=new w;h.center!==void 0&&f.fromArray(h.center),s.boundingSphere=new yn(f,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}});function Ac(e){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ot.call(this,e),this.options={premultiplyAlpha:"none"}}Ac.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Ac,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=li.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){li.add(e,a),t&&t(a),r.manager.itemEnd(e)}).catch(function(a){i&&i(a),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}});function Lc(){this.type="ShapePath",this.color=new ft,this.subPaths=[],this.currentPath=null}Object.assign(Lc.prototype,{moveTo:function(e,t){return this.currentPath=new Oe,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this},bezierCurveTo:function(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(g){const p=[];for(let S=0,T=g.length;S<T;S++){const E=g[S],b=new hi;b.curves=E.curves,p.push(b)}return p}function i(g,p){const S=p.length;let T=!1;for(let E=S-1,b=0;b<S;E=b++){let L=p[E],H=p[b],P=H.x-L.x,I=H.y-L.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(L=p[b],P=-P,H=p[E],I=-I),g.y<L.y||g.y>H.y)continue;if(g.y===L.y){if(g.x===L.x)return!0}else{const O=I*(g.x-L.x)-P*(g.y-L.y);if(O===0)return!0;if(O<0)continue;T=!T}}else{if(g.y!==L.y)continue;if(H.x<=g.x&&g.x<=L.x||L.x<=g.x&&g.x<=H.x)return!0}}return T}const r=hn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(t===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new hi,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],m=0,v;f[m]=void 0,d[m]=[];for(let g=0,p=s.length;g<p;g++)a=s[g],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new hi,p:v},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:v[0]});if(!f[0])return n(s);if(f.length>1){let g=!1;const p=[];for(let S=0,T=f.length;S<T;S++)h[S]=[];for(let S=0,T=f.length;S<T;S++){const E=d[S];for(let b=0;b<E.length;b++){const L=E[b];let H=!0;for(let P=0;P<f.length;P++)i(L.p,f[P].p)&&(S!==P&&p.push({froms:S,tos:P,hole:b}),H?(H=!1,h[P].push(L)):g=!0);H&&h[S].push(L)}}p.length>0&&(g||(d=h))}let y;for(let g=0,p=f.length;g<p;g++){c=f[g].s,l.push(c),y=d[g];for(let S=0,T=y.length;S<T;S++)c.holes.push(y[S].h)}return l}});class Im{constructor(t){Object.defineProperty(this,"isFont",{value:!0}),this.type="Font",this.data=t}generateShapes(t,n=100){const i=[],r=Dm(t,n,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}}function Dm(e,t,n){const i=Array.from?Array.from(e):String(e).split(""),r=t/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=s;else{const h=Om(u,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function Om(e,t,n,i,r){const s=r.glyphs[e]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}const o=new Lc;let a,c,l,u,h,f,d,m;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let y=0,g=v.length;y<g;)switch(v[y++]){case"m":a=v[y++]*t+n,c=v[y++]*t+i,o.moveTo(a,c);break;case"l":a=v[y++]*t+n,c=v[y++]*t+i,o.lineTo(a,c);break;case"q":l=v[y++]*t+n,u=v[y++]*t+i,h=v[y++]*t+n,f=v[y++]*t+i,o.quadraticCurveTo(h,f,l,u);break;case"b":l=v[y++]*t+n,u=v[y++]*t+i,h=v[y++]*t+n,f=v[y++]*t+i,d=v[y++]*t+n,m=v[y++]*t+i,o.bezierCurveTo(h,f,d,m,l,u);break}}return{offsetX:s.ha*t,path:o}}function Cc(e){Ot.call(this,e)}Cc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Cc,load:function(e,t,n,i){const r=this,s=new je(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){let a;try{a=JSON.parse(o)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);t&&t(c)},n,i)},parse:function(e){return new Im(e)}});let Yr;const Nm={getContext:function(){return Yr===void 0&&(Yr=new(window.AudioContext||window.webkitAudioContext)),Yr},setContext:function(e){Yr=e}};function mo(e){Ot.call(this,e)}mo.prototype=Object.assign(Object.create(Ot.prototype),{constructor:mo,load:function(e,t,n,i){const r=this,s=new je(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{const a=o.slice(0);Nm.getContext().decodeAudioData(a,function(l){t(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)}});function Rc(e,t,n){Ne.call(this,void 0,n);const i=new ft().set(e),r=new ft().set(t),s=new w(i.r,i.g,i.b),o=new w(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Rc.prototype=Object.assign(Object.create(Ne.prototype),{constructor:Rc,isHemisphereLightProbe:!0,copy:function(e){return Ne.prototype.copy.call(this,e),this},toJSON:function(e){return Ne.prototype.toJSON.call(this,e)}});function Pc(e,t){Ne.call(this,void 0,t);const n=new ft().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Pc.prototype=Object.assign(Object.create(Ne.prototype),{constructor:Pc,isAmbientLightProbe:!0,copy:function(e){return Ne.prototype.copy.call(this,e),this},toJSON:function(e){return Ne.prototype.toJSON.call(this,e)}});const Ic=new Lt,Dc=new Lt;function Fm(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Qt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Qt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Fm.prototype,{update:function(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(mt.DEG2RAD*t.fov*.5)/t.zoom;let a,c;Dc.elements[12]=-r,Ic.elements[12]=r,a=-o*t.aspect+s,c=o*t.aspect+s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*t.aspect-s,c=o*t.aspect-s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Dc),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Ic)}});class Bm extends ut{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}function Oc(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Oc.prototype,{accumulate:function(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(n[a]!==n[a+t]){o.setValue(n,i);break}},saveOriginalState:function(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]},_slerp:function(e,t,n,i){he.slerpFlat(e,t,e,t,e,n,i)},_slerpAdditive:function(e,t,n,i,r){const s=this._workIndex*r;he.multiplyQuaternionsFlat(e,s,e,t,e,n),he.slerpFlat(e,t,e,t,e,s,i)},_lerp:function(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]*s+e[n+o]*i}},_lerpAdditive:function(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}});const go="\\[\\]\\.:\\/",zm=new RegExp("["+go+"]","g"),yo="[^"+go+"]",Um="[^"+go.replace("\\.","")+"]",Hm=/((?:WC+[\/:])*)/.source.replace("WC",yo),Gm=/(WCOD+)?/.source.replace("WCOD",Um),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yo),Vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yo),Wm=new RegExp("^"+Hm+Gm+km+Vm+"$"),jm=["material","materials","bones"];function Nc(e,t,n){const i=n||se.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(Nc.prototype,{getValue:function(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function se(e,t,n){this.path=t,this.parsedPath=n||se.parseTrackName(t),this.node=se.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(se,{Composite:Nc,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new se.Composite(e,t,n):new se(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(zm,"")},parseTrackName:function(e){const t=Wm.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}}),Object.assign(se.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=se.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(se.prototype,{_getValue_unbound:se.prototype.getValue,_setValue_unbound:se.prototype.setValue});function qm(){this.uuid=mt.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(qm.prototype,{isAnimationObjectGroup:!0,add:function(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=e.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){const h=arguments[l],f=h.uuid;let d=t[f];if(d===void 0){d=a++,t[f]=d,e.push(h);for(let m=0,v=s;m!==v;++m)r[m].push(new se(h,n[m],i[m]))}else if(d<c){o=e[d];const m=--c,v=e[m];t[v.uuid]=d,e[d]=v,t[f]=m,e[m]=h;for(let y=0,g=s;y!==g;++y){const p=r[y],S=p[m];let T=p[d];p[d]=S,T===void 0&&(T=new se(h,n[y],i[y])),p[m]=T}}else e[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=t[c];if(l!==void 0&&l>=r){const u=r++,h=e[u];t[h.uuid]=l,e[l]=h,t[c]=u,e[u]=a;for(let f=0,d=i;f!==d;++f){const m=n[f],v=m[u],y=m[l];m[l]=v,m[u]=y}}}this.nCachedObjects_=r},uncache:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=e.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0)if(delete t[l],u<r){const h=--r,f=e[h],d=--s,m=e[d];t[f.uuid]=u,e[u]=f,t[m.uuid]=h,e[h]=m,e.pop();for(let v=0,y=i;v!==y;++v){const g=n[v],p=g[h],S=g[d];g[u]=p,g[h]=S,g.pop()}}else{const h=--s,f=e[h];h>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let d=0,m=i;d!==m;++d){const v=n[d];v[u]=v[h],v.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,s.push(e),o.push(t),r.push(u);for(let h=l,f=a.length;h!==f;++h){const d=a[h];u[h]=new se(d,e,t)}return u},unsubscribe_:function(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=e[o];t[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class Xm{constructor(t,n,i=null,r=n.blendMode){this._mixer=t,this._clip=n,this._localRoot=i,this.blendMode=r;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:Rn,endingEnd:Rn};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,n){return this.loop=t,this.repetitions=n,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,n,i){if(t.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=t._clip.duration,o=s/r,a=r/s;t.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(t,n,i){return t.crossFadeFrom(this,n,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/o,l[1]=n/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,n,i,r){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(t);const o=this._updateTime(n),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ko:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case as:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(t){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(t)[0];n*=r,t>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(t){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(n*=i.evaluate(t)[0],t>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n}_updateTime(t){const n=this._clip.duration,i=this.loop;let r=this.time+t,s=this._loopCount;const o=i===yh;if(t===0)return s===-1?r:o&&(s&1)==1?n-r:r;if(i===mh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return n-r}return r}_setEndings(t,n,i){const r=this._interpolantSettings;i?(r.endingStart=Pn,r.endingEnd=Pn):(t?r.endingStart=this.zeroSlopeAtStart?Pn:Rn:r.endingStart=or,n?r.endingEnd=this.zeroSlopeAtEnd?Pn:Rn:r.endingEnd=or)}_scheduleFading(t,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+t,c[1]=i,this}}function Fc(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Fc.prototype=Object.assign(Object.create(Je.prototype),{constructor:Fc,_bindAction:function(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let u=0;u!==r;++u){const h=i[u],f=h.name;let d=l[f];if(d!==void 0)s[u]=d;else{if(d=s[u],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,a,f));continue}const m=t&&t._propertyBindings[u].binding.parsedPath;d=new Oc(se.create(n,f,m),h.ValueTypeName,h.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,a,f),s[u]=d}o[u].resultBuffer=d.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e},_removeInactiveAction:function(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}},_lendAction:function(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Vr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?Se.findByName(i,e):e;const o=s!==null?s.uuid:e,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=as),a!==void 0){const u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new Xm(this,s,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Se.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,t[l]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});class vo{constructor(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}clone(){return new vo(this.value.clone===void 0?this.value:this.value.clone())}}function Bc(e,t,n){ye.call(this,e,t),this.meshPerAttribute=n||1}Bc.prototype=Object.assign(Object.create(ye.prototype),{constructor:Bc,isInstancedInterleavedBuffer:!0,copy:function(e){return ye.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){const t=ye.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){const t=ye.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function zc(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(zc.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(zc.prototype,{isGLBufferAttribute:!0,setBuffer:function(e){return this.buffer=e,this},setType:function(e,t){return this.type=e,this.elementSize=t,this},setItemSize:function(e){return this.itemSize=e,this},setCount:function(e){return this.count=e,this}});function Uc(e,t,n,i){this.ray=new Ei(e,t),this.near=n||0,this.far=i||Infinity,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Hc(e,t){return e.distance-t.distance}function xo(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const r=e.children;for(let s=0,o=r.length;s<o;s++)xo(r[s],t,n,!0)}}Object.assign(Uc.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)},intersectObject:function(e,t,n){const i=n||[];return xo(e,this,i,t),i.sort(Hc),i},intersectObjects:function(e,t,n){const i=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=e.length;r<s;r++)xo(e[r],this,i,t);return i.sort(Hc),i}});const Gc=new W;class Ym{constructor(t,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=t!==void 0?t:new W(Infinity,Infinity),this.max=n!==void 0?n:new W(-Infinity,-Infinity)}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Gc.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new W),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new W),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new W),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new W),n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Gc.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function Zr(e){ut.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Zr.prototype=Object.create(ut.prototype),Zr.prototype.constructor=Zr,Zr.prototype.isImmediateRenderObject=!0;const Zm=new en({side:Yt,depthWrite:!1,depthTest:!1});new Jt(new Ar,Zm),ct.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(ct.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e},Object.assign(Oe.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});function kc(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Te.call(this,e),this.type="catmullrom"}kc.prototype=Object.create(Te.prototype),Object.assign(kc.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),Object.assign(Ot.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Pm.extractUrlBase(e)}}),Ot.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Object.assign(Ym.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}}),Object.assign(pn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}}),Object.assign(yn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),Cr.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)},Object.assign(mt,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),mt.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),mt.ceilPowerOfTwo(e)}}),Object.assign(me.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(e){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()}}),Object.assign(Lt.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,s)},getInverse:function(e){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()}}),Ge.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)},Object.assign(he.prototype,{multiplyVector3:function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}}),Object.assign(Ei.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}}),Object.assign(re.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}}),Object.assign(re,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),re.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),re.getNormal(e,t,n,i)}}),Object.assign(hi.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new gc(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new mm(this,e)}}),Object.assign(W.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(w.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Dt.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(ut.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.defineProperties(ut.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign(Jt.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties(Jt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),vh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(Hs.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(Vs.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),Gs.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(ct.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}}),Qt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)},Object.defineProperties(zt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}}),Object.defineProperties(St.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===bi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(bi)}}}),Object.assign(St.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?bi:ar),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(Ht.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new St(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.defineProperties(Ht.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(Xr.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}}),Object.defineProperties(Uc.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}}),Object.defineProperties(ye.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===bi},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}}),Object.assign(ye.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?bi:ar),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(gc.prototype,{getArrays:function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")}}),Object.assign(Ua.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}}),Object.defineProperties(vo.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(dt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ft}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Co}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}}),Object.defineProperties(un.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(En.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}}),Object.defineProperties(ce.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}}),Object.assign(Fi.prototype,{clearTarget:function(e,t,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(Fi.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?$o:_i}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Fa.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Mi.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}}),Object.defineProperties(Bm.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new mo().load(e,function(i){t.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}}),Xn.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)},Xn.prototype.clear=function(e,t,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(e,t,n,i)},On.crossOrigin=void 0,On.loadTexture=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new no;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s},On.loadTextureCube=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new eo;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s},On.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},On.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);export{fo as AmbientLight,Ar as BoxGeometry,_n as Group,Jt as Mesh,un as MeshPhongMaterial,Qt as PerspectiveCamera,lo as PointLight,Ua as Scene,W as Vector2,Fi as WebGLRenderer};
