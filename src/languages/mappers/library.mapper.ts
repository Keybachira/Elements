import { LanguageGrammar } from "../grammar.interface.js";
import { normEntry, capEntry, upEntry } from "../utils/transforms.js";

type Library = LanguageGrammar["library"];

function mapStd(std: Library["__standard"]) {
  return {
    main: normEntry(std.main),
    __isarray: capEntry(std.__isarray),
    __isobject: capEntry(std.__isobject),
    __typeof: capEntry(std.__typeof),
    __parse: capEntry(std.__parse),
  };
}

function mapMath(math: Library["__math"]) {
  return {
    main: normEntry(math.main),
    __pi: upEntry(math.__pi),
    __sqrt: capEntry(math.__sqrt),
    __pow: capEntry(math.__pow),
    __round: capEntry(math.__round),
    __random: capEntry(math.__random),
    __max: capEntry(math.__max),
    __min: capEntry(math.__min),
    __isNumber: capEntry(math.__isNumber),
    __isInteger: capEntry(math.__isInteger),
    __isFloat: capEntry(math.__isFloat),
    __cos: capEntry(math.__cos),
    __sin: capEntry(math.__sin),
    __tan: capEntry(math.__tan),
  };
}

function mapString(string: Library["__string"]) {
  return {
    main: normEntry(string.main),
    __length: capEntry(string.__length),
    __toUpperCase: capEntry(string.__toUpperCase),
    __toLowerCase: capEntry(string.__toLowerCase),
    __include: capEntry(string.__include),
    __repeat: capEntry(string.__repeat),
  };
}

function mapDate(date: Library["__date"]) {
  return {
    main: normEntry(date.main),
    __now: capEntry(date.__now),
    __year: capEntry(date.__year),
    __month: capEntry(date.__month),
    __dayMonth: capEntry(date.__dayMonth),
    __dayWeek: capEntry(date.__dayWeek),
    __hour: capEntry(date.__hour),
    __minute: capEntry(date.__minute),
    __second: capEntry(date.__second),
    __getTime: capEntry(date.__getTime),
    __format: capEntry(date.__format),
  };
}

function mapFile(file: Library["__file"]) {
  return {
    main: normEntry(file.main),
    __read: capEntry(file.__read),
    __write: capEntry(file.__write),
    __append: capEntry(file.__append),
    __delete: capEntry(file.__delete),
    __exists: capEntry(file.__exists),
    __rename: capEntry(file.__rename),
    __copy: capEntry(file.__copy),
    __size: capEntry(file.__size),
    __readDir: capEntry(file.__readDir),
    __createDir: capEntry(file.__createDir),
  };
}

function mapHttp(http: Library["__http"]) {
  return {
    main: normEntry(http.main),
    __get: capEntry(http.__get),
    __post: capEntry(http.__post),
    __put: capEntry(http.__put),
    __delete: capEntry(http.__delete),
    __patch: capEntry(http.__patch),
    __setHeader: capEntry(http.__setHeader),
    __setTimeout: capEntry(http.__setTimeout),
    __setAuth: capEntry(http.__setAuth),
  };
}

function mapJson(json: Library["__json"]) {
  return {
    main: normEntry(json.main),
    __parse: capEntry(json.__parse),
    __stringify: capEntry(json.__stringify),
    __validate: capEntry(json.__validate),
    __format: capEntry(json.__format),
    __minify: capEntry(json.__minify),
  };
}

function mapArrayOps(array_ops: Library["__array_ops"]) {
  return {
    main: normEntry(array_ops.main),
    __map: capEntry(array_ops.__map),
    __filter: capEntry(array_ops.__filter),
    __reduce: capEntry(array_ops.__reduce),
    __forEach: capEntry(array_ops.__forEach),
    __find: capEntry(array_ops.__find),
    __findIndex: capEntry(array_ops.__findIndex),
    __sort: capEntry(array_ops.__sort),
    __reverse: capEntry(array_ops.__reverse),
    __join: capEntry(array_ops.__join),
    __slice: capEntry(array_ops.__slice),
    __splice: capEntry(array_ops.__splice),
    __includes: capEntry(array_ops.__includes),
    __indexOf: capEntry(array_ops.__indexOf),
    __concat: capEntry(array_ops.__concat),
    __flat: capEntry(array_ops.__flat),
    __some: capEntry(array_ops.__some),
    __every: capEntry(array_ops.__every),
  };
}

function mapObjectOps(object_ops: Library["__object_ops"]) {
  return {
    main: normEntry(object_ops.main),
    __keys: capEntry(object_ops.__keys),
    __values: capEntry(object_ops.__values),
    __entries: capEntry(object_ops.__entries),
    __assign: capEntry(object_ops.__assign),
    __clone: capEntry(object_ops.__clone),
    __hasProperty: capEntry(object_ops.__hasProperty),
    __deleteProperty: capEntry(object_ops.__deleteProperty),
    __freeze: capEntry(object_ops.__freeze),
    __seal: capEntry(object_ops.__seal),
  };
}

function mapCrypto(crypto: Library["__crypto"]) {
  return {
    main: normEntry(crypto.main),
    __sha256: capEntry(crypto.__sha256),
    __sha512: capEntry(crypto.__sha512),
    __md5: capEntry(crypto.__md5),
    __encrypt: capEntry(crypto.__encrypt),
    __decrypt: capEntry(crypto.__decrypt),
    __generateHash: capEntry(crypto.__generateHash),
    __verify: capEntry(crypto.__verify),
    __random: capEntry(crypto.__random),
  };
}

function mapStream(stream: Library["__stream"]) {
  return {
    main: normEntry(stream.main),
    __createRead: capEntry(stream.__createRead),
    __createWrite: capEntry(stream.__createWrite),
    __pipe: capEntry(stream.__pipe),
    __pause: capEntry(stream.__pause),
    __resume: capEntry(stream.__resume),
    __on: capEntry(stream.__on),
    __end: capEntry(stream.__end),
    __write: capEntry(stream.__write),
  };
}

function mapLogger(logger: Library["__logger"]) {
  return {
    main: normEntry(logger.main),
    __info: capEntry(logger.__info),
    __warn: capEntry(logger.__warn),
    __error: capEntry(logger.__error),
    __debug: capEntry(logger.__debug),
    __trace: capEntry(logger.__trace),
    __setLevel: capEntry(logger.__setLevel),
    __file: capEntry(logger.__file),
    __clear: capEntry(logger.__clear),
  };
}

export function mapLibrary(library: Library) {
  return {
    __standard: mapStd(library.__standard),
    __math: mapMath(library.__math),
    __string: mapString(library.__string),
    __date: mapDate(library.__date),
    __file: mapFile(library.__file),
    __http: mapHttp(library.__http),
    __json: mapJson(library.__json),
    __array_ops: mapArrayOps(library.__array_ops),
    __object_ops: mapObjectOps(library.__object_ops),
    __crypto: mapCrypto(library.__crypto),
    __stream: mapStream(library.__stream),
    __logger: mapLogger(library.__logger),
  };
}
