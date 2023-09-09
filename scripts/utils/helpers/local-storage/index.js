
export const
  /** Такой же prefix как на платформе */
  PREFIX = 'Osnova-',
  PARTNER_STORAGE_NAME = 'PartnerCode';

/**
 * Сохранить промо код в LS
 * @param {text} partnerCode - Partner code from pathname
 */
export const setPartnerCodeLS = (partnerCode) => {
  setLS(PARTNER_STORAGE_NAME, partnerCode);
}


export const setLS = (storageName, data) => {
  if (! storageName || ! data) return
  
  localStorage.setItem(PREFIX + storageName, JSON.stringify(data));
};
