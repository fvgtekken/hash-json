/*

'/:version/api/:collection/:id'
'/6/api/listings/3?sort=desc&limit=10'

Result:
{
  version: 6,
  collection: 'listings',
  id: 3,
  sort: 'desc',
  limit: 10
}
*/

export function setupUrl2() {
  const parseUrl = (urlFormat, urlInstance) => {
    const formatParts = urlFormat.split('/');
    const urlParts = urlInstance.split('/');
    const params = {};

    for (let i = 0; i < formatParts.length; i++) {
      const formatPart = formatParts[i];
      const urlPart = urlParts[i];

      if (formatPart.startsWith(':')) {
        const paramName = formatPart.slice(1);
        params[paramName] = urlPart;
      }
    }

    // Procesar el último segmento de la URL para separar el ID y los parámetros de consulta
    const lastUrlPart = urlParts[urlParts.length - 1];
    const [idPart, queryString] = lastUrlPart.split('?');
    params['id'] = idPart;

    if (queryString) {
      const queryParams = new URLSearchParams(queryString);
      queryParams.forEach((value, key) => {
        params[key] = value;
      });
    }

    return params;
  };

  // Ejemplo de uso:
  const urlFormat = '/:version/api/:collection/:id';
  const urlInstance = '/6/api/listings/3?sort=desc&limit=10';

  const parsedParams = parseUrl(urlFormat, urlInstance);
  console.log(parsedParams);
}
