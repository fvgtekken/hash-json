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

export function setupUrl(objParams) {
  const { urlFormat, urlInstance, eleButton, eleContent } = objParams;

  eleButton.addEventListener('click', (e) => {
    console.log('give me the solution');

    const formatParts = urlFormat.split('/');
    let [urlMatch, queryString] = urlInstance.split('?');
    urlMatch = urlMatch.split('/');

    const objHas1 = getURlParams(queryString);
    const objHas2 = getHashUrl(formatParts, urlMatch);

    const ObjHash = { ...objHas1, ...objHas2 };
    const content = JSON.stringify(ObjHash);
    eleContent.innerHTML = `<p class="pSolution">${content}</p>`;

    console.log('ObjHash Ready!', ObjHash, eleContent);
  });
}
//
