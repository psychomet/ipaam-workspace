export function bsDeUr(str: string) {
  if (str.length % 4 != 0) str += '==='.slice(0, 4 - (str.length % 4));
  return str.replace(/-/g, '+').replace(/_/g, '/');
}

export function bsEnUr(str: string) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
}

export function mkRndStr(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function upDownToCode(plain: string): string {
  const mainString: string = window.btoa(unescape(encodeURIComponent(plain)));
  const encPln: string = bsEnUr(mainString);
  const rvPln: string = encPln.split('').reverse().join('');

  const tstmp: string = String(Date.now()).substring(0, 10);
  const rvTstmp: string = tstmp.split('').reverse().join('');

  const min: number = 1;
  const max: number = rvPln.length - 1;
  const rndNum: number = Math.round(Math.random() * (max - min) + min);

  const rdnStr: string = mkRndStr(10);
  const randChar_1: string = mkRndStr(1).toUpperCase();
  const randChar_2: string = mkRndStr(1).toUpperCase();

  let mixed_tstmp: string = '';
  for (let i = 0; i < rvTstmp.length; i++) {
    mixed_tstmp += rvTstmp[i] + rdnStr[i];
  }

  const firstPart: string = rvPln.substring(rndNum);
  const secondPart: string = rvPln.substring(0, rndNum);

  const randReg: string = randChar_2.concat(String(rndNum)).concat(randChar_1);
  const mainPart: string = firstPart + mixed_tstmp + secondPart + '==';

  const somthingToReturn: string = randReg + mainPart;

  return somthingToReturn;
}

export function downupToCode(tk: string): string {
  const mnTk: string = String(tk).substring(0, tk.length - 2);

  let index: number = 1;
  for (let i = 1; i < mnTk.length; i++) {
    if (/^[a-z]+$/i.test(tk[i])) {
      break;
    }
    index += 1;
  }

  const rndNum: string = mnTk.substring(1, index);
  const fnTk: string = mnTk.substring(index + 1);

  const fPart: string = fnTk.substring(fnTk.length - Number(rndNum));
  const lPart: string = fnTk.substring(0, fnTk.length - Number(rndNum) - 20);

  const exTk: string = fPart + lPart;

  const rvTk: string = exTk.split('').reverse().join('');
  const dcTk: string = decodeURIComponent(escape(atob(bsDeUr(rvTk))));

  return dcTk;
}
