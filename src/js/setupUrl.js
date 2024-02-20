const getURlParams = (queryString) => {
  const ObjHash = {};
  const queryParams = new URLSearchParams(queryString);
  queryParams.forEach((value, key) => {
    ObjHash[key] = value;
  });

  return ObjHash;
};

const getHashUrl = (formatParts, urlMatch) => {
  const ObjHash = {};

  for (const [index, label] of formatParts.entries()) {
    let sLabel = label.includes(':') ? label : undefined;

    if (sLabel) {
      sLabel = sLabel.substring(1);
      ObjHash[sLabel] = urlMatch[index];
    }
  }
  return ObjHash;
};

export function setupUrl(urlFormat, urlInstance) {
  const formatParts = urlFormat.split('/');
  let [urlMatch, queryString] = urlInstance.split('?');
  urlMatch = urlMatch.split('/');

  const objHas1 = getURlParams(queryString);
  const objHas2 = getHashUrl(formatParts, urlMatch);

  const ObjHash = { ...objHas1, ...objHas2 };

  console.log('ObjHash Ready!', ObjHash);
}
