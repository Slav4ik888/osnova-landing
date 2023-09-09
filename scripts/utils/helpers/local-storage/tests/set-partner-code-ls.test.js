const { setPartnerCodeLS, PREFIX, PARTNER_STORAGE_NAME } = require('../index.js');

const PARTNER = 'VALID-CODE';

/** Clear local storage from last values */
const clearLS = () => localStorage.removeItem(PREFIX + PARTNER_STORAGE_NAME);


describe('setPartnerCodeLS', () => {
  it('Partner code is present', () => {
    setPartnerCodeLS(PARTNER);
   
    const data = localStorage.getItem(PREFIX + PARTNER_STORAGE_NAME);
    let result;

    if (data) result = JSON.parse(data);
    
    expect(result).toBe(PARTNER);

    clearLS();
  });

  it('Partner code is undefined', () => {
    setPartnerCodeLS(undefined);
   
    const data = localStorage.getItem(PREFIX + PARTNER_STORAGE_NAME);
    let result;

    if (data) result = JSON.parse(data);
    
    expect(result).toBe(undefined);
    clearLS();
  });
});
