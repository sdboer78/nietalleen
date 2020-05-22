import { slugify } from '~/utils/slugify'

export default async function ({ store, route, query, params, app, redirect }) {
  const slugFromUrl = slugify(params.city)

  // make sure we have the cities available in the store
  await store.dispatch('cities/fetchCities')

  // see if we know a city that includes the value the user entered into the url
  const citySlugs = store.state.cities.list.map(city => slugify(city))
  const matchingCities = citySlugs.filter(citySlug => citySlug.includes(slugFromUrl))

  // no city found
  if (matchingCities.length === 0) {
    const defaultPage = app.router.resolve({
      name: route.name
    })
    return redirect(defaultPage?.href)
  }

  // slug in URL has a typo
  if (matchingCities.length !== 0 && matchingCities[0] !== slugFromUrl) {
    const correctPath = app.router.resolve({
      name: route.name,
      params: { city: matchingCities[0] }
    })
    return redirect(correctPath?.href)
  }
}
