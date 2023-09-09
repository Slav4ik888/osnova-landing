/**
 * Возвращает код партнёра из адресной строки
 */
export const getPartnerCode = () => {
  const
    search = window.location.search,
    split = search?.split('=') || [],
    isPartnerCode = split[0]?.slice(1) === 'p',
    partnerCode = isPartnerCode
      ? split?.[1] ? split?.[1] : ''
      : '';
  
  return partnerCode
}
