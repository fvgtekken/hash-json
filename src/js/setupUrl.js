const getUrlParams = (queryString) => {
  const ObjHash = {};

  const queryParams = new URLSearchParams(queryString);
  queryParams.forEach((value, key) => {
    ObjHash[key] = value;
  });

  return ObjHash;
};

const getHashUrl = (formatParts, urlMatch) => {
  const ObjHash = {};

  for (const [index, part] of formatParts.entries()) {
    let sPart = part.includes(':') ? part : undefined;

    if (sPart) {
      sPart = sPart.substring(1);
      ObjHash[sPart] = urlMatch[index];
    }
  }
  return ObjHash;
};

export function setupUrl(objParams) {
  const { urlFormat, urlInstance, eleButton, eleContent } = objParams;

  eleButton.addEventListener('click', (e) => {
    //console.log('give me the solution');

    const formatParts = urlFormat.split('/');
    let [urlMatch, queryString] = urlInstance.split('?');
    urlMatch = urlMatch.split('/');

    const objHas1 = getUrlParams(queryString);
    const objHas2 = getHashUrl(formatParts, urlMatch);

    const ObjHash = { ...objHas1, ...objHas2 };
    const content = JSON.stringify(ObjHash);
    eleContent.innerHTML = `<p class="pSolution">${content}</p>`;

    console.log('ObjHash Ready!', ObjHash, eleContent);
  });
}
//
