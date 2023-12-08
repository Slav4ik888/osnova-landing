/**
 * v.2023-09-09
 * Возвращает код партнёра из адресной строки
 */
export const getPartnerCode = (search) => {
  const
    split = search?.split('=') || [],
    isPartnerCode = split[0]?.slice(1) === 'p',
    partnerCode = isPartnerCode
      ? split?.[1] ? split?.[1] : ''
      : '';
  
  return partnerCode
}
