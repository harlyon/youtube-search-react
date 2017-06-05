// [] safe get url data from db
// [] implement boolean logic for if we have/don't have
//    the url in the database. ex: if we have, return shortUrl
//    else, create new shortUrl, save it, then return it
import _ from 'ramda'
import Result from 'folktale/data/result'

/* eslint-disable */
const match = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
/* eslint-enable */

/* chain :: (ObjectA -> ObjectB), M -> ObjectB
const chain = _.curry((fn, container) =>
  container.chain(fn)) */

// getRequestParams :: Object -> String
const getRequestParams = req => _.prop('params', req)

// validate :: RegEx -> String -> Boolean
const validate = _.curry((pattern, str) => pattern.test(str))

const validateUrl = _.curry(url => {
  return validate(match, url)
  ? Result.Ok(url) : Result.Error('Invalid Url')
})

// isUrlValid :: Object -> Boolean
const shortenedUrl = _.compose(
  validateUrl,
  _.head,
  getRequestParams
)

export default (req, res) => {
  const response = shortenedUrl(req).merge()
  return res.render('response', { title: 'Response Page', response })
}
