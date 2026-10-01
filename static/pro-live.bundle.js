var TryPoshakUltra=(()=>{var Pf=0,zh=1,Lf=2;var Vh=1,Df=2,pi=3,Oi=0,un=1,Wn=2,zi=0,Ns=1,Hh=2,Gh=3,Wh=4,Uf=5,cs=100,Nf=101,Ff=102,Of=103,Bf=104,kf=200,zf=201,Vf=202,Hf=203,zo=204,Vo=205,Gf=206,Wf=207,Xf=208,$f=209,qf=210,Yf=211,Kf=212,Zf=213,Jf=214,hl=0,ul=1,dl=2,Fs=3,fl=4,pl=5,ml=6,gl=7,Xh=0,jf=1,Qf=2,Vi=0,ep=1,tp=2,np=3,ip=4,sp=5,rp=6,ap=7;var $h=300,zs=301,Vs=302,_l=303,vl=304,Fa=306,Ho=1e3,ni=1001,Go=1002,Hn=1003,op=1004;var Oa=1005;var _n=1006,yl=1007;var fs=1008;var mi=1009,qh=1010,Yh=1011,Nr=1012,xl=1013,ps=1014,gi=1015,Fr=1016,Ml=1017,Sl=1018,Or=1020,Kh=35902,Zh=35899,Jh=1021,jh=1022,Xn=1023,wr=1026,Br=1027,Qh=1028,bl=1029,eu=1030,El=1031;var Tl=1033,Ba=33776,ka=33777,za=33778,Va=33779,wl=35840,Al=35841,Rl=35842,Cl=35843,Il=36196,Pl=37492,Ll=37496,Dl=37808,Ul=37809,Nl=37810,Fl=37811,Ol=37812,Bl=37813,kl=37814,zl=37815,Vl=37816,Hl=37817,Gl=37818,Wl=37819,Xl=37820,$l=37821,ql=36492,Yl=36494,Kl=36495,Zl=36283,Jl=36284,jl=36285,Ql=36286;var ya=2300,Wo=2301,Bo=2302,Uh=2400,Nh=2401,Fh=2402;var lp=3200,cp=3201;var hp=0,up=1,Hi="",hn="srgb",Os="srgb-linear",xa="linear",ut="srgb";var Ds=7680;var Oh=519,dp=512,fp=513,pp=514,tu=515,mp=516,gp=517,_p=518,vp=519,Bh=35044;var nu="300 es",ii=2e3,Ma=2001;var Bi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uh=Math.PI/180,Xo=180/Math.PI;function Ha(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function G_(t,e){return(t%e+e)%e}function dh(t,e,n){return(1-n)*t+n*e}function pa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var dt=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ki=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*v,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let R=Math.sqrt(E),A=Math.atan2(R,f*T);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let S=o*T;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+v*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[n]=o*g+h*u+l*p-c*d,e[n+1]=l*g+h*d+c*u-o*p,e[n+2]=c*g+h*p+o*d-l*u,e[n+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pf.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fh=new k,pf=new ki,Ve=class t{constructor(e,n,i,s,r,a,o,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],T=s[1],E=s[4],S=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*v+o*T+l*R,r[3]=a*m+o*E+l*A,r[6]=a*f+o*S+l*C,r[1]=c*v+h*T+u*R,r[4]=c*m+h*E+u*A,r[7]=c*f+h*S+u*C,r[2]=d*v+p*T+g*R,r[5]=d*m+p*E+g*A,r[8]=d*f+p*S+g*C,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=n*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*n-s*l)*v,e[5]=(s*r-o*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ph.makeScale(e,n)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,n){return this.premultiply(ph.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ph=new Ve;function iu(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ar(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yp(){let t=Ar("canvas");return t.style.display="block",t}var mf={};function Rr(t){t in mf||(mf[t]=!0,console.warn(t))}function xp(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var gf=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W_(){let t={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Os]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),t}var et=W_();function Fi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var dr,$o=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{dr===void 0&&(dr=Ar("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=dr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Ar("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fi(n[i]/255)*255):n[i]=Fi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X_=0,Cr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mh(s[a].image)):r.push(mh(s[a]))}else r=mh(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function mh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$o.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $_=0,gh=new k,on=class t extends Bi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ni,s=ni,r=_n,a=fs,o=Xn,l=mi,c=t.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ha(),this.name="",this.source=new Cr(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ho:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ho:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=$h;on.DEFAULT_ANISOTROPY=1;var Lt=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let E=(c+1)/2,S=(p+1)/2,R=(f+1)/2,A=(h+d)/4,C=(u+v)/4,U=(g+m)/4;return E>S&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=C/i):S>R?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=U/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=U/r),this.set(i,s,r,n),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends Bi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);let s={width:e,height:n,depth:i.depth},r=new on(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Cr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends qo{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Sa=class extends on{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends on{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=class{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Mo.subVectors(this.max,ma),fr.subVectors(e.a,ma),pr.subVectors(e.b,ma),mr.subVectors(e.c,ma),ns.subVectors(pr,fr),is.subVectors(mr,pr),Cs.subVectors(fr,mr);let n=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Cs.z,Cs.y,ns.z,0,-ns.x,is.z,0,-is.x,Cs.z,0,-Cs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Cs.y,Cs.x,0];return!_h(n,fr,pr,mr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!_h(n,fr,pr,mr,Mo))?!1:(So.crossVectors(ns,is),n=[So.x,So.y,So.z],_h(n,fr,pr,mr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new k,new k,new k,new k,new k,new k,new k,new k],Qn=new k,xo=new hs,fr=new k,pr=new k,mr=new k,ns=new k,is=new k,Cs=new k,ma=new k,Mo=new k,So=new k,Is=new k;function _h(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Is.fromArray(t,r);let o=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),l=e.dot(Is),c=n.dot(Is),h=i.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var q_=new hs,ga=new k,vh=new k,Ir=class{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let n=ga.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ga,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(vh)),this.expandByPoint(ga.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Li=new k,yh=new k,bo=new k,ss=new k,xh=new k,Eo=new k,Mh=new k,Ko=class{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){yh.copy(e).add(n).multiplyScalar(.5),bo.copy(n).sub(e).normalize(),ss.copy(this.origin).sub(yh);let r=e.distanceTo(n)*.5,a=-this.direction.dot(bo),o=ss.dot(this.direction),l=-ss.dot(bo),c=ss.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(bo,d),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,s,r){xh.subVectors(n,e),Eo.subVectors(i,e),Mh.crossVectors(xh,Eo);let a=this.direction.dot(Mh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ss.subVectors(this.origin,e);let l=o*this.direction.dot(Eo.crossVectors(ss,Eo));if(l<0)return null;let c=o*this.direction.dot(xh.cross(ss));if(c<0||l+c>a)return null;let h=-o*ss.dot(Mh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class t{constructor(e,n,i,s,r,a,o,l,c,h,u,d,p,g,v,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(e,n,i,s,r,a,o,l,c,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,v=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,v=c*u;n[0]=d+v*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=p*o-g,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,v=c*u;n[0]=d-v*o,n[4]=-a*u,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*h,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,v=o*u;n[0]=l*h,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*u,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,v=o*c;n[0]=l*h,n[4]=v-d*u,n[8]=g*u+p,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*u+g,n[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,v=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=d*u+v,n[5]=a*h,n[9]=p*u-g,n[2]=g*u-p,n[6]=o*h,n[10]=v*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,K_)}lookAt(e,n,i){let s=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),rs.crossVectors(i,Cn),rs.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),rs.crossVectors(i,Cn)),rs.normalize(),To.crossVectors(Cn,rs),s[0]=rs.x,s[4]=To.x,s[8]=Cn.x,s[1]=rs.y,s[5]=To.y,s[9]=Cn.y,s[2]=rs.z,s[6]=To.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],T=i[3],E=i[7],S=i[11],R=i[15],A=s[0],C=s[4],U=s[8],M=s[12],x=s[1],P=s[5],F=s[9],O=s[13],G=s[2],X=s[6],H=s[10],J=s[14],V=s[3],se=s[7],ue=s[11],be=s[15];return r[0]=a*A+o*x+l*G+c*V,r[4]=a*C+o*P+l*X+c*se,r[8]=a*U+o*F+l*H+c*ue,r[12]=a*M+o*O+l*J+c*be,r[1]=h*A+u*x+d*G+p*V,r[5]=h*C+u*P+d*X+p*se,r[9]=h*U+u*F+d*H+p*ue,r[13]=h*M+u*O+d*J+p*be,r[2]=g*A+v*x+m*G+f*V,r[6]=g*C+v*P+m*X+f*se,r[10]=g*U+v*F+m*H+f*ue,r[14]=g*M+v*O+m*J+f*be,r[3]=T*A+E*x+S*G+R*V,r[7]=T*C+E*P+S*X+R*se,r[11]=T*U+E*F+S*H+R*ue,r[15]=T*M+E*O+S*J+R*be,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+n*l*p-n*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+n*c*u-n*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-n*l*u+n*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,R=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,A=n*T+i*E+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=T*C,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*C,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*C,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*C,e[4]=E*C,e[5]=(h*m*r-g*d*r+g*s*p-n*m*p-h*s*f+n*d*f)*C,e[6]=(g*l*r-a*m*r-g*s*c+n*m*c+a*s*f-n*l*f)*C,e[7]=(a*d*r-h*l*r+h*s*c-n*d*c-a*s*p+n*l*p)*C,e[8]=S*C,e[9]=(g*u*r-h*v*r-g*i*p+n*v*p+h*i*f-n*u*f)*C,e[10]=(a*v*r-g*o*r+g*i*c-n*v*c-a*i*f+n*o*f)*C,e[11]=(h*o*r-a*u*r-h*i*c+n*u*c+a*i*p-n*o*p)*C,e[12]=R*C,e[13]=(h*v*s-g*u*s+g*i*d-n*v*d-h*i*m+n*u*m)*C,e[14]=(g*o*s-a*v*s-g*i*l+n*v*l+a*i*m-n*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*l-n*u*l-a*i*d+n*o*d)*C,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,T=l*c,E=l*h,S=l*u,R=i.x,A=i.y,C=i.z;return s[0]=(1-(v+f))*R,s[1]=(p+S)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(d+f))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+E)*C,s[9]=(m-T)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=gr.set(s[0],s[1],s[2]).length(),a=gr.set(s[4],s[5],s[6]).length(),o=gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let c=1/r,h=1/a,u=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,n.setFromRotationMatrix(ei),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=ii,l=!1){let c=this.elements,h=2*r/(n-e),u=2*r/(i-s),d=(n+e)/(n-e),p=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===ii)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ma)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=ii,l=!1){let c=this.elements,h=2/(n-e),u=2/(i-s),d=-(n+e)/(n-e),p=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===ii)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ma)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},gr=new k,ei=new Wt,Y_=new k(0,0,0),K_=new k(1,1,1),rs=new k,To=new k,Cn=new k,vf=new Wt,yf=new ki,di=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z_=0,xf=new k,_r=new ki,Di=new Wt,wo=new k,_a=new k,J_=new k,j_=new ki,Mf=new k(1,0,0),Sf=new k(0,1,0),bf=new k(0,0,1),Ef={type:"added"},Q_={type:"removed"},vr={type:"childadded",child:null},Sh={type:"childremoved",child:null},Gn=class t extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new k,n=new di,i=new ki,s=new k(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Ve}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(Sf,e)}rotateZ(e){return this.rotateOnAxis(bf,e)}translateOnAxis(e,n){return xf.copy(e).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(Sf,e)}translateZ(e){return this.translateOnAxis(bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(_a,wo,this.up):Di.lookAt(wo,_a,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Di),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ef),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Q_),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ef),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Gn.DEFAULT_UP=new k(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new k,Ui=new k,bh=new k,Ni=new k,yr=new k,xr=new k,Tf=new k,Eh=new k,Th=new k,wh=new k,Ah=new Lt,Rh=new Lt,Ch=new Lt,ls=class t{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ti.subVectors(e,n),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){ti.subVectors(s,n),Ui.subVectors(i,n),bh.subVectors(e,n);let a=ti.dot(ti),o=ti.dot(Ui),l=ti.dot(bh),c=Ui.dot(Ui),h=Ui.dot(bh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Rh,r.y),a.addScaledVector(Ch,r.z),a}static isFrontFacing(e,n,i,s){return ti.subVectors(i,n),Ui.subVectors(e,n),ti.cross(Ui).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ti.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;yr.subVectors(s,i),xr.subVectors(r,i),Eh.subVectors(e,i);let l=yr.dot(Eh),c=xr.dot(Eh);if(l<=0&&c<=0)return n.copy(i);Th.subVectors(e,s);let h=yr.dot(Th),u=xr.dot(Th);if(h>=0&&u<=h)return n.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(yr,a);wh.subVectors(e,r);let p=yr.dot(wh),g=xr.dot(wh);if(g>=0&&p<=g)return n.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(xr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Tf.subVectors(r,s),o=(u-h)/(u-h+(p-g)),n.copy(s).addScaledVector(Tf,o);let f=1/(m+v+d);return a=v*f,o=d*f,n.copy(i).addScaledVector(yr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Ih(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var ot=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=et.workingColorSpace){if(e=G_(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Ih(a,r,e+1/3),this.g=Ih(a,r,e),this.b=Ih(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,n=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){let i=Mp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return et.workingToColorSpace(rn.copy(this),e),Math.round(Ke(rn.r*255,0,255))*65536+Math.round(Ke(rn.g*255,0,255))*256+Math.round(Ke(rn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(rn.copy(this),n);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=hn){et.workingToColorSpace(rn.copy(this),e);let n=rn.r,i=rn.g,s=rn.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+n,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(as),e.getHSL(Ao);let i=dh(as.h,Ao.h,n),s=dh(as.s,Ao.s,n),r=dh(as.l,Ao.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ot;ot.NAMES=Mp;var e1=0,Bs=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Ns,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Vo,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Vo&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ea=class extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new k,Ro=new dt,t1=0,an=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ro.fromBufferAttribute(this,n),Ro.applyMatrix3(e),this.setXY(n,Ro.x,Ro.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}};var Ta=class extends an{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var wa=class extends an{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var hi=class extends an{constructor(e,n,i){super(new Float32Array(e),n,i)}},n1=0,Vn=new Wt,Ph=new Gn,Mr=new k,In=new hs,va=new hs,Zt=new k,fi=class t extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?wa:Ta)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hi(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(In.min,va.min),In.expandByPoint(Zt),Zt.addVectors(In.max,va.max),In.expandByPoint(Zt)):(In.expandByPoint(va.min),In.expandByPoint(va.max))}In.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),Zt.add(Mr)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new k,l[U]=new k;let c=new k,h=new k,u=new k,d=new dt,p=new dt,g=new dt,v=new k,m=new k;function f(U,M,x){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[U].add(v),o[M].add(v),o[x].add(v),l[U].add(m),l[M].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,M=T.length;U<M;++U){let x=T[U],P=x.start,F=x.count;for(let O=P,G=P+F;O<G;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let E=new k,S=new k,R=new k,A=new k;function C(U){R.fromBufferAttribute(s,U),A.copy(R);let M=o[U];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(A,M);let P=S.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,P)}for(let U=0,M=T.length;U<M;++U){let x=T[U],P=x.start,F=x.count;for(let O=P,G=P+F;O<G;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wf=new Wt,Ps=new Ko,Co=new Ir,Af=new k,Io=new k,Po=new k,Lo=new k,Lh=new k,Do=new k,Rf=new k,Uo=new k,vn=class extends Gn{constructor(e=new fi,n=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Lh.fromBufferAttribute(u,e),a?Do.addScaledVector(Lh,h):Do.addScaledVector(Lh.sub(n),h))}n.add(Do)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(Co.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Co,Af)===null||Ps.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(wf.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(wf),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ps)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,R=E;S<R;S+=3){let A=o.getX(S),C=o.getX(S+1),U=o.getX(S+2);s=No(this,f,e,i,c,h,u,A,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let T=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=No(this,a,e,i,c,h,u,T,E,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,R=E;S<R;S+=3){let A=S,C=S+1,U=S+2;s=No(this,f,e,i,c,h,u,A,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let T=m,E=m+1,S=m+2;s=No(this,a,e,i,c,h,u,T,E,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function i1(t,e,n,i,s,r,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Uo);return c<n.near||c>n.far?null:{distance:c,point:Uo.clone(),object:t}}function No(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Io),t.getVertexPosition(l,Po),t.getVertexPosition(c,Lo);let h=i1(t,e,n,i,Io,Po,Lo,Rf);if(h){let u=new k;ls.getBarycoord(Rf,Io,Po,Lo,u),s&&(h.uv=ls.getInterpolatedAttribute(s,o,l,c,u,new dt)),r&&(h.uv1=ls.getInterpolatedAttribute(r,o,l,c,u,new dt)),a&&(h.normal=ls.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};ls.getNormal(Io,Po,Lo,d.normal),h.face=d,h.barycoord=u}return h}var Pr=class t extends fi{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hi(c,3)),this.setAttribute("normal",new hi(h,3)),this.setAttribute("uv",new hi(u,2));function g(v,m,f,T,E,S,R,A,C,U,M){let x=S/C,P=R/U,F=S/2,O=R/2,G=A/2,X=C+1,H=U+1,J=0,V=0,se=new k;for(let ue=0;ue<H;ue++){let be=ue*P-O;for(let We=0;We<X;We++){let pt=We*x-F;se[v]=pt*T,se[m]=be*E,se[f]=G,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[f]=A>0?1:-1,h.push(se.x,se.y,se.z),u.push(We/C),u.push(1-ue/U),J+=1}}for(let ue=0;ue<U;ue++)for(let be=0;be<C;be++){let We=d+be+X*ue,pt=d+be+X*(ue+1),_t=d+(be+1)+X*(ue+1),it=d+(be+1)+X*ue;l.push(We,pt,it),l.push(pt,_t,it),V+=6}o.addGroup(p,V,M),p+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function ln(t){let e={};for(let n=0;n<t.length;n++){let i=Hs(t[n]);for(let s in i)e[s]=i[s]}return e}function s1(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function su(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Sp={clone:Hs,merge:ln},r1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Aa=class extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new k,Cf=new dt,If=new dt,gn=class extends Aa{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,n){return this.getViewBounds(e,Cf,If),n.subVectors(If,Cf)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(uh*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Sr=-90,br=1,Zo=class extends Gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Sr,br,e,n);s.layers=this.layers,this.add(s);let r=new gn(Sr,br,e,n);r.layers=this.layers,this.add(r);let a=new gn(Sr,br,e,n);a.layers=this.layers,this.add(a);let o=new gn(Sr,br,e,n);o.layers=this.layers,this.add(o);let l=new gn(Sr,br,e,n);l.layers=this.layers,this.add(l);let c=new gn(Sr,br,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ra=class extends on{constructor(e=[],n=zs,i,s,r,a,o,l,c,h){super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jo=class extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ra(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pr(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:zi});r.uniforms.tEquirect.value=n;let a=new vn(s,r),o=n.minFilter;return n.minFilter===fs&&(n.minFilter=_n),new Zo(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},Us=class extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},o1={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=n.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}};var Ca=class extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Dh=new k,l1=new k,c1=new Ve,ci=class{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Dh.subVectors(i,n).cross(l1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Dh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||c1.getNormalMatrix(e),s=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ls=new Ir,h1=new dt(.5,.5),Fo=new k,Ia=class{constructor(e=new ci,n=new ci,i=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],T=r[12],E=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-a,p-h,f-g,R-T).normalize(),s[1].setComponents(c+a,p+h,f+g,R+T).normalize(),s[2].setComponents(c+o,p+u,f+v,R+E).normalize(),s[3].setComponents(c-o,p-u,f-v,R-E).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,p-d,f-m,R-S).normalize();else if(s[4].setComponents(c-l,p-d,f-m,R-S).normalize(),n===ii)s[5].setComponents(c+l,p+d,f+m,R+S).normalize();else if(n===Ma)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let n=h1.distanceTo(e.center);return Ls.radius=.7071067811865476+n,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Fo.x=s.normal.x>0?e.max.x:e.min.x,Fo.y=s.normal.y>0?e.max.y:e.min.y,Fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pa=class extends on{constructor(e,n,i=ps,s,r,a,o=Hn,l=Hn,c,h=wr,u=1){if(h!==wr&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:n,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},La=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Da=class t extends fi{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=n/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let T=f*d-a;for(let E=0;E<c;E++){let S=E*u-r;g.push(S,-T,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){let E=T+c*f,S=T+c*(f+1),R=T+1+c*(f+1),A=T+1+c*f;p.push(E,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(v,3)),this.setAttribute("uv",new hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var jo=class extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qo=class extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function u1(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var ks=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break t}a=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends ks{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,o=2*n-i;break;case Fh:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:a=e,l=2*i-n;break;case Fh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,T=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-p)*m+(1.5+p)*v+.5*g,S=p*m-p*v;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+T*a[c+R]+E*a[l+R]+S*a[u+R];return r}},tl=class extends ks{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(s-n),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},nl=class extends ks{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(n,this.TimeBufferType),this.values=Oo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case ya:n=this.InterpolantFactoryMethodDiscrete;break;case Wo:n=this.InterpolantFactoryMethodLinear;break;case Bo:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&u1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=n[u+g];if(v!==n[d+g]||v!==n[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)n[d+p]=n[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Wo;var us=class extends Ln{constructor(e,n,i){super(e,n,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=ya;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Ln{constructor(e,n,i,s){super(e,n,i,s)}};il.prototype.ValueTypeName="color";var sl=class extends Ln{constructor(e,n,i,s){super(e,n,i,s)}};sl.prototype.ValueTypeName="number";var rl=class extends ks{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let h=c+o;c!==h;c+=4)ki.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ua=class extends Ln{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Ln{constructor(e,n,i){super(e,n,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ya;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Ln{constructor(e,n,i,s){super(e,n,i,s)}};al.prototype.ValueTypeName="vector";var ko={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},ol=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bp=new ol,Dr=class{constructor(e){this.manager=e!==void 0?e:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=new WeakMap,ll=class extends Dr{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ko.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);else{let u=Er.get(a);u===void 0&&(u=[],Er.set(a,u)),u.push({onLoad:n,onError:s})}return a}let o=Ar("img");function l(){h(),n&&n(this);let u=Er.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Er.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ko.remove(`image:${e}`);let d=Er.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}Er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ko.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Na=class extends Dr{constructor(e){super(e)}load(e,n,i,s){let r=new on,a=new ll(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}};var Ur=class extends Aa{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var cl=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ru="\\[\\]\\.:\\/",d1=new RegExp("["+ru+"]","g"),au="[^"+ru+"]",f1="[^"+ru.replace("\\.","")+"]",p1=/((?:WC+[\/:])*)/.source.replace("WC",au),m1=/(WCOD+)?/.source.replace("WCOD",f1),g1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),_1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),v1=new RegExp("^"+p1+m1+g1+_1+"$"),y1=["material","materials","bones","map"],kh=class{constructor(e,n,i){let s=i||Mt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Mt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d1,"")}static parseTrackName(e){let n=v1.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);y1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=kh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cb=new Float32Array(1);function ou(t,e,n,i){let s=x1(i);switch(n){case Jh:return t*e;case Qh:return t*e/s.components*s.byteLength;case bl:return t*e/s.components*s.byteLength;case eu:return t*e*2/s.components*s.byteLength;case El:return t*e*2/s.components*s.byteLength;case jh:return t*e*3/s.components*s.byteLength;case Xn:return t*e*4/s.components*s.byteLength;case Tl:return t*e*4/s.components*s.byteLength;case Ba:case ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case za:case Va:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(t,16)*Math.max(e,8)/4;case wl:case Rl:return Math.max(t,8)*Math.max(e,8)/2;case Il:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ql:case Yl:case Kl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zl:case Jl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jl:case Ql:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x1(t){switch(t){case mi:case qh:return{byteLength:1,components:1};case Nr:case Yh:case Fr:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case ps:case xl:case gi:return{byteLength:4,components:1};case Kh:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function qp(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function S1(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E1=`#ifdef USE_ALPHAHASH
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
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
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
#endif`,I1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
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
#endif`,L1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F1=`#ifdef USE_IRIDESCENCE
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
#endif`,O1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$1=`#define PI 3.141592653589793
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
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y1=`vec3 transformedNormal = objectNormal;
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
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hv=`#ifdef USE_GRADIENTMAP
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
}`,uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
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
#endif`,Mv=`struct PhysicalMaterial {
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
}`,Sv=`
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lv=`#if defined( USE_POINTS_UV )
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
#endif`,Dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,ky=`#define LAMBERT
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
}`,zy=`#define MATCAP
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
}`,Vy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define PHONG
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
}`,$y=`#define STANDARD
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
}`,qy=`#define STANDARD
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
}`,Yy=`#define TOON
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
}`,Ky=`#define TOON
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
}`,Zy=`uniform float size;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,ex=`uniform float rotation;
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
}`,tx=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:b1,alphahash_pars_fragment:E1,alphamap_fragment:T1,alphamap_pars_fragment:w1,alphatest_fragment:A1,alphatest_pars_fragment:R1,aomap_fragment:C1,aomap_pars_fragment:I1,batching_pars_vertex:P1,batching_vertex:L1,begin_vertex:D1,beginnormal_vertex:U1,bsdfs:N1,iridescence_fragment:F1,bumpmap_pars_fragment:O1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:k1,clipping_planes_pars_vertex:z1,clipping_planes_vertex:V1,color_fragment:H1,color_pars_fragment:G1,color_pars_vertex:W1,color_vertex:X1,common:$1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:K1,displacementmap_vertex:Z1,emissivemap_fragment:J1,emissivemap_pars_fragment:j1,colorspace_fragment:Q1,colorspace_pars_fragment:ev,envmap_fragment:tv,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:mv,envmap_vertex:rv,fog_vertex:av,fog_pars_vertex:ov,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:hv,lightmap_pars_fragment:uv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:fv,lights_pars_begin:pv,lights_toon_fragment:gv,lights_toon_pars_fragment:_v,lights_phong_fragment:vv,lights_phong_pars_fragment:yv,lights_physical_fragment:xv,lights_physical_pars_fragment:Mv,lights_fragment_begin:Sv,lights_fragment_maps:bv,lights_fragment_end:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Iv,map_particle_fragment:Pv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Dv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Nv,morphcolor_vertex:Fv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Bv,morphtarget_vertex:kv,normal_fragment_begin:zv,normal_fragment_maps:Vv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:Yv,iridescence_pars_fragment:Kv,opaque_fragment:Zv,packing:Jv,premultiplied_alpha_fragment:jv,project_vertex:Qv,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:hy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:yy,uv_vertex:xy,worldpos_vertex:My,background_vert:Sy,background_frag:by,backgroundCube_vert:Ey,backgroundCube_frag:Ty,cube_vert:wy,cube_frag:Ay,depth_vert:Ry,depth_frag:Cy,distanceRGBA_vert:Iy,distanceRGBA_frag:Py,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Uy,linedashed_frag:Ny,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:By,meshlambert_frag:ky,meshmatcap_vert:zy,meshmatcap_frag:Vy,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:$y,meshphysical_frag:qy,meshtoon_vert:Yy,meshtoon_frag:Ky,points_vert:Zy,points_frag:Jy,shadow_vert:jy,shadow_frag:Qy,sprite_vert:ex,sprite_frag:tx},ae={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},_i={basic:{uniforms:ln([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:ln([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:ln([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:ln([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:ln([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:ln([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:ln([ae.points,ae.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:ln([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:ln([ae.common,ae.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:ln([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:ln([ae.sprite,ae.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:ln([ae.common,ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:ln([ae.lights,ae.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_i.physical={uniforms:ln([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var ec={r:0,b:0,g:0},Gs=new di,nx=new Wt;function ix(t,e,n,i,s,r,a){let o=new ot(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?n:e).get(S)),S}function v(E){let S=!1,R=g(E);R===null?f(o,l):R&&R.isColor&&(f(R,1),S=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===Fa)?(h===void 0&&(h=new vn(new Pr(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Hs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gs.copy(S.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nx.makeRotationFromEuler(Gs)),h.material.toneMapped=et.getTransfer(R.colorSpace)!==ut,(u!==R||d!==R.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=t.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new vn(new Da(2,2),new Pn({name:"BackgroundMaterial",uniforms:Hs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,S){E.getRGB(ec,su(t)),i.buffers.color.setClear(ec.r,ec.g,ec.b,S,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m,dispose:T}}function sx(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(x,P,F,O,G){let X=!1,H=u(O,F,P);r!==H&&(r=H,c(r.object)),X=p(x,O,F,G),X&&g(x,O,F,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(x,P,F,O),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function h(x){return t.deleteVertexArray(x)}function u(x,P,F){let O=F.wireframe===!0,G=i[x.id];G===void 0&&(G={},i[x.id]=G);let X=G[P.id];X===void 0&&(X={},G[P.id]=X);let H=X[O];return H===void 0&&(H=d(l()),X[O]=H),H}function d(x){let P=[],F=[],O=[];for(let G=0;G<n;G++)P[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,P,F,O){let G=r.attributes,X=P.attributes,H=0,J=F.getAttributes();for(let V in J)if(J[V].location>=0){let ue=G[V],be=X[V];if(be===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),ue===void 0||ue.attribute!==be||be&&ue.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(x,P,F,O){let G={},X=P.attributes,H=0,J=F.getAttributes();for(let V in J)if(J[V].location>=0){let ue=X[V];ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));let be={};be.attribute=ue,ue&&ue.data&&(be.data=ue.data),G[V]=be,H++}r.attributes=G,r.attributesNum=H,r.index=O}function v(){let x=r.newAttributes;for(let P=0,F=x.length;P<F;P++)x[P]=0}function m(x){f(x,0)}function f(x,P){let F=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;F[x]=1,O[x]===0&&(t.enableVertexAttribArray(x),O[x]=1),G[x]!==P&&(t.vertexAttribDivisor(x,P),G[x]=P)}function T(){let x=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==x[F]&&(t.disableVertexAttribArray(F),P[F]=0)}function E(x,P,F,O,G,X,H){H===!0?t.vertexAttribIPointer(x,P,F,G,X):t.vertexAttribPointer(x,P,F,O,G,X)}function S(x,P,F,O){v();let G=O.attributes,X=F.getAttributes(),H=P.defaultAttributeValues;for(let J in X){let V=X[J];if(V.location>=0){let se=G[J];if(se===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let ue=se.normalized,be=se.itemSize,We=e.get(se);if(We===void 0)continue;let pt=We.buffer,_t=We.type,it=We.bytesPerElement,q=_t===t.INT||_t===t.UNSIGNED_INT||se.gpuType===xl;if(se.isInterleavedBufferAttribute){let K=se.data,ge=K.stride,Oe=se.offset;if(K.isInstancedInterleavedBuffer){for(let Re=0;Re<V.locationSize;Re++)f(V.location+Re,K.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Re=0;Re<V.locationSize;Re++)m(V.location+Re);t.bindBuffer(t.ARRAY_BUFFER,pt);for(let Re=0;Re<V.locationSize;Re++)E(V.location+Re,be/V.locationSize,_t,ue,ge*it,(Oe+be/V.locationSize*Re)*it,q)}else{if(se.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)f(V.location+K,se.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);t.bindBuffer(t.ARRAY_BUFFER,pt);for(let K=0;K<V.locationSize;K++)E(V.location+K,be/V.locationSize,_t,ue,be*it,be/V.locationSize*K*it,q)}}else if(H!==void 0){let ue=H[J];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(V.location,ue);break;case 3:t.vertexAttrib3fv(V.location,ue);break;case 4:t.vertexAttrib4fv(V.location,ue);break;default:t.vertexAttrib1fv(V.location,ue)}}}}T()}function R(){U();for(let x in i){let P=i[x];for(let F in P){let O=P[F];for(let G in O)h(O[G].object),delete O[G];delete P[F]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;let P=i[x.id];for(let F in P){let O=P[F];for(let G in O)h(O[G].object),delete O[G];delete P[F]}delete i[x.id]}function C(x){for(let P in i){let F=i[P];if(F[x.id]===void 0)continue;let O=F[x.id];for(let G in O)h(O[G].object),delete O[G];delete F[x.id]}}function U(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function rx(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];n.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ax(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Xn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let U=C===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==mi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!U)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function ox(t){let e=this,n=null,i=0,s=!1,r=!1,a=new ci,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=t.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:i,E=T*4,S=f.clippingState||null;l.value=S,S=h(g,d,E,p);for(let R=0;R!==E;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,S=p;E!==v;++E,S+=4)a.copy(u[E]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function lx(t){let e=new WeakMap;function n(a,o){return o===_l?a.mapping=zs:o===vl&&(a.mapping=Vs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===_l||o===vl)if(e.has(a)){let l=e.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Jo(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var zr=4,Ep=[.125,.215,.35,.446,.526,.582],$s=20,lu=new Ur,Tp=new ot,cu=null,hu=0,uu=0,du=!1,Xs=(1+Math.sqrt(5))/2,kr=1/Xs,wp=[new k(-Xs,kr,0),new k(Xs,kr,0),new k(-kr,0,Xs),new k(kr,0,Xs),new k(0,Xs,-kr),new k(0,Xs,kr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],cx=new k,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=cx}=r;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Fr,format:Xn,colorSpace:Os,depthBuffer:!1},s=Ap(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(r)),this._blurMaterial=ux(r,e,n)}return s}_compileMaterial(e){let n=new vn(this._lodPlanes[0],e);this._renderer.compile(n,lu)}_sceneToCubeUV(e,n,i,s,r){let l=new gn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Tp),u.toneMapping=Vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Ea({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new vn(new Pr,v),f=!1,T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,f=!0):(v.color.copy(Tp),f=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let R=this._cubeSize;tc(s,S*R,E>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=T}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===zs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new vn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;tc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,lu)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wp[(s-r-1)%wp.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new vn(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$s-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);let f=[],T=0;for(let C=0;C<$s;++C){let U=C/v,M=Math.exp(-U*U/2);f.push(M),C===0?T+=M:C<m&&(T+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;let S=this._sizeLods[s],R=3*S*(s>E-zr?s-E+zr:0),A=4*(this._cubeSize-S);tc(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(u,lu)}};function hx(t){let e=[],n=[],i=[],s=t,r=t-zr+1+Ep.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>t-zr?l=Ep[a-t+zr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),E=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,U=A>2?0:-1,M=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];T.set(M,v*g*A),E.set(d,m*g*A);let x=[A,A,A,A,A,A];S.set(x,f*g*A)}let R=new fi;R.setAttribute("position",new an(T,v)),R.setAttribute("uv",new an(E,m)),R.setAttribute("faceIndex",new an(S,f)),e.push(R),s>zr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ap(t,e,n){let i=new ui(t,e,n);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tc(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function ux(t,e,n){let i=new Float32Array($s),s=new k(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rp(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Cp(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function dx(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===_l||l===vl,h=l===zs||l===Vs;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new ic(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new ic(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function fx(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function px(t,e,n,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let T=p.array;v=p.version;for(let E=0,S=T.length;E<S;E+=3){let R=T[E+0],A=T[E+1],C=T[E+2];d.push(R,A,A,C,C,R)}}else if(g!==void 0){let T=g.array;v=g.version;for(let E=0,S=T.length/3-1;E<S;E+=3){let R=E+0,A=E+1,C=E+2;d.push(R,A,A,C,C,R)}}else return;let m=new(iu(d)?wa:Ta)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mx(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,r,d*a),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,r,d*a,g),n.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function u(d,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];n.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gx(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function _x(t,e,n){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=o.attributes.position.count*E,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*R*4*u),C=new Sa(A,S,R,u);C.type=gi,C.needsUpdate=!0;let U=E*4;for(let x=0;x<u;x++){let P=m[x],F=f[x],O=T[x],G=S*R*4*x;for(let X=0;X<P.count;X++){let H=X*U;p===!0&&(s.fromBufferAttribute(P,X),A[G+H+0]=s.x,A[G+H+1]=s.y,A[G+H+2]=s.z,A[G+H+3]=0),g===!0&&(s.fromBufferAttribute(F,X),A[G+H+4]=s.x,A[G+H+5]=s.y,A[G+H+6]=s.z,A[G+H+7]=0),v===!0&&(s.fromBufferAttribute(O,X),A[G+H+8]=s.x,A[G+H+9]=s.y,A[G+H+10]=s.z,A[G+H+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new dt(S,R)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function vx(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var Yp=new on,Ip=new Pa(1,1),Kp=new Sa,Zp=new Yo,Jp=new Ra,Pp=[],Lp=[],Dp=new Float32Array(16),Up=new Float32Array(9),Np=new Float32Array(4);function Hr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Pp[s];if(r===void 0&&(r=new Float32Array(s),Pp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=Lp[e];n===void 0&&(n=new Int32Array(e),Lp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yx(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xx(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function Mx(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function Sx(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function bx(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Np.set(i),t.uniformMatrix2fv(this.addr,!1,Np),$t(n,i)}}function Ex(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Up.set(i),t.uniformMatrix3fv(this.addr,!1,Up),$t(n,i)}}function Tx(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Dp.set(i),t.uniformMatrix4fv(this.addr,!1,Dp),$t(n,i)}}function wx(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ax(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function Rx(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function Cx(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function Ix(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Px(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function Lx(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function Dx(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function Ux(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Ip.compareFunction=tu,r=Ip):r=Yp,n.setTexture2D(e||r,s)}function Nx(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Zp,s)}function Fx(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Jp,s)}function Ox(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Kp,s)}function Bx(t){switch(t){case 5126:return yx;case 35664:return xx;case 35665:return Mx;case 35666:return Sx;case 35674:return bx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Ix;case 36294:return Px;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}function kx(t,e){t.uniform1fv(this.addr,e)}function zx(t,e){let n=Hr(e,this.size,2);t.uniform2fv(this.addr,n)}function Vx(t,e){let n=Hr(e,this.size,3);t.uniform3fv(this.addr,n)}function Hx(t,e){let n=Hr(e,this.size,4);t.uniform4fv(this.addr,n)}function Gx(t,e){let n=Hr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Wx(t,e){let n=Hr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Xx(t,e){let n=Hr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $x(t,e){t.uniform1iv(this.addr,e)}function qx(t,e){t.uniform2iv(this.addr,e)}function Yx(t,e){t.uniform3iv(this.addr,e)}function Kx(t,e){t.uniform4iv(this.addr,e)}function Zx(t,e){t.uniform1uiv(this.addr,e)}function Jx(t,e){t.uniform2uiv(this.addr,e)}function jx(t,e){t.uniform3uiv(this.addr,e)}function Qx(t,e){t.uniform4uiv(this.addr,e)}function e2(t,e,n){let i=this.cache,s=e.length,r=rc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||Yp,r[a])}function t2(t,e,n){let i=this.cache,s=e.length,r=rc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Zp,r[a])}function n2(t,e,n){let i=this.cache,s=e.length,r=rc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Jp,r[a])}function i2(t,e,n){let i=this.cache,s=e.length,r=rc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Kp,r[a])}function s2(t){switch(t){case 5126:return kx;case 35664:return zx;case 35665:return Vx;case 35666:return Hx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return $x;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return Kx;case 5125:return Zx;case 36294:return Jx;case 36295:return jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}var pu=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Bx(n.type)}},mu=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s2(n.type)}},gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;function Fp(t,e){t.seq.push(e),t.map[e.id]=e}function r2(t,e,n){let i=t.name,s=i.length;for(fu.lastIndex=0;;){let r=fu.exec(i),a=fu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fp(n,c===void 0?new pu(o,t,e):new mu(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new gu(o),Fp(n,u)),n=u}}}var Vr=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);r2(r,a,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function Op(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var a2=37297,o2=0;function l2(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Bp=new Ve;function c2(t){et._getMatrix(Bp,et.workingColorSpace,t);let e=`mat3( ${Bp.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case xa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kp(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+l2(t.getShaderSource(e),o)}else return r}function h2(t,e){let n=c2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function u2(t,e){let n;switch(e){case ep:n="Linear";break;case tp:n="Reinhard";break;case np:n="Cineon";break;case ip:n="ACESFilmic";break;case rp:n="AgX";break;case ap:n="Neutral";break;case sp:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var nc=new k;function d2(){et.getLuminanceCoefficients(nc);let t=nc.x.toFixed(4),e=nc.y.toFixed(4),n=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function p2(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function m2(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ga(t){return t!==""}function zp(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g2=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(t){return t.replace(g2,v2)}var _2=new Map;function v2(t,e){let n=$e[e];if(n===void 0){let i=_2.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _u(n)}var y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(t){return t.replace(y2,x2)}function x2(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function S2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function E2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case jf:e="ENVMAP_BLENDING_MIX";break;case Qf:e="ENVMAP_BLENDING_ADD";break}return e}function T2(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function w2(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=M2(n),c=S2(n),h=b2(n),u=E2(n),d=T2(n),p=f2(n),g=p2(r),v=s.createProgram(),m,f,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ga).join(`
`),f.length>0&&(f+=`
`)):(m=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),f=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?$e.tonemapping_pars_fragment:"",n.toneMapping!==Vi?u2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,h2("linearToOutputTexel",n.outputColorSpace),d2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ga).join(`
`)),a=_u(a),a=zp(a,n),a=Vp(a,n),o=_u(o),o=zp(o,n),o=Vp(o,n),a=Hp(a),o=Hp(o),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=T+m+a,S=T+f+o,R=Op(s,s.VERTEX_SHADER,E),A=Op(s,s.FRAGMENT_SHADER,S);s.attachShader(v,R),s.attachShader(v,A),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(t.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(R)||"",G=s.getShaderInfoLog(A)||"",X=F.trim(),H=O.trim(),J=G.trim(),V=!0,se=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,R,A);else{let ue=kp(s,R,"vertex"),be=kp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+ue+`
`+be)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||J==="")&&(se=!1);se&&(P.diagnostics={runnable:V,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(R),s.deleteShader(A),U=new Vr(s,v),M=m2(s,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,a2)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=o2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}var A2=0,vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new yu(e),n.set(e,i)),i}},yu=class{constructor(e){this.id=A2++,this.code=e,this.usedTimes=0}};function R2(t,e,n,i,s,r,a){let o=new ba,l=new vu,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,F,O){let G=F.fog,X=O.geometry,H=M.isMeshStandardMaterial?F.environment:null,J=(M.isMeshStandardMaterial?n:e).get(M.envMap||H),V=J&&J.mapping===Fa?J.image.height:null,se=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=ue!==void 0?ue.length:0,We=0;X.morphAttributes.position!==void 0&&(We=1),X.morphAttributes.normal!==void 0&&(We=2),X.morphAttributes.color!==void 0&&(We=3);let pt,_t,it,q;if(se){let ht=_i[se];pt=ht.vertexShader,_t=ht.fragmentShader}else pt=M.vertexShader,_t=M.fragmentShader,l.update(M),it=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);let K=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),Oe=O.isInstancedMesh===!0,Re=O.isBatchedMesh===!0,Je=!!M.map,nn=!!M.matcap,w=!!J,Et=!!M.aoMap,ze=!!M.lightMap,Ne=!!M.bumpMap,xe=!!M.normalMap,Tt=!!M.displacementMap,Me=!!M.emissiveMap,Xe=!!M.metalnessMap,Kt=!!M.roughnessMap,Nt=M.anisotropy>0,b=M.clearcoat>0,_=M.dispersion>0,N=M.iridescence>0,$=M.sheen>0,Z=M.transmission>0,W=Nt&&!!M.anisotropyMap,Ae=b&&!!M.clearcoatMap,ie=b&&!!M.clearcoatNormalMap,Se=b&&!!M.clearcoatRoughnessMap,Ee=N&&!!M.iridescenceMap,ee=N&&!!M.iridescenceThicknessMap,ce=$&&!!M.sheenColorMap,Ue=$&&!!M.sheenRoughnessMap,Te=!!M.specularMap,oe=!!M.specularColorMap,He=!!M.specularIntensityMap,I=Z&&!!M.transmissionMap,te=Z&&!!M.thicknessMap,re=!!M.gradientMap,pe=!!M.alphaMap,j=M.alphaTest>0,Y=!!M.alphaHash,ye=!!M.extensions,Be=Vi;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Be=t.toneMapping);let vt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:_t,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Re,batchingColor:Re&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Os,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:nn,envMap:w,envMapMode:w&&J.mapping,envMapCubeUVHeight:V,aoMap:Et,lightMap:ze,bumpMap:Ne,normalMap:xe,displacementMap:d&&Tt,emissiveMap:Me,normalMapObjectSpace:xe&&M.normalMapType===up,normalMapTangentSpace:xe&&M.normalMapType===hp,metalnessMap:Xe,roughnessMap:Kt,anisotropy:Nt,anisotropyMap:W,clearcoat:b,clearcoatMap:Ae,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:_,iridescence:N,iridescenceMap:Ee,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:ce,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:oe,specularIntensityMap:He,transmission:Z,transmissionMap:I,thicknessMap:te,gradientMap:re,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:j,alphaHash:Y,combine:M.combine,mapUv:Je&&v(M.map.channel),aoMapUv:Et&&v(M.aoMap.channel),lightMapUv:ze&&v(M.lightMap.channel),bumpMapUv:Ne&&v(M.bumpMap.channel),normalMapUv:xe&&v(M.normalMap.channel),displacementMapUv:Tt&&v(M.displacementMap.channel),emissiveMapUv:Me&&v(M.emissiveMap.channel),metalnessMapUv:Xe&&v(M.metalnessMap.channel),roughnessMapUv:Kt&&v(M.roughnessMap.channel),anisotropyMapUv:W&&v(M.anisotropyMap.channel),clearcoatMapUv:Ae&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(M.sheenRoughnessMap.channel),specularMapUv:Te&&v(M.specularMap.channel),specularColorMapUv:oe&&v(M.specularColorMap.channel),specularIntensityMapUv:He&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:te&&v(M.thicknessMap.channel),alphaMapUv:pe&&v(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xe||Nt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Je||pe),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wn,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function f(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(x,M),E(x,M),x.push(t.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let x=g[M.type],P;if(x){let F=_i[x];P=Sp.clone(F.uniforms)}else P=M.uniforms;return P}function R(M,x){let P;for(let F=0,O=h.length;F<O;F++){let G=h[F];if(G.cacheKey===x){P=G,++P.usedTimes;break}}return P===void 0&&(P=new w2(t,x,M,r),h.push(P)),P}function A(M){if(--M.usedTimes===0){let x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:U}}function C2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function I2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xp(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u,d,p,g,v,m){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},t[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function l(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function c(u,d){n.length>1&&n.sort(u||I2),i.length>1&&i.sort(d||Wp),s.length>1&&s.sort(d||Wp)}function h(){for(let u=e,d=t.length;u<d;u++){let p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function P2(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new Xp,t.set(i,[a])):s>=r.length?(a=new Xp,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function L2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ot};break;case"SpotLight":n={position:new k,direction:new k,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function D2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var U2=0;function N2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function F2(t){let e=new L2,n=D2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new Wt,a=new Wt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,E=0,S=0,R=0,A=0,C=0;c.sort(N2);for(let M=0,x=c.length;M<x;M++){let P=c[M],F=P.color,O=P.intensity,G=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],O);C++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,V=n.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=H,p++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=G,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[v]=H;let J=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=J.matrix,P.castShadow){let V=n.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=X,S++}v++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let J=P.shadow,V=n.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=H,g++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=C,i.version=U2++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){let E=c[f];if(E.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function $p(t){let e=new F2(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function O2(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new $p(t),e.set(s,[o])):r>=a.length?(o=new $p(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var B2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k2=`uniform sampler2D shadow_pass;
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
}`;function z2(t,e,n){let i=new Ia,s=new dt,r=new dt,a=new Lt,o=new jo({depthPacking:cp}),l=new Qo,c={},h=n.maxTextureSize,u={[Oi]:un,[un]:Oi,[Wn]:Wn},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:B2,fragmentShader:k2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new fi;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let f=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=t.getRenderTarget(),x=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=f!==pi&&this.type===pi,G=f===pi&&this.type!==pi;for(let X=0,H=A.length;X<H;X++){let J=A[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||O===!0||G===!0){let be=this.type!==pi?{minFilter:Hn,magFilter:Hn}:{};V.map!==null&&V.map.dispose(),V.map=new ui(s.x,s.y,be),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();let ue=V.getViewportCount();for(let be=0;be<ue;be++){let We=V.getViewport(be);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),F.viewport(a),V.updateMatrices(J,be),i=V.getFrustum(),S(C,U,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===pi&&T(V,U),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(M,x,P)};function T(A,C){let U=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,U,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,U,p,v,null)}function E(A,C,U,M){let x=null,P=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)x=P;else if(x=U.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=x.uuid,O=C.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let X=G[O];X===void 0&&(X=x.clone(),G[O]=X,C.addEventListener("dispose",R)),x=X}if(x.visible=C.visible,x.wireframe=C.wireframe,M===pi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let F=t.properties.get(x);F.light=U}return x}function S(A,C,U,M,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let O=e.update(A),G=A.material;if(Array.isArray(G)){let X=O.groups;for(let H=0,J=X.length;H<J;H++){let V=X[H],se=G[V.materialIndex];if(se&&se.visible){let ue=E(A,se,M,x);A.onBeforeShadow(t,A,C,U,O,ue,V),t.renderBufferDirect(U,null,O,ue,A,V),A.onAfterShadow(t,A,C,U,O,ue,V)}}}else if(G.visible){let X=E(A,G,M,x);A.onBeforeShadow(t,A,C,U,O,X,null),t.renderBufferDirect(U,null,O,X,A,null),A.onAfterShadow(t,A,C,U,O,X,null)}}let F=A.children;for(let O=0,G=F.length;O<G;O++)S(F[O],C,U,M,x)}function R(A){A.target.removeEventListener("dispose",R);for(let U in c){let M=c[U],x=A.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var V2={[hl]:ul,[dl]:ml,[fl]:gl,[Fs]:pl,[ul]:hl,[ml]:dl,[gl]:fl,[pl]:Fs};function H2(t,e){function n(){let I=!1,te=new Lt,re=null,pe=new Lt(0,0,0,0);return{setMask:function(j){re!==j&&!I&&(t.colorMask(j,j,j,j),re=j)},setLocked:function(j){I=j},setClear:function(j,Y,ye,Be,vt){vt===!0&&(j*=Be,Y*=Be,ye*=Be),te.set(j,Y,ye,Be),pe.equals(te)===!1&&(t.clearColor(j,Y,ye,Be),pe.copy(te))},reset:function(){I=!1,re=null,pe.set(-1,0,0,0)}}}function i(){let I=!1,te=!1,re=null,pe=null,j=null;return{setReversed:function(Y){if(te!==Y){let ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),te=Y;let Be=j;j=null,this.setClear(Be)}},getReversed:function(){return te},setTest:function(Y){Y?K(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(Y){re!==Y&&!I&&(t.depthMask(Y),re=Y)},setFunc:function(Y){if(te&&(Y=V2[Y]),pe!==Y){switch(Y){case hl:t.depthFunc(t.NEVER);break;case ul:t.depthFunc(t.ALWAYS);break;case dl:t.depthFunc(t.LESS);break;case Fs:t.depthFunc(t.LEQUAL);break;case fl:t.depthFunc(t.EQUAL);break;case pl:t.depthFunc(t.GEQUAL);break;case ml:t.depthFunc(t.GREATER);break;case gl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Y}},setLocked:function(Y){I=Y},setClear:function(Y){j!==Y&&(te&&(Y=1-Y),t.clearDepth(Y),j=Y)},reset:function(){I=!1,re=null,pe=null,j=null,te=!1}}}function s(){let I=!1,te=null,re=null,pe=null,j=null,Y=null,ye=null,Be=null,vt=null;return{setTest:function(ht){I||(ht?K(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(ht){te!==ht&&!I&&(t.stencilMask(ht),te=ht)},setFunc:function(ht,Ii,li){(re!==ht||pe!==Ii||j!==li)&&(t.stencilFunc(ht,Ii,li),re=ht,pe=Ii,j=li)},setOp:function(ht,Ii,li){(Y!==ht||ye!==Ii||Be!==li)&&(t.stencilOp(ht,Ii,li),Y=ht,ye=Ii,Be=li)},setLocked:function(ht){I=ht},setClear:function(ht){vt!==ht&&(t.clearStencil(ht),vt=ht)},reset:function(){I=!1,te=null,re=null,pe=null,j=null,Y=null,ye=null,Be=null,vt=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,S=null,R=null,A=null,C=new ot(0,0,0),U=0,M=!1,x=null,P=null,F=null,O=null,G=null,X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=J>=2);let se=null,ue={},be=t.getParameter(t.SCISSOR_BOX),We=t.getParameter(t.VIEWPORT),pt=new Lt().fromArray(be),_t=new Lt().fromArray(We);function it(I,te,re,pe){let j=new Uint8Array(4),Y=t.createTexture();t.bindTexture(I,Y),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<re;ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,j):t.texImage2D(te+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,j);return Y}let q={};q[t.TEXTURE_2D]=it(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=it(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=it(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=it(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(t.DEPTH_TEST),a.setFunc(Fs),Ne(!1),xe(zh),K(t.CULL_FACE),Et(zi);function K(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function ge(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function Oe(I,te){return u[I]!==te?(t.bindFramebuffer(I,te),u[I]=te,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=te),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=te),!0):!1}function Re(I,te){let re=p,pe=!1;if(I){re=d.get(te),re===void 0&&(re=[],d.set(te,re));let j=I.textures;if(re.length!==j.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,ye=j.length;Y<ye;Y++)re[Y]=t.COLOR_ATTACHMENT0+Y;re.length=j.length,pe=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,pe=!0);pe&&t.drawBuffers(re)}function Je(I){return g!==I?(t.useProgram(I),g=I,!0):!1}let nn={[cs]:t.FUNC_ADD,[Nf]:t.FUNC_SUBTRACT,[Ff]:t.FUNC_REVERSE_SUBTRACT};nn[Of]=t.MIN,nn[Bf]=t.MAX;let w={[kf]:t.ZERO,[zf]:t.ONE,[Vf]:t.SRC_COLOR,[zo]:t.SRC_ALPHA,[qf]:t.SRC_ALPHA_SATURATE,[Xf]:t.DST_COLOR,[Gf]:t.DST_ALPHA,[Hf]:t.ONE_MINUS_SRC_COLOR,[Vo]:t.ONE_MINUS_SRC_ALPHA,[$f]:t.ONE_MINUS_DST_COLOR,[Wf]:t.ONE_MINUS_DST_ALPHA,[Yf]:t.CONSTANT_COLOR,[Kf]:t.ONE_MINUS_CONSTANT_COLOR,[Zf]:t.CONSTANT_ALPHA,[Jf]:t.ONE_MINUS_CONSTANT_ALPHA};function Et(I,te,re,pe,j,Y,ye,Be,vt,ht){if(I===zi){v===!0&&(ge(t.BLEND),v=!1);return}if(v===!1&&(K(t.BLEND),v=!0),I!==Uf){if(I!==m||ht!==M){if((f!==cs||S!==cs)&&(t.blendEquation(t.FUNC_ADD),f=cs,S=cs),ht)switch(I){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFunc(t.ONE,t.ONE);break;case Gh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Gh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,R=null,A=null,C.set(0,0,0),U=0,m=I,M=ht}return}j=j||te,Y=Y||re,ye=ye||pe,(te!==f||j!==S)&&(t.blendEquationSeparate(nn[te],nn[j]),f=te,S=j),(re!==T||pe!==E||Y!==R||ye!==A)&&(t.blendFuncSeparate(w[re],w[pe],w[Y],w[ye]),T=re,E=pe,R=Y,A=ye),(Be.equals(C)===!1||vt!==U)&&(t.blendColor(Be.r,Be.g,Be.b,vt),C.copy(Be),U=vt),m=I,M=!1}function ze(I,te){I.side===Wn?ge(t.CULL_FACE):K(t.CULL_FACE);let re=I.side===un;te&&(re=!re),Ne(re),I.blending===Ns&&I.transparent===!1?Et(zi):Et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(I){x!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),x=I)}function xe(I){I!==Pf?(K(t.CULL_FACE),I!==P&&(I===zh?t.cullFace(t.BACK):I===Lf?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),P=I}function Tt(I){I!==F&&(H&&t.lineWidth(I),F=I)}function Me(I,te,re){I?(K(t.POLYGON_OFFSET_FILL),(O!==te||G!==re)&&(t.polygonOffset(te,re),O=te,G=re)):ge(t.POLYGON_OFFSET_FILL)}function Xe(I){I?K(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function Kt(I){I===void 0&&(I=t.TEXTURE0+X-1),se!==I&&(t.activeTexture(I),se=I)}function Nt(I,te,re){re===void 0&&(se===null?re=t.TEXTURE0+X-1:re=se);let pe=ue[re];pe===void 0&&(pe={type:void 0,texture:void 0},ue[re]=pe),(pe.type!==I||pe.texture!==te)&&(se!==re&&(t.activeTexture(re),se=re),t.bindTexture(I,te||q[I]),pe.type=I,pe.texture=te)}function b(){let I=ue[se];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){pt.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),pt.copy(I))}function Ue(I){_t.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),_t.copy(I))}function Te(I,te){let re=c.get(te);re===void 0&&(re=new WeakMap,c.set(te,re));let pe=re.get(I);pe===void 0&&(pe=t.getUniformBlockIndex(te,I.name),re.set(I,pe))}function oe(I,te){let pe=c.get(te).get(I);l.get(te)!==pe&&(t.uniformBlockBinding(te,pe,I.__bindingPointIndex),l.set(te,pe))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},se=null,ue={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,S=null,R=null,A=null,C=new ot(0,0,0),U=0,M=!1,x=null,P=null,F=null,O=null,G=null,pt.set(0,0,t.canvas.width,t.canvas.height),_t.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ge,bindFramebuffer:Oe,drawBuffers:Re,useProgram:Je,setBlending:Et,setMaterial:ze,setFlipSided:Ne,setCullFace:xe,setLineWidth:Tt,setPolygonOffset:Me,setScissorTest:Xe,activeTexture:Kt,bindTexture:Nt,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Ee,texImage3D:ee,updateUBOMapping:Te,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:Se,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:Ae,scissor:ce,viewport:Ue,reset:He}}function G2(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Ar("canvas")}function v(b,_,N){let $=1,Z=Nt(b);if((Z.width>N||Z.height>N)&&($=N/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let W=Math.floor($*Z.width),Ae=Math.floor($*Z.height);u===void 0&&(u=g(W,Ae));let ie=_?g(W,Ae):u;return ie.width=W,ie.height=Ae,ie.getContext("2d").drawImage(b,0,0,W,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+Ae+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){t.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(b,_,N,$,Z=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=_;if(_===t.RED&&(N===t.FLOAT&&(W=t.R32F),N===t.HALF_FLOAT&&(W=t.R16F),N===t.UNSIGNED_BYTE&&(W=t.R8)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.R8UI),N===t.UNSIGNED_SHORT&&(W=t.R16UI),N===t.UNSIGNED_INT&&(W=t.R32UI),N===t.BYTE&&(W=t.R8I),N===t.SHORT&&(W=t.R16I),N===t.INT&&(W=t.R32I)),_===t.RG&&(N===t.FLOAT&&(W=t.RG32F),N===t.HALF_FLOAT&&(W=t.RG16F),N===t.UNSIGNED_BYTE&&(W=t.RG8)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.RG8UI),N===t.UNSIGNED_SHORT&&(W=t.RG16UI),N===t.UNSIGNED_INT&&(W=t.RG32UI),N===t.BYTE&&(W=t.RG8I),N===t.SHORT&&(W=t.RG16I),N===t.INT&&(W=t.RG32I)),_===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.RGB8UI),N===t.UNSIGNED_SHORT&&(W=t.RGB16UI),N===t.UNSIGNED_INT&&(W=t.RGB32UI),N===t.BYTE&&(W=t.RGB8I),N===t.SHORT&&(W=t.RGB16I),N===t.INT&&(W=t.RGB32I)),_===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),N===t.UNSIGNED_INT&&(W=t.RGBA32UI),N===t.BYTE&&(W=t.RGBA8I),N===t.SHORT&&(W=t.RGBA16I),N===t.INT&&(W=t.RGBA32I)),_===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),_===t.RGBA){let Ae=Z?xa:et.getTransfer($);N===t.FLOAT&&(W=t.RGBA32F),N===t.HALF_FLOAT&&(W=t.RGBA16F),N===t.UNSIGNED_BYTE&&(W=Ae===ut?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(b,_){let N;return b?_===null||_===ps||_===Or?N=t.DEPTH24_STENCIL8:_===gi?N=t.DEPTH32F_STENCIL8:_===Nr&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ps||_===Or?N=t.DEPTH_COMPONENT24:_===gi?N=t.DEPTH_COMPONENT32F:_===Nr&&(N=t.DEPTH_COMPONENT16),N}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Hn&&b.minFilter!==_n?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){let _=b.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function C(b){let _=b.target;_.removeEventListener("dispose",C),x(_)}function U(b){let _=i.get(b);if(_.__webglInit===void 0)return;let N=b.source,$=d.get(N);if($){let Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys($).length===0&&d.delete(N)}i.remove(b)}function M(b){let _=i.get(b);t.deleteTexture(_.__webglTexture);let N=b.source,$=d.get(N);delete $[_.__cacheKey],a.memory.textures--}function x(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)t.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=b.textures;for(let $=0,Z=N.length;$<Z;$++){let W=i.get(N[$]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(N[$])}i.remove(b)}let P=0;function F(){P=0}function O(){let b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function G(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function X(b,_){let N=i.get(b);if(b.isVideoTexture&&Xe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,b,_);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function H(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){q(N,b,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function J(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){q(N,b,_);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function V(b,_){let N=i.get(b);if(b.version>0&&N.__version!==b.version){K(N,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}let se={[Ho]:t.REPEAT,[ni]:t.CLAMP_TO_EDGE,[Go]:t.MIRRORED_REPEAT},ue={[Hn]:t.NEAREST,[op]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[yl]:t.LINEAR_MIPMAP_NEAREST,[fs]:t.LINEAR_MIPMAP_LINEAR},be={[dp]:t.NEVER,[vp]:t.ALWAYS,[fp]:t.LESS,[tu]:t.LEQUAL,[pp]:t.EQUAL,[_p]:t.GEQUAL,[mp]:t.GREATER,[gp]:t.NOTEQUAL};function We(b,_){if(_.type===gi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===_n||_.magFilter===yl||_.magFilter===Oa||_.magFilter===fs||_.minFilter===_n||_.minFilter===yl||_.minFilter===Oa||_.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,se[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,se[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,se[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ue[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Hn||_.minFilter!==Oa&&_.minFilter!==fs||_.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function pt(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));let $=_.source,Z=d.get($);Z===void 0&&(Z={},d.set($,Z));let W=G(_);if(W!==b.__cacheKey){Z[W]===void 0&&(Z[W]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[W].usedTimes++;let Ae=Z[b.__cacheKey];Ae!==void 0&&(Z[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(_)),b.__cacheKey=W,b.__webglTexture=Z[W].texture}return N}function _t(b,_,N){return Math.floor(Math.floor(b/N)/_)}function it(b,_,N,$){let W=b.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,N,$,_.data);else{W.sort((ee,ce)=>ee.start-ce.start);let Ae=0;for(let ee=1;ee<W.length;ee++){let ce=W[Ae],Ue=W[ee],Te=ce.start+ce.count,oe=_t(Ue.start,_.width,4),He=_t(ce.start,_.width,4);Ue.start<=Te+1&&oe===He&&_t(Ue.start+Ue.count-1,_.width,4)===oe?ce.count=Math.max(ce.count,Ue.start+Ue.count-ce.start):(++Ae,W[Ae]=Ue)}W.length=Ae+1;let ie=t.getParameter(t.UNPACK_ROW_LENGTH),Se=t.getParameter(t.UNPACK_SKIP_PIXELS),Ee=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let ee=0,ce=W.length;ee<ce;ee++){let Ue=W[ee],Te=Math.floor(Ue.start/4),oe=Math.ceil(Ue.count/4),He=Te%_.width,I=Math.floor(Te/_.width),te=oe,re=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,He,I,te,re,N,$,_.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ie),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function q(b,_,N){let $=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=t.TEXTURE_3D);let Z=pt(b,_),W=_.source;n.bindTexture($,b.__webglTexture,t.TEXTURE0+N);let Ae=i.get(W);if(W.version!==Ae.__version||Z===!0){n.activeTexture(t.TEXTURE0+N);let ie=et.getPrimaries(et.workingColorSpace),Se=_.colorSpace===Hi?null:et.getPrimaries(_.colorSpace),Ee=_.colorSpace===Hi||ie===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ee=v(_.image,!1,s.maxTextureSize);ee=Kt(_,ee);let ce=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),Te=E(_.internalFormat,ce,Ue,_.colorSpace,_.isVideoTexture);We($,_);let oe,He=_.mipmaps,I=_.isVideoTexture!==!0,te=Ae.__version===void 0||Z===!0,re=W.dataReady,pe=R(_,ee);if(_.isDepthTexture)Te=S(_.format===Br,_.type),te&&(I?n.texStorage2D(t.TEXTURE_2D,1,Te,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,ce,Ue,null));else if(_.isDataTexture)if(He.length>0){I&&te&&n.texStorage2D(t.TEXTURE_2D,pe,Te,He[0].width,He[0].height);for(let j=0,Y=He.length;j<Y;j++)oe=He[j],I?re&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,oe.width,oe.height,ce,Ue,oe.data):n.texImage2D(t.TEXTURE_2D,j,Te,oe.width,oe.height,0,ce,Ue,oe.data);_.generateMipmaps=!1}else I?(te&&n.texStorage2D(t.TEXTURE_2D,pe,Te,ee.width,ee.height),re&&it(_,ee,ce,Ue)):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,ce,Ue,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Te,He[0].width,He[0].height,ee.depth);for(let j=0,Y=He.length;j<Y;j++)if(oe=He[j],_.format!==Xn)if(ce!==null)if(I){if(re)if(_.layerUpdates.size>0){let ye=ou(oe.width,oe.height,_.format,_.type);for(let Be of _.layerUpdates){let vt=oe.data.subarray(Be*ye/oe.data.BYTES_PER_ELEMENT,(Be+1)*ye/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,Be,oe.width,oe.height,1,ce,vt)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Te,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ce,Ue,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Te,oe.width,oe.height,ee.depth,0,ce,Ue,oe.data)}else{I&&te&&n.texStorage2D(t.TEXTURE_2D,pe,Te,He[0].width,He[0].height);for(let j=0,Y=He.length;j<Y;j++)oe=He[j],_.format!==Xn?ce!==null?I?re&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,oe.width,oe.height,ce,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Te,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,oe.width,oe.height,ce,Ue,oe.data):n.texImage2D(t.TEXTURE_2D,j,Te,oe.width,oe.height,0,ce,Ue,oe.data)}else if(_.isDataArrayTexture)if(I){if(te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Te,ee.width,ee.height,ee.depth),re)if(_.layerUpdates.size>0){let j=ou(ee.width,ee.height,_.format,_.type);for(let Y of _.layerUpdates){let ye=ee.data.subarray(Y*j/ee.data.BYTES_PER_ELEMENT,(Y+1)*j/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ce,Ue,ye)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ue,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,ce,Ue,ee.data);else if(_.isData3DTexture)I?(te&&n.texStorage3D(t.TEXTURE_3D,pe,Te,ee.width,ee.height,ee.depth),re&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ue,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,ce,Ue,ee.data);else if(_.isFramebufferTexture){if(te)if(I)n.texStorage2D(t.TEXTURE_2D,pe,Te,ee.width,ee.height);else{let j=ee.width,Y=ee.height;for(let ye=0;ye<pe;ye++)n.texImage2D(t.TEXTURE_2D,ye,Te,j,Y,0,ce,Ue,null),j>>=1,Y>>=1}}else if(He.length>0){if(I&&te){let j=Nt(He[0]);n.texStorage2D(t.TEXTURE_2D,pe,Te,j.width,j.height)}for(let j=0,Y=He.length;j<Y;j++)oe=He[j],I?re&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ce,Ue,oe):n.texImage2D(t.TEXTURE_2D,j,Te,ce,Ue,oe);_.generateMipmaps=!1}else if(I){if(te){let j=Nt(ee);n.texStorage2D(t.TEXTURE_2D,pe,Te,j.width,j.height)}re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Ue,ee)}else n.texImage2D(t.TEXTURE_2D,0,Te,ce,Ue,ee);m(_)&&f($),Ae.__version=W.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function K(b,_,N){if(_.image.length!==6)return;let $=pt(b,_),Z=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+N);let W=i.get(Z);if(Z.version!==W.__version||$===!0){n.activeTexture(t.TEXTURE0+N);let Ae=et.getPrimaries(et.workingColorSpace),ie=_.colorSpace===Hi?null:et.getPrimaries(_.colorSpace),Se=_.colorSpace===Hi||Ae===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let Y=0;Y<6;Y++)!Ee&&!ee?ce[Y]=v(_.image[Y],!0,s.maxCubemapSize):ce[Y]=ee?_.image[Y].image:_.image[Y],ce[Y]=Kt(_,ce[Y]);let Ue=ce[0],Te=r.convert(_.format,_.colorSpace),oe=r.convert(_.type),He=E(_.internalFormat,Te,oe,_.colorSpace),I=_.isVideoTexture!==!0,te=W.__version===void 0||$===!0,re=Z.dataReady,pe=R(_,Ue);We(t.TEXTURE_CUBE_MAP,_);let j;if(Ee){I&&te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,He,Ue.width,Ue.height);for(let Y=0;Y<6;Y++){j=ce[Y].mipmaps;for(let ye=0;ye<j.length;ye++){let Be=j[ye];_.format!==Xn?Te!==null?I?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Be.width,Be.height,Te,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,He,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Be.width,Be.height,Te,oe,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,He,Be.width,Be.height,0,Te,oe,Be.data)}}}else{if(j=_.mipmaps,I&&te){j.length>0&&pe++;let Y=Nt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,He,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ce[Y].width,ce[Y].height,Te,oe,ce[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,He,ce[Y].width,ce[Y].height,0,Te,oe,ce[Y].data);for(let ye=0;ye<j.length;ye++){let vt=j[ye].image[Y].image;I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,vt.width,vt.height,Te,oe,vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,He,vt.width,vt.height,0,Te,oe,vt.data)}}else{I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,oe,ce[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,He,Te,oe,ce[Y]);for(let ye=0;ye<j.length;ye++){let Be=j[ye];I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,Te,oe,Be.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,He,Te,oe,Be.image[Y])}}}m(_)&&f(t.TEXTURE_CUBE_MAP),W.__version=Z.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ge(b,_,N,$,Z,W){let Ae=r.convert(N.format,N.colorSpace),ie=r.convert(N.type),Se=E(N.internalFormat,Ae,ie,N.colorSpace),Ee=i.get(_),ee=i.get(N);if(ee.__renderTarget=_,!Ee.__hasExternalTextures){let ce=Math.max(1,_.width>>W),Ue=Math.max(1,_.height>>W);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,W,Se,ce,Ue,_.depth,0,Ae,ie,null):n.texImage2D(Z,W,Se,ce,Ue,0,Ae,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Me(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Z,ee.__webglTexture,0,Tt(_)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Z,ee.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(b,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){let $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,W=S(_.stencilBuffer,Z),Ae=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=Tt(_);Me(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,W,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,W,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,W,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,b)}else{let $=_.textures;for(let Z=0;Z<$.length;Z++){let W=$[Z],Ae=r.convert(W.format,W.colorSpace),ie=r.convert(W.type),Se=E(W.internalFormat,Ae,ie,W.colorSpace),Ee=Tt(_);N&&Me(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Se,_.width,_.height):Me(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,Se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Se,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let Z=$.__webglTexture,W=Tt(_);if(_.depthTexture.format===wr)Me(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Br)Me(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Je(b){let _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let $=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=$}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let $=b.texture.mipmaps;$&&$.length>0?Re(_.__webglFramebuffer[0],b):Re(_.__webglFramebuffer,b)}else if(N){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=t.createRenderbuffer(),Oe(_.__webglDepthbuffer[$],b,!1);else{let Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,W)}}else{let $=b.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Oe(_.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function nn(b,_,N){let $=i.get(b);_!==void 0&&ge($.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Je(b)}function w(b){let _=b.texture,N=i.get(b),$=i.get(_);b.addEventListener("dispose",C);let Z=b.textures,W=b.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=_.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let Se=0;Se<_.mipmaps.length;Se++)N.__webglFramebuffer[ie][Se]=t.createFramebuffer()}else N.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)N.__webglFramebuffer[ie]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let ie=0,Se=Z.length;ie<Se;ie++){let Ee=i.get(Z[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&Me(b)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){let Se=Z[ie];N.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);let Ee=r.convert(Se.format,Se.colorSpace),ee=r.convert(Se.type),ce=E(Se.internalFormat,Ee,ee,Se.colorSpace,b.isXRRenderTarget===!0),Ue=Tt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ce,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(N.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),We(t.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ge(N.__webglFramebuffer[ie][Se],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se);else ge(N.__webglFramebuffer[ie],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let ie=0,Se=Z.length;ie<Se;ie++){let Ee=Z[ie],ee=i.get(Ee),ce=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ee.__webglTexture),We(ce,Ee),ge(N.__webglFramebuffer,b,Ee,t.COLOR_ATTACHMENT0+ie,ce,0),m(Ee)&&f(ce)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,$.__webglTexture),We(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ge(N.__webglFramebuffer[Se],b,_,t.COLOR_ATTACHMENT0,ie,Se);else ge(N.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,ie,0);m(_)&&f(ie),n.unbindTexture()}b.depthBuffer&&Je(b)}function Et(b){let _=b.textures;for(let N=0,$=_.length;N<$;N++){let Z=_[N];if(m(Z)){let W=T(b),Ae=i.get(Z).__webglTexture;n.bindTexture(W,Ae),f(W),n.unbindTexture()}}}let ze=[],Ne=[];function xe(b){if(b.samples>0){if(Me(b)===!1){let _=b.textures,N=b.width,$=b.height,Z=t.COLOR_BUFFER_BIT,W=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(b),ie=_.length>1;if(ie)for(let Ee=0;Ee<_.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Se=b.texture.mipmaps;Se&&Se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let ee=i.get(_[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,N,$,0,0,N,$,Z,t.NEAREST),l===!0&&(ze.length=0,Ne.length=0,ze.push(t.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ze.push(W),Ne.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ne)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<_.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let ee=i.get(_[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Tt(b){return Math.min(s.maxSamples,b.samples)}function Me(b){let _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Xe(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Kt(b,_){let N=b.colorSpace,$=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Os&&N!==Hi&&(et.getTransfer(N)===ut?($!==Xn||Z!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function Nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=nn,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function W2(t,e){function n(i,s=Hi){let r,a=et.getTransfer(s);if(i===mi)return t.UNSIGNED_BYTE;if(i===Ml)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return t.BYTE;if(i===Yh)return t.SHORT;if(i===Nr)return t.UNSIGNED_SHORT;if(i===xl)return t.INT;if(i===ps)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===Fr)return t.HALF_FLOAT;if(i===Jh)return t.ALPHA;if(i===jh)return t.RGB;if(i===Xn)return t.RGBA;if(i===wr)return t.DEPTH_COMPONENT;if(i===Br)return t.DEPTH_STENCIL;if(i===Qh)return t.RED;if(i===bl)return t.RED_INTEGER;if(i===eu)return t.RG;if(i===El)return t.RG_INTEGER;if(i===Tl)return t.RGBA_INTEGER;if(i===Ba||i===ka||i===za||i===Va)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Pl||i===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Pl)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Yl||i===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ql)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Jl||i===jl||i===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var X2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$2=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new La(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Pn({vertexShader:X2,fragmentShader:$2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends Bi{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new xu,f={},T=n.getContextAttributes(),E=null,S=null,R=[],A=[],C=new dt,U=null,M=new gn;M.viewport=new Lt;let x=new gn;x.viewport=new Lt;let P=[M,x],F=new cl,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=R[q];return K===void 0&&(K=new Lr,R[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=R[q];return K===void 0&&(K=new Lr,R[q]=K),K.getGripSpace()},this.getHand=function(q){let K=R[q];return K===void 0&&(K=new Lr,R[q]=K),K.getHandSpace()};function X(q){let K=A.indexOf(q.inputSource);if(K===-1)return;let ge=R[K];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let q=0;q<R.length;q++){let K=A[q];K!==null&&(A[q]=null,R[q].disconnect(K))}O=null,G=null,m.reset();for(let q in f)delete f[q];e.setRenderTarget(E),p=null,d=null,u=null,s=null,S=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,n)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Oe=null,Re=null;T.depth&&(Re=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=T.stencil?Br:wr,Oe=T.stencil?Or:ps);let Je={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ui(d.textureWidth,d.textureHeight,{format:Xn,type:mi,depthTexture:new Pa(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ui(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(q){for(let K=0;K<q.removed.length;K++){let ge=q.removed[K],Oe=A.indexOf(ge);Oe>=0&&(A[Oe]=null,R[Oe].disconnect(ge))}for(let K=0;K<q.added.length;K++){let ge=q.added[K],Oe=A.indexOf(ge);if(Oe===-1){for(let Je=0;Je<R.length;Je++)if(Je>=A.length){A.push(ge),Oe=Je;break}else if(A[Je]===null){A[Je]=ge,Oe=Je;break}if(Oe===-1)break}let Re=R[Oe];Re&&Re.connect(ge)}}let V=new k,se=new k;function ue(q,K,ge){V.setFromMatrixPosition(K.matrixWorld),se.setFromMatrixPosition(ge.matrixWorld);let Oe=V.distanceTo(se),Re=K.projectionMatrix.elements,Je=ge.projectionMatrix.elements,nn=Re[14]/(Re[10]-1),w=Re[14]/(Re[10]+1),Et=(Re[9]+1)/Re[5],ze=(Re[9]-1)/Re[5],Ne=(Re[8]-1)/Re[0],xe=(Je[8]+1)/Je[0],Tt=nn*Ne,Me=nn*xe,Xe=Oe/(-Ne+xe),Kt=Xe*-Ne;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Kt),q.translateZ(Xe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Nt=nn+Xe,b=w+Xe,_=Tt-Kt,N=Me+(Oe-Kt),$=Et*w/b*Nt,Z=ze*w/b*Nt;q.projectionMatrix.makePerspective(_,N,$,Z,Nt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function be(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,ge=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),F.near=x.near=M.near=K,F.far=x.far=M.far=ge,(O!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,G=F.far),F.layers.mask=q.layers.mask|6,M.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;let Oe=q.parent,Re=F.cameras;be(F,Oe);for(let Je=0;Je<Re.length;Je++)be(Re[Je],Oe);Re.length===2?ue(F,M,x):F.projectionMatrix.copy(M.projectionMatrix),We(q,F,Oe)};function We(q,K,ge){ge===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return f[q]};let pt=null;function _t(q,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Oe=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,Oe=!0);for(let w=0;w<ge.length;w++){let Et=ge[w],ze=null;if(p!==null)ze=p.getViewport(Et);else{let xe=u.getViewSubImage(d,Et);ze=xe.viewport,w===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let Ne=P[w];Ne===void 0&&(Ne=new gn,Ne.layers.enable(w),Ne.viewport=new Lt,P[w]=Ne),Ne.matrix.fromArray(Et.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Et.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ze.x,ze.y,ze.width,ze.height),w===0&&(F.matrix.copy(Ne.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Oe===!0&&F.cameras.push(Ne)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let w=u.getDepthInformation(ge[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let w=0;w<ge.length;w++){let Et=ge[w].camera;if(Et){let ze=f[Et];ze||(ze=new La,f[Et]=ze);let Ne=u.getCameraImage(Et);ze.sourceTexture=Ne}}}}for(let ge=0;ge<R.length;ge++){let Oe=A[ge],Re=R[ge];Oe!==null&&Re!==void 0&&Re.update(Oe,K,c||a)}pt&&pt(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let it=new qp;it.setAnimationLoop(_t),this.setAnimationLoop=function(q){pt=q},this.dispose=function(){}}},Ws=new di,q2=new Wt;function Y2(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,su(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,E,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=e.get(f),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,Ws.copy(S),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),m.envMapRotation.value.setFromMatrix4(q2.makeRotationFromEuler(Ws)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function K2(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let S=E.program;i.uniformBlockBinding(T,S)}function c(T,E){let S=s[T.id];S===void 0&&(g(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",m));let R=E.program;i.updateUBOMapping(T,R);let A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function h(T){let E=u();T.__bindingPointIndex=E;let S=t.createBuffer(),R=T.__size,A=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,S),S}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let E=s[T.id],S=T.uniforms,R=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let A=0,C=S.length;A<C;A++){let U=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,x=U.length;M<x;M++){let P=U[M];if(p(P,A,M,R)===!0){let F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let X=0;X<O.length;X++){let H=O[X],J=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,F+G,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(T,E,S,R){let A=T.value,C=E+"_"+S;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{let U=R[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(T){let E=T.uniforms,S=0,R=16;for(let C=0,U=E.length;C<U;C++){let M=Array.isArray(E[C])?E[C]:[E[C]];for(let x=0,P=M.length;x<P;x++){let F=M[x],O=Array.isArray(F.value)?F.value:[F.value];for(let G=0,X=O.length;G<X;G++){let H=O[G],J=v(H),V=S%R,se=V%J.boundary,ue=V+se;S+=se,ue!==0&&R-ue<J.storage&&(S+=R-ue),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=J.storage}}}let A=S%R;return A>0&&(S+=R-A),T.__size=S,T.__cache={},this}function v(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let T in s)t.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var sc=class{constructor(e={}){let{canvas:n=yp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,T=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=hn;let A=0,C=0,U=null,M=-1,x=null,P=new Lt,F=new Lt,O=null,G=new ot(0),X=0,H=n.width,J=n.height,V=1,se=null,ue=null,be=new Lt(0,0,H,J),We=new Lt(0,0,H,J),pt=!1,_t=new Ia,it=!1,q=!1,K=new Wt,ge=new k,Oe=new Lt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function nn(){return U===null?V:1}let w=i;function Et(y,L){return n.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",j,!1),w===null){let L="webgl2";if(w=Et(L,y),w===null)throw Et(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ze,Ne,xe,Tt,Me,Xe,Kt,Nt,b,_,N,$,Z,W,Ae,ie,Se,Ee,ee,ce,Ue,Te,oe,He;function I(){ze=new fx(w),ze.init(),Te=new W2(w,ze),Ne=new ax(w,ze,e,Te),xe=new H2(w,ze),Ne.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),Tt=new gx(w),Me=new C2,Xe=new G2(w,ze,xe,Me,Ne,Te,Tt),Kt=new lx(S),Nt=new dx(S),b=new S1(w),oe=new sx(w,b),_=new px(w,b,Tt,oe),N=new vx(w,_,b,Tt),ee=new _x(w,Ne,Xe),ie=new ox(Me),$=new R2(S,Kt,Nt,ze,Ne,oe,ie),Z=new Y2(S,Me),W=new P2,Ae=new O2(ze),Ee=new ix(S,Kt,Nt,xe,N,p,l),Se=new z2(S,N,Ne),He=new K2(w,Tt,Ne,xe),ce=new rx(w,ze,Tt),Ue=new mx(w,ze,Tt),Tt.programs=$.programs,S.capabilities=Ne,S.extensions=ze,S.properties=Me,S.renderLists=W,S.shadowMap=Se,S.state=xe,S.info=Tt}I();let te=new Mu(S,w);this.xr=te,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(H,J,!1))},this.getSize=function(y){return y.set(H,J)},this.setSize=function(y,L,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,J=L,n.width=Math.floor(y*V),n.height=Math.floor(L*V),B===!0&&(n.style.width=y+"px",n.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(H*V,J*V).floor()},this.setDrawingBufferSize=function(y,L,B){H=y,J=L,V=B,n.width=Math.floor(y*B),n.height=Math.floor(L*B),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,L,B,z){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,L,B,z),xe.viewport(P.copy(be).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(We)},this.setScissor=function(y,L,B,z){y.isVector4?We.set(y.x,y.y,y.z,y.w):We.set(y,L,B,z),xe.scissor(F.copy(We).multiplyScalar(V).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){xe.setScissorTest(pt=y)},this.setOpaqueSort=function(y){se=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,B=!0){let z=0;if(y){let D=!1;if(U!==null){let Q=U.texture.format;D=Q===Tl||Q===El||Q===bl}if(D){let Q=U.texture.type,le=Q===mi||Q===ps||Q===Nr||Q===Or||Q===Ml||Q===Sl,_e=Ee.getClearColor(),de=Ee.getClearAlpha(),De=_e.r,Fe=_e.g,Pe=_e.b;le?(g[0]=De,g[1]=Fe,g[2]=Pe,g[3]=de,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=De,v[1]=Fe,v[2]=Pe,v[3]=de,w.clearBufferiv(w.COLOR,0,v))}else z|=w.COLOR_BUFFER_BIT}L&&(z|=w.DEPTH_BUFFER_BIT),B&&(z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",j,!1),Ee.dispose(),W.dispose(),Ae.dispose(),Me.dispose(),Kt.dispose(),Nt.dispose(),N.dispose(),oe.dispose(),He.dispose(),$.dispose(),te.dispose(),te.removeEventListener("sessionstart",li),te.removeEventListener("sessionend",lf),As.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=Tt.autoReset,L=Se.enabled,B=Se.autoUpdate,z=Se.needsUpdate,D=Se.type;I(),Tt.autoReset=y,Se.enabled=L,Se.autoUpdate=B,Se.needsUpdate=z,Se.type=D}function j(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Y(y){let L=y.target;L.removeEventListener("dispose",Y),ye(L)}function ye(y){Be(y),Me.remove(y)}function Be(y){let L=Me.get(y).programs;L!==void 0&&(L.forEach(function(B){$.releaseProgram(B)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,B,z,D,Q){L===null&&(L=Re);let le=D.isMesh&&D.matrixWorld.determinant()<0,_e=O_(y,L,B,z,D);xe.setMaterial(z,le);let de=B.index,De=1;if(z.wireframe===!0){if(de=_.getWireframeAttribute(B),de===void 0)return;De=2}let Fe=B.drawRange,Pe=B.attributes.position,qe=Fe.start*De,mt=(Fe.start+Fe.count)*De;Q!==null&&(qe=Math.max(qe,Q.start*De),mt=Math.min(mt,(Q.start+Q.count)*De)),de!==null?(qe=Math.max(qe,0),mt=Math.min(mt,de.count)):Pe!=null&&(qe=Math.max(qe,0),mt=Math.min(mt,Pe.count));let Pt=mt-qe;if(Pt<0||Pt===1/0)return;oe.setup(D,z,_e,B,de);let xt,gt=ce;if(de!==null&&(xt=b.get(de),gt=Ue,gt.setIndex(xt)),D.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*nn()),gt.setMode(w.LINES)):gt.setMode(w.TRIANGLES);else if(D.isLine){let Le=z.linewidth;Le===void 0&&(Le=1),xe.setLineWidth(Le*nn()),D.isLineSegments?gt.setMode(w.LINES):D.isLineLoop?gt.setMode(w.LINE_LOOP):gt.setMode(w.LINE_STRIP)}else D.isPoints?gt.setMode(w.POINTS):D.isSprite&&gt.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))gt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Le=D._multiDrawStarts,At=D._multiDrawCounts,st=D._multiDrawCount,An=de?b.get(de).bytesPerElement:1,ur=Me.get(z).currentProgram.getUniforms();for(let Rn=0;Rn<st;Rn++)ur.setValue(w,"_gl_DrawID",Rn),gt.render(Le[Rn]/An,At[Rn])}else if(D.isInstancedMesh)gt.renderInstances(qe,Pt,D.count);else if(B.isInstancedBufferGeometry){let Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,At=Math.min(B.instanceCount,Le);gt.renderInstances(qe,Pt,At)}else gt.render(qe,Pt)};function vt(y,L,B){y.transparent===!0&&y.side===Wn&&y.forceSinglePass===!1?(y.side=un,y.needsUpdate=!0,yo(y,L,B),y.side=Oi,y.needsUpdate=!0,yo(y,L,B),y.side=Wn):yo(y,L,B)}this.compile=function(y,L,B=null){B===null&&(B=y),f=Ae.get(B),f.init(L),E.push(f),B.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),y!==B&&y.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let z=new Set;return y.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let Q=D.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){let _e=Q[le];vt(_e,B,D),z.add(_e)}else vt(Q,B,D),z.add(Q)}),f=E.pop(),z},this.compileAsync=function(y,L,B=null){let z=this.compile(y,L,B);return new Promise(D=>{function Q(){if(z.forEach(function(le){Me.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){D(y);return}setTimeout(Q,10)}ze.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ht=null;function Ii(y){ht&&ht(y)}function li(){As.stop()}function lf(){As.start()}let As=new qp;As.setAnimationLoop(Ii),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(y){ht=y,te.setAnimationLoop(y),y===null?As.stop():As.start()},te.addEventListener("sessionstart",li),te.addEventListener("sessionend",lf),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(L),L=te.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,L,U),f=Ae.get(y,E.length),f.init(L),E.push(f),K.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),_t.setFromProjectionMatrix(K,ii,L.reversedDepth),q=this.localClippingEnabled,it=ie.init(this.clippingPlanes,q),m=W.get(y,T.length),m.init(),T.push(m),te.enabled===!0&&te.isPresenting===!0){let Q=S.xr.getDepthSensingMesh();Q!==null&&ch(Q,L,-1/0,S.sortObjects)}ch(y,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(se,ue),Je=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Je&&Ee.addToRenderList(m,y),this.info.render.frame++,it===!0&&ie.beginShadows();let B=f.state.shadowsArray;Se.render(B,y,L),it===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,D=m.transmissive;if(f.setupLights(),L.isArrayCamera){let Q=L.cameras;if(D.length>0)for(let le=0,_e=Q.length;le<_e;le++){let de=Q[le];hf(z,D,y,de)}Je&&Ee.render(y);for(let le=0,_e=Q.length;le<_e;le++){let de=Q[le];cf(m,y,de,de.viewport)}}else D.length>0&&hf(z,D,y,L),Je&&Ee.render(y),cf(m,y,L);U!==null&&C===0&&(Xe.updateMultisampleRenderTarget(U),Xe.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(S,y,L),oe.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],it===!0&&ie.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ch(y,L,B,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||_t.intersectsSprite(y)){z&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(K);let le=N.update(y),_e=y.material;_e.visible&&m.push(y,le,_e,B,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||_t.intersectsObject(y))){let le=N.update(y),_e=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Oe.copy(le.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(K)),Array.isArray(_e)){let de=le.groups;for(let De=0,Fe=de.length;De<Fe;De++){let Pe=de[De],qe=_e[Pe.materialIndex];qe&&qe.visible&&m.push(y,le,qe,B,Oe.z,Pe)}}else _e.visible&&m.push(y,le,_e,B,Oe.z,null)}}let Q=y.children;for(let le=0,_e=Q.length;le<_e;le++)ch(Q[le],L,B,z)}function cf(y,L,B,z){let D=y.opaque,Q=y.transmissive,le=y.transparent;f.setupLightsView(B),it===!0&&ie.setGlobalState(S.clippingPlanes,B),z&&xe.viewport(P.copy(z)),D.length>0&&vo(D,L,B),Q.length>0&&vo(Q,L,B),le.length>0&&vo(le,L,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function hf(y,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ui(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Fr:mi,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let Q=f.state.transmissionRenderTarget[z.id],le=z.viewport||P;Q.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);let _e=S.getRenderTarget(),de=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(G),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),Je&&Ee.render(B);let Fe=S.toneMapping;S.toneMapping=Vi;let Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),it===!0&&ie.setGlobalState(S.clippingPlanes,z),vo(y,B,z),Xe.updateMultisampleRenderTarget(Q),Xe.updateRenderTargetMipmap(Q),ze.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let mt=0,Pt=L.length;mt<Pt;mt++){let xt=L[mt],gt=xt.object,Le=xt.geometry,At=xt.material,st=xt.group;if(At.side===Wn&&gt.layers.test(z.layers)){let An=At.side;At.side=un,At.needsUpdate=!0,uf(gt,B,z,Le,At,st),At.side=An,At.needsUpdate=!0,qe=!0}}qe===!0&&(Xe.updateMultisampleRenderTarget(Q),Xe.updateRenderTargetMipmap(Q))}S.setRenderTarget(_e,de,De),S.setClearColor(G,X),Pe!==void 0&&(z.viewport=Pe),S.toneMapping=Fe}function vo(y,L,B){let z=L.isScene===!0?L.overrideMaterial:null;for(let D=0,Q=y.length;D<Q;D++){let le=y[D],_e=le.object,de=le.geometry,De=le.group,Fe=le.material;Fe.allowOverride===!0&&z!==null&&(Fe=z),_e.layers.test(B.layers)&&uf(_e,L,B,de,Fe,De)}}function uf(y,L,B,z,D,Q){y.onBeforeRender(S,L,B,z,D,Q),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),D.onBeforeRender(S,L,B,z,y,Q),D.transparent===!0&&D.side===Wn&&D.forceSinglePass===!1?(D.side=un,D.needsUpdate=!0,S.renderBufferDirect(B,L,z,D,y,Q),D.side=Oi,D.needsUpdate=!0,S.renderBufferDirect(B,L,z,D,y,Q),D.side=Wn):S.renderBufferDirect(B,L,z,D,y,Q),y.onAfterRender(S,L,B,z,D,Q)}function yo(y,L,B){L.isScene!==!0&&(L=Re);let z=Me.get(y),D=f.state.lights,Q=f.state.shadowsArray,le=D.state.version,_e=$.getParameters(y,D.state,Q,L,B),de=$.getProgramCacheKey(_e),De=z.programs;z.environment=y.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(y.isMeshStandardMaterial?Nt:Kt).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",Y),De=new Map,z.programs=De);let Fe=De.get(de);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===le)return ff(y,_e),Fe}else _e.uniforms=$.getUniforms(y),y.onBeforeCompile(_e,S),Fe=$.acquireProgram(_e,de),De.set(de,Fe),z.uniforms=_e.uniforms;let Pe=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),ff(y,_e),z.needsLights=k_(y),z.lightsStateVersion=le,z.needsLights&&(Pe.ambientLightColor.value=D.state.ambient,Pe.lightProbe.value=D.state.probe,Pe.directionalLights.value=D.state.directional,Pe.directionalLightShadows.value=D.state.directionalShadow,Pe.spotLights.value=D.state.spot,Pe.spotLightShadows.value=D.state.spotShadow,Pe.rectAreaLights.value=D.state.rectArea,Pe.ltc_1.value=D.state.rectAreaLTC1,Pe.ltc_2.value=D.state.rectAreaLTC2,Pe.pointLights.value=D.state.point,Pe.pointLightShadows.value=D.state.pointShadow,Pe.hemisphereLights.value=D.state.hemi,Pe.directionalShadowMap.value=D.state.directionalShadowMap,Pe.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Pe.spotShadowMap.value=D.state.spotShadowMap,Pe.spotLightMatrix.value=D.state.spotLightMatrix,Pe.spotLightMap.value=D.state.spotLightMap,Pe.pointShadowMap.value=D.state.pointShadowMap,Pe.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Fe,z.uniformsList=null,Fe}function df(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Vr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function ff(y,L){let B=Me.get(y);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function O_(y,L,B,z,D){L.isScene!==!0&&(L=Re),Xe.resetTextureUnits();let Q=L.fog,le=z.isMeshStandardMaterial?L.environment:null,_e=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Os,de=(z.isMeshStandardMaterial?Nt:Kt).get(z.envMap||le),De=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!B.morphAttributes.position,qe=!!B.morphAttributes.normal,mt=!!B.morphAttributes.color,Pt=Vi;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=S.toneMapping);let xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,gt=xt!==void 0?xt.length:0,Le=Me.get(z),At=f.state.lights;if(it===!0&&(q===!0||y!==x)){let cn=y===x&&z.id===M;ie.setState(z,y,cn)}let st=!1;z.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==At.state.version||Le.outputColorSpace!==_e||D.isBatchedMesh&&Le.batching===!1||!D.isBatchedMesh&&Le.batching===!0||D.isBatchedMesh&&Le.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Le.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Le.instancing===!1||!D.isInstancedMesh&&Le.instancing===!0||D.isSkinnedMesh&&Le.skinning===!1||!D.isSkinnedMesh&&Le.skinning===!0||D.isInstancedMesh&&Le.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Le.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Le.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Le.instancingMorph===!1&&D.morphTexture!==null||Le.envMap!==de||z.fog===!0&&Le.fog!==Q||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ie.numPlanes||Le.numIntersection!==ie.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Fe||Le.morphTargets!==Pe||Le.morphNormals!==qe||Le.morphColors!==mt||Le.toneMapping!==Pt||Le.morphTargetsCount!==gt)&&(st=!0):(st=!0,Le.__version=z.version);let An=Le.currentProgram;st===!0&&(An=yo(z,L,D));let ur=!1,Rn=!1,fa=!1,Rt=An.getUniforms(),kn=Le.uniforms;if(xe.useProgram(An.program)&&(ur=!0,Rn=!0,fa=!0),z.id!==M&&(M=z.id,Rn=!0),ur||x!==y){xe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Rt.setValue(w,"projectionMatrix",y.projectionMatrix),Rt.setValue(w,"viewMatrix",y.matrixWorldInverse);let pn=Rt.map.cameraPosition;pn!==void 0&&pn.setValue(w,ge.setFromMatrixPosition(y.matrixWorld)),Ne.logarithmicDepthBuffer&&Rt.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Rt.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Rn=!0,fa=!0)}if(D.isSkinnedMesh){Rt.setOptional(w,D,"bindMatrix"),Rt.setOptional(w,D,"bindMatrixInverse");let cn=D.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Rt.setValue(w,"boneTexture",cn.boneTexture,Xe))}D.isBatchedMesh&&(Rt.setOptional(w,D,"batchingTexture"),Rt.setValue(w,"batchingTexture",D._matricesTexture,Xe),Rt.setOptional(w,D,"batchingIdTexture"),Rt.setValue(w,"batchingIdTexture",D._indirectTexture,Xe),Rt.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&Rt.setValue(w,"batchingColorTexture",D._colorsTexture,Xe));let zn=B.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&ee.update(D,B,An),(Rn||Le.receiveShadow!==D.receiveShadow)&&(Le.receiveShadow=D.receiveShadow,Rt.setValue(w,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(kn.envMap.value=de,kn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(kn.envMapIntensity.value=L.environmentIntensity),Rn&&(Rt.setValue(w,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&B_(kn,fa),Q&&z.fog===!0&&Z.refreshFogUniforms(kn,Q),Z.refreshMaterialUniforms(kn,z,V,J,f.state.transmissionRenderTarget[y.id]),Vr.upload(w,df(Le),kn,Xe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vr.upload(w,df(Le),kn,Xe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Rt.setValue(w,"center",D.center),Rt.setValue(w,"modelViewMatrix",D.modelViewMatrix),Rt.setValue(w,"normalMatrix",D.normalMatrix),Rt.setValue(w,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let cn=z.uniformsGroups;for(let pn=0,hh=cn.length;pn<hh;pn++){let Rs=cn[pn];He.update(Rs,An),He.bind(Rs,An)}}return An}function B_(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function k_(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,L,B){let z=Me.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Me.get(y.texture).__webglTexture=L,Me.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let B=Me.get(y);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};let z_=w.createFramebuffer();this.setRenderTarget=function(y,L=0,B=0){U=y,A=L,C=B;let z=!0,D=null,Q=!1,le=!1;if(y){let de=Me.get(y);if(de.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(w.FRAMEBUFFER,null),z=!1;else if(de.__webglFramebuffer===void 0)Xe.setupRenderTarget(y);else if(de.__hasExternalTextures)Xe.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Pe=y.depthTexture;if(de.__boundDepthTexture!==Pe){if(Pe!==null&&Me.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(y)}}let De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(le=!0);let Fe=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[L])?D=Fe[L][B]:D=Fe[L],Q=!0):y.samples>0&&Xe.useMultisampledRTT(y)===!1?D=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?D=Fe[B]:D=Fe,P.copy(y.viewport),F.copy(y.scissor),O=y.scissorTest}else P.copy(be).multiplyScalar(V).floor(),F.copy(We).multiplyScalar(V).floor(),O=pt;if(B!==0&&(D=z_),xe.bindFramebuffer(w.FRAMEBUFFER,D)&&z&&xe.drawBuffers(y,D),xe.viewport(P),xe.scissor(F),xe.setScissorTest(O),Q){let de=Me.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,B)}else if(le){let de=L;for(let De=0;De<y.textures.length;De++){let Fe=Me.get(y.textures[De]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+De,Fe.__webglTexture,B,de)}}else if(y!==null&&B!==0){let de=Me.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,de.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(y,L,B,z,D,Q,le,_e=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){xe.bindFramebuffer(w.FRAMEBUFFER,de);try{let De=y.textures[_e],Fe=De.format,Pe=De.type;if(!Ne.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&B>=0&&B<=y.height-D&&(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_e),w.readPixels(L,B,z,D,Te.convert(Fe),Te.convert(Pe),Q))}finally{let De=U!==null?Me.get(U).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,L,B,z,D,Q,le,_e=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(L>=0&&L<=y.width-z&&B>=0&&B<=y.height-D){xe.bindFramebuffer(w.FRAMEBUFFER,de);let De=y.textures[_e],Fe=De.format,Pe=De.type;if(!Ne.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_e),w.readPixels(L,B,z,D,Te.convert(Fe),Te.convert(Pe),0);let mt=U!==null?Me.get(U).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,mt);let Pt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await xp(w,Pt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(qe),w.deleteSync(Pt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,B=0){let z=Math.pow(2,-B),D=Math.floor(y.image.width*z),Q=Math.floor(y.image.height*z),le=L!==null?L.x:0,_e=L!==null?L.y:0;Xe.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,le,_e,D,Q),xe.unbindTexture()};let V_=w.createFramebuffer(),H_=w.createFramebuffer();this.copyTextureToTexture=function(y,L,B=null,z=null,D=0,Q=null){Q===null&&(D!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=D,D=0):Q=0);let le,_e,de,De,Fe,Pe,qe,mt,Pt,xt=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(B!==null)le=B.max.x-B.min.x,_e=B.max.y-B.min.y,de=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Fe=B.min.y,Pe=B.isBox3?B.min.z:0;else{let zn=Math.pow(2,-D);le=Math.floor(xt.width*zn),_e=Math.floor(xt.height*zn),y.isDataArrayTexture?de=xt.depth:y.isData3DTexture?de=Math.floor(xt.depth*zn):de=1,De=0,Fe=0,Pe=0}z!==null?(qe=z.x,mt=z.y,Pt=z.z):(qe=0,mt=0,Pt=0);let gt=Te.convert(L.format),Le=Te.convert(L.type),At;L.isData3DTexture?(Xe.setTexture3D(L,0),At=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Xe.setTexture2DArray(L,0),At=w.TEXTURE_2D_ARRAY):(Xe.setTexture2D(L,0),At=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);let st=w.getParameter(w.UNPACK_ROW_LENGTH),An=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ur=w.getParameter(w.UNPACK_SKIP_PIXELS),Rn=w.getParameter(w.UNPACK_SKIP_ROWS),fa=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,xt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,De),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pe);let Rt=y.isDataArrayTexture||y.isData3DTexture,kn=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let zn=Me.get(y),cn=Me.get(L),pn=Me.get(zn.__renderTarget),hh=Me.get(cn.__renderTarget);xe.bindFramebuffer(w.READ_FRAMEBUFFER,pn.__webglFramebuffer),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,hh.__webglFramebuffer);for(let Rs=0;Rs<de;Rs++)Rt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(y).__webglTexture,D,Pe+Rs),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,Q,Pt+Rs)),w.blitFramebuffer(De,Fe,le,_e,qe,mt,le,_e,w.DEPTH_BUFFER_BIT,w.NEAREST);xe.bindFramebuffer(w.READ_FRAMEBUFFER,null),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(D!==0||y.isRenderTargetTexture||Me.has(y)){let zn=Me.get(y),cn=Me.get(L);xe.bindFramebuffer(w.READ_FRAMEBUFFER,V_),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,H_);for(let pn=0;pn<de;pn++)Rt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zn.__webglTexture,D,Pe+pn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,zn.__webglTexture,D),kn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,cn.__webglTexture,Q,Pt+pn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,cn.__webglTexture,Q),D!==0?w.blitFramebuffer(De,Fe,le,_e,qe,mt,le,_e,w.COLOR_BUFFER_BIT,w.NEAREST):kn?w.copyTexSubImage3D(At,Q,qe,mt,Pt+pn,De,Fe,le,_e):w.copyTexSubImage2D(At,Q,qe,mt,De,Fe,le,_e);xe.bindFramebuffer(w.READ_FRAMEBUFFER,null),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else kn?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(At,Q,qe,mt,Pt,le,_e,de,gt,Le,xt.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(At,Q,qe,mt,Pt,le,_e,de,gt,xt.data):w.texSubImage3D(At,Q,qe,mt,Pt,le,_e,de,gt,Le,xt):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,qe,mt,le,_e,gt,Le,xt.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,qe,mt,xt.width,xt.height,gt,xt.data):w.texSubImage2D(w.TEXTURE_2D,Q,qe,mt,le,_e,gt,Le,xt);w.pixelStorei(w.UNPACK_ROW_LENGTH,st),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,An),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ur),w.pixelStorei(w.UNPACK_SKIP_ROWS,Rn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,fa),Q===0&&L.generateMipmaps&&w.generateMipmap(At),xe.unbindTexture()},this.initRenderTarget=function(y){Me.get(y).__webglFramebuffer===void 0&&Xe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Xe.setTextureCube(y,0):y.isData3DTexture?Xe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Xe.setTexture2DArray(y,0):Xe.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){A=0,C=0,U=null,xe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}};var nr=typeof self<"u"?self:{};function yg(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=nr,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function bt(t,e){t=t.split(".");for(var n,i=nr;t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}function qs(){throw Error("Invalid UTF8")}function jp(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}var bu,J2,ac=void 0,j2=typeof TextDecoder<"u",Q2=typeof TextEncoder<"u";function xg(t){if(Q2)t=(J2||(J2=new TextEncoder)).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){let r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function Mg(t){nr.setTimeout(()=>{throw t},0)}var eM=yg(610401301,!1),Qp=yg(748402147,!0);function em(){var t=nr.navigator;return t&&(t=t.userAgent)?t:""}var Du,tm=nr.navigator;function Bc(t){return Bc[" "](t),t}Du=tm&&tm.userAgentData||null,Bc[" "]=function(){};var Sg={},Ya=null;function tM(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),s=0;return(function(r,a){function o(c){for(;l<r.length;){let h=r.charAt(l++),u=Ya[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}bg();for(var l=0;;){let c=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&c===-1)break;a(c<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}})(t,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function bg(){if(!Ya){Ya={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=t.concat(e[n].split(""));Sg[n]=i;for(let s=0;s<i.length;s++){let r=i[s];Ya[r]===void 0&&(Ya[r]=s)}}}}var nM=typeof Uint8Array<"u",Eg=!(!(eM&&Du&&Du.brands.length>0)&&(em().indexOf("Trident")!=-1||em().indexOf("MSIE")!=-1))&&typeof btoa=="function",nm=/[-_.]/g,iM={"-":"+",_:"/",".":"="};function sM(t){return iM[t]||""}function Tg(t){if(!Eg)return tM(t);t=nm.test(t)?t.replace(nm,sM):t,t=atob(t);var e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function rd(t){return nM&&t!=null&&t instanceof Uint8Array}var Yr={};function ir(){return rM||(rM=new Mi(null,Yr))}function ad(t){wg(Yr);var e=t.g;return(e=e==null||rd(e)?e:typeof e=="string"?Tg(e):null)==null?e:t.g=e}var rM,Mi=class{h(){return new Uint8Array(ad(this)||0)}constructor(t,e){if(wg(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};function wg(t){if(t!==Yr)throw Error("illegal external caller")}function Ag(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}var aM=void 0;function Qa(t){return Ag(t=Error(t),"warning"),t}function Kr(t,e){if(t!=null){var n=aM??(aM={}),i=n[t]||0;i>=e||(n[t]=i+1,Ag(t=Error(),"incident"),Mg(t))}}function rr(){return typeof BigInt=="function"}var ra=typeof Symbol=="function"&&typeof Symbol()=="symbol";function wi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Ss,oM=wi("jas",void 0,!0),im=wi(void 0,"0di"),Wa=wi(void 0,"1oa"),Un=wi(void 0,Symbol()),lM=wi(void 0,"0ub"),cM=wi(void 0,"0ubs"),Uu=wi(void 0,"0ubsb"),hM=wi(void 0,"0actk"),Zr=wi("m_m","kb",!0),sm=wi(),Rg={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},Cg=Object.defineProperties,me=ra?oM:"Va",rm=[];function ro(t,e){ra||me in t||Cg(t,Rg),t[me]|=e}function Gt(t,e){ra||me in t||Cg(t,Rg),t[me]=e}function ao(t){return ro(t,34),t}function eo(t){return ro(t,8192),t}Gt(rm,7),Ss=Object.freeze(rm);var Jr={};function En(t,e){return e===void 0?t.h!==sr&&!!(2&t.A[me]):!!(2&e)&&t.h!==sr}var sr={};function kc(t,e){if(t!=null){if(typeof t=="string")t=t?new Mi(t,Yr):ir();else if(t.constructor!==Mi)if(rd(t))t=t.length?new Mi(new Uint8Array(t),Yr):ir();else{if(!e)throw Error();t=void 0}}return t}var xc=class{constructor(e,n,i){this.g=e,this.h=n,this.j=i}next(){var e=this.g.next();return e.done||(e.value=this.h.call(this.j,e.value)),e}[Symbol.iterator](){return this}},uM=Object.freeze({});function Ig(t,e,n){var i,s=128&e?0:-1,r=t.length;(i=!!r)&&(i=(i=t[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)n(e-s,t[e]);if(i){t=t[r-1];for(let o in t)!isNaN(o)&&n(+o,t[o])}}var Pg={};function aa(t){return 128&t?Pg:void 0}function zc(t){return t.ib=!0,t}var dM=zc(t=>typeof t=="number"),am=zc(t=>typeof t=="string"),fM=zc(t=>typeof t=="boolean"),Vc=typeof nr.BigInt=="function"&&typeof nr.BigInt(0)=="bigint";function Ht(t){var e=t;if(am(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(dM(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Vc?BigInt(t):t=fM(t)?t?"1":"0":am(t)?t.trim()||"0":String(t)}var Nu=zc(t=>Vc?t>=mM&&t<=_M:t[0]==="-"?om(t,pM):om(t,gM)),pM=Number.MIN_SAFE_INTEGER.toString(),mM=Vc?BigInt(Number.MIN_SAFE_INTEGER):void 0,gM=Number.MAX_SAFE_INTEGER.toString(),_M=Vc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function om(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){let i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}var Lg,vM=typeof Uint8Array.prototype.slice=="function",tt=0,ft=0;function Fu(t){var e=t>>>0;tt=e,ft=(t-e)/4294967296>>>0}function ar(t){if(t<0){Fu(-t);let[e,n]=cd(tt,ft);tt=e>>>0,ft=n>>>0}else Fu(t)}function od(t){var e=Lg||(Lg=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),ft=0,tt=e.getUint32(0,!0)}function Dg(t,e){var n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:jr(t,e)}function yM(t,e){return Ht(rr()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):jr(t,e))}function Ug(t,e){return rr()?Ht(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Ht(ld(t,e))}function jr(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else rr()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+lm(n)+lm(t));return n}function lm(t){return t=String(t),"0000000".slice(t.length)+t}function ld(t,e){if(2147483648&e)if(rr())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=cd(t,e);t="-"+jr(n,i)}else t=jr(t,e);return t}function oo(t){if(t.length<16)ar(Number(t));else if(rr())t=BigInt(t),tt=Number(t&BigInt(4294967295))>>>0,ft=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");ft=tt=0;let n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){let r=Number(t.slice(i,s));ft*=1e6,(tt=1e6*tt+r)>=4294967296&&(ft+=Math.trunc(tt/4294967296),ft>>>=0,tt>>>=0)}if(e){let[i,s]=cd(tt,ft);tt=i,ft=s}}}function cd(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Zn(t){return Array.prototype.slice.call(t)}var js=typeof BigInt=="function"?BigInt.asIntN:void 0,Ou=typeof BigInt=="function"?BigInt.asUintN:void 0,Si=Number.isSafeInteger,lo=Number.isFinite,xs=Math.trunc,xM=Ht(0);function Ng(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function si(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Mc(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}var MM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function oa(t){switch(typeof t){case"bigint":return!0;case"number":return lo(t);case"string":return MM.test(t);default:return!1}}function qi(t){if(t!=null){if(!lo(t))throw Qa("enum");t|=0}return t}function or(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return lo(t)?0|t:void 0}function Fg(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return lo(t)?t>>>0:void 0}function Og(t,e){if(e??(e=1024),!oa(t))throw Qa("int64");var n=typeof t;switch(e){case 512:switch(n){case"string":return Sc(t);case"bigint":return String(js(64,t));default:return Vg(t)}case 1024:switch(n){case"string":return Hg(t);case"bigint":return Ht(js(64,t));default:return Gg(t)}case 0:switch(n){case"string":return Sc(t);case"bigint":return Ht(js(64,t));default:return Hc(t)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function Bg(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(oo(t),ld(tt,ft))}function kg(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(oo(t),jr(tt,ft))}function Hc(t){if(t=xs(t),!Si(t)){ar(t);var e=tt,n=ft;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=Dg(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function zg(t){return(t=xs(t))>=0&&Si(t)||(ar(t),t=Dg(tt,ft)),t}function Vg(t){return t=xs(t),Si(t)?t=String(t):(ar(t),t=ld(tt,ft)),t}function Sc(t){var e=xs(Number(t));return Si(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Bg(t))}function Hg(t){var e=xs(Number(t));return Si(e)?Ht(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),rr()?Ht(js(64,BigInt(t))):Ht(Bg(t)))}function Gg(t){return Si(t)?Ht(Hc(t)):Ht(Vg(t))}function bc(t){var e=typeof t;return t==null?t:e==="bigint"?Ht(js(64,t)):oa(t)?e==="string"?Hg(t):Gg(t):void 0}function hd(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(js(64,t));if(oa(t)){if(e==="string")return Sc(t);if(e==="number")return Hc(t)}}function Wg(t){if(t==null||typeof t=="string"||t instanceof Mi)return t}function Xg(t){if(typeof t!="string")throw Error();return t}function $i(t){if(t!=null&&typeof t!="string")throw Error();return t}function tn(t){return t==null||typeof t=="string"?t:void 0}function ud(t,e,n,i){return t!=null&&t[Zr]===Jr?t:Array.isArray(t)?((i=(n=0|t[me])|32&i|2&i)!==n&&Gt(t,i),new e(t)):(n?2&i?((t=e[im])||(ao((t=new e).A),t=e[im]=t),e=t):e=new e:e=void 0,e)}function SM(t,e,n){return(t=e?Og(t,1024):bc(t))==null?n?xM:void 0:t}function bM(t){return t}var EM={},TM=(function(){try{return Bc(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Za=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}},wM=TM?(Object.setPrototypeOf(Za.prototype,Map.prototype),Object.defineProperties(Za.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Za):class extends Map{constructor(){super()}};function cm(t){return t}function Eu(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var AM,Ki=class extends wM{constructor(t,e,n=cm,i=cm){super(),this.M=0|t[me],this.N=e,this.ba=n,this.na=this.N?RM:i;for(let s=0;s<t.length;s++){let r=t[s],a=n(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.M),super.set(a,o)}}ea(t){return eo(Array.from(super.entries(),t))}clear(){Eu(this),super.clear()}delete(t){return Eu(this),super.delete(this.ba(t,!0,!1))}entries(){if(this.N){var t=super.keys();t=new xc(t,CM,this)}else t=super.entries();return t}values(){if(this.N){var t=super.keys();t=new xc(t,Ki.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.N?super.forEach((n,i,s)=>{t.call(e,s.get(i),i,s)}):super.forEach(t,e)}set(t,e){return Eu(this),(t=this.ba(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.na(e,!0,!0,this.N,!1,this.M))}gb(t){var e=this.ba(t[0],!1,!0);t=t[1],t=this.N?t===void 0?null:t:this.na(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.ba(t,!1,!1))}get(t){t=this.ba(t,!1,!1);var e=super.get(t);if(e!==void 0){var n=this.N;return n?((n=this.na(e,!1,!0,n,this.Fa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function RM(t,e,n,i,s,r){return t=ud(t,i,n,r),s&&(t=fd(t)),t}function CM(t){return[t,this.get(t)]}function hm(){return AM||(AM=new Ki(ao([]),void 0,void 0,void 0,EM))}function Gc(t){return Un?t[Un]:void 0}function Ec(t,e){for(let n in t)!isNaN(n)&&e(t,+n,t[n])}Ki.prototype.toJSON=void 0;var IM,PM,LM,Bu=class{},DM={cb:!0};function UM(t,e){e<100||Kr(cM,1)}function Wc(t,e,n,i){var s=i!==void 0;i=!!i;var r,a=Un;!s&&ra&&a&&(r=t[a])&&Ec(r,UM),a=[];var o=t.length;r=4294967295;var l=!1,c=!!(64&e),h=c?128&e?0:-1:void 0;if(!(1&e)){var u=o&&t[o-1];u!=null&&typeof u=="object"&&u.constructor===Object?r=--o:u=void 0,!c||128&e||s||(l=!0,r=(IM??bM)(r-h,h,t,u,void 0)+h)}e=void 0;for(var d=0;d<o;d++){let p=t[d];if(p!=null&&(p=n(p,i))!=null)if(c&&d>=r){let g=d-h;(e??(e={}))[g]=p}else a[d]=p}if(u)for(let p in u){if((o=u[p])==null||(o=n(o,i))==null)continue;let g;d=+p,c&&!Number.isNaN(d)&&(g=d+h)<r?a[g]=o:(e??(e={}))[p]=o}return e&&(l?a.push(e):a[r]=e),s&&Un&&(t=Gc(t))&&t instanceof Bu&&(a[Un]=(function(p){var g=new Bu;return Ec(p,(v,m,f)=>{g[m]=Zn(f)}),g.ka=p.ka,g})(t)),a}function NM(t){return t[0]=to(t[0]),t[1]=to(t[1]),t}function to(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Nu(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[me];return t.length===0&&1&e?void 0:Wc(t,e,to)}if(t!=null&&t[Zr]===Jr)return $g(t);if(t instanceof Mi){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Eg){for(var n="",i=0,s=e.length-10240;i<s;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),bg(),n=Sg[n],i=Array(Math.floor(e.length/3)),s=n[64]||"";let c=0,h=0;for(;c<e.length-2;c+=3){var r=e[c],a=e[c+1],o=e[c+2],l=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=l+r+a+o}switch(l=0,o=s,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||s;case 1:e=e[c],i[h]=n[e>>2]+n[(3&e)<<4|l>>4]+o+s}e=i.join("")}t=t.g=e}return t}return t instanceof Ki?t=t.size!==0?t.ea(NM):void 0:void 0}return t}function $g(t){return Wc(t=t.A,0|t[me],to)}function Qs(t,e){return qg(t,e[0],e[1])}function qg(t,e,n,i=0){if(t==null){var s=32;n?(t=[n],s|=128):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(s=0|t[me],Qp&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Qp)throw Error("carr");Kr(hM,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&Gt(t,s|i),t;if(n&&(s|=128,n!==t[0]))throw Error("mid");e:{s|=64;var r=(n=t).length;if(r){var a=r-1;let l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(n[r+e]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Gt(t,64|s|i),t}function FM(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[me];return t.length===0&&1&n?void 0:um(t,n,e)}if(t!=null&&t[Zr]===Jr)return dm(t);if(t instanceof Ki){if(2&(e=t.M))return t;if(!t.size)return;if(n=ao(t.ea()),t.N)for(t=0;t<n.length;t++){let i=n[t],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[Zr]===Jr?dm(s):Array.isArray(s)?um(s,0|s[me],!!(32&e)):void 0,i[1]=s}return n}return t instanceof Mi?t:void 0}function um(t,e,n){return 2&e||(!n||4096&e||16&e?t=la(t,e,!1,n&&!(16&e)):(ro(t,34),4&e&&Object.freeze(t))),t}function dd(t,e,n){return t=new t.constructor(e),n&&(t.h=sr),t.m=sr,t}function dm(t){var e=t.A,n=0|e[me];return En(t,n)?t:pd(t,e,n)?dd(t,e):la(e,n)}function la(t,e,n,i){return i??(i=!!(34&e)),t=Wc(t,e,FM,i),i=32,n&&(i|=2),Gt(t,e=16769217&e|i),t}function fd(t){var e=t.A,n=0|e[me];return En(t,n)?pd(t,e,n)?dd(t,e,!0):new t.constructor(la(e,n,!1)):t}function ca(t){if(t.h!==sr)return!1;var e=t.A;return ro(e=la(e,0|e[me]),2048),t.A=e,t.h=void 0,t.m=void 0,!0}function lr(t){if(!ca(t)&&En(t,0|t.A[me]))throw Error()}function bs(t,e){e===void 0&&(e=0|t[me]),32&e&&!(4096&e)&&Gt(t,4096|e)}function pd(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Gt(e,2|n),t.h=sr,!0)}var Yg=Ht(0),ms={};function Dt(t,e,n,i){if((e=Zi(t.A,e,void 0,i))!==null||n&&t.m!==sr)return e}function Zi(t,e,n,i){if(e===-1)return null;var s=e+(n?0:-1),r=t.length-1;if(!(r<1+(n?0:-1))){if(s>=r){var a=t[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[e];var o=!0}else{if(s!==r)return;n=a}}else n=t[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[s]=i,i}return n}}function ke(t,e,n,i){lr(t);var s=t.A;return Ot(s,0|s[me],e,n,i),t}function Ot(t,e,n,i,s){var r=n+(s?0:-1),a=t.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return r<=a?(t[r]=i,e):(i!==void 0&&(n>=(a=(e??(e=0|t[me]))>>14&1023||536870912)?i!=null&&(t[a+(s?0:-1)]={[n]:i}):t[r]=i),e)}function Kg(t,e,n,i){var s=t.A;return t0(s,0|s[me],e,t=Qg(t,i)===n?n:-1)!==void 0}function Ks(){return uM===void 0?2:4}function Zs(t,e,n,i,s){var r=t.A,a=0|r[me];i=En(t,a)?1:i,s=!!s||i===3,i===2&&ca(t)&&(a=0|(r=t.A)[me]);var o=(t=md(r,e))===Ss?7:0|t[me],l=gd(o,a),c=!(4&l);if(c){4&l&&(t=Zn(t),o=0,l=vs(l,a),a=Ot(r,a,e,t));let h=0,u=0;for(;h<t.length;h++){let d=n(t[h]);d!=null&&(t[u++]=d)}u<h&&(t.length=u),n=-513&l|4,l=n&=-1025,l&=-4097}return l!==o&&(Gt(t,l),2&l&&Object.freeze(t)),Zg(t,l,r,a,e,i,c,s)}function Zg(t,e,n,i,s,r,a,o){var l=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?_s(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Gt(t,e),Object.freeze(t)):(r===2&&_s(e)&&(t=Zn(t),l=0,e=vs(e,i),i=Ot(n,i,s,t)),_s(e)||(o||(e|=16),e!==l&&Gt(t,e))),2&e||!(4096&e||16&e)||bs(n,i),t}function md(t,e,n){return t=Zi(t,e,n),Array.isArray(t)?t:Ss}function gd(t,e){return 2&e&&(t|=2),1|t}function _s(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Jg(t){return kc(t,!0)}function jg(t){t=Zn(t);for(let e=0;e<t.length;e++){let n=t[e]=Zn(t[e]);Array.isArray(n[1])&&(n[1]=ao(n[1]))}return eo(t)}function co(t,e,n,i){lr(t),Ot(t=t.A,0|t[me],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Es(t,e,n){if(2&e)throw Error();var i=aa(e),s=md(t,n,i),r=s===Ss?7:0|s[me],a=gd(r,e);return(2&a||_s(a)||16&a)&&(a===r||_s(a)||Gt(s,a),s=Zn(s),r=0,a=vs(a,e),Ot(t,e,n,s,i)),(a&=-13)!==r&&Gt(s,a),s}function Qg(t,e){return vd(_d(t=t.A),t,void 0,e)}function _d(t){if(ra)return t[Wa]??(t[Wa]=new Map);if(Wa in t)return t[Wa];var e=new Map;return Object.defineProperty(t,Wa,{value:e}),e}function e0(t,e,n,i,s){var r=_d(t),a=vd(r,t,e,n,s);return a!==i&&(a&&(e=Ot(t,e,a,void 0,s)),r.set(n,i)),e}function vd(t,e,n,i,s){var r=t.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];Zi(e,o,s)!=null&&(r!==0&&(n=Ot(e,n,r,void 0,s)),r=o)}return t.set(i,r),r}function yd(t,e,n){var i=0|t[me],s=aa(i),r=Zi(t,n,s);if(r!=null&&r[Zr]===Jr){if(!En(r))return ca(r),r.A;var a=r.A}else Array.isArray(r)&&(a=r);if(a){let o=0|a[me];2&o&&(a=la(a,o))}return(a=Qs(a,e))!==r&&Ot(t,i,n,a,s),a}function t0(t,e,n,i,s){var r=!1;if((i=Zi(t,i,s,a=>{var o=ud(a,n,!1,e);return r=o!==a&&o!=null,o}))!=null)return r&&!En(i)&&bs(t,e),i}function at(t,e,n,i){var s=t.A,r=0|s[me];if((e=t0(s,r,e,n,i))==null)return e;if(!En(t,r=0|s[me])){let a=fd(e);a!==e&&(ca(t)&&(r=0|(s=t.A)[me]),bs(s,r=Ot(s,r,n,e=a,i)))}return e}function n0(t,e,n,i,s,r,a,o){var l=En(t,n);r=l?1:r,a=!!a||r===3,l=o&&!l,(r===2||l)&&ca(t)&&(n=0|(e=t.A)[me]);var c=(t=md(e,s))===Ss?7:0|t[me],h=gd(c,n);if(o=!(4&h)){var u=t,d=n;let p=!!(2&h);p&&(d|=2);let g=!p,v=!0,m=0,f=0;for(;m<u.length;m++){let T=ud(u[m],i,!1,d);if(T instanceof i){if(!p){let E=En(T);g&&(g=!E),v&&(v=E)}u[f++]=T}}f<m&&(u.length=f),h|=4,h=v?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==c&&(Gt(t,h),2&h&&Object.freeze(t)),l&&!(8&h||!t.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(_s(h)&&(t=Zn(t),h=vs(h,n),n=Ot(e,n,s,t)),i=t,l=h,c=0;c<i.length;c++)(u=i[c])!==(h=fd(u))&&(i[c]=h);l|=8,Gt(t,h=l=i.length?4096|l:-4097&l)}return Zg(t,h,e,n,s,r,o,a)}function Ji(t,e,n){var i=t.A;return n0(t,i,0|i[me],e,n,Ks(),!1,!0)}function i0(t){return t==null&&(t=void 0),t}function Ie(t,e,n,i,s){return ke(t,n,i=i0(i),s),i&&!En(i)&&bs(t.A),t}function bi(t,e,n,i){e:{var s=i=i0(i);lr(t);let r=t.A,a=0|r[me];if(s==null){let o=_d(r);if(vd(o,r,a,n)!==e)break e;o.set(n,0)}else a=e0(r,a,n,e);Ot(r,a,e,s)}return i&&!En(i)&&bs(t.A),t}function ku(t,e,n){lr(t);var i=t.A,s=0|i[me];if(n==null)return Ot(i,s,e),t;var r=n===Ss?7:0|n[me],a=r,o=_s(r),l=o||Object.isFrozen(n),c=!0,h=!0;for(let d=0;d<n.length;d++){var u=n[d];o||(u=En(u),c&&(c=!u),h&&(h=u))}return o||(r=c?13:5,r=h?-4097&r:4096|r),l&&r===a||(n=Zn(n),a=0,r=vs(r,s)),r!==a&&Gt(n,r),s=Ot(i,s,e,n),2&r||!(4096&r||16&r)||bs(i,s),t}function vs(t,e){return-273&(2&e?2|t:-3&t)}function no(t,e,n,i){var s=i;lr(t),t=n0(t,i=t.A,0|i[me],n,e,2,!0),s=s??new n,t.push(s),e=n=t===Ss?7:0|t[me],(s=En(s))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Gt(t,n),s||bs(i)}function Kn(t,e,n){return or(Dt(t,e,n))}function Ft(t,e){return Dt(t,e,void 0,si)??0}function fm(t,e,n){return at(t,e,n=Qg(t,Bd)===n?n:-1,void 0)}function zu(t,e){co(t,3,e==null?e:Mc(e),!1)}function Ei(t,e,n){if(n!=null){if(typeof n!="number"||!lo(n))throw Qa("int32");n|=0}ke(t,e,n)}function Tu(t,e,n){return ke(t,e,n==null?n:Og(n))}function fc(t,e,n){return ke(t,e,n==null?n:(function(i){if(!oa(i))throw Qa("uint64");switch(typeof i){case"string":var s=xs(Number(i));return Si(s)&&s>=0?i=Ht(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=rr()?Ht(Ou(64,BigInt(i))):Ht(kg(i))),i;case"bigint":return Ht(Ou(64,i));default:return Si(i)?i=Ht(zg(i)):((i=xs(i))>=0&&Si(i)?i=String(i):(ar(i),i=jr(tt,ft)),i=Ht(i)),i}})(n))}function Ce(t,e,n){ke(t,e,n==null?n:Ng(n))}function Xr(t,e,n){co(t,e,n==null?n:Ng(n),0)}function Nn(t,e,n){co(t,e,$i(n),"")}function Tc(t,e,n){{lr(t);let a=t.A,o=0|a[me];if(n==null)Ot(a,o,e);else{var i=t=n===Ss?7:0|n[me],s=_s(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=Zn(n),i=0,t=vs(t,o),r=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,s=0;s<n.length;s++){let l=n[s],c=Xg(l);Object.is(l,c)||(r&&(n=Zn(n),i=0,t=vs(t,o),r=!1),n[s]=c)}t!==i&&(r&&(n=Zn(n),t=vs(t,o)),Gt(n,t)),Ot(a,o,e,n)}}}function Xc(t,e,n){lr(t),Zs(t,e,tn,2,!0).push(Xg(n))}var Gr=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function $c(t,e){if(typeof t=="string")return new Gr(Tg(t),e);if(Array.isArray(t))return new Gr(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Gr(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Gr(t,!1);if(t.constructor===Mi)return e=ad(t)||new Uint8Array(0),new Gr(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Gr(t,!1);throw Error()}function xd(t,e){var n=0,i=0,s=0,r=t.h,a=t.g;do{var o=r[a++];n|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(er(t,a),!(128&o))return e(n>>>0,i>>>0);throw Error()}function Md(t){for(var e=0,n=t.g,i=n+10,s=t.h;n<i;){let r=s[n++];if(e|=r,!(128&r))return er(t,n),!!(127&e)}throw Error()}function ji(t){var e=t.h,n=t.g,i=e[n++],s=127&i;if(128&i&&(s|=(127&(i=e[n++]))<<7,128&i&&(s|=(127&(i=e[n++]))<<14,128&i&&(s|=(127&(i=e[n++]))<<21,128&i&&(s|=(i=e[n++])<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return er(t,n),s}function Ti(t){return ji(t)>>>0}function wc(t){return xd(t,Ug)}function Vu(t){var e=t.h,n=t.g,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],er(t,t.g+4),(i|s<<8|r<<16|e<<24)>>>0}function Ac(t){var e=Vu(t);t=2*(e>>31)+1;var n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function OM(t){return ji(t)}function er(t,e){if(t.g=e,e>t.j)throw Error()}function s0(t,e){if(e<0)throw Error();var n=t.g;if((e=n+e)>t.j)throw Error();return t.g=e,n}function r0(t,e){if(e==0)return ir();var n=s0(t,e);return t.fa&&t.o?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):vM?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?ir():new Mi(n,Yr)}var BM=class{constructor(t,e,n,i){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(t,e,n,i)}init(t,e,n,{fa:i=!1,ma:s=!1}={}){this.fa=i,this.ma=s,t&&(t=$c(t,this.ma),this.h=t.buffer,this.o=t.g,this.m=e||0,this.j=n!==void 0?this.m+n:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},pm=[],Qr=0;function a0(t,e,n,i){if(Rc.length){let s=Rc.pop();return s.v(i),s.g.init(t,e,n,i),s}return new kM(t,e,n,i)}function o0(t){t.g.clear(),t.j=-1,t.h=-1,Rc.length<100&&Rc.push(t)}function l0(t){var e=t.g;if(e.g==e.j)return!1;t.m=t.g.g;var n=Ti(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.j=e,t.h=n,!0}function pc(t){try{switch(t.h){case 0:t.h!=0?pc(t):Md(t.g);break;case 1:var e=t.g;er(e,e.g+8);break;case 2:if(t.h!=2)pc(t);else{var n=Ti(t.g),i=t.g;er(i,i.g+n)}break;case 5:var s=t.g;er(s,s.g+4);break;case 3:c0();let r=t.j;try{for(;;){if(!l0(t))throw Error();if(t.h==4){if(t.j!=r)throw Error();break}pc(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Qr>0&&Qr--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function c0(){if(Qr>=100)throw new SyntaxError;Qr++}function ho(t,e,n){var i=t.g.j,s=Ti(t.g),r=(s=t.g.g+s)-i;if(r<=0&&(t.g.j=s,n(e,t,void 0,void 0,void 0),r=s-t.g.g),r)throw Error();return t.g.g=s,t.g.j=i,e}function Sd(t){var e=Ti(t.g),n=s0(t=t.g,e);if(t=t.h,j2){var i,s=t;(i=bu)||(i=bu=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(o){if(ac===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ac=!0}catch{ac=!1}}throw!ac&&(bu=void 0),o}}else{e=(r=n)+e,n=[];let o,l=null;for(;r<e;){var a=t[r++];a<128?n.push(a):a<224?r>=e?qs():(o=t[r++],a<194||(192&o)!=128?(r--,qs()):n.push((31&a)<<6|63&o)):a<240?r>=e-1?qs():(o=t[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[r++]))!=128?(r--,qs()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?qs():(o=t[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,qs()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):qs(),n.length>=8192&&(l=jp(l,n),n.length=0)}r=jp(l,n)}return r}function bd(t){var e=Ti(t.g);return r0(t.g,e)}function uo(t,e,n){var i=Ti(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var kM=class{constructor(t,e,n,i){if(pm.length){let s=pm.pop();s.init(t,e,n,i),t=s}else t=new BM(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.j=-1,this.v(i)}v({ra:t=!1}={}){this.ra=t}},Rc=[];function zM(t){return new Cc(4294967295&t,Math.floor(t/4294967296))}function mm(t){return t?/^\d+$/.test(t)?(oo(t),new Cc(tt,ft)):null:VM||(VM=new Cc(0,0))}var VM,Cc=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function HM(t){return new Ic(4294967295&t,Math.floor(t/4294967296))}function h0(t){return t?/^-?\d+$/.test(t)?(oo(t),new Ic(tt,ft)):null:GM||(GM=new Ic(0,0))}var GM,gm,_m,vm,wu,ym,Xa,oc,Ic=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function u0(t,e,n){return typeof BigInt64Array<"u"?(Xa||(Xa=new BigInt64Array(1),oc=new Uint32Array(Xa.buffer),Xa[0]=BigInt(1),ym=oc[0]===1),Xa[0]=t,new e(oc[t=ym?0:1],oc[1-t])):(wu||(gm=BigInt(Number.MIN_SAFE_INTEGER),_m=BigInt(Number.MAX_SAFE_INTEGER),vm=BigInt(4294967295),wu=BigInt(32)),t>=gm&&t<=_m?n(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&vm),Number(t>>wu))))}function Yi(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function ha(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function fo(t,e){if(e>=0)ha(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function WM(t,e){oo(e),(function(n){var i=ft>>31;n(tt<<1^i,(ft<<1|tt>>>31)^i)})((n,i)=>{Yi(t,n>>>0,i>>>0)})}function io(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}var XM=class{constructor(){this.g=[]}length(){return this.g.length}end(){var t=this.g;return this.g=[],t}};function ea(t,e){e.length!==0&&(t.j.push(e),t.h+=e.length)}function fn(t,e,n){ha(t.g,8*e+n)}function Ed(t,e){return fn(t,e,2),e=t.g.end(),ea(t,e),e.push(t.h),e}function Td(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function d0(t,e,n){if(n!=null)switch(fn(t,e,0),typeof n){case"number":t=t.g,ar(n),Yi(t,tt,ft);break;case"bigint":n=u0(n,Ic,HM),Yi(t.g,n.h,n.g);break;default:n=h0(n),Yi(t.g,n.h,n.g)}}function po(t,e,n){fn(t,e,2),ha(t.g,n.length),ea(t,t.g.end()),ea(t,n)}function Pc(t,e,n,i){n!=null&&(e=Ed(t,e),i(n,t),Td(t,e))}var $M=class{constructor(){this.j=[],this.h=0,this.g=new XM}};function f0(t){typeof t=="string"&&h0(t)}function Jn(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var wd=Jn(),p0=Jn(),Ad=Jn(),qc=Jn(),Rd=Jn(),Yc=Jn(),qM=Jn(),YM=Jn(),Kc=Jn(),KM=Jn(),Zc=Jn(),Cd=Jn();function Ai(t,e,n){var i=t.A;Un&&Un in i&&(i=i[Un])&&delete i[e.g],e.h?e.o(t,e.h,e.g,n,e.j):e.o(t,e.g,n,e.j)}var he=class{constructor(t,e){this.A=qg(t,e,void 0,2048)}toJSON(){return $g(this)}o(){var t=US,e=this.A,n=t.g,i=Un;if(ra&&i&&e[i]?.[n]!=null&&Kr(lM,3),e=t.g,sm&&Un&&sm===void 0&&(i=(n=this.A)[Un])&&(i=i.ka))try{i(n,e,DM)}catch(s){Mg(s)}return t.h?t.m(this,t.h,t.g,t.j):t.m(this,t.g,t.defaultValue,t.j)}clone(){var t=this.A,e=0|t[me];return pd(this,t,e)?dd(this,t,!0):new this.constructor(la(t,e,!1))}};he.prototype[Zr]=Jr,he.prototype.toString=function(){return this.A.toString()};var ua=class{constructor(t,e,n){this.g=t,this.h=e,t=wd,this.j=!!t&&n===t||!1}};function Jc(t,e){return new ua(t,e,wd)}function m0(t,e,n,i,s){Pc(t,n,y0(e,i),s)}var g0,_0,ZM=Jc(function(t,e,n,i,s){return t.h===2&&(ho(t,yd(e,i,n),s),!0)},m0),JM=Jc(function(t,e,n,i,s){return t.h===2&&(ho(t,yd(e,i,n),s),!0)},m0),jc=Symbol(),Qc=Symbol(),Hu=Symbol(),xm=Symbol(),Mm=Symbol();function cr(t,e,n,i){var s=i[t];if(s)return s;(s={}).Ea=i,s.ca=(function(u){switch(typeof u){case"boolean":return PM||(PM=[0,void 0,!0]);case"number":return u>0?void 0:u===0?LM||(LM=[0,void 0]):[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ia=r,typeof(r=i[++a])=="function"&&(s.wa=!0,g0??(g0=r),_0??(_0=i[a+1]),r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=i[++a]}for(l=1;r!==void 0;){let u;typeof r=="number"&&(l+=r,r=i[++a]);var c=void 0;if(r instanceof ua?u=r:(u=ZM,a--),u?.j){r=i[++a],c=i;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);l<h;l++){let d=o[l];c?n(s,l,u,c,d):e(s,l,u,d)}}return i[t]=s}function v0(t){return Array.isArray(t)?t[0]instanceof ua?t:[JM,t]:[t,void 0]}function y0(t,e){return t instanceof he?t.A:Array.isArray(t)?Qs(t,e):void 0}function Id(t,e,n,i){var s=n.g;t[e]=i?(r,a,o)=>s(r,a,o,i):s}function Pd(t,e,n,i,s){var r,a,o=n.g;t[e]=(l,c,h)=>o(l,c,h,a||(a=cr(Qc,Id,Pd,i).ca),r||(r=Ld(i)),s)}function Ld(t){var e=t[Hu];if(e!=null)return e;var n=cr(Qc,Id,Pd,t);return e=n.wa?(i,s)=>g0(i,s,n):(i,s)=>{e:{c0();try{for(;l0(s)&&s.h!=4;){let d=s.j,p=n[d];if(p==null){let g=n.ia;if(g){let v=g[d];if(v){let m=QM(v);m!=null&&(p=n[d]=m)}}}if(p==null||!p(s,i,d)){var r=s;let g=r.m;if(pc(r),r.ra)var a=void 0;else{let v=r.g.g-g;r.g.g=g,a=r0(r.g,v)}r=void 0;var o=i,l=d,c=a;c&&((r=o[Un]??(o[Un]=new Bu))[l]??(r[l]=[])).push(c)}}let u=Gc(i);u&&(u.ka=n.Ea[Mm]);var h=!0;break e}catch(u){throw u instanceof RangeError?new SyntaxError:u}finally{Qr>0&&Qr--}h=void 0}return h},t[Hu]=e,t[Mm]=jM.bind(t),e}function jM(t,e,n,i){var s=this[Qc],r=this[Hu],a=Qs(void 0,s.ca),o=Gc(t);if(o){var l=!1,c=s.ia;if(c){if(s=(h,u,d)=>{if(d.length!==0)if(c[u])for(let p of d){h=a0(p);try{l=!0,r(a,h)}finally{o0(h)}}else i?.(t,u,d)},e==null)Ec(o,s);else if(o!=null){let h=o[e];h&&s(o,e,h)}if(l){let h=0|t[me];if(2&h&&2048&h&&!n?.cb)throw Error();let u=aa(h),d=(p,g)=>{if(Zi(t,p,u)!=null){if(n?.lb===1)return;throw Error()}g!=null&&(h=Ot(t,h,p,g,u)),delete o[p]};e==null?Ig(a,0|a[me],(p,g)=>{d(p,g)}):d(e,Zi(a,e,u))}}}}function QM(t){var e=(t=v0(t))[0].g;if(t=t[1]){let n=Ld(t),i=cr(Qc,Id,Pd,t).ca;return(s,r,a)=>e(s,r,a,i,n)}return e}function eh(t,e,n){t[e]=n.h}function th(t,e,n,i){var s,r,a=n.h;t[e]=(o,l,c)=>a(o,l,c,r||(r=cr(jc,eh,th,i).ca),s||(s=x0(i)))}function x0(t){var e=t[xm];if(!e){let n=cr(jc,eh,th,t);e=(i,s)=>M0(i,s,n),t[xm]=e}return e}function M0(t,e,n){Ig(t,0|t[me],(i,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ia)&&(l=l[o])){var c=(l=v0(l))[0].h;if(l=l[1]){let h=x0(l),u=cr(jc,eh,th,l).ca;l=a.wa?_0(u,h):(d,p,g)=>c(d,p,g,u,h)}else l=c;return a[o]=l}})(n,i);r?r(e,s,i):i<500||Kr(Uu,3)}}),(t=Gc(t))&&Ec(t,(i,s,r)=>{for(ea(e,e.g.end()),i=0;i<r.length;i++)ea(e,ad(r[i])||new Uint8Array(0))})}var eS=Ht(0);function Qi(t,e,n){if(Array.isArray(e)){var i=0|e[me];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=t(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),t=1|i,n&&(t=-1537&t|4),t!==i&&Gt(e,t),n&&2&t&&Object.freeze(e),e}}var S0=(t,e)=>{var n=new $M;M0(t.A,n,cr(jc,eh,th,e)),ea(n,n.g.end()),t=new Uint8Array(n.h);var i=(e=n.j).length,s=0;for(let r=0;r<i;r++){let a=e[r];t.set(a,s),s+=a.length}return n.j=[t],t};function kt(t,e,n){return new ua(t,e,n)}function es(t,e,n){return new ua(t,e,n)}function Yt(t,e,n){Ot(t,0|t[me],e,n,aa(0|t[me]))}var tS=Jc(function(t,e,n,i,s){if(t.h!==2)return!1;if(t=Zn(t=ho(t,Qs([void 0,void 0],i),s)),s=aa(i=0|e[me]),2&i)throw Error();var r=Zi(e,n,s);if(r instanceof Ki)2&r.M?((r=r.ea()).push(t),Ot(e,i,n,r,s)):r.gb(t);else if(Array.isArray(r)){var a=0|r[me];8192&a||Gt(r,a|=8192),2&a&&Ot(e,i,n,r=jg(r),s),r.push(t)}else Ot(e,i,n,eo([t]),s);return!0},function(t,e,n,i,s){if(e instanceof Ki)e.forEach((r,a)=>{Pc(t,n,Qs([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&Pc(t,n,Qs(a,i),s)}eo(e)}});function b0(t,e,n){(e=si(e))!=null&&(fn(t,n,5),t=t.g,od(e),io(t,tt))}function Dd(t,e,n){(e=hd(e))!=null&&(f0(e),d0(t,n,e))}function E0(t,e,n){(e=or(e))!=null&&e!=null&&(fn(t,n,0),fo(t.g,e))}function T0(t,e,n){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(fn(t,n,0),t.g.g.push(e?1:0))}function w0(t,e,n){(e=tn(e))!=null&&po(t,n,xg(e))}function A0(t,e,n,i,s){Pc(t,n,y0(e,i),s)}function Ud(t,e,n){(e=Wg(e))!=null&&po(t,n,$c(e,!0).buffer)}function R0(t,e,n){(e=Fg(e))!=null&&e!=null&&(fn(t,n,0),ha(t.g,e))}function C0(t,e,n){(e=or(e))!=null&&(e=parseInt(e,10),fn(t,n,0),fo(t.g,e))}function I0(t,e,n){return(t.h===5||t.h===2)&&(e=Es(e,0|e[me],n),t.h==2?uo(t,Ac,e):e.push(Ac(t.g)),!0)}function P0(t,e,n){return t.h===0&&(Yt(e,n,wc(t.g)),!0)}function L0(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[me],n),t.h==2?uo(t,ji,e):e.push(ji(t.g)),!0)}function D0(t,e,n){return t.h===2&&(Yt(e,n,(t=bd(t))===ir()?void 0:t),!0)}var Sm=kt(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=Vu(i);var s=Vu(i);i=2*(s>>31)+1;var r=s>>>20&2047;return t=4294967296*(1048575&s)+t,Yt(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=si(e))!=null&&(fn(t,n,1),t=t.g,(n=Lg||(Lg=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),tt=n.getUint32(0,!0),ft=n.getUint32(4,!0),io(t,tt),io(t,ft))},KM),Ut=kt(function(t,e,n){return t.h===5&&(Yt(e,n,Ac(t.g)),!0)},b0,Kc),nS=es(I0,function(t,e,n){if((e=Qi(si,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(fn(i,s,5),i=i.g,od(r),io(i,tt))}},Kc),Nd=es(I0,function(t,e,n){if((e=Qi(si,e,!0))!=null&&e.length){fn(t,n,2),ha(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,od(e[i]),io(n,tt)}},Kc),U0=kt(function(t,e,n){return t.h===5&&(Yt(e,n,(t=Ac(t.g))===0?void 0:t),!0)},b0,Kc),$a=kt(function(t,e,n){return P0(t,e,n)},Dd,Yc),St=kt(function(t,e,n){return P0(t,e,n)},Dd,Yc),iS=es(function(t,e,n){return t.h!==0&&t.h!==2?t=!1:(e=Es(e,0|e[me],n),t.h==2?uo(t,wc,e):e.push(wc(t.g)),t=!0),t},function(t,e,n){if((e=Qi(hd,e,!1))!=null)for(let i=0;i<e.length;i++)d0(t,n,e[i])},Yc),mc=kt(function(t,e,n){return t.h!==0?e=!1:(Yt(e,n,(t=wc(t.g))===eS?void 0:t),e=!0),e},Dd,Yc),Lc=kt(function(t,e,n){return t.h!==0?t=!1:(Yt(e,n,xd(t.g,yM)),t=!0),t},function(t,e,n){if(e=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(Ou(64,i));if(oa(i)){if(s==="string")return s=xs(Number(i)),Si(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=kg(i)),i;if(s==="number")return zg(i)}})(e),e!=null&&(typeof e=="string"&&mm(e),e!=null))switch(fn(t,n,0),typeof e){case"number":t=t.g,ar(e),Yi(t,tt,ft);break;case"bigint":n=u0(e,Cc,zM),Yi(t.g,n.h,n.g);break;default:n=mm(e),Yi(t.g,n.h,n.g)}},qM),je=kt(function(t,e,n){return t.h===0&&(Yt(e,n,ji(t.g)),!0)},E0,qc),bm=es(L0,function(t,e,n){if((e=Qi(or,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(fn(i,s,0),fo(i.g,r))}},qc),da=es(L0,function(t,e,n){if((e=Qi(or,e,!0))!=null&&e.length){n=Ed(t,n);for(let i=0;i<e.length;i++)fo(t.g,e[i]);Td(t,n)}},qc),Js=kt(function(t,e,n){return t.h===0&&(Yt(e,n,(t=ji(t.g))===0?void 0:t),!0)},E0,qc),Ge=kt(function(t,e,n){return t.h===0&&(Yt(e,n,Md(t.g)),!0)},T0,p0),ys=kt(function(t,e,n){return t.h===0&&(Yt(e,n,(t=Md(t.g))===!1?void 0:t),!0)},T0,p0),en=es(function(t,e,n){return t.h===2&&(t=Sd(t),Es(e,0|e[me],n).push(t),!0)},function(t,e,n){if((e=Qi(tn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&po(i,s,xg(r))}},Ad),Wi=kt(function(t,e,n){return t.h===2&&(Yt(e,n,(t=Sd(t))===""?void 0:t),!0)},w0,Ad),ne=kt(function(t,e,n){return t.h===2&&(Yt(e,n,Sd(t)),!0)},w0,Ad),yt=(function(t,e,n=wd){return new ua(t,e,n)})(function(t,e,n,i,s){return t.h===2&&(i=Qs(void 0,i),Es(e,0|e[me],n).push(i),ho(t,i,s),!0)},function(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)A0(t,e[r],n,i,s);1&(t=0|e[me])||Gt(e,1|t)}}),Ze=Jc(function(t,e,n,i,s,r){if(t.h!==2)return!1;var a=0|e[me];return e0(e,a,r,n,aa(a)),ho(t,e=yd(e,i,n),s),!0},A0),$r=kt(function(t,e,n){return t.h===2&&(Yt(e,n,bd(t)),!0)},Ud,Zc),N0=es(function(t,e,n){return t.h===2&&(t=bd(t),Es(e,0|e[me],n).push(t),!0)},function(t,e,n){if((e=Qi(Wg,e,!1))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&po(i,s,$c(r,!0).buffer)}},Zc),F0=kt(function(t,e,n){return t.h===0&&(Yt(e,n,Ti(t.g)),!0)},R0,Rd),sS=es(function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[me],n),t.h==2?uo(t,Ti,e):e.push(Ti(t.g)),!0)},function(t,e,n){if((e=Qi(Fg,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(fn(i,s,0),ha(i.g,r))}},Rd),rS=kt(function(t,e,n){return t.h===0&&(Yt(e,n,(t=Ti(t.g))===0?void 0:t),!0)},R0,Rd),ve=kt(function(t,e,n){return t.h===0&&(Yt(e,n,ji(t.g)),!0)},C0,Cd),gc=kt(function(t,e,n){return t.h===0&&(Yt(e,n,(t=ji(t.g))===0?void 0:t),!0)},C0,Cd),aS=kt(function(t,e,n){return t.h!==0?t=!1:(Yt(e,n,(function(i){return xd(i,(s,r)=>{var a=-(1&s);return Ug(s=(s>>>1|r<<31)^a,r>>>1^a)})})(t.g)),t=!0),t},function(t,e,n){if((e=hd(e))!=null&&(f0(e),e!=null))switch(fn(t,n,0),typeof e){case"number":t=t.g,e=(n=e)<0,Fu(n=2*Math.abs(n)),n=tt;let i=ft;e&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),Yi(t,tt=n,ft=i);break;case"bigint":t=t.g,e=e<<BigInt(1)^e>>BigInt(63),tt=Number(BigInt.asUintN(32,e)),ft=Number(BigInt.asUintN(32,e>>BigInt(32))),Yi(t,tt,ft);break;default:WM(t.g,e)}},YM),Gu=class{constructor(e,n){var i=On;this.g=e,this.h=n,this.m=at,this.o=Ie,this.defaultValue=void 0,this.j=i.jb!=null?Pg:void 0}register(){Bc(this)}};function Ri(t,e){return new Gu(t,e)}function Ts(t,e){return(n,i)=>{e:{let r={ma:!0};i&&Object.assign(r,i),n=a0(n,void 0,void 0,r);try{let a=new t,o=a.A;Ld(e)(o,n);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{o0(n)}s=void 0}return s}}function Fd(t){return e=>S0(e,t)}function mo(t){return function(){return S0(this,t)}}var oS=[0,$r,N0,Ge,ne],lS=[0,Wi,[0,gc,[0,mc,Js],gc,-1,[0,ve],gc,-1],kt(D0,Ud,Zc)],Au,Em=class extends he{constructor(t){super(t)}},Tm=[0,Wi,kt(D0,function(t,e,n){if(e!=null){if(e instanceof he){let i=e.mb;return void(i?(e=i(e),e!=null&&po(t,n,$c(e,!0).buffer)):Kr(Uu,3))}if(Array.isArray(e))return void Kr(Uu,3)}Ud(t,e,n)},Zc)],cS=[0,1,[0,12,je,10,Ge],[0,7,[0,je,-1]]],wm=globalThis.trustedTypes,hS=class{constructor(t){this.g=t}toString(){return this.g+""}};function Am(t){var e;return Au===void 0&&(Au=(function(){var n=null;if(!wm)return n;try{let i=s=>s;n=wm.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Au)?e.createScriptURL(t):t,new hS(t)}function lc(t,...e){if(e.length===0)return Am(t[0]);var n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Am(n)}var O0=[0,je,ve,Ge,-1,da,ve,-1,Ge,-1],B0=[0,ve,-1,Ge],Od=class extends he{constructor(t){super(t)}},k0=[0,Ge,ne,Ge,ve,-1,es(function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[me],n),t.h==2?uo(t,OM,e):e.push(ji(t.g)),!0)},function(t,e,n){if((e=Qi(or,e,!0))!=null&&e.length){n=Ed(t,n);for(let i=0;i<e.length;i++)fo(t.g,e[i]);Td(t,n)}},Cd),ne,-1,[0,Ge,-1],ve,Ge,-1,B0],z0=[0,3,Ge,-1,2,[0,[2],je,Ze,[0,F0]],[0,ve,Ge,ve,Ge,ve,4,[0,Ge,ne,-1,Ge]],[0,[3,4],ne,-1,Ze,[0,je],Ze,[0,ve,-1]],[0]],V0=[0,ne,-2],Rm=class extends he{constructor(t){super(t)}},H0=[0],uS=class extends he{constructor(t){super(t)}},G0=[0,je,Ge,1,Ge,-4],On=class extends he{constructor(t){super(t,2)}},qt={};qt[336783863]=[0,ne,Ge,-1,je,[0,[1,2,3,4,5,6,7,8,9],Ze,H0,Ze,k0,Ze,V0,Ze,G0,Ze,O0,Ze,[0,ne,-2],Ze,[0,ne,ve],Ze,z0,Ze,B0],[0,ne],Ge,[0,[1,3],[2,4],Ze,[0,da],-1,Ze,[0,en],-1,yt,[0,ne,-1]],ne];var Cm=[0,mc,-1,ys,-3,mc,da,Wi,Js,mc,-1,ys,Js,ys,-2,Wi];function wt(t,e){Xc(t,3,e)}function Qe(t,e){Xc(t,4,e)}var Tn=class extends he{constructor(t){super(t,500)}v(t){return Ie(this,0,7,t)}},Ja=[-1,{}],Im=[0,ne,1,Ja],Pm=[0,ne,en,Ja];function jn(t,e){no(t,1,Tn,e)}function Ct(t,e){Xc(t,10,e)}function lt(t,e){Xc(t,15,e)}var Bn=class extends he{constructor(t){super(t,500)}v(t){return Ie(this,0,1001,t)}},W0=[-500,yt,[-500,Wi,-1,en,-3,[-2,qt,Ge],yt,Tm,Js,-1,Im,Pm,yt,[0,Wi,ys],Wi,Cm,Js,en,987,en],4,yt,[-500,ne,-1,[-1,{}],998,ne],yt,[-500,ne,en,-1,[-2,{},Ge],997,en,-1],Js,yt,[-500,ne,en,Ja,998,en],en,Js,Im,Pm,yt,[0,Wi,-1,Ja],en,-2,Cm,Wi,-1,ys,[0,ys,rS],978,Ja,yt,Tm];Bn.prototype.g=mo(W0);var dS=Ts(Bn,W0),fS=class extends he{constructor(t){super(t)}},X0=class extends he{constructor(t){super(t)}g(){return Ji(this,fS,1)}},$0=[0,yt,[0,je,Ut,ne,-1]],nh=Ts(X0,$0),pS=class extends he{constructor(t){super(t)}},mS=class extends he{constructor(t){super(t)}},Ru=class extends he{constructor(t){super(t)}j(){return at(this,pS,2)}g(){return Ji(this,mS,5)}},q0=Ts(class extends he{constructor(t){super(t)}},[0,en,da,Nd,[0,ve,[0,je,-3],[0,Ut,-3],[0,je,-1,[0,yt,[0,je,-2]]],yt,[0,Ut,-1,ne,Ut]],ne,-1,St,yt,[0,je,Ut],en,St]),Y0=class extends he{constructor(t){super(t)}},qr=Ts(class extends he{constructor(t){super(t)}},[0,yt,[0,Ut,-4]]),K0=class extends he{constructor(t){super(t)}},go=Ts(class extends he{constructor(t){super(t)}},[0,yt,[0,Ut,-4]]),gS=class extends he{constructor(t){super(t)}},_S=[0,je,-1,Nd,ve],Z0=class extends he{constructor(t){super(t)}};Z0.prototype.g=mo([0,Ut,-4,St]);var vS=class extends he{constructor(t){super(t)}},yS=Ts(class extends he{constructor(t){super(t)}},[0,yt,[0,1,je,ne,$0],St]),Lm=class extends he{constructor(t){super(t)}},xS=class extends he{constructor(t){super(t)}g(){var t=Dt(this,1,void 0,Jg);return t??ir()}},MS=class extends he{constructor(t){super(t)}},Bd=[1,2],SS=Ts(class extends he{constructor(t){super(t)}},[0,yt,[0,Bd,Ze,[0,Nd],Ze,[0,$r],je,ne],St]),kd=class extends he{constructor(t){super(t)}},J0=[0,ne,je,Ut,en,-1],Dm=class extends he{constructor(t){super(t)}},bS=[0,Ge,-1],Dc=class extends he{constructor(t){super(t)}g(){return Kg(this,Od,2,tr)}},tr=[1,2,3,4,5,6],Uc=class extends he{constructor(t){super(t)}g(){return Dt(this,1,void 0,Jg)!=null}j(){return tn(Dt(this,2))!=null}},It=class extends he{constructor(t){super(t)}},j0=[0,$r,ne,[0,je,St,-1],[0,Lc,St]],Bt=[0,j0,Ge,[0,tr,Ze,G0,Ze,k0,Ze,O0,Ze,H0,Ze,V0,Ze,z0],ve],ES=Fd(Bt),ih=class extends he{constructor(t){super(t)}},zd=[0,Bt,Ut,-1,je],TS=Ri(502141897,ih);qt[502141897]=zd;var wS=Ts(class extends he{constructor(t){super(t)}},[0,[0,ve,-1,nS,sS],_S]),Q0=class extends he{constructor(t){super(t)}},e_=class extends he{constructor(t){super(t)}},Wu=[0,Bt,Ut,[0,Bt],Ge],AS=Ri(508968150,e_);qt[508968150]=[0,Bt,zd,Wu,Ut,[0,[0,j0]]],qt[508968149]=Wu;var Wr=class extends he{constructor(t){super(t)}j(){return at(this,kd,2)}g(){ke(this,2)}},t_=[0,Bt,J0];qt[478825465]=t_;var RS=class extends he{constructor(t){super(t)}},n_=class extends he{constructor(t){super(t)}},Vd=class extends he{constructor(t){super(t)}},Hd=class extends he{constructor(t){super(t)}},i_=class extends he{constructor(t){super(t)}},Um=[0,Bt,[0,Bt],t_,-1],s_=[0,Bt,Ut,je],Gd=[0,Bt,Ut],r_=[0,Bt,s_,Gd,Ut],CS=Ri(479097054,i_);qt[479097054]=[0,Bt,r_,Um],qt[463370452]=Um,qt[464864288]=s_;var IS=Ri(462713202,Hd);qt[462713202]=r_,qt[474472470]=Gd;var PS=class extends he{constructor(t){super(t)}},a_=class extends he{constructor(t){super(t)}},o_=class extends he{constructor(t){super(t)}},l_=class extends he{constructor(t){super(t)}},Wd=[0,Bt,Ut,-1,je],Xu=[0,Bt,Ut,Ge];l_.prototype.g=mo([0,Bt,Gd,[0,Bt],zd,Wu,Wd,Xu]);var c_=class extends he{constructor(t){super(t)}},LS=Ri(456383383,c_);qt[456383383]=[0,Bt,J0];var h_=class extends he{constructor(t){super(t)}},DS=Ri(476348187,h_);qt[476348187]=[0,Bt,bS];var u_=class extends he{constructor(t){super(t)}},Nm=class extends he{constructor(t){super(t)}},d_=[0,ve,-1],US=Ri(458105876,class extends he{constructor(t){super(t)}g(){var t=this.A,e=0|t[me],n=En(this,e);return t=(function(i,s,r,a){var o=Nm;!a&&ca(i)&&(r=0|(s=i.A)[me]);var l=Zi(s,2);if(i=!1,l==null){if(a)return hm();l=[]}else if(l.constructor===Ki){if(!(2&l.M)||a)return l;l=l.ea()}else Array.isArray(l)?i=!!(2&l[me]):l=[];if(a){if(!l.length)return hm();i||(i=!0,ao(l))}else i&&(i=!1,eo(l),l=jg(l));return!i&&32&r&&ro(l,32),r=Ot(s,r,2,a=new Ki(l,o,SM,void 0)),i||bs(s,r),a})(this,t,e,n),!n&&Nm&&(t.Fa=!0),t}});qt[458105876]=[0,d_,tS,[!0,St,[0,ne,-1,en]],[0,da,Ge,ve],Ge];var Xd=class extends he{constructor(t){super(t)}},f_=Ri(458105758,Xd);qt[458105758]=[0,Bt,ne,d_];var NS=class extends he{constructor(t){super(t)}},FS=class extends he{constructor(t){super(t)}},OS=class extends he{constructor(t){super(t)}},BS=Fd([0,yt,[0,gc,yt,[0,U0,-1],ys]]),Cu=class extends he{constructor(t){super(t)}},Fm=[0,U0,-1,ys],kS=class extends he{constructor(t){super(t)}},p_=class extends he{constructor(t){super(t)}},$u=[1,2];p_.prototype.g=mo([0,$u,Ze,Fm,Ze,[0,yt,Fm]]);var m_=class extends he{constructor(t){super(t)}},zS=Ri(443442058,m_);qt[443442058]=[0,Bt,ne,je,Ut,en,-1,Ge,Ut],qt[514774813]=Wd;var g_=class extends he{constructor(t){super(t)}},VS=Ri(516587230,g_);function qu(t,e){return e=e?e.clone():new kd,t.displayNamesLocale!==void 0?ke(e,1,$i(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ke(e,1),t.maxResults!==void 0?Ei(e,2,t.maxResults):"maxResults"in t&&ke(e,2),t.scoreThreshold!==void 0?Ce(e,3,t.scoreThreshold):"scoreThreshold"in t&&ke(e,3),t.categoryAllowlist!==void 0?Tc(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ke(e,4),t.categoryDenylist!==void 0?Tc(e,5,t.categoryDenylist):"categoryDenylist"in t&&ke(e,5),e}function __(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function $d(t,e=-1,n=""){return{categories:t.map(i=>({index:Kn(i,1)??0??-1,score:Ft(i,2)??0,categoryName:tn(Dt(i,3))??""??"",displayName:tn(Dt(i,4))??""??""})),headIndex:e,headName:n}}function HS(t){var e={classifications:Ji(t,vS,1).map(n=>$d(at(n,X0,4)?.g()??[],Kn(n,2)??0,tn(Dt(n,3))??""))};return(function(n){return n==null?n:typeof n=="bigint"?(Nu(n)?n=Number(n):(n=js(64,n),n=Nu(n)?Number(n):String(n)),n):oa(n)?typeof n=="number"?Hc(n):Sc(n):void 0})(Dt(t,2,void 0,bc))!=null&&(e.timestampMs=__(Dt(t,2,void 0,bc)??Yg)),e}function v_(t){var e=Zs(t,3,si,Ks()),n=Zs(t,2,or,Ks()),i=Zs(t,1,tn,Ks()),s=Zs(t,9,tn,Ks()),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=at(t,Ru,4)?.j())&&(r.boundingBox={originX:Kn(e,1,ms)??0,originY:Kn(e,2,ms)??0,width:Kn(e,3,ms)??0,height:Kn(e,4,ms)??0,angle:0}),at(t,Ru,4)?.g().length)for(let a of at(t,Ru,4).g())r.keypoints.push({x:Dt(a,1,ms,si)??0,y:Dt(a,2,ms,si)??0,score:Dt(a,4,ms,si)??0,label:tn(Dt(a,3,ms))??""});return r}function sh(t){var e=[];for(let n of Ji(t,K0,1))e.push({x:Ft(n,1)??0,y:Ft(n,2)??0,z:Ft(n,3)??0,visibility:Ft(n,4)??0});return e}function ja(t){var e=[];for(let n of Ji(t,Y0,1))e.push({x:Ft(n,1)??0,y:Ft(n,2)??0,z:Ft(n,3)??0,visibility:Ft(n,4)??0});return e}function Om(t){return Array.from(t,e=>e>127?e-256:e)}function Bm(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}qt[516587230]=[0,Bt,Wd,Xu,Ut],qt[518928384]=Xu;var cc,GS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function y_(t){if(t)return!0;if(cc===void 0)try{await WebAssembly.instantiate(GS),cc=!0}catch{cc=!1}return cc}async function hc(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await y_(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Ys=class{};function km(t){return ke(new Yu,1,qi(t))}Ys.forVisionTasks=function(t,e=!1){return hc("vision",t??lc``,e)},Ys.forTextTasks=function(t,e=!1){return hc("text",t??lc``,e)},Ys.forGenAiTasks=function(t,e=!1){return hc("genai",t??lc``,e)},Ys.forAudioTasks=function(t,e=!1){return hc("audio",t??lc``,e)},Ys.isSimdSupported=function(t=!1){return y_(t)};var Yu=class extends he{constructor(t){super(t)}},WS=class extends he{constructor(t){super(t)}},zm=[0,ve,2,Lc,-2,St,yt,[0,ve,St]],XS=class extends he{constructor(t){super(t)}},$S=class extends he{constructor(t){super(t)}};function Ku(t,e){return ke(t,1,qi(e))}function Zu(t,e){return ke(t,2,qi(e))}var Ju=class extends he{constructor(t){super(t)}},Nc=[3,4,5,6,7],qS=class extends he{constructor(t){super(t)}},x_=class extends he{constructor(t){super(t)}};x_.prototype.g=mo([0,[0,ve,ne,-3,ve],[0,Nc,ve,-1,Ze,[0,ve,ne,Lc],Ze,zm,Ze,[0,1,zm],Ze,[0,ve],Ze,[0,ve,ne,Lc]]]);var YS=class{constructor(){this.g=typeof AbortController<"u"}async send(t,e,n){var i=this.g?new AbortController:void 0,s=i&&t.la>0?setTimeout(()=>{i.abort()},t.la):void 0;try{let r=await fetch(t.url,{method:t.bb,headers:{...t.ab},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.la&&i?i.signal:null});r.status===200?e?.(await r.text()):n?.(r.status)}catch(r){r?.name==="AbortError"?n?.(408):n?.(400)}finally{clearTimeout(s)}}},KS=class extends he{constructor(t){super(t,37)}},Vm=[-4,{},cS,ve,lS],Hm=[0,ne,ve,1,ne,-1,ve,1,ve,1,St],Gm=[0,ve,ne,-2],Wm=[0,ne,ve],Xm=[0,ne,ve],$m=[0,Ge,-3],qm=[0,ve,ne,-1,St,je,-1,ne,-5,yt,[0,ne,-4],-1,Ge,[0,Ge,-3],ve],ZS=class extends he{constructor(t){super(t,19)}},JS=Fd([-19,{},[0,ve,1,[0,ne,-6,St,je,ne,-1,St],1,[0,ne,1,ne,-5],ne,-1,[0,ve,ne,-8],[0,ne,-3],[0,ne,ve,ne,-2],[0,ne,-1,ve,ne,-1,ve,ne,-1,[0,yt,[0,ne,-1],Ge,ne,-5],[0,ve,Ge,je,-2]],St,[0,ne,-3,St,je,ne,-1],[0,ve,ne,-1],[0,ne,-9],[0,ne,-6,ve,ne,1,ne,Ge,ve,-1,Ge,ne,-2,ve,ne,ve,ne,je,-1],1,[0,ve],1,[0,ne,-4],1,Hm,[0,[1,2,3,4,5,6],Ze,Hm,Ze,Wm,Ze,Xm,Ze,[0,ve],Ze,qm,Ze,Gm],Wm,Xm,qm,[0,[0,ve,ne,-1,St,je,-1,ne,-4,yt,[0,ne,-4],-1,1,$m],[0,ve,ne,-1,St,je,-1,ne,-4,$m]],Gm,[0,ne,[0,je,-3,ve],ve,-2,[0,je,-1],Ge],4,[0,ne,ve,ne,-1,St,ve,ne,-1,ve,je,-1]],ve,yt,[-37,{},$a,ne,yt,[0,ne,-1],$r,1,$r,[0,en,-1,bm,iS,-1],ne,[0,je,ne,-1],Ge,je,St,ne,-1,aS,oS,$a,$r,ve,bm,St,-1,[0,ve,-1],ne,Ge,ne,da,ne,-1,Sm,1,Sm,Vm,Ge,[0,ve,[0,Ut,je,-2],[0,Ut]],[0,ve,St]],$a,N0,ne,-1,$a,ve,-1,[0,Ge,-1,ve,Ge],[0,St,-1,ne],[0,$a,Ge,St],St,1,F0,1,Vm]),jS=class{constructor(t){this.h=[],this.m=new YS,this.j=t??"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(t,e){if(this.error)e?.("net-send-failed");else if(this.h.length===0)t?.();else{var n=this.h;this.h=[],n=(function(i){var s=new ZS;return ku(s=ke(s,2,qi(1786)),3,i)})(n),n=JS(n),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:n,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{t?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),e?.("net-send-failed",i)})}}},Fc=class{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}};function ju(t,e){var n=new x_;n=Ie(n,0,1,t.B),n=Ie(n,0,2,e),e=ke(e=new KS,6,kc(n=n.g(),!1)),(t=t.l).error||t.h.push(e)}function Ym(t,e){var n={P:e.P-t.j.P,T:e.T-t.j.T,V:e.V-t.j.V,R:e.R-t.j.R,X:e.X-t.j.X,U:e.U,aa:e.aa},i=Zu(Ku(new Ju,t.C),1);n=M_(t,n),ju(t,i=bi(i,4,Nc,n)),t.j=e}function M_(t,e){var n=new WS;return t=fc(t=Tu(t=ke(n,1,qi(t.D)),7,e.R),5,e.U),t=fc(t,6,e.aa),e.V>0&&fc(t,4,e.X/e.V),e.P!==0&&(n=Tu(n=km(3),2,e.P),no(t,8,Yu,n)),e.T!==0&&(e=Tu(n=km(4),2,e.T),no(t,8,Yu,e)),t}var QS=class{constructor(t,e,n){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new Fc,this.j=new Fc,this.l=new jS(n),this.C=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}})(t),this.D=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),t=new qS,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=ke(t,1,qi(e)),t=ke(t,2,$i("")),t=ke(t,3,$i("")),t=ke(t,4,$i("1.0.1")),t=ke(t,5,$i("")),this.B=ke(t,6,qi(4))}ya(){var t=new $S;t=fc(t=ke(t,1,qi(this.D)),3,performance.now()-this.u),ju(this,t=bi(Zu(Ku(new Ju,this.C),0),3,Nc,t)),this.m=performance.now()}za(t){var e=this.h.get(t);if(e!==void 0&&(this.h.delete(t),t=performance.now()-e,++this.g.V,this.g.X+=t,this.g.U=Math.max(this.g.U,t),this.o=Math.max(this.o,t),performance.now()>this.m+3e4)){for(let[n,i]of this.h.entries())t=n,i<e&&(this.g.R++,this.h.delete(t));e={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),Ym(this,e)}}xa(){var t={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};Ym(this,t);var e=new XS;e=Ie(e,0,2,t=M_(this,t)),ju(this,e=bi(t=Zu(Ku(new Ju,this.C),2),5,Nc,e))}close(){var t=this.l;typeof t.close=="function"?t.close():t.flush()}};function qd(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Km(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let n=self.import;n?await n(t.toString()):await import(t.toString())}}}function Yd(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function we(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function S_(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=Yd(e);return!t.j||i===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=s),[i,s]}function Zm(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(let s of i)t.i._free(s);t.i._free(e)}function yi(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function gs(t,e,n){var i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}var b_=class{constructor(t,e){this.j=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:qd()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),we(this,i||"input_audio",r=>{we(this,s=s||"audio_header",a=>{this.i._configureAudio(r,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.j=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ja(t){yi(this,"__graph_config__",e=>{t(e)}),we(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){var r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),we(this,i,a=>{this.i._addAudioToInputStream(this.g,e,n,a,s)})}addGpuBufferToStream(t,e,n){we(this,e,i=>{var[s,r]=S_(this,t,i);this.i._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(t,e,n){we(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){we(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){we(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){we(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){we(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){we(this,e,i=>{we(this,t,s=>{this.i._addStringToInputStream(s,i,n)})})}addStringRecordToStream(t,e,n){we(this,e,i=>{Zm(this,Object.keys(t),s=>{Zm(this,Object.values(t),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){we(this,n,s=>{we(this,e,r=>{var a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,r,s,i),this.i._free(a)})})}addEmptyPacketToStream(t,e){we(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){we(this,e,i=>{var s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(t,e,n){we(this,e,i=>{var s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(t,e,n){we(this,e,i=>{var s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(t,e,n){we(this,e,i=>{var s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(t,e,n){we(this,e,i=>{var s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(t,e,n){we(this,e,i=>{var s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of t)we(this,r,a=>{this.i._addStringVectorEntry(s,a)});this.i._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(t,e){we(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){we(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){we(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){we(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){we(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){we(this,e,n=>{we(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){we(this,n,i=>{we(this,e,s=>{var r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(t,e){we(this,e,n=>{var i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){we(this,e,n=>{var i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){we(this,e,n=>{var i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){we(this,e,n=>{var i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){we(this,e,n=>{var i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){we(this,e,n=>{var i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of t)we(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){yi(this,t,e),we(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){gs(this,t,e),we(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){yi(this,t,e),we(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){gs(this,t,e),we(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){yi(this,t,e),we(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){gs(this,t,e),we(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){yi(this,t,e),we(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){gs(this,t,e),we(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){yi(this,t,e),we(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){gs(this,t,e),we(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){yi(this,t,e),we(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){gs(this,t,e),we(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){yi(this,t,e),we(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){gs(this,t,e),we(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),yi(this,t,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),we(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};function E_(t){return class extends t{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function T_(t){return class extends t{Za(){this.i._registerModelResourcesGraphService()}}}var eb=E_(T_(b_)),tb=class extends eb{};async function nb(t,e,n,i){return t=await(async(s,r,a,o,l)=>{if(r&&await Km(r),!self.ModuleFactory||a&&(await Km(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.g.Sa();s.m=new QS(s.C(),r,a)})(t,i),await t.v(i),t}async function _c(t,e,n,i){return nb(t,e,n,i)}function Iu(t,e){var n=at(t.baseOptions,Uc,1)||new Uc;typeof e=="string"?(ke(n,2,$i(e)),ke(n,1)):e instanceof Uint8Array&&(ke(n,1,kc(e,!1)),ke(n,2)),Ie(t.baseOptions,0,1,n)}function Jm(t){try{let e=t.K.length;if(e===1)throw Error(t.K[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function fe(t,e){t.I=Math.max(t.I,e)}function rh(t,e){t.D=new Tn,Nn(t.D,2,"PassThroughCalculator"),wt(t.D,"free_memory"),Qe(t.D,"free_memory_unused_out"),Ct(e,"free_memory"),jn(e,t.D)}function ta(t,e){wt(t.D,e),Qe(t.D,e+"_unused_out")}function ah(t){t.g.addBoolToStream(!0,"free_memory",t.I)}var Oc=class{constructor(t){this.g=t,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(t,e=!0){if(e){let n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(at(this.baseOptions,Uc,1)?.g()||at(this.baseOptions,Uc,1)?.j()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){var r=at(i.baseOptions,Dc,3);if(!r){var a=r=new Dc,o=new Rm;bi(a,4,tr,o)}"delegate"in s&&(s.delegate==="GPU"?(s=r,a=new Od,bi(s,2,tr,a)):(s=r,a=new Rm,bi(s,4,tr,a))),Ie(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Iu(this,"/model.dat"),this.o(),this.L()});if(n.modelAssetBuffer instanceof Uint8Array)Iu(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){for(var s=[],r=0;;){let{done:a,value:o}=await i.read();if(a)break;s.push(o),r+=o.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let a of s)i.set(a,r),r+=a.length;return i})(n.modelAssetBuffer).then(i=>{Iu(this,i),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var t;if(this.g.ja(e=>{t=dS(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.K.push(Error(i))}),this.g.Za(),this.g.setGraph(t,e),this.m?.ya(),this.D=void 0,Jm(this)}finishProcessing(t){this.g.finishProcessing(),Jm(this),this.m&&t!==void 0&&this.m.za(t)}close(){this.D=void 0,this.m?.xa(),this.m?.close(),this.g.closeGraph()}};function dn(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Oc.prototype.close=Oc.prototype.close;var Qu=class{constructor(e,n,i,s){this.g=e,this.h=n,this.m=i,this.j=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}};function jm(t,e,n){var i=t.g;if(n=dn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Qm(t,e){var n=t.g,i=dn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var s=dn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.F),n.vertexAttribPointer(t.F,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var r=dn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Qu(n,i,s,r)}function Kd(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function _o(t,e,n,i){return Kd(t,e),t.h||(t.m(),t.I()),n?(t.l||(t.l=Qm(t,!0)),n=t.l):(t.D||(t.D=Qm(t,!1)),n=t.D),e.useProgram(t.h),n.bind(),t.j(),t=i(),n.g.bindVertexArray(null),t}function Ms(t,e,n){return Kd(t,e),t=dn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function oh(t,e,n){Kd(t,e),t.C||(t.C=dn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Zd(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var hr=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var t=this.g;if(this.h=dn(t.createProgram(),"Failed to create WebGL program"),this.da=jm(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Z=jm(this,this.B(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.F=t.getAttribLocation(this.h,"aVertex"),this.K=t.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let t=this.g;t.deleteProgram(this.h),t.deleteShader(this.da),t.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}},ib=class extends hr{B(){return`
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
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.u=Ms(this,t,t.LINEAR),t.activeTexture(t.TEXTURE2),this.o=Ms(this,t,t.NEAREST)}m(){super.m();var t=this.g;this.O=dn(t.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.Y=dn(t.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=dn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.L,0),t.uniform1i(this.O,1),t.uniform1i(this.Y,2)}close(){this.u&&this.g.deleteTexture(this.u),this.o&&this.g.deleteTexture(this.o),super.close()}},sb=class extends hr{B(){return`
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
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.o=Ms(this,t),t.activeTexture(t.TEXTURE2),this.u=Ms(this,t)}m(){super.m();var t=this.g;this.L=dn(t.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.O=dn(t.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.J=dn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.J,0),t.uniform1i(this.L,1),t.uniform1i(this.O,2)}close(){this.o&&this.g.deleteTexture(this.o),this.u&&this.g.deleteTexture(this.u),super.close()}};function Xi(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function ed(t){var e=Xi(t,1);if(!e){if(e=Xi(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);let i=na(t);var n=Jd(t);if(oh(n,i,w_(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function w_(t){var e=Xi(t,2);if(!e){let n=na(t);e=R_(t);let i=ed(t),s=A_(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),td(t)}return e}function na(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=dn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function A_(t){if(t=na(t),!uc)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))uc=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");uc=t.R16F}return uc}function Jd(t){return t.j||(t.j=new hr),t.j}function R_(t){var e=na(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=Xi(t,2);return n||(n=Ms(Jd(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.o=!0),e.bindTexture(e.TEXTURE_2D,n),n}function td(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var uc,Vt=class{constructor(t,e,n,i,s,r,a){this.g=t,this.m=e,this.o=n,this.canvas=i,this.j=s,this.width=r,this.height=a,this.o&&--eg===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Xi(this,0)}ua(){return!!Xi(this,1)}W(){return!!Xi(this,2)}ta(){return(e=Xi(t=this,0))||(e=ed(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.g.push(e)),e;var t,e}sa(){return ed(this)}S(){return w_(this)}clone(){var t=[];for(let e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=na(this),s=Jd(this);i.activeTexture(i.TEXTURE1),n=Ms(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=A_(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),oh(s,i,n),_o(s,i,!1,()=>{R_(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),td(this)}),Zd(s),td(this)}}t.push(n)}return new Vt(t,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&na(this).deleteTexture(Xi(this,2)),eg=-1}};Vt.prototype.close=Vt.prototype.close,Vt.prototype.clone=Vt.prototype.clone,Vt.prototype.getAsWebGLTexture=Vt.prototype.S,Vt.prototype.getAsFloat32Array=Vt.prototype.sa,Vt.prototype.getAsUint8Array=Vt.prototype.ta,Vt.prototype.hasWebGLTexture=Vt.prototype.W,Vt.prototype.hasFloat32Array=Vt.prototype.ua,Vt.prototype.hasUint8Array=Vt.prototype.Ua;var eg=250,rb={color:"white",lineWidth:4,radius:6};function Pu(t){return{...rb,fillColor:(t=t||{}).color,...t}}function Gi(t,e){return t instanceof Function?t(e):t}function tg(t,e,n){return Math.max(Math.min(e,n),Math.min(Math.max(e,n),t))}function qa(t){if(!t.j)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return t.j}function so(t){if(!t.o)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return t.o}function ng(t,e,n){if(e.W())n(e.S());else{let i=e.ua()?e.sa():e.ta();t.m=t.m??new hr;let s=so(t);n((t=new Vt([i],e.m,!1,s.canvas,t.m,e.width,e.height)).S()),t.close()}}function ig(t,e,n,i){var s=(function(o){return o.g||(o.g=new ib),o.g})(t),r=so(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;_o(s,r,!0,()=>{(function(l,c,h,u){var d=l.g;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,c),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,l.u),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),l.J&&(function(p,g){if(p!==g)return!1;p=p.entries(),g=g.entries();for(let[v,m]of p){p=v;let f=m,T=g.next();if(T.done)return!1;let[E,S]=T.value;if(p!==E||f[0]!==S[0]||f[1]!==S[1]||f[2]!==S[2]||f[3]!==S[3])return!1}return!!g.next().done})(l.J,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,l.o);else{l.J=u;let p=Array(1024).fill(0);u.forEach((g,v)=>{if(g.length!==4)throw Error(`Color at index ${v} is not a four-channel value.`);p[4*v]=g[0],p[4*v+1]=g[1],p[4*v+2]=g[2],p[4*v+3]=g[3]}),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,l.o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(p))}})(s,e,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.g;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function sg(t,e,n,i){var s=so(t),r=(function(l){return l.h||(l.h=new sb),l.h})(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;_o(r,s,!0,()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,e),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.o),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var yn=class{constructor(t,e){typeof CanvasRenderingContext2D<"u"&&t instanceof CanvasRenderingContext2D||t instanceof OffscreenCanvasRenderingContext2D?(this.j=t,this.o=e):this.o=t}Ma(t,e){if(t){var n=qa(this);e=Pu(e),n.save();var i=n.canvas,s=0;for(let r of t)n.fillStyle=Gi(e.fillColor,{index:s,from:r}),n.strokeStyle=Gi(e.color,{index:s,from:r}),n.lineWidth=Gi(e.lineWidth,{index:s,from:r}),(t=new Path2D).arc(r.x*i.width,r.y*i.height,Gi(e.radius,{index:s,from:r}),0,2*Math.PI),n.fill(t),n.stroke(t),++s;n.restore()}}La(t,e,n){if(t&&e){var i=qa(this);n=Pu(n),i.save();var s=i.canvas,r=0;for(let a of e){i.beginPath(),e=t[a.start];let o=t[a.end];e&&o&&(i.strokeStyle=Gi(n.color,{index:r,from:e,to:o}),i.lineWidth=Gi(n.lineWidth,{index:r,from:e,to:o}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ia(t,e){var n=qa(this);e=Pu(e),n.save(),n.beginPath(),n.lineWidth=Gi(e.lineWidth,{}),n.strokeStyle=Gi(e.color,{}),n.fillStyle=Gi(e.fillColor,{}),n.moveTo(t.originX,t.originY),n.lineTo(t.originX+t.width,t.originY),n.lineTo(t.originX+t.width,t.originY+t.height),n.lineTo(t.originX,t.originY+t.height),n.lineTo(t.originX,t.originY),n.stroke(),n.fill(),n.restore()}Ja(t,e,n=[0,0,0,255]){this.j?(function(i,s,r,a){var o=so(i);ng(i,s,l=>{ig(i,l,r,a),(l=qa(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,t,n,e):ig(this,t.S(),n,e)}Ka(t,e,n){this.j?(function(i,s,r,a){var o=so(i);ng(i,s,l=>{sg(i,l,r,a),(l=qa(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,t,e,n):sg(this,t.S(),e,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function xi(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function C_(t){var e=xi(t,0);if(!e){e=ia(t);let n=lh(t),i=new Uint8Array(t.width*t.height*4);oh(n,e,vc(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Zd(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function vc(t){var e=xi(t,2);if(!e){let n=ia(t);e=yc(t);let i=xi(t,1)||C_(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Ka(t)}return e}function ia(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=dn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function lh(t){return t.j||(t.j=new hr),t.j}function yc(t){var e=ia(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=xi(t,2);return n||(n=Ms(lh(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Ka(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function rg(t){var e=ia(t);return _o(lh(t),e,!0,()=>(function(n,i){var s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();var r=s.width,a=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=a,n})(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}yn.prototype.close=yn.prototype.close,yn.prototype.drawConfidenceMask=yn.prototype.Ka,yn.prototype.drawCategoryMask=yn.prototype.Ja,yn.prototype.drawBoundingBox=yn.prototype.Ia,yn.prototype.drawConnectors=yn.prototype.La,yn.prototype.drawLandmarks=yn.prototype.Ma,yn.lerp=function(t,e,n,i,s){return tg(i*(1-(t-e)/(n-e))+s*(1-(n-t)/(n-e)),i,s)},yn.clamp=tg;var jt=class{constructor(t,e,n,i,s,r,a){this.g=t,this.o=e,this.m=n,this.canvas=i,this.j=s,this.width=r,this.height=a,(this.o||this.m)&&--ag===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!xi(this,0)}va(){return!!xi(this,1)}W(){return!!xi(this,2)}Qa(){return C_(this)}Pa(){var t=xi(this,1);return t||(vc(this),yc(this),t=rg(this),Ka(this),this.g.push(t),this.o=!0),t}S(){return vc(this)}clone(){var t=[];for(let e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=ia(this),s=lh(this);i.activeTexture(i.TEXTURE1),n=Ms(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),oh(s,i,n),_o(s,i,!1,()=>{yc(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ka(this)}),Zd(s),Ka(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);vc(this),yc(this),n=rg(this),Ka(this)}t.push(n)}return new jt(t,this.va(),this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&xi(this,1).close(),this.m&&ia(this).deleteTexture(xi(this,2)),ag=-1}};jt.prototype.close=jt.prototype.close,jt.prototype.clone=jt.prototype.clone,jt.prototype.getAsWebGLTexture=jt.prototype.S,jt.prototype.getAsImageBitmap=jt.prototype.Pa,jt.prototype.getAsImageData=jt.prototype.Qa,jt.prototype.hasWebGLTexture=jt.prototype.W,jt.prototype.hasImageBitmap=jt.prototype.va,jt.prototype.hasImageData=jt.prototype.Ta;var ag=250;function ri(...t){return t.map(([e,n])=>({start:e,end:n}))}var og,ab=T_((og=E_(b_),class extends og{get oa(){return this.i}Da(t,e,n){we(this,e,i=>{var[s,r]=S_(this,t,i);this.oa._addBoundTextureAsImageToStream(i,s,r,n)})}ga(t,e){yi(this,t,e),we(this,t,n=>{this.oa._attachImageListener(n)})}ha(t,e){gs(this,t,e),we(this,t,n=>{this.oa._attachImageVectorListener(n)})}})),ai=class extends ab{};async function nt(t,e,n){return _c(t,n.canvas??(qd()?void 0:document.createElement("canvas")),e,n)}function I_(t,e,n,i){if(t.m&&i!==void 0)if(at(t.baseOptions,Dc,3)?.g()){var s=t.m;++s.g.T,s.h.set(i,performance.now())}else++(s=t.m).g.P,s.h.set(i,performance.now());if(t.qa){if(s=new Z0,n?.regionOfInterest){if(!t.Ca)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ce(s,1,(r.left+r.right)/2),Ce(s,2,(r.top+r.bottom)/2),Ce(s,4,r.right-r.left),Ce(s,3,r.bottom-r.top)}else Ce(s,1,.5),Ce(s,2,.5),Ce(s,4,1),Ce(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ce(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[a,o]=Yd(e);n=Ft(s,3)*o/a,r=Ft(s,4)*a/o,Ce(s,4,n),Ce(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.qa,i)}t.g.Da(e,t.Ba,i??performance.now()),t.finishProcessing(i)}function oi(t,e,n){if(t.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");I_(t,e,n,t.I+1)}function Ci(t,e,n,i){if(!t.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");I_(t,e,n,i)}function sa(t,e,n,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return t=new Vt([s],n,!1,t.g.i.canvas,t.da,r,e),i?t.clone():t}var Fn=class extends Oc{constructor(t,e,n,i){super(t),this.g=t,this.Ba=e,this.qa=n,this.Ca=i,this.da=new hr,this.J=!1}j(t,e=!0){if("runningMode"in t){var n=this.J=!!t.runningMode&&t.runningMode!=="IMAGE";ke(this.baseOptions,2,n==null?n:Mc(n))}if(t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(t,e)}close(){this.da.close(),super.close()}};Fn.prototype.close=Fn.prototype.close;var $n=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect_in",!1),this.l={detections:[]},Ie(t=this.h=new ih,0,1,e=new It),Ce(this.h,2,.5),Ce(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return"minDetectionConfidence"in t&&Ce(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ce(this.h,3,t.minSuppressionThreshold??.3),this.j(t)}G(t,e){return this.l={detections:[]},oi(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},Ci(this,t,n,e),this.l}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"norm_rect_in"),lt(t,"detections");var e=new On;Ai(e,TS,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect_in"),Qe(n,"DETECTIONS:detections"),n.v(e),jn(t,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=q0(r),this.l.detections.push(v_(i));fe(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$n.prototype.detectForVideo=$n.prototype.H,$n.prototype.detect=$n.prototype.G,$n.prototype.setOptions=$n.prototype.v,$n.createFromModelPath=async function(t,e){return nt($n,t,{baseOptions:{modelAssetPath:e}})},$n.createFromModelBuffer=function(t,e){return nt($n,t,{baseOptions:{modelAssetBuffer:e}})},$n.createFromOptions=function(t,e){return nt($n,t,e)};var jd=ri([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Qd=ri([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),ef=ri([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),P_=ri([474,475],[475,476],[476,477],[477,474]),tf=ri([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),nf=ri([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),L_=ri([469,470],[470,471],[471,472],[472,469]),sf=ri([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),D_=[...jd,...Qd,...ef,...tf,...nf,...sf],U_=ri([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function lg(t){t.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var rt=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ie(t=this.h=new e_,0,1,e=new It),this.B=new Q0,Ie(this.h,0,3,this.B),this.u=new ih,Ie(this.h,0,2,this.u),Ei(this.u,4,1),Ce(this.u,2,.5),Ce(this.B,2,.5),Ce(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return"numFaces"in t&&Ei(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ce(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ce(this.B,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.j(t)}G(t,e){return lg(this),oi(this,t,e),this.l}H(t,e,n){return lg(this),Ci(this,t,n,e),this.l}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"norm_rect"),lt(t,"face_landmarks");var e=new On;Ai(e,AS,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:face_landmarks"),n.v(e),jn(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=go(r),this.l.faceLandmarks.push(sh(i));fe(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{fe(this,i)}),this.outputFaceBlendshapes&&(lt(t,"blendshapes"),Qe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=nh(r),this.l.faceBlendshapes.push($d(i.g()??[]));fe(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{fe(this,i)})),this.outputFacialTransformationMatrixes&&(lt(t,"face_geometry"),Qe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=at(i=wS(r),gS,2))&&this.l.facialTransformationMatrixes.push({rows:Kn(i,1)??0??0,columns:Kn(i,2)??0??0,data:Zs(i,3,si,Ks()).slice()??[]});fe(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{fe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};rt.prototype.detectForVideo=rt.prototype.H,rt.prototype.detect=rt.prototype.G,rt.prototype.setOptions=rt.prototype.v,rt.createFromModelPath=function(t,e){return nt(rt,t,{baseOptions:{modelAssetPath:e}})},rt.createFromModelBuffer=function(t,e){return nt(rt,t,{baseOptions:{modelAssetBuffer:e}})},rt.createFromOptions=function(t,e){return nt(rt,t,e)},rt.FACE_LANDMARKS_LIPS=jd,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",rt.FACE_LANDMARKS_LIPS),rt.FACE_LANDMARKS_LEFT_EYE=Qd,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",rt.FACE_LANDMARKS_LEFT_EYE),rt.FACE_LANDMARKS_LEFT_EYEBROW=ef,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",rt.FACE_LANDMARKS_LEFT_EYEBROW),rt.FACE_LANDMARKS_LEFT_IRIS=P_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",rt.FACE_LANDMARKS_LEFT_IRIS),rt.FACE_LANDMARKS_RIGHT_EYE=tf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",rt.FACE_LANDMARKS_RIGHT_EYE),rt.FACE_LANDMARKS_RIGHT_EYEBROW=nf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",rt.FACE_LANDMARKS_RIGHT_EYEBROW),rt.FACE_LANDMARKS_RIGHT_IRIS=L_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",rt.FACE_LANDMARKS_RIGHT_IRIS),rt.FACE_LANDMARKS_FACE_OVAL=sf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",rt.FACE_LANDMARKS_FACE_OVAL),rt.FACE_LANDMARKS_CONTOURS=D_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",rt.FACE_LANDMARKS_CONTOURS),rt.FACE_LANDMARKS_TESSELATION=U_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",rt.FACE_LANDMARKS_TESSELATION);var rf=ri([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function cg(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function hg(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function ug(t,e=!0){var n=[];for(let s of t){var i=nh(s);t=[];for(let r of i.g())i=e&&Kn(r,1)!=null?Kn(r,1)??0:-1,t.push({score:Ft(r,2)??0,index:i,categoryName:tn(Dt(r,3))??""??"",displayName:tn(Dt(r,4))??""??""});n.push(t)}return n}var xn=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ie(t=this.l=new i_,0,1,e=new It),this.u=new Hd,Ie(this.l,0,2,this.u),this.F=new Vd,Ie(this.u,0,3,this.F),this.B=new n_,Ie(this.u,0,2,this.B),this.h=new RS,Ie(this.l,0,3,this.h),Ce(this.B,2,.5),Ce(this.u,4,.5),Ce(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return at(this.l,It,1)}set baseOptions(t){Ie(this.l,0,1,t)}v(t){if(Ei(this.B,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ce(this.B,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ce(this.F,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Wr,n=e,i=qu(t.cannedGesturesClassifierOptions,at(this.h,Wr,3)?.j());Ie(n,0,2,i),Ie(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&at(this.h,Wr,3)?.g();return t.customGesturesClassifierOptions?(Ie(n=e=new Wr,0,2,i=qu(t.customGesturesClassifierOptions,at(this.h,Wr,4)?.j())),Ie(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&at(this.h,Wr,4)?.g(),this.j(t)}Xa(t,e){return cg(this),oi(this,t,e),hg(this)}Ya(t,e,n){return cg(this),Ci(this,t,n,e),hg(this)}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"norm_rect"),lt(t,"hand_gestures"),lt(t,"hand_landmarks"),lt(t,"world_hand_landmarks"),lt(t,"handedness");var e=new On;Ai(e,CS,this.l);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),Qe(n,"HAND_GESTURES:hand_gestures"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.v(e),jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i){i=go(r);let a=[];for(let o of Ji(i,K0,1))a.push({x:Ft(o,1)??0,y:Ft(o,2)??0,z:Ft(o,3)??0,visibility:Ft(o,4)??0});this.landmarks.push(a)}fe(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i){i=qr(r);let a=[];for(let o of Ji(i,Y0,1))a.push({x:Ft(o,1)??0,y:Ft(o,2)??0,z:Ft(o,3)??0,visibility:Ft(o,4)??0});this.worldLandmarks.push(a)}fe(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...ug(i,!1)),fe(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{fe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...ug(i)),fe(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function dg(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}xn.prototype.recognizeForVideo=xn.prototype.Ya,xn.prototype.recognize=xn.prototype.Xa,xn.prototype.setOptions=xn.prototype.v,xn.createFromModelPath=function(t,e){return nt(xn,t,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(t,e){return nt(xn,t,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(t,e){return nt(xn,t,e)},xn.HAND_CONNECTIONS=rf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",xn.HAND_CONNECTIONS);var Mn=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ie(t=this.h=new Hd,0,1,e=new It),this.u=new Vd,Ie(this.h,0,3,this.u),this.l=new n_,Ie(this.h,0,2,this.l),Ei(this.l,3,1),Ce(this.l,2,.5),Ce(this.u,2,.5),Ce(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return"numHands"in t&&Ei(this.l,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ce(this.l,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ce(this.u,2,t.minHandPresenceConfidence??.5),this.j(t)}G(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oi(this,t,e),dg(this)}H(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ci(this,t,n,e),dg(this)}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"norm_rect"),lt(t,"hand_landmarks"),lt(t,"world_hand_landmarks"),lt(t,"handedness");var e=new On;Ai(e,IS,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.v(e),jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=go(r),this.landmarks.push(sh(i));fe(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=qr(r),this.worldLandmarks.push(ja(i));fe(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{fe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let l of i){i=nh(l);let c=[];for(let h of i.g())c.push({score:Ft(h,2)??0,index:Kn(h,1)??0??-1,categoryName:tn(Dt(h,3))??""??"",displayName:tn(Dt(h,4))??""??""});o.push(c)}a.call(r,...o),fe(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mn.prototype.detectForVideo=Mn.prototype.H,Mn.prototype.detect=Mn.prototype.G,Mn.prototype.setOptions=Mn.prototype.v,Mn.createFromModelPath=function(t,e){return nt(Mn,t,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(t,e){return nt(Mn,t,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(t,e){return nt(Mn,t,e)},Mn.HAND_CONNECTIONS=rf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Mn.HAND_CONNECTIONS);var N_=ri([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function fg(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function pg(t){try{if(!t.F)return t.h;t.F(t.h)}finally{ah(t)}}function dc(t,e){t=go(t),e.push(sh(t))}var Ye=class extends Fn{constructor(t,e){super(new ai(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ie(t=this.l=new l_,0,1,e=new It),this.Y=new Vd,Ie(this.l,0,2,this.Y),this.Aa=new PS,Ie(this.l,0,3,this.Aa),this.u=new ih,Ie(this.l,0,4,this.u),this.O=new Q0,Ie(this.l,0,5,this.O),this.B=new a_,Ie(this.l,0,6,this.B),this.Z=new o_,Ie(this.l,0,7,this.Z),Ce(this.u,2,.5),Ce(this.u,3,.3),Ce(this.O,2,.5),Ce(this.B,2,.5),Ce(this.B,3,.3),Ce(this.Z,2,.5),Ce(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return at(this.l,It,1)}set baseOptions(t){Ie(this.l,0,1,t)}v(t){return"minFaceDetectionConfidence"in t&&Ce(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ce(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ce(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ce(this.B,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ce(this.B,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ce(this.Z,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ce(this.Y,2,t.minHandLandmarksConfidence??.5),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.F=typeof e=="function"?e:n,fg(this),oi(this,t,i),pg(this)}H(t,e,n,i){var s=typeof n!="function"?n:{};return this.F=typeof n=="function"?n:i,fg(this),Ci(this,t,s,e),pg(this)}o(){var t=new Bn;Ct(t,"input_frames_image"),lt(t,"pose_landmarks"),lt(t,"pose_world_landmarks"),lt(t,"face_landmarks"),lt(t,"left_hand_landmarks"),lt(t,"left_hand_world_landmarks"),lt(t,"right_hand_landmarks"),lt(t,"right_hand_world_landmarks");var e=new On,n=new Em;Nn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))ke(s,2,Wc(r,0,to));else{if(!(typeof r=="string"||r instanceof Mi||rd(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");co(s,2,kc(r,!1),ir())}})(n,this.l.g());var i=new Tn;Nn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),no(i,8,Em,n),wt(i,"IMAGE:input_frames_image"),Qe(i,"POSE_LANDMARKS:pose_landmarks"),Qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qe(i,"FACE_LANDMARKS:face_landmarks"),Qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.v(e),jn(t,i),rh(this,t),this.g.attachProtoListener("pose_landmarks",(s,r)=>{dc(s,this.h.poseLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.h.poseWorldLandmarks;s=qr(s),a.push(ja(s)),fe(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{fe(this,s)}),this.outputPoseSegmentationMasks&&(Qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ta(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[sa(this,s,!0,!this.F)],fe(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],fe(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{dc(s,this.h.faceLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{fe(this,s)}),this.outputFaceBlendshapes&&(lt(t,"extra_blendshapes"),Qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=nh(s),a.push($d(s.g()??[]))),fe(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{fe(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{dc(s,this.h.leftHandLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.h.leftHandWorldLandmarks;s=qr(s),a.push(ja(s)),fe(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{dc(s,this.h.rightHandLandmarks),fe(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{fe(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.h.rightHandWorldLandmarks;s=qr(s),a.push(ja(s)),fe(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{fe(this,s)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ye.prototype.detectForVideo=Ye.prototype.H,Ye.prototype.detect=Ye.prototype.G,Ye.prototype.setOptions=Ye.prototype.v,Ye.createFromModelPath=function(t,e){return nt(Ye,t,{baseOptions:{modelAssetPath:e}})},Ye.createFromModelBuffer=function(t,e){return nt(Ye,t,{baseOptions:{modelAssetBuffer:e}})},Ye.createFromOptions=function(t,e){return nt(Ye,t,e)},Ye.HAND_CONNECTIONS=rf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",Ye.HAND_CONNECTIONS),Ye.POSE_CONNECTIONS=N_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",Ye.POSE_CONNECTIONS),Ye.FACE_LANDMARKS_LIPS=jd,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",Ye.FACE_LANDMARKS_LIPS),Ye.FACE_LANDMARKS_LEFT_EYE=Qd,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",Ye.FACE_LANDMARKS_LEFT_EYE),Ye.FACE_LANDMARKS_LEFT_EYEBROW=ef,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",Ye.FACE_LANDMARKS_LEFT_EYEBROW),Ye.FACE_LANDMARKS_LEFT_IRIS=P_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",Ye.FACE_LANDMARKS_LEFT_IRIS),Ye.FACE_LANDMARKS_RIGHT_EYE=tf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",Ye.FACE_LANDMARKS_RIGHT_EYE),Ye.FACE_LANDMARKS_RIGHT_EYEBROW=nf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",Ye.FACE_LANDMARKS_RIGHT_EYEBROW),Ye.FACE_LANDMARKS_RIGHT_IRIS=L_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",Ye.FACE_LANDMARKS_RIGHT_IRIS),Ye.FACE_LANDMARKS_FACE_OVAL=sf,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",Ye.FACE_LANDMARKS_FACE_OVAL),Ye.FACE_LANDMARKS_CONTOURS=D_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",Ye.FACE_LANDMARKS_CONTOURS),Ye.FACE_LANDMARKS_TESSELATION=U_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",Ye.FACE_LANDMARKS_TESSELATION);var qn=class extends Fn{constructor(t,e){super(new ai(t,e),"input_image","norm_rect",!0),this.l={classifications:[]},Ie(t=this.h=new c_,0,1,e=new It)}C(){return"ImageClassifier"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return Ie(this.h,0,2,qu(t,at(this.h,kd,2))),this.j(t)}Ga(t,e){return this.l={classifications:[]},oi(this,t,e),this.l}Ha(t,e,n){return this.l={classifications:[]},Ci(this,t,n,e),this.l}o(){var t=new Bn;Ct(t,"input_image"),Ct(t,"norm_rect"),lt(t,"classifications");var e=new On;Ai(e,LS,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),wt(n,"IMAGE:input_image"),wt(n,"NORM_RECT:norm_rect"),Qe(n,"CLASSIFICATIONS:classifications"),n.v(e),jn(t,n),this.g.attachProtoListener("classifications",(i,s)=>{this.l=HS(yS(i)),fe(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};qn.prototype.classifyForVideo=qn.prototype.Ha,qn.prototype.classify=qn.prototype.Ga,qn.prototype.setOptions=qn.prototype.v,qn.createFromModelPath=function(t,e){return nt(qn,t,{baseOptions:{modelAssetPath:e}})},qn.createFromModelBuffer=function(t,e){return nt(qn,t,{baseOptions:{modelAssetBuffer:e}})},qn.createFromOptions=function(t,e){return nt(qn,t,e)};var Dn=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!0),this.h=new h_,this.embeddings={embeddings:[]},Ie(t=this.h,0,1,e=new It)}C(){return"ImageEmbedder"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){var e=this.h,n=at(this.h,Dm,2);if(n=n?n.clone():new Dm,t.l2Normalize!==void 0){var i=t.l2Normalize;ke(n,1,i==null?i:Mc(i))}else"l2Normalize"in t&&ke(n,1);return t.quantize!==void 0?ke(n,2,(i=t.quantize)==null?i:Mc(i)):"quantize"in t&&ke(n,2),Ie(e,0,2,n),this.j(t)}Na(t,e){return oi(this,t,e),this.embeddings}Oa(t,e,n){return Ci(this,t,n,e),this.embeddings}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"norm_rect"),lt(t,"embeddings_out");var e=new On;Ai(e,DS,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),Qe(n,"EMBEDDINGS:embeddings_out"),n.v(e),jn(t,n),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=SS(i),this.embeddings=(function(r){return{embeddings:Ji(r,MS,1).map(a=>{var o={headIndex:Kn(a,3)??0??-1,headName:tn(Dt(a,4))??""??""};if(Kg(a,Lm,1,Bd))a=Zs(a=fm(a,Lm,1),1,si,Ks()),o.floatEmbedding=a.slice();else{let l=new Uint8Array(0);o.quantizedEmbedding=fm(a,xS,2)?.g()?.h()??l}return o}),timestampMs:__(Dt(r,2,void 0,bc)??Yg)}})(i),fe(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Dn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Bm(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Bm(Om(t.quantizedEmbedding),Om(e.quantizedEmbedding))}return t},Dn.prototype.embedForVideo=Dn.prototype.Oa,Dn.prototype.embed=Dn.prototype.Na,Dn.prototype.setOptions=Dn.prototype.v,Dn.createFromModelPath=function(t,e){return nt(Dn,t,{baseOptions:{modelAssetPath:e}})},Dn.createFromModelBuffer=function(t,e){return nt(Dn,t,{baseOptions:{modelAssetBuffer:e}})},Dn.createFromOptions=function(t,e){return nt(Dn,t,e)};var nd=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};function ob(t){var e=(function(n){return Ji(n,Tn,1)})(t.ja()).filter(n=>(tn(Dt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(at(e[0],On,7)?.o()?.g()??new Map).forEach((n,i)=>{t.u[Number(i)]=tn(Dt(n,1))??""})}function mg(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function gg(t){try{let e=new nd(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.l)return e;t.l(e)}finally{ah(t)}}nd.prototype.close=nd.prototype.close;var Sn=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Xd,this.B=new u_,Ie(this.h,0,3,this.B),Ie(t=this.h,0,1,e=new It)}C(){return"ImageSegmenter"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?ke(this.h,2,$i(t.displayNamesLocale)):"displayNamesLocale"in t&&ke(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}L(){ob(this)}segment(t,e,n){var i=typeof e!="function"?e:{};return this.l=typeof e=="function"?e:n,mg(this),oi(this,t,i),gg(this)}eb(t,e,n,i){var s=typeof n!="function"?n:{};return this.l=typeof n=="function"?n:i,mg(this),Ci(this,t,s,e),gg(this)}Ra(){return this.u}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"norm_rect");var e=new On;Ai(e,f_,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),n.v(e),jn(t,n),rh(this,t),this.outputConfidenceMasks&&(lt(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),ta(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>sa(this,r,!0,!this.l)),fe(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],fe(this,i)})),this.outputCategoryMask&&(lt(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),ta(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=sa(this,i,!1,!this.l),fe(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,fe(this,i)})),lt(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,fe(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Sn.prototype.getLabels=Sn.prototype.Ra,Sn.prototype.segmentForVideo=Sn.prototype.eb,Sn.prototype.segment=Sn.prototype.segment,Sn.prototype.setOptions=Sn.prototype.v,Sn.createFromModelPath=function(t,e){return nt(Sn,t,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(t,e){return nt(Sn,t,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(t,e){return nt(Sn,t,e)};var lb={0:0,1:1,2:2,3:3};function Lu(){return qd()?void 0:document.createElement("canvas")}var bn=class extends Oc{constructor(t,e){super(new tb(t,e)),this.u=new hr,this.delegate="CPU",this.h=0,this.baseOptions=new It,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(t){return this.delegate=t.baseOptions?.delegate??"CPU",super.j(t)}fb(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var n=t.width,i=t.height;e=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,n=t.height,t=t.data;else{if([e,n]=Yd(t),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,n);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(t,0,0),t=i.getImageData(0,0,e,n).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:t.length,width:e,height:n});var s=this.i._malloc(t.length);if(this.i.HEAPU8.set(t,s),this.l=s,!this.i._interactive_segmenter_set_image(this.h,s,e,n,i))throw Error("Failed to set image on native engine.")}segment(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e=(function(h){h=h.map(({isCompleted:d,brushMode:p,point:g})=>{p=lb[p]??0,g=g.map(({x:m,y:f})=>{var T=new NS;return Xr(T,1,m),Xr(T,2,f),T});var v=new FS;return zu(v,d),co(v,1,qi(p),0),ku(v,2,g),v});var u=new OS;return ku(u,1,h),BS(u)})(t);t=this.i._malloc(e.length),this.i.HEAPU8.set(e,t);var n=this.i._malloc(12),i=n+4,s=n+8,r=0,a=this.B++;try{if(this.m)if(this.delegate==="GPU"){var o=this.m;++o.g.T,o.h.set(a,performance.now())}else{var l=this.m;++l.g.P,l.h.set(a,performance.now())}if((r=this.i._interactive_segmenter_segment(this.h,t,e.length,n,i,s))===0)throw Error("Segmentation failed.");this.m?.za(a);let h=this.i.HEAPU32[n/4],u=this.i.HEAPU32[i/4],d=new Float32Array(this.i.HEAPU8.buffer,r,this.i.HEAPU32[s/4]/4);var c=new Float32Array(d);if(o=h*u,(c instanceof Uint8Array||c instanceof Float32Array)&&c.length!==o)throw Error("Unsupported channel count: "+c.length/o);return new Vt([c],!0,!1,this.g.i.canvas??void 0,this.u,h,u)}finally{t!==0&&this.i._free(t),n!==0&&this.i._free(n),r!==0&&this.i._free(r)}}o(){this.h!==0&&(this.m?.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var t=new Dc;if(this.delegate==="GPU"){var e=new Od;bi(t,2,tr,e)}else Ei(e=new uS,1,4),bi(t,1,tr,e);if(Ie(this.baseOptions,0,3,t),t=ES(this.baseOptions),e=this.i._malloc(t.length),this.i.HEAPU8.set(t,e),this.h=this.i._interactive_segmenter_create(e,t.length),this.i._free(e),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.m?.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};bn.prototype.close=bn.prototype.close,bn.prototype.segment=bn.prototype.segment,bn.prototype.setImage=bn.prototype.fb,bn.prototype.setOptions=bn.prototype.v,bn.createFromModelPath=function(t,e){return _c(bn,Lu(),t,{baseOptions:{modelAssetPath:e}})},bn.createFromModelBuffer=function(t,e){return _c(bn,Lu(),t,{baseOptions:{modelAssetBuffer:e}})},bn.createFromOptions=function(t,e){var n=e.canvas??Lu();return _c(bn,n,t,e)};var id=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};id.prototype.close=id.prototype.close;var vi=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Xd,this.u=new u_,Ie(this.h,0,3,this.u),Ie(t=this.h,0,1,e=new It)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}segment(t,e,n,i){var s=typeof n!="function"?n:{};if(this.l=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.I+1,i=new p_,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new Cu;zu(r,!0),Xr(r,1,e.keypoint.x),Xr(r,2,e.keypoint.y),bi(i,1,$u,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new kS;for(r of e.scribble)zu(e=new Cu,!0),Xr(e,1,r.x),Xr(e,2,r.y),no(o,1,Cu,e);bi(i,2,$u,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),oi(this,t,s);e:{try{let o=new id(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var a=o;break e}this.l(o)}finally{ah(this)}a=void 0}return a}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"roi_in"),Ct(t,"norm_rect_in");var e=new On;Ai(e,f_,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),wt(n,"IMAGE:image_in"),wt(n,"ROI:roi_in"),wt(n,"NORM_RECT:norm_rect_in"),n.v(e),jn(t,n),rh(this,t),this.outputConfidenceMasks&&(lt(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),ta(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>sa(this,r,!0,!this.l)),fe(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],fe(this,i)})),this.outputCategoryMask&&(lt(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),ta(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=sa(this,i,!1,!this.l),fe(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,fe(this,i)})),lt(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,fe(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};vi.prototype.segment=vi.prototype.segment,vi.prototype.setOptions=vi.prototype.v,vi.createFromModelPath=function(t,e){return nt(vi,t,{baseOptions:{modelAssetPath:e}})},vi.createFromModelBuffer=function(t,e){return nt(vi,t,{baseOptions:{modelAssetBuffer:e}})},vi.createFromOptions=function(t,e){return nt(vi,t,e)};var Yn=class extends Fn{constructor(t,e){super(new ai(t,e),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Ie(t=this.h=new m_,0,1,e=new It)}C(){return"ObjectDetector"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?ke(this.h,2,$i(t.displayNamesLocale)):"displayNamesLocale"in t&&ke(this.h,2),t.maxResults!==void 0?Ei(this.h,3,t.maxResults):"maxResults"in t&&ke(this.h,3),t.scoreThreshold!==void 0?Ce(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ke(this.h,4),t.categoryAllowlist!==void 0?Tc(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ke(this.h,5),t.categoryDenylist!==void 0?Tc(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ke(this.h,6),this.j(t)}G(t,e){return this.l={detections:[]},oi(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},Ci(this,t,n,e),this.l}o(){var t=new Bn;Ct(t,"input_frame_gpu"),Ct(t,"norm_rect"),lt(t,"detections");var e=new On;Ai(e,zS,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),wt(n,"IMAGE:input_frame_gpu"),wt(n,"NORM_RECT:norm_rect"),Qe(n,"DETECTIONS:detections"),n.v(e),jn(t,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=q0(r),this.l.detections.push(v_(i));fe(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{fe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Yn.prototype.detectForVideo=Yn.prototype.H,Yn.prototype.detect=Yn.prototype.G,Yn.prototype.setOptions=Yn.prototype.v,Yn.createFromModelPath=async function(t,e){return nt(Yn,t,{baseOptions:{modelAssetPath:e}})},Yn.createFromModelBuffer=function(t,e){return nt(Yn,t,{baseOptions:{modelAssetBuffer:e}})},Yn.createFromOptions=function(t,e){return nt(Yn,t,e)};var sd=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(t=>{t.close()})}};function _g(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function vg(t){try{let e=new sd(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{ah(t)}}sd.prototype.close=sd.prototype.close;var Qt=class extends Fn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ie(t=this.h=new g_,0,1,e=new It),this.B=new o_,Ie(this.h,0,3,this.B),this.l=new a_,Ie(this.h,0,2,this.l),Ei(this.l,4,1),Ce(this.l,2,.5),Ce(this.B,2,.5),Ce(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return at(this.h,It,1)}set baseOptions(t){Ie(this.h,0,1,t)}v(t){return"numPoses"in t&&Ei(this.l,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ce(this.l,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ce(this.B,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,_g(this),oi(this,t,i),vg(this)}H(t,e,n,i){var s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,_g(this),Ci(this,t,s,e),vg(this)}o(){var t=new Bn;Ct(t,"image_in"),Ct(t,"norm_rect"),lt(t,"normalized_landmarks"),lt(t,"world_landmarks"),lt(t,"segmentation_masks");var e=new On;Ai(e,VS,this.h);var n=new Tn;Nn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:normalized_landmarks"),Qe(n,"WORLD_LANDMARKS:world_landmarks"),n.v(e),jn(t,n),rh(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=go(r),this.landmarks.push(sh(i));fe(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],fe(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=qr(r),this.worldLandmarks.push(ja(i));fe(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],fe(this,i)}),this.outputSegmentationMasks&&(Qe(n,"SEGMENTATION_MASK:segmentation_masks"),ta(this,"segmentation_masks"),this.g.ha("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>sa(this,r,!0,!this.u)),fe(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],fe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Qt.prototype.detectForVideo=Qt.prototype.H,Qt.prototype.detect=Qt.prototype.G,Qt.prototype.setOptions=Qt.prototype.v,Qt.createFromModelPath=function(t,e){return nt(Qt,t,{baseOptions:{modelAssetPath:e}})},Qt.createFromModelBuffer=function(t,e){return nt(Qt,t,{baseOptions:{modelAssetBuffer:e}})},Qt.createFromOptions=function(t,e){return nt(Qt,t,e)},Qt.POSE_CONNECTIONS=N_,bt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Qt.POSE_CONNECTIONS);var ct={NOSE:0,L_EAR:7,R_EAR:8,L_SHOULDER:11,R_SHOULDER:12,L_ELBOW:13,R_ELBOW:14,L_WRIST:15,R_WRIST:16,L_INDEX:19,R_INDEX:20,L_HIP:23,R_HIP:24,L_KNEE:25,R_KNEE:26,L_ANKLE:27,R_ANKLE:28},ts=(t,e,n)=>Math.min(n,Math.max(e,t)),Jt=(t,e,n)=>t+(e-t)*n,wn=(t,e,n)=>({x:Jt(t.x,e.x,n),y:Jt(t.y,e.y,n),z:Jt(t.z||0,e.z||0,n),visibility:Math.min(t.visibility??1,e.visibility??1)}),af=class{constructor(){this.points=new Map}reset(){this.points.clear()}update(e,n){let i=[];for(let s=0;s<e.length;s++){let r=e[s],a=this.points.get(s);if(!a){let c={x:r.x,y:r.y,z:r.z||0,visibility:r.visibility??1};this.points.set(s,c),i[s]={...c};continue}let o=Math.hypot(r.x-a.x,r.y-a.y)/Math.max(.008,n),l=ts(.18+o*.12,.18,.72);a.x=Jt(a.x,r.x,l),a.y=Jt(a.y,r.y,l),a.z=Jt(a.z,r.z||0,l),a.visibility=Jt(a.visibility,r.visibility??1,.35),i[s]={...a}}return i}},ws=class{constructor(e,n,i,s,r){this.cols=n,this.rows=i,this.count=n*i,this.positions=new Float32Array(this.count*3),this.targets=new Float32Array(this.count*3),this.velocity=new Float32Array(this.count*3),this.weights=new Float32Array(this.count);let a=new Float32Array(this.count*2),o=[],[l,c,h,u]=s;for(let p=0;p<i;p++){let g=p/(i-1);for(let v=0;v<n;v++){let m=v/(n-1),f=p*n+v;a[f*2]=Jt(l,h,m),a[f*2+1]=Jt(c,u,g),this.weights[f]=Math.pow(g,1.65)}}for(let p=0;p<i-1;p++)for(let g=0;g<n-1;g++){let v=p*n+g,m=v+1,f=v+n,T=f+1;o.push(v,f,m,m,f,T)}let d=new fi;d.setAttribute("position",new an(this.positions,3)),d.setAttribute("uv",new an(a,2)),d.setIndex(o),this.geometry=d,this.mesh=new vn(d,r),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.initialized=!1,e.add(this.mesh)}setTarget(e){for(let n=0;n<this.rows;n++){let i=n/(this.rows-1);for(let s=0;s<this.cols;s++){let r=s/(this.cols-1),a=e(r,i),o=(n*this.cols+s)*3;this.targets[o]=a.x,this.targets[o+1]=a.y,this.targets[o+2]=a.z||0}}}snap(){this.positions.set(this.targets),this.velocity.fill(0),this.geometry.attributes.position.needsUpdate=!0}step(e,n,i=44,s=.78){if(!this.initialized){this.snap(),this.initialized=!0;return}let r=ts(e,.008,.034);for(let a=0;a<this.count;a++){let o=a*3,l=this.weights[a],c=i*(1.35-l*.55),h=n*l*.12,u=-.012*l,d=this.velocity[o],p=this.velocity[o+1],g=this.velocity[o+2];d+=(this.targets[o]-this.positions[o])*c*r,p+=(this.targets[o+1]-this.positions[o+1])*c*r,g+=(this.targets[o+2]-this.positions[o+2])*c*r,d+=h*r,p+=u*r;let v=Math.pow(s,r*60);d*=v,p*=v,g*=v,this.velocity[o]=d,this.velocity[o+1]=p,this.velocity[o+2]=g,this.positions[o]+=d*r,this.positions[o+1]+=p*r,this.positions[o+2]+=g*r}this.geometry.attributes.position.needsUpdate=!0}setVisible(e){e&&!this.mesh.visible&&(this.initialized=!1),this.mesh.visible=e}dispose(){this.geometry.dispose()}},of=class{constructor(){this.root=document.getElementById("ultraStudio"),this.root&&(this.video=document.getElementById("ultraVideo"),this.mount=document.getElementById("ultraWebgl"),this.occlusion=document.getElementById("ultraOcclusion"),this.guide=document.getElementById("ultraGuide"),this.idle=document.getElementById("ultraIdle"),this.loading=document.getElementById("ultraLoading"),this.startButton=document.getElementById("ultraStart"),this.switchButton=document.getElementById("ultraSwitch"),this.stopButton=document.getElementById("ultraStop"),this.snapshotButton=document.getElementById("ultraSnapshot"),this.physicsInput=document.getElementById("ultraPhysics"),this.fpsLabel=document.getElementById("ultraFPS"),this.poseLabel=document.getElementById("ultraPose"),this.yawLabel=document.getElementById("ultraYaw"),this.garmentLabel=document.getElementById("ultraGarment"),this.engineLabel=document.getElementById("ultraEngine"),this.modeLabel=document.getElementById("ultraMode"),this.poseLandmarker=null,this.fileset=null,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.grids={},this.running=!1,this.stream=null,this.facing="user",this.lastDetect=0,this.lastRender=performance.now(),this.lastPoseAt=0,this.lastTorsoX=null,this.motionX=0,this.smoothYaw=0,this.frameCounter=0,this.fpsWindowStart=performance.now(),this.raf=0,this.smoother=new af,this.landmarks=null,this.worldLandmarks=null,this.garment={name:"\u067E\u06CC\u0631\u0627\u0647\u0646 \u0633\u0631\u0645\u0647\u200C\u0627\u06CC",category:"tops",src:"/static/samples/shirt_navy.png",file:null,image:null,sleeveReach:.78},this.garmentVersion=0,this.initializedGarment=!1,this.poseReady=!1,this.occlusionCtx=this.occlusion.getContext("2d",{alpha:!0}),this.setupEvents(),this.syncInitialGarment(),this.setButtons(!1),this.engineLabel.textContent="MediaPipe + WebGL")}setupEvents(){this.startButton.addEventListener("click",()=>this.start()),this.stopButton.addEventListener("click",()=>this.stop()),this.switchButton.addEventListener("click",()=>this.switchCamera()),this.snapshotButton.addEventListener("click",()=>this.snapshot()),window.addEventListener("tryposhak:garmentchange",e=>{let n=e.detail||{};this.garment.name=n.name||this.garment.name,this.garment.category=n.category||this.garment.category,this.garment.src=n.src||null,this.garment.file=n.file||null,this.garmentLabel.textContent=this.garment.name,this.prepareGarment().catch(i=>this.setMode("\u062E\u0637\u0627 \u062F\u0631 \u0644\u0628\u0627\u0633: "+i.message))}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("pagehide",()=>this.stop(!1))}syncInitialGarment(){let e=document.querySelector(".product-card.active");e&&(this.garment.name=e.dataset.name||this.garment.name,this.garment.category=e.dataset.category||this.garment.category,this.garment.src=e.dataset.src||this.garment.src,this.garmentLabel.textContent=this.garment.name)}setButtons(e){this.startButton.disabled=e,this.switchButton.disabled=!e,this.stopButton.disabled=!e,this.snapshotButton.disabled=!e}setMode(e){this.modeLabel&&(this.modeLabel.textContent=e)}async initPose(){if(!this.poseLandmarker){this.setMode("\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC Body Tracker...");try{this.fileset=await Ys.forVisionTasks("/static/mediapipe/wasm");let e={baseOptions:{modelAssetPath:"/static/models/pose_landmarker_lite.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.45,minPosePresenceConfidence:.45,minTrackingConfidence:.45,outputSegmentationMasks:!1};try{this.poseLandmarker=await Qt.createFromOptions(this.fileset,e),this.engineLabel.textContent="MediaPipe GPU + WebGL"}catch{e.baseOptions.delegate="CPU",this.poseLandmarker=await Qt.createFromOptions(this.fileset,e),this.engineLabel.textContent="MediaPipe CPU + WebGL"}this.setMode("Body Tracker \u0622\u0645\u0627\u062F\u0647")}catch(e){throw this.setMode("Body Tracker \u0644\u0648\u062F \u0646\u0634\u062F"),e}}}initRenderer(){if(this.renderer)return;this.scene=new Ca,this.camera=new Ur(-1,1,1,-1,-10,10),this.camera.position.z=5,this.renderer=new sc({alpha:!0,antialias:!0,powerPreference:"high-performance",premultipliedAlpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),this.mount.appendChild(this.renderer.domElement);let e=`
      varying vec2 vUv;
      varying float vDepth;
      void main() {
        vUv = uv;
        vDepth = position.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,n=`
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
    `;this.material=new Pn({transparent:!0,depthTest:!1,depthWrite:!1,side:Wn,vertexShader:e,fragmentShader:n,uniforms:{uMap:{value:new on},uYaw:{value:0},uMotion:{value:0},uTime:{value:0},uOpacity:{value:.98}}}),this.grids.torso=new ws(this.scene,13,17,[.18,.03,.82,.98],this.material),this.grids.leftSleeve=new ws(this.scene,4,9,[0,.04,.36,.58],this.material),this.grids.rightSleeve=new ws(this.scene,4,9,[.64,.04,1,.58],this.material),this.grids.waist=new ws(this.scene,9,5,[.08,.02,.92,.34],this.material),this.grids.leftLeg=new ws(this.scene,5,15,[.06,.25,.49,.99],this.material),this.grids.rightLeg=new ws(this.scene,5,15,[.51,.25,.94,.99],this.material),this.resize()}async start(){if(!this.running)try{this.loading.hidden=!1,this.idle.hidden=!0,await this.initPose(),this.initRenderer(),this.setMode("\u062F\u0631 \u062D\u0627\u0644 \u0622\u0645\u0627\u062F\u0647\u200C\u0633\u0627\u0632\u06CC \u0644\u0628\u0627\u0633..."),await this.prepareGarment(),this.setMode("\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062F\u0633\u062A\u0631\u0633\u06CC \u062F\u0648\u0631\u0628\u06CC\u0646..."),await this.openCamera(),this.setMode("\u062F\u0648\u0631\u0628\u06CC\u0646 \u0622\u0645\u0627\u062F\u0647\u061B \u0634\u0631\u0648\u0639 \u0631\u0647\u06AF\u06CC\u0631\u06CC..."),this.running=!0,this.setButtons(!0),this.guide.hidden=!1,this.smoother.reset(),this.lastDetect=0,this.lastRender=performance.now(),this.frameCounter=0,this.fpsWindowStart=performance.now(),this.setMode("Ultra Live \u0641\u0639\u0627\u0644"),this.loop(performance.now())}catch(e){this.idle.hidden=!1,this.setMode(e.message||"\u0634\u0631\u0648\u0639 \u062F\u0648\u0631\u0628\u06CC\u0646 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F"),this.stopTracks()}finally{this.loading.hidden=!0}}async openCamera(){if(!navigator.mediaDevices?.getUserMedia)throw new Error("\u0645\u0631\u0648\u0631\u06AF\u0631 \u0627\u0632 \u062F\u0648\u0631\u0628\u06CC\u0646 \u0632\u0646\u062F\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC\u200C\u06A9\u0646\u062F");if(!window.isSecureContext&&!["localhost","127.0.0.1"].includes(location.hostname))throw new Error("\u0628\u0631\u0627\u06CC \u062F\u0648\u0631\u0628\u06CC\u0646 \u0631\u0648\u06CC \u0645\u0648\u0628\u0627\u06CC\u0644 HTTPS \u0644\u0627\u0632\u0645 \u0627\u0633\u062A");this.stopTracks();let e=(s,r=6500)=>{let a,o=new Promise((l,c)=>{a=setTimeout(()=>c(new Error("\u062F\u0633\u062A\u0631\u0633\u06CC \u062F\u0648\u0631\u0628\u06CC\u0646 \u0637\u0648\u0644 \u06A9\u0634\u06CC\u062F\u061B \u0645\u062C\u0648\u0632 Camera \u0645\u0631\u0648\u0631\u06AF\u0631 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646.")),r)});return Promise.race([navigator.mediaDevices.getUserMedia(s),o]).finally(()=>clearTimeout(a))},n={audio:!1,video:{facingMode:{ideal:this.facing},width:{ideal:1280},height:{ideal:960},frameRate:{ideal:30,max:60}}};try{this.stream=await e(n)}catch(s){try{this.stream=await e({audio:!1,video:!0},4500)}catch{throw s}}this.video.srcObject=this.stream,this.video.readyState<1&&await Promise.race([new Promise(s=>{let r=()=>{this.video.removeEventListener("loadedmetadata",r),s()};this.video.addEventListener("loadedmetadata",r,{once:!0})}),new Promise(s=>setTimeout(s,1800))]);let i=this.video.play();i&&typeof i.then=="function"&&await Promise.race([i.catch(()=>{}),new Promise(s=>setTimeout(s,1800))]),this.applyMirror(),this.resize()}async switchCamera(){if(this.running){this.facing=this.facing==="user"?"environment":"user",this.loading.hidden=!1;try{await this.openCamera(),this.smoother.reset(),this.landmarks=null,this.worldLandmarks=null}finally{this.loading.hidden=!0}}}applyMirror(){let e=this.facing==="user"?"scaleX(-1)":"none";this.video.style.transform=e,this.renderer&&(this.renderer.domElement.style.transform=e),this.occlusion.style.transform=e}stopTracks(){this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.video.srcObject=null}stop(e=!0){this.running=!1,cancelAnimationFrame(this.raf),this.stopTracks(),this.hideGarment(),this.occlusionCtx.clearRect(0,0,this.occlusion.width,this.occlusion.height),this.landmarks=null,this.worldLandmarks=null,e&&(this.idle.hidden=!1,this.guide.hidden=!1,this.setButtons(!1),this.fpsLabel.textContent="\u2014",this.poseLabel.textContent="\u2014",this.yawLabel.textContent="\u2014",this.setMode("\u0622\u0645\u0627\u062F\u0647 \u0634\u0631\u0648\u0639"))}async prepareGarment(){let e=++this.garmentVersion,n;if(this.garment.file)n=this.garment.file;else if(this.garment.src){let a=await fetch(this.garment.src,{cache:"force-cache"});if(!a.ok)throw new Error("\u062A\u0635\u0648\u06CC\u0631 \u0644\u0628\u0627\u0633 \u062E\u0648\u0627\u0646\u062F\u0647 \u0646\u0634\u062F");let o=await a.blob();n=new File([o],"garment.png",{type:o.type||"image/png"})}else throw new Error("\u0644\u0628\u0627\u0633 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647");let i=new FormData;i.append("garment_image",n);let s=await fetch("/api/garment/prepare",{method:"POST",body:i}),r=await s.json().catch(()=>({}));if(!s.ok)throw new Error(r.detail||"\u0622\u0645\u0627\u062F\u0647\u200C\u0633\u0627\u0632\u06CC \u0644\u0628\u0627\u0633 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F");e===this.garmentVersion&&(this.garment.image=r.image,this.garment.sleeveReach=Number(r.sleeve_reach)||.78,this.garmentLabel.textContent=this.garment.name,this.renderer&&await this.loadTexture(r.image,e))}async loadTexture(e,n){let s=await new Na().loadAsync(e);if(n!==this.garmentVersion){s.dispose();return}s.colorSpace=hn,s.wrapS=ni,s.wrapT=ni,s.minFilter=_n,s.magFilter=_n,this.texture&&this.texture.dispose(),this.texture=s,this.material.uniforms.uMap.value=s}resize(){if(!this.root)return;let e=document.getElementById("ultraStage");if(!e)return;let n=e.getBoundingClientRect(),i=Math.max(1,Math.round(n.width)),s=Math.max(1,Math.round(n.height)),r=i/s;this.renderer&&(this.renderer.setSize(i,s,!1),this.camera.left=-r,this.camera.right=r,this.camera.top=1,this.camera.bottom=-1,this.camera.updateProjectionMatrix());let a=Math.min(window.devicePixelRatio||1,1.5);this.occlusion.width=Math.round(i*a),this.occlusion.height=Math.round(s*a),this.occlusion.style.width=i+"px",this.occlusion.style.height=s+"px",this.occlusionDpr=a}coverMetrics(){let n=document.getElementById("ultraStage").getBoundingClientRect(),i=n.width,s=n.height,r=this.video.videoWidth||i,a=this.video.videoHeight||s,o=Math.max(i/r,s/a),l=r*o,c=a*o;return{sw:i,sh:s,vw:r,vh:a,scale:o,ox:(i-l)/2,oy:(s-c)/2,aspect:i/s}}landmarkToPixel(e,n){return{x:n.ox+e.x*n.vw*n.scale,y:n.oy+e.y*n.vh*n.scale}}landmarkToWorld(e,n){let i=this.landmarkToPixel(e,n);return{x:(i.x/n.sw*2-1)*n.aspect,y:1-i.y/n.sh*2,z:e.z||0}}computeYaw(e){if(!e||!e[ct.L_SHOULDER]||!e[ct.R_SHOULDER]||!e[ct.L_HIP]||!e[ct.R_HIP])return this.smoothYaw;let n=e[ct.L_SHOULDER],i=e[ct.R_SHOULDER],s=e[ct.L_HIP],r=e[ct.R_HIP],a=i.x-n.x,o=i.y-n.y,l=i.z-n.z,c=(n.x+i.x)*.5-(s.x+r.x)*.5,h=(n.y+i.y)*.5-(s.y+r.y)*.5,u=(n.z+i.z)*.5-(s.z+r.z)*.5,d=o*u-l*h,p=a*h-o*c,g=Math.atan2(d,Math.abs(p)+1e-5);return g=ts(g,-1.05,1.05),this.smoothYaw=Jt(this.smoothYaw,g,.18),this.smoothYaw}poseQuality(e){let n=[11,12,23,24,25,26,27,28],i=0;for(let s of n)i+=e[s]?.visibility??0;return i/n.length}hideGarment(){Object.values(this.grids).forEach(e=>e?.setVisible(!1))}updateTopTargets(e,n,i){let s=this.landmarkToWorld(e[ct.L_SHOULDER],n),r=this.landmarkToWorld(e[ct.R_SHOULDER],n),a=this.landmarkToWorld(e[ct.L_HIP],n),o=this.landmarkToWorld(e[ct.R_HIP],n),l=this.landmarkToWorld(e[ct.L_ELBOW],n),c=this.landmarkToWorld(e[ct.R_ELBOW],n),h=this.landmarkToWorld(e[ct.L_WRIST],n),u=this.landmarkToWorld(e[ct.R_WRIST],n),d=Number(document.getElementById("scaleRange")?.value||100)/100,p=Number(document.getElementById("widthRange")?.value||100)/100,g=Number(document.getElementById("xRange")?.value||0)/100,v=Number(document.getElementById("yRange")?.value||0)/100,m=wn(s,r,.5),f=wn(a,o,.5),T=Math.hypot(r.x-s.x,r.y-s.y),E=Math.hypot(o.x-a.x,o.y-a.y),S=Math.hypot(f.x-m.x,f.y-m.y),R=.7+.3*Math.cos(Math.abs(i)),A=g*T*.8,C=-v*S*1.1;this.grids.torso.setVisible(!0),this.grids.leftSleeve.setVisible(!0),this.grids.rightSleeve.setVisible(!0),this.grids.waist.setVisible(!1),this.grids.leftLeg.setVisible(!1),this.grids.rightLeg.setVisible(!1),this.grids.torso.setTarget((F,O)=>{let G=wn(m,f,O*.98),X=Jt(T*1.18,E*1.18,O)*p*d*R,H=F-.5,J=1-Math.sin(i)*H*.33,V=1+Math.pow(O,2.2)*.06,se=Math.cos(H*Math.PI)*.026*d;return{x:G.x+H*X*J*V+A+Math.sin(i)*S*(O-.45)*.05,y:G.y-O*S*(d-1)*.72+C-.015+O*-.025*d,z:se+Math.sin(i)*H*.07}});let U=ts(this.garment.sleeveReach,.45,1.9),M=(F,O,G,X)=>U<=1?wn(F,O,U*X):X<.58?wn(F,O,X/.58):wn(O,G,(X-.58)/.42*(U-1)),x=(F,O,G)=>{let X=F==="left"?s:r,H=F==="left"?l:c,J=F==="left"?h:u,V=M(X,H,J,G),se=M(X,H,J,ts(G+.04,0,1)),ue=se.x-V.x,be=se.y-V.y,We=Math.hypot(ue,be)||1,pt=-be/We,_t=ue/We,it=F==="left"?-1:1,q=T*Jt(.29,.18,G)*p*d,K=(O-.5)*q;return{x:V.x+pt*K+A+it*T*.02,y:V.y+_t*K+C,z:.015+Math.cos((O-.5)*Math.PI)*.012}};this.grids.leftSleeve.setTarget((F,O)=>x("left",F,O)),this.grids.rightSleeve.setTarget((F,O)=>x("right",F,O));let P=m.x;this.lastTorsoX!==null&&(this.motionX=Jt(this.motionX,(P-this.lastTorsoX)*24,.28)),this.lastTorsoX=P}updateBottomTargets(e,n,i){let s=this.landmarkToWorld(e[ct.L_HIP],n),r=this.landmarkToWorld(e[ct.R_HIP],n),a=this.landmarkToWorld(e[ct.L_KNEE],n),o=this.landmarkToWorld(e[ct.R_KNEE],n),l=this.landmarkToWorld(e[ct.L_ANKLE],n),c=this.landmarkToWorld(e[ct.R_ANKLE],n),h=Number(document.getElementById("scaleRange")?.value||100)/100,u=Number(document.getElementById("widthRange")?.value||100)/100,d=Number(document.getElementById("xRange")?.value||0)/100,p=Number(document.getElementById("yRange")?.value||0)/100,g=wn(s,r,.5),v=Math.hypot(r.x-s.x,r.y-s.y),m=(Math.hypot(l.x-s.x,l.y-s.y)+Math.hypot(c.x-r.x,c.y-r.y))*.5,f=.72+.28*Math.cos(Math.abs(i)),T=d*v*.8,E=-p*m*.7;this.grids.torso.setVisible(!1),this.grids.leftSleeve.setVisible(!1),this.grids.rightSleeve.setVisible(!1),this.grids.waist.setVisible(!0),this.grids.leftLeg.setVisible(!0),this.grids.rightLeg.setVisible(!0),this.grids.waist.setTarget((R,A)=>{let C=wn(s,a,A*.18),U=wn(r,o,A*.18),M=wn(C,U,.5),x=v*u*h*f*Jt(1.18,.92,A);return{x:M.x+(R-.5)*x+T,y:M.y+E-A*.025,z:Math.cos((R-.5)*Math.PI)*.018}});let S=(R,A,C)=>{let U=R==="left"?s:r,M=R==="left"?a:o,x=R==="left"?l:c,P;C<.48?P=wn(U,M,C/.48):P=wn(M,x,(C-.48)/.52);let F=v*Jt(.42,.22,C)*u*h*f,O=C<.48?M.x-U.x:x.x-M.x,G=C<.48?M.y-U.y:x.y-M.y,X=Math.hypot(O,G)||1,H=-G/X,J=O/X,V=(A-.5)*F;return{x:P.x+H*V+T,y:P.y+J*V+E,z:Math.cos((A-.5)*Math.PI)*.014}};this.grids.leftLeg.setTarget((R,A)=>S("left",R,A)),this.grids.rightLeg.setTarget((R,A)=>S("right",R,A)),this.lastTorsoX!==null&&(this.motionX=Jt(this.motionX,(g.x-this.lastTorsoX)*22,.28)),this.lastTorsoX=g.x}drawOcclusion(e,n){let i=this.occlusionCtx,s=this.occlusionDpr||1,r=n.sw,a=n.sh;i.setTransform(s,0,0,s,0,0),i.clearRect(0,0,r,a),i.save(),i.drawImage(this.video,n.ox,n.oy,n.vw*n.scale,n.vh*n.scale),i.globalCompositeOperation="destination-in",i.strokeStyle="#fff",i.fillStyle="#fff",i.lineCap="round",i.lineJoin="round";let o=R=>this.landmarkToPixel(e[R],n),l=o(ct.L_SHOULDER),c=o(ct.R_SHOULDER),h=o(ct.L_ELBOW),u=o(ct.R_ELBOW),d=o(ct.L_WRIST),p=o(ct.R_WRIST),g=Math.hypot(c.x-l.x,c.y-l.y),v=this.garment.category==="tops"?ts(this.garment.sleeveReach,.45,1.9):.2,m=(R,A,C)=>{let U;this.garment.category==="tops"?U=v<=1?wn(R,A,ts(v,.35,.95)):wn(A,C,ts(v-1,0,.88)):U=R,i.beginPath(),i.lineWidth=Math.max(12,g*.17),i.moveTo(U.x,U.y),i.lineTo(A.x,A.y),i.lineTo(C.x,C.y),i.stroke(),i.beginPath(),i.arc(C.x,C.y,Math.max(8,g*.09),0,Math.PI*2),i.fill()};m(l,h,d),m(c,u,p);let f=o(ct.NOSE),T=o(ct.L_EAR),E=o(ct.R_EAR),S=Math.max(g*.34,Math.hypot(E.x-T.x,E.y-T.y)*.82);i.beginPath(),i.ellipse(f.x,f.y-g*.08,S,g*.34,0,0,Math.PI*2),i.fill(),i.restore()}updatePose(e){if(!this.poseLandmarker||this.video.readyState<2||e-this.lastDetect<32)return;this.lastDetect=e;let n=performance.now();try{let i=this.poseLandmarker.detectForVideo(this.video,e);if(!i.landmarks?.length){this.poseReady=!1,this.landmarks=null,this.hideGarment(),this.guide.hidden=!1,this.poseLabel.textContent="\u0628\u062F\u0646 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F";return}let s=this.lastPoseAt?(e-this.lastPoseAt)/1e3:1/30;this.lastPoseAt=e,this.landmarks=this.smoother.update(i.landmarks[0],s),this.worldLandmarks=i.worldLandmarks?.[0]||null;let r=this.poseQuality(this.landmarks);this.poseReady=r>.38,this.poseLabel.textContent=Math.round(r*100)+"\u066A",this.guide.hidden=this.poseReady;let a=performance.now()-n;this.engineLabel&&(this.engineLabel.dataset.ms=a.toFixed(0))}catch{this.setMode("\u062E\u0637\u0627\u06CC Body Tracker")}}renderGarment(e,n){if(!this.renderer||!this.poseReady||!this.landmarks||!this.texture){this.hideGarment(),this.renderer&&this.renderer.render(this.scene,this.camera);return}let i=this.coverMetrics(),s=this.computeYaw(this.worldLandmarks);this.garment.category==="bottoms"?this.updateBottomTargets(this.landmarks,i,s):this.updateTopTargets(this.landmarks,i,s);let r=Number(this.physicsInput?.value||55)/100,a=Jt(72,28,r),o=Jt(.68,.84,r);Object.values(this.grids).forEach(l=>l?.mesh.visible&&l.step(e,this.motionX,a,o)),this.motionX*=.9,this.material.uniforms.uYaw.value=s,this.material.uniforms.uMotion.value=Math.min(1.2,Math.abs(this.motionX)*8),this.material.uniforms.uTime.value=n/1e3,this.renderer.render(this.scene,this.camera),this.drawOcclusion(this.landmarks,i),this.yawLabel.textContent=Math.round(s*180/Math.PI)+"\xB0"}loop(e){if(!this.running)return;let n=ts((e-this.lastRender)/1e3,.008,.05);if(this.lastRender=e,this.updatePose(e),this.renderGarment(n,e),this.frameCounter++,e-this.fpsWindowStart>=1e3){let i=this.frameCounter*1e3/(e-this.fpsWindowStart);this.fpsLabel.textContent=i.toFixed(0)+" FPS",this.frameCounter=0,this.fpsWindowStart=e;let s=this.engineLabel?.dataset.ms;this.setMode(s?"Tracking "+s+"ms \u2022 Render Live":"Render Live")}this.raf=requestAnimationFrame(i=>this.loop(i))}snapshot(){if(!this.running)return;let n=document.getElementById("ultraStage").getBoundingClientRect(),i=document.createElement("canvas"),s=2;i.width=Math.round(n.width*s),i.height=Math.round(n.height*s);let r=i.getContext("2d"),a=this.coverMetrics();r.save(),this.facing==="user"&&(r.translate(i.width,0),r.scale(-1,1)),r.scale(s,s),r.drawImage(this.video,a.ox,a.oy,a.vw*a.scale,a.vh*a.scale),r.drawImage(this.renderer.domElement,0,0,n.width,n.height),r.drawImage(this.occlusion,0,0,n.width,n.height),r.restore();let o=document.createElement("a");o.download="try-poshak-ultra-"+Date.now()+".png",o.href=i.toDataURL("image/png",.95),o.click()}};function F_(){try{window.TryPoshakUltraLive=new of,new URLSearchParams(location.search).get("ultraAutoStart")==="1"&&setTimeout(()=>window.TryPoshakUltraLive?.start(),350)}catch(t){console.error("Ultra Live boot failed",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F_,{once:!0}):F_();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
