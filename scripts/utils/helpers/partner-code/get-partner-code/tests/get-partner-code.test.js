const { getPartnerCode } = require('../index.js');


describe('getPartnerCode', () => {
  // Prepare
  // Object.defineProperty(window, 'location', {
  //   value: {
  //     search: ''
  //   },
  //   writable: true,
  // });
  
  // afterEach(() => {
  //   window.location.search = '';
  // });


  // Start
  it('Partner code is present', () => {
    // window.location.search = '?p=azbuka';
    expect(getPartnerCode('?p=azbuka')).toBe('azbuka');
  });

  it('Partner code is absent', () => {
    expect(getPartnerCode()).toBe('');
  });

  it('In search not Partner code', () => {
    // window.location.search = '?n=azbuka';
    expect(getPartnerCode('?n=azbuka')).toBe('');
  });

  it('Search is empty = ?', () => {
    // window.location.search = '?';
    expect(getPartnerCode('?')).toBe('');
  });

});

// npm run test:unit get-partner-code.test.js
