import { importJWK } from "jose";
import { JWK, KeyLike } from "jose";

/**
 * Language
 */
export type Lang = "zh-CN" | "en-US";

export interface JWKSObject {
  keys: JWK[];
}

export interface JoseKey {
  id?: string;
  // key: Promise<KeyLike | Uint8Array>;
  key: KeyLike | Uint8Array;
}

export const pickBy = (
  obj: any,
  predicate: (value: any, key: string) => boolean
) => {
  const ret: any = {};
  for (const key of Object.keys(obj)) {
    if (predicate(obj[key], key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};

// support in The buffer module from node.js, for the browser.
var Buffer = require("buffer/").Buffer;

export function parseJwt(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    Buffer.from(base64, "base64")
      .toString()
      .split("")
      .map(function (c: string) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function generateRandomString(length: number = 30) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomEmail(length: number = 30) {
  return `${generateRandomString(length).toLowerCase()}` + "@example.com";
}

/**
 * @description Generate random phone number
 *
 */
export const generateRandomPhone = () => {
  const headerNums = [
    "139",
    "138",
    "137",
    "136",
    "135",
    "134",
    "159",
    "158",
    "157",
    "150",
    "151",
    "152",
    "188",
    "187",
    "182",
    "183",
    "184",
    "178",
    "130",
    "131",
    "132",
    "156",
    "155",
    "186",
    "185",
    "176",
    "133",
    "153",
    "189",
    "180",
    "181",
    "177",
  ];
  const headerNum = headerNums[Math.floor(Math.random() * 10)];
  const bodyNum = Math.random().toString().replace("0.", "").slice(0, 8);
  return headerNum + bodyNum;
};

/**
 * @description Domain canonicalization
 * @param domain Domain name
 * @returns Canonicalized domain
 */
export function domainC14n(domain: string) {
  if (
    domain.startsWith("http://localhost:") ||
    domain.startsWith("localhost:")
  ) {
    return domain;
  }
  if (!domain.startsWith(`http`)) {
    domain = `https://${domain}`;
  }

  try {
    new URL(domain);
  } catch (e) {
    throw `Invalid appHost received: ${domain}`;
  }

  domain = domain.replace(/(\/)*$/, "");

  return domain;
}

export function parseJWKS(jwks: JWKSObject): Promise<JoseKey[]> {
  return Promise.all(
    jwks.keys.map((k) =>
      importJWK(k).then((key) => ({
        id: k.kid,
        key,
      }))
    )
  );
}

/**
 * Concatenate and process query parameters
 * @param params Query parameters
 * @returns Concatenated query parameters
 */
export function createQueryParams(params: any) {
  return Object.keys(params)
    .filter((k) => params[k] !== null && params[k] !== undefined)
    .map(
      (k) =>
        encodeURIComponent(k) + "=" + encodeURIComponent(params[k] as string)
    )
    .join("&");
}

export const serialize = function (obj: any) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      if (obj[p] !== undefined) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
  return str.join("&");
};
