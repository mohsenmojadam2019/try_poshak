var TryPoshakUltra=(()=>{var Ym=0,rd=1,Km=2;var od=1,Zm=2,Fi=3,xi=0,En=1,yn=2,ms=0,ar=1,ad=2,cd=3,ld=4,jm=5,Os=100,Jm=101,Qm=102,eg=103,tg=104,ng=200,ig=201,sg=202,rg=203,$c=204,Yc=205,og=206,ag=207,cg=208,lg=209,hg=210,ug=211,dg=212,fg=213,pg=214,dl=0,fl=1,pl=2,cr=3,ml=4,gl=5,_l=6,yl=7,hd=0,mg=1,gg=2,gs=0,_g=1,yg=2,vg=3,vl=4,xg=5,Mg=6,Sg=7,Yu="attached",bg="detached",ud=300,_r=301,yr=302,xl=303,Ml=304,Ba=306,Bs=1e3,Wn=1001,oo=1002,hn=1003,Sl=1004;var vr=1005;var an=1006,xo=1007;var bi=1008;var Ei=1009,dd=1010,fd=1011,Mo=1012,bl=1013,zs=1014,ri=1015,So=1016,El=1017,Tl=1018,bo=1020,pd=35902,md=35899,gd=1021,_d=1022,Yn=1023,ao=1026,Eo=1027,wl=1028,Al=1029,yd=1030,Rl=1031;var Cl=1033,ka=33776,za=33777,Ha=33778,Va=33779,Il=35840,Ll=35841,Pl=35842,Dl=35843,Nl=36196,Ul=37492,Fl=37496,Ol=37808,Bl=37809,kl=37810,zl=37811,Hl=37812,Vl=37813,Gl=37814,Wl=37815,Xl=37816,ql=37817,$l=37818,Yl=37819,Kl=37820,Zl=37821,jl=36492,Jl=36494,Ql=36495,eh=36283,th=36284,nh=36285,ih=36286;var lr=2300,hr=2301,qc=2302,Ku=2400,Zu=2401,ju=2402,Eg=2500;var vd=0,Ga=1,To=2,Tg=3200,wg=3201;var xd=0,Ag=1,_s="",Et="srgb",Jt="srgb-linear",da="linear",gt="srgb";var or=7680;var Ju=519,Rg=512,Cg=513,Ig=514,Md=515,Lg=516,Pg=517,Dg=518,Ng=519,Kc=35044;var Sd="300 es",yi=2e3,fa=2001;var as=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dm=1234567,ha=Math.PI/180,ur=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function bd(n,e){return(n%e+e)%e}function dv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function fv(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function pv(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function mv(n,e=1){return e-Math.abs(bd(n,e*2)-e)}function gv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _v(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function yv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vv(n,e){return n+Math.random()*(e-n)}function xv(n){return n*(.5-Math.random())}function Mv(n){n!==void 0&&(dm=n);let e=dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sv(n){return n*ha}function bv(n){return n*ur}function Ev(n){return(n&n-1)===0&&n!==0}function Tv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Av(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Wa={DEG2RAD:ha,RAD2DEG:ur,generateUUID:vi,clamp:je,euclideanModulo:bd,mapLinear:dv,inverseLerp:fv,lerp:ua,damp:pv,pingpong:mv,smoothstep:gv,smootherstep:_v,randInt:yv,randFloat:vv,randFloatSpread:xv,seededRandom:Mv,degToRad:Sv,radToDeg:bv,isPowerOfTwo:Ev,ceilPowerOfTwo:Tv,floorPowerOfTwo:wv,setQuaternionFromProperEuler:Av,normalize:mt,denormalize:_i},Je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let A=Math.sqrt(b),w=Math.atan2(A,p*E);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}let x=a*E;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mu=new L,fm=new cn,Ve=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],b=s[4],x=s[7],A=s[2],w=s[5],C=s[8];return r[0]=o*_+a*E+c*A,r[3]=o*m+a*b+c*w,r[6]=o*p+a*x+c*C,r[1]=l*_+h*E+u*A,r[4]=l*m+h*b+u*w,r[7]=l*p+h*x+u*C,r[2]=d*_+f*E+g*A,r[5]=d*m+f*b+g*w,r[8]=d*p+f*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Su.makeScale(e,t)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,t){return this.premultiply(Su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Su=new Ve;function Ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ug(){let n=co("canvas");return n.style.display="block",n}var pm={};function lo(n){n in pm||(pm[n]=!0,console.warn(n))}function Fg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var mm=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rv(){let n={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=ro(s.r),s.g=ro(s.g),s.b=ro(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jt]:{primaries:e,whitePoint:i,transfer:da,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),n}var Ze=Rv();function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xr,Zc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=co("canvas")),Xr.width=e.width,Xr.height=e.height;let s=Xr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=co("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(os(t[i]/255)*255):t[i]=os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cv=0,ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bu(s[o].image)):r.push(bu(s[o]))}else r=bu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iv=0,Eu=new L,Yt=class n extends as{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wn,s=Wn,r=an,o=bi,a=Yn,c=Ei,l=n.DEFAULT_ANISOTROPY,h=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=vi(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eu).x}get height(){return this.source.getSize(Eu).y}get depth(){return this.source.getSize(Eu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=ud;Yt.DEFAULT_ANISOTROPY=1;var ht=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,x=(f+1)/2,A=(p+1)/2,w=(h+d)/4,C=(u+_)/4,D=(g+m)/4;return b>x&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=C/i):x>A?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=D/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=D/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends as{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Yt(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends jc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pa=class extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jc=class extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sc.copy(i.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),bc.subVectors(this.max,na),qr.subVectors(e.a,na),$r.subVectors(e.b,na),Yr.subVectors(e.c,na),Is.subVectors($r,qr),Ls.subVectors(Yr,$r),nr.subVectors(qr,Yr);let t=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-nr.z,nr.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,nr.z,0,-nr.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-nr.y,nr.x,0];return!Tu(t,qr,$r,Yr,bc)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,qr,$r,Yr,bc))?!1:(Ec.crossVectors(Is,Ls),t=[Ec.x,Ec.y,Ec.z],Tu(t,qr,$r,Yr,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new L,new L,new L,new L,new L,new L,new L,new L],pi=new L,Sc=new bn,qr=new L,$r=new L,Yr=new L,Is=new L,Ls=new L,nr=new L,na=new L,bc=new L,Ec=new L,ir=new L;function Tu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ir.fromArray(n,r);let a=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),c=e.dot(ir),l=t.dot(ir),h=i.dot(ir);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Lv=new bn,ia=new L,wu=new L,Rn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ia,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(wu)),this.expandByPoint(ia.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ts=new L,Au=new L,Tc=new L,Ps=new L,Ru=new L,wc=new L,Cu=new L,dr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Au.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(Au);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Tc),a=Ps.dot(this.direction),c=-Ps.dot(Tc),l=Ps.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Au).addScaledVector(Tc,d),f}intersectSphere(e,t){ts.subVectors(e.center,this.origin);let i=ts.dot(this.direction),s=ts.dot(ts)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,i,s,r){Ru.subVectors(t,e),wc.subVectors(i,e),Cu.crossVectors(Ru,wc);let o=this.direction.dot(Cu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ps.subVectors(this.origin,e);let c=a*this.direction.dot(wc.crossVectors(Ps,wc));if(c<0)return null;let l=a*this.direction.dot(Ru.cross(Ps));if(l<0||c+l>o)return null;let h=-a*Ps.dot(Cu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Kr.setFromMatrixColumn(e,0).length(),r=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pv,e,Dv)}lookAt(e,t,i){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ds.crossVectors(i,Vn),Ds.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ds.crossVectors(i,Vn)),Ds.normalize(),Ac.crossVectors(Vn,Ds),s[0]=Ds.x,s[4]=Ac.x,s[8]=Vn.x,s[1]=Ds.y,s[5]=Ac.y,s[9]=Vn.y,s[2]=Ds.z,s[6]=Ac.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],b=i[7],x=i[11],A=i[15],w=s[0],C=s[4],D=s[8],S=s[12],M=s[1],I=s[5],O=s[9],B=s[13],G=s[2],X=s[6],V=s[10],j=s[14],H=s[3],se=s[7],ue=s[11],be=s[15];return r[0]=o*w+a*M+c*G+l*H,r[4]=o*C+a*I+c*X+l*se,r[8]=o*D+a*O+c*V+l*ue,r[12]=o*S+a*B+c*j+l*be,r[1]=h*w+u*M+d*G+f*H,r[5]=h*C+u*I+d*X+f*se,r[9]=h*D+u*O+d*V+f*ue,r[13]=h*S+u*B+d*j+f*be,r[2]=g*w+_*M+m*G+p*H,r[6]=g*C+_*I+m*X+p*se,r[10]=g*D+_*O+m*V+p*ue,r[14]=g*S+_*B+m*j+p*be,r[3]=E*w+b*M+x*G+A*H,r[7]=E*C+b*I+x*X+A*se,r[11]=E*D+b*O+x*V+A*ue,r[15]=E*S+b*B+x*j+A*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,b=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,w=t*E+i*b+s*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=E*C,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*C,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*C,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*C,e[4]=b*C,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*C,e[8]=x*C,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*C,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*C,e[12]=A*C,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*C,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=c*l,b=c*h,x=c*u,A=i.x,w=i.y,C=i.z;return s[0]=(1-(_+p))*A,s[1]=(f+x)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*C,s[9]=(m-E)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Kr.set(s[0],s[1],s[2]).length(),o=Kr.set(s[4],s[5],s[6]).length(),a=Kr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);let l=1/r,h=1/o,u=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,t.setFromRotationMatrix(mi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=yi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===yi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===fa)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yi,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===yi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===fa)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Kr=new L,mi=new We,Pv=new L(0,0,0),Dv=new L(1,1,1),Ds=new L,Ac=new L,Vn=new L,_m=new We,ym=new cn,Mi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Nv=0,vm=new L,Zr=new cn,ns=new We,Rc=new L,sa=new L,Uv=new L,Fv=new cn,xm=new L(1,0,0),Mm=new L(0,1,0),Sm=new L(0,0,1),bm={type:"added"},Ov={type:"removed"},jr={type:"childadded",child:null},Iu={type:"childremoved",child:null},Ut=class n extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Mi,i=new cn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ve}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rc.copy(e):Rc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(sa,Rc,this.up):ns.lookAt(Rc,sa,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),Zr.setFromRotationMatrix(ns),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ov),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new L(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new L,is=new L,Lu=new L,ss=new L,Jr=new L,Qr=new L,Em=new L,Pu=new L,Du=new L,Nu=new L,Uu=new ht,Fu=new ht,Ou=new ht,Fs=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gi.subVectors(s,t),is.subVectors(i,t),Lu.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(is),c=gi.dot(Lu),l=is.dot(is),h=is.dot(Lu),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ss)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ss.x),c.addScaledVector(o,ss.y),c.addScaledVector(a,ss.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Uu.setScalar(0),Fu.setScalar(0),Ou.setScalar(0),Uu.fromBufferAttribute(e,t),Fu.fromBufferAttribute(e,i),Ou.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uu,r.x),o.addScaledVector(Fu,r.y),o.addScaledVector(Ou,r.z),o}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),is.subVectors(e,t),gi.cross(is).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),is.subVectors(this.a,this.b),gi.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Jr.subVectors(s,i),Qr.subVectors(r,i),Pu.subVectors(e,i);let c=Jr.dot(Pu),l=Qr.dot(Pu);if(c<=0&&l<=0)return t.copy(i);Du.subVectors(e,s);let h=Jr.dot(Du),u=Qr.dot(Du);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Jr,o);Nu.subVectors(e,r);let f=Jr.dot(Nu),g=Qr.dot(Nu);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Qr,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Em.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Em,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Jr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Bu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=bd(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Bu(o,r,e+1/3),this.g=Bu(o,r,e),this.b=Bu(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=Og[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ze.workingToColorSpace(_n.copy(this),e),Math.round(je(_n.r*255,0,255))*65536+Math.round(je(_n.g*255,0,255))*256+Math.round(je(_n.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Et){Ze.workingToColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ns),this.setHSL(Ns.h+e,Ns.s+t,Ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ns),e.getHSL(Cc);let i=ua(Ns.h,Cc.h,t),s=ua(Ns.s,Cc.s,t),r=ua(Ns.l,Cc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new De;De.NAMES=Og;var Bv=0,Cn=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ar,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Yc,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$c&&(i.blendSrc=this.blendSrc),this.blendDst!==Yc&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Si=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new L,Ic=new Je,kv=0,Tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}};var ga=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _a=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var qn=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},zv=0,ii=new We,ku=new Ut,eo=new L,Gn=new bn,ra=new bn,on=new L,un=class n extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?_a:ga)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qn(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Gn.min,ra.min),Gn.expandByPoint(on),on.addVectors(Gn.max,ra.max),Gn.expandByPoint(on)):(Gn.expandByPoint(ra.min),Gn.expandByPoint(ra.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(eo.fromBufferAttribute(e,l),on.add(eo)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new L,c[D]=new L;let l=new L,h=new L,u=new L,d=new Je,f=new Je,g=new Je,_=new L,m=new L;function p(D,S,M){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(_),a[S].add(_),a[M].add(_),c[D].add(m),c[S].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,S=E.length;D<S;++D){let M=E[D],I=M.start,O=M.count;for(let B=I,G=I+O;B<G;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new L,x=new L,A=new L,w=new L;function C(D){A.fromBufferAttribute(s,D),w.copy(A);let S=a[D];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(w,S);let I=x.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,I)}for(let D=0,S=E.length;D<S;++D){let M=E[D],I=M.start,O=M.count;for(let B=I,G=I+O;B<G;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tm=new We,sr=new dr,Lc=new Rn,wm=new L,Pc=new L,Dc=new L,Nc=new L,zu=new L,Uc=new L,Am=new L,Fc=new L,Qt=class extends Ut{constructor(e=new un,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Uc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(zu.fromBufferAttribute(u,e),o?Uc.addScaledVector(zu,h):Uc.addScaledVector(zu.sub(t),h))}t.add(Uc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(Lc.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Lc,wm)===null||sr.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Tm.copy(r).invert(),sr.copy(e.ray).applyMatrix4(Tm),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,A=b;x<A;x+=3){let w=a.getX(x),C=a.getX(x+1),D=a.getX(x+2);s=Oc(this,p,e,i,l,h,u,w,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Oc(this,o,e,i,l,h,u,E,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,A=b;x<A;x+=3){let w=x,C=x+1,D=x+2;s=Oc(this,p,e,i,l,h,u,w,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=m,b=m+1,x=m+2;s=Oc(this,o,e,i,l,h,u,E,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Hv(n,e,t,i,s,r,o,a){let c;if(e.side===En?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;Fc.copy(a),Fc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Fc);return l<t.near||l>t.far?null:{distance:l,point:Fc.clone(),object:n}}function Oc(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Pc),n.getVertexPosition(c,Dc),n.getVertexPosition(l,Nc);let h=Hv(n,e,t,i,Pc,Dc,Nc,Am);if(h){let u=new L;Fs.getBarycoord(Am,Pc,Dc,Nc,u),s&&(h.uv=Fs.getInterpolatedAttribute(s,a,c,l,u,new Je)),r&&(h.uv1=Fs.getInterpolatedAttribute(r,a,c,l,u,new Je)),o&&(h.normal=Fs.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Fs.getNormal(Pc,Dc,Nc,d.normal),h.face=d,h.barycoord=u}return h}var uo=class n extends un{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(u,2));function g(_,m,p,E,b,x,A,w,C,D,S){let M=x/C,I=A/D,O=x/2,B=A/2,G=w/2,X=C+1,V=D+1,j=0,H=0,se=new L;for(let ue=0;ue<V;ue++){let be=ue*I-B;for(let qe=0;qe<X;qe++){let yt=qe*M-O;se[_]=yt*E,se[m]=be*b,se[p]=G,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=w>0?1:-1,h.push(se.x,se.y,se.z),u.push(qe/C),u.push(1-ue/D),j+=1}}for(let ue=0;ue<D;ue++)for(let be=0;be<C;be++){let qe=d+be+X*ue,yt=d+be+X*(ue+1),St=d+(be+1)+X*(ue+1),ct=d+(be+1)+X*ue;c.push(qe,yt,ct),c.push(yt,St,ct),H+=6}a.addGroup(f,H,S),f+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=xr(n[t]);for(let s in i)e[s]=i[s]}return e}function Vv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Td(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Bg={clone:xr,merge:vn},Gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gv,this.fragmentShader=Wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ya=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Us=new L,Rm=new Je,Cm=new Je,$t=class extends ya{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,Rm,Cm),t.subVectors(Cm,Rm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},to=-90,no=1,Qc=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(to,no,e,t);s.layers=this.layers,this.add(s);let r=new $t(to,no,e,t);r.layers=this.layers,this.add(r);let o=new $t(to,no,e,t);o.layers=this.layers,this.add(o);let a=new $t(to,no,e,t);a.layers=this.layers,this.add(a);let c=new $t(to,no,e,t);c.layers=this.layers,this.add(c);let l=new $t(to,no,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},va=class extends Yt{constructor(e=[],t=_r,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},el=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new uo(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ms});r.uniforms.tEquirect.value=t;let o=new Qt(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=an),new Qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Xn=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xv={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var xa=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},po=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new L,mo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Im=new L,Lm=new ht,Pm=new ht,qv=new L,Dm=new We,Bc=new L,Hu=new Rn,Nm=new We,Vu=new dr,Ma=class extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bc),this.boundingBox.expandByPoint(Bc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bc),this.boundingSphere.expandByPoint(Bc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hu.copy(this.boundingSphere),Hu.applyMatrix4(s),e.ray.intersectsSphere(Hu)!==!1&&(Nm.copy(s).invert(),Vu.copy(e.ray).applyMatrix4(Nm),!(this.boundingBox!==null&&Vu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Lm.fromBufferAttribute(s.attributes.skinIndex,e),Pm.fromBufferAttribute(s.attributes.skinWeight,e),Im.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Pm.getComponent(r);if(o!==0){let a=Lm.getComponent(r);Dm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(qv.copy(Im).applyMatrix4(Dm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},go=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sa=class extends Yt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=hn,h=hn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Um=new We,$v=new We,ba=class n{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new We;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:$v;Um.multiplyMatrices(a,t[r]),Um.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Sa(t,e,e,Yn,ri);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new go),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ks=class extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},io=new We,Fm=new We,kc=[],Om=new bn,Yv=new We,oa=new Qt,aa=new Rn,Ea=class extends Qt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),Om.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(Om)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),aa.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,io),Fm.multiplyMatrices(i,io),oa.matrixWorld=Fm,oa.raycast(e,kc);for(let o=0,a=kc.length;o<a;o++){let c=kc[o];c.instanceId=r,c.object=this,t.push(c)}kc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sa(new Float32Array(s*this.count),s,this.count,wl,ri));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gu=new L,Kv=new L,Zv=new Ve,Ii=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Gu.subVectors(i,t).cross(Kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Gu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zv.getNormalMatrix(e),s=this.coplanarPoint(Gu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new Rn,jv=new Je(.5,.5),zc=new L,_o=class{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],b=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,p-g,A-E).normalize(),s[1].setComponents(l+o,f+h,p+g,A+E).normalize(),s[2].setComponents(l+a,f+u,p+_,A+b).normalize(),s[3].setComponents(l-a,f-u,p-_,A-b).normalize(),i)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,p-m,A-x).normalize();else if(s[4].setComponents(l-c,f-d,p-m,A-x).normalize(),t===yi)s[5].setComponents(l+c,f+d,p+m,A+x).normalize();else if(t===fa)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);let t=jv.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(zc.x=s.normal.x>0?e.max.x:e.min.x,zc.y=s.normal.y>0?e.max.y:e.min.y,zc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yo=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tl=new L,nl=new L,Bm=new We,ca=new dr,Hc=new Rn,Wu=new L,km=new L,fr=class extends Ut{constructor(e=new un,t=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)tl.fromBufferAttribute(t,s-1),nl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=tl.distanceTo(nl);e.setAttribute("lineDistance",new qn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(s),Hc.radius+=r,e.ray.intersectsSphere(Hc)===!1)return;Bm.copy(s).invert(),ca.copy(e.ray).applyMatrix4(Bm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=h.getX(_),E=h.getX(_+1),b=Vc(this,e,ca,c,p,E,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Vc(this,e,ca,c,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=Vc(this,e,ca,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Vc(this,e,ca,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(tl.fromBufferAttribute(a,s),nl.fromBufferAttribute(a,r),t.distanceSqToSegment(tl,nl,Wu,km)>i)return;Wu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Wu);if(!(l<e.near||l>e.far))return{distance:l,point:km.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var zm=new L,Hm=new L,Ta=class extends fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)zm.fromBufferAttribute(t,s),Hm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zm.distanceTo(Hm);e.setAttribute("lineDistance",new qn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vo=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vm=new We,Qu=new dr,Gc=new Rn,Wc=new L,Aa=class extends Ut{constructor(e=new un,t=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gc.copy(i.boundingSphere),Gc.applyMatrix4(s),Gc.radius+=r,e.ray.intersectsSphere(Gc)===!1)return;Vm.copy(s).invert(),Qu.copy(e.ray).applyMatrix4(Vm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);Wc.fromBufferAttribute(u,m),Gm(Wc,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Wc.fromBufferAttribute(u,g),Gm(Wc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gm(n,e,t,i,s,r,o){let a=Qu.distanceSqToPoint(n);if(a<t){let c=new L;Qu.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends Yt{constructor(e,t,i=zs,s,r,o,a=hn,c=hn,l,h=ao,u=1){if(h!==ao&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ca=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ia=class n extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let E=p*d-o;for(let b=0;b<l;b++){let x=b*u-r;g.push(x,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let b=E+l*p,x=E+l*(p+1),A=E+1+l*(p+1),w=E+1+l*p;f.push(b,x,w),f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(_,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var pr=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var il=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Jv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Wm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function kg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ku,endingEnd:Ku}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zu:r=e,a=2*t-i;break;case ju:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Zu:o=e,c=2*i-t;break;case ju:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+E*o[l+A]+b*o[c+A]+x*o[u+A];return r}},ol=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},al=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xc(t,this.TimeBufferType),this.values=Xc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xc(e.times,Array),values:Xc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case qc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Jv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=hr;var ls=class extends Ln{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=lr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};La.prototype.ValueTypeName="color";var Di=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};Di.prototype.ValueTypeName="number";var cl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)cn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ni=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Ln{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=lr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};Ui.prototype.ValueTypeName="vector";var Pa=class{constructor(e="",t=-1,i=[],s=Eg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(tx(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Ln.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Qv(c);c=Wm(c,1,h),l=Wm(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Di(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];kg(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let E=0;E!==d[g].morphTargets.length;++E){let b=d[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new Di(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";i(Ui,f+".position",d,"pos",s),i(Ni,f+".quaternion",d,"rot",s),i(Ui,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ex(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return La;case"quaternion":return Ni;case"bool":case"boolean":return ls;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function tx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ex(n.type);if(n.times===void 0){let t=[],i=[];kg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Li={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ll=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zg=new ll,si=class{constructor(e){this.manager=e!==void 0?e:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs={},ed=class extends Error{constructor(e,t){super(e),this.response=t}},us=class extends si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Li.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(rs[e]!==void 0){rs[e].push({onLoad:t,onProgress:i,onError:s});return}rs[e]=[],rs[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=rs[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){E();function E(){u.read().then(({done:b,value:x})=>{if(b)p.close();else{_+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,C=h.length;w<C;w++){let D=h[w];D.onProgress&&D.onProgress(A)}p.enqueue(x),E()}},b=>{p.error(b)})}}});return new Response(m)}else throw new ed(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Li.add(`file:${e}`,l);let h=rs[e];delete rs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=rs[e];if(h===void 0)throw this.manager.itemError(e),l;delete rs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var so=new WeakMap,hl=class extends si{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=so.get(o);u===void 0&&(u=[],so.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=co("img");function c(){h(),t&&t(this);let u=so.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}so.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Li.remove(`image:${e}`);let d=so.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}so.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Li.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var mr=class extends si{constructor(e){super(e)}load(e,t,i,s){let r=new Yt,o=new hl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},gr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Xu=new We,Xm=new L,qm=new L,Da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Xm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xm),qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qm),t.updateMatrixWorld(),Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},td=class extends Da{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Na=class extends gr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new td}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$m=new We,la=new L,qu=new L,nd=class extends Da{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),la.setFromMatrixPosition(e.matrixWorld),i.position.copy(la),qu.copy(i.position),qu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qu),i.updateMatrixWorld(),s.makeTranslation(-la.x,-la.y,-la.z),$m.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($m,i.coordinateSystem,i.reversedDepth)}},Ua=class extends gr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ds=class extends ya{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},id=class extends Da{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new id}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fa=class extends gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ps=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var $u=new WeakMap,Oa=class extends si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if($u.has(o)===!0)s&&s($u.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Li.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),$u.set(c,l),Li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Li.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ul=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wd="\\[\\]\\.:\\/",nx=new RegExp("["+wd+"]","g"),Ad="[^"+wd+"]",ix="[^"+wd.replace("\\.","")+"]",sx=/((?:WC+[\/:])*)/.source.replace("WC",Ad),rx=/(WCOD+)?/.source.replace("WCOD",ix),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ad),ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ad),cx=new RegExp("^"+sx+rx+ox+ax+"$"),lx=["material","materials","bones","map"],sd=class{constructor(e,t,i){let s=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nx,"")}static parseTrackName(e){let t=cx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);lx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=sd;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hw=new Float32Array(1);function Rd(n,e,t,i){let s=hx(i);switch(t){case gd:return n*e;case wl:return n*e/s.components*s.byteLength;case Al:return n*e/s.components*s.byteLength;case yd:return n*e*2/s.components*s.byteLength;case Rl:return n*e*2/s.components*s.byteLength;case _d:return n*e*3/s.components*s.byteLength;case Yn:return n*e*4/s.components*s.byteLength;case Cl:return n*e*4/s.components*s.byteLength;case ka:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Dl:return Math.max(n,16)*Math.max(e,8)/4;case Il:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jl:case Jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hx(n){switch(n){case Ei:case dd:return{byteLength:1,components:1};case Mo:case fd:case So:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case zs:case bl:case ri:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function h0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dx(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ox=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Bx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,vM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,MM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,CM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,UM=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,kM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:fx,alphahash_pars_fragment:px,alphamap_fragment:mx,alphamap_pars_fragment:gx,alphatest_fragment:_x,alphatest_pars_fragment:yx,aomap_fragment:vx,aomap_pars_fragment:xx,batching_pars_vertex:Mx,batching_vertex:Sx,begin_vertex:bx,beginnormal_vertex:Ex,bsdfs:Tx,iridescence_fragment:wx,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Lx,color_fragment:Px,color_pars_fragment:Dx,color_pars_vertex:Nx,color_vertex:Ux,common:Fx,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:Bx,displacementmap_pars_vertex:kx,displacementmap_vertex:zx,emissivemap_fragment:Hx,emissivemap_pars_fragment:Vx,colorspace_fragment:Gx,colorspace_pars_fragment:Wx,envmap_fragment:Xx,envmap_common_pars_fragment:qx,envmap_pars_fragment:$x,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:r2,envmap_vertex:Kx,fog_vertex:Zx,fog_pars_vertex:jx,fog_fragment:Jx,fog_pars_fragment:Qx,gradientmap_pars_fragment:e2,lightmap_pars_fragment:t2,lights_lambert_fragment:n2,lights_lambert_pars_fragment:i2,lights_pars_begin:s2,lights_toon_fragment:o2,lights_toon_pars_fragment:a2,lights_phong_fragment:c2,lights_phong_pars_fragment:l2,lights_physical_fragment:h2,lights_physical_pars_fragment:u2,lights_fragment_begin:d2,lights_fragment_maps:f2,lights_fragment_end:p2,logdepthbuf_fragment:m2,logdepthbuf_pars_fragment:g2,logdepthbuf_pars_vertex:_2,logdepthbuf_vertex:y2,map_fragment:v2,map_pars_fragment:x2,map_particle_fragment:M2,map_particle_pars_fragment:S2,metalnessmap_fragment:b2,metalnessmap_pars_fragment:E2,morphinstance_vertex:T2,morphcolor_vertex:w2,morphnormal_vertex:A2,morphtarget_pars_vertex:R2,morphtarget_vertex:C2,normal_fragment_begin:I2,normal_fragment_maps:L2,normal_pars_fragment:P2,normal_pars_vertex:D2,normal_vertex:N2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:B2,iridescence_pars_fragment:k2,opaque_fragment:z2,packing:H2,premultiplied_alpha_fragment:V2,project_vertex:G2,dithering_fragment:W2,dithering_pars_fragment:X2,roughnessmap_fragment:q2,roughnessmap_pars_fragment:$2,shadowmap_pars_fragment:Y2,shadowmap_pars_vertex:K2,shadowmap_vertex:Z2,shadowmask_pars_fragment:j2,skinbase_vertex:J2,skinning_pars_vertex:Q2,skinning_vertex:eM,skinnormal_vertex:tM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:sM,tonemapping_pars_fragment:rM,transmission_fragment:oM,transmission_pars_fragment:aM,uv_pars_fragment:cM,uv_pars_vertex:lM,uv_vertex:hM,worldpos_vertex:uM,background_vert:dM,background_frag:fM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:_M,depth_vert:yM,depth_frag:vM,distanceRGBA_vert:xM,distanceRGBA_frag:MM,equirect_vert:SM,equirect_frag:bM,linedashed_vert:EM,linedashed_frag:TM,meshbasic_vert:wM,meshbasic_frag:AM,meshlambert_vert:RM,meshlambert_frag:CM,meshmatcap_vert:IM,meshmatcap_frag:LM,meshnormal_vert:PM,meshnormal_frag:DM,meshphong_vert:NM,meshphong_frag:UM,meshphysical_vert:FM,meshphysical_frag:OM,meshtoon_vert:BM,meshtoon_frag:kM,points_vert:zM,points_frag:HM,shadow_vert:VM,shadow_frag:GM,sprite_vert:WM,sprite_frag:XM},oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Oi={basic:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:vn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:vn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:vn([oe.points,oe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:vn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:vn([oe.common,oe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:vn([oe.sprite,oe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:vn([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:vn([oe.lights,oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Oi.physical={uniforms:vn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var sh={r:0,b:0,g:0},Mr=new Mi,qM=new We;function $M(n,e,t,i,s,r,o){let a=new De(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1,A=g(b);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){let A=g(x);A&&(A.isCubeTexture||A.mapping===Ba)?(h===void 0&&(h=new Qt(new uo(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:xr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mr.copy(x.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Mr)),h.material.toneMapped=Ze.getTransfer(A.colorSpace)!==gt,(u!==A||d!==A.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Qt(new Ia(2,2),new $n({name:"BackgroundMaterial",uniforms:xr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,x){b.getRGB(sh,Td(n)),i.buffers.color.setClear(sh.r,sh.g,sh.b,x,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:m,dispose:E}}function YM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,I,O,B,G){let X=!1,V=u(B,O,I);r!==V&&(r=V,l(r.object)),X=f(M,B,O,G),X&&g(M,B,O,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(M,I,O,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,I,O){let B=O.wireframe===!0,G=i[M.id];G===void 0&&(G={},i[M.id]=G);let X=G[I.id];X===void 0&&(X={},G[I.id]=X);let V=X[B];return V===void 0&&(V=d(c()),X[B]=V),V}function d(M){let I=[],O=[],B=[];for(let G=0;G<t;G++)I[G]=0,O[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,I,O,B){let G=r.attributes,X=I.attributes,V=0,j=O.getAttributes();for(let H in j)if(j[H].location>=0){let ue=G[H],be=X[H];if(be===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),ue===void 0||ue.attribute!==be||be&&ue.data!==be.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function g(M,I,O,B){let G={},X=I.attributes,V=0,j=O.getAttributes();for(let H in j)if(j[H].location>=0){let ue=X[H];ue===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));let be={};be.attribute=ue,ue&&ue.data&&(be.data=ue.data),G[H]=be,V++}r.attributes=G,r.attributesNum=V,r.index=B}function _(){let M=r.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let O=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;O[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),G[M]!==I&&(n.vertexAttribDivisor(M,I),G[M]=I)}function E(){let M=r.newAttributes,I=r.enabledAttributes;for(let O=0,B=I.length;O<B;O++)I[O]!==M[O]&&(n.disableVertexAttribArray(O),I[O]=0)}function b(M,I,O,B,G,X,V){V===!0?n.vertexAttribIPointer(M,I,O,G,X):n.vertexAttribPointer(M,I,O,B,G,X)}function x(M,I,O,B){_();let G=B.attributes,X=O.getAttributes(),V=I.defaultAttributeValues;for(let j in X){let H=X[j];if(H.location>=0){let se=G[j];if(se===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let ue=se.normalized,be=se.itemSize,qe=e.get(se);if(qe===void 0)continue;let yt=qe.buffer,St=qe.type,ct=qe.bytesPerElement,$=St===n.INT||St===n.UNSIGNED_INT||se.gpuType===bl;if(se.isInterleavedBufferAttribute){let K=se.data,ge=K.stride,Be=se.offset;if(K.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)p(H.location+Re,K.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Re=0;Re<H.locationSize;Re++)m(H.location+Re);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let Re=0;Re<H.locationSize;Re++)b(H.location+Re,be/H.locationSize,St,ue,ge*ct,(Be+be/H.locationSize*Re)*ct,$)}else{if(se.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)p(H.location+K,se.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let K=0;K<H.locationSize;K++)b(H.location+K,be/H.locationSize,St,ue,be*ct,be/H.locationSize*K*ct,$)}}else if(V!==void 0){let ue=V[j];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(H.location,ue);break;case 3:n.vertexAttrib3fv(H.location,ue);break;case 4:n.vertexAttrib4fv(H.location,ue);break;default:n.vertexAttrib1fv(H.location,ue)}}}}E()}function A(){D();for(let M in i){let I=i[M];for(let O in I){let B=I[O];for(let G in B)h(B[G].object),delete B[G];delete I[O]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let I=i[M.id];for(let O in I){let B=I[O];for(let G in B)h(B[G].object),delete B[G];delete I[O]}delete i[M.id]}function C(M){for(let I in i){let O=i[I];if(O[M.id]===void 0)continue;let B=O[M.id];for(let G in B)h(B[G].object),delete B[G];delete O[M.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function KM(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ZM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Yn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===So&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ei&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ri&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function jM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ii,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:i,b=E*4,x=p.clippingState||null;c.value=x,x=h(g,d,b,f);for(let A=0;A!==b;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function JM(n){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=_r:a===Ml&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===xl||a===Ml)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new el(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ao=4,Hg=[.125,.215,.35,.446,.526,.582],Er=20,Cd=new ds,Vg=new De,Id=null,Ld=0,Pd=0,Dd=!1,br=(1+Math.sqrt(5))/2,wo=1/br,Gg=[new L(-br,wo,0),new L(br,wo,0),new L(-wo,0,br),new L(wo,0,br),new L(0,br,-wo),new L(0,br,wo),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],QM=new L,ah=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=QM}=r;Id=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ld,Pd),this._renderer.xr.enabled=Dd,e.scissorTest=!1,rh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:So,format:Yn,colorSpace:Jt,depthBuffer:!1},s=Wg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eS(r)),this._blurMaterial=tS(r,e,t)}return s}_compileMaterial(e){let t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Cd)}_sceneToCubeUV(e,t,i,s,r){let c=new $t(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Vg),u.toneMapping=gs,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Si({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new Qt(new uo,_),p=!1,E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(Vg),p=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):x===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;rh(s,x*A,b>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===_r||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;rh(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Cd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gg[(s-r-1)%Gg.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Qt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Er-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Er;m>Er&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);let p=[],E=0;for(let C=0;C<Er;++C){let D=C/_,S=Math.exp(-D*D/2);p.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let x=this._sizeLods[s],A=3*x*(s>b-Ao?s-b+Ao:0),w=4*(this._cubeSize-x);rh(t,A,w,3*x,2*x),c.setRenderTarget(t),c.render(u,Cd)}};function eS(n){let e=[],t=[],i=[],s=n,r=n-Ao+1+Hg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ao?c=Hg[o-n+Ao-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,D=w>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];E.set(S,_*g*w),b.set(d,m*g*w);let M=[w,w,w,w,w,w];x.set(M,p*g*w)}let A=new un;A.setAttribute("position",new Tt(E,_)),A.setAttribute("uv",new Tt(b,m)),A.setAttribute("faceIndex",new Tt(x,p)),e.push(A),s>Ao&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wg(n,e,t){let i=new Pi(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tS(n,e,t){let i=new Float32Array(Er),s=new L(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Xg(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function qg(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===xl||c===Ml,h=c===_r||c===yr;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ah(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ah(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sS(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let E=f.array;_=f.version;for(let b=0,x=E.length;b<x;b+=3){let A=E[b+0],w=E[b+1],C=E[b+2];d.push(A,w,w,C,C,A)}}else if(g!==void 0){let E=g.array;_=g.version;for(let b=0,x=E.length/3-1;b<x;b+=3){let A=b+0,w=b+1,C=b+2;d.push(A,w,w,C,C,A)}}else return;let m=new(Ed(d)?_a:ga)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function rS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function oS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aS(n,e,t){let i=new WeakMap,s=new ht;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*A*4*u),C=new pa(w,x,A,u);C.type=ri,C.needsUpdate=!0;let D=b*4;for(let M=0;M<u;M++){let I=m[M],O=p[M],B=E[M],G=x*A*4*M;for(let X=0;X<I.count;X++){let V=X*D;f===!0&&(s.fromBufferAttribute(I,X),w[G+V+0]=s.x,w[G+V+1]=s.y,w[G+V+2]=s.z,w[G+V+3]=0),g===!0&&(s.fromBufferAttribute(O,X),w[G+V+4]=s.x,w[G+V+5]=s.y,w[G+V+6]=s.z,w[G+V+7]=0),_===!0&&(s.fromBufferAttribute(B,X),w[G+V+8]=s.x,w[G+V+9]=s.y,w[G+V+10]=s.z,w[G+V+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Je(x,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function cS(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var u0=new Yt,$g=new Ra(1,1),d0=new pa,f0=new Jc,p0=new va,Yg=[],Kg=[],Zg=new Float32Array(16),jg=new Float32Array(9),Jg=new Float32Array(4);function Co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Yg[s];if(r===void 0&&(r=new Float32Array(s),Yg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lh(n,e){let t=Kg[e];t===void 0&&(t=new Int32Array(e),Kg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function uS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function dS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function fS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Jg.set(i),n.uniformMatrix2fv(this.addr,!1,Jg),tn(t,i)}}function pS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;jg.set(i),n.uniformMatrix3fv(this.addr,!1,jg),tn(t,i)}}function mS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Zg.set(i),n.uniformMatrix4fv(this.addr,!1,Zg),tn(t,i)}}function gS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _S(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function yS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function vS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function xS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function SS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function bS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function ES(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($g.compareFunction=Md,r=$g):r=u0,t.setTexture2D(e||r,s)}function TS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||f0,s)}function wS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||p0,s)}function AS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||d0,s)}function RS(n){switch(n){case 5126:return lS;case 35664:return hS;case 35665:return uS;case 35666:return dS;case 35674:return fS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return yS;case 35669:case 35673:return vS;case 5125:return xS;case 36294:return MS;case 36295:return SS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return AS}}function CS(n,e){n.uniform1fv(this.addr,e)}function IS(n,e){let t=Co(e,this.size,2);n.uniform2fv(this.addr,t)}function LS(n,e){let t=Co(e,this.size,3);n.uniform3fv(this.addr,t)}function PS(n,e){let t=Co(e,this.size,4);n.uniform4fv(this.addr,t)}function DS(n,e){let t=Co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NS(n,e){let t=Co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function US(n,e){let t=Co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FS(n,e){n.uniform1iv(this.addr,e)}function OS(n,e){n.uniform2iv(this.addr,e)}function BS(n,e){n.uniform3iv(this.addr,e)}function kS(n,e){n.uniform4iv(this.addr,e)}function zS(n,e){n.uniform1uiv(this.addr,e)}function HS(n,e){n.uniform2uiv(this.addr,e)}function VS(n,e){n.uniform3uiv(this.addr,e)}function GS(n,e){n.uniform4uiv(this.addr,e)}function WS(n,e,t){let i=this.cache,s=e.length,r=lh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||u0,r[o])}function XS(n,e,t){let i=this.cache,s=e.length,r=lh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||f0,r[o])}function qS(n,e,t){let i=this.cache,s=e.length,r=lh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||p0,r[o])}function $S(n,e,t){let i=this.cache,s=e.length,r=lh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||d0,r[o])}function YS(n){switch(n){case 5126:return CS;case 35664:return IS;case 35665:return LS;case 35666:return PS;case 35674:return DS;case 35675:return NS;case 35676:return US;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return kS;case 5125:return zS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return $S}}var Ud=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}},Fd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YS(t.type)}},Od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Nd=/(\w+)(\])?(\[|\.)?/g;function Qg(n,e){n.seq.push(e),n.map[e.id]=e}function KS(n,e,t){let i=n.name,s=i.length;for(Nd.lastIndex=0;;){let r=Nd.exec(i),o=Nd.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qg(t,l===void 0?new Ud(a,n,e):new Fd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Od(a),Qg(t,u)),t=u}}}var Ro=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);KS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function e0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ZS=37297,jS=0;function JS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var t0=new Ve;function QS(n){Ze._getMatrix(t0,Ze.workingColorSpace,n);let e=`mat3( ${t0.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case da:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function n0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+JS(n.getShaderSource(e),a)}else return r}function eb(n,e){let t=QS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tb(n,e){let t;switch(e){case _g:t="Linear";break;case yg:t="Reinhard";break;case vg:t="Cineon";break;case vl:t="ACESFilmic";break;case Mg:t="AgX";break;case Sg:t="Neutral";break;case xg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oh=new L;function nb(){Ze.getLuminanceCoefficients(oh);let n=oh.x.toFixed(4),e=oh.y.toFixed(4),t=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ib(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function sb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xa(n){return n!==""}function i0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(n){return n.replace(ob,cb)}var ab=new Map;function cb(n,e){let t=Ye[e];if(t===void 0){let i=ab.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bd(t)}var lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r0(n){return n.replace(lb,hb)}function hb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function o0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ub(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function db(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case yr:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function pb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case mg:e="ENVMAP_BLENDING_MIX";break;case gg:e="ENVMAP_BLENDING_ADD";break}return e}function mb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=ub(t),l=db(t),h=fb(t),u=pb(t),d=mb(t),f=ib(t),g=sb(r),_=s.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),p.length>0&&(p+=`
`)):(m=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),p=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?Ye.tonemapping_pars_fragment:"",t.toneMapping!==gs?tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,eb("linearToOutputTexel",t.outputColorSpace),nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),o=Bd(o),o=i0(o,t),o=s0(o,t),a=Bd(a),a=i0(a,t),a=s0(a,t),o=r0(o),a=r0(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=E+m+o,x=E+p+a,A=e0(s,s.VERTEX_SHADER,b),w=e0(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(w)||"",X=O.trim(),V=B.trim(),j=G.trim(),H=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,w);else{let ue=n0(s,A,"vertex"),be=n0(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ue+`
`+be)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||j==="")&&(se=!1);se&&(I.diagnostics={runnable:H,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(A),s.deleteShader(w),D=new Ro(s,_),S=rb(s,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,ZS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var _b=0,kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zd(e),t.set(e,i)),i}},zd=class{constructor(e){this.id=_b++,this.code=e,this.usedTimes=0}};function yb(n,e,t,i,s,r,o){let a=new ma,c=new kd,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,O,B){let G=O.fog,X=B.geometry,V=S.isMeshStandardMaterial?O.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),H=j&&j.mapping===Ba?j.image.height:null,se=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=ue!==void 0?ue.length:0,qe=0;X.morphAttributes.position!==void 0&&(qe=1),X.morphAttributes.normal!==void 0&&(qe=2),X.morphAttributes.color!==void 0&&(qe=3);let yt,St,ct,$;if(se){let pt=Oi[se];yt=pt.vertexShader,St=pt.fragmentShader}else yt=S.vertexShader,St=S.fragmentShader,c.update(S),ct=c.getVertexShaderID(S),$=c.getFragmentShaderID(S);let K=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,it=!!S.map,mn=!!S.matcap,R=!!j,It=!!S.aoMap,He=!!S.lightMap,Fe=!!S.bumpMap,xe=!!S.normalMap,Lt=!!S.displacementMap,Me=!!S.emissiveMap,$e=!!S.metalnessMap,rn=!!S.roughnessMap,Ht=S.anisotropy>0,T=S.clearcoat>0,y=S.dispersion>0,F=S.iridescence>0,q=S.sheen>0,Z=S.transmission>0,W=Ht&&!!S.anisotropyMap,Ae=T&&!!S.clearcoatMap,ie=T&&!!S.clearcoatNormalMap,Se=T&&!!S.clearcoatRoughnessMap,Ee=F&&!!S.iridescenceMap,ee=F&&!!S.iridescenceThicknessMap,le=q&&!!S.sheenColorMap,Ue=q&&!!S.sheenRoughnessMap,Te=!!S.specularMap,ae=!!S.specularColorMap,Ge=!!S.specularIntensityMap,P=Z&&!!S.transmissionMap,te=Z&&!!S.thicknessMap,re=!!S.gradientMap,pe=!!S.alphaMap,J=S.alphaTest>0,Y=!!S.alphaHash,ve=!!S.extensions,ke=gs;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ke=n.toneMapping);let bt={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:yt,fragmentShader:St,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Jt,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:mn,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:H,aoMap:It,lightMap:He,bumpMap:Fe,normalMap:xe,displacementMap:d&&Lt,emissiveMap:Me,normalMapObjectSpace:xe&&S.normalMapType===Ag,normalMapTangentSpace:xe&&S.normalMapType===xd,metalnessMap:$e,roughnessMap:rn,anisotropy:Ht,anisotropyMap:W,clearcoat:T,clearcoatMap:Ae,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:y,iridescence:F,iridescenceMap:Ee,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:le,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:ae,specularIntensityMap:Ge,transmission:Z,transmissionMap:P,thicknessMap:te,gradientMap:re,opaque:S.transparent===!1&&S.blending===ar&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:Y,combine:S.combine,mapUv:it&&_(S.map.channel),aoMapUv:It&&_(S.aoMap.channel),lightMapUv:He&&_(S.lightMap.channel),bumpMapUv:Fe&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:Lt&&_(S.displacementMap.channel),emissiveMapUv:Me&&_(S.emissiveMap.channel),metalnessMapUv:$e&&_(S.metalnessMap.channel),roughnessMapUv:rn&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:Ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(S.sheenRoughnessMap.channel),specularMapUv:Te&&_(S.specularMap.channel),specularColorMapUv:ae&&_(S.specularColorMap.channel),specularIntensityMapUv:Ge&&_(S.specularIntensityMap.channel),transmissionMapUv:P&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xe||Ht),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(it||pe),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===gt,decodeVideoTextureEmissive:Me&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(E(M,S),b(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let M=g[S.type],I;if(M){let O=Oi[M];I=Bg.clone(O.uniforms)}else I=S.uniforms;return I}function A(S,M){let I;for(let O=0,B=h.length;O<B;O++){let G=h[O];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new gb(n,M,S,r),h.push(I)),I}function w(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:D}}function vb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function xb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function a0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function c0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||xb),i.length>1&&i.sort(d||a0),s.length>1&&s.sort(d||a0)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Mb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new c0,n.set(i,[o])):s>=r.length?(o=new c0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function bb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Eb=0;function Tb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wb(n){let e=new Sb,t=bb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let s=new L,r=new We,o=new We;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,b=0,x=0,A=0,w=0,C=0;l.sort(Tb);for(let S=0,M=l.length;S<M;S++){let I=l[S],O=I.color,B=I.intensity,G=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],B);C++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,H=t.get(I);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=I.shadow.matrix,E++}i.directional[f]=V,f++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(O).multiplyScalar(B),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;let j=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,j.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=X,x++}_++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(O).multiplyScalar(B),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let j=I.shadow,H=t.get(I);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=V,g++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(B),V.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==x||D.numSpotMaps!==A||D.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=x,D.numSpotMaps=A,D.numLightProbes=C,i.version=Eb++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let b=l[p];if(b.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function l0(n){let e=new wb(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ab(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new l0(n),e.set(s,[a])):r>=o.length?(a=new l0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ib(n,e,t){let i=new _o,s=new Je,r=new Je,o=new ht,a=new il({depthPacking:wg}),c=new sl,l={},h=t.maxTextureSize,u={[xi]:En,[En]:xi,[yn]:yn},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Rb,fragmentShader:Cb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new un;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let p=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ms),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=p!==Fi&&this.type===Fi,G=p===Fi&&this.type!==Fi;for(let X=0,V=w.length;X<V;X++){let j=w[X],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let se=H.getFrameExtents();if(s.multiply(se),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||B===!0||G===!0){let be=this.type!==Fi?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new Pi(s.x,s.y,be),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let ue=H.getViewportCount();for(let be=0;be<ue;be++){let qe=H.getViewport(be);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),O.viewport(o),H.updateMatrices(j,be),i=H.getFrustum(),x(C,D,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Fi&&E(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,I)};function E(w,C){let D=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,D,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,D,f,_,null)}function b(w,C,D,S){let M=null,I=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=D.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=M.uuid,B=C.uuid,G=l[O];G===void 0&&(G={},l[O]=G);let X=G[B];X===void 0&&(X=M.clone(),G[B]=X,C.addEventListener("dispose",A)),M=X}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Fi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=n.properties.get(M);O.light=D}return M}function x(w,C,D,S,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Fi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let B=e.update(w),G=w.material;if(Array.isArray(G)){let X=B.groups;for(let V=0,j=X.length;V<j;V++){let H=X[V],se=G[H.materialIndex];if(se&&se.visible){let ue=b(w,se,S,M);w.onBeforeShadow(n,w,C,D,B,ue,H),n.renderBufferDirect(D,null,B,ue,w,H),w.onAfterShadow(n,w,C,D,B,ue,H)}}}else if(G.visible){let X=b(w,G,S,M);w.onBeforeShadow(n,w,C,D,B,X,null),n.renderBufferDirect(D,null,B,X,w,null),w.onAfterShadow(n,w,C,D,B,X,null)}}let O=w.children;for(let B=0,G=O.length;B<G;B++)x(O[B],C,D,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(let D in l){let S=l[D],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Lb={[dl]:fl,[pl]:_l,[ml]:yl,[cr]:gl,[fl]:dl,[_l]:pl,[yl]:ml,[gl]:cr};function Pb(n,e){function t(){let P=!1,te=new ht,re=null,pe=new ht(0,0,0,0);return{setMask:function(J){re!==J&&!P&&(n.colorMask(J,J,J,J),re=J)},setLocked:function(J){P=J},setClear:function(J,Y,ve,ke,bt){bt===!0&&(J*=ke,Y*=ke,ve*=ke),te.set(J,Y,ve,ke),pe.equals(te)===!1&&(n.clearColor(J,Y,ve,ke),pe.copy(te))},reset:function(){P=!1,re=null,pe.set(-1,0,0,0)}}}function i(){let P=!1,te=!1,re=null,pe=null,J=null;return{setReversed:function(Y){if(te!==Y){let ve=e.get("EXT_clip_control");Y?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),te=Y;let ke=J;J=null,this.setClear(ke)}},getReversed:function(){return te},setTest:function(Y){Y?K(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Y){re!==Y&&!P&&(n.depthMask(Y),re=Y)},setFunc:function(Y){if(te&&(Y=Lb[Y]),pe!==Y){switch(Y){case dl:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Y}},setLocked:function(Y){P=Y},setClear:function(Y){J!==Y&&(te&&(Y=1-Y),n.clearDepth(Y),J=Y)},reset:function(){P=!1,re=null,pe=null,J=null,te=!1}}}function s(){let P=!1,te=null,re=null,pe=null,J=null,Y=null,ve=null,ke=null,bt=null;return{setTest:function(pt){P||(pt?K(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(pt){te!==pt&&!P&&(n.stencilMask(pt),te=pt)},setFunc:function(pt,Qi,Ci){(re!==pt||pe!==Qi||J!==Ci)&&(n.stencilFunc(pt,Qi,Ci),re=pt,pe=Qi,J=Ci)},setOp:function(pt,Qi,Ci){(Y!==pt||ve!==Qi||ke!==Ci)&&(n.stencilOp(pt,Qi,Ci),Y=pt,ve=Qi,ke=Ci)},setLocked:function(pt){P=pt},setClear:function(pt){bt!==pt&&(n.clearStencil(pt),bt=pt)},reset:function(){P=!1,te=null,re=null,pe=null,J=null,Y=null,ve=null,ke=null,bt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,x=null,A=null,w=null,C=new De(0,0,0),D=0,S=!1,M=null,I=null,O=null,B=null,G=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=j>=2);let se=null,ue={},be=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),yt=new ht().fromArray(be),St=new ht().fromArray(qe);function ct(P,te,re,pe){let J=new Uint8Array(4),Y=n.createTexture();n.bindTexture(P,Y),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<re;ve++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return Y}let $={};$[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(cr),Fe(!1),xe(rd),K(n.CULL_FACE),It(ms);function K(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function ge(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Be(P,te){return u[P]!==te?(n.bindFramebuffer(P,te),u[P]=te,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Re(P,te){let re=f,pe=!1;if(P){re=d.get(te),re===void 0&&(re=[],d.set(te,re));let J=P.textures;if(re.length!==J.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,ve=J.length;Y<ve;Y++)re[Y]=n.COLOR_ATTACHMENT0+Y;re.length=J.length,pe=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,pe=!0);pe&&n.drawBuffers(re)}function it(P){return g!==P?(n.useProgram(P),g=P,!0):!1}let mn={[Os]:n.FUNC_ADD,[Jm]:n.FUNC_SUBTRACT,[Qm]:n.FUNC_REVERSE_SUBTRACT};mn[eg]=n.MIN,mn[tg]=n.MAX;let R={[ng]:n.ZERO,[ig]:n.ONE,[sg]:n.SRC_COLOR,[$c]:n.SRC_ALPHA,[hg]:n.SRC_ALPHA_SATURATE,[cg]:n.DST_COLOR,[og]:n.DST_ALPHA,[rg]:n.ONE_MINUS_SRC_COLOR,[Yc]:n.ONE_MINUS_SRC_ALPHA,[lg]:n.ONE_MINUS_DST_COLOR,[ag]:n.ONE_MINUS_DST_ALPHA,[ug]:n.CONSTANT_COLOR,[dg]:n.ONE_MINUS_CONSTANT_COLOR,[fg]:n.CONSTANT_ALPHA,[pg]:n.ONE_MINUS_CONSTANT_ALPHA};function It(P,te,re,pe,J,Y,ve,ke,bt,pt){if(P===ms){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),P!==jm){if(P!==m||pt!==S){if((p!==Os||x!==Os)&&(n.blendEquation(n.FUNC_ADD),p=Os,x=Os),pt)switch(P){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFunc(n.ONE,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ld:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,b=null,A=null,w=null,C.set(0,0,0),D=0,m=P,S=pt}return}J=J||te,Y=Y||re,ve=ve||pe,(te!==p||J!==x)&&(n.blendEquationSeparate(mn[te],mn[J]),p=te,x=J),(re!==E||pe!==b||Y!==A||ve!==w)&&(n.blendFuncSeparate(R[re],R[pe],R[Y],R[ve]),E=re,b=pe,A=Y,w=ve),(ke.equals(C)===!1||bt!==D)&&(n.blendColor(ke.r,ke.g,ke.b,bt),C.copy(ke),D=bt),m=P,S=!1}function He(P,te){P.side===yn?ge(n.CULL_FACE):K(n.CULL_FACE);let re=P.side===En;te&&(re=!re),Fe(re),P.blending===ar&&P.transparent===!1?It(ms):It(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let pe=P.stencilWrite;a.setTest(pe),pe&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){M!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),M=P)}function xe(P){P!==Ym?(K(n.CULL_FACE),P!==I&&(P===rd?n.cullFace(n.BACK):P===Km?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),I=P}function Lt(P){P!==O&&(V&&n.lineWidth(P),O=P)}function Me(P,te,re){P?(K(n.POLYGON_OFFSET_FILL),(B!==te||G!==re)&&(n.polygonOffset(te,re),B=te,G=re)):ge(n.POLYGON_OFFSET_FILL)}function $e(P){P?K(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function rn(P){P===void 0&&(P=n.TEXTURE0+X-1),se!==P&&(n.activeTexture(P),se=P)}function Ht(P,te,re){re===void 0&&(se===null?re=n.TEXTURE0+X-1:re=se);let pe=ue[re];pe===void 0&&(pe={type:void 0,texture:void 0},ue[re]=pe),(pe.type!==P||pe.texture!==te)&&(se!==re&&(n.activeTexture(re),se=re),n.bindTexture(P,te||$[P]),pe.type=P,pe.texture=te)}function T(){let P=ue[se];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(P){yt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),yt.copy(P))}function Ue(P){St.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),St.copy(P))}function Te(P,te){let re=l.get(te);re===void 0&&(re=new WeakMap,l.set(te,re));let pe=re.get(P);pe===void 0&&(pe=n.getUniformBlockIndex(te,P.name),re.set(P,pe))}function ae(P,te){let pe=l.get(te).get(P);c.get(te)!==pe&&(n.uniformBlockBinding(te,pe,P.__bindingPointIndex),c.set(te,pe))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,ue={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,x=null,A=null,w=null,C=new De(0,0,0),D=0,S=!1,M=null,I=null,O=null,B=null,G=null,yt.set(0,0,n.canvas.width,n.canvas.height),St.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ge,bindFramebuffer:Be,drawBuffers:Re,useProgram:it,setBlending:It,setMaterial:He,setFlipSided:Fe,setCullFace:xe,setLineWidth:Lt,setPolygonOffset:Me,setScissorTest:$e,activeTexture:rn,bindTexture:Ht,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Ee,texImage3D:ee,updateUBOMapping:Te,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:Se,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:Ae,scissor:le,viewport:Ue,reset:Ge}}function Db(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):co("canvas")}function _(T,y,F){let q=1,Z=Ht(T);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let W=Math.floor(q*Z.width),Ae=Math.floor(q*Z.height);u===void 0&&(u=g(W,Ae));let ie=y?g(W,Ae):u;return ie.width=W,ie.height=Ae,ie.getContext("2d").drawImage(T,0,0,W,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+Ae+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,y,F,q,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=y;if(y===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),y===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),y===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),y===n.RGBA){let Ae=Z?da:Ze.getTransfer(q);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=Ae===gt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(T,y){let F;return T?y===null||y===zs||y===bo?F=n.DEPTH24_STENCIL8:y===ri?F=n.DEPTH32F_STENCIL8:y===Mo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zs||y===bo?F=n.DEPTH_COMPONENT24:y===ri?F=n.DEPTH_COMPONENT32F:y===Mo&&(F=n.DEPTH_COMPONENT16),F}function A(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function w(T){let y=T.target;y.removeEventListener("dispose",w),D(y),y.isVideoTexture&&h.delete(y)}function C(T){let y=T.target;y.removeEventListener("dispose",C),M(y)}function D(T){let y=i.get(T);if(y.__webglInit===void 0)return;let F=T.source,q=d.get(F);if(q){let Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(q).length===0&&d.delete(F)}i.remove(T)}function S(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let F=T.source,q=d.get(F);delete q[y.__cacheKey],o.memory.textures--}function M(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Z=0;Z<y.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=T.textures;for(let q=0,Z=F.length;q<Z;q++){let W=i.get(F[q]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(T)}let I=0;function O(){I=0}function B(){let T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function G(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function X(T,y){let F=i.get(T);if(T.isVideoTexture&&$e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,T,y);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function V(T,y){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){$(F,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function j(T,y){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){$(F,T,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function H(T,y){let F=i.get(T);if(T.version>0&&F.__version!==T.version){K(F,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}let se={[Bs]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},ue={[hn]:n.NEAREST,[Sl]:n.NEAREST_MIPMAP_NEAREST,[vr]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[xo]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},be={[Rg]:n.NEVER,[Ng]:n.ALWAYS,[Cg]:n.LESS,[Md]:n.LEQUAL,[Ig]:n.EQUAL,[Dg]:n.GEQUAL,[Lg]:n.GREATER,[Pg]:n.NOTEQUAL};function qe(T,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===xo||y.magFilter===vr||y.magFilter===bi||y.minFilter===an||y.minFilter===xo||y.minFilter===vr||y.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,se[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,se[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,se[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==vr&&y.minFilter!==bi||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function yt(T,y){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",w));let q=y.source,Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));let W=G(y);if(W!==T.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[W].usedTimes++;let Ae=Z[T.__cacheKey];Ae!==void 0&&(Z[T.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(y)),T.__cacheKey=W,T.__webglTexture=Z[W].texture}return F}function St(T,y,F){return Math.floor(Math.floor(T/F)/y)}function ct(T,y,F,q){let W=T.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,F,q,y.data);else{W.sort((ee,le)=>ee.start-le.start);let Ae=0;for(let ee=1;ee<W.length;ee++){let le=W[Ae],Ue=W[ee],Te=le.start+le.count,ae=St(Ue.start,y.width,4),Ge=St(le.start,y.width,4);Ue.start<=Te+1&&ae===Ge&&St(Ue.start+Ue.count-1,y.width,4)===ae?le.count=Math.max(le.count,Ue.start+Ue.count-le.start):(++Ae,W[Ae]=Ue)}W.length=Ae+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ee=0,le=W.length;ee<le;ee++){let Ue=W[ee],Te=Math.floor(Ue.start/4),ae=Math.ceil(Ue.count/4),Ge=Te%y.width,P=Math.floor(Te/y.width),te=ae,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ge,P,te,re,F,q,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function $(T,y,F){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);let Z=yt(T,y),W=y.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+F);let Ae=i.get(W);if(W.version!==Ae.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);let ie=Ze.getPrimaries(Ze.workingColorSpace),Se=y.colorSpace===_s?null:Ze.getPrimaries(y.colorSpace),Ee=y.colorSpace===_s||ie===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ee=_(y.image,!1,s.maxTextureSize);ee=rn(y,ee);let le=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type),Te=b(y.internalFormat,le,Ue,y.colorSpace,y.isVideoTexture);qe(q,y);let ae,Ge=y.mipmaps,P=y.isVideoTexture!==!0,te=Ae.__version===void 0||Z===!0,re=W.dataReady,pe=A(y,ee);if(y.isDepthTexture)Te=x(y.format===Eo,y.type),te&&(P?t.texStorage2D(n.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,le,Ue,null));else if(y.isDataTexture)if(Ge.length>0){P&&te&&t.texStorage2D(n.TEXTURE_2D,pe,Te,Ge[0].width,Ge[0].height);for(let J=0,Y=Ge.length;J<Y;J++)ae=Ge[J],P?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ue,ae.data):t.texImage2D(n.TEXTURE_2D,J,Te,ae.width,ae.height,0,le,Ue,ae.data);y.generateMipmaps=!1}else P?(te&&t.texStorage2D(n.TEXTURE_2D,pe,Te,ee.width,ee.height),re&&ct(y,ee,le,Ue)):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,le,Ue,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){P&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Te,Ge[0].width,Ge[0].height,ee.depth);for(let J=0,Y=Ge.length;J<Y;J++)if(ae=Ge[J],y.format!==Yn)if(le!==null)if(P){if(re)if(y.layerUpdates.size>0){let ve=Rd(ae.width,ae.height,y.format,y.type);for(let ke of y.layerUpdates){let bt=ae.data.subarray(ke*ve/ae.data.BYTES_PER_ELEMENT,(ke+1)*ve/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ke,ae.width,ae.height,1,le,bt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Te,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,Ue,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Te,ae.width,ae.height,ee.depth,0,le,Ue,ae.data)}else{P&&te&&t.texStorage2D(n.TEXTURE_2D,pe,Te,Ge[0].width,Ge[0].height);for(let J=0,Y=Ge.length;J<Y;J++)ae=Ge[J],y.format!==Yn?le!==null?P?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Te,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ue,ae.data):t.texImage2D(n.TEXTURE_2D,J,Te,ae.width,ae.height,0,le,Ue,ae.data)}else if(y.isDataArrayTexture)if(P){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Te,ee.width,ee.height,ee.depth),re)if(y.layerUpdates.size>0){let J=Rd(ee.width,ee.height,y.format,y.type);for(let Y of y.layerUpdates){let ve=ee.data.subarray(Y*J/ee.data.BYTES_PER_ELEMENT,(Y+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,le,Ue,ve)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Ue,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,le,Ue,ee.data);else if(y.isData3DTexture)P?(te&&t.texStorage3D(n.TEXTURE_3D,pe,Te,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Ue,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,le,Ue,ee.data);else if(y.isFramebufferTexture){if(te)if(P)t.texStorage2D(n.TEXTURE_2D,pe,Te,ee.width,ee.height);else{let J=ee.width,Y=ee.height;for(let ve=0;ve<pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,Te,J,Y,0,le,Ue,null),J>>=1,Y>>=1}}else if(Ge.length>0){if(P&&te){let J=Ht(Ge[0]);t.texStorage2D(n.TEXTURE_2D,pe,Te,J.width,J.height)}for(let J=0,Y=Ge.length;J<Y;J++)ae=Ge[J],P?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le,Ue,ae):t.texImage2D(n.TEXTURE_2D,J,Te,le,Ue,ae);y.generateMipmaps=!1}else if(P){if(te){let J=Ht(ee);t.texStorage2D(n.TEXTURE_2D,pe,Te,J.width,J.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ue,ee)}else t.texImage2D(n.TEXTURE_2D,0,Te,le,Ue,ee);m(y)&&p(q),Ae.__version=W.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function K(T,y,F){if(y.image.length!==6)return;let q=yt(T,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);let W=i.get(Z);if(Z.version!==W.__version||q===!0){t.activeTexture(n.TEXTURE0+F);let Ae=Ze.getPrimaries(Ze.workingColorSpace),ie=y.colorSpace===_s?null:Ze.getPrimaries(y.colorSpace),Se=y.colorSpace===_s||Ae===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!Ee&&!ee?le[Y]=_(y.image[Y],!0,s.maxCubemapSize):le[Y]=ee?y.image[Y].image:y.image[Y],le[Y]=rn(y,le[Y]);let Ue=le[0],Te=r.convert(y.format,y.colorSpace),ae=r.convert(y.type),Ge=b(y.internalFormat,Te,ae,y.colorSpace),P=y.isVideoTexture!==!0,te=W.__version===void 0||q===!0,re=Z.dataReady,pe=A(y,Ue);qe(n.TEXTURE_CUBE_MAP,y);let J;if(Ee){P&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ge,Ue.width,Ue.height);for(let Y=0;Y<6;Y++){J=le[Y].mipmaps;for(let ve=0;ve<J.length;ve++){let ke=J[ve];y.format!==Yn?Te!==null?P?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,ke.width,ke.height,Te,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,ke.width,ke.height,Te,ae,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Ge,ke.width,ke.height,0,Te,ae,ke.data)}}}else{if(J=y.mipmaps,P&&te){J.length>0&&pe++;let Y=Ht(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){P?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,le[Y].width,le[Y].height,Te,ae,le[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,le[Y].width,le[Y].height,0,Te,ae,le[Y].data);for(let ve=0;ve<J.length;ve++){let bt=J[ve].image[Y].image;P?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,bt.width,bt.height,Te,ae,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Ge,bt.width,bt.height,0,Te,ae,bt.data)}}else{P?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,ae,le[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,Te,ae,le[Y]);for(let ve=0;ve<J.length;ve++){let ke=J[ve];P?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,Te,ae,ke.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Ge,Te,ae,ke.image[Y])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),W.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ge(T,y,F,q,Z,W){let Ae=r.convert(F.format,F.colorSpace),ie=r.convert(F.type),Se=b(F.internalFormat,Ae,ie,F.colorSpace),Ee=i.get(y),ee=i.get(F);if(ee.__renderTarget=y,!Ee.__hasExternalTextures){let le=Math.max(1,y.width>>W),Ue=Math.max(1,y.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,Se,le,Ue,y.depth,0,Ae,ie,null):t.texImage2D(Z,W,Se,le,Ue,0,Ae,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,ee.__webglTexture,0,Lt(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,ee.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(T,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let q=y.depthTexture,Z=q&&q.isDepthTexture?q.type:null,W=x(y.stencilBuffer,Z),Ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Lt(y);Me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,W,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,W,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,W,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,T)}else{let q=y.textures;for(let Z=0;Z<q.length;Z++){let W=q[Z],Ae=r.convert(W.format,W.colorSpace),ie=r.convert(W.type),Se=b(W.internalFormat,Ae,ie,W.colorSpace),Ee=Lt(y);F&&Me(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,y.width,y.height):Me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let Z=q.__webglTexture,W=Lt(y);if(y.depthTexture.format===ao)Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Eo)Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function it(T){let y=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?Re(y.__webglFramebuffer[0],T):Re(y.__webglFramebuffer,T)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),Be(y.__webglDepthbuffer[q],T,!1);else{let Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Be(y.__webglDepthbuffer,T,!1);else{let Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mn(T,y,F){let q=i.get(T);y!==void 0&&ge(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&it(T)}function R(T){let y=T.texture,F=i.get(T),q=i.get(y);T.addEventListener("dispose",C);let Z=T.textures,W=T.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let Se=0;Se<y.mipmaps.length;Se++)F.__webglFramebuffer[ie][Se]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ie=0,Se=Z.length;ie<Se;ie++){let Ee=i.get(Z[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Me(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){let Se=Z[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);let Ee=r.convert(Se.format,Se.colorSpace),ee=r.convert(Se.type),le=b(Se.internalFormat,Ee,ee,Se.colorSpace,T.isXRRenderTarget===!0),Ue=Lt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,le,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),qe(n.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)ge(F.__webglFramebuffer[ie][Se],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se);else ge(F.__webglFramebuffer[ie],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ie=0,Se=Z.length;ie<Se;ie++){let Ee=Z[ie],ee=i.get(Ee),le=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),qe(le,Ee),ge(F.__webglFramebuffer,T,Ee,n.COLOR_ATTACHMENT0+ie,le,0),m(Ee)&&p(le)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),qe(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)ge(F.__webglFramebuffer[Se],T,y,n.COLOR_ATTACHMENT0,ie,Se);else ge(F.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ie,0);m(y)&&p(ie),t.unbindTexture()}T.depthBuffer&&it(T)}function It(T){let y=T.textures;for(let F=0,q=y.length;F<q;F++){let Z=y[F];if(m(Z)){let W=E(T),Ae=i.get(Z).__webglTexture;t.bindTexture(W,Ae),p(W),t.unbindTexture()}}}let He=[],Fe=[];function xe(T){if(T.samples>0){if(Me(T)===!1){let y=T.textures,F=T.width,q=T.height,Z=n.COLOR_BUFFER_BIT,W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(T),ie=y.length>1;if(ie)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Se=T.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let ee=i.get(y[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Z,n.NEAREST),c===!0&&(He.length=0,Fe.length=0,He.push(n.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(He.push(W),Fe.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let ee=i.get(y[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Lt(T){return Math.min(s.maxSamples,T.samples)}function Me(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $e(T){let y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function rn(T,y){let F=T.colorSpace,q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Jt&&F!==_s&&(Ze.getTransfer(F)===gt?(q!==Yn||Z!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=mn,this.setupRenderTarget=R,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function Nb(n,e){function t(i,s=_s){let r,o=Ze.getTransfer(s);if(i===Ei)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===md)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dd)return n.BYTE;if(i===fd)return n.SHORT;if(i===Mo)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===zs)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===So)return n.HALF_FLOAT;if(i===gd)return n.ALPHA;if(i===_d)return n.RGB;if(i===Yn)return n.RGBA;if(i===ao)return n.DEPTH_COMPONENT;if(i===Eo)return n.DEPTH_STENCIL;if(i===wl)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===yd)return n.RG;if(i===Rl)return n.RG_INTEGER;if(i===Cl)return n.RGBA_INTEGER;if(i===ka||i===za||i===Ha||i===Va)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Ll||i===Pl||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Ul||i===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nl||i===Ul)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===$l||i===Yl||i===Kl||i===Zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jl||i===Jl||i===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jl)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===eh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new $n({vertexShader:Ub,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vd=class extends as{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Hd,p={},E=t.getContextAttributes(),b=null,x=null,A=[],w=[],C=new Je,D=null,S=new $t;S.viewport=new ht;let M=new $t;M.viewport=new ht;let I=[S,M],O=new ul,B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=A[$];return K===void 0&&(K=new fo,A[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=A[$];return K===void 0&&(K=new fo,A[$]=K),K.getGripSpace()},this.getHand=function($){let K=A[$];return K===void 0&&(K=new fo,A[$]=K),K.getHandSpace()};function X($){let K=w.indexOf($.inputSource);if(K===-1)return;let ge=A[K];ge!==void 0&&(ge.update($.inputSource,$.frame,l||o),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let $=0;$<A.length;$++){let K=w[$];K!==null&&(w[$]=null,A[$].disconnect(K))}B=null,G=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(b),f=null,d=null,u=null,s=null,x=null,ct.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Be=null,Re=null;E.depth&&(Re=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=E.stencil?Eo:ao,Be=E.stencil?bo:zs);let it={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Pi(d.textureWidth,d.textureHeight,{format:Yn,type:Ei,depthTexture:new Ra(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pi(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j($){for(let K=0;K<$.removed.length;K++){let ge=$.removed[K],Be=w.indexOf(ge);Be>=0&&(w[Be]=null,A[Be].disconnect(ge))}for(let K=0;K<$.added.length;K++){let ge=$.added[K],Be=w.indexOf(ge);if(Be===-1){for(let it=0;it<A.length;it++)if(it>=w.length){w.push(ge),Be=it;break}else if(w[it]===null){w[it]=ge,Be=it;break}if(Be===-1)break}let Re=A[Be];Re&&Re.connect(ge)}}let H=new L,se=new L;function ue($,K,ge){H.setFromMatrixPosition(K.matrixWorld),se.setFromMatrixPosition(ge.matrixWorld);let Be=H.distanceTo(se),Re=K.projectionMatrix.elements,it=ge.projectionMatrix.elements,mn=Re[14]/(Re[10]-1),R=Re[14]/(Re[10]+1),It=(Re[9]+1)/Re[5],He=(Re[9]-1)/Re[5],Fe=(Re[8]-1)/Re[0],xe=(it[8]+1)/it[0],Lt=mn*Fe,Me=mn*xe,$e=Be/(-Fe+xe),rn=$e*-Fe;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(rn),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ht=mn+$e,T=R+$e,y=Lt-rn,F=Me+(Be-rn),q=It*R/T*Ht,Z=He*R/T*Ht;$.projectionMatrix.makePerspective(y,F,q,Z,Ht,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function be($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let K=$.near,ge=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),O.near=M.near=S.near=K,O.far=M.far=S.far=ge,(B!==O.near||G!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,G=O.far),O.layers.mask=$.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let Be=$.parent,Re=O.cameras;be(O,Be);for(let it=0;it<Re.length;it++)be(Re[it],Be);Re.length===2?ue(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),qe($,O,Be)};function qe($,K,ge){ge===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ur*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return p[$]};let yt=null;function St($,K){if(h=K.getViewerPose(l||o),g=K,h!==null){let ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Be=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let R=0;R<ge.length;R++){let It=ge[R],He=null;if(f!==null)He=f.getViewport(It);else{let xe=u.getViewSubImage(d,It);He=xe.viewport,R===0&&(e.setRenderTargetTextures(x,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(x))}let Fe=I[R];Fe===void 0&&(Fe=new $t,Fe.layers.enable(R),Fe.viewport=new ht,I[R]=Fe),Fe.matrix.fromArray(It.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(It.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(He.x,He.y,He.width,He.height),R===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(Fe)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let R=u.getDepthInformation(ge[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let R=0;R<ge.length;R++){let It=ge[R].camera;if(It){let He=p[It];He||(He=new Ca,p[It]=He);let Fe=u.getCameraImage(It);He.sourceTexture=Fe}}}}for(let ge=0;ge<A.length;ge++){let Be=w[ge],Re=A[ge];Be!==null&&Re!==void 0&&Re.update(Be,K,l||o)}yt&&yt($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let ct=new h0;ct.setAnimationLoop(St),this.setAnimationLoop=function($){yt=$},this.dispose=function(){}}},Sr=new Mi,Ob=new We;function Bb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Td(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),b=E.envMap,x=E.envMapRotation;b&&(m.envMap.value=b,Sr.copy(x),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),m.envMapRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(Sr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){let x=b.program;i.uniformBlockBinding(E,x)}function l(E,b){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));let A=b.program;i.updateUBOMapping(E,A);let w=e.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function h(E){let b=u();E.__bindingPointIndex=b;let x=n.createBuffer(),A=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],x=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,C=x.length;w<C;w++){let D=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,M=D.length;S<M;S++){let I=D[S];if(f(I,w,S,A)===!0){let O=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],G=0;for(let X=0;X<B.length;X++){let V=B[X],j=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,O+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,b,x,A){let w=E.value,C=b+"_"+x;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{let D=A[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(E){let b=E.uniforms,x=0,A=16;for(let C=0,D=b.length;C<D;C++){let S=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,I=S.length;M<I;M++){let O=S[M],B=Array.isArray(O.value)?O.value:[O.value];for(let G=0,X=B.length;G<X;G++){let V=B[G],j=_(V),H=x%A,se=H%j.boundary,ue=H+se;x+=se,ue!==0&&A-ue<j.storage&&(x+=A-ue),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=j.storage}}}let w=x%A;return w>0&&(x+=A-w),E.__size=x,E.__cache={},this}function _(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ch=class{constructor(e={}){let{canvas:t=Ug(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,A=!1;this._outputColorSpace=Et;let w=0,C=0,D=null,S=-1,M=null,I=new ht,O=new ht,B=null,G=new De(0),X=0,V=t.width,j=t.height,H=1,se=null,ue=null,be=new ht(0,0,V,j),qe=new ht(0,0,V,j),yt=!1,St=new _o,ct=!1,$=!1,K=new We,ge=new L,Be=new ht,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function mn(){return D===null?H:1}let R=i;function It(v,N){return t.getContext(v,N)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",J,!1),R===null){let N="webgl2";if(R=It(N,v),R===null)throw It(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let He,Fe,xe,Lt,Me,$e,rn,Ht,T,y,F,q,Z,W,Ae,ie,Se,Ee,ee,le,Ue,Te,ae,Ge;function P(){He=new iS(R),He.init(),Te=new Nb(R,He),Fe=new ZM(R,He,e,Te),xe=new Pb(R,He),Fe.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),Lt=new oS(R),Me=new vb,$e=new Db(R,He,xe,Me,Fe,Te,Lt),rn=new JM(x),Ht=new nS(x),T=new dx(R),ae=new YM(R,T),y=new sS(R,T,Lt,ae),F=new cS(R,y,T,Lt),ee=new aS(R,Fe,$e),ie=new jM(Me),q=new yb(x,rn,Ht,He,Fe,ae,ie),Z=new Bb(x,Me),W=new Mb,Ae=new Ab(He),Ee=new $M(x,rn,Ht,xe,F,f,c),Se=new Ib(x,F,Fe),Ge=new kb(R,Lt,Fe,xe),le=new KM(R,He,Lt),Ue=new rS(R,He,Lt),Lt.programs=q.programs,x.capabilities=Fe,x.extensions=He,x.properties=Me,x.renderLists=W,x.shadowMap=Se,x.state=xe,x.info=Lt}P();let te=new Vd(x,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(V,j,!1))},this.getSize=function(v){return v.set(V,j)},this.setSize=function(v,N,k=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,j=N,t.width=Math.floor(v*H),t.height=Math.floor(N*H),k===!0&&(t.style.width=v+"px",t.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(V*H,j*H).floor()},this.setDrawingBufferSize=function(v,N,k){V=v,j=N,H=k,t.width=Math.floor(v*k),t.height=Math.floor(N*k),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(I)},this.getViewport=function(v){return v.copy(be)},this.setViewport=function(v,N,k,z){v.isVector4?be.set(v.x,v.y,v.z,v.w):be.set(v,N,k,z),xe.viewport(I.copy(be).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(qe)},this.setScissor=function(v,N,k,z){v.isVector4?qe.set(v.x,v.y,v.z,v.w):qe.set(v,N,k,z),xe.scissor(O.copy(qe).multiplyScalar(H).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(v){xe.setScissorTest(yt=v)},this.setOpaqueSort=function(v){se=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,k=!0){let z=0;if(v){let U=!1;if(D!==null){let Q=D.texture.format;U=Q===Cl||Q===Rl||Q===Al}if(U){let Q=D.texture.type,ce=Q===Ei||Q===zs||Q===Mo||Q===bo||Q===El||Q===Tl,_e=Ee.getClearColor(),de=Ee.getClearAlpha(),Ne=_e.r,Oe=_e.g,Le=_e.b;ce?(g[0]=Ne,g[1]=Oe,g[2]=Le,g[3]=de,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ne,_[1]=Oe,_[2]=Le,_[3]=de,R.clearBufferiv(R.COLOR,0,_))}else z|=R.COLOR_BUFFER_BIT}N&&(z|=R.DEPTH_BUFFER_BIT),k&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Ee.dispose(),W.dispose(),Ae.dispose(),Me.dispose(),rn.dispose(),Ht.dispose(),F.dispose(),ae.dispose(),Ge.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ci),te.removeEventListener("sessionend",om),er.stop()};function re(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=Lt.autoReset,N=Se.enabled,k=Se.autoUpdate,z=Se.needsUpdate,U=Se.type;P(),Lt.autoReset=v,Se.enabled=N,Se.autoUpdate=k,Se.needsUpdate=z,Se.type=U}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Y(v){let N=v.target;N.removeEventListener("dispose",Y),ve(N)}function ve(v){ke(v),Me.remove(v)}function ke(v){let N=Me.get(v).programs;N!==void 0&&(N.forEach(function(k){q.releaseProgram(k)}),v.isShaderMaterial&&q.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,k,z,U,Q){N===null&&(N=Re);let ce=U.isMesh&&U.matrixWorld.determinant()<0,_e=ov(v,N,k,z,U);xe.setMaterial(z,ce);let de=k.index,Ne=1;if(z.wireframe===!0){if(de=y.getWireframeAttribute(k),de===void 0)return;Ne=2}let Oe=k.drawRange,Le=k.attributes.position,et=Oe.start*Ne,vt=(Oe.start+Oe.count)*Ne;Q!==null&&(et=Math.max(et,Q.start*Ne),vt=Math.min(vt,(Q.start+Q.count)*Ne)),de!==null?(et=Math.max(et,0),vt=Math.min(vt,de.count)):Le!=null&&(et=Math.max(et,0),vt=Math.min(vt,Le.count));let Bt=vt-et;if(Bt<0||Bt===1/0)return;ae.setup(U,z,_e,k,de);let At,xt=le;if(de!==null&&(At=T.get(de),xt=Ue,xt.setIndex(At)),U.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*mn()),xt.setMode(R.LINES)):xt.setMode(R.TRIANGLES);else if(U.isLine){let Pe=z.linewidth;Pe===void 0&&(Pe=1),xe.setLineWidth(Pe*mn()),U.isLineSegments?xt.setMode(R.LINES):U.isLineLoop?xt.setMode(R.LINE_LOOP):xt.setMode(R.LINE_STRIP)}else U.isPoints?xt.setMode(R.POINTS):U.isSprite&&xt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Pe=U._multiDrawStarts,Dt=U._multiDrawCounts,lt=U._multiDrawCount,zn=de?T.get(de).bytesPerElement:1,Wr=Me.get(z).currentProgram.getUniforms();for(let Hn=0;Hn<lt;Hn++)Wr.setValue(R,"_gl_DrawID",Hn),xt.render(Pe[Hn]/zn,Dt[Hn])}else if(U.isInstancedMesh)xt.renderInstances(et,Bt,U.count);else if(k.isInstancedBufferGeometry){let Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Dt=Math.min(k.instanceCount,Pe);xt.renderInstances(et,Bt,Dt)}else xt.render(et,Bt)};function bt(v,N,k){v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=En,v.needsUpdate=!0,Mc(v,N,k),v.side=xi,v.needsUpdate=!0,Mc(v,N,k),v.side=yn):Mc(v,N,k)}this.compile=function(v,N,k=null){k===null&&(k=v),p=Ae.get(k),p.init(N),b.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),v!==k&&v.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Q=U.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){let _e=Q[ce];bt(_e,k,U),z.add(_e)}else bt(Q,k,U),z.add(Q)}),p=b.pop(),z},this.compileAsync=function(v,N,k=null){let z=this.compile(v,N,k);return new Promise(U=>{function Q(){if(z.forEach(function(ce){Me.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){U(v);return}setTimeout(Q,10)}He.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let pt=null;function Qi(v){pt&&pt(v)}function Ci(){er.stop()}function om(){er.start()}let er=new h0;er.setAnimationLoop(Qi),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(v){pt=v,te.setAnimationLoop(v),v===null?er.stop():er.start()},te.addEventListener("sessionstart",Ci),te.addEventListener("sessionend",om),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,N,D),p=Ae.get(v,b.length),p.init(N),b.push(p),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),St.setFromProjectionMatrix(K,yi,N.reversedDepth),$=this.localClippingEnabled,ct=ie.init(this.clippingPlanes,$),m=W.get(v,E.length),m.init(),E.push(m),te.enabled===!0&&te.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&vu(Q,N,-1/0,x.sortObjects)}vu(v,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(se,ue),it=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,it&&Ee.addToRenderList(m,v),this.info.render.frame++,ct===!0&&ie.beginShadows();let k=p.state.shadowsArray;Se.render(k,v,N),ct===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let Q=N.cameras;if(U.length>0)for(let ce=0,_e=Q.length;ce<_e;ce++){let de=Q[ce];cm(z,U,v,de)}it&&Ee.render(v);for(let ce=0,_e=Q.length;ce<_e;ce++){let de=Q[ce];am(m,v,de,de.viewport)}}else U.length>0&&cm(z,U,v,N),it&&Ee.render(v),am(m,v,N);D!==null&&C===0&&($e.updateMultisampleRenderTarget(D),$e.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(x,v,N),ae.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ct===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function vu(v,N,k,z){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||St.intersectsSprite(v)){z&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);let ce=F.update(v),_e=v.material;_e.visible&&m.push(v,ce,_e,k,Be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||St.intersectsObject(v))){let ce=F.update(v),_e=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Be.copy(ce.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(_e)){let de=ce.groups;for(let Ne=0,Oe=de.length;Ne<Oe;Ne++){let Le=de[Ne],et=_e[Le.materialIndex];et&&et.visible&&m.push(v,ce,et,k,Be.z,Le)}}else _e.visible&&m.push(v,ce,_e,k,Be.z,null)}}let Q=v.children;for(let ce=0,_e=Q.length;ce<_e;ce++)vu(Q[ce],N,k,z)}function am(v,N,k,z){let U=v.opaque,Q=v.transmissive,ce=v.transparent;p.setupLightsView(k),ct===!0&&ie.setGlobalState(x.clippingPlanes,k),z&&xe.viewport(I.copy(z)),U.length>0&&xc(U,N,k),Q.length>0&&xc(Q,N,k),ce.length>0&&xc(ce,N,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function cm(v,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Pi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?So:Ei,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let Q=p.state.transmissionRenderTarget[z.id],ce=z.viewport||I;Q.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);let _e=x.getRenderTarget(),de=x.getActiveCubeFace(),Ne=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(G),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),it&&Ee.render(k);let Oe=x.toneMapping;x.toneMapping=gs;let Le=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ct===!0&&ie.setGlobalState(x.clippingPlanes,z),xc(v,k,z),$e.updateMultisampleRenderTarget(Q),$e.updateRenderTargetMipmap(Q),He.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let vt=0,Bt=N.length;vt<Bt;vt++){let At=N[vt],xt=At.object,Pe=At.geometry,Dt=At.material,lt=At.group;if(Dt.side===yn&&xt.layers.test(z.layers)){let zn=Dt.side;Dt.side=En,Dt.needsUpdate=!0,lm(xt,k,z,Pe,Dt,lt),Dt.side=zn,Dt.needsUpdate=!0,et=!0}}et===!0&&($e.updateMultisampleRenderTarget(Q),$e.updateRenderTargetMipmap(Q))}x.setRenderTarget(_e,de,Ne),x.setClearColor(G,X),Le!==void 0&&(z.viewport=Le),x.toneMapping=Oe}function xc(v,N,k){let z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=v.length;U<Q;U++){let ce=v[U],_e=ce.object,de=ce.geometry,Ne=ce.group,Oe=ce.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),_e.layers.test(k.layers)&&lm(_e,N,k,de,Oe,Ne)}}function lm(v,N,k,z,U,Q){v.onBeforeRender(x,N,k,z,U,Q),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(x,N,k,z,v,Q),U.transparent===!0&&U.side===yn&&U.forceSinglePass===!1?(U.side=En,U.needsUpdate=!0,x.renderBufferDirect(k,N,z,U,v,Q),U.side=xi,U.needsUpdate=!0,x.renderBufferDirect(k,N,z,U,v,Q),U.side=yn):x.renderBufferDirect(k,N,z,U,v,Q),v.onAfterRender(x,N,k,z,U,Q)}function Mc(v,N,k){N.isScene!==!0&&(N=Re);let z=Me.get(v),U=p.state.lights,Q=p.state.shadowsArray,ce=U.state.version,_e=q.getParameters(v,U.state,Q,N,k),de=q.getProgramCacheKey(_e),Ne=z.programs;z.environment=v.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(v.isMeshStandardMaterial?Ht:rn).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",Y),Ne=new Map,z.programs=Ne);let Oe=Ne.get(de);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===ce)return um(v,_e),Oe}else _e.uniforms=q.getUniforms(v),v.onBeforeCompile(_e,x),Oe=q.acquireProgram(_e,de),Ne.set(de,Oe),z.uniforms=_e.uniforms;let Le=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Le.clippingPlanes=ie.uniform),um(v,_e),z.needsLights=cv(v),z.lightsStateVersion=ce,z.needsLights&&(Le.ambientLightColor.value=U.state.ambient,Le.lightProbe.value=U.state.probe,Le.directionalLights.value=U.state.directional,Le.directionalLightShadows.value=U.state.directionalShadow,Le.spotLights.value=U.state.spot,Le.spotLightShadows.value=U.state.spotShadow,Le.rectAreaLights.value=U.state.rectArea,Le.ltc_1.value=U.state.rectAreaLTC1,Le.ltc_2.value=U.state.rectAreaLTC2,Le.pointLights.value=U.state.point,Le.pointLightShadows.value=U.state.pointShadow,Le.hemisphereLights.value=U.state.hemi,Le.directionalShadowMap.value=U.state.directionalShadowMap,Le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Le.spotShadowMap.value=U.state.spotShadowMap,Le.spotLightMatrix.value=U.state.spotLightMatrix,Le.spotLightMap.value=U.state.spotLightMap,Le.pointShadowMap.value=U.state.pointShadowMap,Le.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Oe,z.uniformsList=null,Oe}function hm(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=Ro.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function um(v,N){let k=Me.get(v);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function ov(v,N,k,z,U){N.isScene!==!0&&(N=Re),$e.resetTextureUnits();let Q=N.fog,ce=z.isMeshStandardMaterial?N.environment:null,_e=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Jt,de=(z.isMeshStandardMaterial?Ht:rn).get(z.envMap||ce),Ne=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!k.morphAttributes.position,et=!!k.morphAttributes.normal,vt=!!k.morphAttributes.color,Bt=gs;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Bt=x.toneMapping);let At=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,xt=At!==void 0?At.length:0,Pe=Me.get(z),Dt=p.state.lights;if(ct===!0&&($===!0||v!==M)){let Mn=v===M&&z.id===S;ie.setState(z,v,Mn)}let lt=!1;z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Dt.state.version||Pe.outputColorSpace!==_e||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==de||z.fog===!0&&Pe.fog!==Q||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Oe||Pe.morphTargets!==Le||Pe.morphNormals!==et||Pe.morphColors!==vt||Pe.toneMapping!==Bt||Pe.morphTargetsCount!==xt)&&(lt=!0):(lt=!0,Pe.__version=z.version);let zn=Pe.currentProgram;lt===!0&&(zn=Mc(z,N,U));let Wr=!1,Hn=!1,ta=!1,Nt=zn.getUniforms(),ti=Pe.uniforms;if(xe.useProgram(zn.program)&&(Wr=!0,Hn=!0,ta=!0),z.id!==S&&(S=z.id,Hn=!0),Wr||M!==v){xe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Nt.setValue(R,"projectionMatrix",v.projectionMatrix),Nt.setValue(R,"viewMatrix",v.matrixWorldInverse);let An=Nt.map.cameraPosition;An!==void 0&&An.setValue(R,ge.setFromMatrixPosition(v.matrixWorld)),Fe.logarithmicDepthBuffer&&Nt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Nt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Hn=!0,ta=!0)}if(U.isSkinnedMesh){Nt.setOptional(R,U,"bindMatrix"),Nt.setOptional(R,U,"bindMatrixInverse");let Mn=U.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Nt.setValue(R,"boneTexture",Mn.boneTexture,$e))}U.isBatchedMesh&&(Nt.setOptional(R,U,"batchingTexture"),Nt.setValue(R,"batchingTexture",U._matricesTexture,$e),Nt.setOptional(R,U,"batchingIdTexture"),Nt.setValue(R,"batchingIdTexture",U._indirectTexture,$e),Nt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&Nt.setValue(R,"batchingColorTexture",U._colorsTexture,$e));let ni=k.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&ee.update(U,k,zn),(Hn||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,Nt.setValue(R,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ti.envMap.value=de,ti.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(ti.envMapIntensity.value=N.environmentIntensity),Hn&&(Nt.setValue(R,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&av(ti,ta),Q&&z.fog===!0&&Z.refreshFogUniforms(ti,Q),Z.refreshMaterialUniforms(ti,z,H,j,p.state.transmissionRenderTarget[v.id]),Ro.upload(R,hm(Pe),ti,$e)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ro.upload(R,hm(Pe),ti,$e),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Nt.setValue(R,"center",U.center),Nt.setValue(R,"modelViewMatrix",U.modelViewMatrix),Nt.setValue(R,"normalMatrix",U.normalMatrix),Nt.setValue(R,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Mn=z.uniformsGroups;for(let An=0,xu=Mn.length;An<xu;An++){let tr=Mn[An];Ge.update(tr,zn),Ge.bind(tr,zn)}}return zn}function av(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function cv(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,N,k){let z=Me.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Me.get(v.texture).__webglTexture=N,Me.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let k=Me.get(v);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};let lv=R.createFramebuffer();this.setRenderTarget=function(v,N=0,k=0){D=v,w=N,C=k;let z=!0,U=null,Q=!1,ce=!1;if(v){let de=Me.get(v);if(de.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(de.__webglFramebuffer===void 0)$e.setupRenderTarget(v);else if(de.__hasExternalTextures)$e.rebindTextures(v,Me.get(v.texture).__webglTexture,Me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Le=v.depthTexture;if(de.__boundDepthTexture!==Le){if(Le!==null&&Me.has(Le)&&(v.width!==Le.image.width||v.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(v)}}let Ne=v.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ce=!0);let Oe=Me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?U=Oe[N][k]:U=Oe[N],Q=!0):v.samples>0&&$e.useMultisampledRTT(v)===!1?U=Me.get(v).__webglMultisampledFramebuffer:Array.isArray(Oe)?U=Oe[k]:U=Oe,I.copy(v.viewport),O.copy(v.scissor),B=v.scissorTest}else I.copy(be).multiplyScalar(H).floor(),O.copy(qe).multiplyScalar(H).floor(),B=yt;if(k!==0&&(U=lv),xe.bindFramebuffer(R.FRAMEBUFFER,U)&&z&&xe.drawBuffers(v,U),xe.viewport(I),xe.scissor(O),xe.setScissorTest(B),Q){let de=Me.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,k)}else if(ce){let de=N;for(let Ne=0;Ne<v.textures.length;Ne++){let Oe=Me.get(v.textures[Ne]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,k,de)}}else if(v!==null&&k!==0){let de=Me.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(v,N,k,z,U,Q,ce,_e=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){xe.bindFramebuffer(R.FRAMEBUFFER,de);try{let Ne=v.textures[_e],Oe=Ne.format,Le=Ne.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-z&&k>=0&&k<=v.height-U&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(N,k,z,U,Te.convert(Oe),Te.convert(Le),Q))}finally{let Ne=D!==null?Me.get(D).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,N,k,z,U,Q,ce,_e=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(N>=0&&N<=v.width-z&&k>=0&&k<=v.height-U){xe.bindFramebuffer(R.FRAMEBUFFER,de);let Ne=v.textures[_e],Oe=Ne.format,Le=Ne.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,et),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(N,k,z,U,Te.convert(Oe),Te.convert(Le),0);let vt=D!==null?Me.get(D).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,vt);let Bt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Fg(R,Bt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,et),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(et),R.deleteSync(Bt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,k=0){let z=Math.pow(2,-k),U=Math.floor(v.image.width*z),Q=Math.floor(v.image.height*z),ce=N!==null?N.x:0,_e=N!==null?N.y:0;$e.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,ce,_e,U,Q),xe.unbindTexture()};let hv=R.createFramebuffer(),uv=R.createFramebuffer();this.copyTextureToTexture=function(v,N,k=null,z=null,U=0,Q=null){Q===null&&(U!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ce,_e,de,Ne,Oe,Le,et,vt,Bt,At=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(k!==null)ce=k.max.x-k.min.x,_e=k.max.y-k.min.y,de=k.isBox3?k.max.z-k.min.z:1,Ne=k.min.x,Oe=k.min.y,Le=k.isBox3?k.min.z:0;else{let ni=Math.pow(2,-U);ce=Math.floor(At.width*ni),_e=Math.floor(At.height*ni),v.isDataArrayTexture?de=At.depth:v.isData3DTexture?de=Math.floor(At.depth*ni):de=1,Ne=0,Oe=0,Le=0}z!==null?(et=z.x,vt=z.y,Bt=z.z):(et=0,vt=0,Bt=0);let xt=Te.convert(N.format),Pe=Te.convert(N.type),Dt;N.isData3DTexture?($e.setTexture3D(N,0),Dt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($e.setTexture2DArray(N,0),Dt=R.TEXTURE_2D_ARRAY):($e.setTexture2D(N,0),Dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let lt=R.getParameter(R.UNPACK_ROW_LENGTH),zn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Wr=R.getParameter(R.UNPACK_SKIP_PIXELS),Hn=R.getParameter(R.UNPACK_SKIP_ROWS),ta=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,At.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,At.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ne),R.pixelStorei(R.UNPACK_SKIP_ROWS,Oe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Le);let Nt=v.isDataArrayTexture||v.isData3DTexture,ti=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let ni=Me.get(v),Mn=Me.get(N),An=Me.get(ni.__renderTarget),xu=Me.get(Mn.__renderTarget);xe.bindFramebuffer(R.READ_FRAMEBUFFER,An.__webglFramebuffer),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,xu.__webglFramebuffer);for(let tr=0;tr<de;tr++)Nt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(v).__webglTexture,U,Le+tr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,Q,Bt+tr)),R.blitFramebuffer(Ne,Oe,ce,_e,et,vt,ce,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Me.has(v)){let ni=Me.get(v),Mn=Me.get(N);xe.bindFramebuffer(R.READ_FRAMEBUFFER,hv),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,uv);for(let An=0;An<de;An++)Nt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ni.__webglTexture,U,Le+An):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ni.__webglTexture,U),ti?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mn.__webglTexture,Q,Bt+An):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mn.__webglTexture,Q),U!==0?R.blitFramebuffer(Ne,Oe,ce,_e,et,vt,ce,_e,R.COLOR_BUFFER_BIT,R.NEAREST):ti?R.copyTexSubImage3D(Dt,Q,et,vt,Bt+An,Ne,Oe,ce,_e):R.copyTexSubImage2D(Dt,Q,et,vt,Ne,Oe,ce,_e);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ti?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(Dt,Q,et,vt,Bt,ce,_e,de,xt,Pe,At.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Dt,Q,et,vt,Bt,ce,_e,de,xt,At.data):R.texSubImage3D(Dt,Q,et,vt,Bt,ce,_e,de,xt,Pe,At):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,et,vt,ce,_e,xt,Pe,At.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,et,vt,At.width,At.height,xt,At.data):R.texSubImage2D(R.TEXTURE_2D,Q,et,vt,ce,_e,xt,Pe,At);R.pixelStorei(R.UNPACK_ROW_LENGTH,lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,zn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Wr),R.pixelStorei(R.UNPACK_SKIP_ROWS,Hn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ta),Q===0&&N.generateMipmaps&&R.generateMipmap(Dt),xe.unbindTexture()},this.initRenderTarget=function(v){Me.get(v).__webglFramebuffer===void 0&&$e.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?$e.setTextureCube(v,0):v.isData3DTexture?$e.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?$e.setTexture2DArray(v,0):$e.setTexture2D(v,0),xe.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,xe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Nr=typeof self<"u"?self:{};function O_(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=Nr,s=0;s<t.length;s++)if((i=i[t[s]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function Ct(n,e){n=n.split(".");for(var t,i=Nr;n.length&&(t=n.shift());)n.length||e===void 0?i=i[t]&&i[t]!==Object.prototype[t]?i[t]:i[t]={}:i[t]=e}function Tr(){throw Error("Invalid UTF8")}function g0(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}var Wd,zb,hh=void 0,Hb=typeof TextDecoder<"u",Vb=typeof TextEncoder<"u";function B_(n){if(Vb)n=(zb||(zb=new TextEncoder)).encode(n);else{let t=0,i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var e=n.charCodeAt(s);if(e<128)i[t++]=e;else{if(e<2048)i[t++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<n.length){let r=n.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}s--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}function k_(n){Nr.setTimeout(()=>{throw n},0)}var Gb=O_(610401301,!1),_0=O_(748402147,!0);function y0(){var n=Nr.navigator;return n&&(n=n.userAgent)?n:""}var ef,v0=Nr.navigator;function Vh(n){return Vh[" "](n),n}ef=v0&&v0.userAgentData||null,Vh[" "]=function(){};var z_={},Za=null;function Wb(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),s=0;return(function(r,o){function a(l){for(;c<r.length;){let h=r.charAt(c++),u=Za[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}H_();for(var c=0;;){let l=a(-1),h=a(0),u=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),d!=64&&o(u<<6&192|d))}})(n,function(r){i[s++]=r}),s!==t?i.subarray(0,s):i}function H_(){if(!Za){Za={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let t=0;t<5;t++){let i=n.concat(e[t].split(""));z_[t]=i;for(let s=0;s<i.length;s++){let r=i[s];Za[r]===void 0&&(Za[r]=s)}}}}var Xb=typeof Uint8Array<"u",V_=!(!(Gb&&ef&&ef.brands.length>0)&&(y0().indexOf("Trident")!=-1||y0().indexOf("MSIE")!=-1))&&typeof btoa=="function",x0=/[-_.]/g,qb={"-":"+",_:"/",".":"="};function $b(n){return qb[n]||""}function G_(n){if(!V_)return Wb(n);n=x0.test(n)?n.replace(x0,$b):n,n=atob(n);var e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Af(n){return Xb&&n!=null&&n instanceof Uint8Array}var Uo={};function Ur(){return Yb||(Yb=new Hi(null,Uo))}function Rf(n){W_(Uo);var e=n.g;return(e=e==null||Af(e)?e:typeof e=="string"?G_(e):null)==null?e:n.g=e}var Yb,Hi=class{h(){return new Uint8Array(Rf(this)||0)}constructor(n,e){if(W_(e),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};function W_(n){if(n!==Uo)throw Error("illegal external caller")}function X_(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}var Kb=void 0;function tc(n){return X_(n=Error(n),"warning"),n}function Fo(n,e){if(n!=null){var t=Kb??(Kb={}),i=t[n]||0;i>=e||(t[n]=i+1,X_(n=Error(),"incident"),k_(n))}}function Or(){return typeof BigInt=="function"}var qo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function qi(n,e,t=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?t&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():e}var Ys,Zb=qi("jas",void 0,!0),M0=qi(void 0,"0di"),qa=qi(void 0,"1oa"),Zn=qi(void 0,Symbol()),jb=qi(void 0,"0ub"),Jb=qi(void 0,"0ubs"),tf=qi(void 0,"0ubsb"),Qb=qi(void 0,"0actk"),Oo=qi("m_m","kb",!0),S0=qi(),q_={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},$_=Object.defineProperties,me=qo?Zb:"Va",b0=[];function ac(n,e){qo||me in n||$_(n,q_),n[me]|=e}function jt(n,e){qo||me in n||$_(n,q_),n[me]=e}function cc(n){return ac(n,34),n}function nc(n){return ac(n,8192),n}jt(b0,7),Ys=Object.freeze(b0);var Bo={};function On(n,e){return e===void 0?n.h!==Fr&&!!(2&n.A[me]):!!(2&e)&&n.h!==Fr}var Fr={};function Gh(n,e){if(n!=null){if(typeof n=="string")n=n?new Hi(n,Uo):Ur();else if(n.constructor!==Hi)if(Af(n))n=n.length?new Hi(new Uint8Array(n),Uo):Ur();else{if(!e)throw Error();n=void 0}}return n}var Eh=class{constructor(e,t,i){this.g=e,this.h=t,this.j=i}next(){var e=this.g.next();return e.done||(e.value=this.h.call(this.j,e.value)),e}[Symbol.iterator](){return this}},eE=Object.freeze({});function Y_(n,e,t){var i,s=128&e?0:-1,r=n.length;(i=!!r)&&(i=(i=n[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var o=r+(i?-1:0);for(e=128&e?1:0;e<o;e++)t(e-s,n[e]);if(i){n=n[r-1];for(let a in n)!isNaN(a)&&t(+a,n[a])}}var K_={};function $o(n){return 128&n?K_:void 0}function Wh(n){return n.ib=!0,n}var tE=Wh(n=>typeof n=="number"),E0=Wh(n=>typeof n=="string"),nE=Wh(n=>typeof n=="boolean"),Xh=typeof Nr.BigInt=="function"&&typeof Nr.BigInt(0)=="bigint";function Zt(n){var e=n;if(E0(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(tE(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Xh?BigInt(n):n=nE(n)?n?"1":"0":E0(n)?n.trim()||"0":String(n)}var nf=Wh(n=>Xh?n>=sE&&n<=oE:n[0]==="-"?T0(n,iE):T0(n,rE)),iE=Number.MIN_SAFE_INTEGER.toString(),sE=Xh?BigInt(Number.MIN_SAFE_INTEGER):void 0,rE=Number.MAX_SAFE_INTEGER.toString(),oE=Xh?BigInt(Number.MAX_SAFE_INTEGER):void 0;function T0(n,e){if(n.length>e.length)return!1;if(n.length<e.length||n===e)return!0;for(let t=0;t<n.length;t++){let i=n[t],s=e[t];if(i>s)return!1;if(i<s)return!0}}var Z_,aE=typeof Uint8Array.prototype.slice=="function",ot=0,_t=0;function sf(n){var e=n>>>0;ot=e,_t=(n-e)/4294967296>>>0}function Br(n){if(n<0){sf(-n);let[e,t]=Lf(ot,_t);ot=e>>>0,_t=t>>>0}else sf(n)}function Cf(n){var e=Z_||(Z_=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),_t=0,ot=e.getUint32(0,!0)}function j_(n,e){var t=4294967296*e+(n>>>0);return Number.isSafeInteger(t)?t:ko(n,e)}function cE(n,e){return Zt(Or()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(n>>>0)):ko(n,e))}function J_(n,e){return Or()?Zt(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(n)))):Zt(If(n,e))}function ko(n,e){if(n>>>=0,(e>>>=0)<=2097151)var t=""+(4294967296*e+n);else Or()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,n>=1e7&&(t+=n/1e7>>>0,n%=1e7),t>=1e7&&(e+=t/1e7>>>0,t%=1e7),t=e+w0(t)+w0(n));return t}function w0(n){return n=String(n),"0000000".slice(n.length)+n}function If(n,e){if(2147483648&e)if(Or())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{let[t,i]=Lf(n,e);n="-"+ko(t,i)}else n=ko(n,e);return n}function lc(n){if(n.length<16)Br(Number(n));else if(Or())n=BigInt(n),ot=Number(n&BigInt(4294967295))>>>0,_t=Number(n>>BigInt(32)&BigInt(4294967295));else{let e=+(n[0]==="-");_t=ot=0;let t=n.length;for(let i=e,s=(t-e)%6+e;s<=t;i=s,s+=6){let r=Number(n.slice(i,s));_t*=1e6,(ot=1e6*ot+r)>=4294967296&&(_t+=Math.trunc(ot/4294967296),_t>>>=0,ot>>>=0)}if(e){let[i,s]=Lf(ot,_t);ot=i,_t=s}}}function Lf(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function hi(n){return Array.prototype.slice.call(n)}var Ir=typeof BigInt=="function"?BigInt.asIntN:void 0,rf=typeof BigInt=="function"?BigInt.asUintN:void 0,Vi=Number.isSafeInteger,hc=Number.isFinite,qs=Math.trunc,lE=Zt(0);function Q_(n){if(typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);return n}function Ti(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Th(n){if(typeof n!="boolean"){var e=typeof n;throw Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`)}return n}var hE=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Yo(n){switch(typeof n){case"bigint":return!0;case"number":return hc(n);case"string":return hE.test(n);default:return!1}}function Ss(n){if(n!=null){if(!hc(n))throw tc("enum");n|=0}return n}function kr(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return hc(n)?0|n:void 0}function e1(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return hc(n)?n>>>0:void 0}function t1(n,e){if(e??(e=1024),!Yo(n))throw tc("int64");var t=typeof n;switch(e){case 512:switch(t){case"string":return wh(n);case"bigint":return String(Ir(64,n));default:return r1(n)}case 1024:switch(t){case"string":return o1(n);case"bigint":return Zt(Ir(64,n));default:return a1(n)}case 0:switch(t){case"string":return wh(n);case"bigint":return Zt(Ir(64,n));default:return qh(n)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function n1(n){var e=n.length;return(n[0]==="-"?e<20||e===20&&n<="-9223372036854775808":e<19||e===19&&n<="9223372036854775807")?n:(lc(n),If(ot,_t))}function i1(n){if(n[0]==="-")var e=!1;else e=(e=n.length)<20||e===20&&n<="18446744073709551615";return e?n:(lc(n),ko(ot,_t))}function qh(n){if(n=qs(n),!Vi(n)){Br(n);var e=ot,t=_t;(n=2147483648&t)&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),n=typeof(e=j_(e,t))=="number"?n?-e:e:n?"-"+e:e}return n}function s1(n){return(n=qs(n))>=0&&Vi(n)||(Br(n),n=j_(ot,_t)),n}function r1(n){return n=qs(n),Vi(n)?n=String(n):(Br(n),n=If(ot,_t)),n}function wh(n){var e=qs(Number(n));return Vi(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),n1(n))}function o1(n){var e=qs(Number(n));return Vi(e)?Zt(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Or()?Zt(Ir(64,BigInt(n))):Zt(n1(n)))}function a1(n){return Vi(n)?Zt(qh(n)):Zt(r1(n))}function Ah(n){var e=typeof n;return n==null?n:e==="bigint"?Zt(Ir(64,n)):Yo(n)?e==="string"?o1(n):a1(n):void 0}function Pf(n){if(n==null)return n;var e=typeof n;if(e==="bigint")return String(Ir(64,n));if(Yo(n)){if(e==="string")return wh(n);if(e==="number")return qh(n)}}function c1(n){if(n==null||typeof n=="string"||n instanceof Hi)return n}function l1(n){if(typeof n!="string")throw Error();return n}function Ms(n){if(n!=null&&typeof n!="string")throw Error();return n}function pn(n){return n==null||typeof n=="string"?n:void 0}function Df(n,e,t,i){return n!=null&&n[Oo]===Bo?n:Array.isArray(n)?((i=(t=0|n[me])|32&i|2&i)!==t&&jt(n,i),new e(n)):(t?2&i?((n=e[M0])||(cc((n=new e).A),n=e[M0]=n),e=n):e=new e:e=void 0,e)}function uE(n,e,t){return(n=e?t1(n,1024):Ah(n))==null?t?lE:void 0:n}function dE(n){return n}var fE={},pE=(function(){try{return Vh(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Ja=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}},mE=pE?(Object.setPrototypeOf(Ja.prototype,Map.prototype),Object.defineProperties(Ja.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Ja):class extends Map{constructor(){super()}};function A0(n){return n}function Xd(n){if(2&n.M)throw Error("Cannot mutate an immutable Map")}var gE,Es=class extends mE{constructor(n,e,t=A0,i=A0){super(),this.M=0|n[me],this.N=e,this.ba=t,this.na=this.N?_E:i;for(let s=0;s<n.length;s++){let r=n[s],o=t(r[0],!1,!0),a=r[1];e?a===void 0&&(a=null):a=i(r[1],!1,!0,void 0,void 0,this.M),super.set(o,a)}}ea(n){return nc(Array.from(super.entries(),n))}clear(){Xd(this),super.clear()}delete(n){return Xd(this),super.delete(this.ba(n,!0,!1))}entries(){if(this.N){var n=super.keys();n=new Eh(n,yE,this)}else n=super.entries();return n}values(){if(this.N){var n=super.keys();n=new Eh(n,Es.prototype.get,this)}else n=super.values();return n}forEach(n,e){this.N?super.forEach((t,i,s)=>{n.call(e,s.get(i),i,s)}):super.forEach(n,e)}set(n,e){return Xd(this),(n=this.ba(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.na(e,!0,!0,this.N,!1,this.M))}gb(n){var e=this.ba(n[0],!1,!0);n=n[1],n=this.N?n===void 0?null:n:this.na(n,!1,!0,void 0,!1,this.M),super.set(e,n)}has(n){return super.has(this.ba(n,!1,!1))}get(n){n=this.ba(n,!1,!1);var e=super.get(n);if(e!==void 0){var t=this.N;return t?((t=this.na(e,!1,!0,t,this.Fa,this.M))!==e&&super.set(n,t),t):e}}[Symbol.iterator](){return this.entries()}};function _E(n,e,t,i,s,r){return n=Df(n,i,t,r),s&&(n=Uf(n)),n}function yE(n){return[n,this.get(n)]}function R0(){return gE||(gE=new Es(cc([]),void 0,void 0,void 0,fE))}function $h(n){return Zn?n[Zn]:void 0}function Rh(n,e){for(let t in n)!isNaN(t)&&e(n,+t,n[t])}Es.prototype.toJSON=void 0;var vE,xE,ME,of=class{},SE={cb:!0};function bE(n,e){e<100||Fo(Jb,1)}function Yh(n,e,t,i){var s=i!==void 0;i=!!i;var r,o=Zn;!s&&qo&&o&&(r=n[o])&&Rh(r,bE),o=[];var a=n.length;r=4294967295;var c=!1,l=!!(64&e),h=l?128&e?0:-1:void 0;if(!(1&e)){var u=a&&n[a-1];u!=null&&typeof u=="object"&&u.constructor===Object?r=--a:u=void 0,!l||128&e||s||(c=!0,r=(vE??dE)(r-h,h,n,u,void 0)+h)}e=void 0;for(var d=0;d<a;d++){let f=n[d];if(f!=null&&(f=t(f,i))!=null)if(l&&d>=r){let g=d-h;(e??(e={}))[g]=f}else o[d]=f}if(u)for(let f in u){if((a=u[f])==null||(a=t(a,i))==null)continue;let g;d=+f,l&&!Number.isNaN(d)&&(g=d+h)<r?o[g]=a:(e??(e={}))[f]=a}return e&&(c?o.push(e):o[r]=e),s&&Zn&&(n=$h(n))&&n instanceof of&&(o[Zn]=(function(f){var g=new of;return Rh(f,(_,m,p)=>{g[m]=hi(p)}),g.ka=f.ka,g})(n)),o}function EE(n){return n[0]=ic(n[0]),n[1]=ic(n[1]),n}function ic(n){switch(typeof n){case"number":return Number.isFinite(n)?n:""+n;case"bigint":return nf(n)?Number(n):""+n;case"boolean":return n?1:0;case"object":if(Array.isArray(n)){var e=0|n[me];return n.length===0&&1&e?void 0:Yh(n,e,ic)}if(n!=null&&n[Oo]===Bo)return h1(n);if(n instanceof Hi){if((e=n.g)==null)n="";else if(typeof e=="string")n=e;else{if(V_){for(var t="",i=0,s=e.length-10240;i<s;)t+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));t+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(t)}else{t===void 0&&(t=0),H_(),t=z_[t],i=Array(Math.floor(e.length/3)),s=t[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var r=e[l],o=e[l+1],a=e[l+2],c=t[r>>2];r=t[(3&r)<<4|o>>4],o=t[(15&o)<<2|a>>6],a=t[63&a],i[h++]=c+r+o+a}switch(c=0,a=s,e.length-l){case 2:a=t[(15&(c=e[l+1]))<<2]||s;case 1:e=e[l],i[h]=t[e>>2]+t[(3&e)<<4|c>>4]+a+s}e=i.join("")}n=n.g=e}return n}return n instanceof Es?n=n.size!==0?n.ea(EE):void 0:void 0}return n}function h1(n){return Yh(n=n.A,0|n[me],ic)}function Lr(n,e){return u1(n,e[0],e[1])}function u1(n,e,t,i=0){if(n==null){var s=32;t?(n=[t],s|=128):n=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(s=0|n[me],_0&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(_0)throw Error("carr");Fo(Qb,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&jt(n,s|i),n;if(t&&(s|=128,t!==n[0]))throw Error("mid");e:{s|=64;var r=(t=n).length;if(r){var o=r-1;let c=t[o];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((o-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var a in c)(r=+a)<o&&(t[r+e]=c[a],delete c[a]);s=-16760833&s|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return jt(n,64|s|i),n}function TE(n,e){if(typeof n!="object")return n;if(Array.isArray(n)){var t=0|n[me];return n.length===0&&1&t?void 0:C0(n,t,e)}if(n!=null&&n[Oo]===Bo)return I0(n);if(n instanceof Es){if(2&(e=n.M))return n;if(!n.size)return;if(t=cc(n.ea()),n.N)for(n=0;n<t.length;n++){let i=t[n],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[Oo]===Bo?I0(s):Array.isArray(s)?C0(s,0|s[me],!!(32&e)):void 0,i[1]=s}return t}return n instanceof Hi?n:void 0}function C0(n,e,t){return 2&e||(!t||4096&e||16&e?n=Ko(n,e,!1,t&&!(16&e)):(ac(n,34),4&e&&Object.freeze(n))),n}function Nf(n,e,t){return n=new n.constructor(e),t&&(n.h=Fr),n.m=Fr,n}function I0(n){var e=n.A,t=0|e[me];return On(n,t)?n:Ff(n,e,t)?Nf(n,e):Ko(e,t)}function Ko(n,e,t,i){return i??(i=!!(34&e)),n=Yh(n,e,TE,i),i=32,t&&(i|=2),jt(n,e=16769217&e|i),n}function Uf(n){var e=n.A,t=0|e[me];return On(n,t)?Ff(n,e,t)?Nf(n,e,!0):new n.constructor(Ko(e,t,!1)):n}function Zo(n){if(n.h!==Fr)return!1;var e=n.A;return ac(e=Ko(e,0|e[me]),2048),n.A=e,n.h=void 0,n.m=void 0,!0}function zr(n){if(!Zo(n)&&On(n,0|n.A[me]))throw Error()}function Ks(n,e){e===void 0&&(e=0|n[me]),32&e&&!(4096&e)&&jt(n,4096|e)}function Ff(n,e,t){return!!(2&t)||!(!(32&t)||4096&t)&&(jt(e,2|t),n.h=Fr,!0)}var d1=Zt(0),Hs={};function kt(n,e,t,i){if((e=Ts(n.A,e,void 0,i))!==null||t&&n.m!==Fr)return e}function Ts(n,e,t,i){if(e===-1)return null;var s=e+(t?0:-1),r=n.length-1;if(!(r<1+(t?0:-1))){if(s>=r){var o=n[r];if(o!=null&&typeof o=="object"&&o.constructor===Object){t=o[e];var a=!0}else{if(s!==r)return;t=o}}else t=n[s];if(i&&t!=null){if((i=i(t))==null)return i;if(!Object.is(i,t))return a?o[e]=i:n[s]=i,i}return t}}function ze(n,e,t,i){zr(n);var s=n.A;return Gt(s,0|s[me],e,t,i),n}function Gt(n,e,t,i,s){var r=t+(s?0:-1),o=n.length-1;if(o>=1+(s?0:-1)&&r>=o){let a=n[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[t]=i,e}return r<=o?(n[r]=i,e):(i!==void 0&&(t>=(o=(e??(e=0|n[me]))>>14&1023||536870912)?i!=null&&(n[o+(s?0:-1)]={[t]:i}):n[r]=i),e)}function f1(n,e,t,i){var s=n.A;return v1(s,0|s[me],e,n=_1(n,i)===t?t:-1)!==void 0}function Ar(){return eE===void 0?2:4}function Rr(n,e,t,i,s){var r=n.A,o=0|r[me];i=On(n,o)?1:i,s=!!s||i===3,i===2&&Zo(n)&&(o=0|(r=n.A)[me]);var a=(n=Of(r,e))===Ys?7:0|n[me],c=Bf(a,o),l=!(4&c);if(l){4&c&&(n=hi(n),a=0,c=Ws(c,o),o=Gt(r,o,e,n));let h=0,u=0;for(;h<n.length;h++){let d=t(n[h]);d!=null&&(n[u++]=d)}u<h&&(n.length=u),t=-513&c|4,c=t&=-1025,c&=-4097}return c!==a&&(jt(n,c),2&c&&Object.freeze(n)),p1(n,c,r,o,e,i,l,s)}function p1(n,e,t,i,s,r,o,a){var c=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?Gs(e)||((e|=!n.length||o&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&jt(n,e),Object.freeze(n)):(r===2&&Gs(e)&&(n=hi(n),c=0,e=Ws(e,i),i=Gt(t,i,s,n)),Gs(e)||(a||(e|=16),e!==c&&jt(n,e))),2&e||!(4096&e||16&e)||Ks(t,i),n}function Of(n,e,t){return n=Ts(n,e,t),Array.isArray(n)?n:Ys}function Bf(n,e){return 2&e&&(n|=2),1|n}function Gs(n){return!!(2&n)&&!!(4&n)||!!(256&n)}function m1(n){return Gh(n,!0)}function g1(n){n=hi(n);for(let e=0;e<n.length;e++){let t=n[e]=hi(n[e]);Array.isArray(t[1])&&(t[1]=cc(t[1]))}return nc(n)}function uc(n,e,t,i){zr(n),Gt(n=n.A,0|n[me],e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function Zs(n,e,t){if(2&e)throw Error();var i=$o(e),s=Of(n,t,i),r=s===Ys?7:0|s[me],o=Bf(r,e);return(2&o||Gs(o)||16&o)&&(o===r||Gs(o)||jt(s,o),s=hi(s),r=0,o=Ws(o,e),Gt(n,e,t,s,i)),(o&=-13)!==r&&jt(s,o),s}function _1(n,e){return zf(kf(n=n.A),n,void 0,e)}function kf(n){if(qo)return n[qa]??(n[qa]=new Map);if(qa in n)return n[qa];var e=new Map;return Object.defineProperty(n,qa,{value:e}),e}function y1(n,e,t,i,s){var r=kf(n),o=zf(r,n,e,t,s);return o!==i&&(o&&(e=Gt(n,e,o,void 0,s)),r.set(t,i)),e}function zf(n,e,t,i,s){var r=n.get(i);if(r!=null)return r;r=0;for(let o=0;o<i.length;o++){let a=i[o];Ts(e,a,s)!=null&&(r!==0&&(t=Gt(e,t,r,void 0,s)),r=a)}return n.set(i,r),r}function Hf(n,e,t){var i=0|n[me],s=$o(i),r=Ts(n,t,s);if(r!=null&&r[Oo]===Bo){if(!On(r))return Zo(r),r.A;var o=r.A}else Array.isArray(r)&&(o=r);if(o){let a=0|o[me];2&a&&(o=Ko(o,a))}return(o=Lr(o,e))!==r&&Gt(n,i,t,o,s),o}function v1(n,e,t,i,s){var r=!1;if((i=Ts(n,i,s,o=>{var a=Df(o,t,!1,e);return r=a!==o&&a!=null,a}))!=null)return r&&!On(i)&&Ks(n,e),i}function dt(n,e,t,i){var s=n.A,r=0|s[me];if((e=v1(s,r,e,t,i))==null)return e;if(!On(n,r=0|s[me])){let o=Uf(e);o!==e&&(Zo(n)&&(r=0|(s=n.A)[me]),Ks(s,r=Gt(s,r,t,e=o,i)))}return e}function x1(n,e,t,i,s,r,o,a){var c=On(n,t);r=c?1:r,o=!!o||r===3,c=a&&!c,(r===2||c)&&Zo(n)&&(t=0|(e=n.A)[me]);var l=(n=Of(e,s))===Ys?7:0|n[me],h=Bf(l,t);if(a=!(4&h)){var u=n,d=t;let f=!!(2&h);f&&(d|=2);let g=!f,_=!0,m=0,p=0;for(;m<u.length;m++){let E=Df(u[m],i,!1,d);if(E instanceof i){if(!f){let b=On(E);g&&(g=!b),_&&(_=b)}u[p++]=E}}p<m&&(u.length=p),h|=4,h=_?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(jt(n,h),2&h&&Object.freeze(n)),c&&!(8&h||!n.length&&(r===1||r===4&&(2&h||!(16&h)&&32&t)))){for(Gs(h)&&(n=hi(n),h=Ws(h,t),t=Gt(e,t,s,n)),i=n,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=Uf(u))&&(i[l]=h);c|=8,jt(n,h=c=i.length?4096|c:-4097&c)}return p1(n,h,e,t,s,r,a,o)}function ws(n,e,t){var i=n.A;return x1(n,i,0|i[me],e,t,Ar(),!1,!0)}function M1(n){return n==null&&(n=void 0),n}function Ie(n,e,t,i,s){return ze(n,t,i=M1(i),s),i&&!On(i)&&Ks(n.A),n}function Gi(n,e,t,i){e:{var s=i=M1(i);zr(n);let r=n.A,o=0|r[me];if(s==null){let a=kf(r);if(zf(a,r,o,t)!==e)break e;a.set(t,0)}else o=y1(r,o,t,e);Gt(r,o,e,s)}return i&&!On(i)&&Ks(n.A),n}function af(n,e,t){zr(n);var i=n.A,s=0|i[me];if(t==null)return Gt(i,s,e),n;var r=t===Ys?7:0|t[me],o=r,a=Gs(r),c=a||Object.isFrozen(t),l=!0,h=!0;for(let d=0;d<t.length;d++){var u=t[d];a||(u=On(u),l&&(l=!u),h&&(h=u))}return a||(r=l?13:5,r=h?-4097&r:4096|r),c&&r===o||(t=hi(t),o=0,r=Ws(r,s)),r!==o&&jt(t,r),s=Gt(i,s,e,t),2&r||!(4096&r||16&r)||Ks(i,s),n}function Ws(n,e){return-273&(2&e?2|n:-3&n)}function sc(n,e,t,i){var s=i;zr(n),n=x1(n,i=n.A,0|i[me],t,e,2,!0),s=s??new t,n.push(s),e=t=n===Ys?7:0|n[me],(s=On(s))?(t&=-9,n.length===1&&(t&=-4097)):t|=4096,t!==e&&jt(n,t),s||Ks(i)}function li(n,e,t){return kr(kt(n,e,t))}function Vt(n,e){return kt(n,e,void 0,Ti)??0}function L0(n,e,t){return dt(n,e,t=_1(n,op)===t?t:-1,void 0)}function cf(n,e){uc(n,3,e==null?e:Th(e),!1)}function Wi(n,e,t){if(t!=null){if(typeof t!="number"||!hc(t))throw tc("int32");t|=0}ze(n,e,t)}function qd(n,e,t){return ze(n,e,t==null?t:t1(t))}function _h(n,e,t){return ze(n,e,t==null?t:(function(i){if(!Yo(i))throw tc("uint64");switch(typeof i){case"string":var s=qs(Number(i));return Vi(s)&&s>=0?i=Zt(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Or()?Zt(rf(64,BigInt(i))):Zt(i1(i))),i;case"bigint":return Zt(rf(64,i));default:return Vi(i)?i=Zt(s1(i)):((i=qs(i))>=0&&Vi(i)?i=String(i):(Br(i),i=ko(ot,_t)),i=Zt(i)),i}})(t))}function Ce(n,e,t){ze(n,e,t==null?t:Q_(t))}function Po(n,e,t){uc(n,e,t==null?t:Q_(t),0)}function jn(n,e,t){uc(n,e,Ms(t),"")}function Ch(n,e,t){{zr(n);let o=n.A,a=0|o[me];if(t==null)Gt(o,a,e);else{var i=n=t===Ys?7:0|t[me],s=Gs(n),r=s||Object.isFrozen(t);for(s||(n=0),r||(t=hi(t),i=0,n=Ws(n,a),r=!1),n|=5,n|=(4&n?512&n?512:1024&n?1024:0:void 0)??1024,s=0;s<t.length;s++){let c=t[s],l=l1(c);Object.is(c,l)||(r&&(t=hi(t),i=0,n=Ws(n,a),r=!1),t[s]=l)}n!==i&&(r&&(t=hi(t),n=Ws(n,a)),jt(t,n)),Gt(o,a,e,t)}}}function Kh(n,e,t){zr(n),Rr(n,e,pn,2,!0).push(l1(t))}var Io=class{constructor(n,e,t){if(this.buffer=n,t&&!e)throw Error();this.g=e}};function Zh(n,e){if(typeof n=="string")return new Io(G_(n),e);if(Array.isArray(n))return new Io(new Uint8Array(n),e);if(n.constructor===Uint8Array)return new Io(n,!1);if(n.constructor===ArrayBuffer)return n=new Uint8Array(n),new Io(n,!1);if(n.constructor===Hi)return e=Rf(n)||new Uint8Array(0),new Io(e,!0,n);if(n instanceof Uint8Array)return n=n.constructor===Uint8Array?n:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),new Io(n,!1);throw Error()}function Vf(n,e){var t=0,i=0,s=0,r=n.h,o=n.g;do{var a=r[o++];t|=(127&a)<<s,s+=7}while(s<32&&128&a);if(s>32)for(i|=(127&a)>>4,s=3;s<32&&128&a;s+=7)i|=(127&(a=r[o++]))<<s;if(Pr(n,o),!(128&a))return e(t>>>0,i>>>0);throw Error()}function Gf(n){for(var e=0,t=n.g,i=t+10,s=n.h;t<i;){let r=s[t++];if(e|=r,!(128&r))return Pr(n,t),!!(127&e)}throw Error()}function As(n){var e=n.h,t=n.g,i=e[t++],s=127&i;if(128&i&&(s|=(127&(i=e[t++]))<<7,128&i&&(s|=(127&(i=e[t++]))<<14,128&i&&(s|=(127&(i=e[t++]))<<21,128&i&&(s|=(i=e[t++])<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw Error();return Pr(n,t),s}function Xi(n){return As(n)>>>0}function Ih(n){return Vf(n,J_)}function lf(n){var e=n.h,t=n.g,i=e[t],s=e[t+1],r=e[t+2];return e=e[t+3],Pr(n,n.g+4),(i|s<<8|r<<16|e<<24)>>>0}function Lh(n){var e=lf(n);n=2*(e>>31)+1;var t=e>>>23&255;return e&=8388607,t==255?e?NaN:n*(1/0):t==0?1401298464324817e-60*n*e:n*Math.pow(2,t-150)*(e+8388608)}function wE(n){return As(n)}function Pr(n,e){if(n.g=e,e>n.j)throw Error()}function S1(n,e){if(e<0)throw Error();var t=n.g;if((e=t+e)>n.j)throw Error();return n.g=e,t}function b1(n,e){if(e==0)return Ur();var t=S1(n,e);return n.fa&&n.o?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?new Uint8Array(0):aE?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?Ur():new Hi(t,Uo)}var AE=class{constructor(n,e,t,i){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(n,e,t,i)}init(n,e,t,{fa:i=!1,ma:s=!1}={}){this.fa=i,this.ma=s,n&&(n=Zh(n,this.ma),this.h=n.buffer,this.o=n.g,this.m=e||0,this.j=t!==void 0?this.m+t:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},P0=[],zo=0;function E1(n,e,t,i){if(Ph.length){let s=Ph.pop();return s.v(i),s.g.init(n,e,t,i),s}return new RE(n,e,t,i)}function T1(n){n.g.clear(),n.j=-1,n.h=-1,Ph.length<100&&Ph.push(n)}function w1(n){var e=n.g;if(e.g==e.j)return!1;n.m=n.g.g;var t=Xi(n.g);if(e=t>>>3,!((t&=7)>=0&&t<=5)||e<1)throw Error();return n.j=e,n.h=t,!0}function yh(n){try{switch(n.h){case 0:n.h!=0?yh(n):Gf(n.g);break;case 1:var e=n.g;Pr(e,e.g+8);break;case 2:if(n.h!=2)yh(n);else{var t=Xi(n.g),i=n.g;Pr(i,i.g+t)}break;case 5:var s=n.g;Pr(s,s.g+4);break;case 3:A1();let r=n.j;try{for(;;){if(!w1(n))throw Error();if(n.h==4){if(n.j!=r)throw Error();break}yh(n)}}catch(o){throw o instanceof RangeError?new SyntaxError:o}finally{zo>0&&zo--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function A1(){if(zo>=100)throw new SyntaxError;zo++}function dc(n,e,t){var i=n.g.j,s=Xi(n.g),r=(s=n.g.g+s)-i;if(r<=0&&(n.g.j=s,t(e,n,void 0,void 0,void 0),r=s-n.g.g),r)throw Error();return n.g.g=s,n.g.j=i,e}function Wf(n){var e=Xi(n.g),t=S1(n=n.g,e);if(n=n.h,Hb){var i,s=n;(i=Wd)||(i=Wd=new TextDecoder("utf-8",{fatal:!0})),e=t+e,s=t===0&&e===s.length?s:s.subarray(t,e);try{var r=i.decode(s)}catch(a){if(hh===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),hh=!0}catch{hh=!1}}throw!hh&&(Wd=void 0),a}}else{e=(r=t)+e,t=[];let a,c=null;for(;r<e;){var o=n[r++];o<128?t.push(o):o<224?r>=e?Tr():(a=n[r++],o<194||(192&a)!=128?(r--,Tr()):t.push((31&o)<<6|63&a)):o<240?r>=e-1?Tr():(a=n[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=n[r++]))!=128?(r--,Tr()):t.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=e-2?Tr():(a=n[r++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,Tr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,t.push(55296+(o>>10&1023),56320+(1023&o)))):Tr(),t.length>=8192&&(c=g0(c,t),t.length=0)}r=g0(c,t)}return r}function Xf(n){var e=Xi(n.g);return b1(n.g,e)}function fc(n,e,t){var i=Xi(n.g);for(i=n.g.g+i;n.g.g<i;)t.push(e(n.g))}var RE=class{constructor(n,e,t,i){if(P0.length){let s=P0.pop();s.init(n,e,t,i),n=s}else n=new AE(n,e,t,i);this.g=n,this.m=this.g.g,this.h=this.j=-1,this.v(i)}v({ra:n=!1}={}){this.ra=n}},Ph=[];function CE(n){return new Dh(4294967295&n,Math.floor(n/4294967296))}function D0(n){return n?/^\d+$/.test(n)?(lc(n),new Dh(ot,_t)):null:IE||(IE=new Dh(0,0))}var IE,Dh=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};function LE(n){return new Nh(4294967295&n,Math.floor(n/4294967296))}function R1(n){return n?/^-?\d+$/.test(n)?(lc(n),new Nh(ot,_t)):null:PE||(PE=new Nh(0,0))}var PE,N0,U0,F0,$d,O0,$a,uh,Nh=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};function C1(n,e,t){return typeof BigInt64Array<"u"?($a||($a=new BigInt64Array(1),uh=new Uint32Array($a.buffer),$a[0]=BigInt(1),O0=uh[0]===1),$a[0]=n,new e(uh[n=O0?0:1],uh[1-n])):($d||(N0=BigInt(Number.MIN_SAFE_INTEGER),U0=BigInt(Number.MAX_SAFE_INTEGER),F0=BigInt(4294967295),$d=BigInt(32)),n>=N0&&n<=U0?t(Number(n)):(n=BigInt.asUintN(64,n),new e(Number(n&F0),Number(n>>$d))))}function bs(n,e,t){for(;t>0||e>127;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function jo(n,e){for(;e>127;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function pc(n,e){if(e>=0)jo(n,e);else{for(let t=0;t<9;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function DE(n,e){lc(e),(function(t){var i=_t>>31;t(ot<<1^i,(_t<<1|ot>>>31)^i)})((t,i)=>{bs(n,t>>>0,i>>>0)})}function rc(n,e){n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}var NE=class{constructor(){this.g=[]}length(){return this.g.length}end(){var n=this.g;return this.g=[],n}};function Ho(n,e){e.length!==0&&(n.j.push(e),n.h+=e.length)}function wn(n,e,t){jo(n.g,8*e+t)}function qf(n,e){return wn(n,e,2),e=n.g.end(),Ho(n,e),e.push(n.h),e}function $f(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;t>127;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function I1(n,e,t){if(t!=null)switch(wn(n,e,0),typeof t){case"number":n=n.g,Br(t),bs(n,ot,_t);break;case"bigint":t=C1(t,Nh,LE),bs(n.g,t.h,t.g);break;default:t=R1(t),bs(n.g,t.h,t.g)}}function mc(n,e,t){wn(n,e,2),jo(n.g,t.length),Ho(n,n.g.end()),Ho(n,t)}function Uh(n,e,t,i){t!=null&&(e=qf(n,e),i(t,n),$f(n,e))}var UE=class{constructor(){this.j=[],this.h=0,this.g=new NE}};function L1(n){typeof n=="string"&&R1(n)}function ui(){var n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var Yf=ui(),P1=ui(),Kf=ui(),jh=ui(),Zf=ui(),Jh=ui(),FE=ui(),OE=ui(),Qh=ui(),BE=ui(),eu=ui(),jf=ui();function $i(n,e,t){var i=n.A;Zn&&Zn in i&&(i=i[Zn])&&delete i[e.g],e.h?e.o(n,e.h,e.g,t,e.j):e.o(n,e.g,t,e.j)}var he=class{constructor(n,e){this.A=u1(n,e,void 0,2048)}toJSON(){return h1(this)}o(){var n=bT,e=this.A,t=n.g,i=Zn;if(qo&&i&&e[i]?.[t]!=null&&Fo(jb,3),e=n.g,S0&&Zn&&S0===void 0&&(i=(t=this.A)[Zn])&&(i=i.ka))try{i(t,e,SE)}catch(s){k_(s)}return n.h?n.m(this,n.h,n.g,n.j):n.m(this,n.g,n.defaultValue,n.j)}clone(){var n=this.A,e=0|n[me];return Ff(this,n,e)?Nf(this,n,!0):new this.constructor(Ko(n,e,!1))}};he.prototype[Oo]=Bo,he.prototype.toString=function(){return this.A.toString()};var Jo=class{constructor(n,e,t){this.g=n,this.h=e,n=Yf,this.j=!!n&&t===n||!1}};function tu(n,e){return new Jo(n,e,Yf)}function D1(n,e,t,i,s){Uh(n,t,O1(e,i),s)}var N1,U1,kE=tu(function(n,e,t,i,s){return n.h===2&&(dc(n,Hf(e,i,t),s),!0)},D1),zE=tu(function(n,e,t,i,s){return n.h===2&&(dc(n,Hf(e,i,t),s),!0)},D1),nu=Symbol(),iu=Symbol(),hf=Symbol(),B0=Symbol(),k0=Symbol();function Hr(n,e,t,i){var s=i[n];if(s)return s;(s={}).Ea=i,s.ca=(function(u){switch(typeof u){case"boolean":return xE||(xE=[0,void 0,!0]);case"number":return u>0?void 0:u===0?ME||(ME=[0,void 0]):[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1],o=1;r&&r.constructor===Object&&(s.ia=r,typeof(r=i[++o])=="function"&&(s.wa=!0,N1??(N1=r),U1??(U1=i[o+1]),r=i[o+=2]));for(var a={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)a[r[c]]=r;r=i[++o]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++o]);var l=void 0;if(r instanceof Jo?u=r:(u=kE,o--),u?.j){r=i[++o],l=i;var h=o;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);c<h;c++){let d=a[c];l?t(s,c,u,l,d):e(s,c,u,d)}}return i[n]=s}function F1(n){return Array.isArray(n)?n[0]instanceof Jo?n:[zE,n]:[n,void 0]}function O1(n,e){return n instanceof he?n.A:Array.isArray(n)?Lr(n,e):void 0}function Jf(n,e,t,i){var s=t.g;n[e]=i?(r,o,a)=>s(r,o,a,i):s}function Qf(n,e,t,i,s){var r,o,a=t.g;n[e]=(c,l,h)=>a(c,l,h,o||(o=Hr(iu,Jf,Qf,i).ca),r||(r=ep(i)),s)}function ep(n){var e=n[hf];if(e!=null)return e;var t=Hr(iu,Jf,Qf,n);return e=t.wa?(i,s)=>N1(i,s,t):(i,s)=>{e:{A1();try{for(;w1(s)&&s.h!=4;){let d=s.j,f=t[d];if(f==null){let g=t.ia;if(g){let _=g[d];if(_){let m=VE(_);m!=null&&(f=t[d]=m)}}}if(f==null||!f(s,i,d)){var r=s;let g=r.m;if(yh(r),r.ra)var o=void 0;else{let _=r.g.g-g;r.g.g=g,o=b1(r.g,_)}r=void 0;var a=i,c=d,l=o;l&&((r=a[Zn]??(a[Zn]=new of))[c]??(r[c]=[])).push(l)}}let u=$h(i);u&&(u.ka=t.Ea[k0]);var h=!0;break e}catch(u){throw u instanceof RangeError?new SyntaxError:u}finally{zo>0&&zo--}h=void 0}return h},n[hf]=e,n[k0]=HE.bind(n),e}function HE(n,e,t,i){var s=this[iu],r=this[hf],o=Lr(void 0,s.ca),a=$h(n);if(a){var c=!1,l=s.ia;if(l){if(s=(h,u,d)=>{if(d.length!==0)if(l[u])for(let f of d){h=E1(f);try{c=!0,r(o,h)}finally{T1(h)}}else i?.(n,u,d)},e==null)Rh(a,s);else if(a!=null){let h=a[e];h&&s(a,e,h)}if(c){let h=0|n[me];if(2&h&&2048&h&&!t?.cb)throw Error();let u=$o(h),d=(f,g)=>{if(Ts(n,f,u)!=null){if(t?.lb===1)return;throw Error()}g!=null&&(h=Gt(n,h,f,g,u)),delete a[f]};e==null?Y_(o,0|o[me],(f,g)=>{d(f,g)}):d(e,Ts(o,e,u))}}}}function VE(n){var e=(n=F1(n))[0].g;if(n=n[1]){let t=ep(n),i=Hr(iu,Jf,Qf,n).ca;return(s,r,o)=>e(s,r,o,i,t)}return e}function su(n,e,t){n[e]=t.h}function ru(n,e,t,i){var s,r,o=t.h;n[e]=(a,c,l)=>o(a,c,l,r||(r=Hr(nu,su,ru,i).ca),s||(s=B1(i)))}function B1(n){var e=n[B0];if(!e){let t=Hr(nu,su,ru,n);e=(i,s)=>k1(i,s,t),n[B0]=e}return e}function k1(n,e,t){Y_(n,0|n[me],(i,s)=>{if(s!=null){var r=(function(o,a){var c=o[a];if(c)return c;if((c=o.ia)&&(c=c[a])){var l=(c=F1(c))[0].h;if(c=c[1]){let h=B1(c),u=Hr(nu,su,ru,c).ca;c=o.wa?U1(u,h):(d,f,g)=>l(d,f,g,u,h)}else c=l;return o[a]=c}})(t,i);r?r(e,s,i):i<500||Fo(tf,3)}}),(n=$h(n))&&Rh(n,(i,s,r)=>{for(Ho(e,e.g.end()),i=0;i<r.length;i++)Ho(e,Rf(r[i])||new Uint8Array(0))})}var GE=Zt(0);function Rs(n,e,t){if(Array.isArray(e)){var i=0|e[me];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let o=n(e[s]);o!=null&&(e[r++]=o)}return r<s&&(e.length=r),n=1|i,t&&(n=-1537&n|4),n!==i&&jt(e,n),t&&2&n&&Object.freeze(e),e}}var z1=(n,e)=>{var t=new UE;k1(n.A,t,Hr(nu,su,ru,e)),Ho(t,t.g.end()),n=new Uint8Array(t.h);var i=(e=t.j).length,s=0;for(let r=0;r<i;r++){let o=e[r];n.set(o,s),s+=o.length}return t.j=[n],n};function Xt(n,e,t){return new Jo(n,e,t)}function Cs(n,e,t){return new Jo(n,e,t)}function sn(n,e,t){Gt(n,0|n[me],e,t,$o(0|n[me]))}var WE=tu(function(n,e,t,i,s){if(n.h!==2)return!1;if(n=hi(n=dc(n,Lr([void 0,void 0],i),s)),s=$o(i=0|e[me]),2&i)throw Error();var r=Ts(e,t,s);if(r instanceof Es)2&r.M?((r=r.ea()).push(n),Gt(e,i,t,r,s)):r.gb(n);else if(Array.isArray(r)){var o=0|r[me];8192&o||jt(r,o|=8192),2&o&&Gt(e,i,t,r=g1(r),s),r.push(n)}else Gt(e,i,t,nc([n]),s);return!0},function(n,e,t,i,s){if(e instanceof Es)e.forEach((r,o)=>{Uh(n,t,Lr([o,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let o=e[r];Array.isArray(o)&&Uh(n,t,Lr(o,i),s)}nc(e)}});function H1(n,e,t){(e=Ti(e))!=null&&(wn(n,t,5),n=n.g,Cf(e),rc(n,ot))}function tp(n,e,t){(e=Pf(e))!=null&&(L1(e),I1(n,t,e))}function V1(n,e,t){(e=kr(e))!=null&&e!=null&&(wn(n,t,0),pc(n.g,e))}function G1(n,e,t){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(wn(n,t,0),n.g.g.push(e?1:0))}function W1(n,e,t){(e=pn(e))!=null&&mc(n,t,B_(e))}function X1(n,e,t,i,s){Uh(n,t,O1(e,i),s)}function np(n,e,t){(e=c1(e))!=null&&mc(n,t,Zh(e,!0).buffer)}function q1(n,e,t){(e=e1(e))!=null&&e!=null&&(wn(n,t,0),jo(n.g,e))}function $1(n,e,t){(e=kr(e))!=null&&(e=parseInt(e,10),wn(n,t,0),pc(n.g,e))}function Y1(n,e,t){return(n.h===5||n.h===2)&&(e=Zs(e,0|e[me],t),n.h==2?fc(n,Lh,e):e.push(Lh(n.g)),!0)}function K1(n,e,t){return n.h===0&&(sn(e,t,Ih(n.g)),!0)}function Z1(n,e,t){return(n.h===0||n.h===2)&&(e=Zs(e,0|e[me],t),n.h==2?fc(n,As,e):e.push(As(n.g)),!0)}function j1(n,e,t){return n.h===2&&(sn(e,t,(n=Xf(n))===Ur()?void 0:n),!0)}var z0=Xt(function(n,e,t){if(n.h!==1)return!1;var i=n.g;n=lf(i);var s=lf(i);i=2*(s>>31)+1;var r=s>>>20&2047;return n=4294967296*(1048575&s)+n,sn(e,t,r==2047?n?NaN:i*(1/0):r==0?5e-324*i*n:i*Math.pow(2,r-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=Ti(e))!=null&&(wn(n,t,1),n=n.g,(t=Z_||(Z_=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),ot=t.getUint32(0,!0),_t=t.getUint32(4,!0),rc(n,ot),rc(n,_t))},BE),zt=Xt(function(n,e,t){return n.h===5&&(sn(e,t,Lh(n.g)),!0)},H1,Qh),XE=Cs(Y1,function(n,e,t){if((e=Rs(Ti,e,!0))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&(wn(i,s,5),i=i.g,Cf(r),rc(i,ot))}},Qh),ip=Cs(Y1,function(n,e,t){if((e=Rs(Ti,e,!0))!=null&&e.length){wn(n,t,2),jo(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,Cf(e[i]),rc(t,ot)}},Qh),J1=Xt(function(n,e,t){return n.h===5&&(sn(e,t,(n=Lh(n.g))===0?void 0:n),!0)},H1,Qh),Ya=Xt(function(n,e,t){return K1(n,e,t)},tp,Jh),Rt=Xt(function(n,e,t){return K1(n,e,t)},tp,Jh),qE=Cs(function(n,e,t){return n.h!==0&&n.h!==2?n=!1:(e=Zs(e,0|e[me],t),n.h==2?fc(n,Ih,e):e.push(Ih(n.g)),n=!0),n},function(n,e,t){if((e=Rs(Pf,e,!1))!=null)for(let i=0;i<e.length;i++)I1(n,t,e[i])},Jh),vh=Xt(function(n,e,t){return n.h!==0?e=!1:(sn(e,t,(n=Ih(n.g))===GE?void 0:n),e=!0),e},tp,Jh),Fh=Xt(function(n,e,t){return n.h!==0?n=!1:(sn(e,t,Vf(n.g,cE)),n=!0),n},function(n,e,t){if(e=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(rf(64,i));if(Yo(i)){if(s==="string")return s=qs(Number(i)),Vi(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=i1(i)),i;if(s==="number")return s1(i)}})(e),e!=null&&(typeof e=="string"&&D0(e),e!=null))switch(wn(n,t,0),typeof e){case"number":n=n.g,Br(e),bs(n,ot,_t);break;case"bigint":t=C1(e,Dh,CE),bs(n.g,t.h,t.g);break;default:t=D0(e),bs(n.g,t.h,t.g)}},FE),st=Xt(function(n,e,t){return n.h===0&&(sn(e,t,As(n.g)),!0)},V1,jh),H0=Cs(Z1,function(n,e,t){if((e=Rs(kr,e,!0))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&(wn(i,s,0),pc(i.g,r))}},jh),Qo=Cs(Z1,function(n,e,t){if((e=Rs(kr,e,!0))!=null&&e.length){t=qf(n,t);for(let i=0;i<e.length;i++)pc(n.g,e[i]);$f(n,t)}},jh),Cr=Xt(function(n,e,t){return n.h===0&&(sn(e,t,(n=As(n.g))===0?void 0:n),!0)},V1,jh),Xe=Xt(function(n,e,t){return n.h===0&&(sn(e,t,Gf(n.g)),!0)},G1,P1),Xs=Xt(function(n,e,t){return n.h===0&&(sn(e,t,(n=Gf(n.g))===!1?void 0:n),!0)},G1,P1),fn=Cs(function(n,e,t){return n.h===2&&(n=Wf(n),Zs(e,0|e[me],t).push(n),!0)},function(n,e,t){if((e=Rs(pn,e,!0))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&mc(i,s,B_(r))}},Kf),vs=Xt(function(n,e,t){return n.h===2&&(sn(e,t,(n=Wf(n))===""?void 0:n),!0)},W1,Kf),ne=Xt(function(n,e,t){return n.h===2&&(sn(e,t,Wf(n)),!0)},W1,Kf),wt=(function(n,e,t=Yf){return new Jo(n,e,t)})(function(n,e,t,i,s){return n.h===2&&(i=Lr(void 0,i),Zs(e,0|e[me],t).push(i),dc(n,i,s),!0)},function(n,e,t,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)X1(n,e[r],t,i,s);1&(n=0|e[me])||jt(e,1|n)}}),nt=tu(function(n,e,t,i,s,r){if(n.h!==2)return!1;var o=0|e[me];return y1(e,o,r,t,$o(o)),dc(n,e=Hf(e,i,t),s),!0},X1),Do=Xt(function(n,e,t){return n.h===2&&(sn(e,t,Xf(n)),!0)},np,eu),Q1=Cs(function(n,e,t){return n.h===2&&(n=Xf(n),Zs(e,0|e[me],t).push(n),!0)},function(n,e,t){if((e=Rs(c1,e,!1))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&mc(i,s,Zh(r,!0).buffer)}},eu),ey=Xt(function(n,e,t){return n.h===0&&(sn(e,t,Xi(n.g)),!0)},q1,Zf),$E=Cs(function(n,e,t){return(n.h===0||n.h===2)&&(e=Zs(e,0|e[me],t),n.h==2?fc(n,Xi,e):e.push(Xi(n.g)),!0)},function(n,e,t){if((e=Rs(e1,e,!0))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&(wn(i,s,0),jo(i.g,r))}},Zf),YE=Xt(function(n,e,t){return n.h===0&&(sn(e,t,(n=Xi(n.g))===0?void 0:n),!0)},q1,Zf),ye=Xt(function(n,e,t){return n.h===0&&(sn(e,t,As(n.g)),!0)},$1,jf),xh=Xt(function(n,e,t){return n.h===0&&(sn(e,t,(n=As(n.g))===0?void 0:n),!0)},$1,jf),KE=Xt(function(n,e,t){return n.h!==0?n=!1:(sn(e,t,(function(i){return Vf(i,(s,r)=>{var o=-(1&s);return J_(s=(s>>>1|r<<31)^o,r>>>1^o)})})(n.g)),n=!0),n},function(n,e,t){if((e=Pf(e))!=null&&(L1(e),e!=null))switch(wn(n,t,0),typeof e){case"number":n=n.g,e=(t=e)<0,sf(t=2*Math.abs(t)),t=ot;let i=_t;e&&(t==0?i==0?i=t=4294967295:(i--,t=4294967295):t--),bs(n,ot=t,_t=i);break;case"bigint":n=n.g,e=e<<BigInt(1)^e>>BigInt(63),ot=Number(BigInt.asUintN(32,e)),_t=Number(BigInt.asUintN(32,e>>BigInt(32))),bs(n,ot,_t);break;default:DE(n.g,e)}},OE),uf=class{constructor(e,t){var i=Qn;this.g=e,this.h=t,this.m=dt,this.o=Ie,this.defaultValue=void 0,this.j=i.jb!=null?K_:void 0}register(){Vh(this)}};function Yi(n,e){return new uf(n,e)}function js(n,e){return(t,i)=>{e:{let r={ma:!0};i&&Object.assign(r,i),t=E1(t,void 0,void 0,r);try{let o=new n,a=o.A;ep(e)(a,t);var s=o;break e}catch(o){throw o instanceof RangeError?new SyntaxError:o}finally{T1(t)}s=void 0}return s}}function sp(n){return e=>z1(e,n)}function gc(n){return function(){return z1(this,n)}}var ZE=[0,Do,Q1,Xe,ne],jE=[0,vs,[0,xh,[0,vh,Cr],xh,-1,[0,ye],xh,-1],Xt(j1,np,eu)],Yd,V0=class extends he{constructor(n){super(n)}},G0=[0,vs,Xt(j1,function(n,e,t){if(e!=null){if(e instanceof he){let i=e.mb;return void(i?(e=i(e),e!=null&&mc(n,t,Zh(e,!0).buffer)):Fo(tf,3))}if(Array.isArray(e))return void Fo(tf,3)}np(n,e,t)},eu)],JE=[0,1,[0,12,st,10,Xe],[0,7,[0,st,-1]]],W0=globalThis.trustedTypes,QE=class{constructor(n){this.g=n}toString(){return this.g+""}};function X0(n){var e;return Yd===void 0&&(Yd=(function(){var t=null;if(!W0)return t;try{let i=s=>s;t=W0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return t})()),n=(e=Yd)?e.createScriptURL(n):n,new QE(n)}function dh(n,...e){if(e.length===0)return X0(n[0]);var t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return X0(t)}var ty=[0,st,ye,Xe,-1,Qo,ye,-1,Xe,-1],ny=[0,ye,-1,Xe],rp=class extends he{constructor(n){super(n)}},iy=[0,Xe,ne,Xe,ye,-1,Cs(function(n,e,t){return(n.h===0||n.h===2)&&(e=Zs(e,0|e[me],t),n.h==2?fc(n,wE,e):e.push(As(n.g)),!0)},function(n,e,t){if((e=Rs(kr,e,!0))!=null&&e.length){t=qf(n,t);for(let i=0;i<e.length;i++)pc(n.g,e[i]);$f(n,t)}},jf),ne,-1,[0,Xe,-1],ye,Xe,-1,ny],sy=[0,3,Xe,-1,2,[0,[2],st,nt,[0,ey]],[0,ye,Xe,ye,Xe,ye,4,[0,Xe,ne,-1,Xe]],[0,[3,4],ne,-1,nt,[0,st],nt,[0,ye,-1]],[0]],ry=[0,ne,-2],q0=class extends he{constructor(n){super(n)}},oy=[0],eT=class extends he{constructor(n){super(n)}},ay=[0,st,Xe,1,Xe,-4],Qn=class extends he{constructor(n){super(n,2)}},nn={};nn[336783863]=[0,ne,Xe,-1,st,[0,[1,2,3,4,5,6,7,8,9],nt,oy,nt,iy,nt,ry,nt,ay,nt,ty,nt,[0,ne,-2],nt,[0,ne,ye],nt,sy,nt,ny],[0,ne],Xe,[0,[1,3],[2,4],nt,[0,Qo],-1,nt,[0,fn],-1,wt,[0,ne,-1]],ne];var $0=[0,vh,-1,Xs,-3,vh,Qo,vs,Cr,vh,-1,Xs,Cr,Xs,-2,vs];function Pt(n,e){Kh(n,3,e)}function rt(n,e){Kh(n,4,e)}var Bn=class extends he{constructor(n){super(n,500)}v(n){return Ie(this,0,7,n)}},Qa=[-1,{}],Y0=[0,ne,1,Qa],K0=[0,ne,fn,Qa];function di(n,e){sc(n,1,Bn,e)}function Ft(n,e){Kh(n,10,e)}function ft(n,e){Kh(n,15,e)}var ei=class extends he{constructor(n){super(n,500)}v(n){return Ie(this,0,1001,n)}},cy=[-500,wt,[-500,vs,-1,fn,-3,[-2,nn,Xe],wt,G0,Cr,-1,Y0,K0,wt,[0,vs,Xs],vs,$0,Cr,fn,987,fn],4,wt,[-500,ne,-1,[-1,{}],998,ne],wt,[-500,ne,fn,-1,[-2,{},Xe],997,fn,-1],Cr,wt,[-500,ne,fn,Qa,998,fn],fn,Cr,Y0,K0,wt,[0,vs,-1,Qa],fn,-2,$0,vs,-1,Xs,[0,Xs,YE],978,Qa,wt,G0];ei.prototype.g=gc(cy);var tT=js(ei,cy),nT=class extends he{constructor(n){super(n)}},ly=class extends he{constructor(n){super(n)}g(){return ws(this,nT,1)}},hy=[0,wt,[0,st,zt,ne,-1]],ou=js(ly,hy),iT=class extends he{constructor(n){super(n)}},sT=class extends he{constructor(n){super(n)}},Kd=class extends he{constructor(n){super(n)}j(){return dt(this,iT,2)}g(){return ws(this,sT,5)}},uy=js(class extends he{constructor(n){super(n)}},[0,fn,Qo,ip,[0,ye,[0,st,-3],[0,zt,-3],[0,st,-1,[0,wt,[0,st,-2]]],wt,[0,zt,-1,ne,zt]],ne,-1,Rt,wt,[0,st,zt],fn,Rt]),dy=class extends he{constructor(n){super(n)}},No=js(class extends he{constructor(n){super(n)}},[0,wt,[0,zt,-4]]),fy=class extends he{constructor(n){super(n)}},_c=js(class extends he{constructor(n){super(n)}},[0,wt,[0,zt,-4]]),rT=class extends he{constructor(n){super(n)}},oT=[0,st,-1,ip,ye],py=class extends he{constructor(n){super(n)}};py.prototype.g=gc([0,zt,-4,Rt]);var aT=class extends he{constructor(n){super(n)}},cT=js(class extends he{constructor(n){super(n)}},[0,wt,[0,1,st,ne,hy],Rt]),Z0=class extends he{constructor(n){super(n)}},lT=class extends he{constructor(n){super(n)}g(){var n=kt(this,1,void 0,m1);return n??Ur()}},hT=class extends he{constructor(n){super(n)}},op=[1,2],uT=js(class extends he{constructor(n){super(n)}},[0,wt,[0,op,nt,[0,ip],nt,[0,Do],st,ne],Rt]),ap=class extends he{constructor(n){super(n)}},my=[0,ne,st,zt,fn,-1],j0=class extends he{constructor(n){super(n)}},dT=[0,Xe,-1],Oh=class extends he{constructor(n){super(n)}g(){return f1(this,rp,2,Dr)}},Dr=[1,2,3,4,5,6],Bh=class extends he{constructor(n){super(n)}g(){return kt(this,1,void 0,m1)!=null}j(){return pn(kt(this,2))!=null}},Ot=class extends he{constructor(n){super(n)}},gy=[0,Do,ne,[0,st,Rt,-1],[0,Fh,Rt]],Wt=[0,gy,Xe,[0,Dr,nt,ay,nt,iy,nt,ty,nt,oy,nt,ry,nt,sy],ye],fT=sp(Wt),au=class extends he{constructor(n){super(n)}},cp=[0,Wt,zt,-1,st],pT=Yi(502141897,au);nn[502141897]=cp;var mT=js(class extends he{constructor(n){super(n)}},[0,[0,ye,-1,XE,$E],oT]),_y=class extends he{constructor(n){super(n)}},yy=class extends he{constructor(n){super(n)}},df=[0,Wt,zt,[0,Wt],Xe],gT=Yi(508968150,yy);nn[508968150]=[0,Wt,cp,df,zt,[0,[0,gy]]],nn[508968149]=df;var Lo=class extends he{constructor(n){super(n)}j(){return dt(this,ap,2)}g(){ze(this,2)}},vy=[0,Wt,my];nn[478825465]=vy;var _T=class extends he{constructor(n){super(n)}},xy=class extends he{constructor(n){super(n)}},lp=class extends he{constructor(n){super(n)}},hp=class extends he{constructor(n){super(n)}},My=class extends he{constructor(n){super(n)}},J0=[0,Wt,[0,Wt],vy,-1],Sy=[0,Wt,zt,st],up=[0,Wt,zt],by=[0,Wt,Sy,up,zt],yT=Yi(479097054,My);nn[479097054]=[0,Wt,by,J0],nn[463370452]=J0,nn[464864288]=Sy;var vT=Yi(462713202,hp);nn[462713202]=by,nn[474472470]=up;var xT=class extends he{constructor(n){super(n)}},Ey=class extends he{constructor(n){super(n)}},Ty=class extends he{constructor(n){super(n)}},wy=class extends he{constructor(n){super(n)}},dp=[0,Wt,zt,-1,st],ff=[0,Wt,zt,Xe];wy.prototype.g=gc([0,Wt,up,[0,Wt],cp,df,dp,ff]);var Ay=class extends he{constructor(n){super(n)}},MT=Yi(456383383,Ay);nn[456383383]=[0,Wt,my];var Ry=class extends he{constructor(n){super(n)}},ST=Yi(476348187,Ry);nn[476348187]=[0,Wt,dT];var Cy=class extends he{constructor(n){super(n)}},Q0=class extends he{constructor(n){super(n)}},Iy=[0,ye,-1],bT=Yi(458105876,class extends he{constructor(n){super(n)}g(){var n=this.A,e=0|n[me],t=On(this,e);return n=(function(i,s,r,o){var a=Q0;!o&&Zo(i)&&(r=0|(s=i.A)[me]);var c=Ts(s,2);if(i=!1,c==null){if(o)return R0();c=[]}else if(c.constructor===Es){if(!(2&c.M)||o)return c;c=c.ea()}else Array.isArray(c)?i=!!(2&c[me]):c=[];if(o){if(!c.length)return R0();i||(i=!0,cc(c))}else i&&(i=!1,nc(c),c=g1(c));return!i&&32&r&&ac(c,32),r=Gt(s,r,2,o=new Es(c,a,uE,void 0)),i||Ks(s,r),o})(this,n,e,t),!t&&Q0&&(n.Fa=!0),n}});nn[458105876]=[0,Iy,WE,[!0,Rt,[0,ne,-1,fn]],[0,Qo,Xe,ye],Xe];var fp=class extends he{constructor(n){super(n)}},Ly=Yi(458105758,fp);nn[458105758]=[0,Wt,ne,Iy];var ET=class extends he{constructor(n){super(n)}},TT=class extends he{constructor(n){super(n)}},wT=class extends he{constructor(n){super(n)}},AT=sp([0,wt,[0,xh,wt,[0,J1,-1],Xs]]),Zd=class extends he{constructor(n){super(n)}},e_=[0,J1,-1,Xs],RT=class extends he{constructor(n){super(n)}},Py=class extends he{constructor(n){super(n)}},pf=[1,2];Py.prototype.g=gc([0,pf,nt,e_,nt,[0,wt,e_]]);var Dy=class extends he{constructor(n){super(n)}},CT=Yi(443442058,Dy);nn[443442058]=[0,Wt,ne,st,zt,fn,-1,Xe,zt],nn[514774813]=dp;var Ny=class extends he{constructor(n){super(n)}},IT=Yi(516587230,Ny);function mf(n,e){return e=e?e.clone():new ap,n.displayNamesLocale!==void 0?ze(e,1,Ms(n.displayNamesLocale)):n.displayNamesLocale===void 0&&ze(e,1),n.maxResults!==void 0?Wi(e,2,n.maxResults):"maxResults"in n&&ze(e,2),n.scoreThreshold!==void 0?Ce(e,3,n.scoreThreshold):"scoreThreshold"in n&&ze(e,3),n.categoryAllowlist!==void 0?Ch(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&ze(e,4),n.categoryDenylist!==void 0?Ch(e,5,n.categoryDenylist):"categoryDenylist"in n&&ze(e,5),e}function Uy(n){var e=Number(n);return Number.isSafeInteger(e)?e:String(n)}function pp(n,e=-1,t=""){return{categories:n.map(i=>({index:li(i,1)??0??-1,score:Vt(i,2)??0,categoryName:pn(kt(i,3))??""??"",displayName:pn(kt(i,4))??""??""})),headIndex:e,headName:t}}function LT(n){var e={classifications:ws(n,aT,1).map(t=>pp(dt(t,ly,4)?.g()??[],li(t,2)??0,pn(kt(t,3))??""))};return(function(t){return t==null?t:typeof t=="bigint"?(nf(t)?t=Number(t):(t=Ir(64,t),t=nf(t)?Number(t):String(t)),t):Yo(t)?typeof t=="number"?qh(t):wh(t):void 0})(kt(n,2,void 0,Ah))!=null&&(e.timestampMs=Uy(kt(n,2,void 0,Ah)??d1)),e}function Fy(n){var e=Rr(n,3,Ti,Ar()),t=Rr(n,2,kr,Ar()),i=Rr(n,1,pn,Ar()),s=Rr(n,9,pn,Ar()),r={categories:[],keypoints:[]};for(let o=0;o<e.length;o++)r.categories.push({score:e[o],index:t[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((e=dt(n,Kd,4)?.j())&&(r.boundingBox={originX:li(e,1,Hs)??0,originY:li(e,2,Hs)??0,width:li(e,3,Hs)??0,height:li(e,4,Hs)??0,angle:0}),dt(n,Kd,4)?.g().length)for(let o of dt(n,Kd,4).g())r.keypoints.push({x:kt(o,1,Hs,Ti)??0,y:kt(o,2,Hs,Ti)??0,score:kt(o,4,Hs,Ti)??0,label:pn(kt(o,3,Hs))??""});return r}function cu(n){var e=[];for(let t of ws(n,fy,1))e.push({x:Vt(t,1)??0,y:Vt(t,2)??0,z:Vt(t,3)??0,visibility:Vt(t,4)??0});return e}function ec(n){var e=[];for(let t of ws(n,dy,1))e.push({x:Vt(t,1)??0,y:Vt(t,2)??0,z:Vt(t,3)??0,visibility:Vt(t,4)??0});return e}function t_(n){return Array.from(n,e=>e>127?e-256:e)}function n_(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);var t=0,i=0,s=0;for(let r=0;r<n.length;r++)t+=n[r]*e[r],i+=n[r]*n[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*s)}nn[516587230]=[0,Wt,dp,ff,zt],nn[518928384]=ff;var fh,PT=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Oy(n){if(n)return!0;if(fh===void 0)try{await WebAssembly.instantiate(PT),fh=!0}catch{fh=!1}return fh}async function ph(n,e,t){return{wasmLoaderPath:`${e}/${n}_${t=`wasm${t?"_module":""}${await Oy(t)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var wr=class{};function i_(n){return ze(new gf,1,Ss(n))}wr.forVisionTasks=function(n,e=!1){return ph("vision",n??dh``,e)},wr.forTextTasks=function(n,e=!1){return ph("text",n??dh``,e)},wr.forGenAiTasks=function(n,e=!1){return ph("genai",n??dh``,e)},wr.forAudioTasks=function(n,e=!1){return ph("audio",n??dh``,e)},wr.isSimdSupported=function(n=!1){return Oy(n)};var gf=class extends he{constructor(n){super(n)}},DT=class extends he{constructor(n){super(n)}},s_=[0,ye,2,Fh,-2,Rt,wt,[0,ye,Rt]],NT=class extends he{constructor(n){super(n)}},UT=class extends he{constructor(n){super(n)}};function _f(n,e){return ze(n,1,Ss(e))}function yf(n,e){return ze(n,2,Ss(e))}var vf=class extends he{constructor(n){super(n)}},kh=[3,4,5,6,7],FT=class extends he{constructor(n){super(n)}},By=class extends he{constructor(n){super(n)}};By.prototype.g=gc([0,[0,ye,ne,-3,ye],[0,kh,ye,-1,nt,[0,ye,ne,Fh],nt,s_,nt,[0,1,s_],nt,[0,ye],nt,[0,ye,ne,Fh]]]);var OT=class{constructor(){this.g=typeof AbortController<"u"}async send(n,e,t){var i=this.g?new AbortController:void 0,s=i&&n.la>0?setTimeout(()=>{i.abort()},n.la):void 0;try{let r=await fetch(n.url,{method:n.bb,headers:{...n.ab},...n.body&&{body:n.body},...n.withCredentials&&{credentials:"include"},signal:n.la&&i?i.signal:null});r.status===200?e?.(await r.text()):t?.(r.status)}catch(r){r?.name==="AbortError"?t?.(408):t?.(400)}finally{clearTimeout(s)}}},BT=class extends he{constructor(n){super(n,37)}},r_=[-4,{},JE,ye,jE],o_=[0,ne,ye,1,ne,-1,ye,1,ye,1,Rt],a_=[0,ye,ne,-2],c_=[0,ne,ye],l_=[0,ne,ye],h_=[0,Xe,-3],u_=[0,ye,ne,-1,Rt,st,-1,ne,-5,wt,[0,ne,-4],-1,Xe,[0,Xe,-3],ye],kT=class extends he{constructor(n){super(n,19)}},zT=sp([-19,{},[0,ye,1,[0,ne,-6,Rt,st,ne,-1,Rt],1,[0,ne,1,ne,-5],ne,-1,[0,ye,ne,-8],[0,ne,-3],[0,ne,ye,ne,-2],[0,ne,-1,ye,ne,-1,ye,ne,-1,[0,wt,[0,ne,-1],Xe,ne,-5],[0,ye,Xe,st,-2]],Rt,[0,ne,-3,Rt,st,ne,-1],[0,ye,ne,-1],[0,ne,-9],[0,ne,-6,ye,ne,1,ne,Xe,ye,-1,Xe,ne,-2,ye,ne,ye,ne,st,-1],1,[0,ye],1,[0,ne,-4],1,o_,[0,[1,2,3,4,5,6],nt,o_,nt,c_,nt,l_,nt,[0,ye],nt,u_,nt,a_],c_,l_,u_,[0,[0,ye,ne,-1,Rt,st,-1,ne,-4,wt,[0,ne,-4],-1,1,h_],[0,ye,ne,-1,Rt,st,-1,ne,-4,h_]],a_,[0,ne,[0,st,-3,ye],ye,-2,[0,st,-1],Xe],4,[0,ne,ye,ne,-1,Rt,ye,ne,-1,ye,st,-1]],ye,wt,[-37,{},Ya,ne,wt,[0,ne,-1],Do,1,Do,[0,fn,-1,H0,qE,-1],ne,[0,st,ne,-1],Xe,st,Rt,ne,-1,KE,ZE,Ya,Do,ye,H0,Rt,-1,[0,ye,-1],ne,Xe,ne,Qo,ne,-1,z0,1,z0,r_,Xe,[0,ye,[0,zt,st,-2],[0,zt]],[0,ye,Rt]],Ya,Q1,ne,-1,Ya,ye,-1,[0,Xe,-1,ye,Xe],[0,Rt,-1,ne],[0,Ya,Xe,Rt],Rt,1,ey,1,r_]),HT=class{constructor(n){this.h=[],this.m=new OT,this.j=n??"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(n,e){if(this.error)e?.("net-send-failed");else if(this.h.length===0)n?.();else{var t=this.h;this.h=[],t=(function(i){var s=new kT;return af(s=ze(s,2,Ss(1786)),3,i)})(t),t=zT(t),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:t,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{n?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),e?.("net-send-failed",i)})}}},zh=class{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}};function xf(n,e){var t=new By;t=Ie(t,0,1,n.B),t=Ie(t,0,2,e),e=ze(e=new BT,6,Gh(t=t.g(),!1)),(n=n.l).error||n.h.push(e)}function d_(n,e){var t={P:e.P-n.j.P,T:e.T-n.j.T,V:e.V-n.j.V,R:e.R-n.j.R,X:e.X-n.j.X,U:e.U,aa:e.aa},i=yf(_f(new vf,n.C),1);t=ky(n,t),xf(n,i=Gi(i,4,kh,t)),n.j=e}function ky(n,e){var t=new DT;return n=_h(n=qd(n=ze(t,1,Ss(n.D)),7,e.R),5,e.U),n=_h(n,6,e.aa),e.V>0&&_h(n,4,e.X/e.V),e.P!==0&&(t=qd(t=i_(3),2,e.P),sc(n,8,gf,t)),e.T!==0&&(e=qd(t=i_(4),2,e.T),sc(n,8,gf,e)),n}var VT=class{constructor(n,e,t){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new zh,this.j=new zh,this.l=new HT(t),this.C=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}})(n),this.D=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),n=new FT,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),n=ze(n,1,Ss(e)),n=ze(n,2,Ms("")),n=ze(n,3,Ms("")),n=ze(n,4,Ms("1.0.1")),n=ze(n,5,Ms("")),this.B=ze(n,6,Ss(4))}ya(){var n=new UT;n=_h(n=ze(n,1,Ss(this.D)),3,performance.now()-this.u),xf(this,n=Gi(yf(_f(new vf,this.C),0),3,kh,n)),this.m=performance.now()}za(n){var e=this.h.get(n);if(e!==void 0&&(this.h.delete(n),n=performance.now()-e,++this.g.V,this.g.X+=n,this.g.U=Math.max(this.g.U,n),this.o=Math.max(this.o,n),performance.now()>this.m+3e4)){for(let[t,i]of this.h.entries())n=t,i<e&&(this.g.R++,this.h.delete(n));e={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),d_(this,e)}}xa(){var n={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};d_(this,n);var e=new NT;e=Ie(e,0,2,n=ky(this,n)),xf(this,e=Gi(n=yf(_f(new vf,this.C),2),5,kh,e))}close(){var n=this.l;typeof n.close=="function"?n.close():n.flush()}};function mp(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function f_(n){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(n.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let t=self.import;t?await t(n.toString()):await import(n.toString())}}}function gp(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function we(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function zy(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=gp(e);return!n.j||i===n.i.canvas.width&&s===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=s),[i,s]}function p_(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=n.i.stringToNewUTF8(e[s]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(let s of i)n.i._free(s);n.i._free(e)}function ki(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function Vs(n,e,t){var i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(s,r,o)=>{r?(t(i,o),i=[]):i.push(s)}}var Hy=class{constructor(n,e){this.j=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:mp()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){var e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){var t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),we(this,i||"input_audio",r=>{we(this,s=s||"audio_header",o=>{this.i._configureAudio(r,o,n,e??0,t)})})}setAutoResizeCanvas(n){this.j=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}ja(n){ki(this,"__graph_config__",e=>{n(e)}),we(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,s){var r=4*n.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(n,this.g/4),we(this,i,o=>{this.i._addAudioToInputStream(this.g,e,t,o,s)})}addGpuBufferToStream(n,e,t){we(this,e,i=>{var[s,r]=zy(this,n,i);this.i._addBoundTextureToStream(i,s,r,t)})}addBoolToStream(n,e,t){we(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){we(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){we(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){we(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){we(this,e,i=>{this.i._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){we(this,e,i=>{we(this,n,s=>{this.i._addStringToInputStream(s,i,t)})})}addStringRecordToStream(n,e,t){we(this,e,i=>{p_(this,Object.keys(n),s=>{p_(this,Object.values(n),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){we(this,t,s=>{we(this,e,r=>{var o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,r,s,i),this.i._free(o)})})}addEmptyPacketToStream(n,e){we(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){we(this,e,i=>{var s=this.i._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of n)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,t)})}addDoubleVectorToStream(n,e,t){we(this,e,i=>{var s=this.i._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of n)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,t)})}addFloatVectorToStream(n,e,t){we(this,e,i=>{var s=this.i._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of n)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,t)})}addIntVectorToStream(n,e,t){we(this,e,i=>{var s=this.i._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of n)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,t)})}addUintVectorToStream(n,e,t){we(this,e,i=>{var s=this.i._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of n)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,t)})}addStringVectorToStream(n,e,t){we(this,e,i=>{var s=this.i._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of n)we(this,r,o=>{this.i._addStringVectorEntry(s,o)});this.i._addStringVectorToInputStream(s,i,t)})}addBoolToInputSidePacket(n,e){we(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){we(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){we(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){we(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){we(this,e,t=>{this.i._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){we(this,e,t=>{we(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){we(this,t,i=>{we(this,e,s=>{var r=this.i._malloc(n.length);this.i.HEAPU8.set(n,r),this.i._addProtoToInputSidePacket(r,n.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(n,e){we(this,e,t=>{var i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of n)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){we(this,e,t=>{var i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of n)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){we(this,e,t=>{var i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of n)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){we(this,e,t=>{var i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of n)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){we(this,e,t=>{var i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of n)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){we(this,e,t=>{var i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of n)we(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){ki(this,n,e),we(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){Vs(this,n,e),we(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){ki(this,n,e),we(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){Vs(this,n,e),we(this,n,t=>{this.i._attachIntVectorListener(t)})}attachUintListener(n,e){ki(this,n,e),we(this,n,t=>{this.i._attachUintListener(t)})}attachUintVectorListener(n,e){Vs(this,n,e),we(this,n,t=>{this.i._attachUintVectorListener(t)})}attachDoubleListener(n,e){ki(this,n,e),we(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){Vs(this,n,e),we(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){ki(this,n,e),we(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){Vs(this,n,e),we(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){ki(this,n,e),we(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){Vs(this,n,e),we(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){ki(this,n,e),we(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){Vs(this,n,e),we(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ki(this,n,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),we(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};function Vy(n){return class extends n{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function Gy(n){return class extends n{Za(){this.i._registerModelResourcesGraphService()}}}var GT=Vy(Gy(Hy)),WT=class extends GT{};async function XT(n,e,t,i){return n=await(async(s,r,o,a,c)=>{if(r&&await f_(r),!self.ModuleFactory||o&&(await f_(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&s.endsWith(".data")?t.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var o=s.g.Sa();s.m=new VT(s.C(),r,o)})(n,i),await n.v(i),n}async function Mh(n,e,t,i){return XT(n,e,t,i)}function jd(n,e){var t=dt(n.baseOptions,Bh,1)||new Bh;typeof e=="string"?(ze(t,2,Ms(e)),ze(t,1)):e instanceof Uint8Array&&(ze(t,1,Gh(e,!1)),ze(t,2)),Ie(n.baseOptions,0,1,t)}function m_(n){try{let e=n.K.length;if(e===1)throw Error(n.K[0].message);if(e>1)throw Error("Encountered multiple errors: "+n.K.map(t=>t.message).join(", "))}finally{n.K=[]}}function fe(n,e){n.I=Math.max(n.I,e)}function lu(n,e){n.D=new Bn,jn(n.D,2,"PassThroughCalculator"),Pt(n.D,"free_memory"),rt(n.D,"free_memory_unused_out"),Ft(e,"free_memory"),di(e,n.D)}function Vo(n,e){Pt(n.D,e),rt(n.D,e+"_unused_out")}function hu(n){n.g.addBoolToStream(!0,"free_memory",n.I)}var Hh=class{constructor(n){this.g=n,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(n,e=!0){if(e){let t=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(dt(this.baseOptions,Bh,1)?.g()||dt(this.baseOptions,Bh,1)?.j()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){var r=dt(i.baseOptions,Oh,3);if(!r){var o=r=new Oh,a=new q0;Gi(o,4,Dr,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new rp,Gi(s,2,Dr,o)):(s=r,o=new q0,Gi(s,4,Dr,o))),Ie(i.baseOptions,0,3,r)})(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),jd(this,"/model.dat"),this.o(),this.L()});if(t.modelAssetBuffer instanceof Uint8Array)jd(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return(async function(i){for(var s=[],r=0;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let o of s)i.set(o,r),r+=o.length;return i})(t.modelAssetBuffer).then(i=>{jd(this,i),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var n;if(this.g.ja(e=>{n=tT(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.K.push(Error(i))}),this.g.Za(),this.g.setGraph(n,e),this.m?.ya(),this.D=void 0,m_(this)}finishProcessing(n){this.g.finishProcessing(),m_(this),this.m&&n!==void 0&&this.m.za(n)}close(){this.D=void 0,this.m?.xa(),this.m?.close(),this.g.closeGraph()}};function Tn(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Hh.prototype.close=Hh.prototype.close;var Mf=class{constructor(e,t,i,s){this.g=e,this.h=t,this.m=i,this.j=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}};function g_(n,e,t){var i=n.g;if(t=Tn(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.h,t),t}function __(n,e){var t=n.g,i=Tn(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);var s=Tn(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.F),t.vertexAttribPointer(n.F,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);var r=Tn(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.K),t.vertexAttribPointer(n.K,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new Mf(t,i,s,r)}function _p(n,e){if(n.g){if(e!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=e}function yc(n,e,t,i){return _p(n,e),n.h||(n.m(),n.I()),t?(n.l||(n.l=__(n,!0)),t=n.l):(n.D||(n.D=__(n,!1)),t=n.D),e.useProgram(n.h),t.bind(),n.j(),n=i(),t.g.bindVertexArray(null),n}function $s(n,e,t){return _p(n,e),n=Tn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function uu(n,e,t){_p(n,e),n.C||(n.C=Tn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function yp(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var Vr=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var n=this.g;if(this.h=Tn(n.createProgram(),"Failed to create WebGL program"),this.da=g_(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.Z=g_(this,this.B(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.F=n.getAttribLocation(this.h,"aVertex"),this.K=n.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let n=this.g;n.deleteProgram(this.h),n.deleteShader(this.da),n.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}},qT=class extends Vr{B(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}I(){var n=this.g;n.activeTexture(n.TEXTURE1),this.u=$s(this,n,n.LINEAR),n.activeTexture(n.TEXTURE2),this.o=$s(this,n,n.NEAREST)}m(){super.m();var n=this.g;this.O=Tn(n.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.Y=Tn(n.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=Tn(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var n=this.g;n.uniform1i(this.L,0),n.uniform1i(this.O,1),n.uniform1i(this.Y,2)}close(){this.u&&this.g.deleteTexture(this.u),this.o&&this.g.deleteTexture(this.o),super.close()}},$T=class extends Vr{B(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}I(){var n=this.g;n.activeTexture(n.TEXTURE1),this.o=$s(this,n),n.activeTexture(n.TEXTURE2),this.u=$s(this,n)}m(){super.m();var n=this.g;this.L=Tn(n.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.O=Tn(n.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.J=Tn(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var n=this.g;n.uniform1i(this.J,0),n.uniform1i(this.L,1),n.uniform1i(this.O,2)}close(){this.o&&this.g.deleteTexture(this.o),this.u&&this.g.deleteTexture(this.u),super.close()}};function xs(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Sf(n){var e=xs(n,1);if(!e){if(e=xs(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);let i=Go(n);var t=vp(n);if(uu(t,i,Wy(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=t[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function Wy(n){var e=xs(n,2);if(!e){let t=Go(n);e=qy(n);let i=Sf(n),s=Xy(n);t.texImage2D(t.TEXTURE_2D,0,s,n.width,n.height,0,t.RED,t.FLOAT,i),bf(n)}return e}function Go(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Tn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Xy(n){if(n=Go(n),!mh)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))mh=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");mh=n.R16F}return mh}function vp(n){return n.j||(n.j=new Vr),n.j}function qy(n){var e=Go(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=xs(n,2);return t||(t=$s(vp(n),e,n.m?e.LINEAR:e.NEAREST),n.g.push(t),n.o=!0),e.bindTexture(e.TEXTURE_2D,t),t}function bf(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var mh,Kt=class{constructor(n,e,t,i,s,r,o){this.g=n,this.m=e,this.o=t,this.canvas=i,this.j=s,this.width=r,this.height=o,this.o&&--y_===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!xs(this,0)}ua(){return!!xs(this,1)}W(){return!!xs(this,2)}ta(){return(e=xs(n=this,0))||(e=Sf(n),e=new Uint8Array(e.map(t=>Math.round(255*t))),n.g.push(e)),e;var n,e}sa(){return Sf(this)}S(){return Wy(this)}clone(){var n=[];for(let e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=Go(this),s=vp(this);i.activeTexture(i.TEXTURE1),t=$s(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);let r=Xy(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),uu(s,i,t),yc(s,i,!1,()=>{qy(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),bf(this)}),yp(s),bf(this)}}n.push(t)}return new Kt(n,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&Go(this).deleteTexture(xs(this,2)),y_=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.S,Kt.prototype.getAsFloat32Array=Kt.prototype.sa,Kt.prototype.getAsUint8Array=Kt.prototype.ta,Kt.prototype.hasWebGLTexture=Kt.prototype.W,Kt.prototype.hasFloat32Array=Kt.prototype.ua,Kt.prototype.hasUint8Array=Kt.prototype.Ua;var y_=250,YT={color:"white",lineWidth:4,radius:6};function Jd(n){return{...YT,fillColor:(n=n||{}).color,...n}}function ys(n,e){return n instanceof Function?n(e):n}function v_(n,e,t){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),n))}function Ka(n){if(!n.j)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return n.j}function oc(n){if(!n.o)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return n.o}function x_(n,e,t){if(e.W())t(e.S());else{let i=e.ua()?e.sa():e.ta();n.m=n.m??new Vr;let s=oc(n);t((n=new Kt([i],e.m,!1,s.canvas,n.m,e.width,e.height)).S()),n.close()}}function M_(n,e,t,i){var s=(function(a){return a.g||(a.g=new qT),a.g})(n),r=oc(n),o=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t;yc(s,r,!0,()=>{(function(c,l,h,u){var d=c.g;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,l),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,c.u),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),c.J&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[_,m]of f){f=_;let p=m,E=g.next();if(E.done)return!1;let[b,x]=E.value;if(f!==b||p[0]!==x[0]||p[1]!==x[1]||p[2]!==x[2]||p[3]!==x[3])return!1}return!!g.next().done})(c.J,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.o);else{c.J=u;let f=Array(1024).fill(0);u.forEach((g,_)=>{if(g.length!==4)throw Error(`Color at index ${_} is not a four-channel value.`);f[4*_]=g[0],f[4*_+1]=g[1],f[4*_+2]=g[2],f[4*_+3]=g[3]}),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)})}function S_(n,e,t,i){var s=oc(n),r=(function(c){return c.h||(c.h=new $T),c.h})(n),o=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;yc(r,s,!0,()=>{var c=r.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,e),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.o),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.u),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}var Pn=class{constructor(n,e){typeof CanvasRenderingContext2D<"u"&&n instanceof CanvasRenderingContext2D||n instanceof OffscreenCanvasRenderingContext2D?(this.j=n,this.o=e):this.o=n}Ma(n,e){if(n){var t=Ka(this);e=Jd(e),t.save();var i=t.canvas,s=0;for(let r of n)t.fillStyle=ys(e.fillColor,{index:s,from:r}),t.strokeStyle=ys(e.color,{index:s,from:r}),t.lineWidth=ys(e.lineWidth,{index:s,from:r}),(n=new Path2D).arc(r.x*i.width,r.y*i.height,ys(e.radius,{index:s,from:r}),0,2*Math.PI),t.fill(n),t.stroke(n),++s;t.restore()}}La(n,e,t){if(n&&e){var i=Ka(this);t=Jd(t),i.save();var s=i.canvas,r=0;for(let o of e){i.beginPath(),e=n[o.start];let a=n[o.end];e&&a&&(i.strokeStyle=ys(t.color,{index:r,from:e,to:a}),i.lineWidth=ys(t.lineWidth,{index:r,from:e,to:a}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}Ia(n,e){var t=Ka(this);e=Jd(e),t.save(),t.beginPath(),t.lineWidth=ys(e.lineWidth,{}),t.strokeStyle=ys(e.color,{}),t.fillStyle=ys(e.fillColor,{}),t.moveTo(n.originX,n.originY),t.lineTo(n.originX+n.width,n.originY),t.lineTo(n.originX+n.width,n.originY+n.height),t.lineTo(n.originX,n.originY+n.height),t.lineTo(n.originX,n.originY),t.stroke(),t.fill(),t.restore()}Ja(n,e,t=[0,0,0,255]){this.j?(function(i,s,r,o){var a=oc(i);x_(i,s,c=>{M_(i,c,r,o),(c=Ka(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,n,t,e):M_(this,n.S(),t,e)}Ka(n,e,t){this.j?(function(i,s,r,o){var a=oc(i);x_(i,s,c=>{S_(i,c,r,o),(c=Ka(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,n,e,t):S_(this,n.S(),e,t)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function zi(n,e){switch(e){case 0:return n.g.find(t=>t instanceof ImageData);case 1:return n.g.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function $y(n){var e=zi(n,0);if(!e){e=Wo(n);let t=du(n),i=new Uint8Array(n.width*n.height*4);uu(t,e,Sh(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),yp(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(e)}return e}function Sh(n){var e=zi(n,2);if(!e){let t=Wo(n);e=bh(n);let i=zi(n,1)||$y(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),ja(n)}return e}function Wo(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Tn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function du(n){return n.j||(n.j=new Vr),n.j}function bh(n){var e=Wo(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=zi(n,2);return t||(t=$s(du(n),e),n.g.push(t),n.m=!0),e.bindTexture(e.TEXTURE_2D,t),t}function ja(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function b_(n){var e=Wo(n);return yc(du(n),e,!0,()=>(function(t,i){var s=t.canvas;if(s.width===t.width&&s.height===t.height)return i();var r=s.width,o=s.height;return s.width=t.width,s.height=t.height,t=i(),s.width=r,s.height=o,t})(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}Pn.prototype.close=Pn.prototype.close,Pn.prototype.drawConfidenceMask=Pn.prototype.Ka,Pn.prototype.drawCategoryMask=Pn.prototype.Ja,Pn.prototype.drawBoundingBox=Pn.prototype.Ia,Pn.prototype.drawConnectors=Pn.prototype.La,Pn.prototype.drawLandmarks=Pn.prototype.Ma,Pn.lerp=function(n,e,t,i,s){return v_(i*(1-(n-e)/(t-e))+s*(1-(t-n)/(t-e)),i,s)},Pn.clamp=v_;var dn=class{constructor(n,e,t,i,s,r,o){this.g=n,this.o=e,this.m=t,this.canvas=i,this.j=s,this.width=r,this.height=o,(this.o||this.m)&&--E_===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!zi(this,0)}va(){return!!zi(this,1)}W(){return!!zi(this,2)}Qa(){return $y(this)}Pa(){var n=zi(this,1);return n||(Sh(this),bh(this),n=b_(this),ja(this),this.g.push(n),this.o=!0),n}S(){return Sh(this)}clone(){var n=[];for(let e of this.g){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=Wo(this),s=du(this);i.activeTexture(i.TEXTURE1),t=$s(s,i),i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),uu(s,i,t),yc(s,i,!1,()=>{bh(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ja(this)}),yp(s),ja(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Sh(this),bh(this),t=b_(this),ja(this)}n.push(t)}return new dn(n,this.va(),this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&zi(this,1).close(),this.m&&Wo(this).deleteTexture(zi(this,2)),E_=-1}};dn.prototype.close=dn.prototype.close,dn.prototype.clone=dn.prototype.clone,dn.prototype.getAsWebGLTexture=dn.prototype.S,dn.prototype.getAsImageBitmap=dn.prototype.Pa,dn.prototype.getAsImageData=dn.prototype.Qa,dn.prototype.hasWebGLTexture=dn.prototype.W,dn.prototype.hasImageBitmap=dn.prototype.va,dn.prototype.hasImageData=dn.prototype.Ta;var E_=250;function wi(...n){return n.map(([e,t])=>({start:e,end:t}))}var T_,KT=Gy((T_=Vy(Hy),class extends T_{get oa(){return this.i}Da(n,e,t){we(this,e,i=>{var[s,r]=zy(this,n,i);this.oa._addBoundTextureAsImageToStream(i,s,r,t)})}ga(n,e){ki(this,n,e),we(this,n,t=>{this.oa._attachImageListener(t)})}ha(n,e){Vs(this,n,e),we(this,n,t=>{this.oa._attachImageVectorListener(t)})}})),Ai=class extends KT{};async function at(n,e,t){return Mh(n,t.canvas??(mp()?void 0:document.createElement("canvas")),e,t)}function Yy(n,e,t,i){if(n.m&&i!==void 0)if(dt(n.baseOptions,Oh,3)?.g()){var s=n.m;++s.g.T,s.h.set(i,performance.now())}else++(s=n.m).g.P,s.h.set(i,performance.now());if(n.qa){if(s=new py,t?.regionOfInterest){if(!n.Ca)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ce(s,1,(r.left+r.right)/2),Ce(s,2,(r.top+r.bottom)/2),Ce(s,4,r.right-r.left),Ce(s,3,r.bottom-r.top)}else Ce(s,1,.5),Ce(s,2,.5),Ce(s,4,1),Ce(s,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ce(s,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){let[o,a]=gp(e);t=Vt(s,3)*a/o,r=Vt(s,4)*o/a,Ce(s,4,t),Ce(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.qa,i)}n.g.Da(e,n.Ba,i??performance.now()),n.finishProcessing(i)}function Ri(n,e,t){if(n.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Yy(n,e,t,n.I+1)}function Ki(n,e,t,i){if(!n.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Yy(n,e,t,i)}function Xo(n,e,t,i){var s=e.data,r=e.width,o=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return n=new Kt([s],t,!1,n.g.i.canvas,n.da,r,e),i?n.clone():n}var Jn=class extends Hh{constructor(n,e,t,i){super(n),this.g=n,this.Ba=e,this.qa=t,this.Ca=i,this.da=new Vr,this.J=!1}j(n,e=!0){if("runningMode"in n){var t=this.J=!!n.runningMode&&n.runningMode!=="IMAGE";ze(this.baseOptions,2,t==null?t:Th(t))}if(n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(n,e)}close(){this.da.close(),super.close()}};Jn.prototype.close=Jn.prototype.close;var oi=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect_in",!1),this.l={detections:[]},Ie(n=this.h=new au,0,1,e=new Ot),Ce(this.h,2,.5),Ce(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return"minDetectionConfidence"in n&&Ce(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Ce(this.h,3,n.minSuppressionThreshold??.3),this.j(n)}G(n,e){return this.l={detections:[]},Ri(this,n,e),this.l}H(n,e,t){return this.l={detections:[]},Ki(this,n,t,e),this.l}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"norm_rect_in"),ft(n,"detections");var e=new Qn;$i(e,pT,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect_in"),rt(t,"DETECTIONS:detections"),t.v(e),di(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=uy(r),this.l.detections.push(Fy(i));fe(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};oi.prototype.detectForVideo=oi.prototype.H,oi.prototype.detect=oi.prototype.G,oi.prototype.setOptions=oi.prototype.v,oi.createFromModelPath=async function(n,e){return at(oi,n,{baseOptions:{modelAssetPath:e}})},oi.createFromModelBuffer=function(n,e){return at(oi,n,{baseOptions:{modelAssetBuffer:e}})},oi.createFromOptions=function(n,e){return at(oi,n,e)};var xp=wi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Mp=wi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Sp=wi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Ky=wi([474,475],[475,476],[476,477],[477,474]),bp=wi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ep=wi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Zy=wi([469,470],[470,471],[471,472],[472,469]),Tp=wi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),jy=[...xp,...Mp,...Sp,...bp,...Ep,...Tp],Jy=wi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function w_(n){n.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var ut=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ie(n=this.h=new yy,0,1,e=new Ot),this.B=new _y,Ie(this.h,0,3,this.B),this.u=new au,Ie(this.h,0,2,this.u),Wi(this.u,4,1),Ce(this.u,2,.5),Ce(this.B,2,.5),Ce(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return"numFaces"in n&&Wi(this.u,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Ce(this.u,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Ce(this.B,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.j(n)}G(n,e){return w_(this),Ri(this,n,e),this.l}H(n,e,t){return w_(this),Ki(this,n,t,e),this.l}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"norm_rect"),ft(n,"face_landmarks");var e=new Qn;$i(e,gT,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),rt(t,"NORM_LANDMARKS:face_landmarks"),t.v(e),di(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=_c(r),this.l.faceLandmarks.push(cu(i));fe(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{fe(this,i)}),this.outputFaceBlendshapes&&(ft(n,"blendshapes"),rt(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=ou(r),this.l.faceBlendshapes.push(pp(i.g()??[]));fe(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{fe(this,i)})),this.outputFacialTransformationMatrixes&&(ft(n,"face_geometry"),rt(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=dt(i=mT(r),rT,2))&&this.l.facialTransformationMatrixes.push({rows:li(i,1)??0??0,columns:li(i,2)??0??0,data:Rr(i,3,Ti,Ar()).slice()??[]});fe(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ut.prototype.detectForVideo=ut.prototype.H,ut.prototype.detect=ut.prototype.G,ut.prototype.setOptions=ut.prototype.v,ut.createFromModelPath=function(n,e){return at(ut,n,{baseOptions:{modelAssetPath:e}})},ut.createFromModelBuffer=function(n,e){return at(ut,n,{baseOptions:{modelAssetBuffer:e}})},ut.createFromOptions=function(n,e){return at(ut,n,e)},ut.FACE_LANDMARKS_LIPS=xp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",ut.FACE_LANDMARKS_LIPS),ut.FACE_LANDMARKS_LEFT_EYE=Mp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",ut.FACE_LANDMARKS_LEFT_EYE),ut.FACE_LANDMARKS_LEFT_EYEBROW=Sp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ut.FACE_LANDMARKS_LEFT_EYEBROW),ut.FACE_LANDMARKS_LEFT_IRIS=Ky,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",ut.FACE_LANDMARKS_LEFT_IRIS),ut.FACE_LANDMARKS_RIGHT_EYE=bp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",ut.FACE_LANDMARKS_RIGHT_EYE),ut.FACE_LANDMARKS_RIGHT_EYEBROW=Ep,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ut.FACE_LANDMARKS_RIGHT_EYEBROW),ut.FACE_LANDMARKS_RIGHT_IRIS=Zy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ut.FACE_LANDMARKS_RIGHT_IRIS),ut.FACE_LANDMARKS_FACE_OVAL=Tp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",ut.FACE_LANDMARKS_FACE_OVAL),ut.FACE_LANDMARKS_CONTOURS=jy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",ut.FACE_LANDMARKS_CONTOURS),ut.FACE_LANDMARKS_TESSELATION=Jy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",ut.FACE_LANDMARKS_TESSELATION);var wp=wi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function A_(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function R_(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function C_(n,e=!0){var t=[];for(let s of n){var i=ou(s);n=[];for(let r of i.g())i=e&&li(r,1)!=null?li(r,1)??0:-1,n.push({score:Vt(r,2)??0,index:i,categoryName:pn(kt(r,3))??""??"",displayName:pn(kt(r,4))??""??""});t.push(n)}return t}var Dn=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ie(n=this.l=new My,0,1,e=new Ot),this.u=new hp,Ie(this.l,0,2,this.u),this.F=new lp,Ie(this.u,0,3,this.F),this.B=new xy,Ie(this.u,0,2,this.B),this.h=new _T,Ie(this.l,0,3,this.h),Ce(this.B,2,.5),Ce(this.u,4,.5),Ce(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return dt(this.l,Ot,1)}set baseOptions(n){Ie(this.l,0,1,n)}v(n){if(Wi(this.B,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ce(this.B,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.u,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ce(this.F,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new Lo,t=e,i=mf(n.cannedGesturesClassifierOptions,dt(this.h,Lo,3)?.j());Ie(t,0,2,i),Ie(this.h,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&dt(this.h,Lo,3)?.g();return n.customGesturesClassifierOptions?(Ie(t=e=new Lo,0,2,i=mf(n.customGesturesClassifierOptions,dt(this.h,Lo,4)?.j())),Ie(this.h,0,4,e)):n.customGesturesClassifierOptions===void 0&&dt(this.h,Lo,4)?.g(),this.j(n)}Xa(n,e){return A_(this),Ri(this,n,e),R_(this)}Ya(n,e,t){return A_(this),Ki(this,n,t,e),R_(this)}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"norm_rect"),ft(n,"hand_gestures"),ft(n,"hand_landmarks"),ft(n,"world_hand_landmarks"),ft(n,"handedness");var e=new Qn;$i(e,yT,this.l);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),rt(t,"HAND_GESTURES:hand_gestures"),rt(t,"LANDMARKS:hand_landmarks"),rt(t,"WORLD_LANDMARKS:world_hand_landmarks"),rt(t,"HANDEDNESS:handedness"),t.v(e),di(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i){i=_c(r);let o=[];for(let a of ws(i,fy,1))o.push({x:Vt(a,1)??0,y:Vt(a,2)??0,z:Vt(a,3)??0,visibility:Vt(a,4)??0});this.landmarks.push(o)}fe(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i){i=No(r);let o=[];for(let a of ws(i,dy,1))o.push({x:Vt(a,1)??0,y:Vt(a,2)??0,z:Vt(a,3)??0,visibility:Vt(a,4)??0});this.worldLandmarks.push(o)}fe(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...C_(i,!1)),fe(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{fe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...C_(i)),fe(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function I_(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Dn.prototype.recognizeForVideo=Dn.prototype.Ya,Dn.prototype.recognize=Dn.prototype.Xa,Dn.prototype.setOptions=Dn.prototype.v,Dn.createFromModelPath=function(n,e){return at(Dn,n,{baseOptions:{modelAssetPath:e}})},Dn.createFromModelBuffer=function(n,e){return at(Dn,n,{baseOptions:{modelAssetBuffer:e}})},Dn.createFromOptions=function(n,e){return at(Dn,n,e)},Dn.HAND_CONNECTIONS=wp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",Dn.HAND_CONNECTIONS);var Nn=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ie(n=this.h=new hp,0,1,e=new Ot),this.u=new lp,Ie(this.h,0,3,this.u),this.l=new xy,Ie(this.h,0,2,this.l),Wi(this.l,3,1),Ce(this.l,2,.5),Ce(this.u,2,.5),Ce(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return"numHands"in n&&Wi(this.l,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ce(this.l,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ce(this.u,2,n.minHandPresenceConfidence??.5),this.j(n)}G(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ri(this,n,e),I_(this)}H(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ki(this,n,t,e),I_(this)}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"norm_rect"),ft(n,"hand_landmarks"),ft(n,"world_hand_landmarks"),ft(n,"handedness");var e=new Qn;$i(e,vT,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),rt(t,"LANDMARKS:hand_landmarks"),rt(t,"WORLD_LANDMARKS:world_hand_landmarks"),rt(t,"HANDEDNESS:handedness"),t.v(e),di(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=_c(r),this.landmarks.push(cu(i));fe(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=No(r),this.worldLandmarks.push(ec(i));fe(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,o=r.push,a=[];for(let c of i){i=ou(c);let l=[];for(let h of i.g())l.push({score:Vt(h,2)??0,index:li(h,1)??0??-1,categoryName:pn(kt(h,3))??""??"",displayName:pn(kt(h,4))??""??""});a.push(l)}o.call(r,...a),fe(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Nn.prototype.detectForVideo=Nn.prototype.H,Nn.prototype.detect=Nn.prototype.G,Nn.prototype.setOptions=Nn.prototype.v,Nn.createFromModelPath=function(n,e){return at(Nn,n,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(n,e){return at(Nn,n,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(n,e){return at(Nn,n,e)},Nn.HAND_CONNECTIONS=wp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Nn.HAND_CONNECTIONS);var Qy=wi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function L_(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function P_(n){try{if(!n.F)return n.h;n.F(n.h)}finally{hu(n)}}function gh(n,e){n=_c(n),e.push(cu(n))}var tt=class extends Jn{constructor(n,e){super(new Ai(n,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ie(n=this.l=new wy,0,1,e=new Ot),this.Y=new lp,Ie(this.l,0,2,this.Y),this.Aa=new xT,Ie(this.l,0,3,this.Aa),this.u=new au,Ie(this.l,0,4,this.u),this.O=new _y,Ie(this.l,0,5,this.O),this.B=new Ey,Ie(this.l,0,6,this.B),this.Z=new Ty,Ie(this.l,0,7,this.Z),Ce(this.u,2,.5),Ce(this.u,3,.3),Ce(this.O,2,.5),Ce(this.B,2,.5),Ce(this.B,3,.3),Ce(this.Z,2,.5),Ce(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return dt(this.l,Ot,1)}set baseOptions(n){Ie(this.l,0,1,n)}v(n){return"minFaceDetectionConfidence"in n&&Ce(this.u,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Ce(this.u,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Ce(this.O,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Ce(this.B,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Ce(this.B,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Ce(this.Z,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Ce(this.Y,2,n.minHandLandmarksConfidence??.5),this.j(n)}G(n,e,t){var i=typeof e!="function"?e:{};return this.F=typeof e=="function"?e:t,L_(this),Ri(this,n,i),P_(this)}H(n,e,t,i){var s=typeof t!="function"?t:{};return this.F=typeof t=="function"?t:i,L_(this),Ki(this,n,s,e),P_(this)}o(){var n=new ei;Ft(n,"input_frames_image"),ft(n,"pose_landmarks"),ft(n,"pose_world_landmarks"),ft(n,"face_landmarks"),ft(n,"left_hand_landmarks"),ft(n,"left_hand_world_landmarks"),ft(n,"right_hand_landmarks"),ft(n,"right_hand_world_landmarks");var e=new Qn,t=new V0;jn(t,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))ze(s,2,Yh(r,0,ic));else{if(!(typeof r=="string"||r instanceof Hi||Af(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");uc(s,2,Gh(r,!1),Ur())}})(t,this.l.g());var i=new Bn;jn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),sc(i,8,V0,t),Pt(i,"IMAGE:input_frames_image"),rt(i,"POSE_LANDMARKS:pose_landmarks"),rt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),rt(i,"FACE_LANDMARKS:face_landmarks"),rt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),rt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),rt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),rt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.v(e),di(n,i),lu(this,n),this.g.attachProtoListener("pose_landmarks",(s,r)=>{gh(s,this.h.poseLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var o=this.h.poseWorldLandmarks;s=No(s),o.push(ec(s)),fe(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{fe(this,s)}),this.outputPoseSegmentationMasks&&(rt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Vo(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[Xo(this,s,!0,!this.F)],fe(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],fe(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{gh(s,this.h.faceLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{fe(this,s)}),this.outputFaceBlendshapes&&(ft(n,"extra_blendshapes"),rt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=ou(s),o.push(pp(s.g()??[]))),fe(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{fe(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{gh(s,this.h.leftHandLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var o=this.h.leftHandWorldLandmarks;s=No(s),o.push(ec(s)),fe(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{gh(s,this.h.rightHandLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var o=this.h.rightHandWorldLandmarks;s=No(s),o.push(ec(s)),fe(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{fe(this,s)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};tt.prototype.detectForVideo=tt.prototype.H,tt.prototype.detect=tt.prototype.G,tt.prototype.setOptions=tt.prototype.v,tt.createFromModelPath=function(n,e){return at(tt,n,{baseOptions:{modelAssetPath:e}})},tt.createFromModelBuffer=function(n,e){return at(tt,n,{baseOptions:{modelAssetBuffer:e}})},tt.createFromOptions=function(n,e){return at(tt,n,e)},tt.HAND_CONNECTIONS=wp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",tt.HAND_CONNECTIONS),tt.POSE_CONNECTIONS=Qy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",tt.POSE_CONNECTIONS),tt.FACE_LANDMARKS_LIPS=xp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",tt.FACE_LANDMARKS_LIPS),tt.FACE_LANDMARKS_LEFT_EYE=Mp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",tt.FACE_LANDMARKS_LEFT_EYE),tt.FACE_LANDMARKS_LEFT_EYEBROW=Sp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",tt.FACE_LANDMARKS_LEFT_EYEBROW),tt.FACE_LANDMARKS_LEFT_IRIS=Ky,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",tt.FACE_LANDMARKS_LEFT_IRIS),tt.FACE_LANDMARKS_RIGHT_EYE=bp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",tt.FACE_LANDMARKS_RIGHT_EYE),tt.FACE_LANDMARKS_RIGHT_EYEBROW=Ep,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",tt.FACE_LANDMARKS_RIGHT_EYEBROW),tt.FACE_LANDMARKS_RIGHT_IRIS=Zy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",tt.FACE_LANDMARKS_RIGHT_IRIS),tt.FACE_LANDMARKS_FACE_OVAL=Tp,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",tt.FACE_LANDMARKS_FACE_OVAL),tt.FACE_LANDMARKS_CONTOURS=jy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",tt.FACE_LANDMARKS_CONTOURS),tt.FACE_LANDMARKS_TESSELATION=Jy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",tt.FACE_LANDMARKS_TESSELATION);var ai=class extends Jn{constructor(n,e){super(new Ai(n,e),"input_image","norm_rect",!0),this.l={classifications:[]},Ie(n=this.h=new Ay,0,1,e=new Ot)}C(){return"ImageClassifier"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return Ie(this.h,0,2,mf(n,dt(this.h,ap,2))),this.j(n)}Ga(n,e){return this.l={classifications:[]},Ri(this,n,e),this.l}Ha(n,e,t){return this.l={classifications:[]},Ki(this,n,t,e),this.l}o(){var n=new ei;Ft(n,"input_image"),Ft(n,"norm_rect"),ft(n,"classifications");var e=new Qn;$i(e,MT,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Pt(t,"IMAGE:input_image"),Pt(t,"NORM_RECT:norm_rect"),rt(t,"CLASSIFICATIONS:classifications"),t.v(e),di(n,t),this.g.attachProtoListener("classifications",(i,s)=>{this.l=LT(cT(i)),fe(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ai.prototype.classifyForVideo=ai.prototype.Ha,ai.prototype.classify=ai.prototype.Ga,ai.prototype.setOptions=ai.prototype.v,ai.createFromModelPath=function(n,e){return at(ai,n,{baseOptions:{modelAssetPath:e}})},ai.createFromModelBuffer=function(n,e){return at(ai,n,{baseOptions:{modelAssetBuffer:e}})},ai.createFromOptions=function(n,e){return at(ai,n,e)};var Kn=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect",!0),this.h=new Ry,this.embeddings={embeddings:[]},Ie(n=this.h,0,1,e=new Ot)}C(){return"ImageEmbedder"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){var e=this.h,t=dt(this.h,j0,2);if(t=t?t.clone():new j0,n.l2Normalize!==void 0){var i=n.l2Normalize;ze(t,1,i==null?i:Th(i))}else"l2Normalize"in n&&ze(t,1);return n.quantize!==void 0?ze(t,2,(i=n.quantize)==null?i:Th(i)):"quantize"in n&&ze(t,2),Ie(e,0,2,t),this.j(n)}Na(n,e){return Ri(this,n,e),this.embeddings}Oa(n,e,t){return Ki(this,n,t,e),this.embeddings}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"norm_rect"),ft(n,"embeddings_out");var e=new Qn;$i(e,ST,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),rt(t,"EMBEDDINGS:embeddings_out"),t.v(e),di(n,t),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=uT(i),this.embeddings=(function(r){return{embeddings:ws(r,hT,1).map(o=>{var a={headIndex:li(o,3)??0??-1,headName:pn(kt(o,4))??""??""};if(f1(o,Z0,1,op))o=Rr(o=L0(o,Z0,1),1,Ti,Ar()),a.floatEmbedding=o.slice();else{let c=new Uint8Array(0);a.quantizedEmbedding=L0(o,lT,2)?.g()?.h()??c}return a}),timestampMs:Uy(kt(r,2,void 0,Ah)??d1)}})(i),fe(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Kn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=n_(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=n_(t_(n.quantizedEmbedding),t_(e.quantizedEmbedding))}return n},Kn.prototype.embedForVideo=Kn.prototype.Oa,Kn.prototype.embed=Kn.prototype.Na,Kn.prototype.setOptions=Kn.prototype.v,Kn.createFromModelPath=function(n,e){return at(Kn,n,{baseOptions:{modelAssetPath:e}})},Kn.createFromModelBuffer=function(n,e){return at(Kn,n,{baseOptions:{modelAssetBuffer:e}})},Kn.createFromOptions=function(n,e){return at(Kn,n,e)};var Ef=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function ZT(n){var e=(function(t){return ws(t,Bn,1)})(n.ja()).filter(t=>(pn(kt(t,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(dt(e[0],Qn,7)?.o()?.g()??new Map).forEach((t,i)=>{n.u[Number(i)]=pn(kt(t,1))??""})}function D_(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function N_(n){try{let e=new Ef(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.l)return e;n.l(e)}finally{hu(n)}}Ef.prototype.close=Ef.prototype.close;var Un=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new fp,this.B=new Cy,Ie(this.h,0,3,this.B),Ie(n=this.h,0,1,e=new Ot)}C(){return"ImageSegmenter"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return n.displayNamesLocale!==void 0?ze(this.h,2,Ms(n.displayNamesLocale)):"displayNamesLocale"in n&&ze(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.j(n)}L(){ZT(this)}segment(n,e,t){var i=typeof e!="function"?e:{};return this.l=typeof e=="function"?e:t,D_(this),Ri(this,n,i),N_(this)}eb(n,e,t,i){var s=typeof t!="function"?t:{};return this.l=typeof t=="function"?t:i,D_(this),Ki(this,n,s,e),N_(this)}Ra(){return this.u}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"norm_rect");var e=new Qn;$i(e,Ly,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),t.v(e),di(n,t),lu(this,n),this.outputConfidenceMasks&&(ft(n,"confidence_masks"),rt(t,"CONFIDENCE_MASKS:confidence_masks"),Vo(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Xo(this,r,!0,!this.l)),fe(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],fe(this,i)})),this.outputCategoryMask&&(ft(n,"category_mask"),rt(t,"CATEGORY_MASK:category_mask"),Vo(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=Xo(this,i,!1,!this.l),fe(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,fe(this,i)})),ft(n,"quality_scores"),rt(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,fe(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Un.prototype.getLabels=Un.prototype.Ra,Un.prototype.segmentForVideo=Un.prototype.eb,Un.prototype.segment=Un.prototype.segment,Un.prototype.setOptions=Un.prototype.v,Un.createFromModelPath=function(n,e){return at(Un,n,{baseOptions:{modelAssetPath:e}})},Un.createFromModelBuffer=function(n,e){return at(Un,n,{baseOptions:{modelAssetBuffer:e}})},Un.createFromOptions=function(n,e){return at(Un,n,e)};var jT={0:0,1:1,2:2,3:3};function Qd(){return mp()?void 0:document.createElement("canvas")}var Fn=class extends Hh{constructor(n,e){super(new WT(n,e)),this.u=new Vr,this.delegate="CPU",this.h=0,this.baseOptions=new Ot,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(n){return this.delegate=n.baseOptions?.delegate??"CPU",super.j(n)}fb(n){if(this.h===0)throw Error("Segmenter is not initialized.");var e;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(e=typeof ImageData<"u"&&n instanceof ImageData))if(typeof n!="object"||n===null)e=!1;else{e=n.data;var t=n.width,i=n.height;e=Number.isInteger(t)&&t>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=n.width,t=n.height,n=n.data;else{if([e,t]=gp(n),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,t);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=t,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(n,0,0),n=i.getImageData(0,0,e,t).data}if(!n)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:o,height:a}){if(o<=0||a<=0)throw Error(`Invalid image dimensions: ${o}x${a}. Dimensions must be positive.`);if(r%(o*a)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${o*a}).`);if((r/=o*a)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:n.length,width:e,height:t});var s=this.i._malloc(n.length);if(this.i.HEAPU8.set(n,s),this.l=s,!this.i._interactive_segmenter_set_image(this.h,s,e,t,i))throw Error("Failed to set image on native engine.")}segment(n){if(this.h===0)throw Error("Segmenter is not initialized.");var e=(function(h){h=h.map(({isCompleted:d,brushMode:f,point:g})=>{f=jT[f]??0,g=g.map(({x:m,y:p})=>{var E=new ET;return Po(E,1,m),Po(E,2,p),E});var _=new TT;return cf(_,d),uc(_,1,Ss(f),0),af(_,2,g),_});var u=new wT;return af(u,1,h),AT(u)})(n);n=this.i._malloc(e.length),this.i.HEAPU8.set(e,n);var t=this.i._malloc(12),i=t+4,s=t+8,r=0,o=this.B++;try{if(this.m)if(this.delegate==="GPU"){var a=this.m;++a.g.T,a.h.set(o,performance.now())}else{var c=this.m;++c.g.P,c.h.set(o,performance.now())}if((r=this.i._interactive_segmenter_segment(this.h,n,e.length,t,i,s))===0)throw Error("Segmentation failed.");this.m?.za(o);let h=this.i.HEAPU32[t/4],u=this.i.HEAPU32[i/4],d=new Float32Array(this.i.HEAPU8.buffer,r,this.i.HEAPU32[s/4]/4);var l=new Float32Array(d);if(a=h*u,(l instanceof Uint8Array||l instanceof Float32Array)&&l.length!==a)throw Error("Unsupported channel count: "+l.length/a);return new Kt([l],!0,!1,this.g.i.canvas??void 0,this.u,h,u)}finally{n!==0&&this.i._free(n),t!==0&&this.i._free(t),r!==0&&this.i._free(r)}}o(){this.h!==0&&(this.m?.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var n=new Oh;if(this.delegate==="GPU"){var e=new rp;Gi(n,2,Dr,e)}else Wi(e=new eT,1,4),Gi(n,1,Dr,e);if(Ie(this.baseOptions,0,3,n),n=fT(this.baseOptions),e=this.i._malloc(n.length),this.i.HEAPU8.set(n,e),this.h=this.i._interactive_segmenter_create(e,n.length),this.i._free(e),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.m?.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};Fn.prototype.close=Fn.prototype.close,Fn.prototype.segment=Fn.prototype.segment,Fn.prototype.setImage=Fn.prototype.fb,Fn.prototype.setOptions=Fn.prototype.v,Fn.createFromModelPath=function(n,e){return Mh(Fn,Qd(),n,{baseOptions:{modelAssetPath:e}})},Fn.createFromModelBuffer=function(n,e){return Mh(Fn,Qd(),n,{baseOptions:{modelAssetBuffer:e}})},Fn.createFromOptions=function(n,e){var t=e.canvas??Qd();return Mh(Fn,t,n,e)};var Tf=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};Tf.prototype.close=Tf.prototype.close;var Bi=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new fp,this.u=new Cy,Ie(this.h,0,3,this.u),Ie(n=this.h,0,1,e=new Ot)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.j(n)}segment(n,e,t,i){var s=typeof t!="function"?t:{};if(this.l=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.I+1,i=new Py,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new Zd;cf(r,!0),Po(r,1,e.keypoint.x),Po(r,2,e.keypoint.y),Gi(i,1,pf,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let a=new RT;for(r of e.scribble)cf(e=new Zd,!0),Po(e,1,r.x),Po(e,2,r.y),sc(a,1,Zd,e);Gi(i,2,pf,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",t),Ri(this,n,s);e:{try{let a=new Tf(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var o=a;break e}this.l(a)}finally{hu(this)}o=void 0}return o}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"roi_in"),Ft(n,"norm_rect_in");var e=new Qn;$i(e,Ly,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),Pt(t,"IMAGE:image_in"),Pt(t,"ROI:roi_in"),Pt(t,"NORM_RECT:norm_rect_in"),t.v(e),di(n,t),lu(this,n),this.outputConfidenceMasks&&(ft(n,"confidence_masks"),rt(t,"CONFIDENCE_MASKS:confidence_masks"),Vo(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Xo(this,r,!0,!this.l)),fe(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],fe(this,i)})),this.outputCategoryMask&&(ft(n,"category_mask"),rt(t,"CATEGORY_MASK:category_mask"),Vo(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=Xo(this,i,!1,!this.l),fe(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,fe(this,i)})),ft(n,"quality_scores"),rt(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,fe(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Bi.prototype.segment=Bi.prototype.segment,Bi.prototype.setOptions=Bi.prototype.v,Bi.createFromModelPath=function(n,e){return at(Bi,n,{baseOptions:{modelAssetPath:e}})},Bi.createFromModelBuffer=function(n,e){return at(Bi,n,{baseOptions:{modelAssetBuffer:e}})},Bi.createFromOptions=function(n,e){return at(Bi,n,e)};var ci=class extends Jn{constructor(n,e){super(new Ai(n,e),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Ie(n=this.h=new Dy,0,1,e=new Ot)}C(){return"ObjectDetector"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return n.displayNamesLocale!==void 0?ze(this.h,2,Ms(n.displayNamesLocale)):"displayNamesLocale"in n&&ze(this.h,2),n.maxResults!==void 0?Wi(this.h,3,n.maxResults):"maxResults"in n&&ze(this.h,3),n.scoreThreshold!==void 0?Ce(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&ze(this.h,4),n.categoryAllowlist!==void 0?Ch(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&ze(this.h,5),n.categoryDenylist!==void 0?Ch(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&ze(this.h,6),this.j(n)}G(n,e){return this.l={detections:[]},Ri(this,n,e),this.l}H(n,e,t){return this.l={detections:[]},Ki(this,n,t,e),this.l}o(){var n=new ei;Ft(n,"input_frame_gpu"),Ft(n,"norm_rect"),ft(n,"detections");var e=new Qn;$i(e,CT,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Pt(t,"IMAGE:input_frame_gpu"),Pt(t,"NORM_RECT:norm_rect"),rt(t,"DETECTIONS:detections"),t.v(e),di(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=uy(r),this.l.detections.push(Fy(i));fe(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{fe(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ci.prototype.detectForVideo=ci.prototype.H,ci.prototype.detect=ci.prototype.G,ci.prototype.setOptions=ci.prototype.v,ci.createFromModelPath=async function(n,e){return at(ci,n,{baseOptions:{modelAssetPath:e}})},ci.createFromModelBuffer=function(n,e){return at(ci,n,{baseOptions:{modelAssetBuffer:e}})},ci.createFromOptions=function(n,e){return at(ci,n,e)};var wf=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function U_(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function F_(n){try{let e=new wf(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.u)return e;n.u(e)}finally{hu(n)}}wf.prototype.close=wf.prototype.close;var xn=class extends Jn{constructor(n,e){super(new Ai(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ie(n=this.h=new Ny,0,1,e=new Ot),this.B=new Ty,Ie(this.h,0,3,this.B),this.l=new Ey,Ie(this.h,0,2,this.l),Wi(this.l,4,1),Ce(this.l,2,.5),Ce(this.B,2,.5),Ce(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return dt(this.h,Ot,1)}set baseOptions(n){Ie(this.h,0,1,n)}v(n){return"numPoses"in n&&Wi(this.l,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Ce(this.l,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Ce(this.B,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.j(n)}G(n,e,t){var i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:t,U_(this),Ri(this,n,i),F_(this)}H(n,e,t,i){var s=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:i,U_(this),Ki(this,n,s,e),F_(this)}o(){var n=new ei;Ft(n,"image_in"),Ft(n,"norm_rect"),ft(n,"normalized_landmarks"),ft(n,"world_landmarks"),ft(n,"segmentation_masks");var e=new Qn;$i(e,IT,this.h);var t=new Bn;jn(t,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),rt(t,"NORM_LANDMARKS:normalized_landmarks"),rt(t,"WORLD_LANDMARKS:world_landmarks"),t.v(e),di(n,t),lu(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=_c(r),this.landmarks.push(cu(i));fe(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],fe(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=No(r),this.worldLandmarks.push(ec(i));fe(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],fe(this,i)}),this.outputSegmentationMasks&&(rt(t,"SEGMENTATION_MASK:segmentation_masks"),Vo(this,"segmentation_masks"),this.g.ha("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Xo(this,r,!0,!this.u)),fe(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};xn.prototype.detectForVideo=xn.prototype.H,xn.prototype.detect=xn.prototype.G,xn.prototype.setOptions=xn.prototype.v,xn.createFromModelPath=function(n,e){return at(xn,n,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(n,e){return at(xn,n,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(n,e){return at(xn,n,e)},xn.POSE_CONNECTIONS=Qy,Ct("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",xn.POSE_CONNECTIONS);function Ap(n,e){if(e===vd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===To||e===Ga){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===To)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var fu=class extends si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Np(t)}),this.register(function(t){return new Up(t)}),this.register(function(t){return new Wp(t)}),this.register(function(t){return new Xp(t)}),this.register(function(t){return new qp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new Bp(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new zp(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new Hp(t)}),this.register(function(t){return new Fp(t)}),this.register(function(t){return new Gp(t)}),this.register(function(t){return new Vp(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new $p(t)}),this.register(function(t){return new Yp(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ps.extractUrlBase(e);o=ps.resolveURL(l,this.path)}else o=ps.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new us(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sv){try{o[Qe.KHR_BINARY_GLTF]=new Kp(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new nm(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:o[u]=new Pp;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Zp(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[u]=new jp;break;case Qe.KHR_MESH_QUANTIZATION:o[u]=new Jp;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function JT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lp=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Jt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ua(h),l.distance=u;break;case"spot":l=new Na(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Pp=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Si}extendParams(e,t,i){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}},Dp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Np=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(a,a)}return Promise.all(r)}},Up=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Fp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Op=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Bp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},kp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],Jt),Promise.all(r)}},zp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Hp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],Jt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}},Vp=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Gp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Wp=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Xp=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},qp=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},$p=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Yp=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==fi.TRIANGLES&&l.mode!==fi.TRIANGLE_STRIP&&l.mode!==fi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new We,m=new L,p=new cn,E=new L(1,1,1),b=new Ea(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&E.fromBufferAttribute(c.SCALE,x),b.setMatrixAt(x,_.compose(m,p,E));for(let x in c)if(x==="_COLOR_0"){let A=c[x];b.instanceColor=new ks(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ut.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},sv="glTF",vc=12,ev={JSON:1313821514,BIN:5130562},Kp=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,vc),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-vc,r=new DataView(e,vc),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===ev.JSON){let l=new Uint8Array(e,vc+o,a);this.content=i.decode(l)}else if(c===ev.BIN){let l=vc+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=em[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=em[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=ea[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,Jt,d)})})}},jp=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Jp=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},pu=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,E=1-m,b=p-d+u;for(let x=0;x!==a;x++){let A=o[_+x+a],w=o[_+x+c]*h,C=o[g+x+a],D=o[g+x]*h;r[x]=E*A+b*w+m*C+p*D}return r}},QT=new cn,Qp=class extends pu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return QT.fromArray(r).normalize().toArray(r),r}},fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tv={9728:hn,9729:an,9984:Sl,9985:xo,9986:vr,9987:bi},nv={33071:Wn,33648:oo,10497:Bs},Rp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},em={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Js={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ew={CUBICSPLINE:void 0,LINEAR:hr,STEP:lr},Cp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new pr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),n.DefaultMaterial}function Gr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Zi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nw(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function iw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sw(n){let e,t=n.extensions&&n.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ip(t.attributes):e=n.indices+":"+Ip(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ip(n.targets[i]);return e}function Ip(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function tm(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ow=new We,nm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new JT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new mr(this.options.manager):this.textureLoader=new Oa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Gr(r,a,s),Zi(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ps.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Rp[s.type],a=ea[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Tt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Rp[s.type],l=ea[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(E);b||(_=new l(a,p*f,s.count*f/h),b=new po(_,f/h),t.cache.add(E,b)),m=new mo(b,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Tt(_,c,g);if(s.sparse!==void 0){let p=Rp.SCALAR,E=ea[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new E(o[1],b,s.sparse.count*p),w=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,D=A.length;C<D;C++){let S=A[C];if(m.setX(S,w[C*c]),c>=2&&m.setY(S,w[C*c+1]),c>=3&&m.setZ(S,w[C*c+2]),c>=4&&m.setW(S,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=tv[d.magFilter]||an,h.minFilter=tv[d.minFilter]||bi,h.wrapS=nv[d.wrapS]||Bs,h.wrapT=nv[d.wrapT]||Bs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==hn&&h.minFilter!==an,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Yt(_);m.needsUpdate=!0,d(m)}),t.load(ps.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Zi(u,o),u.userData.mimeType=o.mimeType||rw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new vo,Cn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new yo,Cn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return pr}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let u=s[Qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Jt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=yn);let h=r.alphaMode||Cp.OPAQUE;if(h===Cp.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Cp.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Si&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Si&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Si){let u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&o!==Si&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Gr(s,u,r),u})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return iv(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=sw(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=iv(new un,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?tw(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=o[f],p,E=l[f];if(m.mode===fi.TRIANGLES||m.mode===fi.TRIANGLE_STRIP||m.mode===fi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ma(_,E):new Qt(_,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===fi.TRIANGLE_STRIP?p.geometry=Ap(p.geometry,Ga):m.mode===fi.TRIANGLE_FAN&&(p.geometry=Ap(p.geometry,To));else if(m.mode===fi.LINES)p=new Ta(_,E);else if(m.mode===fi.LINE_STRIP)p=new fr(_,E);else if(m.mode===fi.LINE_LOOP)p=new wa(_,E);else if(m.mode===fi.POINTS)p=new Aa(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zi(p,r),m.extensions&&Gr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Gr(s,u[0],r),u[0];let d=new Xn;r.extensions&&Gr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new $t(Wa.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ds(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Zi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new We;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ba(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",E)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let b=0,x=d.length;b<x;b++){let A=d[b],w=f[b],C=g[b],D=_[b],S=m[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let M=i._createAnimationTracks(A,w,C,D,S);if(M)for(let I=0;I<M.length;I++)p.push(M[I])}let E=new Pa(r,void 0,p);return Zi(E,s),E})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ow)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new go:l.length>1?h=new Xn:l.length===1?h=l[0]:h=new Ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Zi(h,r),r.extensions&&Gr(i,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Xn;i.name&&(r.name=s.createUniqueName(i.name)),Zi(r,i),i.extensions&&Gr(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Cn||d instanceof Yt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Js[r.path]===Js.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Js[r.path]){case Js.weights:l=Di;break;case Js.rotation:l=Ni;break;case Js.translation:case Js.scale:l=Ui;break;default:switch(i.itemSize){case 1:l=Di;break;case 2:case 3:default:l=Ui;break}break}let h=s.interpolation!==void 0?ew[s.interpolation]:hr,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Js[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=tm(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ni?Qp:pu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aw(n,e,t){let i=e.attributes,s=new bn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=tm(ea[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=tm(ea[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function iv(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=em[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==Jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Zi(n,e),aw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nw(n,e.targets,t):n})}var im=new WeakMap,mu=class extends si{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){let r=new us(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},i,s)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,Et,i).catch(i)}decodeDracoFile(e,t,i,s,r=Jt,o=()=>{}){let a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let i=JSON.stringify(t);if(im.has(e)){let c=im.get(e);if(c.key===i)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),im.set(e,{key:i,promise:a}),a}_createGeometry(e){let t=new un;e.index&&t.setIndex(new Tt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){let s=e.attributes[i],r=s.name,o=s.array,a=s.itemSize,c=new Tt(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Et)return;let i=new De;for(let s=0,r=e.count;s<r;s++)i.fromBufferAttribute(e,s),Ze.colorSpaceToWorking(i,Et),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,t){let i=new us(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((s,r)=>{i.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{let s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);let r=cw.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function cw(){let n,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":n=a.decoderConfig,e=new Promise(function(h){n.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(n)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let _={index:null,attributes:[]};for(let m in h){let p=self[u[m]],E,b;if(l.useUniqueIDs)b=h[m],E=a.GetAttributeByUniqueId(d,b);else{if(b=a.GetAttributeId(d,o[h[m]]),b===-1)continue;E=a.GetAttribute(d,b)}let x=s(o,a,d,m,p,E);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=i(o,a,d)),o.destroy(d),_}function i(o,a,c){let h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,c,l,h,u){let d=u.num_components(),g=c.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,u,m,_,p);let E=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:E,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var ji={NOSE:0,L_SHOULDER:11,R_SHOULDER:12,L_ELBOW:13,R_ELBOW:14,L_WRIST:15,R_WRIST:16},gu=(n,e,t)=>Math.min(t,Math.max(e,n)),_u=(n,e=.2)=>!!n&&(n.visibility??1)>=e;function lw(n,e,t,i){let s=e||n,r=s?.[t],o=s?.[i];if(!r||!o)return null;let a=new L(o.x-r.x,-(o.y-r.y),-(o.z-r.z));return a.lengthSq()<1e-8?null:a.normalize()}var yu=class{constructor(e){this.scene=e,this.draco=new mu,this.draco.setDecoderPath("/static/draco/"),this.draco.setDecoderConfig({type:"wasm"}),this.loader=new fu,this.loader.setDRACOLoader(this.draco),this.wrapper=new Xn,this.wrapper.name="TryPoshakRiggedGarment",this.wrapper.visible=!1,e.add(this.wrapper),this.model=null,this.currentUrl=null,this.loadingUrl=null,this.loadingPromise=null,this.ready=!1,this.enabled=!0,this.tint="#18324f",this.bones={},this.restAxis={},this.lastQuat={},this.hasRootState=!1,this.currentPosition=new L,this.currentScale=new L(1,1,1),this.currentQuaternion=new cn,this.targetScale=new L,this.modelShoulderLocal=new L(0,.12,0),this.targetShoulderWorld=new L,this.shoulderOffsetWorld=new L,this._bonePosA=new L,this._bonePosB=new L,this.refSize=.5,this.fitFactor=1,this.garmentScale=1,this.baseWidth=.8,this.baseShoulderWidth=.27,this.garmentWidthFactor=1.04,this.minDepth=.45,this.maxDepth=6,this.torsoDrop=1.08,this.positionLerp=.46,this.rotationLerp=.34,this.scaleLerp=.3,this.tmp=new L,this.parentQ=new cn,this.parentInvQ=new cn,this.targetDir=new L,this.restDir=new L,this.targetQ=new cn,this.yawQ=new cn}async load(e){if(!e)throw new Error("\u0645\u062F\u0644 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u0645\u0634\u062E\u0635 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A.");if(this.currentUrl===e&&this.ready){this.enabled=!0,this.wrapper.visible=!0;return}if(this.loadingUrl===e&&this.loadingPromise)return this.loadingPromise;this.loadingUrl=e,this.ready=!1,this.wrapper.visible=!1;let t=(async()=>{let i=await this.loader.loadAsync(e);if(this.loadingUrl!==e)return;this.disposeModel();let s=i.scene,r=new bn().setFromObject(s),o=r.getCenter(new L),a=r.getSize(new L);this.baseWidth=Math.max(.05,a.x),s.position.set(-o.x,-o.y,-o.z),s.traverse(c=>{if(c.isMesh&&(c.frustumCulled=!1,c.castShadow=!1,c.receiveShadow=!1),c.isSkinnedMesh&&c.material){let l=Array.isArray(c.material)?c.material:[c.material];for(let h of l)h.skinning=!0,h.side=yn,h.depthTest=!0,h.depthWrite=!0,"metalness"in h&&(h.metalness=Math.min(h.metalness??0,.12)),"roughness"in h&&(h.roughness=Math.max(h.roughness??.5,.58))}}),this.wrapper.position.set(0,0,0),this.wrapper.scale.set(1,1,1),this.wrapper.quaternion.identity(),this.model=s,this.wrapper.add(s),this.bindSkeleton(),this.captureModelShoulderAnchor(),this.applyTint(),this.currentUrl=e,this.ready=!0,this.enabled=!0,this.hasRootState=!1,this.wrapper.visible=!0})();this.loadingPromise=t;try{await t}finally{this.loadingUrl===e&&(this.loadingUrl=null),this.loadingPromise===t&&(this.loadingPromise=null)}}setTint(e){e&&(this.tint=e),this.applyTint()}applyTint(){if(!this.model)return;let e=new De(this.tint);this.model.traverse(t=>{if(!t.isMesh||!t.material)return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)"color"in s&&s.color.copy(e),"emissive"in s&&s.emissive.set(0),"metalness"in s&&(s.metalness=Math.min(s.metalness??0,.08)),"roughness"in s&&(s.roughness=Math.max(s.roughness??.55,.62)),s.needsUpdate=!0})}bindSkeleton(){this.bones={},this.restAxis={},this.lastQuat={};let e=null;if(this.model?.traverse(i=>{!e&&i.isSkinnedMesh&&i.skeleton&&(e=i.skeleton)}),!e)return;for(let i of e.bones)this.bones[i.name]=i;let t=[["left_shoulder","left_elbow"],["left_elbow","left_wrist"],["right_shoulder","right_elbow"],["right_elbow","right_wrist"]];for(let[i,s]of t){let r=this.bones[i],o=this.bones[s];if(!r||!o)continue;let a=o.position.clone();a.lengthSq()<1e-8||(this.restAxis[i]=a.normalize(),this.lastQuat[i]=r.quaternion.clone())}}captureModelShoulderAnchor(){let e=this.bones.left_shoulder,t=this.bones.right_shoulder;if(!e||!t)return;this.wrapper.updateMatrixWorld(!0),e.getWorldPosition(this._bonePosA),t.getWorldPosition(this._bonePosB);let i=this.wrapper.worldToLocal(this._bonePosA.clone()),s=this.wrapper.worldToLocal(this._bonePosB.clone());this.baseShoulderWidth=Math.max(.02,i.distanceTo(s)),this.modelShoulderLocal.copy(i).add(s).multiplyScalar(.5)}setEnabled(e){this.enabled=!!e,this.wrapper.visible=this.enabled&&this.ready}update(e,t,i,s,r,o){if(!this.enabled||!this.ready||!e||!i||!s)return!1;let a=e[ji.L_SHOULDER],c=e[ji.R_SHOULDER];if(!_u(a)||!_u(c))return this.wrapper.visible=!1,!1;let l=M=>{let I=s.ox+M.x*s.vw*s.scale,O=s.oy+M.y*s.vh*s.scale;return{x:I/s.sw,y:O/s.sh,visibility:M.visibility??1}},h=l(a),u=l(c),d=(h.x+u.x)*.5,f=(h.y+u.y)*.5,g=Math.max(Math.hypot(h.x-u.x,h.y-u.y),.001),_=Math.max(g*.52,.02),m=Wa.degToRad(i.fov),p=Math.tan(m*.5),E=2*Math.max(_*this.fitFactor,.01)*p*i.aspect,b=gu(this.refSize/E,this.minDepth,this.maxDepth),x=i.position.z-b;this.yawQ.setFromAxisAngle(new L(0,1,0),-(r||0));let A=2*p*b*i.aspect,w=g*A*this.garmentWidthFactor,C=gu(w/Math.max(this.baseShoulderWidth,.02),.55,3.2),D=this.projectAtDepth(d,f,x,i,p,this.targetShoulderWorld);this.shoulderOffsetWorld.copy(this.modelShoulderLocal).multiplyScalar(C).applyQuaternion(this.yawQ);let S=this.tmp.copy(D).sub(this.shoulderOffsetWorld);if(!this.hasRootState)this.currentPosition.copy(S),this.currentScale.setScalar(C),this.currentQuaternion.copy(this.yawQ),this.hasRootState=!0;else{let M=gu(this.positionLerp+o*1.5,.35,.72);this.currentPosition.lerp(S,M),this.targetScale.setScalar(C),this.currentScale.lerp(this.targetScale,this.scaleLerp),this.currentQuaternion.slerp(this.yawQ,this.rotationLerp)}return this.wrapper.position.copy(this.currentPosition),this.wrapper.scale.copy(this.currentScale),this.wrapper.quaternion.copy(this.currentQuaternion),this.wrapper.visible=!0,this.applyArmPose(e,t,o),!0}projectAtDepth(e,t,i,s,r,o){let a=Math.abs(i-s.position.z),c=2*r*a,l=c*s.aspect;return o.set((e-.5)*l,-(t-.5)*c,i),o}applyArmPose(e,t,i){let s=[["left_shoulder",ji.L_SHOULDER,ji.L_ELBOW],["left_elbow",ji.L_ELBOW,ji.L_WRIST],["right_shoulder",ji.R_SHOULDER,ji.R_ELBOW],["right_elbow",ji.R_ELBOW,ji.R_WRIST]];for(let[r,o,a]of s){let c=this.bones[r],l=this.restAxis[r],h=this.lastQuat[r];if(!c||!l||!h||!c.parent||!_u(e[o],.16)||!_u(e[a],.16))continue;let u=lw(e,t,o,a);if(!u)continue;this.wrapper.updateMatrixWorld(!0),c.parent.getWorldQuaternion(this.parentQ),this.parentInvQ.copy(this.parentQ).invert(),this.targetDir.copy(u).applyQuaternion(this.parentInvQ).normalize(),this.restDir.copy(l).normalize(),this.targetQ.setFromUnitVectors(this.restDir,this.targetDir);let d=gu(.28+i*4,.24,.48);h.slerp(this.targetQ,d),c.quaternion.copy(h),c.updateMatrixWorld(!0)}}debugShow(e){this.ready&&(this.enabled=!0,this.wrapper.visible=!0,this.wrapper.position.set(0,-.1,e?e.position.z-1.8:0),this.wrapper.scale.setScalar(1),this.wrapper.quaternion.identity())}disposeModel(){this.model&&(this.wrapper.remove(this.model),this.model.traverse(e=>{if(e.geometry&&e.geometry.dispose?.(),e.material){let t=Array.isArray(e.material)?e.material:[e.material];for(let i of t)i.dispose?.()}}),this.model=null)}dispose(){this.disposeModel(),this.draco.dispose?.(),this.scene.remove(this.wrapper)}};var Ke={NOSE:0,L_EAR:7,R_EAR:8,L_SHOULDER:11,R_SHOULDER:12,L_ELBOW:13,R_ELBOW:14,L_WRIST:15,R_WRIST:16,L_INDEX:19,R_INDEX:20,L_HIP:23,R_HIP:24,L_KNEE:25,R_KNEE:26,L_ANKLE:27,R_ANKLE:28},Ji=(n,e,t)=>Math.min(t,Math.max(e,n)),ln=(n,e,t)=>n+(e-n)*t,kn=(n,e,t)=>({x:ln(n.x,e.x,t),y:ln(n.y,e.y,t),z:ln(n.z||0,e.z||0,t),visibility:Math.min(n.visibility??1,e.visibility??1)}),sm=class{constructor(){this.points=new Map}reset(){this.points.clear()}update(e,t){let i=[];for(let s=0;s<e.length;s++){let r=e[s],o=this.points.get(s);if(!o){let l={x:r.x,y:r.y,z:r.z||0,visibility:r.visibility??1};this.points.set(s,l),i[s]={...l};continue}let a=Math.hypot(r.x-o.x,r.y-o.y)/Math.max(.008,t),c=Ji(.18+a*.12,.18,.72);o.x=ln(o.x,r.x,c),o.y=ln(o.y,r.y,c),o.z=ln(o.z,r.z||0,c),o.visibility=ln(o.visibility,r.visibility??1,.35),i[s]={...o}}return i}},Qs=class{constructor(e,t,i,s,r){this.cols=t,this.rows=i,this.count=t*i,this.positions=new Float32Array(this.count*3),this.targets=new Float32Array(this.count*3),this.velocity=new Float32Array(this.count*3),this.weights=new Float32Array(this.count);let o=new Float32Array(this.count*2),a=[],[c,l,h,u]=s;for(let f=0;f<i;f++){let g=f/(i-1);for(let _=0;_<t;_++){let m=_/(t-1),p=f*t+_;o[p*2]=ln(c,h,m),o[p*2+1]=ln(l,u,g),this.weights[p]=Math.pow(g,1.65)}}for(let f=0;f<i-1;f++)for(let g=0;g<t-1;g++){let _=f*t+g,m=_+1,p=_+t,E=p+1;a.push(_,p,m,m,p,E)}let d=new un;d.setAttribute("position",new Tt(this.positions,3)),d.setAttribute("uv",new Tt(o,2)),d.setIndex(a),this.geometry=d,this.mesh=new Qt(d,r),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.initialized=!1,e.add(this.mesh)}setTarget(e){for(let t=0;t<this.rows;t++){let i=t/(this.rows-1);for(let s=0;s<this.cols;s++){let r=s/(this.cols-1),o=e(r,i),a=(t*this.cols+s)*3;this.targets[a]=o.x,this.targets[a+1]=o.y,this.targets[a+2]=o.z||0}}}snap(){this.positions.set(this.targets),this.velocity.fill(0),this.geometry.attributes.position.needsUpdate=!0}step(e,t,i=44,s=.78){if(!this.initialized){this.snap(),this.initialized=!0;return}let r=Ji(e,.008,.034);for(let o=0;o<this.count;o++){let a=o*3,c=this.weights[o],l=i*(1.35-c*.55),h=t*c*.12,u=-.012*c,d=this.velocity[a],f=this.velocity[a+1],g=this.velocity[a+2];d+=(this.targets[a]-this.positions[a])*l*r,f+=(this.targets[a+1]-this.positions[a+1])*l*r,g+=(this.targets[a+2]-this.positions[a+2])*l*r,d+=h*r,f+=u*r;let _=Math.pow(s,r*60);d*=_,f*=_,g*=_,this.velocity[a]=d,this.velocity[a+1]=f,this.velocity[a+2]=g,this.positions[a]+=d*r,this.positions[a+1]+=f*r,this.positions[a+2]+=g*r}this.geometry.attributes.position.needsUpdate=!0}setVisible(e){e&&!this.mesh.visible&&(this.initialized=!1),this.mesh.visible=e}dispose(){this.geometry.dispose()}},rm=class{constructor(){this.root=document.getElementById("ultraStudio"),this.root&&(this.video=document.getElementById("ultraVideo"),this.mount=document.getElementById("ultraWebgl"),this.occlusion=document.getElementById("ultraOcclusion"),this.guide=document.getElementById("ultraGuide"),this.idle=document.getElementById("ultraIdle"),this.loading=document.getElementById("ultraLoading"),this.startButton=document.getElementById("ultraStart"),this.switchButton=document.getElementById("ultraSwitch"),this.stopButton=document.getElementById("ultraStop"),this.snapshotButton=document.getElementById("ultraSnapshot"),this.physicsInput=document.getElementById("ultraPhysics"),this.riggedModeButtons=[...document.querySelectorAll("[data-ultra-render-mode]")],this.riggedModelButtons=[...document.querySelectorAll("[data-rigged-model]")],this.fpsLabel=document.getElementById("ultraFPS"),this.poseLabel=document.getElementById("ultraPose"),this.yawLabel=document.getElementById("ultraYaw"),this.garmentLabel=document.getElementById("ultraGarment"),this.engineLabel=document.getElementById("ultraEngine"),this.modeLabel=document.getElementById("ultraMode"),this.poseLandmarker=null,this.fileset=null,this.poseInterval=34,this.poseModelName="Full",this.renderer=null,this.scene=null,this.camera=null,this.riggedCamera=null,this.material=null,this.texture=null,this.grids={},this.riggedLayer=null,this.riggedMode=!0,this.riggedModel={name:"Basic Tee 3D",url:"/static/3d/garments/men/basictee/basictee_live.glb",sleeveReach:.74},this.running=!1,this.stream=null,this.facing="user",this.lastDetect=0,this.lastRender=performance.now(),this.lastPoseAt=0,this.poseLostFrames=0,this.poseLostFrameLimit=10,this.lastTorsoX=null,this.motionX=0,this.smoothYaw=0,this.frameCounter=0,this.fpsWindowStart=performance.now(),this.raf=0,this.smoother=new sm,this.landmarks=null,this.worldLandmarks=null,this.garment={name:"\u067E\u06CC\u0631\u0627\u0647\u0646 \u0633\u0631\u0645\u0647\u200C\u0627\u06CC",category:"tops",src:"/static/samples/shirt_navy.png",file:null,image:null,sleeveReach:.78},this.garmentVersion=0,this.initializedGarment=!1,this.poseReady=!1,this.occlusionCtx=this.occlusion.getContext("2d",{alpha:!0}),this.setupEvents(),this.syncInitialGarment(),this.syncFramingMode(),this.setButtons(!1),this.engineLabel.textContent="MediaPipe + WebGL")}setupEvents(){this.startButton.addEventListener("click",()=>this.start()),this.stopButton.addEventListener("click",()=>this.stop()),this.switchButton.addEventListener("click",()=>this.switchCamera()),this.snapshotButton.addEventListener("click",()=>this.snapshot()),this.riggedModeButtons.forEach(e=>{e.addEventListener("click",async()=>{let t=e.dataset.ultraRenderMode;if(this.riggedMode=t==="rigged",this.riggedModeButtons.forEach(i=>i.classList.toggle("active",i===e)),this.syncFramingMode(),this.riggedMode){if(this.garmentLabel.textContent=this.garment.name+" \u2022 3D",this.riggedLayer){this.loading.hidden=!1;try{await this.riggedLayer.load(this.riggedModel.url),this.riggedLayer.setTint(this.garmentTint()),this.riggedLayer.setEnabled(!0),this.setMode("Rigged 3D \u0622\u0645\u0627\u062F\u0647")}catch{this.setMode("\u0644\u0648\u062F \u0644\u0628\u0627\u0633 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F")}finally{this.loading.hidden=!0}}}else this.riggedLayer?.setEnabled(!1),this.garmentLabel.textContent=this.garment.name,this.renderer&&!this.texture&&this.prepareGarment().catch(i=>this.setMode("\u062E\u0637\u0627 \u062F\u0631 \u0644\u0628\u0627\u0633: "+i.message))})}),this.riggedModelButtons.forEach(e=>{e.addEventListener("click",async()=>{if(this.riggedModel={name:e.dataset.riggedName||e.textContent.trim(),url:e.dataset.riggedModel,sleeveReach:Number(e.dataset.sleeveReach||.75)},this.riggedModelButtons.forEach(t=>t.classList.toggle("active",t===e)),this.garmentLabel.textContent=this.garment.name+" \u2022 3D",this.riggedMode&&this.riggedLayer){this.loading.hidden=!1;try{await this.riggedLayer.load(this.riggedModel.url),this.riggedLayer.setTint(this.garmentTint()),this.riggedLayer.setEnabled(!0),this.setMode("\u0645\u062F\u0644 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u062A\u063A\u06CC\u06CC\u0631 \u06A9\u0631\u062F")}catch{this.setMode("\u0645\u062F\u0644 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u0644\u0648\u062F \u0646\u0634\u062F")}finally{this.loading.hidden=!0}}})}),window.addEventListener("tryposhak:garmentchange",e=>{let t=e.detail||{};this.garment.name=t.name||this.garment.name,this.garment.category=t.category||this.garment.category,this.garment.src=t.src||null,this.garment.file=t.file||null,this.garment.category==="bottoms"&&this.riggedMode&&(this.riggedMode=!1,this.riggedLayer?.setEnabled(!1),this.riggedModeButtons.forEach(i=>{i.classList.toggle("active",i.dataset.ultraRenderMode==="mesh2d")}),this.setMode("\u062D\u0627\u0644\u062A \u0634\u0644\u0648\u0627\u0631 \u0641\u0639\u0627\u0644 \u0634\u062F")),this.syncFramingMode(),this.riggedMode?(this.garmentLabel.textContent=this.garment.name+" \u2022 3D",this.riggedLayer?.setTint(this.garmentTint())):(this.garmentLabel.textContent=this.garment.name,this.prepareGarment().catch(i=>this.setMode("\u062E\u0637\u0627 \u062F\u0631 \u0644\u0628\u0627\u0633: "+i.message)))}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("pagehide",()=>this.stop(!1))}syncInitialGarment(){let e=document.querySelector(".product-card.active");e&&(this.garment.name=e.dataset.name||this.garment.name,this.garment.category=e.dataset.category||this.garment.category,this.garment.src=e.dataset.src||this.garment.src,this.garmentLabel.textContent=this.garment.name)}syncFramingMode(){let e=this.riggedMode||this.garment.category==="tops";this.root.classList.toggle("upper-body-mode",e);let t=this.guide?.querySelector("small");t&&(t.textContent=e?"\u0628\u0631\u0627\u06CC \u067E\u06CC\u0631\u0627\u0647\u0646 \u0633\u0631 \u0648 \u0647\u0631 \u062F\u0648 \u0634\u0627\u0646\u0647 \u06A9\u0627\u0641\u06CC \u0627\u0633\u062A\u061B \u0646\u0634\u0633\u062A\u0647 \u0647\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F":"\u0628\u0631\u0627\u06CC \u0634\u0644\u0648\u0627\u0631 \u0644\u06AF\u0646 \u0648 \u0632\u0627\u0646\u0648\u0647\u0627 \u062F\u0627\u062E\u0644 \u06A9\u0627\u062F\u0631 \u0628\u0627\u0634\u0646\u062F")}garmentTint(){let e=(this.garment.src||"").toLowerCase(),t=(this.garment.name||"").toLowerCase();return e.includes("shirt_white")||t.includes("\u0633\u0641\u06CC\u062F")?"#ecebe7":e.includes("tee_olive")||t.includes("\u0632\u06CC\u062A\u0648\u0646")?"#526547":e.includes("shirt_navy")||t.includes("\u0633\u0631\u0645\u0647")?"#173653":"#34495e"}setButtons(e){this.startButton.disabled=e,this.switchButton.disabled=!e,this.stopButton.disabled=!e,this.snapshotButton.disabled=!e}setMode(e){this.modeLabel&&(this.modeLabel.textContent=e)}async initPose(){if(this.poseLandmarker)return;this.setMode("\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC Body Tracker \u062F\u0642\u06CC\u0642...");let e=matchMedia("(pointer:coarse)").matches||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),i=new URLSearchParams(location.search).get("pose")==="heavy"&&!e?[{name:"Heavy",path:"/static/models/pose_landmarker_heavy.task",interval:44},{name:"Full",path:"/static/models/pose_landmarker_full.task",interval:36},{name:"Lite",path:"/static/models/pose_landmarker_lite.task",interval:30}]:[{name:"Full",path:"/static/models/pose_landmarker_full.task",interval:e?42:36},{name:"Lite",path:"/static/models/pose_landmarker_lite.task",interval:30}];try{this.fileset=await wr.forVisionTasks("/static/mediapipe/wasm");let s=null;for(let r of i)for(let o of["GPU","CPU"]){let a={baseOptions:{modelAssetPath:r.path,delegate:o},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.58,minPosePresenceConfidence:.56,minTrackingConfidence:.68,outputSegmentationMasks:!1};try{this.poseLandmarker=await xn.createFromOptions(this.fileset,a),this.poseInterval=r.interval,this.poseModelName=r.name,this.engineLabel.textContent=`MediaPipe ${r.name} ${o} + WebGL`,this.setMode(`Body Tracker ${r.name} \u0622\u0645\u0627\u062F\u0647`);return}catch(c){s=c}}throw s||new Error("Pose model unavailable")}catch(s){throw this.setMode("Body Tracker \u0644\u0648\u062F \u0646\u0634\u062F"),s}}initRenderer(){if(this.renderer)return;this.scene=new xa,this.camera=new ds(-1,1,1,-1,-10,10),this.camera.position.z=5,this.riggedCamera=new $t(50,1,.1,1e3),this.riggedCamera.position.set(0,0,2.5),this.riggedCamera.lookAt(0,0,0);let e=new Fa(16777215,.92);this.scene.add(e);let t=new fs(16777215,1.15);t.position.set(.5,1,2),this.scene.add(t);let i=new fs(14216447,.48);i.position.set(-.8,.6,1.8),this.scene.add(i);let s=new fs(16777215,.42);s.position.set(0,1,-2),this.scene.add(s),this.renderer=new ch({alpha:!0,antialias:!0,powerPreference:"high-performance",premultipliedAlpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),this.renderer.outputColorSpace=Et,this.renderer.toneMapping=vl,this.renderer.toneMappingExposure=1,this.mount.appendChild(this.renderer.domElement);let r=`
      varying vec2 vUv;
      varying float vDepth;
      void main() {
        vUv = uv;
        vDepth = position.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,o=`
      uniform sampler2D uMap;
      uniform float uYaw;
      uniform float uMotion;
      uniform float uTime;
      uniform float uOpacity;
      varying vec2 vUv;
      varying float vDepth;

      void main() {
        vec4 tex = texture2D(uMap, vUv);
        if (tex.a < 0.025) discard;

        float centerShade = 0.90 + 0.10 * cos((vUv.x - 0.5) * 3.14159);
        float turnShade = 1.0 + uYaw * (vUv.x - 0.5) * 0.22;
        float wrinkle = 1.0 + sin(vUv.y * 47.0 + vUv.x * 13.0 + uTime * 1.7) * 0.025 * min(uMotion, 1.0);
        float depthShade = 1.0 + vDepth * 0.09;
        vec3 color = tex.rgb * centerShade * turnShade * wrinkle * depthShade;
        gl_FragColor = vec4(color, tex.a * uOpacity);
      }
    `;this.material=new $n({transparent:!0,depthTest:!1,depthWrite:!1,side:yn,vertexShader:r,fragmentShader:o,uniforms:{uMap:{value:new Yt},uYaw:{value:0},uMotion:{value:0},uTime:{value:0},uOpacity:{value:.98}}}),this.grids.torso=new Qs(this.scene,13,17,[.18,.03,.82,.98],this.material),this.grids.leftSleeve=new Qs(this.scene,4,9,[0,.04,.36,.58],this.material),this.grids.rightSleeve=new Qs(this.scene,4,9,[.64,.04,1,.58],this.material),this.grids.waist=new Qs(this.scene,9,5,[.08,.02,.92,.34],this.material),this.grids.leftLeg=new Qs(this.scene,5,15,[.06,.25,.49,.99],this.material),this.grids.rightLeg=new Qs(this.scene,5,15,[.51,.25,.94,.99],this.material),this.riggedLayer=new yu(this.scene),this.resize()}async prewarm(){if(!(this.running||!this.riggedMode))try{this.initRenderer();let e=performance.now();await Promise.all([this.initPose(),this.riggedLayer.load(this.riggedModel.url)]),this.riggedLayer.setTint(this.garmentTint()),this.riggedLayer.setEnabled(!1);let t=Math.round(performance.now()-e);this.setMode(`\u0622\u0645\u0627\u062F\u0647 \u0634\u0631\u0648\u0639 \u2022 prewarm ${t}ms`)}catch{this.setMode("\u0622\u0645\u0627\u062F\u0647 \u0634\u0631\u0648\u0639")}}async start(){if(!this.running)try{this.loading.hidden=!1,this.idle.hidden=!0,await this.initPose(),this.initRenderer(),this.setMode("\u062F\u0631 \u062D\u0627\u0644 \u0622\u0645\u0627\u062F\u0647\u200C\u0633\u0627\u0632\u06CC \u0644\u0628\u0627\u0633..."),this.riggedMode?(await this.riggedLayer.load(this.riggedModel.url),this.riggedLayer.setTint(this.garmentTint()),this.riggedLayer.setEnabled(!0),this.garmentLabel.textContent=this.garment.name+" \u2022 3D"):await this.prepareGarment(),this.setMode("\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062F\u0633\u062A\u0631\u0633\u06CC \u062F\u0648\u0631\u0628\u06CC\u0646..."),await this.openCamera(),this.setMode("\u062F\u0648\u0631\u0628\u06CC\u0646 \u0622\u0645\u0627\u062F\u0647\u061B \u0634\u0631\u0648\u0639 \u0631\u0647\u06AF\u06CC\u0631\u06CC..."),this.running=!0,this.setButtons(!0),this.guide.hidden=!1,this.smoother.reset(),this.lastDetect=0,this.lastRender=performance.now(),this.frameCounter=0,this.fpsWindowStart=performance.now(),this.setMode("Ultra Live \u0641\u0639\u0627\u0644"),this.loop(performance.now())}catch(e){this.idle.hidden=!1,this.setMode(e.message||"\u0634\u0631\u0648\u0639 \u062F\u0648\u0631\u0628\u06CC\u0646 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F"),this.stopTracks()}finally{this.loading.hidden=!0}}async openCamera(){if(!navigator.mediaDevices?.getUserMedia)throw new Error("\u0645\u0631\u0648\u0631\u06AF\u0631 \u0627\u0632 \u062F\u0648\u0631\u0628\u06CC\u0646 \u0632\u0646\u062F\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC\u200C\u06A9\u0646\u062F");if(!window.isSecureContext&&!["localhost","127.0.0.1"].includes(location.hostname))throw new Error("\u0628\u0631\u0627\u06CC \u062F\u0648\u0631\u0628\u06CC\u0646 \u0631\u0648\u06CC \u0645\u0648\u0628\u0627\u06CC\u0644 HTTPS \u0644\u0627\u0632\u0645 \u0627\u0633\u062A");this.stopTracks();let e=(o,a=6500)=>{let c,l=new Promise((h,u)=>{c=setTimeout(()=>u(new Error("\u062F\u0633\u062A\u0631\u0633\u06CC \u062F\u0648\u0631\u0628\u06CC\u0646 \u0637\u0648\u0644 \u06A9\u0634\u06CC\u062F\u061B \u0645\u062C\u0648\u0632 Camera \u0645\u0631\u0648\u0631\u06AF\u0631 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646.")),a)});return Promise.race([navigator.mediaDevices.getUserMedia(o),l]).finally(()=>clearTimeout(c))},t=document.getElementById("ultraStage")?.getBoundingClientRect(),i=!!(t&&t.height>t.width),s={audio:!1,video:{facingMode:{ideal:this.facing},width:{ideal:i?720:960},height:{ideal:i?960:540},frameRate:{ideal:30,max:30}}};try{this.stream=await e(s)}catch(o){try{this.stream=await e({audio:!1,video:!0},4500)}catch{throw o}}this.video.srcObject=this.stream,this.video.readyState<1&&await Promise.race([new Promise(o=>{let a=()=>{this.video.removeEventListener("loadedmetadata",a),o()};this.video.addEventListener("loadedmetadata",a,{once:!0})}),new Promise(o=>setTimeout(o,1800))]);let r=this.video.play();r&&typeof r.then=="function"&&await Promise.race([r.catch(()=>{}),new Promise(o=>setTimeout(o,1800))]),this.applyMirror(),this.resize()}async switchCamera(){if(this.running){this.facing=this.facing==="user"?"environment":"user",this.loading.hidden=!1;try{await this.openCamera(),this.smoother.reset(),this.landmarks=null,this.worldLandmarks=null}finally{this.loading.hidden=!0}}}applyMirror(){let e=this.facing==="user"?"scaleX(-1)":"none";this.video.style.transform=e,this.renderer&&(this.renderer.domElement.style.transform=e),this.occlusion.style.transform=e}stopTracks(){this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.video.srcObject=null}stop(e=!0){this.running=!1,cancelAnimationFrame(this.raf),this.stopTracks(),this.hideGarment(),this.occlusionCtx.clearRect(0,0,this.occlusion.width,this.occlusion.height),this.landmarks=null,this.worldLandmarks=null,e&&(this.idle.hidden=!1,this.guide.hidden=!1,this.setButtons(!1),this.fpsLabel.textContent="\u2014",this.poseLabel.textContent="\u2014",this.yawLabel.textContent="\u2014",this.setMode("\u0622\u0645\u0627\u062F\u0647 \u0634\u0631\u0648\u0639"))}async prepareGarment(){let e=++this.garmentVersion,t;if(this.garment.file)t=this.garment.file;else if(this.garment.src){let o=await fetch(this.garment.src,{cache:"force-cache"});if(!o.ok)throw new Error("\u062A\u0635\u0648\u06CC\u0631 \u0644\u0628\u0627\u0633 \u062E\u0648\u0627\u0646\u062F\u0647 \u0646\u0634\u062F");let a=await o.blob();t=new File([a],"garment.png",{type:a.type||"image/png"})}else throw new Error("\u0644\u0628\u0627\u0633 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647");let i=new FormData;i.append("garment_image",t);let s=await fetch("/api/garment/prepare",{method:"POST",body:i}),r=await s.json().catch(()=>({}));if(!s.ok)throw new Error(r.detail||"\u0622\u0645\u0627\u062F\u0647\u200C\u0633\u0627\u0632\u06CC \u0644\u0628\u0627\u0633 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F");e===this.garmentVersion&&(this.garment.image=r.image,this.garment.sleeveReach=Number(r.sleeve_reach)||.78,this.garmentLabel.textContent=this.garment.name,this.renderer&&await this.loadTexture(r.image,e))}async loadTexture(e,t){let s=await new mr().loadAsync(e);if(t!==this.garmentVersion){s.dispose();return}s.colorSpace=Et,s.wrapS=Wn,s.wrapT=Wn,s.minFilter=an,s.magFilter=an,this.texture&&this.texture.dispose(),this.texture=s,this.material.uniforms.uMap.value=s}resize(){if(!this.root)return;let e=document.getElementById("ultraStage");if(!e)return;let t=e.getBoundingClientRect(),i=Math.max(1,Math.round(t.width)),s=Math.max(1,Math.round(t.height)),r=i/s;this.renderer&&(this.renderer.setSize(i,s,!1),this.camera.left=-r,this.camera.right=r,this.camera.top=1,this.camera.bottom=-1,this.camera.updateProjectionMatrix(),this.riggedCamera&&(this.riggedCamera.aspect=r,this.riggedCamera.updateProjectionMatrix()));let o=Math.min(window.devicePixelRatio||1,1.5);this.occlusion.width=Math.round(i*o),this.occlusion.height=Math.round(s*o),this.occlusion.style.width=i+"px",this.occlusion.style.height=s+"px",this.occlusionDpr=o}coverMetrics(){let t=document.getElementById("ultraStage").getBoundingClientRect(),i=t.width,s=t.height,r=this.video.videoWidth||i,o=this.video.videoHeight||s,a=Math.max(i/r,s/o),c=r*a,l=o*a;return{sw:i,sh:s,vw:r,vh:o,scale:a,ox:(i-c)/2,oy:(s-l)/2,aspect:i/s}}landmarkToPixel(e,t){return{x:t.ox+e.x*t.vw*t.scale,y:t.oy+e.y*t.vh*t.scale}}landmarkToWorld(e,t){let i=this.landmarkToPixel(e,t);return{x:(i.x/t.sw*2-1)*t.aspect,y:1-i.y/t.sh*2,z:e.z||0}}computeYaw(e){if(!e||!e[Ke.L_SHOULDER]||!e[Ke.R_SHOULDER])return this.smoothYaw;let t=e[Ke.L_SHOULDER],i=e[Ke.R_SHOULDER],s=(this.landmarks?.[Ke.L_HIP]?.visibility??0)>.28&&(this.landmarks?.[Ke.R_HIP]?.visibility??0)>.28,r=this.smoothYaw;if(s&&e[Ke.L_HIP]&&e[Ke.R_HIP]){let o=e[Ke.L_HIP],a=e[Ke.R_HIP],c=i.x-t.x,l=i.y-t.y,h=i.z-t.z,u=(t.x+i.x)*.5-(o.x+a.x)*.5,d=(t.y+i.y)*.5-(o.y+a.y)*.5,f=(t.z+i.z)*.5-(o.z+a.z)*.5,g=l*f-h*d,_=c*d-l*u;r=Math.atan2(g,Math.abs(_)+1e-5)}else{let o=Math.abs(i.x-t.x),a=i.z-t.z;r=Math.atan2(a,o+1e-5)*1.35}return r=Ji(r,-1,1),this.smoothYaw=ln(this.smoothYaw,r,.2),this.smoothYaw}poseQuality(e){let i=this.riggedMode||this.garment.category==="tops"?[0,11,12,13,14,15,16]:[23,24,25,26,27,28],s=0;for(let r of i)s+=e[r]?.visibility??0;return s/i.length}poseReadyForCurrentGarment(e){if(this.riggedMode||this.garment.category==="tops"){let s=e[Ke.L_SHOULDER]?.visibility??0,r=e[Ke.R_SHOULDER]?.visibility??0;return s>.28&&r>.28}return[Ke.L_HIP,Ke.R_HIP,Ke.L_KNEE,Ke.R_KNEE].every(s=>(e[s]?.visibility??0)>.28)}hideGarment(){Object.values(this.grids).forEach(e=>e?.setVisible(!1)),this.riggedLayer?.setEnabled(!1)}updateTopTargets(e,t,i){let s=this.landmarkToWorld(e[Ke.L_SHOULDER],t),r=this.landmarkToWorld(e[Ke.R_SHOULDER],t),o=this.landmarkToWorld(e[Ke.L_HIP],t),a=this.landmarkToWorld(e[Ke.R_HIP],t),c=this.landmarkToWorld(e[Ke.L_ELBOW],t),l=this.landmarkToWorld(e[Ke.R_ELBOW],t),h=this.landmarkToWorld(e[Ke.L_WRIST],t),u=this.landmarkToWorld(e[Ke.R_WRIST],t),d=Number(document.getElementById("scaleRange")?.value||100)/100,f=Number(document.getElementById("widthRange")?.value||100)/100,g=Number(document.getElementById("xRange")?.value||0)/100,_=Number(document.getElementById("yRange")?.value||0)/100,m=kn(s,r,.5),p=kn(o,a,.5),E=Math.hypot(r.x-s.x,r.y-s.y),b=Math.hypot(a.x-o.x,a.y-o.y),x=Math.hypot(p.x-m.x,p.y-m.y),A=.7+.3*Math.cos(Math.abs(i)),w=g*E*.8,C=-_*x*1.1;this.grids.torso.setVisible(!0),this.grids.leftSleeve.setVisible(!0),this.grids.rightSleeve.setVisible(!0),this.grids.waist.setVisible(!1),this.grids.leftLeg.setVisible(!1),this.grids.rightLeg.setVisible(!1),this.grids.torso.setTarget((O,B)=>{let G=kn(m,p,B*.98),X=ln(E*1.18,b*1.18,B)*f*d*A,V=O-.5,j=1-Math.sin(i)*V*.33,H=1+Math.pow(B,2.2)*.06,se=Math.cos(V*Math.PI)*.026*d;return{x:G.x+V*X*j*H+w+Math.sin(i)*x*(B-.45)*.05,y:G.y-B*x*(d-1)*.72+C-.015+B*-.025*d,z:se+Math.sin(i)*V*.07}});let D=Ji(this.garment.sleeveReach,.45,1.9),S=(O,B,G,X)=>D<=1?kn(O,B,D*X):X<.58?kn(O,B,X/.58):kn(B,G,(X-.58)/.42*(D-1)),M=(O,B,G)=>{let X=O==="left"?s:r,V=O==="left"?c:l,j=O==="left"?h:u,H=S(X,V,j,G),se=S(X,V,j,Ji(G+.04,0,1)),ue=se.x-H.x,be=se.y-H.y,qe=Math.hypot(ue,be)||1,yt=-be/qe,St=ue/qe,ct=O==="left"?-1:1,$=E*ln(.29,.18,G)*f*d,K=(B-.5)*$;return{x:H.x+yt*K+w+ct*E*.02,y:H.y+St*K+C,z:.015+Math.cos((B-.5)*Math.PI)*.012}};this.grids.leftSleeve.setTarget((O,B)=>M("left",O,B)),this.grids.rightSleeve.setTarget((O,B)=>M("right",O,B));let I=m.x;this.lastTorsoX!==null&&(this.motionX=ln(this.motionX,(I-this.lastTorsoX)*24,.28)),this.lastTorsoX=I}updateBottomTargets(e,t,i){let s=this.landmarkToWorld(e[Ke.L_HIP],t),r=this.landmarkToWorld(e[Ke.R_HIP],t),o=this.landmarkToWorld(e[Ke.L_KNEE],t),a=this.landmarkToWorld(e[Ke.R_KNEE],t),c=this.landmarkToWorld(e[Ke.L_ANKLE],t),l=this.landmarkToWorld(e[Ke.R_ANKLE],t),h=Number(document.getElementById("scaleRange")?.value||100)/100,u=Number(document.getElementById("widthRange")?.value||100)/100,d=Number(document.getElementById("xRange")?.value||0)/100,f=Number(document.getElementById("yRange")?.value||0)/100,g=kn(s,r,.5),_=Math.hypot(r.x-s.x,r.y-s.y),m=(Math.hypot(c.x-s.x,c.y-s.y)+Math.hypot(l.x-r.x,l.y-r.y))*.5,p=.72+.28*Math.cos(Math.abs(i)),E=d*_*.8,b=-f*m*.7;this.grids.torso.setVisible(!1),this.grids.leftSleeve.setVisible(!1),this.grids.rightSleeve.setVisible(!1),this.grids.waist.setVisible(!0),this.grids.leftLeg.setVisible(!0),this.grids.rightLeg.setVisible(!0),this.grids.waist.setTarget((A,w)=>{let C=kn(s,o,w*.18),D=kn(r,a,w*.18),S=kn(C,D,.5),M=_*u*h*p*ln(1.18,.92,w);return{x:S.x+(A-.5)*M+E,y:S.y+b-w*.025,z:Math.cos((A-.5)*Math.PI)*.018}});let x=(A,w,C)=>{let D=A==="left"?s:r,S=A==="left"?o:a,M=A==="left"?c:l,I;C<.48?I=kn(D,S,C/.48):I=kn(S,M,(C-.48)/.52);let O=_*ln(.42,.22,C)*u*h*p,B=C<.48?S.x-D.x:M.x-S.x,G=C<.48?S.y-D.y:M.y-S.y,X=Math.hypot(B,G)||1,V=-G/X,j=B/X,H=(w-.5)*O;return{x:I.x+V*H+E,y:I.y+j*H+b,z:Math.cos((w-.5)*Math.PI)*.014}};this.grids.leftLeg.setTarget((A,w)=>x("left",A,w)),this.grids.rightLeg.setTarget((A,w)=>x("right",A,w)),this.lastTorsoX!==null&&(this.motionX=ln(this.motionX,(g.x-this.lastTorsoX)*22,.28)),this.lastTorsoX=g.x}drawOcclusion(e,t){let i=this.occlusionCtx,s=this.occlusionDpr||1,r=t.sw,o=t.sh;i.setTransform(s,0,0,s,0,0),i.clearRect(0,0,r,o),i.save(),i.drawImage(this.video,t.ox,t.oy,t.vw*t.scale,t.vh*t.scale),i.globalCompositeOperation="destination-in",i.strokeStyle="#fff",i.fillStyle="#fff",i.lineCap="round",i.lineJoin="round";let a=A=>this.landmarkToPixel(e[A],t),c=a(Ke.L_SHOULDER),l=a(Ke.R_SHOULDER),h=a(Ke.L_ELBOW),u=a(Ke.R_ELBOW),d=a(Ke.L_WRIST),f=a(Ke.R_WRIST),g=Math.hypot(l.x-c.x,l.y-c.y),_=this.riggedMode?Ji(this.riggedModel.sleeveReach||.75,.45,1.9):this.garment.category==="tops"?Ji(this.garment.sleeveReach,.45,1.9):.2,m=(A,w,C)=>{let D;this.riggedMode||this.garment.category==="tops"?D=_<=1?kn(A,w,Ji(_,.35,.95)):kn(w,C,Ji(_-1,0,.88)):D=A,i.beginPath(),i.lineWidth=Math.max(12,g*.17),i.moveTo(D.x,D.y),i.lineTo(w.x,w.y),i.lineTo(C.x,C.y),i.stroke(),i.beginPath(),i.arc(C.x,C.y,Math.max(8,g*.09),0,Math.PI*2),i.fill()};m(c,h,d),m(l,u,f);let p=a(Ke.NOSE),E=a(Ke.L_EAR),b=a(Ke.R_EAR),x=Math.max(g*.34,Math.hypot(b.x-E.x,b.y-E.y)*.82);i.beginPath(),i.ellipse(p.x,p.y-g*.08,x,g*.34,0,0,Math.PI*2),i.fill(),i.restore()}updatePose(e){if(!this.poseLandmarker||this.video.readyState<2||e-this.lastDetect<this.poseInterval)return;this.lastDetect=e;let t=performance.now();try{let i=this.poseLandmarker.detectForVideo(this.video,e);if(!i.landmarks?.length){if(this.poseLostFrames+=1,this.landmarks&&this.poseLostFrames<=this.poseLostFrameLimit){this.poseLabel.textContent="Tracking\u2026";return}this.poseReady=!1,this.landmarks=null,this.hideGarment(),this.guide.hidden=!1,this.poseLabel.textContent="\u0634\u0627\u0646\u0647\u200C\u0647\u0627 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F";return}this.poseLostFrames=0;let s=this.lastPoseAt?(e-this.lastPoseAt)/1e3:1/30;this.lastPoseAt=e,this.landmarks=this.smoother.update(i.landmarks[0],s),this.worldLandmarks=i.worldLandmarks?.[0]||null;let r=this.poseQuality(this.landmarks);this.poseReady=this.poseReadyForCurrentGarment(this.landmarks),this.poseLabel.textContent=Math.round(r*100)+"\u066A",this.guide.hidden=this.poseReady;let o=performance.now()-t;this.engineLabel&&(this.engineLabel.dataset.ms=o.toFixed(0))}catch{this.setMode("\u062E\u0637\u0627\u06CC Body Tracker")}}renderGarment(e,t){if(!this.renderer||!this.poseReady||!this.landmarks){this.hideGarment(),this.renderer&&this.renderer.render(this.scene,this.camera);return}let i=this.coverMetrics(),s=this.computeYaw(this.worldLandmarks);if(this.riggedMode&&this.riggedLayer?.ready){Object.values(this.grids).forEach(c=>c?.setVisible(!1)),this.riggedLayer.setEnabled(!0),this.riggedLayer.update(this.landmarks,this.worldLandmarks,this.riggedCamera,i,s,e),this.renderer.render(this.scene,this.riggedCamera),this.drawOcclusion(this.landmarks,i),this.yawLabel.textContent=Math.round(s*180/Math.PI)+"\xB0";return}if(this.riggedLayer?.setEnabled(!1),!this.texture){this.hideGarment(),this.renderer.render(this.scene,this.camera);return}this.garment.category==="bottoms"?this.updateBottomTargets(this.landmarks,i,s):this.updateTopTargets(this.landmarks,i,s);let r=Number(this.physicsInput?.value||55)/100,o=ln(72,28,r),a=ln(.68,.84,r);Object.values(this.grids).forEach(c=>c?.mesh.visible&&c.step(e,this.motionX,o,a)),this.motionX*=.9,this.material.uniforms.uYaw.value=s,this.material.uniforms.uMotion.value=Math.min(1.2,Math.abs(this.motionX)*8),this.material.uniforms.uTime.value=t/1e3,this.renderer.render(this.scene,this.camera),this.drawOcclusion(this.landmarks,i),this.yawLabel.textContent=Math.round(s*180/Math.PI)+"\xB0"}loop(e){if(!this.running)return;let t=Ji((e-this.lastRender)/1e3,.008,.05);if(this.lastRender=e,this.updatePose(e),this.renderGarment(t,e),this.frameCounter++,e-this.fpsWindowStart>=1e3){let i=this.frameCounter*1e3/(e-this.fpsWindowStart);this.fpsLabel.textContent=i.toFixed(0)+" FPS",this.frameCounter=0,this.fpsWindowStart=e;let s=this.engineLabel?.dataset.ms;this.setMode(s?"Tracking "+s+"ms \u2022 Render Live":"Render Live")}this.raf=requestAnimationFrame(i=>this.loop(i))}async previewRiggedModel(){try{this.initRenderer(),this.idle.hidden=!0,this.loading.hidden=!1,await this.riggedLayer.load(this.riggedModel.url),this.riggedLayer.debugShow(this.riggedCamera),this.renderer.render(this.scene,this.riggedCamera),this.garmentLabel.textContent=this.riggedModel.name,this.setMode("3D Rigged Preview")}catch(e){this.setMode("\u062E\u0637\u0627\u06CC \u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC"),console.error(e)}finally{this.loading.hidden=!0}}snapshot(){if(!this.running)return;let t=document.getElementById("ultraStage").getBoundingClientRect(),i=document.createElement("canvas"),s=2;i.width=Math.round(t.width*s),i.height=Math.round(t.height*s);let r=i.getContext("2d"),o=this.coverMetrics();r.save(),this.facing==="user"&&(r.translate(i.width,0),r.scale(-1,1)),r.scale(s,s),r.drawImage(this.video,o.ox,o.oy,o.vw*o.scale,o.vh*o.scale),r.drawImage(this.renderer.domElement,0,0,t.width,t.height),r.drawImage(this.occlusion,0,0,t.width,t.height),r.restore();let a=document.createElement("a");a.download="try-poshak-ultra-"+Date.now()+".png",a.href=i.toDataURL("image/png",.95),a.click()}};function rv(){try{window.TryPoshakUltraLive=new rm;let n=new URLSearchParams(location.search);if(n.get("ultraTestView")==="1"&&document.body.classList.add("ultra-test-view"),!n.has("ultraAutoStart")&&!n.has("riggedPreview")){let e=()=>window.TryPoshakUltraLive?.prewarm();"requestIdleCallback"in window?requestIdleCallback(e,{timeout:1200}):setTimeout(e,700)}n.get("riggedPreview")==="1"?setTimeout(()=>{document.getElementById("ultraStudio")?.scrollIntoView({block:"start"}),window.TryPoshakUltraLive?.previewRiggedModel()},220):n.get("ultraAutoStart")==="1"&&setTimeout(()=>{document.getElementById("ultraStudio")?.scrollIntoView({block:"start"}),window.TryPoshakUltraLive?.start()},350)}catch(n){console.error("Ultra Live boot failed",n)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rv,{once:!0}):rv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
