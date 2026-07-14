import type { Publication } from '../types'

const parseDate = (value?: string) => {
  if (!value) return Number.NaN
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? Number.NaN : timestamp
}

const fallbackTimestamp = (publication: Publication) => {
  const month = Math.min(12, Math.max(1, Number.parseInt(publication.month ?? '1', 10) || 1))
  return Date.UTC(publication.year, month - 1, 1)
}

const publicationTimestamp = (publication: Publication) => {
  const date = publication.status === 'preprint'
    ? publication.preprintDate ?? publication.acceptanceDate
    : publication.acceptanceDate ?? publication.preprintDate
  const timestamp = parseDate(date)
  return Number.isNaN(timestamp) ? fallbackTimestamp(publication) : timestamp
}

export const sortPublications = (a: Publication, b: Publication) => {
  const aIsPreprint = a.status === 'preprint'
  const bIsPreprint = b.status === 'preprint'

  if (aIsPreprint !== bIsPreprint) return aIsPreprint ? -1 : 1

  const dateDifference = publicationTimestamp(b) - publicationTimestamp(a)
  if (dateDifference !== 0) return dateDifference

  return a.title.localeCompare(b.title)
}
